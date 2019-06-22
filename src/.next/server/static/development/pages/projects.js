module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/construct.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/construct.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _construct; });
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/reflect/construct */ "../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");



function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false;
  if (_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "../node_modules/next/dist/client/link.js":
/*!************************************************!*\
  !*** ../node_modules/next/dist/client/link.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "../node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "../node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map["default"]();
var IntersectionObserver =  false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    observer.unobserve(el);
    listeners["delete"](el);
  };
};

var Link =
/*#__PURE__*/
function (_react$Component) {
  (0, _inherits2["default"])(Link, _react$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2["default"])(this, Link);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Link).apply(this, arguments));

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      // @ts-ignore target exists on currentTarget
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      })["catch"](function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2["default"])(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.cleanUpListeners = function () {};
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners = listenToIntersections(ref, function () {
          _this2.prefetch();
        });
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch() {
      if (true) return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = (0, _url.resolve)(pathname, parsedHref);

      _router["default"].prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          return _this3.handleRef(el);
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch();
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user

      };

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = (0, _rewriteUrlForExport.rewriteUrlForNextExport)(props.href);
        }
      }

      return _react["default"].cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired,
    as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
    prefetch: _propTypes["default"].bool,
    replace: _propTypes["default"].bool,
    shallow: _propTypes["default"].bool,
    passHref: _propTypes["default"].bool,
    scroll: _propTypes["default"].bool,
    children: _propTypes["default"].oneOfType([_propTypes["default"].element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "../node_modules/next/dist/client/router.js":
/*!**************************************************!*\
  !*** ../node_modules/next/dist/client/router.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _construct2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/construct */ "../node_modules/@babel/runtime-corejs2/helpers/esm/construct.js"));

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.useRequest = useRequest;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "../node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2["default"];

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _requestContext = __webpack_require__(/*! next-server/dist/lib/request-context */ "next-server/dist/lib/request-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "../node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty["default"])(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty["default"])(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
}

function useRequest() {
  return _react["default"].useContext(_requestContext.RequestContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = (0, _construct2["default"])(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var _i = 0, _urlPropertyFields = urlPropertyFields; _i < _urlPropertyFields.length; _i++) {
    var property = _urlPropertyFields[_i];

    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2["default"])({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2["default"].events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty["default"])(instance, field, {
      get: function get() {
        return _router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "../node_modules/next/dist/client/with-router.js":
/*!*******************************************************!*\
  !*** ../node_modules/next/dist/client/with-router.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "../node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react$default$Compon) {
    (0, _inherits2["default"])(WithRouteWrapper, _react$default$Compon);

    function WithRouteWrapper() {
      var _this;

      (0, _classCallCheck2["default"])(this, WithRouteWrapper);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(WithRouteWrapper).apply(this, arguments));
      _this.context = void 0;
      return _this;
    }

    (0, _createClass2["default"])(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement(ComposedComponent, (0, _extends2["default"])({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(_react["default"].Component);

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes["default"].object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "../node_modules/next/link.js":
/*!************************************!*\
  !*** ../node_modules/next/link.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./components/atoms/btnclose/index.js":
/*!********************************************!*\
  !*** ./components/atoms/btnclose/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./components/atoms/btnclose/styled.js");

 // Import Style



var Text = function Text(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["BtnClose"], {
    className: "close"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: "times-circle"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./components/atoms/btnclose/styled.js":
/*!*********************************************!*\
  !*** ./components/atoms/btnclose/styled.js ***!
  \*********************************************/
/*! exports provided: BtnClose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnClose", function() { return BtnClose; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Import Styled

var BtnClose = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.text.withConfig({
  displayName: "styled__BtnClose",
  componentId: "sc-1uxxuoa-0"
})(["position:fixed;right:16px;top:16px;z-index:9991;font-size:24px;margin:0;color:#fff;cursor:pointer;"]);

/***/ }),

/***/ "./components/atoms/btnviewall/index.js":
/*!**********************************************!*\
  !*** ./components/atoms/btnviewall/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lazy_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lazy-load */ "react-lazy-load");
/* harmony import */ var react_lazy_load__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./components/atoms/btnviewall/styled.js");


 // Import Style



var Button = function Button(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["BtnViewAll"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "View All"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: "arrow-right"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/atoms/btnviewall/styled.js":
/*!***********************************************!*\
  !*** ./components/atoms/btnviewall/styled.js ***!
  \***********************************************/
/*! exports provided: BtnViewAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnViewAll", function() { return BtnViewAll; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Import Styled

var BtnViewAll = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "styled__BtnViewAll",
  componentId: "sc-1e1rei-0"
})(["background:none;color:#79828B;font-size:14px;cursor:pointer;float:right;span{margin-right:8px;text-transform:uppercase;letter-spacing:1.5px;line-height:15px}svg{}"]);

/***/ }),

/***/ "./components/atoms/iconbars/index.js":
/*!********************************************!*\
  !*** ./components/atoms/iconbars/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./components/atoms/iconbars/styled.js");

 // Import Style



var Button = function Button(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["IconBars"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: "bars"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/atoms/iconbars/styled.js":
/*!*********************************************!*\
  !*** ./components/atoms/iconbars/styled.js ***!
  \*********************************************/
/*! exports provided: IconBars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconBars", function() { return IconBars; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Import Styled

var IconBars = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "styled__IconBars",
  componentId: "eybime-0"
})(["box-sizing:border-box;background:none;font-size:21px;color:#fff;margin-right:16px;cursor:pointer;"]);

/***/ }),

/***/ "./components/atoms/iconchevrondown/index.js":
/*!***************************************************!*\
  !*** ./components/atoms/iconchevrondown/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lazy_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lazy-load */ "react-lazy-load");
