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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

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

/***/ "../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

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

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
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

/***/ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../node_modules/next/dist/client/link.js":
/*!************************************************!*\
  !*** ../node_modules/next/dist/client/link.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
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
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
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
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

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

/***/ "./components/atoms/iconbracket/index.js":
/*!***********************************************!*\
  !*** ./components/atoms/iconbracket/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./components/atoms/iconbracket/styled.js");

 // Import Style



var Text = function Text(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["IconBracket"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "roundIcon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: "chevron-left"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: "chevron-right"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./components/atoms/iconbracket/styled.js":
/*!************************************************!*\
  !*** ./components/atoms/iconbracket/styled.js ***!
  \************************************************/
/*! exports provided: IconBracket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconBracket", function() { return IconBracket; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Import Styled

var IconBracket = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.text.withConfig({
  displayName: "styled__IconBracket",
  componentId: "qipsvk-0"
})(["box-sizing:border-box;background:none;color:#fff;margin-right:8px;svg{font-size:16px;}"]);

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

/***/ "./components/atoms/iconcode/index.js":
/*!********************************************!*\
  !*** ./components/atoms/iconcode/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./components/atoms/iconcode/styled.js");

 // Import Style



var Text = function Text(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["IconCode"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "roundIcon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: "code"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./components/atoms/iconcode/styled.js":
/*!*********************************************!*\
  !*** ./components/atoms/iconcode/styled.js ***!
  \*********************************************/
/*! exports provided: IconCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconCode", function() { return IconCode; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Import Styled

var IconCode = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.text.withConfig({
  displayName: "styled__IconCode",
  componentId: "sc-17ogldm-0"
})(["box-sizing:border-box;background:none;color:#fff;margin-right:8px;svg{font-size:16px;color:#6271D2;}.roundIcon{background-color:#EFF0FA;vertical-align:top;position:relative;top:8px;}"]);

/***/ }),

/***/ "./components/atoms/icondollar/index.js":
/*!**********************************************!*\
  !*** ./components/atoms/icondollar/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./components/atoms/icondollar/styled.js");

 // Import Style



var Text = function Text(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["IconDollar"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "roundIcon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: "dollar-sign"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./components/atoms/icondollar/styled.js":
/*!***********************************************!*\
  !*** ./components/atoms/icondollar/styled.js ***!
  \***********************************************/
/*! exports provided: IconDollar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconDollar", function() { return IconDollar; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Import Styled

var IconDollar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.text.withConfig({
  displayName: "styled__IconDollar",
  componentId: "sc-10hciso-0"
})(["box-sizing:border-box;background:none;color:#10C176;margin-right:8px;svg{font-size:16px;color:#10C176;}.roundIcon{background-color:#CFF3E3;vertical-align:top;position:relative;top:8px;}"]);

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

/***/ "./components/atoms/iconstar/index.js":
/*!********************************************!*\
  !*** ./components/atoms/iconstar/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./components/atoms/iconstar/styled.js");

 // Import Style



var Text = function Text(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["IconStar"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "roundIcon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: "star"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./components/atoms/iconstar/styled.js":
/*!*********************************************!*\
  !*** ./components/atoms/iconstar/styled.js ***!
  \*********************************************/
/*! exports provided: IconStar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconStar", function() { return IconStar; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Import Styled

var IconStar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.text.withConfig({
  displayName: "styled__IconStar",
  componentId: "sc-1y50z35-0"
})(["box-sizing:border-box;background:none;color:#fff;margin-right:8px;svg{font-size:16px;}"]);

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

/***/ "./components/atoms/numberbigger/index.js":
/*!************************************************!*\
  !*** ./components/atoms/numberbigger/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./components/atoms/numberbigger/styled.js");

 // Import Style



var Text = function Text(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["NumberBigger"], props, props.text);
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./components/atoms/numberbigger/styled.js":
/*!*************************************************!*\
  !*** ./components/atoms/numberbigger/styled.js ***!
  \*************************************************/
/*! exports provided: NumberBigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberBigger", function() { return NumberBigger; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Import Styled

var NumberBigger = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.text.withConfig({
  displayName: "styled__NumberBigger",
  componentId: "sc-1atzaey-0"
})(["color:#42505C;font-weight:500;font-size:30px;letter-spacing:0.75px;line-height:46px;"]);

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

/***/ "./components/atoms/textcomp/index.js":
/*!********************************************!*\
  !*** ./components/atoms/textcomp/index.js ***!
  \********************************************/
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
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styled */ "./components/atoms/textcomp/styled.js");







 // Import Style



var Text =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Text, _React$Component);

  function Text() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Text);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Text).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Text, [{
    key: "render",
    value: function render() {
      // This must be exactly one element or it will warn.
      var children = this.props.children;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_8__["TextComp"], null, children);
    }
  }]);

  return Text;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

Text.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./components/atoms/textcomp/styled.js":
/*!*********************************************!*\
  !*** ./components/atoms/textcomp/styled.js ***!
  \*********************************************/
/*! exports provided: TextComp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextComp", function() { return TextComp; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Import Styled

var TextComp = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.text.withConfig({
  displayName: "styled__TextComp",
  componentId: "vkt918-0"
})(["color:#79828B;font-size:14px;line-height:21px;letter-spacing:0.75px;display:block;@media (max-width:340px){letter-spacing:0;font-size:13px;}strong{color:#10C172;}"]);

/***/ }),

/***/ "./components/atoms/textdefault/index.js":
/*!***********************************************!*\
  !*** ./components/atoms/textdefault/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./components/atoms/textdefault/styled.js");

 // Import Style



var Text = function Text(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["TextDefault"], props, props.text);
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./components/atoms/textdefault/styled.js":
/*!************************************************!*\
  !*** ./components/atoms/textdefault/styled.js ***!
  \************************************************/
/*! exports provided: TextDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDefault", function() { return TextDefault; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Import Styled

var TextDefault = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.text.withConfig({
  displayName: "styled__TextDefault",
  componentId: "sc-12dkwrt-0"
})(["color:#79828B;font-size:14px;line-height:21px;letter-spacing:0.75px;display:block;padding:12px 0 8px;strong{color:#10C172;}"]);

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

/***/ "./components/atoms/titleh5/index.js":
/*!*******************************************!*\
  !*** ./components/atoms/titleh5/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./components/atoms/titleh5/styled.js");

 // Import Style



var Text = function Text(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["TitleH5"], props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, props.text));
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./components/atoms/titleh5/styled.js":
/*!********************************************!*\
  !*** ./components/atoms/titleh5/styled.js ***!
  \********************************************/
/*! exports provided: TitleH5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleH5", function() { return TitleH5; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Import Styled

var TitleH5 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.text.withConfig({
  displayName: "styled__TitleH5",
  componentId: "sc-1lkkj36-0"
})(["color:#79828B;display:block;h5{font-weight:500;font-size:14px;letter-spacing:1.5px;line-height:15px;text-transform:uppercase;margin-bottom:16px;}"]);

/***/ }),

