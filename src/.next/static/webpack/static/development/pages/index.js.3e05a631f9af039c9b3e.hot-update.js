webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var react_lazy_load__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-lazy-load */ "../node_modules/react-lazy-load/lib/LazyLoad.js");
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



var API = "static/api/projects.json";

var UserProjects =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(UserProjects, _React$Component);

  function UserProjects(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserProjects);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(UserProjects).call(this, props));
    _this.state = {
      data: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UserProjects, [{
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
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_15__["BlockDefault"], {
        className: "blockDefault"
      }, data.map(function (item, key) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "map",
          key: key
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
          src: item.avatar
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "name"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_textavatar__WEBPACK_IMPORTED_MODULE_13__["default"], {
          text: item.name
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_texttime__WEBPACK_IMPORTED_MODULE_10__["default"], {
          text: item.date
        }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "col-xs-2 tag"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_tagdefault__WEBPACK_IMPORTED_MODULE_9__["default"], {
          text: item.tag
        }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "row bottomBorder"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_textbigger__WEBPACK_IMPORTED_MODULE_14__["default"], {
          text: item.text
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "row tags"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "col-xs-10"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_tageth__WEBPACK_IMPORTED_MODULE_7__["default"], {
          text: item.eth
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_tagbtc__WEBPACK_IMPORTED_MODULE_8__["default"], {
          text: item.btc
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "col-xs-2 number"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_numberdefault__WEBPACK_IMPORTED_MODULE_11__["default"], {
          text: item.earnings
        })))));
      }));
    }
  }]);

  return UserProjects;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (UserProjects);

/***/ })

})
//# sourceMappingURL=index.js.3e05a631f9af039c9b3e.hot-update.js.map