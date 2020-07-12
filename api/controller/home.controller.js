const express = require('express');
const bodyParser = require('body-parser');
const db = require('../config/db_connection.js');
const func = require('./function');
const formidable = require('formidable');
const app = express();
const {
    cv,
    drawRect
} = require('./utils');
const fs = require('fs');
const path = require('path');
const classNames = require('./dnnCocoClassNames');
const { extractResults } = require('./dnn/ssdUtils');

// replace with path where you unzipped inception model
const ssdcocoModelPath = './controller/data/dnn/coco/SSD_300x300';

const prototxt = path.resolve(ssdcocoModelPath, 'deploy.prototxt');
const modelFile = path.resolve(ssdcocoModelPath, 'VGG_coco_SSD_300x300_iter_400000.caffemodel');

if (!fs.existsSync(prototxt) || !fs.existsSync(modelFile)) {
    console.log('could not find ssdcoco model');
    console.log('download the model from: https://drive.google.com/file/d/0BzKzrI_SkD1_dUY1Ml9GRTFpUWc/view');
    throw new Error('exiting: could not find ssdcoco model');
}

// initialize ssdcoco model from prototxt and modelFile
const net = cv.readNetFromCaffe(prototxt, modelFile);

function classifyImg(img) {
    // ssdcoco model works with 300 x 300 images
    const imgResized = img.resize(300, 300);

    // network accepts blobs as input
    const inputBlob = cv.blobFromImage(imgResized);
    net.setInput(inputBlob);

    // forward pass input through entire network, will return
    // classification result as 1x1xNxM Mat
    let outputBlob = net.forward();
    // extract NxM Mat
    outputBlob = outputBlob.flattenFloat(outputBlob.sizes[2], outputBlob.sizes[3]);

    return extractResults(outputBlob, img)
        .map(r => Object.assign({}, r, { className: classNames[r.classLabel] }));
}

const makeDrawClassDetections = predictions => (drawImg, className, getColor, thickness = 2) => {
    predictions
        .forEach(p => drawRect(drawImg, p.rect, getColor(), { thickness }));
    predictions
        .forEach(p => drawImg.putText(p.className, new cv.Point2(p.rect.x, p.rect.y), cv.FONT_HERSHEY_SIMPLEX, 1, new cv.Vec3(0, 255, 255), 2));
    return drawImg;
};


const runDetectPeopleExample = (img) => {
    const minConfidence = 0.4;

    const predictions = classifyImg(img).filter(res => res.confidence > minConfidence);
    let objects = [];
    for (let pred of predictions){
        if (pred['className'] === 'person') {
            continue;
        }
        objects.push(pred['className']);
    }
    const drawClassDetections = makeDrawClassDetections(predictions);

    const getRandomColor = () => new cv.Vec(Math.random() * 255, Math.random() * 255, 255);

    drawClassDetections(img, 'car', getRandomColor);
    //cv.imshowWait('img', img);
    cv.imwrite('D:\\Informatics\\IoT\\Project\\SmartLighting\\Web\\smartlight-web\\public\\img.png', img);
    return [img, objects];
};


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let uploadImage = (req, res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var oldpath = files.media.path;
        var newpath = 'C:/Users/Admin/' + files.media.name;
        console.log(newpath);
        fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;
            let result = runDetectPeopleExample(cv.imread(newpath));
            let img = result[0], objects = result[1];
            console.log(objects)
            res.json({
                'success': true,
                'image': img,
                'object': objects
            });
            res.end();
        });
    });
}

let adminGetHomeList = (req, res) => {
    let username = req.decoded.data;
    let usernameTogGet = req.body.usernameToGet;

    const queryDB = "SELECT h.home_id AS home_id, h.home_name AS home_name, a.username AS username FROM home AS h INNER JOIN account AS a ON h.user_id = a.user_id WHERE a.username = ?";

    func.checkIsRoot(username).then(result => {
        if(result === true){
            db.getConnection((err, conn) => {
                if(err){
                    res.json({
                        success: false,
                        reason: err
                    });
                }

                conn.query(queryDB, [usernameTogGet],(err, data) => {
                    console.log(data)
                    conn.release();
                    if(err){
                        res.json({
                            success: false,
                            reason: err
                        });
                    }

                    else{
                        res.json({
                            success: true,
                            data
                        });
                    }
                });
            });
        }
        else{
            res.json({
                success: false,
                reason: 'Unauthorized Access'
            });
        }
    }).catch(error => {
        res.json({
            success: false,
            reason: error
        })
    });
};