/***/ "./components/molecules/chart/index.js":
/*!*********************************************!*\
  !*** ./components/molecules/chart/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-google-charts */ "react-google-charts");
/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_google_charts__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static_images_spinner_gif__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../static/images/spinner.gif */ "./static/images/spinner.gif");
/* harmony import */ var _static_images_spinner_gif__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_images_spinner_gif__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styled */ "./components/molecules/chart/styled.js");







var _options;






var chartEvents = [{
  eventName: "select",
  callback: function callback(_ref) {
    var chartWrapper = _ref.chartWrapper;
    console.log("Selected ", chartWrapper.getChart().getSelection());
  }
}];
var data = [["", ""], ["Mar", 170], ["", 220], ["May", 180], ["", 200], ["Jul", 100], ["", 230], ["Sep", 170], ["", 190], ["Nov", 230], ["", 220], ["Jan", 250]];
var options = (_options = {
  title: "Months vs. Earnings",
  hAxis: {
    title: "Earnings"
  },
  vAxis: {
    title: "Months"
  },
  legend: "none",
  chartArea: {
    width: '85%',
    height: '70%',
    top: 10,
    right: 5
  },
  titlePosition: 'none',
  axisTitlesPosition: 'out'
}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_options, "hAxis", {
  textPosition: 'out',
  gridlines: {
    color: '#333',
    count: 6
  }
}), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_options, "vAxis", {
  textPosition: 'out',
  format: '$#'
}), _options);

var earningChart =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(earningChart, _React$Component);

  function earningChart() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, earningChart);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(earningChart).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(earningChart, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__["ChartContent"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_google_charts__WEBPACK_IMPORTED_MODULE_8__["Chart"], {
        chartType: "LineChart",
        data: data,
        options: options,
        graphID: "LineChart",
        width: "100%",
        height: "180px",
        chartEvents: chartEvents,
        loader: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "spinner"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
          src: _static_images_spinner_gif__WEBPACK_IMPORTED_MODULE_9___default.a
        }))
      }));
    }
  }]);

  return earningChart;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (earningChart);

/***/ }),

/***/ "./components/molecules/chart/styled.js":
/*!**********************************************!*\
  !*** ./components/molecules/chart/styled.js ***!
  \**********************************************/
/*! exports provided: ChartContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartContent", function() { return ChartContent; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Import Styled

var ChartContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__ChartContent",
  componentId: "zndva4-0"
})([".spinner{text-align:center;display:block;margin:0 auto;}"]);

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

/***/ "./components/molecules/useractivity/index.js":
/*!****************************************************!*\
  !*** ./components/molecules/useractivity/index.js ***!
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
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _atoms_tageth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../atoms/tageth */ "./components/atoms/tageth/index.js");
/* harmony import */ var _atoms_tagbtc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../atoms/tagbtc */ "./components/atoms/tagbtc/index.js");
/* harmony import */ var _atoms_iconcode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../atoms/iconcode */ "./components/atoms/iconcode/index.js");
/* harmony import */ var _atoms_icondollar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../atoms/icondollar */ "./components/atoms/icondollar/index.js");
/* harmony import */ var _atoms_texttime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../atoms/texttime */ "./components/atoms/texttime/index.js");
/* harmony import */ var _atoms_titleh5__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../atoms/titleh5 */ "./components/atoms/titleh5/index.js");
/* harmony import */ var _atoms_thumbavatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../atoms/thumbavatar */ "./components/atoms/thumbavatar/index.js");
/* harmony import */ var _atoms_textavatar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../atoms/textavatar */ "./components/atoms/textavatar/index.js");
/* harmony import */ var _atoms_textdefault__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../atoms/textdefault */ "./components/atoms/textdefault/index.js");
/* harmony import */ var _atoms_numberdefault__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../atoms/numberdefault */ "./components/atoms/numberdefault/index.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./styled */ "./components/molecules/useractivity/styled.js");
/* harmony import */ var _static_images_thumbavatar_default_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../static/images/thumbavatar-default.png */ "./static/images/thumbavatar-default.png");
/* harmony import */ var _static_images_thumbavatar_default_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_static_images_thumbavatar_default_png__WEBPACK_IMPORTED_MODULE_19__);

















 // Import Style




var UserActivity =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(UserActivity, _React$Component);

  function UserActivity() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserActivity);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(UserActivity).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UserActivity, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_18__["BlockDefault"], {
        className: "blockDefault"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blockContainer"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_titleh5__WEBPACK_IMPORTED_MODULE_13__["default"], {
        text: "Recent"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "map"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col avatar"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_iconcode__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_lazy_load__WEBPACK_IMPORTED_MODULE_6___default.a, {
        height: 48,
        width: 48
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_thumbavatar__WEBPACK_IMPORTED_MODULE_14__["default"], {
        className: "avatarImg",
        src: _static_images_thumbavatar_default_png__WEBPACK_IMPORTED_MODULE_19___default.a
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col infos"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "name"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_textavatar__WEBPACK_IMPORTED_MODULE_15__["default"], {
        text: "Alice Martin"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_texttime__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: "time",
        text: "5 hours ago"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_textdefault__WEBPACK_IMPORTED_MODULE_16__["default"], {
        className: "textDefault",
        text: "Recieved $760 for a Ruby project."
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_tageth__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "1.2 ETH"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_numberdefault__WEBPACK_IMPORTED_MODULE_17__["default"], {
        text: "$760"
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "map"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col avatar"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_icondollar__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_lazy_load__WEBPACK_IMPORTED_MODULE_6___default.a, {
        height: 48,
        width: 48
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_thumbavatar__WEBPACK_IMPORTED_MODULE_14__["default"], {
        className: "avatarImg",
        src: _static_images_thumbavatar_default_png__WEBPACK_IMPORTED_MODULE_19___default.a
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col infos"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "name"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_textavatar__WEBPACK_IMPORTED_MODULE_15__["default"], {
        text: "Alice Martin"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_texttime__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: "time",
        text: "5 hours ago"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_textdefault__WEBPACK_IMPORTED_MODULE_16__["default"], {
        className: "textDefault",
        text: "Recieved $760 for a Ruby project."
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_tageth__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "1.2 ETH"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_numberdefault__WEBPACK_IMPORTED_MODULE_17__["default"], {
        text: "$760"
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "map"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col avatar"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_iconcode__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_lazy_load__WEBPACK_IMPORTED_MODULE_6___default.a, {
        height: 48,
        width: 48
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_thumbavatar__WEBPACK_IMPORTED_MODULE_14__["default"], {
        className: "avatarImg",
        src: _static_images_thumbavatar_default_png__WEBPACK_IMPORTED_MODULE_19___default.a
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col infos"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "name"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_textavatar__WEBPACK_IMPORTED_MODULE_15__["default"], {
        text: "Alice Martin"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_texttime__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: "time",
        text: "5 hours ago"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_textdefault__WEBPACK_IMPORTED_MODULE_16__["default"], {
        className: "textDefault",
        text: "Recieved $760 for a Ruby project."
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_tageth__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "1.2 ETH"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_numberdefault__WEBPACK_IMPORTED_MODULE_17__["default"], {
        text: "$760"
      }))))));
    }
  }]);

  return UserActivity;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (UserActivity);

