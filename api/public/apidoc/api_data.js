define({ "api": [
  {
    "type": "post",
    "url": "/api/auth/change_password",
    "title": "API change password",
    "group": "Authentication_API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "old_password",
            "description": "<p>Old_password of user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_password",
            "description": "<p>New_password of user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n    'username': admin,\n    'old_password': admin,\n    'new_password': admin1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>Successfully change user's password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    success: true,\n    reason: \"Success in changing password of admin\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "False to connect to database",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        },
        {
          "title": "If wrong username/password",
          "content": "{\n    success: false,\n    reason: 'Wrong username/password'\n}",
          "type": "json"
        },
        {
          "title": "Error while querying into database",
          "content": "{\n    success: false,\n    reason: 'failure in adding username and password to authorization database'\n}",
          "type": "json"
        },
        {
          "title": "If account does not exist",
          "content": "{\n    success: false,\n    reason: 'Account does not exist!'\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://localhost:3000/api/auth/change_password?token={$TOKEN}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "./route/authRoute.js",
    "groupTitle": "Authentication_API",
    "name": "PostApiAuthChange_password"
  },
  {
    "type": "post",
    "url": "/api/auth/login",
    "title": "API process login request from client",
    "group": "Authentication_API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n    username: 'admin',\n    password: 'admin',\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>Successfully register new user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Username of user after successfully login</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User's JWT token generate after successfully login</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expires",
            "description": "<p>token's expiration</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    success: true,\n    name: admin,\n    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYWQiLCJpYXQiOjE1NDAzNzEyNTcsImV4cCI6MTU0MDQ1NzY1N30.-3GriBVZ29xLZDFrmo5ErqsjhUchqhzoDGqqqawUhik',\n    expires: '24h'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "False to connect to database",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        },
        {
          "title": "If wrong username/password",
          "content": "{\n    success: false,\n    reason: 'Wrong username/password'\n}",
          "type": "json"
        },
        {
          "title": "Error while querying into database",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://localhost:3000/api/auth/login",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "./route/authRoute.js",
    "groupTitle": "Authentication_API",
    "name": "PostApiAuthLogin"
  },
  {
    "type": "post",
    "url": "/api/auth/register",
    "title": "API register new user",
    "group": "Authentication_API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of new user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of new user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of new user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>fullname of user</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isRoot",
            "description": "<p>Default is 'F' - False</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Birthday of user</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "phone_number",
            "description": "<p>Phone number of user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n    username: admin,\n    password: admin,\n    fullname: 'admin user'\n\n    birthday, email, phone_nnumber is not mandatory\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>Successfully register new user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    success: true,\n    reason: \"Success in creating account admin\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "False to connect to database",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        },
        {
          "title": "If username is already existed in the database",
          "content": "{\n    success: false,\n    reason: 'This username is already existed!!'\n}",
          "type": "json"
        },
        {
          "title": "Error while querying into database",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://localhost:3000/api/auth/register",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "./route/authRoute.js",
    "groupTitle": "Authentication_API",
    "name": "PostApiAuthRegister"
  },
  {
    "type": "post",
    "url": "/api/command",
    "title": "API to send ON/OFF signals to devices",
    "group": "Control_API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>user's token provided after successfully login</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_home",
            "description": "<p>user's Home id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "room_name",
            "description": "<p>user's Room name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_type",
            "description": "<p>Device type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_device",
            "description": "<p>Device unique identification</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "level",
            "description": "<p>Illuminance level</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "status_code",
            "description": "<p>On/Off code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n    id_home: 1,\n    room_name: 'bedroom192',\n    device_type: 'lighting_device',\n    id_device: {MAC_ADDRESS},\n    switch_code: 1,\n    level: 75,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    success: true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Time out connecting to broker",
          "content": "{\n    success: false,\n    reason: 'Time out'\n}",
          "type": "json"
        },
        {
          "title": "Error while subscribing into topic MQTT Broker",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        },
        {
          "title": "If error while changing status code",
          "content": "{\n    success: false,\n    reason: 'failure in changing status code'\n}",
          "type": "json"
        },
        {
          "title": "If error while publishing into MQTT Broker",
          "content": "{\n    success: false,\n    reason: 'failure in publishing command to mqtt broker'\n}",
          "type": "json"
        },
        {
          "title": "Other err",
          "content": "{\n    success: false,\n    reason: error\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://localhost:3000/api/data/command?token={$TOKEN}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "./route/apiRoute.js",
    "groupTitle": "Control_API",
    "name": "PostApiCommand"
  },
  {
    "type": "post",
    "url": "/api/command",
    "title": "API to send ON/OFF signals to devices",
    "group": "Control_API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>user's token provided after successfully login</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_home",
            "description": "<p>user's Home id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "room_id",
            "description": "<p>user's Room id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_type",
            "description": "<p>Device type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_device",
            "description": "<p>Device unique identification</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n    home_id: 1,\n    room_id: 'bedroom192',\n    device_type: 'lighting_device',\n    id_device: {MAC_ADDRESS}\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    success: true,\n    reason: \"Success in adding device 1 to room 1\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "False to connect to database",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        },
        {
          "title": "Error while querying into database",
          "content": "{\n    success: false,\n    reason: 'failure in adding username and password to authorization database'\n}",
          "type": "json"
        },
        {
          "title": "If home does not belong to user",
          "content": "{\n    success: false,\n    reason: 'Home does not belong to the user'\n}",
          "type": "json"
        },
        {
          "title": "If room does not belong to home",
          "content": "{\n    success: false,\n    reason: 'Room does not belong to this home'\n} * @apiErrorExample {json} Other err\n{\n    success: false,\n    reason: error\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://localhost:3000/api/data/command?token={$TOKEN}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "./route/apiRoute.js",
    "groupTitle": "Control_API",
    "name": "PostApiCommand"
  },
  {
    "type": "get",
    "url": "/api/data/home/:id_home/room/:id_room/device_type/:device_type/device_id/:id_device/type/db",
    "title": "API get parameter of a device from database (Similar to Illuminance Sensor)",
    "group": "Data_API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>user's token provided after successfully login</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_home",
            "description": "<p>user's Home id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_room",
            "description": "<p>user's Room id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "device_type",
            "description": "<p>Device type</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_device",
            "description": "<p>Device unique identification</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_duration",
            "description": "<p>Start range of query time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_duration",
            "description": "<p>End range of query time</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    success: true,\n    data2:[\n        {\n            id: 1,\n            illuminance_level: 75,\n            status: 1,\n            power_usage: 5,\n            mac_address: '84:f3:eb:0e:2b:85-1'\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "False to connect to database",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        },
        {
          "title": "Error while querying into database",
          "content": "{\n    success: false,\n    reason: 'failure in adding username and password to authorization database'\n}",
          "type": "json"
        },
        {
          "title": "If home does not belong to user",
          "content": "{\n    success: false,\n    reason: 'Home does not belong to the user'\n}",
          "type": "json"
        },
        {
          "title": "If room does not belong to home",
          "content": "{\n    success: false,\n    reason: 'Room does not belong to this home'\n}",
          "type": "json"
        },
        {
          "title": "If device does not belong to room/home",
          "content": "{\n    success: false,\n    reason: 'Device does not belong to this home/room'\n}",
          "type": "json"
        },
        {
          "title": "Other err",
          "content": "{\n    success: false,\n    reason: error\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://localhost:3000/api/data/home/3/room/1/device_type/device_lighting/device_id/84:f3:eb:0e:2b:85-1/type/db?token={$TOKEN}&&start_duration=2018-10-15 00:00:00&&end_duration=2018-10-15 23:59:00\nhttp://localhost:3000/api/data/home/3/room/1/device_type/device_illuminance_sensor/device_id/84:f3:eb:0e:2b:85-1/type/db?token={$TOKEN}&&start_duration=2018-10-15 00:00:00&&end_duration=2018-10-15 23:59:00",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "./route/apiRoute.js",
    "groupTitle": "Data_API",
    "name": "GetApiDataHomeId_homeRoomId_roomDevice_typeDevice_typeDevice_idId_deviceTypeDb"
  },
  {
    "type": "get",
    "url": "/api/data/home/:id_home/room/:room_name/device_type/:device_type/device_id/:id_device/type/broker",
    "title": "API get parameter of a device from broker",
    "group": "Data_API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>user's token provided after successfully login</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_home",
            "description": "<p>user's Home id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "room_name",
            "description": "<p>user's Room name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_type",
            "description": "<p>Device type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_device",
            "description": "<p>Device unique identification</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    success: true,\n    mac_ipnode: '84:f3:eb:0e:2b:85-1',\n    operation_status: 'On',\n    medium_capacity: 64,3434,\n    coming_time: '23-10-2018 19:20:21'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Time out connecting to broker",
          "content": "{\n    success: false,\n    reason: 'Time out'\n}",
          "type": "json"
        },
        {
          "title": "Error while subscribing into topic MQTT Broker",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        },
        {
          "title": "Other err",
          "content": "{\n    success: false,\n    reason: error\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://localhost:3000/api/data/home/3/room/bedroom/device_type/lighting_device/device_id/b4:e6:2d:28:e6:9f-1/type/broker?token={$TOKEN}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "./route/apiRoute.js",
    "groupTitle": "Data_API",
    "name": "GetApiDataHomeId_homeRoomRoom_nameDevice_typeDevice_typeDevice_idId_deviceTypeBroker"
  },
  {
    "type": "get",
    "url": "/api/unregisteredDevice/:device_type",
    "title": "API to send ON/OFF signals to devices",
    "group": "Data_API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>user's token provided after successfully login</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_type",
            "description": "<p>Device type</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    success: true,\n    data: [{\n        device_id: 1,\n        room_id: 1,\n        device_name: abc,\n        mac_address: avcxvvsd,\n        location: home\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "False to connect to database",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        },
        {
          "title": "Error while querying into database",
          "content": "{\n    success: false,\n    reason: 'failure in adding username and password to authorization database'\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://localhost:3000/api/data/unregisteredDevice/device_lighting?token={$TOKEN}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "./route/apiRoute.js",
    "groupTitle": "Data_API",
    "name": "GetApiUnregistereddeviceDevice_type"
  },
  {
    "type": "get",
    "url": "/api/data/home/:id_home/room/:id_room/device_type/:device_type",
    "title": "APi get device list in each room",
    "group": "Device_API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>user's token provided after successfully login</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_home",
            "description": "<p>user's Home id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_room",
            "description": "<p>user's Room id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mac_ipnode",
            "description": "<p>Device unique identification</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "device_type",
            "description": "<p>Device type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    success: true,\n    data:[\n        {\n            device_id: 1,\n            device_name: 'test',\n            mac_address: '84:f3:eb:0e:2b:85-1',\n            location: 'abcxyz'\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "False to connect to database",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        },
        {
          "title": "Error while querying into database",
          "content": "{\n    success: false,\n    reason: 'failure in adding username and password to authorization database'\n}",
          "type": "json"
        },
        {
          "title": "If home does not belong to user",
          "content": "{\n    success: false,\n    reason: 'Home does not belong to the user'\n}",
          "type": "json"
        },
        {
          "title": "If room does not belong to home",
          "content": "{\n    success: false,\n    reason: 'Room does not belong to this home'\n}",
          "type": "json"
        },
        {
          "title": "Other err",
          "content": "{\n    success: false,\n    reason: error\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://localhost:3000/api/data/home/3/room/1/device_type/device_lighting?token={$TOKEN}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "./route/apiRoute.js",
    "groupTitle": "Device_API",
    "name": "GetApiDataHomeId_homeRoomId_roomDevice_typeDevice_type"
  },
  {
    "type": "post",
    "url": "/api/modify/add_device",
    "title": "API to delete device",
    "group": "Device_API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token of currently login user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "room_id",
            "description": "<p>room id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "home_id",
            "description": "<p>House owner's Home id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "device_id",
            "description": "<p>Device id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_type",
            "description": "<p>Type of device</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n    home_id: 1,\n    room_id: 1,\n    device_id: 2,\n    device_type: device_lighting\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>Successfully register new user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    success: true,\n    reason: \"Success in adding device abc into room xyz\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "False to connect to database",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        },
        {
          "title": "If home does not exist/belong to this account",
          "content": "{\n    success: false,\n    reason: 'Home does not belong to this account'\n}",
          "type": "json"
        },
        {
          "title": "If room does not exist/belong to this home",
          "content": "{\n    success: false,\n    reason: 'Room does not belong to this home'\n}",
          "type": "json"
        },
        {
          "title": "If device does not exist/belong to this room",
          "content": "{\n    success: false,\n    reason: 'Device does not belong to this room'\n}",
          "type": "json"
        },
        {
          "title": "Error while querying into database",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        },
        {
          "title": "Insufficient privilege",
          "content": "{\n    success: false,\n    reason: 'Only administrator can add new house into your account.'\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://localhost:3000/api/modify/add_device?token={$TOKEN}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "./route/modRoute.js",
    "groupTitle": "Device_API",
    "name": "PostApiModifyAdd_device"
  },
  {
    "type": "post",
    "url": "/api/modify/delete_device",
    "title": "API to delete device",
    "group": "Device_API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token of currently login user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "room_id",
            "description": "<p>room id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "home_id",
            "description": "<p>House owner's Home id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "device_id",
            "description": "<p>Device id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_type",
            "description": "<p>Type of device</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n    home_id: 1,\n    room_id: 1,\n    device_id: 2,\n    device_type: device_lighting\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>Successfully register new user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    success: true,\n    reason: \"Success in deleting device abc\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "False to connect to database",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        },
        {
          "title": "If home does not exist/belong to this account",
          "content": "{\n    success: false,\n    reason: 'Home does not belong to this account'\n}",
          "type": "json"
        },
        {
          "title": "If room does not exist/belong to this home",
          "content": "{\n    success: false,\n    reason: 'Room does not belong to this home'\n}",
          "type": "json"
        },
        {
          "title": "If device does not exist/belong to this room",
          "content": "{\n    success: false,\n    reason: 'Device does not belong to this room'\n}",
          "type": "json"
        },
        {
          "title": "Error while querying into database",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        },
        {
          "title": "Insufficient privilege",
          "content": "{\n    success: false,\n    reason: 'Only administrator can add new house into your account.'\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://localhost:3000/api/modify/delete_device?token={$TOKEN}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "./route/modRoute.js",
    "groupTitle": "Device_API",
    "name": "PostApiModifyDelete_device"
  },
  {
    "type": "get",
    "url": "/api/data/",
    "title": "APi get list of home based belong to user",
    "group": "Home_API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>user's token provided after successfully login</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "home_id",
            "description": "<p>User's home id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    success: true,\n    data: [\n        {\n            home_id: 1\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "False to connect to database",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        },
        {
          "title": "Error while querying into database",
          "content": "{\n    success: false,\n    reason: 'failure in adding username and password to authorization database'\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://localhost:3000/api/data?token={$TOKEN}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "./route/apiRoute.js",
    "groupTitle": "Home_API",
    "name": "GetApiData"
  },
  {
    "type": "post",
    "url": "/api/modify/add_home",
    "title": "API to add home",
    "group": "Home_API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token of currently login user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "house_owner",
            "description": "<p>House owner's username</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n    house_owner: user1,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "{\n    success: true,\n    home_id: 11,\n    user_id: 5\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "False to connect to database",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        },
        {
          "title": "If username does not exist in the database",
          "content": "{\n    success: false,\n    reason: 'Username does not exist!'\n}",
          "type": "json"
        },
        {
          "title": "Error while querying into database",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        },
        {
          "title": "Insufficient privilege",
          "content": "{\n    success: false,\n    reason: 'Only administrator can add new house into your account.'\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://localhost:3000/api/modify/add_home?token={$TOKEN}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "./route/modRoute.js",
    "groupTitle": "Home_API",
    "name": "PostApiModifyAdd_home"
  },
  {
    "type": "post",
    "url": "/api/modify/delete_home",
    "title": "API to delete home",
    "group": "Home_API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token of currently login user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "house_owner",
            "description": "<p>House_owner name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "home_id",
            "description": "<p>House owner's Home id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n    house_owner: user1,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>Successfully register new user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    success: true,\n    reason: \"Success in deleting home 1\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "False to connect to database",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        },
        {
          "title": "If home does not exist to this account",
          "content": "{\n    success: false,\n    reason: 'Home does not belong to this account'\n}",
          "type": "json"
        },
        {
          "title": "Error while querying into database",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        },
        {
          "title": "Insufficient privilege",
          "content": "{\n    success: false,\n    reason: 'Only administrator can add new house into your account.'\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://localhost:3000/api/modify/delete_home?token={$TOKEN}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "./route/modRoute.js",
    "groupTitle": "Home_API",
    "name": "PostApiModifyDelete_home"
  },
  {
    "type": "get",
    "url": "/api/data/home/:id_home",
    "title": "API get list of room in a house",
    "group": "Room_API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>user's token provided after successfully login</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id_home",
            "description": "<p>user's Home id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "room_id",
            "description": "<p>User's room id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "room_name",
            "description": "<p>User's room name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    success: true,\n    data:[\n        {\n            room_id: 1,\n            room_name: 'bedroom'\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "False to connect to database",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        },
        {
          "title": "Error while querying into database",
          "content": "{\n    success: false,\n    reason: 'failure in adding username and password to authorization database'\n}",
          "type": "json"
        },
        {
          "title": "If home does not belong to user",
          "content": "{\n    success: false,\n    reason: 'Home does not belong to the user'\n}",
          "type": "json"
        },
        {
          "title": "Other err",
          "content": "{\n    success: false,\n    reason: error\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://localhost:3000/api/data/home/3?token={$TOKEN}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "./route/apiRoute.js",
    "groupTitle": "Room_API",
    "name": "GetApiDataHomeId_home"
  },
  {
    "type": "post",
    "url": "/api/modify/add_room",
    "title": "API to add room",
    "group": "Room_API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token of currently login user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "room_name",
            "description": "<p>House's owner room name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "home_id",
            "description": "<p>House owner's Home id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n    home_id: user1\n    room_name: 'test'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>Successfully register new user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    success: true,\n    reason: \"Success in adding room 1\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "False to connect to database",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        },
        {
          "title": "If home does not exist to this account",
          "content": "{\n    success: false,\n    reason: 'Home does not belong to this account'\n}",
          "type": "json"
        },
        {
          "title": "If room does not exist to this home",
          "content": "{\n    success: false,\n    reason: 'Room does not belong to this home'\n}",
          "type": "json"
        },
        {
          "title": "Error while querying into database",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        },
        {
          "title": "Insufficient privilege",
          "content": "{\n    success: false,\n    reason: 'Only administrator can add new house into your account.'\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://localhost:3000/api/modify/add_room?token={$TOKEN}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "./route/modRoute.js",
    "groupTitle": "Room_API",
    "name": "PostApiModifyAdd_room"
  },
  {
    "type": "post",
    "url": "/api/modify/delete_room",
    "title": "API to delete room",
    "group": "Room_API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token of currently login user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "room_id",
            "description": "<p>room id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "home_id",
            "description": "<p>House owner's Home id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n    home_id: 1,\n    room_id: 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>Successfully register new user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n    success: true,\n    reason: \"Success in deleting room 1\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "False to connect to database",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        },
        {
          "title": "If home does not exist/belong to this account",
          "content": "{\n    success: false,\n    reason: 'Home does not belong to this account'\n}",
          "type": "json"
        },
        {
          "title": "If room does not exist/belong to this home",
          "content": "{\n    success: false,\n    reason: 'Room does not belong to this home'\n}",
          "type": "json"
        },
        {
          "title": "Error while querying into database",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        },
        {
          "title": "Insufficient privilege",
          "content": "{\n    success: false,\n    reason: 'Only administrator can add new house into your account.'\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://localhost:3000/api/modify/delete_room?token={$TOKEN}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "./route/modRoute.js",
    "groupTitle": "Room_API",
    "name": "PostApiModifyDelete_room"
  },
  {
    "type": "get",
    "url": "/api/users/info",
    "title": "API get number of home, device, room,... belong to user",
    "group": "User_API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>user's token provided after successfully login</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success for normal user",
          "content": "}\n    success: true,\n    numberOfHome: 1,\n    numberOfRoom: 2,\n    numberOfDevice: 3\n}",
          "type": "json"
        },
        {
          "title": "Success for normal user",
          "content": "}\n    success: true,\n    numberOfHome: 1,\n    numberOfRoom: 2,\n    numberOfDevice: 3,\n    numberOfUser: 4\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "False to connect to database",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        },
        {
          "title": "If username does not exist",
          "content": "{\n    success: false,\n    reason: 'Username does not exist!!'\n}",
          "type": "json"
        },
        {
          "title": "Error while querying into database",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://localhost:3000/api/users/info?token={$TOKEN}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "./route/userRoute.js",
    "groupTitle": "User_API",
    "name": "GetApiUsersInfo"
  },
  {
    "type": "get",
    "url": "/api/users/list_user",
    "title": "API get list of user - For Admin only",
    "group": "User_API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>user's token provided after successfully login</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success for normal user",
          "content": "}\n    success: true,\n    data: [{\n        user_id: 1,\n        username: abc,\n        fullname: abc,\n        email: abc@localhost,\n        phone_number: 123456,\n        birthday: 11/11/1990\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "False to connect to database",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        },
        {
          "title": "If username does not exist",
          "content": "{\n    success: false,\n    reason: 'Username does not exist!!'\n}",
          "type": "json"
        },
        {
          "title": "Error while querying into database",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://localhost:3000/api/users/list_user?token={$TOKEN}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "./route/userRoute.js",
    "groupTitle": "User_API",
    "name": "GetApiUsersList_user"
  },
  {
    "type": "post",
    "url": "/api/users",
    "title": "API get information about user",
    "group": "User_API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>user's token provided after successfully login</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "defaultValue": "true",
            "description": "<p>Successfully register new user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>User's fullname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "birthday",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "isRoot",
            "description": "<p>User's privilege</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n \"success\": true,\n  \"data\": [\n      {\n         \"fullname\": \"Root User\",\n          \"email\": \"root@localhost\",\n          \"phone_number\": \"0353151669\",\n          \"birthday\": null,\n          \"isRoot\": \"root\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "False to connect to database",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        },
        {
          "title": "If username does not exist",
          "content": "{\n    success: false,\n    reason: 'Username does not exist!!'\n}",
          "type": "json"
        },
        {
          "title": "Error while querying into database",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://localhost:3000/api/users?token={$TOKEN}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "./route/userRoute.js",
    "groupTitle": "User_API",
    "name": "PostApiUsers"
  },
  {
    "type": "post",
    "url": "/api/users/delete_user",
    "title": "API delete user",
    "group": "User_API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>user's token provided after successfully login</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_delete",
            "description": "<p>username to delete</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "}\n    success: true,\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "False to connect to database",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        },
        {
          "title": "If username does not exist",
          "content": "{\n    success: false,\n    reason: 'Username does not exist!!'\n}",
          "type": "json"
        },
        {
          "title": "Error while querying into database",
          "content": "{\n    success: false,\n    reason: err\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example URL:",
        "content": "http://localhost:3000/api/users/delete_user?token={$TOKEN}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "./route/userRoute.js",
    "groupTitle": "User_API",
    "name": "PostApiUsersDelete_user"
  }
] });
