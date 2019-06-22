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

/***/ "+NUC":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/3ze":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__("PL1w");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__("LkAs"));

var _createClass2 = _interopRequireDefault2(__webpack_require__("Moms"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__("bMj6"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__("hZod"));

var _inherits2 = _interopRequireDefault2(__webpack_require__("tEuJ"));

var _interopRequireDefault = __webpack_require__("PL1w");

exports.__esModule = true;
exports["default"] = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("pzQc"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

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

  if (false) { var name; }

  return WithRouteWrapper;
}

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RHEb");


/***/ }),

/***/ "5DHm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/atoms/texttime/styled.js
// Import Styled

var TextTime = external_styled_components_default.a.text.withConfig({
  displayName: "styled__TextTime",
  componentId: "ouv6s7-0"
})(["color:#79828B;font-size:12px;line-height:18px;letter-spacing:0.75px;display:block;"]);
// CONCATENATED MODULE: ./components/atoms/texttime/index.js

 // Import Style



var texttime_Text = function Text(props) {
  return external_react_default.a.createElement(TextTime, props, props.text);
};

/* harmony default export */ var texttime = __webpack_exports__["a"] = (texttime_Text);

/***/ }),

/***/ "5dyF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9CGT")


/***/ }),

/***/ "6Ndq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "6mFX":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "7mTa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aAV7");

/***/ }),

/***/ "9CGT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__("PL1w");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__("LkAs"));

var _createClass2 = _interopRequireDefault2(__webpack_require__("Moms"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__("bMj6"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__("hZod"));

var _inherits2 = _interopRequireDefault2(__webpack_require__("tEuJ"));

var _interopRequireWildcard = __webpack_require__("k3h2");

var _interopRequireDefault = __webpack_require__("PL1w");

exports.__esModule = true;
exports["default"] = void 0;

var _map = _interopRequireDefault(__webpack_require__("6mFX"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("bBV7"));

var _rewriteUrlForExport = __webpack_require__("+NUC");

var _utils = __webpack_require__("p8BD");
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

if (false) { var exact, warn; }

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "A7Cf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/atoms/numberdefault/styled.js
// Import Styled

var NumberDefault = external_styled_components_default.a.text.withConfig({
  displayName: "styled__NumberDefault",
  componentId: "szj82n-0"
})(["color:#42505C;font-weight:500;font-size:20px;letter-spacing:0.75px;line-height:30px;"]);
// CONCATENATED MODULE: ./components/atoms/numberdefault/index.js

 // Import Style



var numberdefault_Text = function Text(props) {
  return external_react_default.a.createElement(NumberDefault, props, props.text);
};

/* harmony default export */ var numberdefault = __webpack_exports__["a"] = (numberdefault_Text);

/***/ }),

/***/ "AdH9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/atoms/tagdefault/styled.js
// Import Styled

var TagDefault = external_styled_components_default.a.text.withConfig({
  displayName: "styled__TagDefault",
  componentId: "sc-45oeus-0"
})(["border-radius:16px;background-color:#79828b1a;color:#8D99A4;font-family:'Roboto Mono',monospace;font-weight:500;font-size:16px;line-height:21px;letter-spacing:0.75px;padding:4px 12px 7px;"]);
// CONCATENATED MODULE: ./components/atoms/tagdefault/index.js

// Import Style


var tagdefault_Text = function Text(props) {
  return external_react_default.a.createElement(TagDefault, props, props.text);
};

/* harmony default export */ var tagdefault = __webpack_exports__["a"] = (tagdefault_Text);

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "LkAs":
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

/***/ "Moms":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hHgk");
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

/***/ "Nfsg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/atoms/thumbavatar/styled.js
// Import Styled

var ThumbAvatar = external_styled_components_default.a.text.withConfig({
  displayName: "styled__ThumbAvatar",
  componentId: "sc-1h9r8h-0"
})(["display:inline-block;"]);
// CONCATENATED MODULE: ./components/atoms/thumbavatar/index.js
 // Import Style



var thumbavatar_Img = function Img(props) {
  return external_react_default.a.createElement(ThumbAvatar, props, external_react_default.a.createElement("img", {
    src: props.src
  }));
};

/* harmony default export */ var thumbavatar = __webpack_exports__["a"] = (thumbavatar_Img);

/***/ }),