/***/ }),

/***/ "./components/molecules/useractivity/styled.js":
/*!*****************************************************!*\
  !*** ./components/molecules/useractivity/styled.js ***!
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
  componentId: "vohqia-0"
})([".blockContainer{@media (min-width:992px){max-height:405px;}}.avatar{vertical-align:top;.avatarImg{margin-left:-16px;margin-right:16px;position:relative;z-index:2;}@media (max-width:422px){max-width:38%;float:left;}@media (min-width:992px){width:88px;}}.infos{position:relative;margin-bottom:8px;&:before{content:\"\";width:1px;background:#E6EBF0;position:absolute;left:-40px;top:50px;height:80%;display:block;}text{margin-right:16px;}.textDefault{padding-top:2px;}.name{position:relative;.time{@media (min-width:992px){position:absolute;right:0;top:4px;}}}@media (max-width:422px){max-width:62%;}@media (min-width:992px){width:calc(100% - 88px);}}"]);

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
/* harmony import */ var _static_images_thumbavatar_default_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../static/images/thumbavatar-default.png */ "./static/images/thumbavatar-default.png");
/* harmony import */ var _static_images_thumbavatar_default_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_static_images_thumbavatar_default_png__WEBPACK_IMPORTED_MODULE_16__);














 // Import Style




var UserProjects =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(UserProjects, _React$Component);

  function UserProjects() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserProjects);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(UserProjects).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UserProjects, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_15__["BlockDefault"], {
        className: "blockDefault"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "map"
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
        src: _static_images_thumbavatar_default_png__WEBPACK_IMPORTED_MODULE_16___default.a
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "name"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_textavatar__WEBPACK_IMPORTED_MODULE_13__["default"], {
        text: "Alice Martin"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_texttime__WEBPACK_IMPORTED_MODULE_10__["default"], {
        text: "5 hours ago"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-2 tag"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_tagdefault__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "ruby"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row bottomBorder"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_textbigger__WEBPACK_IMPORTED_MODULE_14__["default"], {
        text: "Design and develop a website for an educational platform focusing on the growth of children."
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row tags"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-10"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_tageth__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "1.2 ETH"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_tagbtc__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "0.3 BTC"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-2 number"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_numberdefault__WEBPACK_IMPORTED_MODULE_11__["default"], {
        text: "$760"
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "map"
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
        src: _static_images_thumbavatar_default_png__WEBPACK_IMPORTED_MODULE_16___default.a
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "name"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_textavatar__WEBPACK_IMPORTED_MODULE_13__["default"], {
        text: "Alice Martin"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_texttime__WEBPACK_IMPORTED_MODULE_10__["default"], {
        text: "5 hours ago"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-2 tag"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_tagdefault__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "ruby"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row bottomBorder"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_textbigger__WEBPACK_IMPORTED_MODULE_14__["default"], {
        text: "Design and develop a website for an educational platform focusing on the growth of children."
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row tags"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-10"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_tageth__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "1.2 ETH"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_tagbtc__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "0.3 BTC"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-2 number"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_numberdefault__WEBPACK_IMPORTED_MODULE_11__["default"], {
        text: "$760"
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "map"
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
        src: _static_images_thumbavatar_default_png__WEBPACK_IMPORTED_MODULE_16___default.a
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "name"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_textavatar__WEBPACK_IMPORTED_MODULE_13__["default"], {
        text: "Alice Martin"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_texttime__WEBPACK_IMPORTED_MODULE_10__["default"], {
        text: "5 hours ago"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-2 tag"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_tagdefault__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "ruby"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row bottomBorder"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_textbigger__WEBPACK_IMPORTED_MODULE_14__["default"], {
        text: "Design and develop a website for an educational platform focusing on the growth of children."
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row tags"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-10"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_tageth__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "1.2 ETH"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_tagbtc__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "0.3 BTC"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-2 number"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_numberdefault__WEBPACK_IMPORTED_MODULE_11__["default"], {
        text: "$760"
      }))))));
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
})([".map{@media (min-width:992px){width:31.3%;display:inline-block;margin-right:3%;}&:last-child{margin-right:0;}}.name{display:inline-block;margin-left:12px;vertical-align:top;margin-bottom:24px;}.number{text{float:right;}}.tag{text{float:right;}}.tags{text{margin-right:12px;}> div{display:flex;}.number{text{position:absolute;right:0;margin-right:0;}}}"]);

/***/ }),

/***/ "./components/molecules/userrankings/index.js":
/*!****************************************************!*\
  !*** ./components/molecules/userrankings/index.js ***!
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
/* harmony import */ var _atoms_titleh5__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../atoms/titleh5 */ "./components/atoms/titleh5/index.js");
/* harmony import */ var _atoms_texttime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../atoms/texttime */ "./components/atoms/texttime/index.js");
/* harmony import */ var _atoms_thumbavatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../atoms/thumbavatar */ "./components/atoms/thumbavatar/index.js");
/* harmony import */ var _atoms_textavatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../atoms/textavatar */ "./components/atoms/textavatar/index.js");
/* harmony import */ var _atoms_numberdefault__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../atoms/numberdefault */ "./components/atoms/numberdefault/index.js");
/* harmony import */ var _static_images_thumbavatar_default_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../static/images/thumbavatar-default.png */ "./static/images/thumbavatar-default.png");
/* harmony import */ var _static_images_thumbavatar_default_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_static_images_thumbavatar_default_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./styled */ "./components/molecules/userrankings/styled.js");














 // Import Style