/* harmony import */ var react_lazy_load__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./components/atoms/iconchevrondown/styled.js");


 // Import Style



var Button = function Button(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_load__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["IconChevronDown"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: "chevron-down"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/atoms/iconchevrondown/styled.js":
/*!****************************************************!*\
  !*** ./components/atoms/iconchevrondown/styled.js ***!
  \****************************************************/
/*! exports provided: IconChevronDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconChevronDown", function() { return IconChevronDown; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Import Styled

var IconChevronDown = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "styled__IconChevronDown",
  componentId: "sc-14x13kj-0"
})(["box-sizing:border-box;font-size:9px;width:16px;height:16px;margin-left:8px;background:#5A6ABC;border-radius:50px;cursor:pointer;span{color:#fff;margin-top:3px;display:block;}"]);

/***/ }),

/***/ "./components/atoms/iconmap/index.js":
/*!*******************************************!*\
  !*** ./components/atoms/iconmap/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./components/atoms/iconmap/styled.js");

 // Import Style



var Button = function Button(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["IconMap"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: "map-marker"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/atoms/iconmap/styled.js":
/*!********************************************!*\
  !*** ./components/atoms/iconmap/styled.js ***!
  \********************************************/
/*! exports provided: IconMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconMap", function() { return IconMap; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Import Styled

var IconMap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "styled__IconMap",
  componentId: "sc-68ha0i-0"
})(["box-sizing:border-box;background:none;font-size:21px;color:#fff;margin-right:16px;"]);

/***/ }),

/***/ "./components/atoms/iconnotification/index.js":
/*!****************************************************!*\
  !*** ./components/atoms/iconnotification/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./components/atoms/iconnotification/styled.js");

 // Import Style



var Text = function Text(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["IconNotification"], {
    className: "notification"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "number"
  }, "3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: "bell"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./components/atoms/iconnotification/styled.js":
/*!*****************************************************!*\
  !*** ./components/atoms/iconnotification/styled.js ***!
  \*****************************************************/
/*! exports provided: IconNotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconNotification", function() { return IconNotification; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Import Styled

var IconNotification = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.text.withConfig({
  displayName: "styled__IconNotification",
  componentId: "f08w0n-0"
})(["box-sizing:border-box;background:none;font-size:21px;color:#fff;margin-right:16px;position:relative;.number{position:absolute;top:-10px;right:-18px;font-size:13px;line-height:24px;height:26px;width:26px;border:2px solid #6573D6;background-color:#4C5EBB;border-radius:50px;text-align:center;}"]);

/***/ }),

