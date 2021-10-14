webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Navbar/Navbar.tsx":
/*!**************************************!*\
  !*** ./components/Navbar/Navbar.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var contexts_cartAvosContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! contexts/cartAvosContext */ "./contexts/cartAvosContext.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styles_SVGIcons_Avocado__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/SVGIcons/Avocado */ "./styles/SVGIcons/Avocado.tsx");
/* harmony import */ var styles_SVGIcons_Basket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/SVGIcons/Basket */ "./styles/SVGIcons/Basket.tsx");
var _jsxFileName = "C:\\code\\avocado-store\\components\\Navbar\\Navbar.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Navbar() {
  _s();

  var _useAvoCart = Object(contexts_cartAvosContext__WEBPACK_IMPORTED_MODULE_1__["useAvoCart"])(),
      state = _useAvoCart.state;

  var cartQuantity = state.map(function (el) {
    return el.quantity;
  }).reduce(function (prevValue, currentValue) {
    return prevValue + currentValue;
  });
  return __jsx("div", {
    className: "navbar-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("nav", {
    className: "navbar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "navbar__logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, __jsx(styles_SVGIcons_Avocado__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, "Avo Store"))), __jsx("menu", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx(styles_SVGIcons_Basket__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, state.length), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "Canasta")))));
}

_s(Navbar, "XTJAnAw7yR74kVo1flIPBnhu2sY=", false, function () {
  return [contexts_cartAvosContext__WEBPACK_IMPORTED_MODULE_1__["useAvoCart"]];
});

_c = Navbar;

var _c;

$RefreshReg$(_c, "Navbar");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLnRzeCJdLCJuYW1lcyI6WyJOYXZiYXIiLCJ1c2VBdm9DYXJ0Iiwic3RhdGUiLCJjYXJ0UXVhbnRpdHkiLCJtYXAiLCJlbCIsInF1YW50aXR5IiwicmVkdWNlIiwicHJldlZhbHVlIiwiY3VycmVudFZhbHVlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFDL0Isb0JBQWtCQywyRUFBVSxFQUE1QjtBQUFBLE1BQVFDLEtBQVIsZUFBUUEsS0FBUjs7QUFDQSxNQUFNQyxZQUFZLEdBQUdELEtBQUssQ0FDdkJFLEdBRGtCLENBQ2QsVUFBQ0MsRUFBRDtBQUFBLFdBQVFBLEVBQUUsQ0FBQ0MsUUFBWDtBQUFBLEdBRGMsRUFFbEJDLE1BRmtCLENBRVgsVUFBQ0MsU0FBRCxFQUFZQyxZQUFaO0FBQUEsV0FBNkJELFNBQVMsR0FBR0MsWUFBekM7QUFBQSxHQUZXLENBQXJCO0FBR0EsU0FDRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsQ0FERixDQURGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT1AsS0FBSyxDQUFDUSxNQUFiLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsQ0FERixDQVBGLENBREYsQ0FERjtBQW1CRDs7R0F4QnVCVixNO1VBQ0pDLG1FOzs7S0FESUQsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmFiNDE1NDJiYzFjM2E5YmRmOWEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VBdm9DYXJ0IH0gZnJvbSAnY29udGV4dHMvY2FydEF2b3NDb250ZXh0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEF2b2NhZG8gZnJvbSAnc3R5bGVzL1NWR0ljb25zL0F2b2NhZG8nXHJcbmltcG9ydCBCYXNrZXQgZnJvbSAnc3R5bGVzL1NWR0ljb25zL0Jhc2tldCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICBjb25zdCB7IHN0YXRlIH0gPSB1c2VBdm9DYXJ0KClcclxuICBjb25zdCBjYXJ0UXVhbnRpdHkgPSBzdGF0ZVxyXG4gICAgLm1hcCgoZWwpID0+IGVsLnF1YW50aXR5KVxyXG4gICAgLnJlZHVjZSgocHJldlZhbHVlLCBjdXJyZW50VmFsdWUpID0+IHByZXZWYWx1ZSArIGN1cnJlbnRWYWx1ZSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItd3JhcHBlclwiPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcl9fbG9nb1wiPlxyXG4gICAgICAgICAgICA8QXZvY2FkbyAvPlxyXG4gICAgICAgICAgICA8aDQ+QXZvIFN0b3JlPC9oND5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8bWVudT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxCYXNrZXQgLz5cclxuICAgICAgICAgICAgPHNwYW4+e3N0YXRlLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICAgIDxoNT5DYW5hc3RhPC9oNT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWVudT5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==