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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Lg7":
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

// CONCATENATED MODULE: ./components/atoms/titleh5/styled.js
// Import Styled

var TitleH5 = external_styled_components_default.a.text.withConfig({
  displayName: "styled__TitleH5",
  componentId: "sc-1lkkj36-0"
})(["color:#79828B;display:block;h5{font-weight:500;font-size:14px;letter-spacing:1.5px;line-height:15px;text-transform:uppercase;margin-bottom:16px;}"]);
// CONCATENATED MODULE: ./components/atoms/titleh5/index.js

 // Import Style



var titleh5_Text = function Text(props) {
  return external_react_default.a.createElement(TitleH5, props, external_react_default.a.createElement("h5", null, props.text));
};

/* harmony default export */ var titleh5 = __webpack_exports__["a"] = (titleh5_Text);

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "3esu":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("NluH");

var assertThisInitialized = __webpack_require__("oS/Z");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "69sY":
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

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("tEuJ");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-lazy-load"
var external_react_lazy_load_ = __webpack_require__("zKpT");
var external_react_lazy_load_default = /*#__PURE__*/__webpack_require__.n(external_react_lazy_load_);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: ./components/atoms/tageth/index.js + 1 modules
var tageth = __webpack_require__("bA0i");

// EXTERNAL MODULE: ./components/atoms/tagbtc/index.js + 1 modules
var tagbtc = __webpack_require__("StBz");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/atoms/iconcode/styled.js
// Import Styled

var IconCode = external_styled_components_default.a.text.withConfig({
  displayName: "styled__IconCode",
  componentId: "sc-17ogldm-0"
})(["box-sizing:border-box;background:none;color:#fff;margin-right:8px;svg{font-size:16px;color:#6271D2;}.roundIcon{background-color:#EFF0FA;vertical-align:top;position:relative;top:8px;}"]);
// CONCATENATED MODULE: ./components/atoms/iconcode/index.js

 // Import Style



var iconcode_Text = function Text(props) {
  return external_react_default.a.createElement(IconCode, null, external_react_default.a.createElement("span", {
    className: "roundIcon"
  }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: "code"
  })));
};

/* harmony default export */ var iconcode = (iconcode_Text);
// CONCATENATED MODULE: ./components/atoms/icondollar/styled.js
// Import Styled

var IconDollar = external_styled_components_default.a.text.withConfig({
  displayName: "styled__IconDollar",
  componentId: "sc-10hciso-0"
})(["box-sizing:border-box;background:none;color:#10C176;margin-right:8px;svg{font-size:16px;color:#10C176;}.roundIcon{background-color:#CFF3E3;vertical-align:top;position:relative;top:8px;}"]);
// CONCATENATED MODULE: ./components/atoms/icondollar/index.js

 // Import Style



var icondollar_Text = function Text(props) {
  return external_react_default.a.createElement(IconDollar, null, external_react_default.a.createElement("span", {
    className: "roundIcon"
  }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: "dollar-sign"
  })));
};

/* harmony default export */ var icondollar = (icondollar_Text);
// EXTERNAL MODULE: ./components/atoms/texttime/index.js + 1 modules
var texttime = __webpack_require__("5DHm");

// EXTERNAL MODULE: ./components/atoms/titleh5/index.js + 1 modules
var titleh5 = __webpack_require__("+Lg7");

// EXTERNAL MODULE: ./components/atoms/thumbavatar/index.js + 1 modules
var thumbavatar = __webpack_require__("Nfsg");

// EXTERNAL MODULE: ./components/atoms/textavatar/index.js + 1 modules
var textavatar = __webpack_require__("YJLU");

// CONCATENATED MODULE: ./components/atoms/textdefault/styled.js
// Import Styled

var TextDefault = external_styled_components_default.a.text.withConfig({
  displayName: "styled__TextDefault",
  componentId: "sc-12dkwrt-0"
})(["color:#79828B;font-size:14px;line-height:21px;letter-spacing:0.75px;display:block;padding:12px 0 8px;strong{color:#10C172;}"]);
// CONCATENATED MODULE: ./components/atoms/textdefault/index.js

 // Import Style



var textdefault_Text = function Text(props) {
  return external_react_default.a.createElement(TextDefault, props, props.text);
};

/* harmony default export */ var textdefault = (textdefault_Text);
// EXTERNAL MODULE: ./components/atoms/numberdefault/index.js + 1 modules
var numberdefault = __webpack_require__("A7Cf");