/***/ "OKNm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "OSsU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "react-lazy-load"
var external_react_lazy_load_ = __webpack_require__("zKpT");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/atoms/btnviewall/styled.js
// Import Styled

var BtnViewAll = external_styled_components_default.a.button.withConfig({
  displayName: "styled__BtnViewAll",
  componentId: "sc-1e1rei-0"
})(["background:none;color:#79828B;font-size:14px;cursor:pointer;float:right;span{margin-right:8px;text-transform:uppercase;letter-spacing:1.5px;line-height:15px}svg{}"]);
// CONCATENATED MODULE: ./components/atoms/btnviewall/index.js


 // Import Style



var btnviewall_Button = function Button(props) {
  return external_react_default.a.createElement(BtnViewAll, null, external_react_default.a.createElement("span", null, "View All"), external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: "arrow-right"
  }));
};

/* harmony default export */ var btnviewall = __webpack_exports__["a"] = (btnviewall_Button);

/***/ }),

/***/ "PL1w":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "RHEb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");

// EXTERNAL MODULE: ./static/css/style.scss
var style = __webpack_require__("ut+h");

// EXTERNAL MODULE: ./components/organisms/header/index.js + 15 modules
var header = __webpack_require__("zNiF");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("LkAs");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("Moms");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("bMj6");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("hZod");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
var inherits = __webpack_require__("tEuJ");

// EXTERNAL MODULE: ./components/molecules/userprojects/index.js + 3 modules
var userprojects = __webpack_require__("aq7R");

// EXTERNAL MODULE: ./components/atoms/btnviewall/index.js + 1 modules
var btnviewall = __webpack_require__("OSsU");

// EXTERNAL MODULE: ./components/atoms/titleh2/index.js + 1 modules
var titleh2 = __webpack_require__("XJog");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/organisms/suggestedprojects-all/styled.js
// Import Styled

var BlockWithSection = external_styled_components_default.a.div.withConfig({
  displayName: "styled__BlockWithSection",
  componentId: "dtehml-0"
})([""]);
// CONCATENATED MODULE: ./components/organisms/suggestedprojects-all/index.js











var suggestedprojects_all_Projects =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["default"])(Projects, _React$Component);

  function Projects() {
    Object(classCallCheck["default"])(this, Projects);

    return Object(possibleConstructorReturn["default"])(this, Object(getPrototypeOf["default"])(Projects).apply(this, arguments));
  }

  Object(createClass["default"])(Projects, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(BlockWithSection, {
        className: "col-md-12"
      }, external_react_default.a.createElement(userprojects["a" /* default */], null));
    }
  }]);

  return Projects;
}(external_react_default.a.Component);

/* harmony default export */ var suggestedprojects_all = (suggestedprojects_all_Projects);
// CONCATENATED MODULE: ./pages/projects.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });





function Index() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(header["a" /* default */], null), external_react_default.a.createElement(suggestedprojects_all, null));
}

/***/ }),

/***/ "StBz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/atoms/tagbtc/styled.js
// Import Styled

var TagBtc = external_styled_components_default.a.text.withConfig({
  displayName: "styled__TagBtc",
  componentId: "sc-10cfdqv-0"
})(["border-radius:16px;background-color:#D286621a;color:#D28E62;font-weight:500;font-size:16px;line-height:21px;letter-spacing:0.75px;padding:4px 12px 7px;@media (max-width:340px){letter-spacing:0;font-size:15px;}"]);
// CONCATENATED MODULE: ./components/atoms/tagbtc/index.js