/***/ "./components/atoms/logo/index.js":
/*!****************************************!*\
  !*** ./components/atoms/logo/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./components/atoms/logo/styled.js");

 // Import Style



var Text = function Text(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Logo"], props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Dash"), " Elements"));
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./components/atoms/logo/styled.js":
/*!*****************************************!*\
  !*** ./components/atoms/logo/styled.js ***!
  \*****************************************/
/*! exports provided: Logo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Import Styled

var Logo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.text.withConfig({
  displayName: "styled__Logo",
  componentId: "rclpx0-0"
})(["h1{color:#FFFFFF80;font-family:\"Rubik\";font-size:20px;line-height:24px;display:inline-block;font-weight:normal;letter-spacing:0.75px;strong{font-family:\"Roboto\";color:#FFFFFF;}}"]);

/***/ }),

/***/ "./components/atoms/numberdefault/index.js":
/*!*************************************************!*\
  !*** ./components/atoms/numberdefault/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./components/atoms/numberdefault/styled.js");

 // Import Style



var Text = function Text(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["NumberDefault"], props, props.text);
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./components/atoms/numberdefault/styled.js":
/*!**************************************************!*\
  !*** ./components/atoms/numberdefault/styled.js ***!
  \**************************************************/
/*! exports provided: NumberDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberDefault", function() { return NumberDefault; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Import Styled

var NumberDefault = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.text.withConfig({
  displayName: "styled__NumberDefault",
  componentId: "szj82n-0"
})(["color:#42505C;font-weight:500;font-size:20px;letter-spacing:0.75px;line-height:30px;"]);

/***/ }),

/***/ "./components/atoms/tagbtc/index.js":
/*!******************************************!*\
  !*** ./components/atoms/tagbtc/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./components/atoms/tagbtc/styled.js");



var Text = function Text(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["TagBtc"], props, props.text);
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./components/atoms/tagbtc/styled.js":
/*!*******************************************!*\
  !*** ./components/atoms/tagbtc/styled.js ***!
  \*******************************************/
/*! exports provided: TagBtc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagBtc", function() { return TagBtc; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Import Styled

var TagBtc = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.text.withConfig({
  displayName: "styled__TagBtc",
  componentId: "sc-10cfdqv-0"
})(["border-radius:16px;background-color:#D286621a;color:#D28E62;font-weight:500;font-size:16px;line-height:21px;letter-spacing:0.75px;padding:4px 12px 7px;@media (max-width:340px){letter-spacing:0;font-size:15px;}"]);

/***/ }),

/***/ "./components/atoms/tagdefault/index.js":
/*!**********************************************!*\
  !*** ./components/atoms/tagdefault/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./components/atoms/tagdefault/styled.js");

// Import Style


var Text = function Text(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["TagDefault"], props, props.text);
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./components/atoms/tagdefault/styled.js":
/*!***********************************************!*\
  !*** ./components/atoms/tagdefault/styled.js ***!
  \***********************************************/
/*! exports provided: TagDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagDefault", function() { return TagDefault; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Import Styled

var TagDefault = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.text.withConfig({
  displayName: "styled__TagDefault",
  componentId: "sc-45oeus-0"
})(["border-radius:16px;background-color:#79828b1a;color:#8D99A4;font-family:'Roboto Mono',monospace;font-weight:500;font-size:16px;line-height:21px;letter-spacing:0.75px;padding:4px 12px 7px;"]);

/***/ }),

/***/ "./components/atoms/tageth/index.js":
/*!******************************************!*\
  !*** ./components/atoms/tageth/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./components/atoms/tageth/styled.js");



var Text = function Text(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["TagEth"], props, props.text);
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./components/atoms/tageth/styled.js":
/*!*******************************************!*\
  !*** ./components/atoms/tageth/styled.js ***!
  \*******************************************/