// CONCATENATED MODULE: ./components/molecules/useractivity/styled.js
// Import Styled

var BlockDefault = external_styled_components_default.a.div.withConfig({
  displayName: "styled__BlockDefault",
  componentId: "vohqia-0"
})([".blockContainer{@media (min-width:992px){max-height:405px;}}.avatar{vertical-align:top;.avatarImg{margin-left:-16px;margin-right:16px;position:relative;z-index:2;img{max-height:48px;max-width:48px;}}@media (max-width:422px){max-width:38%;float:left;}@media (min-width:992px){width:88px;}}.infos{position:relative;margin-bottom:8px;&:before{content:\"\";width:1px;background:#E6EBF0;position:absolute;left:-40px;top:50px;height:80%;display:block;}text{margin-right:16px;}.textDefault{padding-top:2px;}.name{position:relative;.time{@media (min-width:992px){position:absolute;right:0;top:4px;}}}@media (max-width:422px){max-width:62%;}@media (min-width:992px){width:calc(100% - 88px);}}"]);
// EXTERNAL MODULE: ./static/images/thumbavatar-default.png
var thumbavatar_default = __webpack_require__("TShP");

// CONCATENATED MODULE: ./components/molecules/useractivity/index.js

















 // Import Style



var API = "static/api/activity.json";

var useractivity_UserActivity =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(UserActivity, _React$Component);

  function UserActivity(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, UserActivity);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(UserActivity).call(this, props));
    _this.state = {
      data: []
    };
    return _this;
  }

  Object(createClass["a" /* default */])(UserActivity, [{
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
      }, external_react_default.a.createElement("div", {
        className: "blockContainer"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement(titleh5["a" /* default */], {
        text: "Recent"
      })), data.map(function (item, key) {
        return external_react_default.a.createElement("div", {
          className: "map",
          key: key
        }, external_react_default.a.createElement("div", {
          className: "row"
        }, external_react_default.a.createElement("div", {
          className: "col avatar"
        }, item.icon === "code" ? external_react_default.a.createElement(iconcode, null) : external_react_default.a.createElement(icondollar, null), external_react_default.a.createElement(external_react_lazy_load_default.a, {
          height: 48,
          width: 48
        }, external_react_default.a.createElement(thumbavatar["a" /* default */], {
          className: "avatarImg",
          src: item.avatar
        }))), external_react_default.a.createElement("div", {
          className: "col infos"
        }, external_react_default.a.createElement("div", {
          className: "name"
        }, external_react_default.a.createElement(textavatar["a" /* default */], {
          text: item.name
        }), external_react_default.a.createElement(texttime["a" /* default */], {
          className: "time",
          text: item.date
        })), external_react_default.a.createElement(textdefault, {
          className: "textDefault",
          text: item.text
        }), item.btc === "" ? external_react_default.a.createElement(tageth["a" /* default */], {
          text: item.eth
        }) : external_react_default.a.createElement(tagbtc["a" /* default */], {
          text: item.btc
        }), external_react_default.a.createElement(numberdefault["a" /* default */], {
          text: item.earnings
        }))));
      })));
    }
  }]);

  return UserActivity;
}(external_react_default.a.Component);

/* harmony default export */ var useractivity = __webpack_exports__["a"] = (useractivity_UserActivity);

/***/ }),

/***/ "6Ndq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "8m4E":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("jDdP");

var _Object$setPrototypeOf = __webpack_require__("OKNm");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "9CGT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("PL1w");