var tagbtc_Text = function Text(props) {
  return external_react_default.a.createElement(TagBtc, props, props.text);
};

/* harmony default export */ var tagbtc = __webpack_exports__["a"] = (tagbtc_Text);

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "U8Yc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XJog":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/atoms/titleh2/styled.js
// Import Styled

var TitleH2 = external_styled_components_default.a.text.withConfig({
  displayName: "styled__TitleH2",
  componentId: "sc-15moerf-0"
})(["opacity:0.9;color:#42505C;display:inline-block;h2{font-weight:500;font-size:18px;letter-spacing:0.25px;line-height:15px;}"]);
// CONCATENATED MODULE: ./components/atoms/titleh2/index.js

 // Import Style



var titleh2_Text = function Text(props) {
  return external_react_default.a.createElement(TitleH2, props, external_react_default.a.createElement("h2", null, props.text));
};

/* harmony default export */ var titleh2 = __webpack_exports__["a"] = (titleh2_Text);

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "XzKa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "YJLU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/atoms/textavatar/styled.js
// Import Styled

var TextAvatar = external_styled_components_default.a.text.withConfig({
  displayName: "styled__TextAvatar",
  componentId: "i8lm3f-0"
})(["color:#42505C;font-size:16px;line-height:25px;letter-spacing:0.75px;display:block;font-weight:600;"]);
// CONCATENATED MODULE: ./components/atoms/textavatar/index.js

 // Import Style



var textavatar_Text = function Text(props) {
  return external_react_default.a.createElement(TextAvatar, props, props.text);
};

/* harmony default export */ var textavatar = __webpack_exports__["a"] = (textavatar_Text);

/***/ }),

/***/ "YKN3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "ZKro":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("OKNm");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "aAV7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "aq7R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("LkAs");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("Moms");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("bMj6");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("hZod");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
var inherits = __webpack_require__("tEuJ");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-lazy-load"
var external_react_lazy_load_ = __webpack_require__("zKpT");
var external_react_lazy_load_default = /*#__PURE__*/__webpack_require__.n(external_react_lazy_load_);

// EXTERNAL MODULE: ./components/atoms/tageth/index.js + 1 modules
var tageth = __webpack_require__("bA0i");

// EXTERNAL MODULE: ./components/atoms/tagbtc/index.js + 1 modules
var tagbtc = __webpack_require__("StBz");

// EXTERNAL MODULE: ./components/atoms/tagdefault/index.js + 1 modules
var tagdefault = __webpack_require__("AdH9");

// EXTERNAL MODULE: ./components/atoms/texttime/index.js + 1 modules
var texttime = __webpack_require__("5DHm");

// EXTERNAL MODULE: ./components/atoms/numberdefault/index.js + 1 modules
var numberdefault = __webpack_require__("A7Cf");

// EXTERNAL MODULE: ./components/atoms/thumbavatar/index.js + 1 modules
var thumbavatar = __webpack_require__("Nfsg");

// EXTERNAL MODULE: ./components/atoms/textavatar/index.js + 1 modules
var textavatar = __webpack_require__("YJLU");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/atoms/textbigger/styled.js
// Import Styled

var TextBigger = external_styled_components_default.a.text.withConfig({
  displayName: "styled__TextBigger",
  componentId: "sc-8ok83v-0"
})(["color:#42505C;font-size:16px;line-height:28px;letter-spacing:0.75px;display:block;"]);
// CONCATENATED MODULE: ./components/atoms/textbigger/index.js

 // Import Style



var textbigger_Text = function Text(props) {
  return external_react_default.a.createElement(TextBigger, props, props.text);
};

/* harmony default export */ var textbigger = (textbigger_Text);
// CONCATENATED MODULE: ./components/molecules/userprojects/styled.js
// Import Styled

