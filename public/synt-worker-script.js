/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/baseFetcher.ts":
/*!********************************!*\
  !*** ./src/api/baseFetcher.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseFetcher)
/* harmony export */ });
/* harmony import */ var _appConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../appConfig */ "./src/appConfig.ts");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}

var BaseFetcher = /*#__PURE__*/ function() {
    "use strict";
    function BaseFetcher() {
        _classCallCheck(this, BaseFetcher);
        this.defaultHeader = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Origin": "*"
        };
    }
    var _proto = BaseFetcher.prototype;
    _proto.execute = function execute(url) {
        var method = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "GET", parameters = arguments.length > 2 ? arguments[2] : void 0, headers = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        return fetch(url, {
            method: method,
            body: JSON.stringify(parameters),
            headers: _objectSpread(_objectSpreadProps(_objectSpread({}, this.defaultHeader, headers || {}), {
                "app-id": _appConfig__WEBPACK_IMPORTED_MODULE_0__.appConfig.appId,
                "api-key": _appConfig__WEBPACK_IMPORTED_MODULE_0__.appConfig.apiKey
            }), _appConfig__WEBPACK_IMPORTED_MODULE_0__.appConfig.token ? {
                "x-api-key": _appConfig__WEBPACK_IMPORTED_MODULE_0__.appConfig.token
            } : {})
        }).then(function(res) {
            return res.json();
        });
    };
    return BaseFetcher;
}();



/***/ }),

/***/ "./src/api/trackingFetcher.ts":
/*!************************************!*\
  !*** ./src/api/trackingFetcher.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TrackingFetcher)
/* harmony export */ });
/* harmony import */ var _baseFetcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseFetcher */ "./src/api/baseFetcher.ts");
/* harmony import */ var _appConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../appConfig */ "./src/appConfig.ts");
/* harmony import */ var _util_logManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/logManager */ "./src/util/logManager.ts");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};



var TrackingFetcher = /*#__PURE__*/ function(BaseFetcher) {
    "use strict";
    _inherits(TrackingFetcher, BaseFetcher);
    var _super = _createSuper(TrackingFetcher);
    function TrackingFetcher() {
        _classCallCheck(this, TrackingFetcher);
        return _super.apply(this, arguments);
    }
    var _proto = TrackingFetcher.prototype;
    _proto.track = function track(trackData) {
        var _this = this;
        var _this1 = this, _superprop_get_execute = function() {
            return _get(_getPrototypeOf(TrackingFetcher.prototype), "execute", _this);
        };
        return _asyncToGenerator(function() {
            var e;
            return __generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        return [
                            4,
                            _superprop_get_execute().call(_this1, "".concat(_appConfig__WEBPACK_IMPORTED_MODULE_1__.appConfig.baseURL, "/track"), "POST", trackData)
                        ];
                    case 1:
                        return [
                            2,
                            _state.sent()
                        ];
                    case 2:
                        e = _state.sent();
                        _util_logManager__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().debug("Tracking data was run failed", e);
                        return [
                            3,
                            3
                        ];
                    case 3:
                        return [
                            2
                        ];
                }
            });
        })();
    };
    return TrackingFetcher;
}(_baseFetcher__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/appConfig.ts":
/*!**************************!*\
  !*** ./src/appConfig.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appConfig": () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _util_logManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/logManager */ "./src/util/logManager.ts");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var SyntAppConfiguration = /*#__PURE__*/ function() {
    "use strict";
    function SyntAppConfiguration() {
        _classCallCheck(this, SyntAppConfiguration);
        // @ts-ignore
        this.appId = "";
        // @ts-ignore
        this.apiKey = "";
        this.baseURL = "https://vqihir3lr1.execute-api.us-east-2.amazonaws.com/develop";
        this.managementApiUrl = "https://dev-management-function-api.synt.com";
        this.productTrackStreamName = "Kinesis_TimeSeriesProductTrackingService-develop";
        this.publicKey = "";
        this.token = "";
        this.workerPath = "";
        this.appVersion = "";
    }
    var _proto = SyntAppConfiguration.prototype;
    _proto.initGlobalScope = function initGlobalScope() {
        // @ts-ignore
        var snMetadata = window.sn_meta;
        this.apiKey = snMetadata.app_signature;
        _util_logManager__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance().debug("app-id : ", snMetadata.app_id);
        this.appId = "".concat(snMetadata.app_id);
        this.workerPath = snMetadata.app_worker_path;
        this.appVersion = snMetadata.app_version;
    };
    _proto.getCustomerKeys = function getCustomerKeys() {
        return {
            appId: appConfig.appId,
            apiKey: appConfig.apiKey,
            installationKey: appConfig.apiKey
        };
    };
    _proto.getMetadata = function getMetadata() {
        // @ts-ignore
        return window.sn_meta;
    };
    return SyntAppConfiguration;
}();
// @ts-ignore
var appConfig = new SyntAppConfiguration();


/***/ }),

/***/ "./src/constant.ts":
/*!*************************!*\
  !*** ./src/constant.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BROADCAST_MSG": () => (/* binding */ BROADCAST_MSG),
/* harmony export */   "FORCE_SUBSCRIBE_DAYS": () => (/* binding */ FORCE_SUBSCRIBE_DAYS),
/* harmony export */   "INDIVIDUAL_MSG": () => (/* binding */ INDIVIDUAL_MSG),
/* harmony export */   "INDIVIDUAL_MSG_AC": () => (/* binding */ INDIVIDUAL_MSG_AC),
/* harmony export */   "INDIVIDUAL_MSG_BA": () => (/* binding */ INDIVIDUAL_MSG_BA),
/* harmony export */   "INDIVIDUAL_MSG_REC": () => (/* binding */ INDIVIDUAL_MSG_REC),
/* harmony export */   "INDIVIDUAL_MSG_VALUES": () => (/* binding */ INDIVIDUAL_MSG_VALUES),
/* harmony export */   "INDIVIDUAL_MSG_WC": () => (/* binding */ INDIVIDUAL_MSG_WC),
/* harmony export */   "MSG_PATTERN": () => (/* binding */ MSG_PATTERN),
/* harmony export */   "ONE_DAY_TIMESTAMP": () => (/* binding */ ONE_DAY_TIMESTAMP),
/* harmony export */   "SYNT_LOGO_URL": () => (/* binding */ SYNT_LOGO_URL)
/* harmony export */ });
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var MSG_PATTERN = {
    BROADCAST_MSG: 0,
    INDIVIDUAL_MSG: 1
};
var BROADCAST_MSG = 0;
var INDIVIDUAL_MSG_WC = 1;
var INDIVIDUAL_MSG_AC = 2;
var INDIVIDUAL_MSG_BA = 3;
var INDIVIDUAL_MSG_REC = 4;
var INDIVIDUAL_MSG = {
    "wcm": INDIVIDUAL_MSG_WC,
    "acm": INDIVIDUAL_MSG_AC,
    "bam": INDIVIDUAL_MSG_BA,
    "prm": INDIVIDUAL_MSG_REC
};
var _obj;
var INDIVIDUAL_MSG_VALUES = (_obj = {}, _defineProperty(_obj, INDIVIDUAL_MSG_WC, "wcm"), _defineProperty(_obj, INDIVIDUAL_MSG_AC, "acm"), _defineProperty(_obj, INDIVIDUAL_MSG_BA, "bam"), _defineProperty(_obj, INDIVIDUAL_MSG_REC, "prm"), _obj);
var ONE_DAY_TIMESTAMP = 24 * 60 * 60 * 1000;
var FORCE_SUBSCRIBE_DAYS = 7;
var SYNT_LOGO_URL = "https://synt.com/wp-content/uploads/2019/11/logo_small.png";


/***/ }),

/***/ "./src/event-handlers/activate.ts":
/*!****************************************!*\
  !*** ./src/event-handlers/activate.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "handleActivate": () => (/* binding */ handleActivate)
/* harmony export */ });
/// <reference lib="webworker" />
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
var handleActivate = function(event) {
    event.waitUntil(self.clients.claim());
};


/***/ }),

/***/ "./src/event-handlers/click.ts":
/*!*************************************!*\
  !*** ./src/event-handlers/click.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "handleClick": () => (/* binding */ handleClick)
