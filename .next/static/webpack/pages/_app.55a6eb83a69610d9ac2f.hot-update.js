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
      state = _useAvoCart.state,
      dispatch = _useAvoCart.dispatch;

  console.log(state);
  return __jsx("div", {
    className: "navbar-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("nav", {
    className: "navbar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "navbar__logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx(styles_SVGIcons_Avocado__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "Avo Store"))), __jsx("menu", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx(styles_SVGIcons_Basket__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, state.length), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "Canasta")))));
}

_s(Navbar, "8mKEh05oxnMV2YiagrpJa3ux79M=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLnRzeCJdLCJuYW1lcyI6WyJOYXZiYXIiLCJ1c2VBdm9DYXJ0Iiwic3RhdGUiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUMvQixvQkFBNEJDLDJFQUFVLEVBQXRDO0FBQUEsTUFBUUMsS0FBUixlQUFRQSxLQUFSO0FBQUEsTUFBZUMsUUFBZixlQUFlQSxRQUFmOztBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLENBREYsQ0FERixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9BLEtBQUssQ0FBQ0ksTUFBYixDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLENBREYsQ0FQRixDQURGLENBREY7QUFtQkQ7O0dBdEJ1Qk4sTTtVQUNNQyxtRTs7O0tBRE5ELE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41NWE2ZWI4M2E2OTYxMGQ5YWMyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQXZvQ2FydCB9IGZyb20gJ2NvbnRleHRzL2NhcnRBdm9zQ29udGV4dCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBdm9jYWRvIGZyb20gJ3N0eWxlcy9TVkdJY29ucy9Bdm9jYWRvJ1xyXG5pbXBvcnQgQmFza2V0IGZyb20gJ3N0eWxlcy9TVkdJY29ucy9CYXNrZXQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUF2b0NhcnQoKVxyXG4gIGNvbnNvbGUubG9nKHN0YXRlKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci13cmFwcGVyXCI+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX19sb2dvXCI+XHJcbiAgICAgICAgICAgIDxBdm9jYWRvIC8+XHJcbiAgICAgICAgICAgIDxoND5Bdm8gU3RvcmU8L2g0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxtZW51PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEJhc2tldCAvPlxyXG4gICAgICAgICAgICA8c3Bhbj57c3RhdGUubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgPGg1PkNhbmFzdGE8L2g1PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tZW51PlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9