var BlockDefault = external_styled_components_default.a.div.withConfig({
  displayName: "styled__BlockDefault",
  componentId: "lbttap-0"
})([".map{@media (min-width:992px){width:31.3%;display:inline-block;margin-right:3%;}&:last-child{margin-right:0;}}.name{display:inline-block;margin-left:12px;vertical-align:top;margin-bottom:24px;}.number{text{float:right;}}.tag{text{float:right;}}.tags{text{margin-right:12px;}> div{display:flex;}.number{text{position:absolute;right:0;margin-right:0;}}}img{max-width:48px;max-height:48px;}"]);
// CONCATENATED MODULE: ./components/molecules/userprojects/index.js














 // Import Style


var API = "static/api/projects.json";

var userprojects_UserProjects =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["default"])(UserProjects, _React$Component);

  function UserProjects(props) {
    var _this;

    Object(classCallCheck["default"])(this, UserProjects);

    _this = Object(possibleConstructorReturn["default"])(this, Object(getPrototypeOf["default"])(UserProjects).call(this, props));
    _this.state = {
      data: []
    };
    return _this;
  }

  Object(createClass["default"])(UserProjects, [{
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
      return external_react_default.a.createElement(BlockDefault, {
        className: "blockDefault"
      }, data.map(function (item, key) {
        return external_react_default.a.createElement("div", {
          className: "map",
          key: key
        }, external_react_default.a.createElement("div", {
          className: "blockContainer"
        }, external_react_default.a.createElement("div", {
          className: "row"
        }, external_react_default.a.createElement("div", {
          className: "col-xs-10"
        }, external_react_default.a.createElement(external_react_lazy_load_default.a, {
          height: 48,
          width: 48
        }, external_react_default.a.createElement(thumbavatar["a" /* default */], {
          src: item.avatar
        })), external_react_default.a.createElement("div", {
          className: "name"
        }, external_react_default.a.createElement(textavatar["a" /* default */], {
          text: item.name
        }), external_react_default.a.createElement(texttime["a" /* default */], {
          text: item.date
        }))), external_react_default.a.createElement("div", {
          className: "col-xs-2 tag"
        }, external_react_default.a.createElement(tagdefault["a" /* default */], {
          text: item.tag
        }))), external_react_default.a.createElement("div", {
          className: "row bottomBorder"
        }, external_react_default.a.createElement(textbigger, {
          text: item.text
        })), external_react_default.a.createElement("div", {
          className: "row tags"
        }, external_react_default.a.createElement("div", {
          className: "col-xs-10"
        }, external_react_default.a.createElement(tageth["a" /* default */], {
          text: item.eth
        }), external_react_default.a.createElement(tagbtc["a" /* default */], {
          text: item.btc
        })), external_react_default.a.createElement("div", {
          className: "col-xs-2 number"
        }, external_react_default.a.createElement(numberdefault["a" /* default */], {
          text: item.earnings
        })))));
      }));
    }
  }]);

  return UserProjects;
}(external_react_default.a.Component);

/* harmony default export */ var userprojects = __webpack_exports__["a"] = (userprojects_UserProjects);

/***/ }),

/***/ "bA0i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/atoms/tageth/styled.js
// Import Styled

var TagEth = external_styled_components_default.a.text.withConfig({
  displayName: "styled__TagEth",
  componentId: "eknr0n-0"
})(["border-radius:16px;background-color:#6271D21a;color:#6271D2;font-weight:500;font-size:16px;line-height:21px;letter-spacing:0.75px;padding:4px 12px 7px;@media (max-width:340px){letter-spacing:0;font-size:15px;}"]);
// CONCATENATED MODULE: ./components/atoms/tageth/index.js



var tageth_Text = function Text(props) {
  return external_react_default.a.createElement(TagEth, props, props.text);
};

/* harmony default export */ var tageth = __webpack_exports__["a"] = (tageth_Text);

/***/ }),

/***/ "bBV7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__("PL1w");

var _construct2 = _interopRequireDefault2(__webpack_require__("qHHZ"));

