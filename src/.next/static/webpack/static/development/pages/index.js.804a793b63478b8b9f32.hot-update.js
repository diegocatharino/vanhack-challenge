webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/atoms/btnviewall/index.js":
/*!**********************************************!*\
  !*** ./components/atoms/btnviewall/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "../node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./components/atoms/btnviewall/styled.js");

 // Import Style



var Button = function Button(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["BtnViewAll"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "View All"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
// Import Styled

var BtnViewAll = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "styled__BtnViewAll",
  componentId: "sc-1e1rei-0"
})(["background:none h5{font-weight:500;font-size:12px;letter-spacing:1.5px;line-height:15px;text-transform:uppercase;margin-bottom:16px;}"]);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "../node_modules/@fortawesome/react-fontawesome/index.es.js");
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
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "sectionTitle"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_titleh2__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Activity"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_useractivity__WEBPACK_IMPORTED_MODULE_7__["default"], null));
    }
  }]);

  return Activity;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Activity);

/***/ })

})
//# sourceMappingURL=index.js.804a793b63478b8b9f32.hot-update.js.map