var UserRankings =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(UserRankings, _React$Component);

  function UserRankings() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserRankings);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(UserRankings).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UserRankings, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_15__["BlockDefault"], {
        className: "blockDefault"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blockContainer"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-4"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_titleh5__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "Rankings"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-8 menu"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_texttime__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "active",
        text: "All time"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_texttime__WEBPACK_IMPORTED_MODULE_10__["default"], {
        text: "This month"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "map"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row bottomBorder"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-1"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "order"
      }, "1.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-11"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_lazy_load__WEBPACK_IMPORTED_MODULE_6___default.a, {
        height: 48,
        width: 48
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_thumbavatar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        src: _static_images_thumbavatar_default_png__WEBPACK_IMPORTED_MODULE_14___default.a
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "name"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_textavatar__WEBPACK_IMPORTED_MODULE_12__["default"], {
        text: "Alice Martin"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_numberdefault__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: "num",
        text: "$760"
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "map"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row bottomBorder"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-1"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "order"
      }, "1.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-11"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_lazy_load__WEBPACK_IMPORTED_MODULE_6___default.a, {
        height: 48,
        width: 48
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_thumbavatar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        src: _static_images_thumbavatar_default_png__WEBPACK_IMPORTED_MODULE_14___default.a
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "name"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_textavatar__WEBPACK_IMPORTED_MODULE_12__["default"], {
        text: "Alice Martin"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_numberdefault__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: "num",
        text: "$760"
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "map"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row bottomBorder"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-1"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "order"
      }, "1.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-11"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_lazy_load__WEBPACK_IMPORTED_MODULE_6___default.a, {
        height: 48,
        width: 48
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_thumbavatar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        src: _static_images_thumbavatar_default_png__WEBPACK_IMPORTED_MODULE_14___default.a
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "name"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_textavatar__WEBPACK_IMPORTED_MODULE_12__["default"], {
        text: "Alice Martin"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_numberdefault__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: "num",
        text: "$760"
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "map"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row bottomBorder"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-1"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "order"
      }, "1.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-11"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_lazy_load__WEBPACK_IMPORTED_MODULE_6___default.a, {
        height: 48,
        width: 48
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_thumbavatar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        src: _static_images_thumbavatar_default_png__WEBPACK_IMPORTED_MODULE_14___default.a
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "name"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_textavatar__WEBPACK_IMPORTED_MODULE_12__["default"], {
        text: "Alice Martin"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_numberdefault__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: "num",
        text: "$760"
      })))))));
    }
  }]);

  return UserRankings;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (UserRankings);

/***/ }),

/***/ "./components/molecules/userrankings/styled.js":
/*!*****************************************************!*\
  !*** ./components/molecules/userrankings/styled.js ***!
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
  componentId: "sc-6u8fov-0"
})([".blockContainer{@media (min-width:992px){max-height:405px;}}.menu{text{float:right;margin-left:16px;}.active{color:#6271D2;}}.order{color:#42505C;font-family:\"Roboto Mono\";font-size:20px;line-height:43px;font-weight:800;}.number{text{float:right}}.name{vertical-align:top;display:inline-block;margin-left:12px;text{line-height:20px;}.num{color:#79828B;font-size:16px;letter-spacing:1px;line-height:25px;}}"]);

/***/ }),

/***/ "./components/organisms/activity/index.js":
/*!************************************************!*\
  !*** ./components/organisms/activity/index.js ***!
  \************************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _molecules_useractivity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../molecules/useractivity */ "./components/molecules/useractivity/index.js");
/* harmony import */ var _atoms_titleh2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../atoms/titleh2 */ "./components/atoms/titleh2/index.js");
/* harmony import */ var _atoms_btnviewall__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../atoms/btnviewall */ "./components/atoms/btnviewall/index.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styled */ "./components/organisms/activity/styled.js");












var Activity =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Activity, _React$Component);

  function Activity() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Activity);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Activity).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Activity, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__["BlockWithSection"], {
        className: "col-md-8"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "sectionTitle"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_titleh2__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Activity"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "activity"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_btnviewall__WEBPACK_IMPORTED_MODULE_9__["default"], null))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_useractivity__WEBPACK_IMPORTED_MODULE_7__["default"], null));
    }
  }]);

  return Activity;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Activity);

/***/ }),

/***/ "./components/organisms/activity/styled.js":
/*!*************************************************!*\
  !*** ./components/organisms/activity/styled.js ***!
  \*************************************************/
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
  componentId: "sc-7csi3f-0"
})([""]);

/***/ }),

/***/ "./components/organisms/earnings/index.js":
/*!************************************************!*\
  !*** ./components/organisms/earnings/index.js ***!
  \************************************************/
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
/* harmony import */ var _molecules_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../molecules/chart */ "./components/molecules/chart/index.js");
/* harmony import */ var _atoms_tageth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../atoms/tageth */ "./components/atoms/tageth/index.js");
/* harmony import */ var _atoms_tagbtc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../atoms/tagbtc */ "./components/atoms/tagbtc/index.js");
/* harmony import */ var _atoms_titleh5__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../atoms/titleh5 */ "./components/atoms/titleh5/index.js");
/* harmony import */ var _atoms_numberbigger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../atoms/numberbigger */ "./components/atoms/numberbigger/index.js");
/* harmony import */ var _atoms_textcomp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../atoms/textcomp */ "./components/atoms/textcomp/index.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styled */ "./components/organisms/earnings/styled.js");














var Earnings =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Earnings, _React$Component);

  function Earnings() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Earnings);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Earnings).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Earnings, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_12__["BlockDefault"], {
        className: "blockDefault col-md-8"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blockContainer"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_titleh5__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "Earnings"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-12 col-md-9 align-right-md no-gutter"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "chartContent"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_chart__WEBPACK_IMPORTED_MODULE_6__["default"], null))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-12 col-md-3 no-gutter"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-7 col-md-12 no-gutter numbers"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_numberbigger__WEBPACK_IMPORTED_MODULE_10__["default"], {
        text: "$2878.90"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_textcomp__WEBPACK_IMPORTED_MODULE_11__["default"], null, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", null, "+42"), " since last week ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-5 col-md-12 no-gutter tags"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_tageth__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "0.9087 ETH"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_tagbtc__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "0.5 BTC"
      }))))));
    }
  }]);

  return Earnings;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Earnings);

/***/ }),

/***/ "./components/organisms/earnings/styled.js":
/*!*************************************************!*\
  !*** ./components/organisms/earnings/styled.js ***!
  \*************************************************/
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
  componentId: "sc-1al1cgr-0"
})([".blockContainer{@media (min-width:992px){max-height:246px;}}h5{margin-bottom:0;font-size:12px;}.numbers{@media (min-width:992px){margin-bottom:24px;}text{clear:both;display:block;}}.tags{text{clear:both;display:block;width:fit-content;margin-bottom:4px;;}}"]);

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

/***/ "./components/organisms/ranking/index.js":
/*!***********************************************!*\
  !*** ./components/organisms/ranking/index.js ***!
  \***********************************************/
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
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _atoms_titleh5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../atoms/titleh5 */ "./components/atoms/titleh5/index.js");
/* harmony import */ var _atoms_iconbracket__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../atoms/iconbracket */ "./components/atoms/iconbracket/index.js");
/* harmony import */ var _atoms_iconstar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../atoms/iconstar */ "./components/atoms/iconstar/index.js");
/* harmony import */ var _atoms_numberbigger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../atoms/numberbigger */ "./components/atoms/numberbigger/index.js");
/* harmony import */ var _atoms_textcomp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../atoms/textcomp */ "./components/atoms/textcomp/index.js");
/* harmony import */ var _atoms_tagdefault__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../atoms/tagdefault */ "./components/atoms/tagdefault/index.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styled */ "./components/organisms/ranking/styled.js");
