/* harmony export */ });
/* harmony import */ var _api_trackingFetcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/trackingFetcher */ "./src/api/trackingFetcher.ts");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "./src/constant.ts");
/* harmony import */ var _util_logManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/logManager */ "./src/util/logManager.ts");
/// <reference lib="webworker" />
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self1 = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self1, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
var handleClick = function() {
    var _ref = _asyncToGenerator(function(event) {
        return __generator(this, function(_state) {
            _util_logManager__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().debug("Notification click event triggered");
            // click on the notification
            event.notification.close();
            return [
                2,
                openPage(event)
            ];
        });
    });
    return function handleClick(event) {
        return _ref.apply(this, arguments);
    };
}();
var openPage = function() {
    var _ref = _asyncToGenerator(function(event) {
        var _data, actions, msgId, productUrl, appId, installationKey, productID, subscriberID, segmentId, actionItem, msgFragments, messageId, url, msgPattern, actionItemValue, last, eventName, trackingFetcher, windowClients, i, client, urlMatch, e;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        4,
                        ,
                        5
                    ]);
                    _data = event.notification.data, actions = _data.actions, msgId = _data.messageId, productUrl = _data.url, appId = _data.appId, installationKey = _data.installationKey, productID = _data.productID, subscriberID = _data.s, segmentId = _data.pnid;
                    actionItem = (actions || []).find(function(item) {
                        return item.action === event.action;
                    });
                    msgFragments = msgId.toString().split("::");
                    messageId = msgFragments[msgFragments.length - 1];
                    url = productUrl;
                    msgPattern = _constant__WEBPACK_IMPORTED_MODULE_1__.MSG_PATTERN.BROADCAST_MSG;
                    if (msgId.indexOf("INDIVIDUAL_TARGETED_MSG") > -1) {
                        msgPattern = _constant__WEBPACK_IMPORTED_MODULE_1__.INDIVIDUAL_MSG[msgFragments[1]];
                    }
                    if (actionItem) {
                        actionItemValue = actionItem === null || actionItem === void 0 ? void 0 : actionItem.value;
                        url = actionItemValue === null || actionItemValue === void 0 ? void 0 : actionItemValue.link;
                    }
                    if (url.indexOf("?") > -1) {
                        url += "&id=".concat(msgPattern) + messageId;
                    } else {
                        last = url.slice(-1);
                        if (last === "/") {
                            url = url.toString().slice(0, -1);
                        }
                        url += "?id=".concat(msgPattern) + messageId;
                    }
                    // process for message linked to a segment
                    if (segmentId && segmentId !== "") {
                        url += "&segmentId=".concat(segmentId);
                    }
                    eventName = "webpush-notification-clicked";
                    if (!messageId) return [
                        3,
                        2
                    ];
                    trackingFetcher = new _api_trackingFetcher__WEBPACK_IMPORTED_MODULE_0__["default"]();
                    return [
                        4,
                        trackingFetcher.track(_objectSpread({
                            subscriberID: subscriberID,
                            event: eventName,
                            productID: productID,
                            messageId: event.notification.data.messageId,
                            segmentId: segmentId,
                            timestamp: Date.now()
                        }, {
                            appId: appId,
                            installationKey: installationKey
                        }))
                    ];
                case 1:
                    _state.sent();
                    _state.label = 2;
                case 2:
                    return [
                        4,
                        self.clients.matchAll({
                            type: "window"
                        })
                    ];
                case 3:
                    windowClients = _state.sent();
                    for(i = 0; i < windowClients.length; i++){
                        client = windowClients[i];
                        urlMatch = client.url === url;
                        if (urlMatch && "focus" in client) {
                            return [
                                2,
                                client.focus()
                            ];
                        }
                    }
                    if (!url) {
                        return [
                            2
                        ];
                    }
                    return [
                        2,
                        self.clients.openWindow(url)
                    ];
                case 4:
                    e = _state.sent();
                    _util_logManager__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().debug(e);
                    return [
                        3,
                        5
                    ];
                case 5:
                    return [
                        2
                    ];
            }
        });
    });
    return function openPage(event) {
        return _ref.apply(this, arguments);
    };
}();


/***/ }),

/***/ "./src/event-handlers/close.ts":
/*!*************************************!*\
  !*** ./src/event-handlers/close.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "handleClose": () => (/* binding */ handleClose)
/* harmony export */ });
/* harmony import */ var _api_trackingFetcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/trackingFetcher */ "./src/api/trackingFetcher.ts");
/* harmony import */ var _util_logManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/logManager */ "./src/util/logManager.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};


/// <reference lib="webworker" />
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);
var eventClosed = {};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
var handleClose = function() {
    var _ref = _asyncToGenerator(function(event) {
        var messageId;
        return __generator(this, function(_state) {
            _util_logManager__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().debug("Called %conNotificationClosed(".concat(JSON.stringify(event, null, 4), "):"), 'padding: 0 1px 1px 5px;border: 1px solid #ddd;border-radius: 3px;font-family: Monaco,"DejaVu Sans Mono","Courier New",monospace;color: #444;', event);
            messageId = event.notification.data.messageId;
            if (eventClosed[messageId]) {
                _util_logManager__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().debug("message id exist in the queue : ", messageId);
                return [
                    2
                ];
            }
            eventClosed[messageId] = true;
            return [
                2,
                new Promise(function(resolve) {
                    var _data = event.notification.data, messageId = _data.messageId, appId = _data.appId, installationKey = _data.installationKey;
                    _util_logManager__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().debug("handleClose running....", JSON.stringify(eventClosed));
                    if (!event || !event.notification || !event.notification.data || !event.notification.data.messageId) {
                        return Promise.resolve();
                    }
                    _util_logManager__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().debug("Notification closed : Message ID = ", messageId);
                    var eventName = "webpush-notification-closed";
                    var trackingFetcher = new _api_trackingFetcher__WEBPACK_IMPORTED_MODULE_0__["default"]();
                    trackingFetcher.track(_objectSpread({
                        event: eventName,
                        messageId: messageId
                    }, {
                        appId: appId,
                        apiKey: installationKey
                    }));
                    eventClosed = {};
                    resolve({});
                })
            ];
        });
    });
    return function handleClose(event) {
        return _ref.apply(this, arguments);
    };
}();


/***/ }),

/***/ "./src/event-handlers/install.ts":
/*!***************************************!*\
  !*** ./src/event-handlers/install.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "handleInstall": () => (/* binding */ handleInstall)
/* harmony export */ });
/* harmony import */ var _util_logManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/logManager */ "./src/util/logManager.ts");
/// <reference lib="webworker" />

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
var handleInstall = function(event) {
    _util_logManager__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance().debug("worker installing...v1");
    event.waitUntil(self.skipWaiting());
};


/***/ }),

/***/ "./src/event-handlers/push.ts":
/*!************************************!*\
  !*** ./src/event-handlers/push.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "handlePush": () => (/* binding */ handlePush)
/* harmony export */ });
/* harmony import */ var _util_payload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/payload */ "./src/util/payload.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self1 = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self1, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};

/// <reference lib="webworker" />
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
var handlePush = function() {
    var _ref = _asyncToGenerator(function(event) {
        var subscription, payload;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        getSubscription()
                    ];
                case 1:
                    subscription = _state.sent();
                    return [
                        4,
                        getPayload(event, subscription)
                    ];
                case 2:
                    payload = _state.sent();
                    return [
                        2,
                        show(payload)
                    ];
            }
        });
    });
    return function handlePush(event) {
        return _ref.apply(this, arguments);
    };
}();
var getSubscription = function() {
    var _ref = _asyncToGenerator(function() {
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        self.registration.pushManager.getSubscription()
                    ];
                case 1:
                    return [
                        2,
                        _state.sent()
                    ];
            }
        });
    });
    return function getSubscription() {
        return _ref.apply(this, arguments);
    };
}();
var getPayload = function() {
    var _ref = _asyncToGenerator(function(event, subscription) {
        var payload, data, endpoint;
        return __generator(this, function(_state) {
            data = event.data;
            if (data) {
                payload = Promise.resolve(event.data && event.data.json());
            } else {
                if (!subscription || !subscription.endpoint) {
                    return [
                        2,
                        Promise.reject()
                    ];
                }
                endpoint = subscription.endpoint;
                payload = (0,_util_payload__WEBPACK_IMPORTED_MODULE_0__.fetchPayload)(endpoint);
            }
            return [
                2,
                payload
            ];
        });
    });
    return function getPayload(event, subscription) {
        return _ref.apply(this, arguments);
    };
}();
/* eslint-disable */ // TODO will review again this function
var show = function() {
    var _ref = _asyncToGenerator(function(payload) {
        var title, options, integrationInfo, optionsFiltered;
        return __generator(this, function(_state) {
            title = payload.title, options = payload.options, integrationInfo = payload.integrationInfo;
            optionsFiltered = Object.keys(options).filter(function(key) {
                return options[key] && options[key] !== "";
            }).reduce(function(obj, key) {
                obj[key] = options[key];
                return obj;
            }, {});
            return [
                2,
                self.registration.showNotification(title, _objectSpreadProps(_objectSpread({}, optionsFiltered), {
                    data: integrationInfo,
                    tag: Math.random().toString(),
                    timestamp: new Date().getTime()
                }))
            ];
        });
    } /* eslint-enable */ );
    return function show(payload) {
        return _ref.apply(this, arguments);
    };
}();


/***/ }),

