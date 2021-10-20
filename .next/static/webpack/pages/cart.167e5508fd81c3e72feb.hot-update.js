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
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var _components_CheckoutForm_CheckoutForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/CheckoutForm/CheckoutForm */ "./components/CheckoutForm/CheckoutForm.tsx");
/* harmony import */ var contexts_cartAvosContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! contexts/cartAvosContext */ "./contexts/cartAvosContext.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\code\\avocado-store\\pages\\cart.tsx",
    _s = $RefreshSig$();








var calcTotalPrice = function calcTotalPrice(items) {
  var totalPrice = 0;
  items.forEach(function (item) {
    totalPrice += item.quantity * item.cartAvo.price;
  });
  return parseFloat(totalPrice.toFixed(2));
};

function Cart() {
  _s();

  var _this = this;

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      isCheckoutVisible = _useState[0],
      setIsCheckoutVisible = _useState[1];

  var avosCart = (0,contexts_cartAvosContext__WEBPACK_IMPORTED_MODULE_2__.useAvoCart)();
  var avos = avosCart.state;
  var totalQuantity = avosCart.state.map(function (el) {
    return el.quantity;
  }).reduce(function (prevValue, currValue) {
    return prevValue + currValue;
  }, 0);
  var totalPrice = calcTotalPrice(avosCart.state);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "cart",
    children: [avos.map(function (avo) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "cart__row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
          src: avo.cartAvo.image,
          alt: avo.cartAvo.name,
          title: avo.cartAvo.name,
          height: '140'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h3", {
            children: avo.cartAvo.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            children: [avo.quantity, " x ", avo.cartAvo.price, "\u20AC"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this)]
      }, avo.cartAvo.id, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "cart__total",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h3", {
        children: ["Total: ", totalPrice, " \u20AC"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_0__.default, {
        onClick: function onClick() {
          return setIsCheckoutVisible(!isCheckoutVisible);
        },
        label: 'Checkout'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), isCheckoutVisible ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_CheckoutForm_CheckoutForm__WEBPACK_IMPORTED_MODULE_1__.CheckoutForm, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 28
    }, this) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