var _interopRequireDefault = __webpack_require__("PL1w");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.useRequest = useRequest;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("pzQc"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hHgk"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireDefault(__webpack_require__("qxCs"));

exports.Router = _router2["default"];

var _routerContext = __webpack_require__("mJK4");

var _requestContext = __webpack_require__("qCSu");

var _withRouter = _interopRequireDefault(__webpack_require__("/3ze"));

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

/***/ "bMj6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("t+lh");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("XzKa");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("YKN3");

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hHgk":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "hZod":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jDdP");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("OKNm");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "jDdP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "k3h2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("tvLF");

var _Object$defineProperty = __webpack_require__("hHgk");

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

/***/ "mJK4":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pzQc":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("U8Yc");

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

/***/ "qCSu":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/request-context");

/***/ }),

/***/ "qHHZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _construct; });
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7mTa");
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZKro");



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
      if (Class) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "t+lh":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "tEuJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6Ndq");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZKro");


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
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(subClass, superClass);
}

/***/ }),

/***/ "tvLF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "ut+h":
/***/ (function(module, exports) {



/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "zKpT":
/***/ (function(module, exports) {

module.exports = require("react-lazy-load");

/***/ }),

/***/ "zNiF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("LkAs");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("Moms");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("bMj6");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("hZod");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("YKN3");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
var inherits = __webpack_require__("tEuJ");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__("5dyF");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/atoms/iconbars/styled.js
// Import Styled

var IconBars = external_styled_components_default.a.button.withConfig({
  displayName: "styled__IconBars",
  componentId: "eybime-0"
})(["box-sizing:border-box;background:none;font-size:21px;color:#fff;margin-right:16px;cursor:pointer;"]);
// CONCATENATED MODULE: ./components/atoms/iconbars/index.js

 // Import Style



var iconbars_Button = function Button(props) {
  return external_react_default.a.createElement(IconBars, null, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: "bars"
  }));
};

/* harmony default export */ var iconbars = (iconbars_Button);
// CONCATENATED MODULE: ./components/atoms/iconmap/styled.js
// Import Styled

var IconMap = external_styled_components_default.a.button.withConfig({
  displayName: "styled__IconMap",
  componentId: "sc-68ha0i-0"
})(["box-sizing:border-box;background:none;font-size:21px;color:#fff;margin-right:16px;"]);
// CONCATENATED MODULE: ./components/atoms/iconmap/index.js

 // Import Style



var iconmap_Button = function Button(props) {
  return external_react_default.a.createElement(IconMap, null, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: "map-marker"
  }));
};

/* harmony default export */ var iconmap = (iconmap_Button);
// EXTERNAL MODULE: external "react-lazy-load"
var external_react_lazy_load_ = __webpack_require__("zKpT");
var external_react_lazy_load_default = /*#__PURE__*/__webpack_require__.n(external_react_lazy_load_);

// CONCATENATED MODULE: ./components/atoms/iconchevrondown/styled.js
// Import Styled

var IconChevronDown = external_styled_components_default.a.button.withConfig({
  displayName: "styled__IconChevronDown",
  componentId: "sc-14x13kj-0"
})(["box-sizing:border-box;font-size:9px;width:16px;height:16px;margin-left:8px;background:#5A6ABC;border-radius:50px;cursor:pointer;span{color:#fff;margin-top:3px;display:block;}"]);
// CONCATENATED MODULE: ./components/atoms/iconchevrondown/index.js


 // Import Style



var iconchevrondown_Button = function Button(props) {
  return external_react_default.a.createElement(external_react_lazy_load_default.a, null, external_react_default.a.createElement(IconChevronDown, null, external_react_default.a.createElement("span", {
    className: "icon"
  }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: "chevron-down"
  }))));
};

/* harmony default export */ var iconchevrondown = (iconchevrondown_Button);
// CONCATENATED MODULE: ./components/atoms/iconnotification/styled.js
// Import Styled

