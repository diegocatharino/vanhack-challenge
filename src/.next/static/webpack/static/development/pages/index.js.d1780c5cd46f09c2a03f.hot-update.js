webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/atoms/textbigger/index.js":
/*!**********************************************!*\
  !*** ./components/atoms/textbigger/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "../node_modules/@fortawesome/react-fontawesome/index.es.js");
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
// Import Styled

var TextBigger = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].text.withConfig({
  displayName: "styled__TextBigger",
  componentId: "sc-8ok83v-0"
})(["color:#42505C;font-size:16px;line-height:28px;letter-spacing:0.75px;display:block;"]);

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
/* harmony import */ var _atoms_numberdefault__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../atoms/numberdefault */ "./components/atoms/numberdefault/index.js");
/* harmony import */ var _atoms_thumbavatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../atoms/thumbavatar */ "./components/atoms/thumbavatar/index.js");
/* harmony import */ var _atoms_textavatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../atoms/textavatar */ "./components/atoms/textavatar/index.js");
/* harmony import */ var _atoms_textbigger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../atoms/textbigger */ "./components/atoms/textbigger/index.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styled */ "./components/molecules/userprojects/styled.js");
/* harmony import */ var _static_images_thumbavatar_default_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../static/images/thumbavatar-default.png */ "./static/images/thumbavatar-default.png");
/* harmony import */ var _static_images_thumbavatar_default_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_static_images_thumbavatar_default_png__WEBPACK_IMPORTED_MODULE_14__);












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
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_13__["BlockDefault"], {
        className: "blockDefault"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_thumbavatar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        src: _static_images_thumbavatar_default_png__WEBPACK_IMPORTED_MODULE_14___default.a
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "name"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_textavatar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        text: "Alice Martin"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_texttime__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "5 hours ago"
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row bottomBorder"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(TextDefault, {
        text: "Design and develop a website for an educational platform focusing on the growth of children."
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-10"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_tageth__WEBPACK_IMPORTED_MODULE_6__["default"], {
        text: "1.2 ETH"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_tagbtc__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "0.3 BTC"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-2 number"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_numberdefault__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "$760"
      }))));
    }
  }]);

  return UserProjects;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (UserProjects);

/***/ })

})
//# sourceMappingURL=index.js.d1780c5cd46f09c2a03f.hot-update.js.map