/*! exports provided: TagEth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagEth", function() { return TagEth; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Import Styled

var TagEth = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.text.withConfig({
  displayName: "styled__TagEth",
  componentId: "eknr0n-0"
})(["border-radius:16px;background-color:#6271D21a;color:#6271D2;font-weight:500;font-size:16px;line-height:21px;letter-spacing:0.75px;padding:4px 12px 7px;@media (max-width:340px){letter-spacing:0;font-size:15px;}"]);

/***/ }),

/***/ "./components/atoms/textavatar/index.js":
/*!**********************************************!*\
  !*** ./components/atoms/textavatar/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./components/atoms/textavatar/styled.js");

 // Import Style



var Text = function Text(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["TextAvatar"], props, props.text);
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./components/atoms/textavatar/styled.js":
/*!***********************************************!*\
  !*** ./components/atoms/textavatar/styled.js ***!
  \***********************************************/
/*! exports provided: TextAvatar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAvatar", function() { return TextAvatar; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Import Styled

var TextAvatar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.text.withConfig({
  displayName: "styled__TextAvatar",
  componentId: "i8lm3f-0"
})(["color:#42505C;font-size:16px;line-height:25px;letter-spacing:0.75px;display:block;font-weight:600;"]);

/***/ }),

/***/ "./components/atoms/textbigger/index.js":
/*!**********************************************!*\
  !*** ./components/atoms/textbigger/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./components/atoms/textbigger/styled.js");

 // Import Style



var Text = function Text(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["TextBigger"], props, props.text);
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./components/atoms/textbigger/styled.js":
/*!***********************************************!*\
  !*** ./components/atoms/textbigger/styled.js ***!
  \***********************************************/
/*! exports provided: TextBigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextBigger", function() { return TextBigger; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Import Styled

var TextBigger = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.text.withConfig({
  displayName: "styled__TextBigger",
  componentId: "sc-8ok83v-0"
})(["color:#42505C;font-size:16px;line-height:28px;letter-spacing:0.75px;display:block;"]);

/***/ }),

/***/ "./components/atoms/texttime/index.js":
/*!********************************************!*\
  !*** ./components/atoms/texttime/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./components/atoms/texttime/styled.js");

 // Import Style



var Text = function Text(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["TextTime"], props, props.text);
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./components/atoms/texttime/styled.js":
/*!*********************************************!*\
  !*** ./components/atoms/texttime/styled.js ***!
  \*********************************************/
/*! exports provided: TextTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextTime", function() { return TextTime; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Import Styled

var TextTime = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.text.withConfig({
  displayName: "styled__TextTime",
  componentId: "ouv6s7-0"
})(["color:#79828B;font-size:12px;line-height:18px;letter-spacing:0.75px;display:block;"]);

/***/ }),

/***/ "./components/atoms/thumbavatar/index.js":
/*!***********************************************!*\
  !*** ./components/atoms/thumbavatar/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./components/atoms/thumbavatar/styled.js");
 // Import Style



var Img = function Img(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["ThumbAvatar"], props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.src
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Img);

/***/ }),

/***/ "./components/atoms/thumbavatar/styled.js":
/*!************************************************!*\
  !*** ./components/atoms/thumbavatar/styled.js ***!
  \************************************************/
/*! exports provided: ThumbAvatar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbAvatar", function() { return ThumbAvatar; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Import Styled

var ThumbAvatar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.text.withConfig({
  displayName: "styled__ThumbAvatar",
  componentId: "sc-1h9r8h-0"
})(["display:inline-block;"]);

/***/ }),

/***/ "./components/atoms/titleh2/index.js":
/*!*******************************************!*\
  !*** ./components/atoms/titleh2/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./components/atoms/titleh2/styled.js");

 // Import Style



var Text = function Text(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["TitleH2"], props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, props.text));
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./components/atoms/titleh2/styled.js":
/*!********************************************!*\
  !*** ./components/atoms/titleh2/styled.js ***!
  \********************************************/