/*
Checked
 */

let getHomeList = (req, res) => {
    let username = req.decoded.data;

    const queryDB = "SELECT h.home_id AS home_id, h.home_name AS home_name, a.username AS username FROM home AS h INNER JOIN account AS a ON h.user_id = a.user_id WHERE a.username = ?";

    db.getConnection((err, conn) => {
        if(err){
            res.json({
                success: false,
                reason: err
            });
        }

        conn.query(queryDB, [username],(err, data) => {
            conn.release();
            console.log(data)
            if(err){
                res.json({
                    success: false,
                    reason: err
                });
            }

            else{
                res.json({
                    success: true,
                    data
                });
            }
        });
    });
};

/*
Checked
 */

let addHome = (req, res) => {
    let username = req.decoded.data;
    let usernameToAdd = req.body.house_owner;

    const queryDB = "INSERT INTO home(user_id) VALUES(?)";
    const queryDB3 = "SELECT home_id FROM home WHERE user_id = ? ORDER BY home_id DESC LIMIT 1";

    func.checkIsRoot(username).then(fulfilled => {
        if(fulfilled === true){
            func.checkUsernameExist(usernameToAdd).then(result => {
                if(result !== null){
                    db.getConnection((err, conn) => {
                        if(err){
                            res.json({
                                success: false,
                                reason: err
                            });
                        }
                        else{
                            conn.query(queryDB, [result], (err) => {
                                if(err){
                                    res.json({
                                        success: false,
                                        reason: err
                                    });
                                }
                                else{
                                    conn.query(queryDB3, [result], (err, data3) => {
                                        conn.release();
                                        if(err){
                                            res.json({
                                                success: false,
                                                reason: err
                                            });
                                        }
                                        else{
                                            res.json({
                                                success: true,
                                                home_id: data3[0].home_id,
                                                user_id: result
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            }).catch(error => {
                res.json({
                    success: false,
                    reason: error
                });
            });
        }
        else{
            res.json({
                success: false,
                reason: "Only administrator can add new house into your account."
            });
        }
    }).catch(error => {
        res.json({
            success: false,
            reason: error
        });
    });
};

/*
Checked
 */

let deleteHome = (req, res) => {
    let username = req.decoded.data;
    let usernameToDelete = req.body.house_owner;
    let home_id = req.body.home_id;

    let queryDeleteHome = 'DELETE FROM home WHERE home_id = ?';

    func.checkIsRoot(username).then(fulfilled => {
        if(fulfilled === true) {
            func.checkHomeExistToUser(usernameToDelete, home_id).then(result => {
                if (result === true) {
                    db.getConnection((err, conn) => {
                        if (err) {
                            res.json({
                                success: false,
                                reason: err
                            });
                        }
                        else {
                            conn.query(queryDeleteHome, [home_id], (err) => {
                                conn.release();
                                if (err) {
                                    res.json({
                                        success: false,
                                        reason: err
                                    });
                                }
                                else {
                                    res.json({
                                        success: true,
                                        reason: "Success in deleting home_id " + home_id
                                    });
                                }
                            });
                        }
                    });
                }
                else {
                    res.json({
                        success: false,
                        reason: 'Home does not belong to this account'
                    });
                }
            }).catch(error => {
                res.json({
                    success: false,
                    reason: error
                });
            });
        }
        else{
            res.json({
                success: false,
                reason: "Only administrator can add new house into your account."
            });
        }
    }).catch(error => {
        res.json({
            success: false,
            reason: error
        });
    });
};

exports.getHomeList = getHomeList;
exports.addHome = addHome;
exports.deleteHome = deleteHome;
exports.adminGetHomeList = adminGetHomeList;
exports.uploadImage = uploadImage;