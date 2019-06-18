webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/atoms/texttime/index.js":
/*!********************************************!*\
  !*** ./components/atoms/texttime/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "../node_modules/@fortawesome/react-fontawesome/index.es.js");
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
// Import Styled

var TextTime = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].text.withConfig({
  displayName: "styled__TextTime",
  componentId: "ouv6s7-0"
})(["color:#79828B;font-size:12px;line-height:18px;letter-spacing:0.75px;display:block;"]);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _atoms_tageth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../atoms/tageth */ "./components/atoms/tageth/index.js");
/* harmony import */ var _atoms_tagbtc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../atoms/tagbtc */ "./components/atoms/tagbtc/index.js");
/* harmony import */ var _atoms_texttime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../atoms/texttime */ "./components/atoms/texttime/index.js");
/* harmony import */ var _atoms_thumbavatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../atoms/thumbavatar */ "./components/atoms/thumbavatar/index.js");











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
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blockDefault"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_thumbavatar__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "name"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "Alice Martin"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "date"
      }, "5 hours ago")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row bottomBorder"
      }, "Design and develop a website for an educational platform focusing on the growth of children."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_tageth__WEBPACK_IMPORTED_MODULE_6__["default"], {
        text: "1.2 ETH"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_tagbtc__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "0.3 BTC"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "num"
      }, "$760"))));
    }
  }]);

  return UserProjects;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (UserProjects);

/***/ })

})
//# sourceMappingURL=index.js.803d9e99d662e48b19b7.hot-update.js.map