/*! exports provided: TitleH2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleH2", function() { return TitleH2; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Import Styled

var TitleH2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.text.withConfig({
  displayName: "styled__TitleH2",
  componentId: "sc-15moerf-0"
})(["opacity:0.9;color:#42505C;display:inline-block;h2{font-weight:500;font-size:18px;letter-spacing:0.25px;line-height:15px;}"]);

/***/ }),

/***/ "./components/molecules/menucontent/index.js":
/*!***************************************************!*\
  !*** ./components/molecules/menucontent/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./components/molecules/menucontent/styled.js");


 // Import Style



var Menu = function Menu(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["MenuContent"], {
    className: "col-xs-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "active"
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/projects"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "My Projects")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/payments"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Payments")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/activity"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Activity")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/settings"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Settings")));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/molecules/menucontent/styled.js":
/*!****************************************************!*\
  !*** ./components/molecules/menucontent/styled.js ***!
  \****************************************************/
/*! exports provided: MenuContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuContent", function() { return MenuContent; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Import Styled

var MenuContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__MenuContent",
  componentId: "sc-1key0cf-0"
})(["padding-top:32px;a{text-decoration:none;color:#fff;border-radius:16px;background-color:transparent;color:#fff;font-weight:normal;font-size:16px;line-height:21px;letter-spacing:0.75px;margin-right:24px;padding:4px 12px 7px;&:hover,&.active{font-weight:600;background-color:#7481D1;}}@media (max-width:991px){position:fixed;top:0;left:0;z-index:999;height:100vh;width:100vw;background:#7481d1e0;padding:32px 24px;a{display:block;text-align:left;font-size:32px;margin:0 0 20px;clear:both;width:fit-content;padding:16px 24px;}}"]);

/***/ }),

/***/ "./components/molecules/userprojects/index.js":
/*!****************************************************!*\
  !*** ./components/molecules/userprojects/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_lazy_load__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-lazy-load */ "react-lazy-load");
/* harmony import */ var react_lazy_load__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _atoms_tageth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../atoms/tageth */ "./components/atoms/tageth/index.js");
/* harmony import */ var _atoms_tagbtc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../atoms/tagbtc */ "./components/atoms/tagbtc/index.js");
/* harmony import */ var _atoms_tagdefault__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../atoms/tagdefault */ "./components/atoms/tagdefault/index.js");
/* harmony import */ var _atoms_texttime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../atoms/texttime */ "./components/atoms/texttime/index.js");
/* harmony import */ var _atoms_numberdefault__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../atoms/numberdefault */ "./components/atoms/numberdefault/index.js");
/* harmony import */ var _atoms_thumbavatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../atoms/thumbavatar */ "./components/atoms/thumbavatar/index.js");
/* harmony import */ var _atoms_textavatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../atoms/textavatar */ "./components/atoms/textavatar/index.js");
/* harmony import */ var _atoms_textbigger__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../atoms/textbigger */ "./components/atoms/textbigger/index.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./styled */ "./components/molecules/userprojects/styled.js");














 // Import Style


var API = "static/api/projects.json";

var UserProjects =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(UserProjects, _React$Component);

  function UserProjects(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserProjects);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(UserProjects).call(this, props));
    _this.state = {
      data: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UserProjects, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      //calling the content api
      fetch(API).then(function (response) {
        return response.json();
      }).then(function (result) {
        return _this2.setState({
          data: result.data
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.state.data;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_15__["BlockDefault"], {
        className: "blockDefault"
      }, data.map(function (item, key) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "map",
          key: key
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "blockContainer"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "row"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "col-xs-10"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_lazy_load__WEBPACK_IMPORTED_MODULE_6___default.a, {
          height: 48,
          width: 48
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_thumbavatar__WEBPACK_IMPORTED_MODULE_12__["default"], {
          src: item.avatar
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "name"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_textavatar__WEBPACK_IMPORTED_MODULE_13__["default"], {
          text: item.name
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_texttime__WEBPACK_IMPORTED_MODULE_10__["default"], {
          text: item.date
        }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "col-xs-2 tag"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_tagdefault__WEBPACK_IMPORTED_MODULE_9__["default"], {
          text: item.tag
        }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "row bottomBorder"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_textbigger__WEBPACK_IMPORTED_MODULE_14__["default"], {
          text: item.text
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "row tags"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "col-xs-10"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_tageth__WEBPACK_IMPORTED_MODULE_7__["default"], {
          text: item.eth
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_tagbtc__WEBPACK_IMPORTED_MODULE_8__["default"], {
          text: item.btc
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "col-xs-2 number"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_numberdefault__WEBPACK_IMPORTED_MODULE_11__["default"], {
          text: item.earnings
        })))));
      }));
    }
  }]);

  return UserProjects;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (UserProjects);