var IconNotification = external_styled_components_default.a.text.withConfig({
  displayName: "styled__IconNotification",
  componentId: "f08w0n-0"
})(["box-sizing:border-box;background:none;font-size:21px;color:#fff;margin-right:16px;position:relative;.number{position:absolute;top:-10px;right:-18px;font-size:13px;line-height:24px;height:26px;width:26px;border:2px solid #6573D6;background-color:#4C5EBB;border-radius:50px;text-align:center;}"]);
// CONCATENATED MODULE: ./components/atoms/iconnotification/index.js

 // Import Style



var iconnotification_Text = function Text(props) {
  return external_react_default.a.createElement(IconNotification, {
    className: "notification"
  }, external_react_default.a.createElement("div", {
    className: "number"
  }, "3"), external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: "bell"
  }));
};

/* harmony default export */ var iconnotification = (iconnotification_Text);
// EXTERNAL MODULE: ./components/atoms/titleh2/index.js + 1 modules
var titleh2 = __webpack_require__("XJog");

// CONCATENATED MODULE: ./components/atoms/logo/styled.js
// Import Styled

var Logo = external_styled_components_default.a.text.withConfig({
  displayName: "styled__Logo",
  componentId: "rclpx0-0"
})(["h1{color:#FFFFFF80;font-family:\"Rubik\";font-size:20px;line-height:24px;display:inline-block;font-weight:normal;letter-spacing:0.75px;strong{font-family:\"Roboto\";color:#FFFFFF;}}"]);
// CONCATENATED MODULE: ./components/atoms/logo/index.js

 // Import Style



var logo_Text = function Text(props) {
  return external_react_default.a.createElement(Logo, props, external_react_default.a.createElement("h1", null, external_react_default.a.createElement("strong", null, "Dash"), " Elements"));
};

/* harmony default export */ var logo = (logo_Text);
// CONCATENATED MODULE: ./components/atoms/btnclose/styled.js
// Import Styled

var BtnClose = external_styled_components_default.a.text.withConfig({
  displayName: "styled__BtnClose",
  componentId: "sc-1uxxuoa-0"
})(["position:fixed;right:16px;top:16px;z-index:9991;font-size:24px;margin:0;color:#fff;cursor:pointer;"]);
// CONCATENATED MODULE: ./components/atoms/btnclose/index.js

 // Import Style



var btnclose_Text = function Text(props) {
  return external_react_default.a.createElement(BtnClose, {
    className: "close"
  }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: "times-circle"
  }));
};

/* harmony default export */ var btnclose = (btnclose_Text);
// CONCATENATED MODULE: ./components/molecules/menucontent/styled.js
// Import Styled

var MenuContent = external_styled_components_default.a.div.withConfig({
  displayName: "styled__MenuContent",
  componentId: "sc-1key0cf-0"
})(["padding-top:32px;a{text-decoration:none;color:#fff;border-radius:16px;background-color:transparent;color:#fff;font-weight:normal;font-size:16px;line-height:21px;letter-spacing:0.75px;margin-right:24px;padding:4px 12px 7px;&:hover,&.active{font-weight:600;background-color:#7481D1;}}@media (max-width:991px){position:fixed;top:0;left:0;z-index:999;height:100vh;width:100vw;background:#7481d1e0;padding:32px 24px;a{display:block;text-align:left;font-size:32px;margin:0 0 20px;clear:both;width:fit-content;padding:16px 24px;}}"]);
// CONCATENATED MODULE: ./components/molecules/menucontent/index.js


 // Import Style



var menucontent_Menu = function Menu(props) {
  return external_react_default.a.createElement(MenuContent, {
    className: "col-xs-12"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("a", {
    className: "active"
  }, "Home")), external_react_default.a.createElement(link_default.a, {
    href: "/projects"
  }, external_react_default.a.createElement("a", null, "My Projects")), external_react_default.a.createElement(link_default.a, {
    href: "/payments"
  }, external_react_default.a.createElement("a", null, "Payments")), external_react_default.a.createElement(link_default.a, {
    href: "/activity"
  }, external_react_default.a.createElement("a", null, "Activity")), external_react_default.a.createElement(link_default.a, {
    href: "/settings"
  }, external_react_default.a.createElement("a", null, "Settings")));
};