var _stringify = _interopRequireDefault(__webpack_require__("JYC+"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("KBEF"));

var _createClass2 = _interopRequireDefault(__webpack_require__("J/q3"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("3esu"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("8m4E"));

var _inherits2 = _interopRequireDefault(__webpack_require__("Od8a"));

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

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

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

if (false) { var exact, warn; }

exports.default = Link;

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

/***/ "Cd+d":
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

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("tEuJ");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__("5dyF");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-lazy-load"
var external_react_lazy_load_ = __webpack_require__("zKpT");
var external_react_lazy_load_default = /*#__PURE__*/__webpack_require__.n(external_react_lazy_load_);

// EXTERNAL MODULE: ./components/atoms/tageth/index.js + 1 modules
var tageth = __webpack_require__("bA0i");

// EXTERNAL MODULE: ./components/atoms/tagbtc/index.js + 1 modules
var tagbtc = __webpack_require__("StBz");

// EXTERNAL MODULE: ./components/atoms/titleh5/index.js + 1 modules
var titleh5 = __webpack_require__("+Lg7");

// EXTERNAL MODULE: ./components/atoms/texttime/index.js + 1 modules
var texttime = __webpack_require__("5DHm");

// EXTERNAL MODULE: ./components/atoms/thumbavatar/index.js + 1 modules
var thumbavatar = __webpack_require__("Nfsg");

// EXTERNAL MODULE: ./components/atoms/textavatar/index.js + 1 modules
var textavatar = __webpack_require__("YJLU");

// EXTERNAL MODULE: ./components/atoms/numberdefault/index.js + 1 modules
var numberdefault = __webpack_require__("A7Cf");

// EXTERNAL MODULE: ./static/images/thumbavatar-default.png
var thumbavatar_default = __webpack_require__("TShP");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/molecules/userrankings/styled.js
// Import Styled

var BlockDefault = external_styled_components_default.a.div.withConfig({
  displayName: "styled__BlockDefault",
  componentId: "sc-6u8fov-0"
})([".blockContainer{@media (min-width:992px){max-height:405px;}}.menu{text{float:right;margin-left:16px;}.active{color:#6271D2;}}.order{color:#42505C;font-family:\"Roboto Mono\";font-size:20px;line-height:43px;font-weight:800;}.number{text{float:right}}.name{vertical-align:top;display:inline-block;margin-left:12px;text{line-height:20px;}.num{color:#79828B;font-size:16px;letter-spacing:1px;line-height:25px;}}img{max-height:48px;max-width:48px;}.map{&:last-child{.row.bottomBorder{border-bottom:none;padding-bottom:0;margin-bottom:0;}}}"]);
// CONCATENATED MODULE: ./components/molecules/userrankings/index.js















 // Import Style


var API = "static/api/ranking.json";

var userrankings_UserRankings =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(UserRankings, _React$Component);

  function UserRankings(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, UserRankings);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(UserRankings).call(this, props));
    _this.state = {
      data: []
    };
    return _this;
  }

  Object(createClass["a" /* default */])(UserRankings, [{
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
      }, external_react_default.a.createElement("div", {
        className: "blockContainer"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-xs-4"
      }, external_react_default.a.createElement(titleh5["a" /* default */], {
        text: "Rankings"
      })), external_react_default.a.createElement("div", {
        className: "col-xs-8 menu"
      }, external_react_default.a.createElement(link_default.a, {
        href: "activity"
      }, external_react_default.a.createElement("a", null, external_react_default.a.createElement(texttime["a" /* default */], {
        className: "active",
        text: "All time"
      }))), external_react_default.a.createElement(texttime["a" /* default */], {
        text: "This month"
      }))), data.map(function (item, key) {
        return external_react_default.a.createElement("div", {
          className: "map",
          key: key
        }, external_react_default.a.createElement("div", {
          className: "row bottomBorder"
        }, external_react_default.a.createElement("div", {
          className: "col-xs-1"
        }, external_react_default.a.createElement("span", {
          className: "order"
        }, item.number, ".")), external_react_default.a.createElement("div", {
          className: "col-xs-11"
        }, external_react_default.a.createElement(external_react_lazy_load_default.a, {
          height: 48,
          width: 48
        }, external_react_default.a.createElement(thumbavatar["a" /* default */], {
          alt: item.name,
          src: item.avatar
        })), external_react_default.a.createElement("div", {
          className: "name"
        }, external_react_default.a.createElement(textavatar["a" /* default */], {
          text: item.name
        }), external_react_default.a.createElement(numberdefault["a" /* default */], {
          className: "num",
          text: item.earnings
        })))));
      })));
    }
  }]);

  return UserRankings;
}(external_react_default.a.Component);

/* harmony default export */ var userrankings = __webpack_exports__["a"] = (userrankings_UserRankings);

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "J/q3":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hHgk");

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

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "JYC+":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "KBEF":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "LkAs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "Moms":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
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

/***/ "NluH":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("t+lh");

var _Symbol = __webpack_require__("XzKa");

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

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

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

/***/ "Od8a":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("6Ndq");

var setPrototypeOf = __webpack_require__("g9SA");

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

/***/ "PL1w":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "RNiq":
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

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("tEuJ");

// EXTERNAL MODULE: ./components/molecules/chart/index.js + 1 modules
var chart = __webpack_require__("uIzg");

