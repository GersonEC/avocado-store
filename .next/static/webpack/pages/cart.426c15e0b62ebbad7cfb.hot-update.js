"use strict";
self["webpackHotUpdate_N_E"]("pages/cart",{

/***/ "./pages/cart.tsx":
/*!************************!*\
  !*** ./pages/cart.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Cart; }
/* harmony export */ });
/* harmony import */ var contexts_cartAvosContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! contexts/cartAvosContext */ "./contexts/cartAvosContext.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\code\\avocado-store\\pages\\cart.tsx",
    _s = $RefreshSig$();



function Cart() {
  _s();

  var _this = this;

  var avosCart = (0,contexts_cartAvosContext__WEBPACK_IMPORTED_MODULE_0__.useAvoCart)();
  var avos = avosCart.state;
  var totalQuantity = avosCart.state.map(function (el) {
    return el.quantity;
  }).reduce(function (prevValue, currValue) {
    return prevValue + currValue;
  }, 0);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "cart",
    children: avos.map(function (avo) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "cart__row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
          src: avo.cartAvo.image,
          alt: avo.cartAvo.name,
          title: avo.cartAvo.name,
          height: '140'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
            children: avo.cartAvo.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            children: [avo.quantity, " x ", avo.cartAvo.price, "\u20AC"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, _this)]
      }, avo.cartAvo.id, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

_s(Cart, "goaixxdK1MPRlRU+R6vy/0t8x28=", false, function () {
  return [contexts_cartAvosContext__WEBPACK_IMPORTED_MODULE_0__.useAvoCart];
});

_c = Cart;

var _c;

$RefreshReg$(_c, "Cart");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FydC40MjZjMTVlMGI2MmViYmFkN2NmYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWUsU0FBU0MsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUM3QixNQUFNQyxRQUFRLEdBQUdGLG9FQUFVLEVBQTNCO0FBQ0EsTUFBTUcsSUFBSSxHQUFHRCxRQUFRLENBQUNFLEtBQXRCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHSCxRQUFRLENBQUNFLEtBQVQsQ0FDbkJFLEdBRG1CLENBQ2YsVUFBQ0MsRUFBRDtBQUFBLFdBQVFBLEVBQUUsQ0FBQ0MsUUFBWDtBQUFBLEdBRGUsRUFFbkJDLE1BRm1CLENBRVosVUFBQ0MsU0FBRCxFQUFZQyxTQUFaO0FBQUEsV0FBMEJELFNBQVMsR0FBR0MsU0FBdEM7QUFBQSxHQUZZLEVBRXFDLENBRnJDLENBQXRCO0FBR0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBLGNBQ0dSLElBQUksQ0FBQ0csR0FBTCxDQUFTLFVBQUNNLEdBQUQ7QUFBQSwwQkFDUjtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLGdDQUNFO0FBQ0UsYUFBRyxFQUFFQSxHQUFHLENBQUNDLE9BQUosQ0FBWUMsS0FEbkI7QUFFRSxhQUFHLEVBQUVGLEdBQUcsQ0FBQ0MsT0FBSixDQUFZRSxJQUZuQjtBQUdFLGVBQUssRUFBRUgsR0FBRyxDQUFDQyxPQUFKLENBQVlFLElBSHJCO0FBSUUsZ0JBQU0sRUFBRTtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRTtBQUFBLGtDQUNFO0FBQUEsc0JBQUtILEdBQUcsQ0FBQ0MsT0FBSixDQUFZRTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQSx1QkFDR0gsR0FBRyxDQUFDSixRQURQLFNBQ29CSSxHQUFHLENBQUNDLE9BQUosQ0FBWUcsS0FEaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBLFNBQWdDSixHQUFHLENBQUNDLE9BQUosQ0FBWUksRUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURRO0FBQUEsS0FBVDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9CRDs7R0ExQnVCaEI7VUFDTEQ7OztLQURLQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYXJ0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VBdm9DYXJ0IH0gZnJvbSAnY29udGV4dHMvY2FydEF2b3NDb250ZXh0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydCgpIHtcclxuICBjb25zdCBhdm9zQ2FydCA9IHVzZUF2b0NhcnQoKVxyXG4gIGNvbnN0IGF2b3MgPSBhdm9zQ2FydC5zdGF0ZVxyXG4gIGNvbnN0IHRvdGFsUXVhbnRpdHkgPSBhdm9zQ2FydC5zdGF0ZVxyXG4gICAgLm1hcCgoZWwpID0+IGVsLnF1YW50aXR5KVxyXG4gICAgLnJlZHVjZSgocHJldlZhbHVlLCBjdXJyVmFsdWUpID0+IHByZXZWYWx1ZSArIGN1cnJWYWx1ZSwgMClcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0XCI+XHJcbiAgICAgIHthdm9zLm1hcCgoYXZvKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0X19yb3dcIiBrZXk9e2F2by5jYXJ0QXZvLmlkfT5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXthdm8uY2FydEF2by5pbWFnZX1cclxuICAgICAgICAgICAgYWx0PXthdm8uY2FydEF2by5uYW1lfVxyXG4gICAgICAgICAgICB0aXRsZT17YXZvLmNhcnRBdm8ubmFtZX1cclxuICAgICAgICAgICAgaGVpZ2h0PXsnMTQwJ31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDM+e2F2by5jYXJ0QXZvLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAge2F2by5xdWFudGl0eX0geCB7YXZvLmNhcnRBdm8ucHJpY2V94oKsXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlQXZvQ2FydCIsIkNhcnQiLCJhdm9zQ2FydCIsImF2b3MiLCJzdGF0ZSIsInRvdGFsUXVhbnRpdHkiLCJtYXAiLCJlbCIsInF1YW50aXR5IiwicmVkdWNlIiwicHJldlZhbHVlIiwiY3VyclZhbHVlIiwiYXZvIiwiY2FydEF2byIsImltYWdlIiwibmFtZSIsInByaWNlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9