webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\code\\avocado-store\\pages\\index.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var __N_SSG = true;
function Home(_ref) {
  _s();

  var _this = this;

  var avocados = _ref.avocados;

  //const [avocados, setAvocados] = useState<TProduct[]>([] as TProduct[])
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      avosQuantity = _useState[0],
      setAvosQuantity = _useState[1];

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, "Hello, world! This is Next js application!"), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, "Quantity: ", avosQuantity), avocados.map(function (avo) {
    return __jsx("div", {
      key: avo.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }
    }, __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }
    }, avo.name), __jsx("img", {
      src: avo.image,
      title: avo.name,
      alt: avo.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/product/".concat(avo.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    }, avo.id));
  }));
}

_s(Home, "F5EWikPv/C5g0NhTaijSTJopGE0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJhdm9jYWRvcyIsInVzZVN0YXRlIiwiYXZvc1F1YW50aXR5Iiwic2V0QXZvc1F1YW50aXR5IiwibWFwIiwiYXZvIiwibmFtZSIsImltYWdlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQWVlLFNBQVNBLElBQVQsT0FBc0Q7QUFBQTs7QUFBQTs7QUFBQSxNQUF0Q0MsUUFBc0MsUUFBdENBLFFBQXNDOztBQUNuRTtBQUNBLGtCQUF3Q0Msc0RBQVEsQ0FBQyxDQUFELENBQWhEO0FBQUEsTUFBT0MsWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFDQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtEQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBZUQsWUFBZixDQUZGLEVBR0dGLFFBQVEsQ0FBQ0ksR0FBVCxDQUFhLFVBQUNDLEdBQUQ7QUFBQSxXQUNaO0FBQUssU0FBRyxFQUFFQSxHQUFHLENBQUNDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0QsR0FBRyxDQUFDQyxJQUFULENBREYsRUFFRTtBQUFLLFNBQUcsRUFBRUQsR0FBRyxDQUFDRSxLQUFkO0FBQXFCLFdBQUssRUFBRUYsR0FBRyxDQUFDQyxJQUFoQztBQUFzQyxTQUFHLEVBQUVELEdBQUcsQ0FBQ0MsSUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBR0UsTUFBQyxnREFBRDtBQUFNLFVBQUkscUJBQWNELEdBQUcsQ0FBQ0csRUFBbEIsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQW1DSCxHQUFHLENBQUNHLEVBQXZDLENBSEYsQ0FEWTtBQUFBLEdBQWIsQ0FISCxDQURGO0FBYUQ7O0dBaEJ1QlQsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ZjVkZmQ5YmU3ODkzZTcyZGM0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICdodHRwczovL2F2b2NhZG8tc3RvcmUtaThwY2xlYXE1LWF2by10ZWFtLnZlcmNlbC5hcHAvYXBpL2F2bydcclxuICApXHJcbiAgY29uc3QgeyBkYXRhOiBhdm9jYWRvcyB9OiBUQVBJQXZvUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgYXZvY2Fkb3MsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGF2b2NhZG9zIH06IHsgYXZvY2Fkb3M6IFRQcm9kdWN0W10gfSkge1xyXG4gIC8vY29uc3QgW2F2b2NhZG9zLCBzZXRBdm9jYWRvc10gPSB1c2VTdGF0ZTxUUHJvZHVjdFtdPihbXSBhcyBUUHJvZHVjdFtdKVxyXG4gIGNvbnN0IFthdm9zUXVhbnRpdHksIHNldEF2b3NRdWFudGl0eV0gPSB1c2VTdGF0ZSgwKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+SGVsbG8sIHdvcmxkISBUaGlzIGlzIE5leHQganMgYXBwbGljYXRpb24hPC9oMT5cclxuICAgICAgPGgzPlF1YW50aXR5OiB7YXZvc1F1YW50aXR5fTwvaDM+XHJcbiAgICAgIHthdm9jYWRvcy5tYXAoKGF2bykgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXthdm8ubmFtZX0+XHJcbiAgICAgICAgICA8bGk+e2F2by5uYW1lfTwvbGk+XHJcbiAgICAgICAgICA8aW1nIHNyYz17YXZvLmltYWdlfSB0aXRsZT17YXZvLm5hbWV9IGFsdD17YXZvLm5hbWV9IC8+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3QvJHthdm8uaWR9YH0+e2F2by5pZH08L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=