// EXTERNAL MODULE: ./components/atoms/tageth/index.js + 1 modules
var tageth = __webpack_require__("bA0i");

// EXTERNAL MODULE: ./components/atoms/tagbtc/index.js + 1 modules
var tagbtc = __webpack_require__("StBz");

// EXTERNAL MODULE: ./components/atoms/titleh5/index.js + 1 modules
var titleh5 = __webpack_require__("+Lg7");

// EXTERNAL MODULE: ./components/atoms/numberbigger/index.js + 1 modules
var numberbigger = __webpack_require__("rTpj");

// EXTERNAL MODULE: ./components/atoms/textcomp/index.js + 1 modules
var textcomp = __webpack_require__("gPcz");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/organisms/earnings/styled.js
// Import Styled

var BlockDefault = external_styled_components_default.a.div.withConfig({
  displayName: "styled__BlockDefault",
  componentId: "sc-1al1cgr-0"
})([".blockContainer{@media (min-width:992px){max-height:246px;}}h5{margin-bottom:0;font-size:12px;}.numbers{@media (min-width:992px){margin-bottom:24px;}text{clear:both;display:block;}}.tags{text{clear:both;display:block;width:fit-content;margin-bottom:4px;;}}"]);
// CONCATENATED MODULE: ./components/organisms/earnings/index.js














var earnings_Earnings =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Earnings, _React$Component);

  function Earnings() {
    Object(classCallCheck["a" /* default */])(this, Earnings);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Earnings).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Earnings, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(BlockDefault, {
        className: "blockDefault col-md-8"
      }, external_react_default.a.createElement("div", {
        className: "blockContainer"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement(titleh5["a" /* default */], {
        text: "Earnings"
      })), external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-xs-12 col-md-9 align-right-md no-gutter"
      }, external_react_default.a.createElement("div", {
        className: "chartContent"
      }, external_react_default.a.createElement(chart["a" /* default */], null))), external_react_default.a.createElement("div", {
        className: "col-xs-12 col-md-3 no-gutter"
      }, external_react_default.a.createElement("div", {
        className: "col-xs-7 col-md-12 no-gutter numbers"
      }, external_react_default.a.createElement(numberbigger["a" /* default */], {
        text: "$2878.90"
      }), external_react_default.a.createElement(textcomp["a" /* default */], null, external_react_default.a.createElement("strong", null, "+42"), " since last week")), external_react_default.a.createElement("div", {
        className: "col-xs-5 col-md-12 no-gutter tags"
      }, external_react_default.a.createElement(tageth["a" /* default */], {
        text: "0.9087 ETH"
      }), external_react_default.a.createElement(tagbtc["a" /* default */], {
        text: "0.5 BTC"
      }))))));
    }
  }]);

  return Earnings;
}(external_react_default.a.Component);

/* harmony default export */ var earnings = (earnings_Earnings);
// EXTERNAL MODULE: external "react-lazy-load"
var external_react_lazy_load_ = __webpack_require__("zKpT");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// CONCATENATED MODULE: ./components/atoms/iconbracket/styled.js
// Import Styled

var IconBracket = external_styled_components_default.a.text.withConfig({
  displayName: "styled__IconBracket",
  componentId: "qipsvk-0"
})(["box-sizing:border-box;background:none;color:#fff;margin-right:8px;svg{font-size:16px;}"]);
// CONCATENATED MODULE: ./components/atoms/iconbracket/index.js

 // Import Style



var iconbracket_Text = function Text(props) {
  return external_react_default.a.createElement(IconBracket, null, external_react_default.a.createElement("span", {
    className: "roundIcon"
  }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: "chevron-left"
  }), external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: "chevron-right"
  })));
};

/* harmony default export */ var iconbracket = (iconbracket_Text);
// CONCATENATED MODULE: ./components/atoms/iconstar/styled.js
// Import Styled

var IconStar = external_styled_components_default.a.text.withConfig({
  displayName: "styled__IconStar",
  componentId: "sc-1y50z35-0"
})(["box-sizing:border-box;background:none;color:#fff;margin-right:8px;svg{font-size:16px;}"]);
// CONCATENATED MODULE: ./components/atoms/iconstar/index.js

 // Import Style



var iconstar_Text = function Text(props) {
  return external_react_default.a.createElement(IconStar, null, external_react_default.a.createElement("span", {
    className: "roundIcon"
  }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: "star"
  })));
};