/* harmony default export */ var menucontent = (menucontent_Menu);
// CONCATENATED MODULE: ./components/organisms/header/styled.js
// Import Styled

var MenuContainer = external_styled_components_default.a.div.withConfig({
  displayName: "styled__MenuContainer",
  componentId: "jijuym-0"
})(["padding-top:16px;padding-bottom:16px;@media (min-width:768px){padding-top:40px;padding-bottom:40px;}&:after{content:\"\";display:block;clear:both;}.right-area{button,text,.LazyLoad{float:right;}text{color:#fff;}.userBox{position:absolute;right:0;top:22px;background:#fff;border-radius:0px 0 8px 8px;padding:8px;color:#6473d5;z-index:2;li{border-bottom:1px solid #ccc;margin-bottom:8px;padding-bottom:8px;&:last-child{padding-bottom:0;border-bottom:none;margin-bottom:0;}a{color:#6473d5;text-decoration:none;&:hover{color:#42505C;}}}}}.notification{position:relative;top:-6px;margin-right:40px;}.show,.show .menu{display:block;}@media (min-width:992px){.close{display:none;}}"]);
// CONCATENATED MODULE: ./components/organisms/header/index.js


















var header_Header =
/*#__PURE__*/
function (_Component) {
  Object(inherits["default"])(Header, _Component);

  function Header(props) {
    var _this;

    Object(classCallCheck["default"])(this, Header);

    _this = Object(possibleConstructorReturn["default"])(this, Object(getPrototypeOf["default"])(Header).call(this, props));
    _this.state = {
      showMenu: "hidden-xs",
      showUserBox: "hidden"
    };
    _this.openMenu = _this.openMenu.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.toggleUserBox = _this.toggleUserBox.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["default"])(Header, [{
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
      return external_react_default.a.createElement(MenuContainer, {
        className: "col-md-12"
      }, external_react_default.a.createElement("div", {
        className: "col-xs-6 left-area"
      }, external_react_default.a.createElement("span", {
        className: "hidden-md",
        onClick: this.openMenu.bind(this)
      }, external_react_default.a.createElement(iconbars, null)), external_react_default.a.createElement(iconmap, null), external_react_default.a.createElement("span", {
        className: "hidden-xs"
      }, external_react_default.a.createElement(logo, null))), external_react_default.a.createElement("div", {
        className: "col-xs-6 right-area"
      }, external_react_default.a.createElement("span", {
        onClick: this.toggleUserBox.bind(this)
      }, external_react_default.a.createElement(iconchevrondown, null)), external_react_default.a.createElement("span", {
        className: this.state.showUserBox
      }, external_react_default.a.createElement("span", {
        className: "userBox"
      }, external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        href: "projects"
      }, external_react_default.a.createElement("a", null, "My Projects"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        href: "settings"
      }, external_react_default.a.createElement("a", null, "Settings")))))), external_react_default.a.createElement(titleh2["a" /* default */], {
        text: "Alex Doe"
      }), external_react_default.a.createElement("span", {
        className: "hidden-xs"
      }, external_react_default.a.createElement(iconnotification, null))), external_react_default.a.createElement("div", {
        className: "col-xs-12"
      }, external_react_default.a.createElement("span", {
        className: this.state.showMenu
      }, external_react_default.a.createElement("span", {
        className: "hidden-xs menu"
      }, external_react_default.a.createElement("span", {
        onClick: this.closeMenu.bind(this)
      }, external_react_default.a.createElement(btnclose, null)), external_react_default.a.createElement(menucontent, null)))));
    }
  }]);

  return Header;
}(external_react_["Component"]);

/* harmony default export */ var header = __webpack_exports__["a"] = (header_Header);

/***/ })

/******/ });