webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/atoms/logo/index.js":
/*!****************************************!*\
  !*** ./components/atoms/logo/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "../node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./components/atoms/logo/styled.js");

 // Import Style



var Text = function Text(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["TitleH2"], props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, props.text));
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./components/atoms/logo/styled.js":
/*!*****************************************!*\
  !*** ./components/atoms/logo/styled.js ***!
  \*****************************************/
/*! exports provided: TitleH2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleH2", function() { return TitleH2; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
// Import Styled

var TitleH2 = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].text.withConfig({
  displayName: "styled__TitleH2",
  componentId: "rclpx0-0"
})(["opacity:0.9;color:#42505C;display:inline-block;h2{font-weight:500;font-size:18px;letter-spacing:0.25px;line-height:15px;}"]);

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _atoms_iconbars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../atoms/iconbars */ "./components/atoms/iconbars/index.js");
/* harmony import */ var _atoms_iconmap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../atoms/iconmap */ "./components/atoms/iconmap/index.js");
/* harmony import */ var _atoms_iconchevrondown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../atoms/iconchevrondown */ "./components/atoms/iconchevrondown/index.js");
/* harmony import */ var _atoms_titleh2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../atoms/titleh2 */ "./components/atoms/titleh2/index.js");
/* harmony import */ var _atoms_logo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../atoms/logo */ "./components/atoms/logo/index.js");
/* harmony import */ var _molecules_menucontent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../molecules/menucontent */ "./components/molecules/menucontent/index.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styled */ "./components/organisms/header/styled.js");














var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _Component);

  function Header() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      var titleH2 = this.props.titleH2;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_12__["MenuContainer"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-6 left-area"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "hidden-md"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_iconbars__WEBPACK_IMPORTED_MODULE_6__["default"], null)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_iconmap__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_logo__WEBPACK_IMPORTED_MODULE_13__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_menucontent__WEBPACK_IMPORTED_MODULE_11__["default"], null)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-6 right-area"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_iconchevrondown__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_titleh2__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "Alex Doe"
      })));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.655f0fa607c12d90fd2e.hot-update.js.map