/***/ "./src/util/logManager.ts":
/*!********************************!*\
  !*** ./src/util/logManager.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogManager)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var LogLevel;
(function(LogLevel) {
    LogLevel[LogLevel["ERROR"] = 1] = "ERROR";
    LogLevel[LogLevel["WARN"] = 2] = "WARN";
    LogLevel[LogLevel["INFO"] = 3] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 4] = "DEBUG";
})(LogLevel || (LogLevel = {}));
var LogManager = /*#__PURE__*/ function() {
    "use strict";
    function LogManager(logLevel) {
        _classCallCheck(this, LogManager);
        this.enableDebugLog = false;
        this.logLevel = logLevel;
        this.enableDebugLog = LogManager.isEnableDebugLog();
    }
    var _proto = LogManager.prototype;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _proto.log = function log(level, message) {
        switch(level){
            case LogLevel.ERROR:
                var _console;
                (_console = console).error.apply(_console, _toConsumableArray(message));
                break;
            case LogLevel.WARN:
                var _console1;
                this.enableDebugLog && (_console1 = console).warn.apply(_console1, _toConsumableArray(message));
                break;
            case LogLevel.INFO:
                var _console2;
                (_console2 = console).info.apply(_console2, _toConsumableArray(message));
                break;
            case LogLevel.DEBUG:
                var _console3;
                this.enableDebugLog && (_console3 = console).debug.apply(_console3, _toConsumableArray(message));
                break;
            default:
                var _console4;
                this.enableDebugLog && (_console4 = console).debug.apply(_console4, _toConsumableArray(message));
                break;
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _proto.error = function error() {
        for(var _len = arguments.length, message = new Array(_len), _key = 0; _key < _len; _key++){
            message[_key] = arguments[_key];
        }
        this.log(LogLevel.ERROR, message);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _proto.warn = function warn() {
        for(var _len = arguments.length, message = new Array(_len), _key = 0; _key < _len; _key++){
            message[_key] = arguments[_key];
        }
        this.log(LogLevel.WARN, message);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _proto.info = function info() {
        for(var _len = arguments.length, message = new Array(_len), _key = 0; _key < _len; _key++){
            message[_key] = arguments[_key];
        }
        this.log(LogLevel.INFO, message);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _proto.debug = function debug() {
        for(var _len = arguments.length, message = new Array(_len), _key = 0; _key < _len; _key++){
            message[_key] = arguments[_key];
        }
        this.log(LogLevel.DEBUG, message);
    };
    LogManager.getInstance = function getInstance() {
        var logLevel = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : LogLevel.INFO;
        if (!LogManager.instance) {
            LogManager.instance = new LogManager(logLevel);
        }
        return LogManager.instance;
    };
    LogManager.isEnableDebugLog = function isEnableDebugLog() {
        try {
            if (typeof window === "undefined" || typeof window.localStorage === "undefined") {
                return false;
            }
            var debugLogEnabled = window.localStorage.getItem("synt_debug_log_enabled");
            return !!(debugLogEnabled && debugLogEnabled.toLowerCase() === "true");
        } catch (e) {
            return false;
        }
    };
    return LogManager;
}();



/***/ }),

/***/ "./src/util/payload.ts":
/*!*****************************!*\
  !*** ./src/util/payload.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchPayload": () => (/* binding */ fetchPayload)
/* harmony export */ });
/* harmony import */ var _appConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../appConfig */ "./src/appConfig.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};

var fetchPayload = function() {
    var _ref = _asyncToGenerator(function(endpoint) {
        var url, fetchOpts, response;
        return __generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    url = "".concat(_appConfig__WEBPACK_IMPORTED_MODULE_0__.appConfig.managementApiUrl, "/api/push/notification-data?endpoint=").concat(encodeURIComponent(endpoint));
                    fetchOpts = {
                        method: "GET",
                        mode: "cors",
                        redirect: "follow",
                        headers: new Headers({
                            accept: "application/json",
                            key: _appConfig__WEBPACK_IMPORTED_MODULE_0__.appConfig.apiKey
                        })
                    };
                    return [
                        4,
                        fetch(url, fetchOpts)
                    ];
                case 1:
                    response = _state.sent();
                    return [
                        2,
                        response.json()
                    ];
            }
        });
    });
    return function fetchPayload(endpoint) {
        return _ref.apply(this, arguments);
    };
}();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/worker-script.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _appConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appConfig */ "./src/appConfig.ts");
/* harmony import */ var _event_handlers_activate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-handlers/activate */ "./src/event-handlers/activate.ts");
/* harmony import */ var _event_handlers_click__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-handlers/click */ "./src/event-handlers/click.ts");
/* harmony import */ var _event_handlers_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-handlers/close */ "./src/event-handlers/close.ts");
/* harmony import */ var _event_handlers_install__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-handlers/install */ "./src/event-handlers/install.ts");
/* harmony import */ var _event_handlers_push__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-handlers/push */ "./src/event-handlers/push.ts");
/* harmony import */ var _util_logManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/logManager */ "./src/util/logManager.ts");
/// <reference lib="WebWorker" />







