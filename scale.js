[
    {
        "id": "8583f18b.b0cb1",
        "type": "tab",
        "label": "Scale Calibration",
        "disabled": false,
        "info": ""
    },
    {
        "id": "bbdc42a7.a084f",
        "type": "tab",
        "label": "Scale Simulator",
        "disabled": false,
        "info": ""
    },
    {
        "id": "da8e39de.e1d908",
        "type": "tab",
        "label": "Weight with Temperature",
        "disabled": false,
        "info": ""
    },
    {
        "id": "94d5df00.4a558",
        "type": "tab",
        "label": "Weight with Temperature S5",
        "disabled": false,
        "info": ""
    },
    {
        "id": "3f7516e0.9e78fa",
        "type": "tab",
        "label": "Weight with Temperature S5",
        "disabled": false,
        "info": ""
    },
    {
        "id": "f9e16f47.45fd",
        "type": "tab",
        "label": "Flow 1",
        "disabled": false,
        "info": ""
    },
    {
        "id": "e6a4e4ea.0c8128",
        "type": "mqtt-broker",
        "name": "Calibration",
        "broker": "mqtt.hivespeak.tk",
        "port": "1883",
        "clientid": "",
        "usetls": false,
        "compatmode": false,
        "keepalive": "60",
        "cleansession": true,
        "birthTopic": "testTopic",
        "birthQos": "0",
        "birthPayload": "",
        "closeTopic": "",
        "closeQos": "0",
        "closePayload": "",
        "willTopic": "",
        "willQos": "0",
        "willPayload": ""
    },
    {
        "id": "85a5852b.2507f8",
        "type": "ui_base",
        "theme": {
            "name": "theme-dark",
            "lightTheme": {
                "default": "#0094CE",
                "baseColor": "#0094CE",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                "edited": true,
                "reset": false
            },
            "darkTheme": {
                "default": "#097479",
                "baseColor": "#097479",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                "edited": true,
                "reset": false
            },
            "customTheme": {
                "name": "Untitled Theme 1",
                "default": "#4B7930",
                "baseColor": "#4B7930",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif"
            },
            "themeState": {
                "base-color": {
                    "default": "#097479",
                    "value": "#097479",
                    "edited": false
                },
                "page-titlebar-backgroundColor": {
                    "value": "#097479",
                    "edited": false
                },
                "page-backgroundColor": {
                    "value": "#111111",
                    "edited": false
                },
                "page-sidebar-backgroundColor": {
                    "value": "#333333",
                    "edited": false
                },
                "group-textColor": {
                    "value": "#0eb8c0",
                    "edited": false
                },
                "group-borderColor": {
                    "value": "#555555",
                    "edited": false
                },
                "group-backgroundColor": {
                    "value": "#333333",
                    "edited": false
                },
                "widget-textColor": {
                    "value": "#eeeeee",
                    "edited": false
                },
                "widget-backgroundColor": {
                    "value": "#097479",
                    "edited": false
                },
                "widget-borderColor": {
                    "value": "#333333",
                    "edited": false
                },
                "base-font": {
                    "value": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif"
                }
            },
            "angularTheme": {
                "primary": "indigo",
                "accents": "blue",
                "warn": "red",
                "background": "grey"
            }
        },
        "site": {
            "name": "Node-RED Dashboard",
            "hideToolbar": "false",
            "allowSwipe": "true",
            "lockMenu": "false",
            "allowTempTheme": "true",
            "dateFormat": "DD/MM/YYYY",
            "sizes": {
                "sx": 48,
                "sy": 48,
                "gx": 6,
                "gy": 6,
                "cx": 6,
                "cy": 6,
                "px": 0,
                "py": 0
            }
        }
    },
    {
        "id": "b75098ed.079608",
        "type": "ui_tab",
        "name": "模拟器",
        "icon": "dashboard",
        "order": 5,
        "disabled": false,
        "hidden": false
    },
    {
        "id": "37356f0f.3b316",
        "type": "ui_group",
        "name": "Scale",
        "tab": "6dfedc99.2116b4",
        "order": 3,
        "disp": true,
        "width": "18",
        "collapse": false
    },
    {
        "id": "6dfedc99.2116b4",
        "type": "ui_tab",
        "name": " 校称",
        "icon": "dashboard",
        "order": 4,
        "disabled": false,
        "hidden": false
    },
    {
        "id": "ee79d05a.7ca36",
        "type": "mqtt-broker",
        "name": "Simulator",
        "broker": "mqtt.hivespeak.tk",
        "port": "1883",
        "clientid": "scale0001",
        "usetls": false,
        "compatmode": false,
        "keepalive": "60",
        "cleansession": true,
        "birthTopic": "",
        "birthQos": "0",
        "birthPayload": "",
        "closeTopic": "",
        "closeQos": "0",
        "closePayload": "",
        "willTopic": "",
        "willQos": "0",
        "willPayload": ""
    },
    {
        "id": "b581e843.67b938",
        "type": "ui_group",
        "name": "称模拟器",
        "tab": "b75098ed.079608",
        "order": 1,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "b7d9603e.0106e",
        "type": "ui_group",
        "name": "Raw Data",
        "tab": "6dfedc99.2116b4",
        "order": 1,
        "disp": true,
        "width": "12",
        "collapse": false
    },
    {
        "id": "5de164f1.3a819c",
        "type": "ui_group",
        "name": "Operation",
        "tab": "6dfedc99.2116b4",
        "order": 2,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "abb1657b.7dd3f8",
        "type": "ui_spacer",
        "name": "spacer",
        "group": "5de164f1.3a819c",
        "order": 3,
        "width": "6",
        "height": "1"
    },
    {
        "id": "ddf00db7.f8fca",
        "type": "ui_spacer",
        "name": "spacer",
        "group": "5de164f1.3a819c",
        "order": 1,
        "width": "6",
        "height": "1"
    },
    {
        "id": "277adc17.47fbd4",
        "type": "MySQLdatabase",
        "name": "hive_db",
        "host": "172.17.0.2",
        "port": "3306",
        "db": "hive_db",
        "tz": "Asia/Tokyo",
        "charset": "UTF8"
    },
    {
        "id": "237da972.5d69a6",
        "type": "ui_group",
        "name": "ui-table with commands",
        "tab": "",
        "order": 1,
        "disp": true,
        "width": "17",
        "collapse": false
    },
    {
        "id": "c91332c0.50c11",
        "type": "ui_group",
        "name": "commands",
        "tab": "",
        "order": 2,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "311f12a4.3d2b9e",
        "type": "mqtt-broker",
        "name": "",
        "broker": "mqtt",
        "port": "1883",
        "clientid": "",
        "usetls": false,
        "compatmode": true,
        "keepalive": "60",
        "cleansession": true,
        "birthTopic": "",
        "birthQos": "0",
        "birthPayload": "",
        "closeTopic": "",
        "closeQos": "0",
        "closePayload": "",
        "willTopic": "",
        "willQos": "0",
        "willPayload": ""
    },
    {
        "id": "eb9c5c12.b7784",
        "type": "ui_tab",
        "name": "S06",
        "icon": "dashboard",
        "order": 2,
        "disabled": false,
        "hidden": false
    },
    {
        "id": "dbd3fdb7.61e0c",
        "type": "ui_group",
        "name": "W&T",
        "tab": "eb9c5c12.b7784",
        "order": 1,
        "disp": true,
        "width": "20",
        "collapse": false
    },
    {
        "id": "178cc456.bd045c",
        "type": "ui_tab",
        "name": "S05",
        "icon": "dashboard",
        "order": 1,
        "disabled": false,
        "hidden": false
    },
    {
        "id": "98aec8cc.c90798",
        "type": "ui_group",
        "name": "W&T",
        "tab": "178cc456.bd045c",
        "order": 1,
        "disp": true,
        "width": 18,
        "collapse": false
    },
    {
        "id": "61d2dced.3db8f4",
        "type": "ui_group",
        "name": "Test",
        "tab": "3c94630c.13381c",
        "order": 1,
        "disp": true,
        "width": "12"
    },
    {
        "id": "3c94630c.13381c",
        "type": "ui_tab",
        "name": "动态图表",
        "icon": "dashboard",
        "order": 7,
        "disabled": false,
        "hidden": false
    },
    {
        "id": "4552fe72.fdfa5",
        "type": "ui_group",
        "name": "Chart",
        "tab": "2ecb90e3.af7a5",
        "order": 3,
        "disp": true,
        "width": "15",
        "collapse": false
    },
    {
        "id": "2ecb90e3.af7a5",
        "type": "ui_tab",
        "name": "双Y轴",
        "icon": "dashboard",
        "order": 6,
        "disabled": false,
        "hidden": false
    },
    {
        "id": "520d5d03.7b5fd4",
        "type": "ui_tab",
        "name": "S07",
        "icon": "dashboard",
        "order": 3,
        "disabled": false,
        "hidden": false
    },
    {
        "id": "f10711c4.695c7",
        "type": "ui_group",
        "name": "W&T",
        "tab": "520d5d03.7b5fd4",
        "order": 1,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "4425e13d.f52df",
        "type": "mqtt in",
        "z": "8583f18b.b0cb1",
        "name": "",
        "topic": "scale/send_raw",
        "qos": "1",
        "datatype": "utf8",
        "broker": "e6a4e4ea.0c8128",
        "x": 200,
        "y": 460,
        "wires": [
            [
                "e6c3e6ce.6c46d8",
                "f0f96e03.06bff"
            ]
        ]
    },
    {
        "id": "e6c3e6ce.6c46d8",
        "type": "debug",
        "z": "8583f18b.b0cb1",
        "name": "receive raw data",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 520,
        "y": 460,
        "wires": []
    },
    {
        "id": "ba0540ae.4e103",
        "type": "ui_table",
        "z": "8583f18b.b0cb1",
        "group": "37356f0f.3b316",
        "name": "",
        "order": 2,
        "width": "18",
        "height": "10",
        "columns": [
            {
                "field": "round",
                "title": "序号",
                "width": "100",
                "align": "center",
                "formatter": "rownum",
                "formatterParams": {
                    "target": "_blank"
                }
            },
            {
                "field": "scale_id",
                "title": "称编号",
                "width": "",
                "align": "left",
                "formatter": "plaintext",
                "formatterParams": {
                    "target": "_blank"
                }
            },
            {
                "field": "ref_weight",
                "title": "标称重量",
                "width": "160",
                "align": "right",
                "formatter": "plaintext",
                "formatterParams": {
                    "target": "_blank"
                }
            },
            {
                "field": "zero_offset",
                "title": "传感器相对零点数值",
                "width": "",
                "align": "right",
                "formatter": "plaintext",
                "formatterParams": {
                    "target": "_blank"
                }
            },
            {
                "field": "raw_data",
                "title": "传感器原始数值",
                "width": "",
                "align": "right",
                "formatter": "plaintext",
                "formatterParams": {
                    "target": "_blank"
                }
            },
            {
                "field": "ratio",
                "title": "斜率",
                "width": "",
                "align": "right",
                "formatter": "plaintext",
                "formatterParams": {
                    "target": "_blank"
                }
            }
        ],
        "outputs": 1,
        "cts": true,
        "x": 1630,
        "y": 180,
        "wires": [
            [
                "f2b16051.317f9",
                "740e0cc0.b9f0b4"
            ]
        ]
    },
    {
        "id": "3cf5c32c.7f6c6c",
        "type": "ui_button",
        "z": "8583f18b.b0cb1",
        "name": "Zero",
        "group": "5de164f1.3a819c",
        "order": 2,
        "width": 6,
        "height": 1,
        "passthru": false,
        "label": "清零",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 130,
        "y": 220,
        "wires": [
            [
                "772f3dcb.8c1594"
            ]
        ]
    },
    {
        "id": "f558b236.f086",
        "type": "ui_button",
        "z": "8583f18b.b0cb1",
        "name": "Read",
        "group": "5de164f1.3a819c",
        "order": 4,
        "width": 6,
        "height": 1,
        "passthru": false,
        "label": "读数",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "x": 130,
        "y": 280,
        "wires": [
            [
                "1b865aa5.4f2845"
            ]
        ]
    },
    {
        "id": "e1400b09.565bc8",
        "type": "function",
        "z": "8583f18b.b0cb1",
        "d": true,
        "name": "add row",
        "func": "msg.payload=\n{\ncommand: \"addRow\",\narguments: [\n{\n\"ref_weight\": 5300,\n\"zero_offset\": -246859,\n\"raw_data\":-130815,\n\"ratio\":-24.682075471698113,\n},\nfalse,\n],\nreturnPromise: true\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 940,
        "y": 200,
        "wires": [
            [
                "ba0540ae.4e103",
                "aaabcf8d.8e146"
            ]
        ]
    },
    {
        "id": "6aaf6a73.059fe4",
        "type": "inject",
        "z": "8583f18b.b0cb1",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 780,
        "y": 240,
        "wires": [
            [
                "e1400b09.565bc8"
            ]
        ]
    },
    {
        "id": "93909ddb.e8745",
        "type": "mqtt out",
        "z": "8583f18b.b0cb1",
        "name": "",
        "topic": "",
        "qos": "1",
        "retain": "",
        "broker": "e6a4e4ea.0c8128",
        "x": 500,
        "y": 220,
        "wires": []
    },
    {
        "id": "d8687c21.a47a6",
        "type": "mqtt in",
        "z": "bbdc42a7.a084f",
        "d": true,
        "name": "",
        "topic": "scale/get_raw",
        "qos": "1",
        "datatype": "auto",
        "broker": "ee79d05a.7ca36",
        "x": 580,
        "y": 300,
        "wires": [
            []
        ]
    },
    {
        "id": "d4dca828.472e18",
        "type": "ui_text_input",
        "z": "bbdc42a7.a084f",
        "name": "raw_data",
        "label": "HX711原始数值",
        "tooltip": "",
        "group": "b581e843.67b938",
        "order": 6,
        "width": 0,
        "height": 0,
        "passthru": false,
        "mode": "number",
        "delay": "0",
        "topic": "",
        "x": 820,
        "y": 300,
        "wires": [
            [
                "65aefb68.496794",
                "be0ac3d8.8d845"
            ]
        ]
    },
    {
        "id": "6ae40476.e6775c",
        "type": "mqtt out",
        "z": "bbdc42a7.a084f",
        "name": "",
        "topic": "scale/send_raw",
        "qos": "1",
        "retain": "",
        "broker": "ee79d05a.7ca36",
        "x": 1240,
        "y": 120,
        "wires": []
    },
    {
        "id": "65aefb68.496794",
        "type": "debug",
        "z": "bbdc42a7.a084f",
        "name": "raw data input",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 1090,
        "y": 240,
        "wires": []
    },
    {
        "id": "cd4f47cd.75d8c8",
        "type": "debug",
        "z": "bbdc42a7.a084f",
        "name": "get_raw_receive",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 850,
        "y": 220,
        "wires": []
    },
    {
        "id": "c557290.05391d8",
        "type": "mqtt in",
        "z": "bbdc42a7.a084f",
        "d": true,
        "name": "",
        "topic": "scale/zero",
        "qos": "1",
        "datatype": "auto",
        "broker": "e6a4e4ea.0c8128",
        "x": 560,
        "y": 60,
        "wires": [
            []
        ]
    },
    {
        "id": "b15fd03a.0fa35",
        "type": "debug",
        "z": "bbdc42a7.a084f",
        "name": "zero",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 810,
        "y": 60,
        "wires": []
    },
    {
        "id": "cc06321f.349f9",
        "type": "inject",
        "z": "8583f18b.b0cb1",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 300,
        "y": 120,
        "wires": [
            [
                "93909ddb.e8745"
            ]
        ]
    },
    {
        "id": "cd8c181.41065e8",
        "type": "inject",
        "z": "bbdc42a7.a084f",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 590,
        "y": 380,
        "wires": [
            [
                "d4dca828.472e18"
            ]
        ]
    },
    {
        "id": "f849488b.bab898",
        "type": "debug",
        "z": "bbdc42a7.a084f",
        "name": "triger gate",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 1030,
        "y": 200,
        "wires": []
    },
    {
        "id": "a4f7e34d.f0628",
        "type": "ui_form",
        "z": "8583f18b.b0cb1",
        "name": "HX711原始数值",
        "label": "",
        "group": "b7d9603e.0106e",
        "order": 2,
        "width": 12,
        "height": 4,
        "options": [
            {
                "label": "相对零点",
                "value": "zero",
                "type": "text",
                "required": true,
                "rows": null
            },
            {
                "label": "原始数值",
                "value": "raw",
                "type": "text",
                "required": true,
                "rows": null
            },
            {
                "label": "标称重量(g)",
                "value": "ref_weight",
                "type": "text",
                "required": true,
                "rows": null
            },
            {
                "label": "本次原始数值-->下次相对零点",
                "value": "continue",
                "type": "checkbox",
                "required": true,
                "rows": null
            }
        ],
        "formValue": {
            "zero": "",
            "raw": "",
            "ref_weight": "",
            "continue": false
        },
        "payload": "",
        "submit": "完成",
        "cancel": "重来",
        "topic": "",
        "x": 960,
        "y": 660,
        "wires": [
            [
                "e75aedc2.1f96d",
                "e23b304d.e35bf"
            ]
        ]
    },
    {
        "id": "ef0237aa.5f4fb8",
        "type": "inject",
        "z": "8583f18b.b0cb1",
        "d": true,
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "{\"zero\":\"23432\"}",
        "payloadType": "json",
        "x": 640,
        "y": 620,
        "wires": [
            [
                "a4f7e34d.f0628"
            ]
        ]
    },
    {
        "id": "be0ac3d8.8d845",
        "type": "function",
        "z": "bbdc42a7.a084f",
        "name": "Flow variable",
        "func": "flow.set(\"raw_data\",msg.payload);\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 1020,
        "y": 460,
        "wires": [
            [
                "dc5867cf.e71fe8"
            ]
        ]
    },
    {
        "id": "dc5867cf.e71fe8",
        "type": "debug",
        "z": "bbdc42a7.a084f",
        "name": "flow variable",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 1160,
        "y": 540,
        "wires": []
    },
    {
        "id": "5390868f.1f1058",
        "type": "function",
        "z": "bbdc42a7.a084f",
        "name": "get text",
        "func": "msg.payload={\n    \"cmd\":msg.topic,\n    \"data\":flow.get(\"raw_data\")\n};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 810,
        "y": 120,
        "wires": [
            [
                "f23c8562.5f2698",
                "6ae40476.e6775c"
            ]
        ]
    },
    {
        "id": "f23c8562.5f2698",
        "type": "debug",
        "z": "bbdc42a7.a084f",
        "name": "get text",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 1060,
        "y": 40,
        "wires": []
    },
    {
        "id": "aaabcf8d.8e146",
        "type": "debug",
        "z": "8583f18b.b0cb1",
        "name": "add row",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 1140,
        "y": 120,
        "wires": []
    },
    {
        "id": "173881ff.0b686e",
        "type": "function",
        "z": "8583f18b.b0cb1",
        "name": "demux",
        "func": "var scale_id = flow.get(\"scale_id\");\n\ndata_zero = 'scale/' + scale_id + '/zero'\ndata_raw = 'scale/' + scale_id + '/get_raw'\n\nif (msg.payload.cmd == data_zero)\n{\n    msg.payload = {\n                    \"zero\": msg.payload.data,\n                    \"raw\": msg.payload.data\n                  }\n} else if (msg.payload.cmd == data_raw)\n{\n    msg.payload = {\n                    \"raw\": msg.payload.data\n                  }\n}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 570,
        "y": 700,
        "wires": [
            [
                "a2f3fbd0.697828",
                "a4f7e34d.f0628"
            ]
        ]
    },
    {
        "id": "a2f3fbd0.697828",
        "type": "debug",
        "z": "8583f18b.b0cb1",
        "name": "Judge",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 790,
        "y": 740,
        "wires": []
    },
    {
        "id": "f0f96e03.06bff",
        "type": "json",
        "z": "8583f18b.b0cb1",
        "name": "parse input",
        "property": "payload",
        "action": "",
        "pretty": false,
        "x": 460,
        "y": 540,
        "wires": [
            [
                "28c0289a.b4d528",
                "173881ff.0b686e"
            ]
        ]
    },
    {
        "id": "28c0289a.b4d528",
        "type": "debug",
        "z": "8583f18b.b0cb1",
        "name": "json",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 690,
        "y": 540,
        "wires": []
    },
    {
        "id": "e75aedc2.1f96d",
        "type": "debug",
        "z": "8583f18b.b0cb1",
        "name": "Form",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 1190,
        "y": 700,
        "wires": []
    },
    {
        "id": "e23b304d.e35bf",
        "type": "function",
        "z": "8583f18b.b0cb1",
        "name": "from form",
        "func": "var raw = parseInt(msg.payload.raw, 10);\nvar zero = parseInt(msg.payload.zero, 10);\nvar weight = parseInt(msg.payload.ref_weight, 10);\nvar ratio =  0;\nvar con = msg.payload.continue;\n\nvar scale_id = flow.get(\"scale_id\");\n\nif (weight != 0) {\n    ratio = (raw - zero) / weight;\n}\n\nmsg.raw = raw;\nmsg.zero = zero;\nmsg.weight = weight;\nmsg.ration = ratio;\nmsg.con = con;\n\nmsg.payload=\n{\ncommand: \"addRow\",\narguments: [\n    {\n        \"scale_id\": scale_id,\n        \"ref_weight\": weight,\n        \"zero_offset\": zero,\n        \"raw_data\": raw,\n        \"ratio\": ratio,\n    },\n    false,\n],\nreturnPromise: true\n}\nvar msg1 = msg;\nvar msg2 = {};\nvar msg3 = {};\n\nmsg3.payload = {};\nmsg3.payload.raw = '';\nmsg3.payload.ref_weight = '';\n\nif (con) {\n    msg3.payload.zero = raw;\n} else {\n    msg3.payload.zero = '';\n}\n\nmsg2.payload = {\n                    \"scale_id\": scale_id,\n                    \"ref_weight\": weight,\n                    \"zero_offset\": zero,\n                    \"raw_data\": raw,\n                    \"ratio\": ratio,\n                };\n\nreturn [msg1, msg2, msg3];\n",
        "outputs": 3,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 960,
        "y": 380,
        "wires": [
            [
                "25e7398.90cd5c6",
                "ba0540ae.4e103"
            ],
            [
                "b48e3c8d.f0d4f",
                "fe7a20d.0c5f7e"
            ],
            [
                "a4f7e34d.f0628"
            ]
        ]
    },
    {
        "id": "25e7398.90cd5c6",
        "type": "debug",
        "z": "8583f18b.b0cb1",
        "name": "msg1",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 1370,
        "y": 440,
        "wires": []
    },
    {
        "id": "776de1da.9c156",
        "type": "ui_dropdown",
        "z": "8583f18b.b0cb1",
        "name": "scale_id",
        "label": "称 编号",
        "tooltip": "",
        "place": "",
        "group": "b7d9603e.0106e",
        "order": 1,
        "width": 0,
        "height": 0,
        "passthru": true,
        "multiple": false,
        "options": [
            {
                "label": "",
                "value": "HX7110000001",
                "type": "str"
            },
            {
                "label": "",
                "value": "HX7110000002",
                "type": "str"
            },
            {
                "label": "",
                "value": "HX7110000003",
                "type": "str"
            },
            {
                "label": "",
                "value": "HX7110000004",
                "type": "str"
            },
            {
                "label": "",
                "value": "HX7110000005",
                "type": "str"
            },
            {
                "label": "",
                "value": "HX7110000006",
                "type": "str"
            },
            {
                "label": "",
                "value": "HX7110000007",
                "type": "str"
            },
            {
                "label": "",
                "value": "HX7110000008",
                "type": "str"
            },
            {
                "label": "",
                "value": "HX7110000009",
                "type": "str"
            }
        ],
        "payload": "",
        "topic": "",
        "x": 1040,
        "y": 840,
        "wires": [
            [
                "b8af7978.b52458"
            ]
        ]
    },
    {
        "id": "6a45e8ce.1bd3c8",
        "type": "mysql",
        "z": "8583f18b.b0cb1",
        "mydb": "277adc17.47fbd4",
        "name": "insert",
        "x": 1510,
        "y": 580,
        "wires": [
            []
        ]
    },
    {
        "id": "b48e3c8d.f0d4f",
        "type": "function",
        "z": "8583f18b.b0cb1",
        "name": "insert2hive_db",
        "func": "\n// scale_id varchar(255), \n// ref_w int DEFAULT 0, \n// zero int DEFAULT 0, \n// raw float(19,15) DEFAULT 0,\nmsg.topic=\"insert into scale_calib values (\\\"\"\n          + msg.payload.scale_id + \"\\\", \" \n          + msg.payload.ref_weight + \", \" \n          + msg.payload.zero_offset + \", \" \n          + msg.payload.raw_data + \", \"\n          + msg.payload.ratio\n          + \");\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 1340,
        "y": 560,
        "wires": [
            [
                "6a45e8ce.1bd3c8",
                "31760b0f.e5f7e4"
            ]
        ]
    },
    {
        "id": "948a13b5.285af",
        "type": "debug",
        "z": "8583f18b.b0cb1",
        "name": "scale_id",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 1520,
        "y": 740,
        "wires": []
    },
    {
        "id": "b8af7978.b52458",
        "type": "function",
        "z": "8583f18b.b0cb1",
        "name": "set flow.scale_id",
        "func": "flow.set(\"scale_id\", msg.payload);\nmsg.topic = \"select * from scale_calib where scale_id = \\\"\" + msg.payload + \"\\\";\" ;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 1340,
        "y": 820,
        "wires": [
            [
                "c71097a9.88cf28",
                "948a13b5.285af"
            ]
        ]
    },
    {
        "id": "fe7a20d.0c5f7e",
        "type": "debug",
        "z": "8583f18b.b0cb1",
        "name": "msg3",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 1310,
        "y": 500,
        "wires": []
    },
    {
        "id": "31760b0f.e5f7e4",
        "type": "debug",
        "z": "8583f18b.b0cb1",
        "name": "insert2hive_db",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 1530,
        "y": 520,
        "wires": []
    },
    {
        "id": "c71097a9.88cf28",
        "type": "mysql",
        "z": "8583f18b.b0cb1",
        "mydb": "277adc17.47fbd4",
        "name": "select",
        "x": 1540,
        "y": 820,
        "wires": [
            [
                "4e4b166e.770b28"
            ]
        ]
    },
    {
        "id": "ada1e3ab.38fb2",
        "type": "debug",
        "z": "8583f18b.b0cb1",
        "name": "init table",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 1820,
        "y": 960,
        "wires": []
    },
    {
        "id": "4e4b166e.770b28",
        "type": "function",
        "z": "8583f18b.b0cb1",
        "name": "init table",
        "func": "var table = [];\n\nmsg.payload.forEach(appand_item);\n\nfunction appand_item(item)\n{\n    var json = {\n        \"scale_id\": item.scale_id,\n        \"ref_weight\": item.ref_w,\n        \"zero_offset\": item.zero,\n        \"raw_data\": item.raw,\n        \"ratio\": item.ratio\n    };\n    table.push(json);  \n}\n\nmsg.payload = table;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 1700,
        "y": 880,
        "wires": [
            [
                "ba0540ae.4e103",
                "ada1e3ab.38fb2"
            ]
        ]
    },
    {
        "id": "f2b16051.317f9",
        "type": "ui_context_menu",
        "z": "8583f18b.b0cb1",
        "group": "37356f0f.3b316",
        "order": 1,
        "width": 0,
        "height": -1,
        "fontSize": 16,
        "inputPositionXField": "50",
        "inputPositionXType": "num",
        "inputPositionYField": "600",
        "inputPositionYType": "num",
        "outputField": "payload",
        "inputMenuField": "menu",
        "inputMenuType": "fixed",
        "menuItems": [
            {
                "id": "1",
                "icon": "",
                "label": "delet",
                "topic": "",
                "payload": "dd",
                "payloadType": "str",
                "visible": true,
                "enabled": true
            }
        ],
        "colors": "native",
        "textColor": "#000000",
        "backgroundColor": "#ffffff",
        "borderColor": "#626262",
        "intervalLength": "3",
        "intervalUnit": "secs",
        "startTimerAtOpen": false,
        "startTimerAtLeave": true,
        "stopTimerAtEnter": true,
        "name": "",
        "x": 1900,
        "y": 220,
        "wires": [
            [
                "f3379b9a.904e98",
                "ecede115.02c0f"
            ]
        ]
    },
    {
        "id": "f3379b9a.904e98",
        "type": "debug",
        "z": "8583f18b.b0cb1",
        "name": "Context",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 2120,
        "y": 200,
        "wires": []
    },
    {
        "id": "740e0cc0.b9f0b4",
        "type": "debug",
        "z": "8583f18b.b0cb1",
        "name": "row",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 1870,
        "y": 160,
        "wires": []
    },
    {
        "id": "ecede115.02c0f",
        "type": "function",
        "z": "8583f18b.b0cb1",
        "name": "delete row",
        "func": "var msg1 = {};\nvar msg2 = {};\nvar msg3 = {};\n\n// Scale table\nif (msg.payload == \"dd\"){\n    id = msg.sourceMsg.payload.id;\n    msg1.payload={\n        command:\"deleteRow\",\n        arguments: [id],\n        returnPromise: true\n    }\n}\n\n// hive_db\nmsg2.topic = \"delete from scale_calib where scale_id = \\\"\" \n            + msg.sourceMsg.payload.scale_id + \"\\\" and ref_w = \" \n            + msg.sourceMsg.payload.ref_weight +\";\";\n\n// raw data form\nmsg3.payload = {\n                \"zero\": msg.sourceMsg.payload.zero_offset,\n                \"raw\": msg.sourceMsg.payload.raw_data,\n                \"ref_weight\": msg.sourceMsg.payload.ref_weight\n              }\n\nreturn [msg1, msg2, msg3];",
        "outputs": 3,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 1750,
        "y": 360,
        "wires": [
            [
                "98369885.0019c8",
                "ba0540ae.4e103"
            ],
            [
                "b11334c5.f9e8c8",
                "7e912351.ea3e4c"
            ],
            [
                "a4f7e34d.f0628"
            ]
        ]
    },
    {
        "id": "98369885.0019c8",
        "type": "debug",
        "z": "8583f18b.b0cb1",
        "name": "delete table row",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 2200,
        "y": 340,
        "wires": []
    },
    {
        "id": "b11334c5.f9e8c8",
        "type": "mysql",
        "z": "8583f18b.b0cb1",
        "mydb": "277adc17.47fbd4",
        "name": "delete",
        "x": 2170,
        "y": 400,
        "wires": [
            []
        ]
    },
    {
        "id": "7e912351.ea3e4c",
        "type": "debug",
        "z": "8583f18b.b0cb1",
        "name": "delete sql",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 2180,
        "y": 460,
        "wires": []
    },
    {
        "id": "772f3dcb.8c1594",
        "type": "function",
        "z": "8583f18b.b0cb1",
        "name": "scale/id/zero",
        "func": "var scale_id = flow.get(\"scale_id\");\n\nmsg.topic = 'scale/' + scale_id + '/zero'\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 330,
        "y": 220,
        "wires": [
            [
                "93909ddb.e8745"
            ]
        ]
    },
    {
        "id": "1b865aa5.4f2845",
        "type": "function",
        "z": "8583f18b.b0cb1",
        "name": "scale/id/get_raw",
        "func": "var scale_id = flow.get(\"scale_id\");\n\nmsg.topic = 'scale/' + scale_id + '/get_raw'\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 340,
        "y": 280,
        "wires": [
            [
                "93909ddb.e8745"
            ]
        ]
    },
    {
        "id": "3154fd91.d4f6f2",
        "type": "mqtt out",
        "z": "da8e39de.e1d908",
        "name": "",
        "topic": "",
        "qos": "",
        "retain": "",
        "broker": "e6a4e4ea.0c8128",
        "x": 570,
        "y": 120,
        "wires": []
    },
    {
        "id": "61238928.dc02a8",
        "type": "inject",
        "z": "da8e39de.e1d908",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "60",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 100,
        "y": 120,
        "wires": [
            [
                "fa127122.eef03"
            ]
        ]
    },
    {
        "id": "fa127122.eef03",
        "type": "function",
        "z": "da8e39de.e1d908",
        "name": "scale/id/get_raw_w_temp",
        "func": "var scale_id = \"HX7110000006\";\n\nmsg.topic = 'scale/' + scale_id + '/get_raw_w_temp'\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 330,
        "y": 120,
        "wires": [
            [
                "3154fd91.d4f6f2"
            ]
        ]
    },
    {
        "id": "58b791a0.25cbd",
        "type": "mqtt in",
        "z": "da8e39de.e1d908",
        "name": "",
        "topic": "scale/send_raw",
        "qos": "1",
        "datatype": "utf8",
        "broker": "e6a4e4ea.0c8128",
        "x": 120,
        "y": 220,
        "wires": [
            [
                "ec8d48d1.fb2138",
                "3c1fa414.360cac"
            ]
        ]
    },
    {
        "id": "ec8d48d1.fb2138",
        "type": "debug",
        "z": "da8e39de.e1d908",
        "name": "weight_with_temp",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 380,
        "y": 220,
        "wires": []
    },
    {
        "id": "3c1fa414.360cac",
        "type": "json",
        "z": "da8e39de.e1d908",
        "name": "weight&temp",
        "property": "payload",
        "action": "",
        "pretty": false,
        "x": 350,
        "y": 280,
        "wires": [
            [
                "7adf4380.1d89dc",
                "ff66a8fb.4f12f8"
            ]
        ]
    },
    {
        "id": "45453f06.411c2",
        "type": "function",
        "z": "da8e39de.e1d908",
        "name": "Demux",
        "func": "var msg_w = {};\nvar msg_t = {};\nvar msg_inTemp = {};\nvar msg_exTemp = {}\n\nmsg_t.payload = msg.payload.temp;\nmsg_t.topic = \"Temperature\";\n\nmsg_w.payload = msg.payload.weight_raw;\nmsg_w.topic = \"weight_raw\";\n\nmsg_inTemp.payload = msg.payload.in_temp;\nmsg_inTemp.topic = \"Internal Temperature\"\n\nmsg_exTemp.payload = msg.payload.ex_temp;\nmsg_exTemp.topic = \"External Temperature\"\n\nreturn [msg_w,msg_inTemp,msg_exTemp];",
        "outputs": 3,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 780,
        "y": 260,
        "wires": [
            [
                "668acd00.a02f44",
                "e2b46ba0.fab428"
            ],
            [
                "2fa5f3ab.c4219c",
                "bcdfc29d.ddddc"
            ],
            [
                "bcdfc29d.ddddc",
                "8a71b976.1272d8"
            ]
        ],
        "icon": "node-red/switch.svg"
    },
    {
        "id": "7adf4380.1d89dc",
        "type": "debug",
        "z": "da8e39de.e1d908",
        "name": "weight&temp",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 550,
        "y": 480,
        "wires": []
    },
    {
        "id": "668acd00.a02f44",
        "type": "debug",
        "z": "da8e39de.e1d908",
        "name": "weight_raw",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 1020,
        "y": 220,
        "wires": []
    },
    {
        "id": "2fa5f3ab.c4219c",
        "type": "debug",
        "z": "da8e39de.e1d908",
        "name": "internal temperature",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 1100,
        "y": 340,
        "wires": []
    },
    {
        "id": "e2b46ba0.fab428",
        "type": "ui_chart",
        "z": "da8e39de.e1d908",
        "name": "weight_raw",
        "group": "dbd3fdb7.61e0c",
        "order": 2,
        "width": 0,
        "height": 0,
        "label": "Weight Raw",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "-210000",
        "ymax": "-160000",
        "removeOlder": "3",
        "removeOlderPoints": "",
        "removeOlderUnit": "86400",
        "cutout": 0,
        "useOneColor": false,
        "useUTC": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "useOldStyle": false,
        "outputs": 1,
        "x": 1020,
        "y": 280,
        "wires": [
            []
        ]
    },
    {
        "id": "bcdfc29d.ddddc",
        "type": "ui_chart",
        "z": "da8e39de.e1d908",
        "name": "temperature",
        "group": "dbd3fdb7.61e0c",
        "order": 3,
        "width": 0,
        "height": 0,
        "label": "Temperature",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "0",
        "ymax": "35",
        "removeOlder": "3",
        "removeOlderPoints": "",
        "removeOlderUnit": "86400",
        "cutout": 0,
        "useOneColor": false,
        "useUTC": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "useOldStyle": false,
        "outputs": 1,
        "x": 1070,
        "y": 400,
        "wires": [
            []
        ]
    },
    {
        "id": "608e1323.43053c",
        "type": "mqtt out",
        "z": "94d5df00.4a558",
        "name": "",
        "topic": "",
        "qos": "",
        "retain": "",
        "broker": "e6a4e4ea.0c8128",
        "x": 570,
        "y": 120,
        "wires": []
    },
    {
        "id": "2fef93b8.38591c",
        "type": "inject",
        "z": "94d5df00.4a558",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "60",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 100,
        "y": 120,
        "wires": [
            [
                "c74e7310.985a"
            ]
        ]
    },
    {
        "id": "c74e7310.985a",
        "type": "function",
        "z": "94d5df00.4a558",
        "name": "scale/id/get_raw_w_temp",
        "func": "var scale_id = \"HX7110000005\";\n\nmsg.topic = 'scale/' + scale_id + '/get_raw_w_temp'\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 330,
        "y": 120,
        "wires": [
            [
                "608e1323.43053c",
                "2d5f0ff1.d8702"
            ]
        ]
    },
    {
        "id": "4fd8db4f.a2c634",
        "type": "mqtt in",
        "z": "94d5df00.4a558",
        "name": "",
        "topic": "scale/send_raw",
        "qos": "1",
        "datatype": "utf8",
        "broker": "e6a4e4ea.0c8128",
        "x": 120,
        "y": 220,
        "wires": [
            [
                "21ff6d53.b10332",
                "a50c2396.b239"
            ]
        ]
    },
    {
        "id": "21ff6d53.b10332",
        "type": "debug",
        "z": "94d5df00.4a558",
        "name": "S5",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 340,
        "y": 220,
        "wires": []
    },
    {
        "id": "a50c2396.b239",
        "type": "json",
        "z": "94d5df00.4a558",
        "name": "weight&temp",
        "property": "payload",
        "action": "",
        "pretty": false,
        "x": 350,
        "y": 260,
        "wires": [
            [
                "472000fe.fc42f",
                "a9d889b4.57ee68"
            ]
        ]
    },
    {
        "id": "9d0d8e34.5ff7b",
        "type": "function",
        "z": "94d5df00.4a558",
        "name": "Demux",
        "func": "var msg_w = {};\nvar msg_t = {};\n\nmsg_t.payload = msg.payload.temp;\nmsg_t.topic = \"Temperature\";\n\nmsg_w.payload = msg.payload.weight_raw;\nmsg_w.topic = \"weight_raw\";\n\nreturn [msg_w,msg_t];",
        "outputs": 2,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 760,
        "y": 200,
        "wires": [
            [
                "8d9d22af.d3e5a",
                "18b4ace7.201343"
            ],
            [
                "e635d859.2b0908",
                "b82d1c8d.a001c"
            ]
        ],
        "icon": "node-red/switch.svg"
    },
    {
        "id": "472000fe.fc42f",
        "type": "debug",
        "z": "94d5df00.4a558",
        "name": "weight&temp",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 540,
        "y": 360,
        "wires": []
    },
    {
        "id": "8d9d22af.d3e5a",
        "type": "debug",
        "z": "94d5df00.4a558",
        "name": "weight_raw",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 970,
        "y": 140,
        "wires": []
    },
    {
        "id": "e635d859.2b0908",
        "type": "debug",
        "z": "94d5df00.4a558",
        "name": "temperature",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 970,
        "y": 260,
        "wires": []
    },
    {
        "id": "18b4ace7.201343",
        "type": "ui_chart",
        "z": "94d5df00.4a558",
        "name": "weight_raw",
        "group": "98aec8cc.c90798",
        "order": 1,
        "width": 0,
        "height": 0,
        "label": "Weight Raw",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "100000",
        "ymax": "200000",
        "removeOlder": "3",
        "removeOlderPoints": "",
        "removeOlderUnit": "86400",
        "cutout": 0,
        "useOneColor": false,
        "useUTC": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "useOldStyle": false,
        "outputs": 1,
        "x": 970,
        "y": 200,
        "wires": [
            []
        ]
    },
    {
        "id": "b82d1c8d.a001c",
        "type": "ui_chart",
        "z": "94d5df00.4a558",
        "name": "temperature",
        "group": "98aec8cc.c90798",
        "order": 2,
        "width": 0,
        "height": 0,
        "label": "Temperature",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "0",
        "ymax": "30",
        "removeOlder": "3",
        "removeOlderPoints": "",
        "removeOlderUnit": "86400",
        "cutout": 0,
        "useOneColor": false,
        "useUTC": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "useOldStyle": false,
        "outputs": 1,
        "x": 970,
        "y": 300,
        "wires": [
            []
        ]
    },
    {
        "id": "2d5f0ff1.d8702",
        "type": "debug",
        "z": "94d5df00.4a558",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 540,
        "y": 60,
        "wires": []
    },
    {
        "id": "ff66a8fb.4f12f8",
        "type": "switch",
        "z": "da8e39de.e1d908",
        "name": "Scale ID Filter",
        "property": "payload.cmd",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "HX7110000006",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 560,
        "y": 280,
        "wires": [
            [
                "e248ba52.240ca8",
                "45453f06.411c2",
                "d0a3625.1ab07a"
            ],
            []
        ]
    },
    {
        "id": "e248ba52.240ca8",
        "type": "debug",
        "z": "da8e39de.e1d908",
        "name": "006",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 800,
        "y": 400,
        "wires": []
    },
    {
        "id": "a9d889b4.57ee68",
        "type": "switch",
        "z": "94d5df00.4a558",
        "name": "Scale ID Filter",
        "property": "payload.cmd",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "HX7110000005",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 580,
        "y": 220,
        "wires": [
            [
                "9d0d8e34.5ff7b",
                "8f158a32.65cf58"
            ],
            []
        ]
    },
    {
        "id": "8f158a32.65cf58",
        "type": "debug",
        "z": "94d5df00.4a558",
        "name": "005",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 760,
        "y": 280,
        "wires": []
    },
    {
        "id": "c7599c1.6cf866",
        "type": "ui_chart",
        "z": "f9e16f47.45fd",
        "name": "",
        "group": "61d2dced.3db8f4",
        "order": 0,
        "width": "6",
        "height": "6",
        "label": "chart",
        "chartType": "bar",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "",
        "ymax": "",
        "removeOlder": 1,
        "removeOlderPoints": "",
        "removeOlderUnit": "3600",
        "cutout": 0,
        "useOneColor": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "useOldStyle": false,
        "outputs": 2,
        "x": 650,
        "y": 200,
        "wires": [
            [],
            []
        ]
    },
    {
        "id": "caffa85d.ba12b8",
        "type": "function",
        "z": "f9e16f47.45fd",
        "name": "Format Y-Axis",
        "func": "//Assuming payload[0].data[0] holds the data value array\n//depending upon format of bar graph - var num path may need to be changed\nvar num= msg.payload[0].data[0];\n\nvar min = Math.min(...num);\nif (min < 0) {\n  msg.ui_control = { \"ymin\":(Math.floor(min)) }\n    } else {\n      msg.ui_control = { \"ymin\":0 }  \n    }\n    \nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 499,
        "y": 200,
        "wires": [
            [
                "c7599c1.6cf866"
            ]
        ]
    },
    {
        "id": "f7a7179f.603f48",
        "type": "inject",
        "z": "f9e16f47.45fd",
        "name": "",
        "repeat": "15",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "[{\"series\":[\"X\"],\"data\":[[15,10,5,1,0,-3,-6.2,0,4]],\"labels\":[\"1\",\"2\",\"3\",\"4\",\"5\",\"6\",\"7\",\"8\",\"9\"]}]",
        "payloadType": "json",
        "x": 117,
        "y": 200,
        "wires": [
            [
                "caffa85d.ba12b8"
            ]
        ]
    },
    {
        "id": "97e92da7.09448",
        "type": "inject",
        "z": "f9e16f47.45fd",
        "name": "",
        "repeat": "15",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "[{\"series\":[\"X\"],\"data\":[[4,3,2,1,0,-1,-2,-3,-4]],\"labels\":[\"1\",\"2\",\"3\",\"4\",\"5\",\"6\",\"7\",\"8\",\"9\"]}]",
        "payloadType": "json",
        "x": 117,
        "y": 239,
        "wires": [
            [
                "75093cb5.db8174"
            ]
        ]
    },
    {
        "id": "75093cb5.db8174",
        "type": "delay",
        "z": "f9e16f47.45fd",
        "name": "",
        "pauseType": "delay",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 256.5,
        "y": 239,
        "wires": [
            [
                "caffa85d.ba12b8"
            ]
        ]
    },
    {
        "id": "98273b74.779208",
        "type": "inject",
        "z": "f9e16f47.45fd",
        "name": "",
        "repeat": "15",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "[{\"series\":[\"X\"],\"data\":[[44,33,28,10,5,13,12,6,4]],\"labels\":[\"1\",\"2\",\"3\",\"4\",\"5\",\"6\",\"7\",\"8\",\"9\"]}]",
        "payloadType": "json",
        "x": 116,
        "y": 277,
        "wires": [
            [
                "4dbed3a3.51373c"
            ]
        ]
    },
    {
        "id": "4dbed3a3.51373c",
        "type": "delay",
        "z": "f9e16f47.45fd",
        "name": "",
        "pauseType": "delay",
        "timeout": "10",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 254.5,
        "y": 277,
        "wires": [
            [
                "caffa85d.ba12b8"
            ]
        ]
    },
    {
        "id": "13e0b8f1.dfe687",
        "type": "ui_template",
        "z": "f9e16f47.45fd",
        "group": "4552fe72.fdfa5",
        "name": "Line Chart",
        "order": 4,
        "width": "15",
        "height": "10",
        "format": "",
        "storeOutMessages": true,
        "fwdInMessages": true,
        "templateScope": "local",
        "x": 610,
        "y": 420,
        "wires": [
            []
        ]
    },
    {
        "id": "33be001d.f6af3",
        "type": "inject",
        "z": "f9e16f47.45fd",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": "0.62",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 170,
        "y": 420,
        "wires": [
            [
                "167e0e6d.2acf32"
            ]
        ]
    },
    {
        "id": "167e0e6d.2acf32",
        "type": "function",
        "z": "f9e16f47.45fd",
        "name": "",
        "func": "\nvar m_first = []\nvar m_second = []\nvar m_labels = []\nvar a\nvar startTime = 1577836800000\nfor(x=1;x<=25;x++){\n    a = {x: new Date(startTime), y: Math.random() * 300}\n    m_first.push(a)\n    startTime += 86400000\n}\nstartTime = 1577836800000\nfor(x=1;x<=25;x++){\n    a = -2.5 + Math.random() * 5\n    m_second.push(a)\n    startTime += 86400000\n    m_labels.push(\"label_\"+x)\n}\n\nmsg.payload = {}\nmsg.payload.first = JSON.stringify(m_first)\nmsg.payload.second = JSON.stringify(m_second)\nmsg.payload.labels = JSON.stringify(m_labels)\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 310,
        "y": 420,
        "wires": [
            [
                "7f227cac.38d054"
            ]
        ]
    },
    {
        "id": "807a85c.8761e78",
        "type": "debug",
        "z": "f9e16f47.45fd",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "x": 590,
        "y": 460,
        "wires": []
    },
    {
        "id": "7f227cac.38d054",
        "type": "template",
        "z": "f9e16f47.45fd",
        "name": "",
        "field": "template",
        "fieldType": "msg",
        "format": "html",
        "syntax": "mustache",
        "template": "<canvas id=\"myChart\" width=600 height =300></canvas>\n<script>\nvar textcolor = getComputedStyle(document.documentElement).getPropertyValue('--nr-dashboard-widgetTextColor');\nvar gridcolor = getComputedStyle(document.documentElement).getPropertyValue('--nr-dashboard-groupBorderColor');\nvar linecolors = ['#009900','#889900']\n\nvar ctx = document.getElementById('myChart').getContext('2d');\nvar chart = new Chart(ctx, {\n    // The type of chart we want to create\n    type: 'bar',\n\n    // The data for our dataset\n    data: {\n        labels: {{{payload.labels}}},\n        datasets: [\n            {\n                type:'line',\n                label: 'First',\n                backgroundColor: linecolors[0],\n                borderColor: linecolors[0],\n                data: {{{payload.first}}},\n                yAxisID: 'left-y-axis',\n                steppedLine: false,\n                fill: false,\n                borderWidth: 1\n            },\n            {\n                type:'bar',\n                label: 'Second',\n                \n                backgroundColor: linecolors[1],\n                borderColor: linecolors[1],\n                data: {{{payload.second}}},\n                yAxisID: 'right-y-axis',\n                barPercentage: 0.5,\n                barThickness: 6,\n                maxBarThickness: 8,\n                minBarLength: 2,\n            }\n        ]\n    },\n\n    // Configuration options go here\n    options: {\n        scales: {\n            yAxes: [\n                {\n                    gridLines :{display:false},\n                    id: 'left-y-axis',\n                    type: 'linear',\n                    position: 'left',\n                    ticks: {\n                        fontColor: linecolors[0]\n                    }\n                },\n                {\n                    gridLines :{zeroLineColor:gridcolor,color:gridcolor,lineWidth:0.5},\n                    id: 'right-y-axis',\n                    type: 'linear',\n                    position: 'right',\n                    ticks: {\n                        fontColor:linecolors[1]\n                    }\n                }\n            ],\n            xAxes: [\n                {\n                    gridLines :{zeroLineColor:gridcolor,color:gridcolor,lineWidth:0.5},\n                    \n                    ticks: {\n                        fontColor:textcolor\n                    }\n                }\n            ]\n        }\n    }\n});\n</script>\n",
        "output": "str",
        "x": 440,
        "y": 420,
        "wires": [
            [
                "13e0b8f1.dfe687",
                "807a85c.8761e78"
            ]
        ]
    },
    {
        "id": "a82b59c0.503398",
        "type": "mqtt out",
        "z": "3f7516e0.9e78fa",
        "name": "",
        "topic": "",
        "qos": "",
        "retain": "",
        "broker": "e6a4e4ea.0c8128",
        "x": 570,
        "y": 120,
        "wires": []
    },
    {
        "id": "e2948eeb.b27f8",
        "type": "inject",
        "z": "3f7516e0.9e78fa",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "60",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 100,
        "y": 120,
        "wires": [
            [
                "63044a54.146c74"
            ]
        ]
    },
    {
        "id": "63044a54.146c74",
        "type": "function",
        "z": "3f7516e0.9e78fa",
        "name": "scale/id/get_raw_w_temp",
        "func": "var scale_id = \"HX7110000007\";\n\nmsg.topic = 'scale/' + scale_id + '/get_raw_w_temp'\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 330,
        "y": 120,
        "wires": [
            [
                "a82b59c0.503398",
                "8795eb45.d26f28"
            ]
        ]
    },
    {
        "id": "2bc02555.75824a",
        "type": "mqtt in",
        "z": "3f7516e0.9e78fa",
        "name": "",
        "topic": "scale/send_raw",
        "qos": "1",
        "datatype": "utf8",
        "broker": "e6a4e4ea.0c8128",
        "x": 120,
        "y": 220,
        "wires": [
            [
                "e43d0d5a.0e4f5",
                "256a7bd6.08fdb4"
            ]
        ]
    },
    {
        "id": "e43d0d5a.0e4f5",
        "type": "debug",
        "z": "3f7516e0.9e78fa",
        "name": "S7",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 340,
        "y": 220,
        "wires": []
    },
    {
        "id": "256a7bd6.08fdb4",
        "type": "json",
        "z": "3f7516e0.9e78fa",
        "name": "weight&temp",
        "property": "payload",
        "action": "",
        "pretty": false,
        "x": 350,
        "y": 260,
        "wires": [
            [
                "470fe3b9.6b5a3c",
                "b188c71a.cdd4c8"
            ]
        ]
    },
    {
        "id": "be3ce0ff.19b0c",
        "type": "function",
        "z": "3f7516e0.9e78fa",
        "name": "Demux",
        "func": "var msg_w = {};\nvar msg_t = {};\n\nmsg_t.payload = msg.payload.temp;\nmsg_t.topic = \"Temperature\";\n\nmsg_w.payload = msg.payload.weight_raw;\nmsg_w.topic = \"weight_raw\";\n\nreturn [msg_w,msg_t];",
        "outputs": 2,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 760,
        "y": 200,
        "wires": [
            [
                "53d33f9.175b2c",
                "9e1a6792.c17518"
            ],
            [
                "5208b821.228a38",
                "bb229cee.a5284"
            ]
        ],
        "icon": "node-red/switch.svg"
    },
    {
        "id": "470fe3b9.6b5a3c",
        "type": "debug",
        "z": "3f7516e0.9e78fa",
        "name": "weight&temp",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 540,
        "y": 360,
        "wires": []
    },
    {
        "id": "53d33f9.175b2c",
        "type": "debug",
        "z": "3f7516e0.9e78fa",
        "name": "weight_raw",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 970,
        "y": 140,
        "wires": []
    },
    {
        "id": "5208b821.228a38",
        "type": "debug",
        "z": "3f7516e0.9e78fa",
        "name": "temperature",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 970,
        "y": 260,
        "wires": []
    },
    {
        "id": "9e1a6792.c17518",
        "type": "ui_chart",
        "z": "3f7516e0.9e78fa",
        "name": "weight_raw",
        "group": "f10711c4.695c7",
        "order": 1,
        "width": 0,
        "height": 0,
        "label": "Weight Raw",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "100000",
        "ymax": "200000",
        "removeOlder": "3",
        "removeOlderPoints": "",
        "removeOlderUnit": "86400",
        "cutout": 0,
        "useOneColor": false,
        "useUTC": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "useOldStyle": false,
        "outputs": 1,
        "x": 970,
        "y": 200,
        "wires": [
            []
        ]
    },
    {
        "id": "bb229cee.a5284",
        "type": "ui_chart",
        "z": "3f7516e0.9e78fa",
        "name": "temperature",
        "group": "f10711c4.695c7",
        "order": 2,
        "width": 0,
        "height": 0,
        "label": "Temperature",
        "chartType": "line",
        "legend": "false",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "0",
        "ymax": "30",
        "removeOlder": "3",
        "removeOlderPoints": "",
        "removeOlderUnit": "86400",
        "cutout": 0,
        "useOneColor": false,
        "useUTC": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "useOldStyle": false,
        "outputs": 1,
        "x": 970,
        "y": 300,
        "wires": [
            []
        ]
    },
    {
        "id": "8795eb45.d26f28",
        "type": "debug",
        "z": "3f7516e0.9e78fa",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 540,
        "y": 60,
        "wires": []
    },
    {
        "id": "b188c71a.cdd4c8",
        "type": "switch",
        "z": "3f7516e0.9e78fa",
        "name": "Scale ID Filter",
        "property": "payload.cmd",
        "propertyType": "msg",
        "rules": [
            {
                "t": "cont",
                "v": "HX7110000007",
                "vt": "str"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "false",
        "repair": false,
        "outputs": 2,
        "x": 580,
        "y": 220,
        "wires": [
            [
                "be3ce0ff.19b0c",
                "62a8dcaa.092ec4"
            ],
            []
        ]
    },
    {
        "id": "62a8dcaa.092ec4",
        "type": "debug",
        "z": "3f7516e0.9e78fa",
        "name": "007",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 760,
        "y": 280,
        "wires": []
    },
    {
        "id": "8a71b976.1272d8",
        "type": "debug",
        "z": "da8e39de.e1d908",
        "name": "external temperature",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 1080,
        "y": 440,
        "wires": []
    },
    {
        "id": "31c4ca9b.9f7d56",
        "type": "mysql",
        "z": "da8e39de.e1d908",
        "mydb": "277adc17.47fbd4",
        "name": "Insert raw&temp",
        "x": 1060,
        "y": 140,
        "wires": [
            []
        ]
    },
    {
        "id": "d0a3625.1ab07a",
        "type": "function",
        "z": "da8e39de.e1d908",
        "name": "",
        "func": "var date = new Date().toISOString().substring(0, 19).replace(\"T\", \" \");\n\nmsg.topic = \"insert into scale_temp_raw values ('HX7110000006', '\" + date + \"', '\" + msg.payload.weight_raw + \"', '\" + msg.payload.ex_temp +\"');\"\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 810,
        "y": 140,
        "wires": [
            [
                "a14bf28e.a0344",
                "31c4ca9b.9f7d56"
            ]
        ]
    },
    {
        "id": "a14bf28e.a0344",
        "type": "debug",
        "z": "da8e39de.e1d908",
        "name": "SQL",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "topic",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 930,
        "y": 80,
        "wires": []
    }
]

