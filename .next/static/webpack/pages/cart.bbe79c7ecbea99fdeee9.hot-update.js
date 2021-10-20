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
    }, this), isCheckoutVisible ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_CheckoutForm_CheckoutForm__WEBPACK_IMPORTED_MODULE_1__.CheckoutForm, {
      amount: totalPrice
    }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FydC5iYmU3OWM3ZWNiZWE5OWZkZWVlOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUssY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQWdDO0FBQ3JELE1BQUlDLFVBQVUsR0FBRyxDQUFqQjtBQUNBRCxFQUFBQSxLQUFLLENBQUNFLE9BQU4sQ0FBYyxVQUFDQyxJQUFELEVBQVU7QUFDdEJGLElBQUFBLFVBQVUsSUFBSUUsSUFBSSxDQUFDQyxRQUFMLEdBQWdCRCxJQUFJLENBQUNFLE9BQUwsQ0FBYUMsS0FBM0M7QUFDRCxHQUZEO0FBR0EsU0FBT0MsVUFBVSxDQUFDTixVQUFVLENBQUNPLE9BQVgsQ0FBbUIsQ0FBbkIsQ0FBRCxDQUFqQjtBQUNELENBTkQ7O0FBUWUsU0FBU0MsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUM3QixNQUFNQyxNQUFNLEdBQUdiLHNEQUFTLEVBQXhCOztBQUNBLGtCQUFrREMsK0NBQVEsQ0FBQyxLQUFELENBQTFEO0FBQUEsTUFBT2EsaUJBQVA7QUFBQSxNQUEwQkMsb0JBQTFCOztBQUNBLE1BQU1DLFFBQVEsR0FBR2pCLG9FQUFVLEVBQTNCO0FBQ0EsTUFBTWtCLElBQUksR0FBR0QsUUFBUSxDQUFDRSxLQUF0QjtBQUNBLE1BQU1DLGFBQWEsR0FBR0gsUUFBUSxDQUFDRSxLQUFULENBQ25CRSxHQURtQixDQUNmLFVBQUNDLEVBQUQ7QUFBQSxXQUFRQSxFQUFFLENBQUNkLFFBQVg7QUFBQSxHQURlLEVBRW5CZSxNQUZtQixDQUVaLFVBQUNDLFNBQUQsRUFBWUMsU0FBWjtBQUFBLFdBQTBCRCxTQUFTLEdBQUdDLFNBQXRDO0FBQUEsR0FGWSxFQUVxQyxDQUZyQyxDQUF0QjtBQUdBLE1BQU1wQixVQUFVLEdBQUdGLGNBQWMsQ0FBQ2MsUUFBUSxDQUFDRSxLQUFWLENBQWpDO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBLGVBQ0dELElBQUksQ0FBQ0csR0FBTCxDQUFTLFVBQUNLLEdBQUQ7QUFBQSwwQkFDUjtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLGdDQUNFO0FBQ0UsYUFBRyxFQUFFQSxHQUFHLENBQUNqQixPQUFKLENBQVlrQixLQURuQjtBQUVFLGFBQUcsRUFBRUQsR0FBRyxDQUFDakIsT0FBSixDQUFZbUIsSUFGbkI7QUFHRSxlQUFLLEVBQUVGLEdBQUcsQ0FBQ2pCLE9BQUosQ0FBWW1CLElBSHJCO0FBSUUsZ0JBQU0sRUFBRTtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRTtBQUFBLGtDQUNFO0FBQUEsc0JBQUtGLEdBQUcsQ0FBQ2pCLE9BQUosQ0FBWW1CO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBLHVCQUNHRixHQUFHLENBQUNsQixRQURQLFNBQ29Ca0IsR0FBRyxDQUFDakIsT0FBSixDQUFZQyxLQURoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUEsU0FBZ0NnQixHQUFHLENBQUNqQixPQUFKLENBQVlvQixFQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFE7QUFBQSxLQUFULENBREgsZUFpQkU7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLDhCQUNFO0FBQUEsOEJBQVl4QixVQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsOERBQUQ7QUFDRSxlQUFPLEVBQUU7QUFBQSxpQkFBTVcsb0JBQW9CLENBQUMsQ0FBQ0QsaUJBQUYsQ0FBMUI7QUFBQSxTQURYO0FBRUUsYUFBSyxFQUFFO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCRixFQXdCR0EsaUJBQWlCLGdCQUFHLDhEQUFDLCtFQUFEO0FBQWMsWUFBTSxFQUFFVjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQUgsR0FBMEMsSUF4QjlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNEJEOztHQXRDdUJRO1VBQ1BaLG9EQUVFRDs7O0tBSEthIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhcnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSAnQGNvbXBvbmVudHMvQnV0dG9uL0J1dHRvbidcclxuaW1wb3J0IHsgQ2hlY2tvdXRGb3JtIH0gZnJvbSAnQGNvbXBvbmVudHMvQ2hlY2tvdXRGb3JtL0NoZWNrb3V0Rm9ybSdcclxuaW1wb3J0IHsgQ2FydFN0YXRlLCB1c2VBdm9DYXJ0IH0gZnJvbSAnY29udGV4dHMvY2FydEF2b3NDb250ZXh0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IGNhbGNUb3RhbFByaWNlID0gKGl0ZW1zOiBDYXJ0U3RhdGVbXSk6IG51bWJlciA9PiB7XHJcbiAgbGV0IHRvdGFsUHJpY2UgPSAwXHJcbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgdG90YWxQcmljZSArPSBpdGVtLnF1YW50aXR5ICogaXRlbS5jYXJ0QXZvLnByaWNlXHJcbiAgfSlcclxuICByZXR1cm4gcGFyc2VGbG9hdCh0b3RhbFByaWNlLnRvRml4ZWQoMikpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnQoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBbaXNDaGVja291dFZpc2libGUsIHNldElzQ2hlY2tvdXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGF2b3NDYXJ0ID0gdXNlQXZvQ2FydCgpXHJcbiAgY29uc3QgYXZvcyA9IGF2b3NDYXJ0LnN0YXRlXHJcbiAgY29uc3QgdG90YWxRdWFudGl0eSA9IGF2b3NDYXJ0LnN0YXRlXHJcbiAgICAubWFwKChlbCkgPT4gZWwucXVhbnRpdHkpXHJcbiAgICAucmVkdWNlKChwcmV2VmFsdWUsIGN1cnJWYWx1ZSkgPT4gcHJldlZhbHVlICsgY3VyclZhbHVlLCAwKVxyXG4gIGNvbnN0IHRvdGFsUHJpY2UgPSBjYWxjVG90YWxQcmljZShhdm9zQ2FydC5zdGF0ZSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydFwiPlxyXG4gICAgICB7YXZvcy5tYXAoKGF2bykgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydF9fcm93XCIga2V5PXthdm8uY2FydEF2by5pZH0+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17YXZvLmNhcnRBdm8uaW1hZ2V9XHJcbiAgICAgICAgICAgIGFsdD17YXZvLmNhcnRBdm8ubmFtZX1cclxuICAgICAgICAgICAgdGl0bGU9e2F2by5jYXJ0QXZvLm5hbWV9XHJcbiAgICAgICAgICAgIGhlaWdodD17JzE0MCd9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzPnthdm8uY2FydEF2by5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIHthdm8ucXVhbnRpdHl9IHgge2F2by5jYXJ0QXZvLnByaWNlfeKCrFxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydF9fdG90YWxcIj5cclxuICAgICAgICA8aDM+VG90YWw6IHt0b3RhbFByaWNlfSDigqw8L2gzPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzQ2hlY2tvdXRWaXNpYmxlKCFpc0NoZWNrb3V0VmlzaWJsZSl9XHJcbiAgICAgICAgICBsYWJlbD17J0NoZWNrb3V0J31cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2lzQ2hlY2tvdXRWaXNpYmxlID8gPENoZWNrb3V0Rm9ybSBhbW91bnQ9e3RvdGFsUHJpY2V9IC8+IDogbnVsbH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiQ2hlY2tvdXRGb3JtIiwidXNlQXZvQ2FydCIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiY2FsY1RvdGFsUHJpY2UiLCJpdGVtcyIsInRvdGFsUHJpY2UiLCJmb3JFYWNoIiwiaXRlbSIsInF1YW50aXR5IiwiY2FydEF2byIsInByaWNlIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJDYXJ0Iiwicm91dGVyIiwiaXNDaGVja291dFZpc2libGUiLCJzZXRJc0NoZWNrb3V0VmlzaWJsZSIsImF2b3NDYXJ0IiwiYXZvcyIsInN0YXRlIiwidG90YWxRdWFudGl0eSIsIm1hcCIsImVsIiwicmVkdWNlIiwicHJldlZhbHVlIiwiY3VyclZhbHVlIiwiYXZvIiwiaW1hZ2UiLCJuYW1lIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9