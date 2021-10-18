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

  var avosCart = (0,contexts_cartAvosContext__WEBPACK_IMPORTED_MODULE_1__.useAvoCart)();
  var avos = avosCart.state;
  var totalQuantity = avosCart.state.map(function (el) {
    return el.quantity;
  }).reduce(function (prevValue, currValue) {
    return prevValue + currValue;
  }, 0);
  var totalPrice = calcTotalPrice(avosCart.state);
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
          lineNumber: 24,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
            children: avo.cartAvo.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
            children: [avo.quantity, " x ", avo.cartAvo.price, "\u20AC"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this)]
      }, avo.cartAvo.id, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "cart__total",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
        children: ["Total: ", totalPrice, " \u20AC"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_0__.default, {
        onClick: function onClick() {},
        label: 'Checkout'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FydC4yOWFhMTlhMjRmMWI3YzdhOTAwYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFnQztBQUNyRCxNQUFJQyxVQUFVLEdBQUcsQ0FBakI7QUFDQUQsRUFBQUEsS0FBSyxDQUFDRSxPQUFOLENBQWMsVUFBQ0MsSUFBRCxFQUFVO0FBQ3RCRixJQUFBQSxVQUFVLElBQUlFLElBQUksQ0FBQ0MsUUFBTCxHQUFnQkQsSUFBSSxDQUFDRSxPQUFMLENBQWFDLEtBQTNDO0FBQ0QsR0FGRDtBQUdBLFNBQU9DLFVBQVUsQ0FBQ04sVUFBVSxDQUFDTyxPQUFYLENBQW1CLENBQW5CLENBQUQsQ0FBakI7QUFDRCxDQU5EOztBQVFlLFNBQVNDLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDN0IsTUFBTUMsUUFBUSxHQUFHWixvRUFBVSxFQUEzQjtBQUNBLE1BQU1hLElBQUksR0FBR0QsUUFBUSxDQUFDRSxLQUF0QjtBQUNBLE1BQU1DLGFBQWEsR0FBR0gsUUFBUSxDQUFDRSxLQUFULENBQ25CRSxHQURtQixDQUNmLFVBQUNDLEVBQUQ7QUFBQSxXQUFRQSxFQUFFLENBQUNYLFFBQVg7QUFBQSxHQURlLEVBRW5CWSxNQUZtQixDQUVaLFVBQUNDLFNBQUQsRUFBWUMsU0FBWjtBQUFBLFdBQTBCRCxTQUFTLEdBQUdDLFNBQXRDO0FBQUEsR0FGWSxFQUVxQyxDQUZyQyxDQUF0QjtBQUdBLE1BQU1qQixVQUFVLEdBQUdGLGNBQWMsQ0FBQ1csUUFBUSxDQUFDRSxLQUFWLENBQWpDO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBLGVBQ0dELElBQUksQ0FBQ0csR0FBTCxDQUFTLFVBQUNLLEdBQUQ7QUFBQSwwQkFDUjtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLGdDQUNFO0FBQ0UsYUFBRyxFQUFFQSxHQUFHLENBQUNkLE9BQUosQ0FBWWUsS0FEbkI7QUFFRSxhQUFHLEVBQUVELEdBQUcsQ0FBQ2QsT0FBSixDQUFZZ0IsSUFGbkI7QUFHRSxlQUFLLEVBQUVGLEdBQUcsQ0FBQ2QsT0FBSixDQUFZZ0IsSUFIckI7QUFJRSxnQkFBTSxFQUFFO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU9FO0FBQUEsa0NBQ0U7QUFBQSxzQkFBS0YsR0FBRyxDQUFDZCxPQUFKLENBQVlnQjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQSx1QkFDR0YsR0FBRyxDQUFDZixRQURQLFNBQ29CZSxHQUFHLENBQUNkLE9BQUosQ0FBWUMsS0FEaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBLFNBQWdDYSxHQUFHLENBQUNkLE9BQUosQ0FBWWlCLEVBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUTtBQUFBLEtBQVQsQ0FESCxlQWlCRTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEsOEJBQ0U7QUFBQSw4QkFBWXJCLFVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQyw4REFBRDtBQUFRLGVBQU8sRUFBRSxtQkFBTSxDQUFFLENBQXpCO0FBQTJCLGFBQUssRUFBRTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0JEOztHQWhDdUJRO1VBQ0xYOzs7S0FES1ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FydC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tICdAY29tcG9uZW50cy9CdXR0b24vQnV0dG9uJ1xyXG5pbXBvcnQgeyBDYXJ0U3RhdGUsIHVzZUF2b0NhcnQgfSBmcm9tICdjb250ZXh0cy9jYXJ0QXZvc0NvbnRleHQnXHJcblxyXG5jb25zdCBjYWxjVG90YWxQcmljZSA9IChpdGVtczogQ2FydFN0YXRlW10pOiBudW1iZXIgPT4ge1xyXG4gIGxldCB0b3RhbFByaWNlID0gMFxyXG4gIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIHRvdGFsUHJpY2UgKz0gaXRlbS5xdWFudGl0eSAqIGl0ZW0uY2FydEF2by5wcmljZVxyXG4gIH0pXHJcbiAgcmV0dXJuIHBhcnNlRmxvYXQodG90YWxQcmljZS50b0ZpeGVkKDIpKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJ0KCkge1xyXG4gIGNvbnN0IGF2b3NDYXJ0ID0gdXNlQXZvQ2FydCgpXHJcbiAgY29uc3QgYXZvcyA9IGF2b3NDYXJ0LnN0YXRlXHJcbiAgY29uc3QgdG90YWxRdWFudGl0eSA9IGF2b3NDYXJ0LnN0YXRlXHJcbiAgICAubWFwKChlbCkgPT4gZWwucXVhbnRpdHkpXHJcbiAgICAucmVkdWNlKChwcmV2VmFsdWUsIGN1cnJWYWx1ZSkgPT4gcHJldlZhbHVlICsgY3VyclZhbHVlLCAwKVxyXG4gIGNvbnN0IHRvdGFsUHJpY2UgPSBjYWxjVG90YWxQcmljZShhdm9zQ2FydC5zdGF0ZSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydFwiPlxyXG4gICAgICB7YXZvcy5tYXAoKGF2bykgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydF9fcm93XCIga2V5PXthdm8uY2FydEF2by5pZH0+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17YXZvLmNhcnRBdm8uaW1hZ2V9XHJcbiAgICAgICAgICAgIGFsdD17YXZvLmNhcnRBdm8ubmFtZX1cclxuICAgICAgICAgICAgdGl0bGU9e2F2by5jYXJ0QXZvLm5hbWV9XHJcbiAgICAgICAgICAgIGhlaWdodD17JzE0MCd9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzPnthdm8uY2FydEF2by5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIHthdm8ucXVhbnRpdHl9IHgge2F2by5jYXJ0QXZvLnByaWNlfeKCrFxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydF9fdG90YWxcIj5cclxuICAgICAgICA8aDM+VG90YWw6IHt0b3RhbFByaWNlfSDigqw8L2gzPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4ge319IGxhYmVsPXsnQ2hlY2tvdXQnfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiQnV0dG9uIiwidXNlQXZvQ2FydCIsImNhbGNUb3RhbFByaWNlIiwiaXRlbXMiLCJ0b3RhbFByaWNlIiwiZm9yRWFjaCIsIml0ZW0iLCJxdWFudGl0eSIsImNhcnRBdm8iLCJwcmljZSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiQ2FydCIsImF2b3NDYXJ0IiwiYXZvcyIsInN0YXRlIiwidG90YWxRdWFudGl0eSIsIm1hcCIsImVsIiwicmVkdWNlIiwicHJldlZhbHVlIiwiY3VyclZhbHVlIiwiYXZvIiwiaW1hZ2UiLCJuYW1lIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9