var Ranking =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Ranking, _React$Component);

  function Ranking() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Ranking);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Ranking).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Ranking, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_14__["BlockDefault"], {
        className: "blockDefault col-md-4"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blockContainer"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row bottomBorder"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-7 col-md-7 no-gutter"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_titleh5__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Rank"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_lazy_load__WEBPACK_IMPORTED_MODULE_6___default.a, {
        height: 32,
        width: 32
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_iconstar__WEBPACK_IMPORTED_MODULE_10__["default"], null)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_numberbigger__WEBPACK_IMPORTED_MODULE_11__["default"], {
        text: "607"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_textcomp__WEBPACK_IMPORTED_MODULE_12__["default"], null, "You're in top ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", null, "40%"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-5 col-md-5 no-gutter"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_titleh5__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Projects"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_lazy_load__WEBPACK_IMPORTED_MODULE_6___default.a, {
        height: 32,
        width: 32
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_iconbracket__WEBPACK_IMPORTED_MODULE_9__["default"], null)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_numberbigger__WEBPACK_IMPORTED_MODULE_11__["default"], {
        text: "45"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_textcomp__WEBPACK_IMPORTED_MODULE_12__["default"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", null, "10"), " in this month"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row no-margin-bottom"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_titleh5__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Top Categories"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "topCategories"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_tagdefault__WEBPACK_IMPORTED_MODULE_13__["default"], {
        text: "ruby"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_tagdefault__WEBPACK_IMPORTED_MODULE_13__["default"], {
        text: "clojure"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_tagdefault__WEBPACK_IMPORTED_MODULE_13__["default"], {
        text: "java"
      }))))));
    }
  }]);

  return Ranking;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Ranking);

/***/ }),

/***/ "./components/organisms/ranking/styled.js":
/*!************************************************!*\
  !*** ./components/organisms/ranking/styled.js ***!
  \************************************************/
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
  componentId: "sc-16b3aia-0"
})([".blockContainer{@media (min-width:992px){max-height:246px;}}li{display:inline-block;margin-right:12px;margin-bottom:16px;&:after{content:\"\";clear:both;display:block;}}.LazyLoad{margin-right:8px;}"]);

/***/ }),

/***/ "./components/organisms/slack/index.js":
/*!*********************************************!*\
  !*** ./components/organisms/slack/index.js ***!
  \*********************************************/
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
/* harmony import */ var react_lazy_load__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-lazy-load */ "react-lazy-load");
/* harmony import */ var react_lazy_load__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styled */ "./components/organisms/slack/styled.js");











var Slack =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Slack, _React$Component);

  function Slack(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Slack);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Slack).call(this, props));
    _this.state = {
      showComponent: true,
      fade: false
    };
    _this.destroyComponent = _this.destroyComponent.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Slack, [{
    key: "destroyComponent",
    value: function destroyComponent() {
      var _this2 = this;

      this.setState({
        fade: true
      }), setTimeout(function () {
        return _this2.setState({
          showComponent: false
        });
      }, 300);
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.showComponent && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_9__["BlockSlack"], {
        className: this.state.fade ? "fade col-md-12" : "col-md-12",
        clickedButton: this.close
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "blockSlackContainer"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-xs-12 col-md-1"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_lazy_load__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        className: "icon",
        icon: ['fab', 'slack-hash']
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-xs-12 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", null, "Join the conversation on Slack"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "Stay up to date on the latest news and special programs that only take place within the slack channel.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-xs-12 col-md-5 btns"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col active"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "btnCta",
        href: "https://vanhackathon.slack.com",
        target: "_blank",
        title: "Join now"
      }, "Join now")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "btnCta",
        onClick: this.destroyComponent
      }, "Remind later"))))));
    }
  }]);

  return Slack;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Slack);

/***/ }),

/***/ "./components/organisms/slack/styled.js":
/*!**********************************************!*\
  !*** ./components/organisms/slack/styled.js ***!
  \**********************************************/
/*! exports provided: BlockSlack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockSlack", function() { return BlockSlack; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// Import Styled

var BlockSlack = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__BlockSlack",
  componentId: "sc-5cozm4-0"
})(["transition:opacity 0.3s;.blockSlackContainer{border-radius:10px;background:linear-gradient(201.71deg,#8F9DF8 0%,#92A0FF 100%);box-shadow:0 26px 51px 0 rgba(0,0,0,0.08);padding:24px 16px;color:#fff;text-align:center;position:relative;@media (min-width:992px){text-align:left;padding:32px 48px;margin:24px 0 16px;}&:after{content:\"\";clear:both;display:block;}}&.fade{opacity:0;}.row{@media (min-width:992px){margin:0;display:flex;justify-content:flex-start;align-items:center;}}.icon{font-size:62px;margin-bottom:16px;@media (min-width:992px){margin-bottom:0;}}h5{font-weight:700;font-size:18px;line-height:25px;margin-bottom:16px;letter-spacing:0.75px;@media (min-width:992px){font-size:24px;}}p{opacity:0.75;font-size:13px;line-height:20px;margin-bottom:24px;letter-spacing:0.75px;@media (min-width:992px){margin-bottom:0;font-size:16px;line-height:24px;}}.btns{@media (max-width:991px){max-width:fit-content;margin:0 auto;display:block;float:none;}@media (min-width:992px){.col{float:right;}}}.btnCta{cursor:pointer;font-weight:500;font-size:14px;letter-spacing:1.75px;line-height:15px;box-sizing:border-box;border:1px solid #FFFFFF;border-radius:6px;text-transform:uppercase;display:inline-block;padding:14px 10px;margin:0 4px;@media (min-width:992px){padding:14px 18px;margin:0 6px;}}.active{float:right;a{color:#fff;background:#6574D6;border-color:#6574D6;text-decoration:none;}}"]);

/***/ }),

/***/ "./components/organisms/suggestedprojects/index.js":
/*!*********************************************************!*\
  !*** ./components/organisms/suggestedprojects/index.js ***!
  \*********************************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _molecules_userprojects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../molecules/userprojects */ "./components/molecules/userprojects/index.js");
/* harmony import */ var _atoms_btnviewall__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../atoms/btnviewall */ "./components/atoms/btnviewall/index.js");
/* harmony import */ var _atoms_titleh2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../atoms/titleh2 */ "./components/atoms/titleh2/index.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styled */ "./components/organisms/suggestedprojects/styled.js");