/* harmony default export */ var iconstar = (iconstar_Text);
// EXTERNAL MODULE: ./components/atoms/tagdefault/index.js + 1 modules
var tagdefault = __webpack_require__("AdH9");

// CONCATENATED MODULE: ./components/organisms/ranking/styled.js
// Import Styled

var styled_BlockDefault = external_styled_components_default.a.div.withConfig({
  displayName: "styled__BlockDefault",
  componentId: "sc-16b3aia-0"
})([".blockContainer{@media (min-width:992px){max-height:246px;}}li{display:inline-block;margin-right:12px;margin-bottom:16px;&:after{content:\"\";clear:both;display:block;}}.LazyLoad{margin-right:8px;}"]);
// CONCATENATED MODULE: ./components/organisms/ranking/index.js
















var ranking_Ranking =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Ranking, _React$Component);

  function Ranking() {
    Object(classCallCheck["a" /* default */])(this, Ranking);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Ranking).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Ranking, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(styled_BlockDefault, {
        className: "blockDefault col-md-4"
      }, external_react_default.a.createElement("div", {
        className: "blockContainer"
      }, external_react_default.a.createElement("div", {
        className: "row bottomBorder"
      }, external_react_default.a.createElement("div", {
        className: "col-xs-7 col-md-7 no-gutter"
      }, external_react_default.a.createElement(titleh5["a" /* default */], {
        text: "Rank"
      }), external_react_default.a.createElement(iconstar, null), external_react_default.a.createElement(numberbigger["a" /* default */], {
        text: "607"
      }), external_react_default.a.createElement(textcomp["a" /* default */], null, "You're in top ", external_react_default.a.createElement("strong", null, "40%"))), external_react_default.a.createElement("div", {
        className: "col-xs-5 col-md-5 no-gutter"
      }, external_react_default.a.createElement(titleh5["a" /* default */], {
        text: "Projects"
      }), external_react_default.a.createElement(iconbracket, null), external_react_default.a.createElement(numberbigger["a" /* default */], {
        text: "45"
      }), external_react_default.a.createElement(textcomp["a" /* default */], null, external_react_default.a.createElement("strong", null, "10"), " in this month"))), external_react_default.a.createElement("div", {
        className: "row no-margin-bottom"
      }, external_react_default.a.createElement(titleh5["a" /* default */], {
        text: "Top Categories"
      }), external_react_default.a.createElement("ul", {
        className: "topCategories"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement(tagdefault["a" /* default */], {
        text: "ruby"
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement(tagdefault["a" /* default */], {
        text: "clojure"
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement(tagdefault["a" /* default */], {
        text: "java"
      }))))));
    }
  }]);

  return Ranking;
}(external_react_default.a.Component);

/* harmony default export */ var ranking = (ranking_Ranking);
// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__("5dyF");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/molecules/userprojects/index.js + 3 modules
var userprojects = __webpack_require__("aq7R");

// EXTERNAL MODULE: ./components/atoms/btnviewall/index.js + 1 modules
var btnviewall = __webpack_require__("OSsU");

// EXTERNAL MODULE: ./components/atoms/titleh2/index.js + 1 modules
var titleh2 = __webpack_require__("XJog");

// CONCATENATED MODULE: ./components/organisms/suggestedprojects/styled.js
// Import Styled

var BlockWithSection = external_styled_components_default.a.div.withConfig({
  displayName: "styled__BlockWithSection",
  componentId: "sc-1w9oqvv-0"
})([""]);
// CONCATENATED MODULE: ./components/organisms/suggestedprojects/index.js












var suggestedprojects_Ranking =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Ranking, _React$Component);

  function Ranking() {
    Object(classCallCheck["a" /* default */])(this, Ranking);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Ranking).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Ranking, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(BlockWithSection, {
        className: "col-md-12"
      }, external_react_default.a.createElement("div", {
        className: "sectionTitle"
      }, external_react_default.a.createElement("div", {
        className: "col-xs-7"
      }, external_react_default.a.createElement(titleh2["a" /* default */], {
        text: "Suggested Projects"
      })), external_react_default.a.createElement("div", {
        className: "col-xs-5"
      }, external_react_default.a.createElement(link_default.a, {
        href: "projects"
      }, external_react_default.a.createElement("a", null, external_react_default.a.createElement(btnviewall["a" /* default */], null))))), external_react_default.a.createElement(userprojects["a" /* default */], null));
    }
  }]);

  return Ranking;
}(external_react_default.a.Component);