/***/ }),

/***/ "./components/molecules/userprojects/styled.js":
/*!*****************************************************!*\
  !*** ./components/molecules/userprojects/styled.js ***!
  \*****************************************************/
/*! exports provided: BlockDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockDefault", function() { return BlockDefault; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Import Styled

var BlockDefault = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__BlockDefault",
  componentId: "lbttap-0"
})([".map{@media (min-width:992px){width:31.3%;display:inline-block;margin-right:3%;}&:last-child{margin-right:0;}}.name{display:inline-block;margin-left:12px;vertical-align:top;margin-bottom:24px;}.number{text{float:right;}}.tag{text{float:right;}}.tags{text{margin-right:12px;}> div{display:flex;}.number{text{position:absolute;right:0;margin-right:0;}}}img{max-width:48px;max-height:48px;}"]);

/***/ }),

/***/ "./components/organisms/header/index.js":
/*!**********************************************!*\
  !*** ./components/organisms/header/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _atoms_iconbars__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../atoms/iconbars */ "./components/atoms/iconbars/index.js");
/* harmony import */ var _atoms_iconmap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../atoms/iconmap */ "./components/atoms/iconmap/index.js");
/* harmony import */ var _atoms_iconchevrondown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../atoms/iconchevrondown */ "./components/atoms/iconchevrondown/index.js");
/* harmony import */ var _atoms_iconnotification__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../atoms/iconnotification */ "./components/atoms/iconnotification/index.js");
/* harmony import */ var _atoms_titleh2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../atoms/titleh2 */ "./components/atoms/titleh2/index.js");
/* harmony import */ var _atoms_logo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../atoms/logo */ "./components/atoms/logo/index.js");
/* harmony import */ var _atoms_btnclose__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../atoms/btnclose */ "./components/atoms/btnclose/index.js");
/* harmony import */ var _molecules_menucontent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../molecules/menucontent */ "./components/molecules/menucontent/index.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./styled */ "./components/organisms/header/styled.js");


















var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _Component);

  function Header(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));
    _this.state = {
      showMenu: "hidden-xs",
      showUserBox: "hidden"
    };
    _this.openMenu = _this.openMenu.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.toggleUserBox = _this.toggleUserBox.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "openMenu",
    value: function openMenu() {
      var css = this.state.showMenu === "hidden-xs" ? "show" : "hidden-xs";
      this.setState({
        "showMenu": css
      });
    }
  }, {
    key: "closeMenu",
    value: function closeMenu() {
      this.setState({
        showMenu: "hidden-xs"
      });
    }
  }, {
    key: "toggleUserBox",
    value: function toggleUserBox() {
      var toggle = this.state.showUserBox === "hidden" ? "show" : "hidden";
      this.setState({
        "showUserBox": toggle
      });
    }
  }, {
    key: "render",
    value: function render() {
      var titleH2 = this.props.titleH2;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_16__["MenuContainer"], {
        className: "col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-xs-6 left-area"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "hidden-md",
        onClick: this.openMenu.bind(this)
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_atoms_iconbars__WEBPACK_IMPORTED_MODULE_8__["default"], null)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_atoms_iconmap__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "hidden-xs"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_atoms_logo__WEBPACK_IMPORTED_MODULE_13__["default"], null))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-xs-6 right-area"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        onClick: this.toggleUserBox.bind(this)
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_atoms_iconchevrondown__WEBPACK_IMPORTED_MODULE_10__["default"], null)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: this.state.showUserBox
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "userBox"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "projects"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", null, "My Projects"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "settings"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", null, "Settings")))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_atoms_titleh2__WEBPACK_IMPORTED_MODULE_12__["default"], {
        text: "Alex Doe"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "hidden-xs"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_atoms_iconnotification__WEBPACK_IMPORTED_MODULE_11__["default"], null))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-xs-12"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: this.state.showMenu
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "hidden-xs menu"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        onClick: this.closeMenu.bind(this)
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_atoms_btnclose__WEBPACK_IMPORTED_MODULE_14__["default"], null)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_molecules_menucontent__WEBPACK_IMPORTED_MODULE_15__["default"], null)))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/organisms/header/styled.js":
/*!***********************************************!*\
  !*** ./components/organisms/header/styled.js ***!
  \***********************************************/