self.addEventListener("install", function(event) {
    return (0,_event_handlers_install__WEBPACK_IMPORTED_MODULE_4__.handleInstall)(event);
});
self.addEventListener("activate", function(event) {
    return (0,_event_handlers_activate__WEBPACK_IMPORTED_MODULE_1__.handleActivate)(event);
});
self.addEventListener("notificationclick", function(event) {
    return event.waitUntil((0,_event_handlers_click__WEBPACK_IMPORTED_MODULE_2__.handleClick)(event));
});
self.addEventListener("push", function(event) {
    return event.waitUntil((0,_event_handlers_push__WEBPACK_IMPORTED_MODULE_5__.handlePush)(event));
});
self.addEventListener("notificationclose", function(event) {
    _util_logManager__WEBPACK_IMPORTED_MODULE_6__["default"].getInstance().debug("notificationclose ------------->");
    event.waitUntil((0,_event_handlers_close__WEBPACK_IMPORTED_MODULE_3__.handleClose)(event));
});
self.addEventListener("close", function() {
    _util_logManager__WEBPACK_IMPORTED_MODULE_6__["default"].getInstance().debug("what is close v2------------->");
});
self.addEventListener("message", function(event) {
    try {
        var data = JSON.parse(event.data);
        // api for management ( need for get broadcast message )
        var managementApiUrl = data.managementApiUrl, apiKey = data.apiKey, token = data.token, appId = data.appId;
        _util_logManager__WEBPACK_IMPORTED_MODULE_6__["default"].getInstance().debug(data);
        _appConfig__WEBPACK_IMPORTED_MODULE_0__.appConfig.managementApiUrl = managementApiUrl;
        _appConfig__WEBPACK_IMPORTED_MODULE_0__.appConfig.apiKey = apiKey;
        _appConfig__WEBPACK_IMPORTED_MODULE_0__.appConfig.appId = appId;
        // api for tracking data
        // appConfig.trackingUrl = trackingUrl;
        _appConfig__WEBPACK_IMPORTED_MODULE_0__.appConfig.token = token;
    } catch (e) {
        _util_logManager__WEBPACK_IMPORTED_MODULE_6__["default"].getInstance().debug("Cant populate configuration from opt-in script");
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ludC13b3JrZXItc2NyaXB0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFFeEI7O2FBQU1DOzhCQUFBQTthQUNuQkMsZ0JBQWdCO1lBQ2QsZ0JBQWdCO1lBQ2hCLCtCQUErQjtZQUMvQixVQUFVO1FBQ1o7O2lCQUxtQkQ7SUFPbkJFLE9BQUFBLE9BYUMsR0FiREEsU0FBQUEsUUFBV0MsR0FBVyxFQUF1RTtZQUFyRUMsU0FBQUEsaUVBQVMsS0FBSyxFQUFFQywyREFBZUMsVUFBQUEsaUVBQWtDLENBQUMsQ0FBQztRQUN6RixPQUFPQyxNQUFNSixLQUFLO1lBQ2hCQyxRQUFBQTtZQUNBSSxNQUFNQyxLQUFLQyxTQUFTLENBQUNMO1lBQ3JCQyxTQUFTLG1EQUNKLElBQUksQ0FBQ0wsYUFBYSxFQUNqQkssV0FBVyxDQUFDO2dCQUNoQixVQUFVUCx1REFBZTtnQkFDekIsV0FBV0Esd0RBQWdCO2dCQUN0QkEsdURBQWUsR0FBRztnQkFBQyxhQUFhQSx1REFBZTtZQUFBLElBQUksQ0FBQyxDQUFDO1FBRTlELEdBQ0dlLElBQUksQ0FBQyxTQUFDQzttQkFBUUEsSUFBSUMsSUFBSTs7SUFDM0I7V0FwQm1CaEI7O0FBcUJwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNhO0FBQ1Q7QUFhN0I7O2NBQU1rQjs4QkFBQUE7YUFBQUE7OEJBQUFB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LEdBQUdPLEtBQUssQ0FBQztJQUMvQm1DLE1BQU1DLFNBQVMsQ0FBQytDLGtFQUFXQSxDQUFDaEQ7QUFDOUI7QUFDQUUsS0FBS3dHLGdCQUFnQixDQUFDLFNBQVMsV0FBTTtJQUNuQ3BKLG9FQUFzQixHQUFHTyxLQUFLLENBQUM7QUFDakM7QUFFQXFDLEtBQUt3RyxnQkFBZ0IsQ0FBQyxXQUFXLFNBQVUxRyxLQUFLLEVBQUU7SUFDaEQsSUFBSTtRQUNGLElBQU0yQixPQUFPN0UsS0FBSzZKLEtBQUssQ0FBQzNHLE1BQU0yQixJQUFJO1FBQ2xDLHdEQUF3RDtRQUN4RCxJQUFPekQsbUJBQTBDeUQsS0FBMUN6RCxrQkFBa0JqQixTQUF3QjBFLEtBQXhCMUUsUUFBUUMsUUFBZ0J5RSxLQUFoQnpFLE9BQU9GLFFBQVMyRSxLQUFUM0U7UUFDeENNLG9FQUFzQixHQUFHTyxLQUFLLENBQUM4RDtRQUMvQnZGLGtFQUEwQixHQUFHOEI7UUFDN0I5Qix3REFBZ0IsR0FBR2E7UUFDbkJiLHVEQUFlLEdBQUdZO1FBQ2xCLHdCQUF3QjtRQUN4Qix1Q0FBdUM7UUFDdkNaLHVEQUFlLEdBQUdjO0lBQ3BCLEVBQUUsT0FBT1EsR0FBRztRQUNWSixvRUFBc0IsR0FBR08sS0FBSyxDQUFDO0lBQ2pDO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXNzYWdpbmctc2VydmljZS13b3JrZXIvLi9zcmMvYXBpL2Jhc2VGZXRjaGVyLnRzIiwid2VicGFjazovL21lc3NhZ2luZy1zZXJ2aWNlLXdvcmtlci8uL3NyYy9hcGkvdHJhY2tpbmdGZXRjaGVyLnRzIiwid2VicGFjazovL21lc3NhZ2luZy1zZXJ2aWNlLXdvcmtlci8uL3NyYy9hcHBDb25maWcudHMiLCJ3ZWJwYWNrOi8vbWVzc2FnaW5nLXNlcnZpY2Utd29ya2VyLy4vc3JjL2NvbnN0YW50LnRzIiwid2VicGFjazovL21lc3NhZ2luZy1zZXJ2aWNlLXdvcmtlci8uL3NyYy9ldmVudC1oYW5kbGVycy9hY3RpdmF0ZS50cyIsIndlYnBhY2s6Ly9tZXNzYWdpbmctc2VydmljZS13b3JrZXIvLi9zcmMvZXZlbnQtaGFuZGxlcnMvY2xpY2sudHMiLCJ3ZWJwYWNrOi8vbWVzc2FnaW5nLXNlcnZpY2Utd29ya2VyLy4vc3JjL2V2ZW50LWhhbmRsZXJzL2Nsb3NlLnRzIiwid2VicGFjazovL21lc3NhZ2luZy1zZXJ2aWNlLXdvcmtlci8uL3NyYy9ldmVudC1oYW5kbGVycy9pbnN0YWxsLnRzIiwid2VicGFjazovL21lc3NhZ2luZy1zZXJ2aWNlLXdvcmtlci8uL3NyYy9ldmVudC1oYW5kbGVycy9wdXNoLnRzIiwid2VicGFjazovL21lc3NhZ2luZy1zZXJ2aWNlLXdvcmtlci8uL3NyYy91dGlsL2xvZ01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbWVzc2FnaW5nLXNlcnZpY2Utd29ya2VyLy4vc3JjL3V0aWwvcGF5bG9hZC50cyIsIndlYnBhY2s6Ly9tZXNzYWdpbmctc2VydmljZS13b3JrZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWVzc2FnaW5nLXNlcnZpY2Utd29ya2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZXNzYWdpbmctc2VydmljZS13b3JrZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZXNzYWdpbmctc2VydmljZS13b3JrZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZXNzYWdpbmctc2VydmljZS13b3JrZXIvLi9zcmMvd29ya2VyLXNjcmlwdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FwcENvbmZpZ30gZnJvbSAnLi4vYXBwQ29uZmlnJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUZldGNoZXIge1xuICBkZWZhdWx0SGVhZGVyID0ge1xuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcbiAgICAnT3JpZ2luJzogJyonXG4gIH1cblxuICBleGVjdXRlPFQ+KHVybDogc3RyaW5nLCBtZXRob2QgPSAnR0VUJywgcGFyYW1ldGVyczogVCwgaGVhZGVyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9KSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1ldGVycyksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIC4uLnRoaXMuZGVmYXVsdEhlYWRlcixcbiAgICAgICAgLi4uKGhlYWRlcnMgfHwge30pLFxuICAgICAgICAnYXBwLWlkJzogYXBwQ29uZmlnLmFwcElkLFxuICAgICAgICAnYXBpLWtleSc6IGFwcENvbmZpZy5hcGlLZXksXG4gICAgICAgIC4uLigoYXBwQ29uZmlnLnRva2VuID8geyd4LWFwaS1rZXknOiBhcHBDb25maWcudG9rZW59IDoge30pKVxuICAgICAgfSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgfVxufSIsImltcG9ydCBCYXNlRmV0Y2hlciBmcm9tICcuL2Jhc2VGZXRjaGVyJztcbmltcG9ydCB7YXBwQ29uZmlnLCBDdXN0b21lcktleXN9IGZyb20gJy4uL2FwcENvbmZpZyc7XG5pbXBvcnQgTG9nTWFuYWdlciBmcm9tICcuLi91dGlsL2xvZ01hbmFnZXInO1xuXG5leHBvcnQgdHlwZSBUcmFja0RhdGFQYXlsb2FkID0ge1xuICBldmVudDogc3RyaW5nLFxuICBtZXNzYWdlSWQ/OiBzdHJpbmdcbiAgc3Vic2NyaWJlcklEPzogc3RyaW5nXG4gIHByb2R1Y3RJRD86IHN0cmluZ1xuICB0aW1lc3RhbXA/OiBudW1iZXJcbiAgZGF5T2ZXZWVrTmFtZT86IHN0cmluZ1xuICBzZWdtZW50SWQ/OiBzdHJpbmdcbn0gJiBDdXN0b21lcktleXM7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2tpbmdGZXRjaGVyIGV4dGVuZHMgQmFzZUZldGNoZXIge1xuICBhc3luYyB0cmFjayh0cmFja0RhdGE6IFRyYWNrRGF0YVBheWxvYWQpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGF3YWl0IHN1cGVyLmV4ZWN1dGUoYCR7YXBwQ29uZmlnLmJhc2VVUkx9L3RyYWNrYCwgJ1BPU1QnLCB0cmFja0RhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIExvZ01hbmFnZXIuZ2V0SW5zdGFuY2UoKS5kZWJ1ZygnVHJhY2tpbmcgZGF0YSB3YXMgcnVuIGZhaWxlZCcsIGUpO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgTG9nTWFuYWdlciBmcm9tICcuL3V0aWwvbG9nTWFuYWdlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tZXJLZXlzIHtcbiAgYXBwSWQ/OiBzdHJpbmc7XG4gIGFwaUtleT86IHN0cmluZztcbiAgaW5zdGFsbGF0aW9uS2V5Pzogc3RyaW5nO1xuICBzdWJzY3JpYmVySWQ/OiBzdHJpbmc7XG59XG5cbmNsYXNzIFN5bnRBcHBDb25maWd1cmF0aW9uIHtcbiAgLy8gQHRzLWlnbm9yZVxuICBhcHBJZCA9ICcnO1xuICAvLyBAdHMtaWdub3JlXG4gIGFwaUtleSA9ICcnO1xuICBiYXNlVVJMID0gcHJvY2Vzcy5lbnYuQkFTRV9VUkw7XG4gIG1hbmFnZW1lbnRBcGlVcmwgPSBwcm9jZXNzLmVudi5NQVBJX1VSTDtcbiAgcHJvZHVjdFRyYWNrU3RyZWFtTmFtZSA9IHByb2Nlc3MuZW52LlNUUkVBTV9OQU1FO1xuICBwdWJsaWNLZXkgPSAnJztcbiAgdG9rZW4gPSAnJztcblxuICB3b3JrZXJQYXRoID0gJydcbiAgYXBwVmVyc2lvbiA9ICcnXG5cbiAgaW5pdEdsb2JhbFNjb3BlKCk6IHZvaWQge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBzbk1ldGFkYXRhID0gd2luZG93LnNuX21ldGE7XG4gICAgdGhpcy5hcGlLZXkgPSBzbk1ldGFkYXRhLmFwcF9zaWduYXR1cmVcbiAgICBMb2dNYW5hZ2VyLmdldEluc3RhbmNlKCkuZGVidWcoJ2FwcC1pZCA6ICcsIHNuTWV0YWRhdGEuYXBwX2lkKVxuICAgIHRoaXMuYXBwSWQgPSBgJHtzbk1ldGFkYXRhLmFwcF9pZH1gXG4gICAgdGhpcy53b3JrZXJQYXRoID0gc25NZXRhZGF0YS5hcHBfd29ya2VyX3BhdGg7XG4gICAgdGhpcy5hcHBWZXJzaW9uID0gc25NZXRhZGF0YS5hcHBfdmVyc2lvbjtcbiAgfVxuXG4gIGdldEN1c3RvbWVyS2V5cygpOiBDdXN0b21lcktleXMge1xuICAgIHJldHVybiB7XG4gICAgICBhcHBJZDogYXBwQ29uZmlnLmFwcElkLFxuICAgICAgYXBpS2V5OiBhcHBDb25maWcuYXBpS2V5LFxuICAgICAgaW5zdGFsbGF0aW9uS2V5OiBhcHBDb25maWcuYXBpS2V5XG4gICAgfVxuICB9XG5cbiAgZ2V0TWV0YWRhdGEoKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiB3aW5kb3cuc25fbWV0YTtcbiAgfVxufVxuXG4vLyBAdHMtaWdub3JlXG5leHBvcnQgY29uc3QgYXBwQ29uZmlnID0gbmV3IFN5bnRBcHBDb25maWd1cmF0aW9uKCk7XG4iLCJleHBvcnQgY29uc3QgTVNHX1BBVFRFUk4gPSB7XG4gIEJST0FEQ0FTVF9NU0c6IDAsXG4gIElORElWSURVQUxfTVNHOiAxXG59XG5leHBvcnQgY29uc3QgQlJPQURDQVNUX01TRyA9IDA7XG5leHBvcnQgY29uc3QgSU5ESVZJRFVBTF9NU0dfV0MgPSAxO1xuZXhwb3J0IGNvbnN0IElORElWSURVQUxfTVNHX0FDID0gMjtcbmV4cG9ydCBjb25zdCBJTkRJVklEVUFMX01TR19CQSA9IDM7XG5leHBvcnQgY29uc3QgSU5ESVZJRFVBTF9NU0dfUkVDID0gNDtcblxuXG5leHBvcnQgY29uc3QgSU5ESVZJRFVBTF9NU0c6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7XG4gICd3Y20nOiBJTkRJVklEVUFMX01TR19XQywgLy93ZWxjb21lTWVzc2FnaW5nXG4gICdhY20nOiBJTkRJVklEVUFMX01TR19BQywgLy9hYmFuZG9uZWRDYXJ0TWVzc2FnaW5nXG4gICdiYW0nOiBJTkRJVklEVUFMX01TR19CQSwgLy9icm93c2VBYmFuZG9ubWVudE1lc3NhZ2luZ1xuICAncHJtJzogSU5ESVZJRFVBTF9NU0dfUkVDLCAvL3JlY29tbWVuZGF0aW9uXG59XG5cbmV4cG9ydCBjb25zdCBJTkRJVklEVUFMX01TR19WQUxVRVM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIFtJTkRJVklEVUFMX01TR19XQ106ICd3Y20nLFxuICBbSU5ESVZJRFVBTF9NU0dfQUNdOiAnYWNtJyxcbiAgW0lORElWSURVQUxfTVNHX0JBXTogJ2JhbScsXG4gIFtJTkRJVklEVUFMX01TR19SRUNdOiAncHJtJ1xufVxuXG5leHBvcnQgY29uc3QgT05FX0RBWV9USU1FU1RBTVAgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuXG5leHBvcnQgY29uc3QgRk9SQ0VfU1VCU0NSSUJFX0RBWVMgPSA3O1xuXG5leHBvcnQgY29uc3QgU1lOVF9MT0dPX1VSTCA9ICdodHRwczovL3N5bnQuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzExL2xvZ29fc21hbGwucG5nJyIsIi8vLyA8cmVmZXJlbmNlIGxpYj1cIndlYndvcmtlclwiIC8+XG5leHBvcnQgZGVmYXVsdCBudWxsXG5kZWNsYXJlIGxldCBzZWxmOiBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGVcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXNcbmV4cG9ydCBjb25zdCBoYW5kbGVBY3RpdmF0ZSA9IChldmVudDogRXh0ZW5kYWJsZUV2ZW50KSA9PiB7XG4gIGV2ZW50LndhaXRVbnRpbChzZWxmLmNsaWVudHMuY2xhaW0oKSk7XG59OyIsIi8vLyA8cmVmZXJlbmNlIGxpYj1cIndlYndvcmtlclwiIC8+XG5pbXBvcnQgVHJhY2tpbmdGZXRjaGVyIGZyb20gJy4uL2FwaS90cmFja2luZ0ZldGNoZXInO1xuaW1wb3J0IHtJTkRJVklEVUFMX01TRywgTVNHX1BBVFRFUk59IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCBMb2dNYW5hZ2VyIGZyb20gJy4uL3V0aWwvbG9nTWFuYWdlcic7XG5leHBvcnQgZGVmYXVsdCBudWxsXG5kZWNsYXJlIGxldCBzZWxmOiBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGVcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXNcbmV4cG9ydCBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jIChldmVudDogTm90aWZpY2F0aW9uRXZlbnQpID0+IHtcbiAgTG9nTWFuYWdlci5nZXRJbnN0YW5jZSgpLmRlYnVnKCdOb3RpZmljYXRpb24gY2xpY2sgZXZlbnQgdHJpZ2dlcmVkJylcbiAgLy8gY2xpY2sgb24gdGhlIG5vdGlmaWNhdGlvblxuICBldmVudC5ub3RpZmljYXRpb24uY2xvc2UoKTtcbiAgcmV0dXJuIG9wZW5QYWdlKGV2ZW50KTtcbn07XG5cbmNvbnN0IG9wZW5QYWdlID0gYXN5bmMgKGV2ZW50OiBOb3RpZmljYXRpb25FdmVudCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHthY3Rpb25zLCBtZXNzYWdlSWQ6IG1zZ0lkLCB1cmw6IHByb2R1Y3RVcmwsIGFwcElkLCBpbnN0YWxsYXRpb25LZXksIHByb2R1Y3RJRCwgczogc3Vic2NyaWJlcklELCBwbmlkOiBzZWdtZW50SWR9ID0gZXZlbnQubm90aWZpY2F0aW9uLmRhdGE7XG4gICAgY29uc3QgYWN0aW9uSXRlbSA9IChhY3Rpb25zIHx8IFtdKS5maW5kKChpdGVtOiB7IGFjdGlvbjogc3RyaW5nOyB9KSA9PiBpdGVtLmFjdGlvbiA9PT0gZXZlbnQuYWN0aW9uKTtcbiAgICBjb25zdCBtc2dGcmFnbWVudHMgPSBtc2dJZC50b1N0cmluZygpLnNwbGl0KCc6OicpXG4gICAgY29uc3QgbWVzc2FnZUlkID0gbXNnRnJhZ21lbnRzW21zZ0ZyYWdtZW50cy5sZW5ndGggLSAxXTtcbiAgICBsZXQgdXJsID0gcHJvZHVjdFVybDtcbiAgICBsZXQgbXNnUGF0dGVybiA9IE1TR19QQVRURVJOLkJST0FEQ0FTVF9NU0c7XG4gICAgaWYgKG1zZ0lkLmluZGV4T2YoJ0lORElWSURVQUxfVEFSR0VURURfTVNHJykgPiAtMSl7XG4gICAgICBtc2dQYXR0ZXJuID0gSU5ESVZJRFVBTF9NU0dbbXNnRnJhZ21lbnRzWzFdXVxuICAgIH1cbiAgICBpZiAoYWN0aW9uSXRlbSkge1xuICAgICAgY29uc3QgYWN0aW9uSXRlbVZhbHVlID0gYWN0aW9uSXRlbT8udmFsdWU7XG4gICAgICB1cmwgPSBhY3Rpb25JdGVtVmFsdWU/Lmxpbms7XG4gICAgfVxuICAgIGlmICh1cmwuaW5kZXhPZignPycpID4gLTEpIHtcbiAgICAgIHVybCArPSBgJmlkPSR7bXNnUGF0dGVybn1gICsgbWVzc2FnZUlkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYXN0ID0gdXJsLnNsaWNlKC0xKTtcbiAgICAgIGlmIChsYXN0ID09PSAnLycpIHtcbiAgICAgICAgdXJsID0gdXJsLnRvU3RyaW5nKCkuc2xpY2UoMCwgLTEpO1xuICAgICAgfVxuICAgICAgdXJsICs9IGA/aWQ9JHttc2dQYXR0ZXJufWAgKyBtZXNzYWdlSWQ7XG4gICAgfVxuICAgIC8vIHByb2Nlc3MgZm9yIG1lc3NhZ2UgbGlua2VkIHRvIGEgc2VnbWVudFxuICAgIGlmIChzZWdtZW50SWQgJiYgc2VnbWVudElkICE9PSAnJykge1xuICAgICAgdXJsICs9IGAmc2VnbWVudElkPSR7c2VnbWVudElkfWBcbiAgICB9XG4gICAgY29uc3QgZXZlbnROYW1lID0gJ3dlYnB1c2gtbm90aWZpY2F0aW9uLWNsaWNrZWQnO1xuICAgIGlmIChtZXNzYWdlSWQpIHtcbiAgICAgIGNvbnN0IHRyYWNraW5nRmV0Y2hlciA9IG5ldyBUcmFja2luZ0ZldGNoZXIoKTtcbiAgICAgIGF3YWl0IHRyYWNraW5nRmV0Y2hlci50cmFjayh7XG4gICAgICAgIHN1YnNjcmliZXJJRDogc3Vic2NyaWJlcklELFxuICAgICAgICBldmVudDogZXZlbnROYW1lLFxuICAgICAgICBwcm9kdWN0SUQsXG4gICAgICAgIG1lc3NhZ2VJZDogZXZlbnQubm90aWZpY2F0aW9uLmRhdGEubWVzc2FnZUlkLFxuICAgICAgICBzZWdtZW50SWQsXG4gICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgICAgLi4uKHthcHBJZCwgaW5zdGFsbGF0aW9uS2V5fSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgd2luZG93Q2xpZW50cyA9IGF3YWl0IHNlbGYuY2xpZW50cy5tYXRjaEFsbCh7dHlwZTogJ3dpbmRvdyd9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpbmRvd0NsaWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNsaWVudCA9IHdpbmRvd0NsaWVudHNbaV07XG4gICAgICBjb25zdCB1cmxNYXRjaCA9IChjbGllbnQudXJsID09PSB1cmwpO1xuICAgICAgaWYgKHVybE1hdGNoICYmICdmb2N1cycgaW4gY2xpZW50KSB7XG4gICAgICAgIHJldHVybiBjbGllbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF1cmwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGYuY2xpZW50cy5vcGVuV2luZG93KHVybCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBMb2dNYW5hZ2VyLmdldEluc3RhbmNlKCkuZGVidWcoZSk7XG4gIH1cblxufTtcbiIsImltcG9ydCBUcmFja2luZ0ZldGNoZXIgZnJvbSAnLi4vYXBpL3RyYWNraW5nRmV0Y2hlcic7XG5pbXBvcnQgTG9nTWFuYWdlciBmcm9tICcuLi91dGlsL2xvZ01hbmFnZXInO1xuLy8vIDxyZWZlcmVuY2UgbGliPVwid2Vid29ya2VyXCIgLz5cblxuZXhwb3J0IGRlZmF1bHQgbnVsbFxuXG5sZXQgZXZlbnRDbG9zZWQ6IHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9ID0ge307XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlc1xuZXhwb3J0IGNvbnN0IGhhbmRsZUNsb3NlID0gYXN5bmMgKGV2ZW50OiBOb3RpZmljYXRpb25FdmVudCkgPT4ge1xuICBMb2dNYW5hZ2VyLmdldEluc3RhbmNlKCkuZGVidWcoYENhbGxlZCAlY29uTm90aWZpY2F0aW9uQ2xvc2VkKCR7SlNPTi5zdHJpbmdpZnkoZXZlbnQsIG51bGwsIDQpfSk6YCwgJ3BhZGRpbmc6IDAgMXB4IDFweCA1cHg7Ym9yZGVyOiAxcHggc29saWQgI2RkZDtib3JkZXItcmFkaXVzOiAzcHg7Zm9udC1mYW1pbHk6IE1vbmFjbyxcIkRlamFWdSBTYW5zIE1vbm9cIixcIkNvdXJpZXIgTmV3XCIsbW9ub3NwYWNlO2NvbG9yOiAjNDQ0OycsIGV2ZW50KTtcbiAgY29uc3Qge21lc3NhZ2VJZH0gPSBldmVudC5ub3RpZmljYXRpb24uZGF0YTtcbiAgaWYgKChldmVudENsb3NlZCkgW21lc3NhZ2VJZF0pIHtcbiAgICBMb2dNYW5hZ2VyLmdldEluc3RhbmNlKCkuZGVidWcoJ21lc3NhZ2UgaWQgZXhpc3QgaW4gdGhlIHF1ZXVlIDogJywgbWVzc2FnZUlkKTtcbiAgICByZXR1cm47XG4gIH1cbiAgKGV2ZW50Q2xvc2VkKSBbbWVzc2FnZUlkXSA9IHRydWU7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBjb25zdCB7bWVzc2FnZUlkLCBhcHBJZCwgaW5zdGFsbGF0aW9uS2V5fSA9IGV2ZW50Lm5vdGlmaWNhdGlvbi5kYXRhO1xuICAgIExvZ01hbmFnZXIuZ2V0SW5zdGFuY2UoKS5kZWJ1ZygnaGFuZGxlQ2xvc2UgcnVubmluZy4uLi4nLCBKU09OLnN0cmluZ2lmeShldmVudENsb3NlZCkpO1xuICAgIGlmICghZXZlbnQgfHwgIWV2ZW50Lm5vdGlmaWNhdGlvbiB8fCAhZXZlbnQubm90aWZpY2F0aW9uLmRhdGEgfHwgIWV2ZW50Lm5vdGlmaWNhdGlvbi5kYXRhLm1lc3NhZ2VJZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbiAgICBMb2dNYW5hZ2VyLmdldEluc3RhbmNlKCkuZGVidWcoJ05vdGlmaWNhdGlvbiBjbG9zZWQgOiBNZXNzYWdlIElEID0gJywgbWVzc2FnZUlkKTtcbiAgICBjb25zdCBldmVudE5hbWUgPSAnd2VicHVzaC1ub3RpZmljYXRpb24tY2xvc2VkJztcbiAgICBjb25zdCB0cmFja2luZ0ZldGNoZXIgPSBuZXcgVHJhY2tpbmdGZXRjaGVyKCk7XG4gICAgdHJhY2tpbmdGZXRjaGVyLnRyYWNrKHtcbiAgICAgIGV2ZW50OiBldmVudE5hbWUsXG4gICAgICBtZXNzYWdlSWQ6IG1lc3NhZ2VJZCxcbiAgICAgIC4uLih7YXBwSWQsIGFwaUtleTogaW5zdGFsbGF0aW9uS2V5fSlcbiAgICB9KVxuICAgIGV2ZW50Q2xvc2VkID0ge31cbiAgICByZXNvbHZlKHt9KVxuICB9KVxufTtcbiIsIi8vLyA8cmVmZXJlbmNlIGxpYj1cIndlYndvcmtlclwiIC8+XG5cbmltcG9ydCBMb2dNYW5hZ2VyIGZyb20gJy4uL3V0aWwvbG9nTWFuYWdlcic7XG5leHBvcnQgZGVmYXVsdCBudWxsXG5kZWNsYXJlIGxldCBzZWxmOiBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGVcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXNcbmV4cG9ydCBjb25zdCBoYW5kbGVJbnN0YWxsID0gKGV2ZW50OiBFeHRlbmRhYmxlRXZlbnQpID0+IHtcbiAgTG9nTWFuYWdlci5nZXRJbnN0YW5jZSgpLmRlYnVnKCd3b3JrZXIgaW5zdGFsbGluZy4uLnYxJyk7XG4gIGV2ZW50LndhaXRVbnRpbChzZWxmLnNraXBXYWl0aW5nKCkpO1xufTsiLCJpbXBvcnQge2ZldGNoUGF5bG9hZH0gZnJvbSAnLi4vdXRpbC9wYXlsb2FkJztcblxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25JbnRlcmZhY2Uge1xuICBhY3Rpb246IHN0cmluZztcbiAgdmFsdWU6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW50ZWdyYXRpb25JbmZvIHtcbiAgczogc3RyaW5nO1xuICBjYW1wYWlnbklkOiBzdHJpbmc7XG4gIGZhbGxiYWNrVXJsOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuICBwbmlkOiBzdHJpbmc7XG4gIHNvdW5kOiBzdHJpbmc7XG4gIGFjdGlvbnM6IEFjdGlvbkludGVyZmFjZVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFB1c2hOb3RpZmljYXRpb25QYXlsb2FkIHtcbiAgdGl0bGU6IHN0cmluZyxcbiAgdHRsOiBzdHJpbmcsXG4gIG9wdGlvbnM6IE5vdGlmaWNhdGlvbk9wdGlvbnMsXG4gIGludGVncmF0aW9uSW5mbzogSW50ZWdyYXRpb25JbmZvO1xufVxuXG5cbi8vLyA8cmVmZXJlbmNlIGxpYj1cIndlYndvcmtlclwiIC8+XG5leHBvcnQgZGVmYXVsdCBudWxsXG5kZWNsYXJlIGxldCBzZWxmOiBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGVcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXNcbmV4cG9ydCBjb25zdCBoYW5kbGVQdXNoID0gYXN5bmMgKGV2ZW50OiBQdXNoRXZlbnQpID0+IHtcbiAgY29uc3Qgc3Vic2NyaXB0aW9uID0gYXdhaXQgZ2V0U3Vic2NyaXB0aW9uKCk7XG4gIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBnZXRQYXlsb2FkKGV2ZW50LCBzdWJzY3JpcHRpb24pO1xuICByZXR1cm4gc2hvdyhwYXlsb2FkKTtcbn07XG5cbmNvbnN0IGdldFN1YnNjcmlwdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIGF3YWl0IHNlbGYucmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpO1xufTtcblxuY29uc3QgZ2V0UGF5bG9hZCA9IGFzeW5jIChldmVudDogUHVzaEV2ZW50LCBzdWJzY3JpcHRpb246IFB1c2hTdWJzY3JpcHRpb24gfCBudWxsKSA9PiB7XG4gIGxldCBwYXlsb2FkO1xuICBjb25zdCB7ZGF0YX0gPSBldmVudDtcbiAgaWYgKGRhdGEpIHtcbiAgICBwYXlsb2FkID0gUHJvbWlzZS5yZXNvbHZlKGV2ZW50LmRhdGEgJiYgZXZlbnQuZGF0YS5qc29uKCkpO1xuICB9IGVsc2Uge1xuICAgIGlmICghc3Vic2NyaXB0aW9uIHx8ICFzdWJzY3JpcHRpb24uZW5kcG9pbnQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xuICAgIH1cbiAgICBjb25zdCB7ZW5kcG9pbnR9ID0gc3Vic2NyaXB0aW9uO1xuICAgIHBheWxvYWQgPSBmZXRjaFBheWxvYWQoZW5kcG9pbnQpO1xuICB9XG4gIHJldHVybiBwYXlsb2FkO1xufTtcbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBUT0RPIHdpbGwgcmV2aWV3IGFnYWluIHRoaXMgZnVuY3Rpb25cbmNvbnN0IHNob3cgPSBhc3luYyAocGF5bG9hZDogYW55IHwgUHVzaE5vdGlmaWNhdGlvblBheWxvYWQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgY29uc3Qge3RpdGxlLCBvcHRpb25zLCBpbnRlZ3JhdGlvbkluZm99ID0gcGF5bG9hZDtcbiAgY29uc3Qgb3B0aW9uc0ZpbHRlcmVkID0gT2JqZWN0LmtleXMob3B0aW9ucylcbiAgICAuZmlsdGVyKGtleSA9PiBvcHRpb25zW2tleV0gJiYgb3B0aW9uc1trZXldICE9PSBcIlwiKVxuICAgIC5yZWR1Y2UoKG9iaiwga2V5KSA9PiB7XG4gICAgICAob2JqIGFzIGFueSlba2V5XSA9IG9wdGlvbnNba2V5XTtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSwge30gYXMgTm90aWZpY2F0aW9uT3B0aW9ucyk7XG5cbiAgcmV0dXJuIHNlbGYucmVnaXN0cmF0aW9uLnNob3dOb3RpZmljYXRpb24odGl0bGUsIHtcbiAgICAuLi5vcHRpb25zRmlsdGVyZWQsXG4gICAgZGF0YTogaW50ZWdyYXRpb25JbmZvLFxuICAgIHRhZzogTWF0aC5yYW5kb20oKS50b1N0cmluZygpLFxuICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgfSk7XG59XG4vKiBlc2xpbnQtZW5hYmxlICovXG4iLCJlbnVtIExvZ0xldmVsIHtcbiAgRVJST1IgPSAxLFxuICBXQVJOID0gMixcbiAgSU5GTyA9IDMsXG4gIERFQlVHID0gNCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nTWFuYWdlciB7XG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBMb2dNYW5hZ2VyO1xuICBwcml2YXRlIHJlYWRvbmx5IGxvZ0xldmVsOiBMb2dMZXZlbDtcbiAgcHJpdmF0ZSByZWFkb25seSBlbmFibGVEZWJ1Z0xvZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IobG9nTGV2ZWw6IExvZ0xldmVsKSB7XG4gICAgdGhpcy5sb2dMZXZlbCA9IGxvZ0xldmVsO1xuICAgIHRoaXMuZW5hYmxlRGVidWdMb2cgPSBMb2dNYW5hZ2VyLmlzRW5hYmxlRGVidWdMb2coKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UobG9nTGV2ZWw6IExvZ0xldmVsID0gTG9nTGV2ZWwuSU5GTyk6IExvZ01hbmFnZXIge1xuICAgIGlmICghTG9nTWFuYWdlci5pbnN0YW5jZSkge1xuICAgICAgTG9nTWFuYWdlci5pbnN0YW5jZSA9IG5ldyBMb2dNYW5hZ2VyKGxvZ0xldmVsKTtcbiAgICB9XG4gICAgcmV0dXJuIExvZ01hbmFnZXIuaW5zdGFuY2U7XG4gIH1cblxuICBzdGF0aWMgaXNFbmFibGVEZWJ1Z0xvZygpOiBib29sZWFuIHtcbiAgICB0cnkge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiB3aW5kb3cubG9jYWxTdG9yYWdlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBkZWJ1Z0xvZ0VuYWJsZWQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N5bnRfZGVidWdfbG9nX2VuYWJsZWQnKVxuICAgICAgcmV0dXJuICEhKGRlYnVnTG9nRW5hYmxlZCAmJiBkZWJ1Z0xvZ0VuYWJsZWQudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICBwdWJsaWMgbG9nKGxldmVsOiBudW1iZXIsIG1lc3NhZ2U6IGFueVtdKSB7XG4gICAgc3dpdGNoIChsZXZlbCkge1xuICAgICAgY2FzZSBMb2dMZXZlbC5FUlJPUjpcbiAgICAgICAgY29uc29sZS5lcnJvciguLi5tZXNzYWdlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExvZ0xldmVsLldBUk46XG4gICAgICAgIHRoaXMuZW5hYmxlRGVidWdMb2cgJiYgY29uc29sZS53YXJuKC4uLm1lc3NhZ2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTG9nTGV2ZWwuSU5GTzpcbiAgICAgICAgY29uc29sZS5pbmZvKC4uLm1lc3NhZ2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTG9nTGV2ZWwuREVCVUc6XG4gICAgICAgIHRoaXMuZW5hYmxlRGVidWdMb2cgJiYgIGNvbnNvbGUuZGVidWcoLi4ubWVzc2FnZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5lbmFibGVEZWJ1Z0xvZyAmJiAgY29uc29sZS5kZWJ1ZyguLi5tZXNzYWdlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgcHVibGljIGVycm9yKC4uLm1lc3NhZ2U6IGFueVtdKSB7XG4gICAgdGhpcy5sb2coTG9nTGV2ZWwuRVJST1IsIG1lc3NhZ2UpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgcHVibGljIHdhcm4oLi4ubWVzc2FnZTogYW55W10pIHtcbiAgICB0aGlzLmxvZyhMb2dMZXZlbC5XQVJOLCBtZXNzYWdlKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIHB1YmxpYyBpbmZvKC4uLm1lc3NhZ2U6IGFueVtdKSB7XG4gICAgdGhpcy5sb2coTG9nTGV2ZWwuSU5GTywgbWVzc2FnZSk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICBwdWJsaWMgZGVidWcoLi4ubWVzc2FnZTogYW55W10pIHtcbiAgICB0aGlzLmxvZyhMb2dMZXZlbC5ERUJVRywgbWVzc2FnZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7YXBwQ29uZmlnfSBmcm9tICcuLi9hcHBDb25maWcnO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQYXlsb2FkID0gYXN5bmMgKGVuZHBvaW50OiBzdHJpbmcpID0+IHtcbiAgY29uc3QgdXJsID0gYCR7YXBwQ29uZmlnLm1hbmFnZW1lbnRBcGlVcmx9L2FwaS9wdXNoL25vdGlmaWNhdGlvbi1kYXRhP2VuZHBvaW50PSR7ZW5jb2RlVVJJQ29tcG9uZW50KGVuZHBvaW50KX1gO1xuICBjb25zdCBmZXRjaE9wdHM6IFJlcXVlc3RJbml0ID0ge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgbW9kZTogJ2NvcnMnLFxuICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcbiAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh7YWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsIGtleTogYXBwQ29uZmlnLmFwaUtleX0pXG4gIH07XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIGZldGNoT3B0cyk7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8vIDxyZWZlcmVuY2UgbGliPVwiV2ViV29ya2VyXCIgLz5cbmltcG9ydCB7YXBwQ29uZmlnfSBmcm9tICcuL2FwcENvbmZpZyc7XG5pbXBvcnQge2hhbmRsZUFjdGl2YXRlfSBmcm9tICcuL2V2ZW50LWhhbmRsZXJzL2FjdGl2YXRlJztcbmltcG9ydCB7aGFuZGxlQ2xpY2t9IGZyb20gJy4vZXZlbnQtaGFuZGxlcnMvY2xpY2snO1xuaW1wb3J0IHtoYW5kbGVDbG9zZX0gZnJvbSAnLi9ldmVudC1oYW5kbGVycy9jbG9zZSc7XG5pbXBvcnQge2hhbmRsZUluc3RhbGx9IGZyb20gJy4vZXZlbnQtaGFuZGxlcnMvaW5zdGFsbCc7XG5pbXBvcnQge2hhbmRsZVB1c2h9IGZyb20gJy4vZXZlbnQtaGFuZGxlcnMvcHVzaCc7XG5pbXBvcnQgTG9nTWFuYWdlciBmcm9tICcuL3V0aWwvbG9nTWFuYWdlcic7XG5cbmV4cG9ydCB0eXBlIHt9O1xuXG4vLyBleHBvcnQgZW1wdHkgdHlwZSBiZWNhdXNlIG9mIHRzYyAtLWlzb2xhdGVkTW9kdWxlcyBmbGFnXG5kZWNsYXJlIGNvbnN0IHNlbGY6IFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgKGV2ZW50KSA9PiBoYW5kbGVJbnN0YWxsKGV2ZW50KSk7XG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2FjdGl2YXRlJywgKGV2ZW50KSA9PiBoYW5kbGVBY3RpdmF0ZShldmVudCkpO1xuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdub3RpZmljYXRpb25jbGljaycsIChldmVudCkgPT4gZXZlbnQud2FpdFVudGlsKGhhbmRsZUNsaWNrKGV2ZW50KSkpO1xuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdwdXNoJywgKGV2ZW50KSA9PiBldmVudC53YWl0VW50aWwoaGFuZGxlUHVzaChldmVudCkpKTtcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignbm90aWZpY2F0aW9uY2xvc2UnLCAoZXZlbnQpID0+IHtcbiAgTG9nTWFuYWdlci5nZXRJbnN0YW5jZSgpLmRlYnVnKCdub3RpZmljYXRpb25jbG9zZSAtLS0tLS0tLS0tLS0tPicpXG4gIGV2ZW50LndhaXRVbnRpbChoYW5kbGVDbG9zZShldmVudCkpXG59KTtcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAoKSA9PiB7XG4gIExvZ01hbmFnZXIuZ2V0SW5zdGFuY2UoKS5kZWJ1Zygnd2hhdCBpcyBjbG9zZSB2Mi0tLS0tLS0tLS0tLS0+Jylcbn0pO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICAvLyBhcGkgZm9yIG1hbmFnZW1lbnQgKCBuZWVkIGZvciBnZXQgYnJvYWRjYXN0IG1lc3NhZ2UgKVxuICAgIGNvbnN0IHttYW5hZ2VtZW50QXBpVXJsLCBhcGlLZXksIHRva2VuLCBhcHBJZH0gPSBkYXRhO1xuICAgIExvZ01hbmFnZXIuZ2V0SW5zdGFuY2UoKS5kZWJ1ZyhkYXRhKTtcbiAgICBhcHBDb25maWcubWFuYWdlbWVudEFwaVVybCA9IG1hbmFnZW1lbnRBcGlVcmw7XG4gICAgYXBwQ29uZmlnLmFwaUtleSA9IGFwaUtleTtcbiAgICBhcHBDb25maWcuYXBwSWQgPSBhcHBJZDtcbiAgICAvLyBhcGkgZm9yIHRyYWNraW5nIGRhdGFcbiAgICAvLyBhcHBDb25maWcudHJhY2tpbmdVcmwgPSB0cmFja2luZ1VybDtcbiAgICBhcHBDb25maWcudG9rZW4gPSB0b2tlbjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIExvZ01hbmFnZXIuZ2V0SW5zdGFuY2UoKS5kZWJ1ZygnQ2FudCBwb3B1bGF0ZSBjb25maWd1cmF0aW9uIGZyb20gb3B0LWluIHNjcmlwdCcpXG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImFwcENvbmZpZyIsIkJhc2VGZXRjaGVyIiwiZGVmYXVsdEhlYWRlciIsImV4ZWN1dGUiLCJ1cmwiLCJtZXRob2QiLCJwYXJhbWV0ZXJzIiwiaGVhZGVycyIsImZldGNoIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhcHBJZCIsImFwaUtleSIsInRva2VuIiwidGhlbiIsInJlcyIsImpzb24iLCJMb2dNYW5hZ2VyIiwiVHJhY2tpbmdGZXRjaGVyIiwidHJhY2siLCJ0cmFja0RhdGEiLCJlIiwiYmFzZVVSTCIsImdldEluc3RhbmNlIiwiZGVidWciLCJTeW50QXBwQ29uZmlndXJhdGlvbiIsInByb2Nlc3MiLCJlbnYiLCJCQVNFX1VSTCIsIm1hbmFnZW1lbnRBcGlVcmwiLCJNQVBJX1VSTCIsInByb2R1Y3RUcmFja1N0cmVhbU5hbWUiLCJTVFJFQU1fTkFNRSIsInB1YmxpY0tleSIsIndvcmtlclBhdGgiLCJhcHBWZXJzaW9uIiwiaW5pdEdsb2JhbFNjb3BlIiwic25NZXRhZGF0YSIsIndpbmRvdyIsInNuX21ldGEiLCJhcHBfc2lnbmF0dXJlIiwiYXBwX2lkIiwiYXBwX3dvcmtlcl9wYXRoIiwiYXBwX3ZlcnNpb24iLCJnZXRDdXN0b21lcktleXMiLCJpbnN0YWxsYXRpb25LZXkiLCJnZXRNZXRhZGF0YSIsIk1TR19QQVRURVJOIiwiQlJPQURDQVNUX01TRyIsIklORElWSURVQUxfTVNHIiwiSU5ESVZJRFVBTF9NU0dfV0MiLCJJTkRJVklEVUFMX01TR19BQyIsIklORElWSURVQUxfTVNHX0JBIiwiSU5ESVZJRFVBTF9NU0dfUkVDIiwiSU5ESVZJRFVBTF9NU0dfVkFMVUVTIiwiT05FX0RBWV9USU1FU1RBTVAiLCJGT1JDRV9TVUJTQ1JJQkVfREFZUyIsIlNZTlRfTE9HT19VUkwiLCJoYW5kbGVBY3RpdmF0ZSIsImV2ZW50Iiwid2FpdFVudGlsIiwic2VsZiIsImNsaWVudHMiLCJjbGFpbSIsImhhbmRsZUNsaWNrIiwibm90aWZpY2F0aW9uIiwiY2xvc2UiLCJvcGVuUGFnZSIsImFjdGlvbnMiLCJtc2dJZCIsInByb2R1Y3RVcmwiLCJwcm9kdWN0SUQiLCJzdWJzY3JpYmVySUQiLCJzZWdtZW50SWQiLCJhY3Rpb25JdGVtIiwibXNnRnJhZ21lbnRzIiwibWVzc2FnZUlkIiwibXNnUGF0dGVybiIsImFjdGlvbkl0ZW1WYWx1ZSIsImxhc3QiLCJldmVudE5hbWUiLCJ0cmFja2luZ0ZldGNoZXIiLCJ3aW5kb3dDbGllbnRzIiwiaSIsImNsaWVudCIsInVybE1hdGNoIiwiZGF0YSIsInMiLCJwbmlkIiwiZmluZCIsIml0ZW0iLCJhY3Rpb24iLCJ0b1N0cmluZyIsInNwbGl0IiwibGVuZ3RoIiwiaW5kZXhPZiIsInZhbHVlIiwibGluayIsInNsaWNlIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsIm1hdGNoQWxsIiwidHlwZSIsImZvY3VzIiwib3BlbldpbmRvdyIsImV2ZW50Q2xvc2VkIiwiaGFuZGxlQ2xvc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsImhhbmRsZUluc3RhbGwiLCJza2lwV2FpdGluZyIsImZldGNoUGF5bG9hZCIsImhhbmRsZVB1c2giLCJzdWJzY3JpcHRpb24iLCJwYXlsb2FkIiwiZ2V0U3Vic2NyaXB0aW9uIiwiZ2V0UGF5bG9hZCIsInNob3ciLCJyZWdpc3RyYXRpb24iLCJwdXNoTWFuYWdlciIsImVuZHBvaW50IiwicmVqZWN0IiwidGl0bGUiLCJvcHRpb25zIiwiaW50ZWdyYXRpb25JbmZvIiwib3B0aW9uc0ZpbHRlcmVkIiwiT2JqZWN0Iiwia2V5cyIsImZpbHRlciIsImtleSIsInJlZHVjZSIsIm9iaiIsInNob3dOb3RpZmljYXRpb24iLCJ0YWciLCJNYXRoIiwicmFuZG9tIiwiZ2V0VGltZSIsIkxvZ0xldmVsIiwiRVJST1IiLCJXQVJOIiwiSU5GTyIsIkRFQlVHIiwibG9nTGV2ZWwiLCJlbmFibGVEZWJ1Z0xvZyIsImlzRW5hYmxlRGVidWdMb2ciLCJsb2ciLCJsZXZlbCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwiZXJyb3IiLCJ3YXJuIiwiaW5mbyIsImluc3RhbmNlIiwibG9jYWxTdG9yYWdlIiwiZGVidWdMb2dFbmFibGVkIiwiZ2V0SXRlbSIsInRvTG93ZXJDYXNlIiwiZmV0Y2hPcHRzIiwicmVzcG9uc2UiLCJlbmNvZGVVUklDb21wb25lbnQiLCJtb2RlIiwicmVkaXJlY3QiLCJIZWFkZXJzIiwiYWNjZXB0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhcnNlIl0sInNvdXJjZVJvb3QiOiIifQ==