/* harmony default export */ var suggestedprojects = (suggestedprojects_Ranking);
// EXTERNAL MODULE: ./components/molecules/useractivity/index.js + 7 modules
var useractivity = __webpack_require__("69sY");

// CONCATENATED MODULE: ./components/organisms/activity/styled.js
// Import Styled

var styled_BlockWithSection = external_styled_components_default.a.div.withConfig({
  displayName: "styled__BlockWithSection",
  componentId: "sc-7csi3f-0"
})([""]);
// CONCATENATED MODULE: ./components/organisms/activity/index.js












var activity_Activity =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Activity, _React$Component);

  function Activity() {
    Object(classCallCheck["a" /* default */])(this, Activity);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Activity).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Activity, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(styled_BlockWithSection, {
        className: "col-md-8"
      }, external_react_default.a.createElement("div", {
        className: "sectionTitle"
      }, external_react_default.a.createElement("div", {
        className: "col-xs-6"
      }, external_react_default.a.createElement(titleh2["a" /* default */], {
        text: "Activity"
      })), external_react_default.a.createElement("div", {
        className: "col-xs-6"
      }, external_react_default.a.createElement(link_default.a, {
        href: "activity"
      }, external_react_default.a.createElement("a", null, external_react_default.a.createElement(btnviewall["a" /* default */], null))))), external_react_default.a.createElement(useractivity["a" /* default */], null));
    }
  }]);

  return Activity;
}(external_react_default.a.Component);

/* harmony default export */ var activity = (activity_Activity);
// EXTERNAL MODULE: ./components/molecules/userrankings/index.js + 1 modules
var userrankings = __webpack_require__("Cd+d");

// CONCATENATED MODULE: ./components/organisms/topearners/styled.js
// Import Styled

var topearners_styled_BlockWithSection = external_styled_components_default.a.div.withConfig({
  displayName: "styled__BlockWithSection",
  componentId: "rkem3m-0"
})([""]);
// CONCATENATED MODULE: ./components/organisms/topearners/index.js













var topearners_TopEarners =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(TopEarners, _React$Component);

  function TopEarners() {
    Object(classCallCheck["a" /* default */])(this, TopEarners);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(TopEarners).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(TopEarners, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(topearners_styled_BlockWithSection, {
        className: "col-md-4"
      }, external_react_default.a.createElement("div", {
        className: "sectionTitle"
      }, external_react_default.a.createElement("div", {
        className: "col-xs-6"
      }, external_react_default.a.createElement(titleh2["a" /* default */], {
        text: "Top Earners"
      })), external_react_default.a.createElement("div", {
        className: "col-xs-`6"
      }, external_react_default.a.createElement(link_default.a, {
        href: "payments"
      }, external_react_default.a.createElement("a", null, external_react_default.a.createElement(btnviewall["a" /* default */], null))))), external_react_default.a.createElement(userrankings["a" /* default */], null));
    }
  }]);

  return TopEarners;
}(external_react_default.a.Component);

/* harmony default export */ var topearners = (topearners_TopEarners);
// EXTERNAL MODULE: ./components/organisms/slack/index.js + 1 modules
var slack = __webpack_require__("fzLP");

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__("sLJp");

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__("JVe5");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// CONCATENATED MODULE: ./pages/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });













fontawesome_svg_core_["library"].add(free_brands_svg_icons_["fab"], free_solid_svg_icons_["faDollarSign"], free_solid_svg_icons_["faTimesCircle"], free_solid_svg_icons_["faBell"], free_solid_svg_icons_["faMapMarker"], free_solid_svg_icons_["faStar"], free_solid_svg_icons_["faBars"], free_solid_svg_icons_["faChevronDown"], free_solid_svg_icons_["faChevronLeft"], free_solid_svg_icons_["faChevronRight"], free_solid_svg_icons_["faArrowRight"], free_solid_svg_icons_["faCode"]);
function Index() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(header["a" /* default */], null), external_react_default.a.createElement(earnings, null), external_react_default.a.createElement(ranking, null), external_react_default.a.createElement(suggestedprojects, null), external_react_default.a.createElement(slack["a" /* default */], null), external_react_default.a.createElement(activity, null), external_react_default.a.createElement(topearners, null));
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