var Ranking =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Ranking, _React$Component);

  function Ranking() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Ranking);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Ranking).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Ranking, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__["BlockWithSection"], {
        className: "col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "sectionTitle"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-7"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_titleh2__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "Suggested Projects"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-5"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "projects"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_btnviewall__WEBPACK_IMPORTED_MODULE_8__["default"], null))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_userprojects__WEBPACK_IMPORTED_MODULE_7__["default"], null));
    }
  }]);

  return Ranking;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Ranking);

/***/ }),

/***/ "./components/organisms/suggestedprojects/styled.js":
/*!**********************************************************!*\
  !*** ./components/organisms/suggestedprojects/styled.js ***!
  \**********************************************************/
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
  componentId: "sc-1w9oqvv-0"
})([""]);

/***/ }),

/***/ "./components/organisms/topearners/index.js":
/*!**************************************************!*\
  !*** ./components/organisms/topearners/index.js ***!
  \**************************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _molecules_userrankings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../molecules/userrankings */ "./components/molecules/userrankings/index.js");
/* harmony import */ var _atoms_btnviewall__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../atoms/btnviewall */ "./components/atoms/btnviewall/index.js");
/* harmony import */ var _atoms_titleh2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../atoms/titleh2 */ "./components/atoms/titleh2/index.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styled */ "./components/organisms/topearners/styled.js");













