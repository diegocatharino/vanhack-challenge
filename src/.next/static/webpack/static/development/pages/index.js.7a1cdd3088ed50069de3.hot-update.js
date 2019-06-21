webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _atoms_iconbars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../atoms/iconbars */ "./components/atoms/iconbars/index.js");
/* harmony import */ var _atoms_iconmap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../atoms/iconmap */ "./components/atoms/iconmap/index.js");
/* harmony import */ var _atoms_iconchevrondown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../atoms/iconchevrondown */ "./components/atoms/iconchevrondown/index.js");
/* harmony import */ var _atoms_iconnotification__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../atoms/iconnotification */ "./components/atoms/iconnotification/index.js");
/* harmony import */ var _atoms_titleh2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../atoms/titleh2 */ "./components/atoms/titleh2/index.js");
/* harmony import */ var _atoms_logo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../atoms/logo */ "./components/atoms/logo/index.js");
/* harmony import */ var _molecules_menucontent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../molecules/menucontent */ "./components/molecules/menucontent/index.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styled */ "./components/organisms/header/styled.js");
















var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _Component);

  function Header(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));
    _this.state = {
      showMenu: false,
      fade: false
    };
    _this.openMenu = _this.openMenu.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "openMenu",
    value: function openMenu() {
      var _this2 = this;

      this.setState({
        fade: true
      }), setTimeout(function () {
        return _this2.setState({
          showMenu: true
        });
      }, 300);
    }
  }, {
    key: "render",
    value: function render() {
      var titleH2 = this.props.titleH2;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_14__["MenuContainer"], {
        className: "col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-xs-6 left-area"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "hidden-md",
        onClick: this.openMenu
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_atoms_iconbars__WEBPACK_IMPORTED_MODULE_7__["default"], null)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_atoms_iconmap__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "hidden-xs"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_atoms_logo__WEBPACK_IMPORTED_MODULE_12__["default"], null))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-xs-6 right-area"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_atoms_iconchevrondown__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_atoms_titleh2__WEBPACK_IMPORTED_MODULE_11__["default"], {
        text: "Alex Doe"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "hidden-xs"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_atoms_iconnotification__WEBPACK_IMPORTED_MODULE_10__["default"], null))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-xs-12"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: this.state.showMenu ? "showMenu hidden-xs" : "hidden-xs"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_molecules_menucontent__WEBPACK_IMPORTED_MODULE_13__["default"], null))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.7a1cdd3088ed50069de3.hot-update.js.map