/***/ "TShP":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "URYU":
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,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"

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

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
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
// EXTERNAL MODULE: ./static/images/thumbavatar-default.png
var thumbavatar_default = __webpack_require__("TShP");

// CONCATENATED MODULE: ./components/molecules/userprojects/index.js














 // Import Style



var API = "static/api/projects.json";

var userprojects_UserProjects =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(UserProjects, _React$Component);

  function UserProjects(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, UserProjects);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(UserProjects).call(this, props));
    _this.state = {
      data: []
    };
    return _this;
  }

  Object(createClass["a" /* default */])(UserProjects, [{
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

/***/ "azxR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hHgk");
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

/***/ "bMj6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


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

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "fzLP":
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

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("tEuJ");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-lazy-load"
var external_react_lazy_load_ = __webpack_require__("zKpT");
var external_react_lazy_load_default = /*#__PURE__*/__webpack_require__.n(external_react_lazy_load_);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/organisms/slack/styled.js
// Import Styled

var BlockSlack = external_styled_components_default.a.div.withConfig({
  displayName: "styled__BlockSlack",
  componentId: "sc-5cozm4-0"
})(["transition:opacity 0.3s;.blockSlackContainer{border-radius:10px;background:linear-gradient(201.71deg,#8F9DF8 0%,#92A0FF 100%);box-shadow:0 26px 51px 0 rgba(0,0,0,0.08);padding:24px 16px;color:#fff;text-align:center;position:relative;@media (min-width:992px){text-align:left;padding:32px 48px;margin:24px 0 16px;}&:after{content:\"\";clear:both;display:block;}}&.fade{opacity:0;}.row{@media (min-width:992px){margin:0;display:flex;justify-content:flex-start;align-items:center;}}.icon{font-size:62px;margin-bottom:16px;@media (min-width:992px){margin-bottom:0;}}h5{font-weight:700;font-size:18px;line-height:25px;margin-bottom:16px;letter-spacing:0.75px;@media (min-width:992px){font-size:24px;}}p{opacity:0.75;font-size:13px;line-height:20px;margin-bottom:24px;letter-spacing:0.75px;@media (min-width:992px){margin-bottom:0;font-size:16px;line-height:24px;}}.btns{@media (max-width:991px){max-width:fit-content;margin:0 auto;display:block;float:none;}@media (min-width:992px){.col{float:right;}}}.btnCta{cursor:pointer;font-weight:500;font-size:14px;letter-spacing:1.75px;line-height:15px;box-sizing:border-box;border:1px solid #FFFFFF;border-radius:6px;text-transform:uppercase;display:inline-block;padding:14px 10px;margin:0 4px;@media (min-width:992px){padding:14px 18px;margin:0 6px;}}.active{float:right;a{color:#fff;background:#6574D6;border-color:#6574D6;text-decoration:none;}}"]);
// CONCATENATED MODULE: ./components/organisms/slack/index.js











var slack_Slack =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Slack, _React$Component);

  function Slack(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Slack);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Slack).call(this, props));
    _this.state = {
      showComponent: true,
      fade: false
    };
    _this.destroyComponent = _this.destroyComponent.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(Slack, [{
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
      return this.state.showComponent && external_react_default.a.createElement(BlockSlack, {
        className: this.state.fade ? "fade col-md-12" : "col-md-12",
        clickedButton: this.close
      }, external_react_default.a.createElement("div", {
        className: "blockSlackContainer"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-xs-12 col-md-1"
      }, external_react_default.a.createElement(external_react_lazy_load_default.a, null, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        className: "icon",
        icon: ['fab', 'slack-hash']
      }))), external_react_default.a.createElement("div", {
        className: "col-xs-12 col-md-6"
      }, external_react_default.a.createElement("h5", null, "Join the conversation on Slack"), external_react_default.a.createElement("p", null, "Stay up to date on the latest news and special programs that only take place within the slack channel.")), external_react_default.a.createElement("div", {
        className: "col-xs-12 col-md-5 btns"
      }, external_react_default.a.createElement("div", {
        className: "col active"
      }, external_react_default.a.createElement("a", {
        className: "btnCta",
        href: "https://vanhackathon.slack.com",
        target: "_blank",
        title: "Join now"
      }, "Join now")), external_react_default.a.createElement("div", {
        className: "col"
      }, external_react_default.a.createElement("span", {
        className: "btnCta",
        onClick: this.destroyComponent
      }, "Remind later"))))));
    }
  }]);

  return Slack;
}(external_react_default.a.Component);