/*! exports provided: MenuContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuContainer", function() { return MenuContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Import Styled

var MenuContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__MenuContainer",
  componentId: "jijuym-0"
})(["padding-top:16px;padding-bottom:16px;@media (min-width:768px){padding-top:40px;padding-bottom:40px;}&:after{content:\"\";display:block;clear:both;}.right-area{button,text,.LazyLoad{float:right;}text{color:#fff;}.userBox{position:absolute;right:0;top:22px;background:#fff;border-radius:0px 0 8px 8px;padding:8px;color:#6473d5;z-index:2;li{border-bottom:1px solid #ccc;margin-bottom:8px;padding-bottom:8px;&:last-child{padding-bottom:0;border-bottom:none;margin-bottom:0;}a{color:#6473d5;text-decoration:none;&:hover{color:#42505C;}}}}}.notification{position:relative;top:-6px;margin-right:40px;}.show,.show .menu{display:block;}@media (min-width:992px){.close{display:none;}}"]);

/***/ }),

/***/ "./components/organisms/suggestedprojects-all/index.js":
/*!*************************************************************!*\
  !*** ./components/organisms/suggestedprojects-all/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _molecules_userprojects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../molecules/userprojects */ "./components/molecules/userprojects/index.js");
/* harmony import */ var _atoms_btnviewall__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../atoms/btnviewall */ "./components/atoms/btnviewall/index.js");
/* harmony import */ var _atoms_titleh2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../atoms/titleh2 */ "./components/atoms/titleh2/index.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styled */ "./components/organisms/suggestedprojects-all/styled.js");











var Projects =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Projects, _React$Component);

  function Projects() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Projects);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Projects).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Projects, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_9__["BlockWithSection"], {
        className: "col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_userprojects__WEBPACK_IMPORTED_MODULE_6__["default"], null));
    }
  }]);

  return Projects;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./components/organisms/suggestedprojects-all/styled.js":
/*!**************************************************************!*\
  !*** ./components/organisms/suggestedprojects-all/styled.js ***!
  \**************************************************************/
/*! exports provided: BlockWithSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockWithSection", function() { return BlockWithSection; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Import Styled

var BlockWithSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__BlockWithSection",
  componentId: "dtehml-0"
})([""]);

/***/ }),

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_css_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/css/style.scss */ "./static/css/style.scss");
/* harmony import */ var _static_css_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_css_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_organisms_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/organisms/header */ "./components/organisms/header/index.js");
/* harmony import */ var _components_organisms_suggestedprojects_all__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/organisms/suggestedprojects-all */ "./components/organisms/suggestedprojects-all/index.js");





function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_organisms_header__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_organisms_suggestedprojects_all__WEBPACK_IMPORTED_MODULE_4__["default"], null));
}

/***/ }),

/***/ "./static/css/style.scss":
/*!*******************************!*\
  !*** ./static/css/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 5:
/*!*********************************!*\
  !*** multi ./pages/projects.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Diego\Desktop\vanhack-challenge\src\pages\projects.js */"./pages/projects.js");


/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next-server/dist/lib/request-context":
/*!*******************************************************!*\
  !*** external "next-server/dist/lib/request-context" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/request-context");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-lazy-load":
/*!**********************************!*\
  !*** external "react-lazy-load" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lazy-load");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=projects.js.map