webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _atoms_tageth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../atoms/tageth */ "./components/atoms/tageth/index.js");
/* harmony import */ var _atoms_tagbtc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../atoms/tagbtc */ "./components/atoms/tagbtc/index.js");
/* harmony import */ var _atoms_titleh5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../atoms/titleh5 */ "./components/atoms/titleh5/index.js");
/* harmony import */ var _atoms_texttime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../atoms/texttime */ "./components/atoms/texttime/index.js");
/* harmony import */ var _atoms_thumbavatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../atoms/thumbavatar */ "./components/atoms/thumbavatar/index.js");
/* harmony import */ var _atoms_textavatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../atoms/textavatar */ "./components/atoms/textavatar/index.js");
/* harmony import */ var _atoms_numberdefault__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../atoms/numberdefault */ "./components/atoms/numberdefault/index.js");
/* harmony import */ var _static_images_thumbavatar_default_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../static/images/thumbavatar-default.png */ "./static/images/thumbavatar-default.png");
/* harmony import */ var _static_images_thumbavatar_default_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_images_thumbavatar_default_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styled */ "./components/molecules/userrankings/styled.js");













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
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_14__["BlockDefault"], {
        className: "blockDefault"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-4"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_titleh5__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Rankings"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-8 menu"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_texttime__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "active",
        text: "All time"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_texttime__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: "This month"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row bottomBorder"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-1"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "order"
      }, "1.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-xs-11"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_thumbavatar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        src: _static_images_thumbavatar_default_png__WEBPACK_IMPORTED_MODULE_13___default.a
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "name"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_textavatar__WEBPACK_IMPORTED_MODULE_11__["default"], {
        text: "Alice Martin"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_numberdefault__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: "num",
        text: "$760"
      })))));
    }
  }]);

  return UserRankings;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (UserRankings);

/***/ })

})
//# sourceMappingURL=index.js.c79fdbcb2c4e2aec2c41.hot-update.js.map