var TopEarners =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TopEarners, _React$Component);

  function TopEarners() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TopEarners);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TopEarners).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TopEarners, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_11__["BlockWithSection"], {
        className: "col-md-4"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "sectionTitle"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_titleh2__WEBPACK_IMPORTED_MODULE_10__["default"], {
        text: "Top Earners"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-`6"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "payments"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_btnviewall__WEBPACK_IMPORTED_MODULE_9__["default"], null))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_userrankings__WEBPACK_IMPORTED_MODULE_8__["default"], null));
    }
  }]);

  return TopEarners;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TopEarners);

/***/ }),

/***/ "./components/organisms/topearners/styled.js":
/*!***************************************************!*\
  !*** ./components/organisms/topearners/styled.js ***!
  \***************************************************/
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
  componentId: "rkem3m-0"
})([""]);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _components_organisms_earnings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/organisms/earnings */ "./components/organisms/earnings/index.js");
/* harmony import */ var _components_organisms_ranking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/organisms/ranking */ "./components/organisms/ranking/index.js");
/* harmony import */ var _components_organisms_suggestedprojects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/organisms/suggestedprojects */ "./components/organisms/suggestedprojects/index.js");
/* harmony import */ var _components_organisms_activity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/organisms/activity */ "./components/organisms/activity/index.js");
/* harmony import */ var _components_organisms_topearners__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/organisms/topearners */ "./components/organisms/topearners/index.js");
/* harmony import */ var _components_organisms_slack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/organisms/slack */ "./components/organisms/slack/index.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__);













_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_10__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__["fab"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faDollarSign"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faTimesCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faBell"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faMapMarker"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faStar"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faBars"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faChevronDown"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faChevronLeft"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faChevronRight"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faArrowRight"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faCode"]);
function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_organisms_header__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_organisms_earnings__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_organisms_ranking__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_organisms_suggestedprojects__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_organisms_slack__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_organisms_activity__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_organisms_topearners__WEBPACK_IMPORTED_MODULE_8__["default"], null));
}

/***/ }),

/***/ "./static/css/style.scss":
/*!*******************************!*\
  !*** ./static/css/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/images/spinner.gif":
/*!***********************************!*\
  !*** ./static/images/spinner.gif ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlh2gCVAPcAAP///7Ozs/v7+9bW1uHh4fLy8rq6uoGBgTQ0NAEBARsbG8TExJeXl/39/VRUVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBQAAACwAAAAA2gCVAAAI/wABCBxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1KtarVq1izat3KtavXr2DDih1LtqzZs2jTql3Ltq3bt3Djyp1Lt67du3jz6t3Lt6/fv4ADCx5MuLDhw4gTK17MuLHjx5AjS55MubLly5gza97MubPnzx8ZJGAA+qaCBAoKDiBQGmWAAwUTyCa4IECA1iYJKFDggKDsBAMJ2DaA2+RuBbcF/h5owPaA4iUP7EYwcDmAAcOhm0SwGzYA67YDsP/WTjLAcdbLsQdYQFD9ePIUAyBAQHqgg+4GhQdv7hx+RQbzIeBAcgsoUF9CtYXHnn8VORCggM8xFF4ABrzHYHwOBtiQehFeiBGACCTHUIceZkSAdyXuNOFwFqaI0AIMHCDjjBCtmJ2LCs2oI4oN2VghjgrBuCOPQNZEYpETHZkQh0hKxCRD/FHYYpMIERAlcQ0laNuCVL44IZZLimhleEp2eV14PwoknkHqcXldc1OaKVwAJCb4XHhq2hanmQ3NmRyeZ1LI50T8RQgoAIUOCpF6YB7qp6IP8ffeoQAkCKlDWxJE6XV7XloQAUc2B6anF1nZKamopqrqqqy26uqrsMY/KuustNZq66245qrrrrz26uuvwAYr7LDEFmvsscgmq+yyzDbr7LPQRivttNRWa+212Gar7bbcduvtt+CGe1JAACH5BAUFAAAALF0AOgAYABcAAAiZAAEIHEiwoIIABRMqHIhAAYKCBxgslEhQgUWCCBIkUIjgYcWLAhloVMCxo4GBFkkKVKDxgEIGHR2gBHlg5EIADjpSTAlggMYEFBd29MjTgUaPPQ8cOIkRKUGRCwYaUKp0gMABCBDeJBiAakQCWxcO8Ooy7MKpB6Kaval1rduwBAwEmEv3LQC5dOu+jZt3rt2/gAMLHnxT7dqAACH5BAUFAAAALF4AOgAdAA4AAAiZAAEIHEhwYAAEBRMqXAjAAQIHCQMwHDjAQEEEGAk6UKBgosADByQOxIhQYACOJSeCPDBgZEaBCDh6FGhgpcuUKGcKZADSIgCSAAhwVCByIIGFA2z+zHiAI8SBBxIkYEAggIGWA3mGVNhxpwKpCVgGGGvgaNADCyYuQAA2QckFY8em1dmWKEECBuL69Bg1LNKxWGc6CIxUJ8OAACH5BAUFAAAALGQAOgAZABEAAAiPAAEIHAhgwYEFBBMqXMjgAIOEDxcCIDAg4YGLCREgkBggAMKBFw8Q1CgRQMcABEBiFOhAY0SFAzoaUCkSAAONDkoCMNCxIoCQAjVu1EngpECgAEgmVKAgAMEFPRUGQOBzKlMFUn2WdHBVQU6dC7sOJegUrE2mZsEeSJm2rVuFCeLKVfCyrdy7Cd4CwJuAbkAAIfkEBQUAAAAsawA6ABIAGAAACIsABzAYAKCgwYMIAzBACMAAQYYAGEg8yODAAYgRJxYcYPEiRIkLC3Y0gBFkQQMdMWYM2fHhx4kBLIYsyAABAowLDhAw6MAmgpkQCfq8qbLgUAckixr9qbSp06cFFUidSlTl1KsKimJVgCAAVKcHXDY9kCCBx6ZlyyoAihNB2gRVizJQkPasUrIJvAYEACH5BAUFAAAALGsAOgASAB4AAAipAAkYIACgoMGDCA0EMIBwAcKDASJCZMDgYcGIAQ5SzGgRo8EAFB12lAhgAcWKFgF4BHAy5UWJJhlwLGjgwIEBFgfMHGDTJkOXBBj0PIDS5dCbLg0u8JkU4cymUJMimErVwdOHVLMikKrVQdSvBgl+ZaBAAdiyZRFczekArQKvFg8kEBkAAVqLDhIk2HrQrkUCehMUbSo3gdmvCvQe+BogMFgEesVGJWoxIAAh+QQFBQAAACxsADsAEQAfAAAIpAABCBwIYAABgggRLggQIKFDAgwNOExogOGAiQQHRMRIkGGAgxwLMlyQkSFIgicBEKhokeNCjyQxegxgIKVDjQEuhhSoc6dPhweCCmUQE6jQoxiPBiX6s6nPAAgQMPAZNaqDn1URTGSggKCDqlMJHlCg4OrAqVoBJFgrkKyChg7XJhhINm1CuQMRkJ2Il+7eu2wHOviLsG9HhwoSdPXJIEHYnQEBACH5BAUFAAAALGUASAAYABIAAAiTAAEIHEiwIIAACBMaIGCw4cCEEA04dAgR4cKJGDNiDKAR44IDByR2NAiy5ICRBAkwKHmAwcgACE4CGMBSJIAFCQ40RICgoAGQMgEgSJDAAQAFSAXy7DmRAdEEDJEqEMiAp1GHCojqPJpUoAOeLkkSnSpQKsGlDbMmCMuV7ECeDYkyLdt1INuCKwsiUDAX5UO3GgMCACH5BAUFAAAALF8ATAAdAA4AAAigAAEIHEiwoEEAAw4SHOBAocEBAQIkPHggQYIDDgkaiBjAAAGCARRYtJiR4AKOARYIRDAyAQKVDhcc+AiAwMaIAypaVMBA4ACeBgMcONBz4ICNBBhYxDjQgQIFGBFIFTj0wESDNAeGfLpyKgADVUsORMC1K4KBDIYaEAvg6VmzRsOWJKsgwFivAtMyzfi04d23Aw1cdWi3oAMEftmKBVwyIAAh+QQFBQAAACxdAEkAGQARAAAIjQAZKEhAsCCAgwgTKjxYsGGChRATCnT4MKLFixgvEjiQEaMCBQw6QkTw8aPIhA5KKnCAcUCAhSURvDwoc6HLAAsSBjCpEAGCgweCHgxAlABGnz8BBOUI4KaBiw58hlQq9KABogMiMvDJEmhVAASIzhyZ1CvTgwuIRvSpcKnCAUa1KmRwYOpJhQsO5FwYEAAh+QQFBQAAACxeAEIAEQAYAAAIgQADJEhwAIDBgwgPHhiYQAGDhBABIGCYAMGCiAgZKKCIMeFCgh0TDigYsqTJkyhTqlyJkQECBCYNOHj5siRNmAM6unzp4CCBAxchvnx4kMGBAwEABFiKceRRg0uTRjx6wABUphANUD0YderRnFelekSKsCvEAWINGghg9SQBAwQCAgAh+QQFBQAAACxdADwADgAdAAAImQABCBwIgMEBgggHJkiAICHChQkCOBx4YKGCiQMVLDyIkQHEARkbEkSw0EFGBQoQSASwIAFHgQ5QonQA0mEABDIvYgSAksFOAAR+7gzgAIHRowmPKhVJkOhSpkKjrsRo4MCBBRMHWN3q0OBWBkERVrXKAKvAAGEBaD1ggOCCAAFqOiQAd6pDA3DlJhwAty1VuGltBjCLkYDegAA7"

/***/ }),

/***/ "./static/images/thumbavatar-default.png":
/*!***********************************************!*\
  !*** ./static/images/thumbavatar-default.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAALCElEQVR42u1ZC1RVVRr+93ncBy+Rt09ESw0TURmzUuACBmUqljWNrzGwl/lKncxlL6tpNaYrs8dMOZU5LLOaUWuyMHmTDaKFKIgPhFRCQbjKm3vuOeef/1yB7oWrcdHGaa32umfdffbeZ+//+//vf5x7GfzKG7veAvwG4JfamNfpOQAMYsDc6btWliTzrwKAIOpIZoinrVcCYyNpSKSrCRDz6dpI47my1WL9vwRgEx5gKXDcKySs6OQ4mazxBSI8q1gtRdcdANFkGm2QTLsEoYoFNFTKGPcyYyBo80iNUXPSt9KVQt2NNFQoSxb8nwIQdAZ6Dh8jirxGHV27cKRZEgThMkJ36dPiRrrJoe/3aXgv9WsVq+RAL56sSmOXBdgjAAY391BZlv9DXc+eas5RCk0fYAZUT1C/jEYutM14kVK2Et1SrykANw/Pv0qS9Eh3NX2l/pXmOI7fiKgul1pb5GsGICZuUt/8/Py81tbW/r8UALICGg2Gj319fef9UHZSuqLxXBF+yRPLA8LDw1MXPr4g3CJJrjza/Ubye3p5pdwUGvrot7k5zT+3vNsAtm77JDAgIODLkpKS0cuWPcEctEj9/oHe7EzVRdsda5tQVRUZx3XLAposoiDArFmzW/v263vvC88/92V35OoWgPTMLD2Fx20qYmJxURGuWLG8A4BB5GH98hkYf/sINnXRm1BcXmUbv31UCCRMGImbPs1iZ6rrQMWfwtNPUasjuNgAzJ49G+bMmavNVZaeLI15ODnp+DUBkJGVvZCWblAUhSsvL4fFixaCrCi2uaWzTLD28USb6cuqzDD3mQ9hX9EP4O1hhLyUp8BHtMDeQ+XwdX4p5B0+Daeq6qGZErFe4GFAgBf4+3hC1vdltki0Zs0LMG7cOA0nMI5lWlpb4+5KiMerApCWkdVHEISjFDa9tPsLFy7g/OQk1tTcjN4eBlawbTX08/booITMAFNSD7Ctu/bBoL6++MaSOxgSWJpFTuCZKqsaeOSJWjyBMDe0wMDpr6JOp2d/e+ddCAwMtO3FcZxmlgdjoyM3XxWAzOzc10jzS9vvqY/z5yezs2fPYsKtN7Gd6x4Bzgm/ZTq9wSKhUWkg0dXLh0qBgxEzX8cWMLL33nsfeJ7vmCOARxRZuTUuJrq+RwDSMrIDeZ4rJKED28e0A15Y8zzL/eYbfHp+Ansu6U6ST3UeLukjNdUS1y8PQLNC7OL3kOsVzJ4nCpGl7fKAphr8fawp6tMeAUjPyE4mLm5S2vhue4D23r07FdatWwfbXk6G+2LCbfxvm/zpYW2M7gkARSOl49k2AB3LNADTVqbAsPGTYcqUKQ5zWhNFMTU6csJdPQKQlfPNDtLINPt1mkrOV1ezpKR5+OWbC5kpbDCoNFxpbmD7S05DVfVFdHc3sPBh/WHYgADEFjOrb26F706cxfIKMyOLwrBgPwwbEsiMogDa/fRVWzEx6U8sJCSki6UIQA3JMIpodNYlAEQfd9r8CD08wD5maz6QkfoZ2759O6asTWYRIX3g2OlqPHKykvX27wXBgb2REwV2vuoC9PPzRh+dhRX/cA5EnYhe7npWQ07747mLyNPZt48cCL283WHm6o+w/w2hbHTkVAgKCnIAQJQlA2JCXGxUmosAsoaLgrhfskru9uMH8vPgnjCE3APHYetX++FUZS2cpgRGzmbbTUdaHdLPF2LH3wSRY4aCJy/Bd8cqYHfecThYWgWNLRL5DGphEjyNOpgwOgTCBgfA0w+a4KV/noBJ987X/KDjPC0a0bXMFDVxg0sA0jOyJlAsyySN8/YW2JuZiovj+zBQEO9f+S7LOVgGitqplmkrL930Ivr0MrKKqjptyKkTDwzwhO1/nolEK/bq9kMQOWMpWq3WjnXcpUy+nhx5hasWuJvO+JzKAbAH8G12Gi6I8WM+bnrMKihlCZR9tSzbpdYnHKvn34lTxg9i0Y+9C61Wxema5Mmj4fUlk22Z+C87iiF6xiIHANo6RVU+iI+LTXLVAlNJ8p0aAPtWUPA93DO0BbzdjdBEtBnzwEtQ12Tp8rwH0SNvy0oY5M3grhUfQk7hqa6HkNhvLJ8McyaF2SLU2l0VEDVlDnSOegrglvgY0zzXLJCeaWIcv4c8iLO3QFVVNRqq9zIDUzFh4s3s/ic3wWfZhx20S0ZnK+fdAWsemoxSYw3LJx+Y/tRWJKC2Ze3Fm18vI+S+/RCUV5px+CB/trlAhNsiY7FdLjsKbSQKLXGVQjdTCbGPzGm0B6BZfs+OzSw2zBcnhAaziy0WWPPOLtyVe5jVNbZCP38vXPCAiT087TYQKRG1J7L9xyrxuU1prJAcWdtj9I2BbNU8E0ykSLRrXynWtSpMd+NU8Pf3c1QGAaBrFTnxK65SqDfHC8WybA3qPFdbWwupOz+CJ+8bBcP7+1OoYDa/VYlSFEKpIFKcJjItaamKanNxRvFfq4uoPoLFb2bBDRGTYEzELdCZslo2pq/pZIHPXQKgNUpkaRTSYqBTImtzQDy05wO2bMZtXUoJTcVaxemm15EFaliLRQK9KKBWZNrvofWPVdTA11UhOHbsGJtTO0lkdSTDWEpkZS4D2JOWsYIXhLWklS4ANAyZX21nKxNvAHeBdzjUqqjs2Jnz4O5mQL3ayCqqL8DQAX5o1AnMcQ+ADTsLIWLqIgfeOwAQhDxy6gmxMdGqywDSM7MHkwkPkgY8nM2Xlp6EUN0JmDgi2G5H1rFzTX0zNJiroK+fx6VXFnCsg5olGTZkNkB0fGKXGshGOZ7XxhcRfd66nIw/U41mEUX5FKrf/+CMQhrLMz77B6y6Pxy99Jp2GZSfM2OLrDA38gWDUY9yk5k1NbVAXYuEHgaRDe7T+9IeFNu2pB8F47Ap0KdPkNMkJ/DCj6T9iNiYqHM9AmCjUXrGSFHUfU9WEDoD0L7r6+uhKOtjfGZuJAVslZIaYnV9M8stLIOjZWdRamlkIX29YWJYMPb38+ooSDMOnmJHcQSEjx576d25EwDtloqIZ02miS9eSb5uvVJm5uSup+jxROcI0U4ZN3MBFB8uhOS7bwFmTwXGgdRcC6jI7QyyJaaSCjNkl9RD2KS5JDw62ZIBhfDjsiKHx5miW68aAFHJh6LB15QTxna2gHb8KLcz+N3BAttvi3dEDEXW7pBOXmiq65rh44wi/OM9ceywOsomgpPI00DUSSTuZ/6cbN3+WYXywkiKSBqIwM5bEADwE5tgy+79EDZ0AIQHB3RYxz4PWEjbb/1rHzyW+DtQxN5wCMOhs/7pDOKhuiTmCo7bIwA2S6RnjRNE4QvyB38HCxjPoL/QqP12Dhs/ycYhAwOYkRKUjsIrWhqYZLWCJKt4qLyKzYkPB39PAzaCFzsE4Q4WoKijEE1X0e36uMuEzasC0AYiQqfXbZYkKVR73h6ATctUW1fX1jMrFWQWqkAlikI6enEXeQ69PAzMy01vE9geADUkztcrsryK9nunu8L3CIDWKD/04QThVTL1LO33IXsAnflsoUzsbLwdACNHJ9UXq4qyIM4UleOqLFf1B0debkaCBcXVI4xnxvtAHQ9OklFrUw04G2/mveEIN/aUDixvSzJujDTFWbpz5jUFoLVje3cY/HXNUV66lkc5xPFkFV+m/b1kq2sALVROa55CBZJWZquUXi8qIBaawTelUTH8e3jUzJqrOf+a/kdmOfB3Px7kYZzAjURFHUJSD1SazguUDyqoYi2nd7IiWeVKqLSr9I1a2uO/lX4xANej/QbgerffAFzv9qsH8F/9skSLgFPGrAAAAABJRU5ErkJggg=="

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Diego\Desktop\vanhack-challenge\src\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

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

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-google-charts":
/*!**************************************!*\
  !*** external "react-google-charts" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-charts");

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
//# sourceMappingURL=index.js.map