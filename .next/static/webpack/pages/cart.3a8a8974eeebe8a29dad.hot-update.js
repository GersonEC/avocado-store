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
/* harmony import */ var contexts_cartAvosContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! contexts/cartAvosContext */ "./contexts/cartAvosContext.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\code\\avocado-store\\pages\\cart.tsx",
    _s = $RefreshSig$();




function Cart() {
  _s();

  var _this = this;

  var avosCart = (0,contexts_cartAvosContext__WEBPACK_IMPORTED_MODULE_1__.useAvoCart)();
  var avos = avosCart.state;
  var totalQuantity = avosCart.state.map(function (el) {
    return el.quantity;
  }).reduce(function (prevValue, currValue) {
    return prevValue + currValue;
  }, 0);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "cart",
    children: [avos.map(function (avo) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "cart__row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: avo.cartAvo.image,
          alt: avo.cartAvo.name,
          title: avo.cartAvo.name,
          height: '140'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
            children: avo.cartAvo.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
            children: [avo.quantity, " x ", avo.cartAvo.price, "\u20AC"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this)]
      }, avo.cartAvo.id, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "cart__total",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
        children: ["Totale: ", totalQuantity]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_0__.default, {
        onClick: function onClick() {},
        label: 'Checkout'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

_s(Cart, "goaixxdK1MPRlRU+R6vy/0t8x28=", false, function () {
  return [contexts_cartAvosContext__WEBPACK_IMPORTED_MODULE_1__.useAvoCart];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FydC4zYThhODk3NGVlZWJlOGEyOWRhZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRWUsU0FBU0UsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUM3QixNQUFNQyxRQUFRLEdBQUdGLG9FQUFVLEVBQTNCO0FBQ0EsTUFBTUcsSUFBSSxHQUFHRCxRQUFRLENBQUNFLEtBQXRCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHSCxRQUFRLENBQUNFLEtBQVQsQ0FDbkJFLEdBRG1CLENBQ2YsVUFBQ0MsRUFBRDtBQUFBLFdBQVFBLEVBQUUsQ0FBQ0MsUUFBWDtBQUFBLEdBRGUsRUFFbkJDLE1BRm1CLENBRVosVUFBQ0MsU0FBRCxFQUFZQyxTQUFaO0FBQUEsV0FBMEJELFNBQVMsR0FBR0MsU0FBdEM7QUFBQSxHQUZZLEVBRXFDLENBRnJDLENBQXRCO0FBSUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBLGVBQ0dSLElBQUksQ0FBQ0csR0FBTCxDQUFTLFVBQUNNLEdBQUQ7QUFBQSwwQkFDUjtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLGdDQUNFO0FBQ0UsYUFBRyxFQUFFQSxHQUFHLENBQUNDLE9BQUosQ0FBWUMsS0FEbkI7QUFFRSxhQUFHLEVBQUVGLEdBQUcsQ0FBQ0MsT0FBSixDQUFZRSxJQUZuQjtBQUdFLGVBQUssRUFBRUgsR0FBRyxDQUFDQyxPQUFKLENBQVlFLElBSHJCO0FBSUUsZ0JBQU0sRUFBRTtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRTtBQUFBLGtDQUNFO0FBQUEsc0JBQUtILEdBQUcsQ0FBQ0MsT0FBSixDQUFZRTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQSx1QkFDR0gsR0FBRyxDQUFDSixRQURQLFNBQ29CSSxHQUFHLENBQUNDLE9BQUosQ0FBWUcsS0FEaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBLFNBQWdDSixHQUFHLENBQUNDLE9BQUosQ0FBWUksRUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURRO0FBQUEsS0FBVCxDQURILGVBaUJFO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSw4QkFDRTtBQUFBLCtCQUFhWixhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsOERBQUQ7QUFBUSxlQUFPLEVBQUUsbUJBQU0sQ0FBRSxDQUF6QjtBQUEyQixhQUFLLEVBQUU7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdCRDs7R0EvQnVCSjtVQUNMRDs7O0tBREtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhcnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSAnQGNvbXBvbmVudHMvQnV0dG9uL0J1dHRvbidcclxuaW1wb3J0IHsgdXNlQXZvQ2FydCB9IGZyb20gJ2NvbnRleHRzL2NhcnRBdm9zQ29udGV4dCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnQoKSB7XHJcbiAgY29uc3QgYXZvc0NhcnQgPSB1c2VBdm9DYXJ0KClcclxuICBjb25zdCBhdm9zID0gYXZvc0NhcnQuc3RhdGVcclxuICBjb25zdCB0b3RhbFF1YW50aXR5ID0gYXZvc0NhcnQuc3RhdGVcclxuICAgIC5tYXAoKGVsKSA9PiBlbC5xdWFudGl0eSlcclxuICAgIC5yZWR1Y2UoKHByZXZWYWx1ZSwgY3VyclZhbHVlKSA9PiBwcmV2VmFsdWUgKyBjdXJyVmFsdWUsIDApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnRcIj5cclxuICAgICAge2F2b3MubWFwKChhdm8pID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnRfX3Jvd1wiIGtleT17YXZvLmNhcnRBdm8uaWR9PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9e2F2by5jYXJ0QXZvLmltYWdlfVxyXG4gICAgICAgICAgICBhbHQ9e2F2by5jYXJ0QXZvLm5hbWV9XHJcbiAgICAgICAgICAgIHRpdGxlPXthdm8uY2FydEF2by5uYW1lfVxyXG4gICAgICAgICAgICBoZWlnaHQ9eycxNDAnfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMz57YXZvLmNhcnRBdm8ubmFtZX08L2gzPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICB7YXZvLnF1YW50aXR5fSB4IHthdm8uY2FydEF2by5wcmljZX3igqxcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnRfX3RvdGFsXCI+XHJcbiAgICAgICAgPGgzPlRvdGFsZToge3RvdGFsUXVhbnRpdHl9PC9oMz5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHt9fSBsYWJlbD17J0NoZWNrb3V0J30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInVzZUF2b0NhcnQiLCJDYXJ0IiwiYXZvc0NhcnQiLCJhdm9zIiwic3RhdGUiLCJ0b3RhbFF1YW50aXR5IiwibWFwIiwiZWwiLCJxdWFudGl0eSIsInJlZHVjZSIsInByZXZWYWx1ZSIsImN1cnJWYWx1ZSIsImF2byIsImNhcnRBdm8iLCJpbWFnZSIsIm5hbWUiLCJwcmljZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==