/* harmony default export */ var slack = __webpack_exports__["a"] = (slack_Slack);

/***/ }),

/***/ "g9SA":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("OKNm");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gPcz":
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

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("tEuJ");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/atoms/textcomp/styled.js
// Import Styled

var TextComp = external_styled_components_default.a.text.withConfig({
  displayName: "styled__TextComp",
  componentId: "vkt918-0"
})(["color:#79828B;font-size:14px;line-height:21px;letter-spacing:0.75px;display:block;@media (max-width:340px){letter-spacing:0;font-size:13px;}strong{color:#10C172;}"]);
// CONCATENATED MODULE: ./components/atoms/textcomp/index.js







// Import Style


var textcomp_Text =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Text, _React$Component);

  function Text() {
    Object(classCallCheck["a" /* default */])(this, Text);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Text).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Text, [{
    key: "render",
    value: function render() {
      // This must be exactly one element or it will warn.
      var children = this.props.children;
      return external_react_default.a.createElement(TextComp, null, children);
    }
  }]);

  return Text;
}(external_react_default.a.Component);

/* harmony default export */ var textcomp = __webpack_exports__["a"] = (textcomp_Text);

/***/ }),

/***/ "hHgk":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "hZod":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
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

/***/ "ka8R":
/***/ (function(module, exports) {

module.exports = require("react-google-charts");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oS/Z":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "rTpj":
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

// CONCATENATED MODULE: ./components/atoms/numberbigger/styled.js
// Import Styled

var NumberBigger = external_styled_components_default.a.text.withConfig({
  displayName: "styled__NumberBigger",
  componentId: "sc-1atzaey-0"
})(["color:#42505C;font-weight:500;font-size:30px;letter-spacing:0.75px;line-height:46px;"]);
// CONCATENATED MODULE: ./components/atoms/numberbigger/index.js

 // Import Style



var numberbigger_Text = function Text(props) {
  return external_react_default.a.createElement(NumberBigger, props, props.text);
};

/* harmony default export */ var numberbigger = __webpack_exports__["a"] = (numberbigger_Text);

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sLJp":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "t+lh":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "tEuJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("6Ndq");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("OKNm");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "uIzg":
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

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("tEuJ");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("azxR");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");

// EXTERNAL MODULE: external "react-google-charts"
var external_react_google_charts_ = __webpack_require__("ka8R");

// EXTERNAL MODULE: ./static/images/spinner.gif
var spinner = __webpack_require__("URYU");
var spinner_default = /*#__PURE__*/__webpack_require__.n(spinner);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/molecules/chart/styled.js
// Import Styled

var ChartContent = external_styled_components_default.a.div.withConfig({
  displayName: "styled__ChartContent",
  componentId: "zndva4-0"
})([".spinner{text-align:center;display:block;margin:0 auto;}"]);
// CONCATENATED MODULE: ./components/molecules/chart/index.js







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
}, Object(defineProperty["a" /* default */])(_options, "hAxis", {
  textPosition: 'out',
  gridlines: {
    color: '#333',
    count: 6
  }
}), Object(defineProperty["a" /* default */])(_options, "vAxis", {
  textPosition: 'out',
  format: '$#'
}), _options);

var chart_earningChart =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(earningChart, _React$Component);

  function earningChart() {
    Object(classCallCheck["a" /* default */])(this, earningChart);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(earningChart).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(earningChart, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(ChartContent, null, external_react_default.a.createElement(external_react_google_charts_["Chart"], {
        chartType: "LineChart",
        data: data,
        options: options,
        graphID: "LineChart",
        width: "100%",
        height: "180px",
        chartEvents: chartEvents,
        loader: external_react_default.a.createElement("div", {
          className: "spinner"
        }, external_react_default.a.createElement("img", {
          src: spinner_default.a
        }))
      }));
    }
  }]);

  return earningChart;
}(external_react_default.a.Component);

/* harmony default export */ var chart = __webpack_exports__["a"] = (chart_earningChart);

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

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
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
  Object(inherits["a" /* default */])(Header, _Component);

  function Header(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Header);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Header).call(this, props));
    _this.state = {
      showMenu: "hidden-xs",
      showUserBox: "hidden"
    };
    _this.openMenu = _this.openMenu.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.toggleUserBox = _this.toggleUserBox.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(Header, [{
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