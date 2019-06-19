webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "../node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styled */ "./components/organisms/slack/styled.js");










var Slack =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Slack, _React$Component);

  function Slack(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Slack);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Slack).call(this, props));
    _this.state = {
      showComponent: true
    };
    _this.destroyComponent = _this.destroyComponent.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Slack, [{
    key: "destroyComponent",
    value: function destroyComponent() {
      var _this2 = this;

      setTimeout(function () {
        return _this2.setState({
          showComponent: false
        });
      }, 500);
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.showComponent && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_8__["BlockSlack"], {
        className: "{!this.state.showComponent ? fade : ''}",
        clickedButton: this.close
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
        className: "icon",
        icon: ['fab', 'slack-hash']
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", null, "Join the conversation on Slack"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "Stay up to date on the latest news and special programs that only take place within the slack channel.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "btnCta",
        onClick: this.destroyComponent
      }, "Remind later")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "btnCta active",
        href: "https://vanhackathon.slack.com",
        target: "_blank",
        title: "Join now"
      }, "Join now"))));
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
// Import Styled

var BlockSlack = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__BlockSlack",
  componentId: "sc-5cozm4-0"
})(["border-radius:10px;background:linear-gradient(201.71deg,#8F9DF8 0%,#92A0FF 100%);box-shadow:0 26px 51px 0 rgba(0,0,0,0.08);padding:24px 16px;color:#fff;text-align:center;.icon{font-size:62px;}h5{font-weight:700;font-size:18px;line-height:25px;margin-bottom:16px;}p{opacity:0.75;font-size:13px;line-height:20px;margin-bottom:24px;}.btnCta{cursor:pointer;font-weight:500;font-size:14px;letter-spacing:1.75px;line-height:15px;box-sizing:border-box;border:1px solid #FFFFFF;border-radius:6px;text-transform:uppercase;padding:14px 18px;display:inline-block;margin:0 8px;&.active{color:#fff;background:#6574D6;border-color:#6574D6;text-decoration:none;}}.fade{position:fixed;}"]);

/***/ })

})
//# sourceMappingURL=index.js.aaf56a4f8bdfac917d0c.hot-update.js.map