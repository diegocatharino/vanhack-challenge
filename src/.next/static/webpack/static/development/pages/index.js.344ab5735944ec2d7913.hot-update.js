webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/molecules/chart/index.js":
/*!*********************************************!*\
  !*** ./components/molecules/chart/index.js ***!
  \*********************************************/
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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-google-charts */ "../node_modules/react-google-charts/dist/index.esm.js");
/* harmony import */ var _static_images_spinner_gif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../static/images/spinner.gif */ "./static/images/spinner.gif");
/* harmony import */ var _static_images_spinner_gif__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_images_spinner_gif__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styled */ "./components/molecules/chart/styled.js");










var chartEvents = [{
  eventName: "select",
  callback: function callback(_ref) {
    var chartWrapper = _ref.chartWrapper;
    console.log("Selected ", chartWrapper.getChart().getSelection());
  }
}];
var data = [["", ""], ["Mar", 170], ["", 220], ["May", 180], ["", 200], ["Jul", 100], ["", 230], ["Sep", 170], ["", 190], ["Nov", 230], ["", 220], ["Jan", 250]];
var options = {
  title: "Months vs. Earnings",
  hAxis: {
    title: "Earnings",
    viewWindow: {
      min: 0,
      max: 15
    },
    format: 'short',
    gridlines: {
      count: 6
    },
    ticks: [100, 150, 200, 250]
  },
  vAxis: {
    title: "Months",
    viewWindow: {
      min: 0,
      max: 15
    },
    format: 'short',
    gridlines: {
      count: 6
    },
    ticks: [100, 150, 200, 250]
  },
  intervals: {
    style: 'sticks'
  },
  legend: "none"
};

var earningChart =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(earningChart, _React$Component);

  function earningChart() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, earningChart);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(earningChart).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(earningChart, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_9__["ChartContent"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_google_charts__WEBPACK_IMPORTED_MODULE_7__["Chart"], {
        chartType: "Line",
        data: data,
        options: options,
        graphID: "Line",
        width: "100%",
        height: "400px",
        chartEvents: chartEvents,
        loader: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "spinner"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: _static_images_spinner_gif__WEBPACK_IMPORTED_MODULE_8___default.a
        }))
      }));
    }
  }]);

  return earningChart;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (earningChart);

/***/ })

})
//# sourceMappingURL=index.js.344ab5735944ec2d7913.hot-update.js.map