_s(Cart, "r2YmR6+bHuqNDHwOidIhWFgtBtc=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter, contexts_cartAvosContext__WEBPACK_IMPORTED_MODULE_2__.useAvoCart];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FydC4xNjdlNTUwOGZkODFjM2U3MmZlYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUssY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQWdDO0FBQ3JELE1BQUlDLFVBQVUsR0FBRyxDQUFqQjtBQUNBRCxFQUFBQSxLQUFLLENBQUNFLE9BQU4sQ0FBYyxVQUFDQyxJQUFELEVBQVU7QUFDdEJGLElBQUFBLFVBQVUsSUFBSUUsSUFBSSxDQUFDQyxRQUFMLEdBQWdCRCxJQUFJLENBQUNFLE9BQUwsQ0FBYUMsS0FBM0M7QUFDRCxHQUZEO0FBR0EsU0FBT0MsVUFBVSxDQUFDTixVQUFVLENBQUNPLE9BQVgsQ0FBbUIsQ0FBbkIsQ0FBRCxDQUFqQjtBQUNELENBTkQ7O0FBUWUsU0FBU0MsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUM3QixNQUFNQyxNQUFNLEdBQUdiLHNEQUFTLEVBQXhCOztBQUNBLGtCQUFrREMsK0NBQVEsQ0FBQyxLQUFELENBQTFEO0FBQUEsTUFBT2EsaUJBQVA7QUFBQSxNQUEwQkMsb0JBQTFCOztBQUNBLE1BQU1DLFFBQVEsR0FBR2pCLG9FQUFVLEVBQTNCO0FBQ0EsTUFBTWtCLElBQUksR0FBR0QsUUFBUSxDQUFDRSxLQUF0QjtBQUNBLE1BQU1DLGFBQWEsR0FBR0gsUUFBUSxDQUFDRSxLQUFULENBQ25CRSxHQURtQixDQUNmLFVBQUNDLEVBQUQ7QUFBQSxXQUFRQSxFQUFFLENBQUNkLFFBQVg7QUFBQSxHQURlLEVBRW5CZSxNQUZtQixDQUVaLFVBQUNDLFNBQUQsRUFBWUMsU0FBWjtBQUFBLFdBQTBCRCxTQUFTLEdBQUdDLFNBQXRDO0FBQUEsR0FGWSxFQUVxQyxDQUZyQyxDQUF0QjtBQUdBLE1BQU1wQixVQUFVLEdBQUdGLGNBQWMsQ0FBQ2MsUUFBUSxDQUFDRSxLQUFWLENBQWpDO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBLGVBQ0dELElBQUksQ0FBQ0csR0FBTCxDQUFTLFVBQUNLLEdBQUQ7QUFBQSwwQkFDUjtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLGdDQUNFO0FBQ0UsYUFBRyxFQUFFQSxHQUFHLENBQUNqQixPQUFKLENBQVlrQixLQURuQjtBQUVFLGFBQUcsRUFBRUQsR0FBRyxDQUFDakIsT0FBSixDQUFZbUIsSUFGbkI7QUFHRSxlQUFLLEVBQUVGLEdBQUcsQ0FBQ2pCLE9BQUosQ0FBWW1CLElBSHJCO0FBSUUsZ0JBQU0sRUFBRTtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRTtBQUFBLGtDQUNFO0FBQUEsc0JBQUtGLEdBQUcsQ0FBQ2pCLE9BQUosQ0FBWW1CO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBLHVCQUNHRixHQUFHLENBQUNsQixRQURQLFNBQ29Ca0IsR0FBRyxDQUFDakIsT0FBSixDQUFZQyxLQURoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUEsU0FBZ0NnQixHQUFHLENBQUNqQixPQUFKLENBQVlvQixFQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFE7QUFBQSxLQUFULENBREgsZUFpQkU7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLDhCQUNFO0FBQUEsOEJBQVl4QixVQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsOERBQUQ7QUFDRSxlQUFPLEVBQUU7QUFBQSxpQkFBTVcsb0JBQW9CLENBQUMsQ0FBQ0QsaUJBQUYsQ0FBMUI7QUFBQSxTQURYO0FBRUUsYUFBSyxFQUFFO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCRixFQXdCR0EsaUJBQWlCLGdCQUFHLDhEQUFDLCtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBSCxHQUFzQixJQXhCMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0QkQ7O0dBdEN1QkY7VUFDUFosb0RBRUVEOzs7S0FIS2EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FydC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tICdAY29tcG9uZW50cy9CdXR0b24vQnV0dG9uJ1xyXG5pbXBvcnQgeyBDaGVja291dEZvcm0gfSBmcm9tICdAY29tcG9uZW50cy9DaGVja291dEZvcm0vQ2hlY2tvdXRGb3JtJ1xyXG5pbXBvcnQgeyBDYXJ0U3RhdGUsIHVzZUF2b0NhcnQgfSBmcm9tICdjb250ZXh0cy9jYXJ0QXZvc0NvbnRleHQnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgY2FsY1RvdGFsUHJpY2UgPSAoaXRlbXM6IENhcnRTdGF0ZVtdKTogbnVtYmVyID0+IHtcclxuICBsZXQgdG90YWxQcmljZSA9IDBcclxuICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICB0b3RhbFByaWNlICs9IGl0ZW0ucXVhbnRpdHkgKiBpdGVtLmNhcnRBdm8ucHJpY2VcclxuICB9KVxyXG4gIHJldHVybiBwYXJzZUZsb2F0KHRvdGFsUHJpY2UudG9GaXhlZCgyKSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IFtpc0NoZWNrb3V0VmlzaWJsZSwgc2V0SXNDaGVja291dFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgYXZvc0NhcnQgPSB1c2VBdm9DYXJ0KClcclxuICBjb25zdCBhdm9zID0gYXZvc0NhcnQuc3RhdGVcclxuICBjb25zdCB0b3RhbFF1YW50aXR5ID0gYXZvc0NhcnQuc3RhdGVcclxuICAgIC5tYXAoKGVsKSA9PiBlbC5xdWFudGl0eSlcclxuICAgIC5yZWR1Y2UoKHByZXZWYWx1ZSwgY3VyclZhbHVlKSA9PiBwcmV2VmFsdWUgKyBjdXJyVmFsdWUsIDApXHJcbiAgY29uc3QgdG90YWxQcmljZSA9IGNhbGNUb3RhbFByaWNlKGF2b3NDYXJ0LnN0YXRlKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0XCI+XHJcbiAgICAgIHthdm9zLm1hcCgoYXZvKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0X19yb3dcIiBrZXk9e2F2by5jYXJ0QXZvLmlkfT5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXthdm8uY2FydEF2by5pbWFnZX1cclxuICAgICAgICAgICAgYWx0PXthdm8uY2FydEF2by5uYW1lfVxyXG4gICAgICAgICAgICB0aXRsZT17YXZvLmNhcnRBdm8ubmFtZX1cclxuICAgICAgICAgICAgaGVpZ2h0PXsnMTQwJ31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDM+e2F2by5jYXJ0QXZvLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAge2F2by5xdWFudGl0eX0geCB7YXZvLmNhcnRBdm8ucHJpY2V94oKsXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0X190b3RhbFwiPlxyXG4gICAgICAgIDxoMz5Ub3RhbDoge3RvdGFsUHJpY2V9IOKCrDwvaDM+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNDaGVja291dFZpc2libGUoIWlzQ2hlY2tvdXRWaXNpYmxlKX1cclxuICAgICAgICAgIGxhYmVsPXsnQ2hlY2tvdXQnfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aXNDaGVja291dFZpc2libGUgPyA8Q2hlY2tvdXRGb3JtIC8+IDogbnVsbH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiQ2hlY2tvdXRGb3JtIiwidXNlQXZvQ2FydCIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiY2FsY1RvdGFsUHJpY2UiLCJpdGVtcyIsInRvdGFsUHJpY2UiLCJmb3JFYWNoIiwiaXRlbSIsInF1YW50aXR5IiwiY2FydEF2byIsInByaWNlIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJDYXJ0Iiwicm91dGVyIiwiaXNDaGVja291dFZpc2libGUiLCJzZXRJc0NoZWNrb3V0VmlzaWJsZSIsImF2b3NDYXJ0IiwiYXZvcyIsInN0YXRlIiwidG90YWxRdWFudGl0eSIsIm1hcCIsImVsIiwicmVkdWNlIiwicHJldlZhbHVlIiwiY3VyclZhbHVlIiwiYXZvIiwiaW1hZ2UiLCJuYW1lIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9