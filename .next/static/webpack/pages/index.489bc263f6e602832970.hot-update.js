webpackHotUpdate_N_E("pages/index",{

/***/ "./contexts/cartAvosContext.tsx":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Card/Card */ "./components/Card/Card.tsx");
/* harmony import */ var styles_SVGIcons_Avocado__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/SVGIcons/Avocado */ "./styles/SVGIcons/Avocado.tsx");
var _jsxFileName = "C:\\code\\avocado-store\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//import fetch from 'isomorphic-unfetch'


var __N_SSG = true;
function Home(_ref) {
  var _this = this;

  var avocados = _ref.avocados;
  var cartAvos = [];
  return __jsx("div", {
    className: "home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "home__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "Avo", __jsx(styles_SVGIcons_Avocado__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), "Store")), __jsx("div", {
    className: "home__avoList",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, avocados.map(function (avo) {
    return __jsx(_components_Card_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: avo.id,
      avo: avo,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }
    });
  })));
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJhdm9jYWRvcyIsImNhcnRBdm9zIiwibWFwIiwiYXZvIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBOztBQWNlLFNBQVNBLElBQVQsT0FBc0Q7QUFBQTs7QUFBQSxNQUF0Q0MsUUFBc0MsUUFBdENBLFFBQXNDO0FBQ25FLE1BQU1DLFFBQVEsR0FBRyxFQUFqQjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUVFLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLFVBREYsQ0FERixFQVFFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxRQUFRLENBQUNFLEdBQVQsQ0FBYSxVQUFDQyxHQUFEO0FBQUEsV0FDWixNQUFDLDZEQUFEO0FBQU0sU0FBRyxFQUFFQSxHQUFHLENBQUNDLEVBQWY7QUFBbUIsU0FBRyxFQUFFRCxHQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFk7QUFBQSxHQUFiLENBREgsQ0FSRixDQURGO0FBZ0JEO0tBbEJ1QkosSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40ODliYzI2M2Y2ZTYwMjgzMjk3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbi8vaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuaW1wb3J0IENhcmQgZnJvbSAnQGNvbXBvbmVudHMvQ2FyZC9DYXJkJ1xyXG5pbXBvcnQgQXZvY2FkbyBmcm9tICdzdHlsZXMvU1ZHSWNvbnMvQXZvY2FkbydcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgJ2h0dHBzOi8vYXZvY2Fkby1zdG9yZS1pOHBjbGVhcTUtYXZvLXRlYW0udmVyY2VsLmFwcC9hcGkvYXZvJ1xyXG4gIClcclxuICBjb25zdCB7IGRhdGE6IGF2b2NhZG9zIH06IFRBUElBdm9SZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBhdm9jYWRvcyxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgYXZvY2Fkb3MgfTogeyBhdm9jYWRvczogVFByb2R1Y3RbXSB9KSB7XHJcbiAgY29uc3QgY2FydEF2b3MgPSBbXSBhcyBUUHJvZHVjdFtdXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZVwiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJob21lX190aXRsZVwiPlxyXG4gICAgICAgICAgQXZvXHJcbiAgICAgICAgICA8QXZvY2FkbyAvPlxyXG4gICAgICAgICAgU3RvcmVcclxuICAgICAgICA8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lX19hdm9MaXN0XCI+XHJcbiAgICAgICAge2F2b2NhZG9zLm1hcCgoYXZvKSA9PiAoXHJcbiAgICAgICAgICA8Q2FyZCBrZXk9e2F2by5pZH0gYXZvPXthdm99IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=