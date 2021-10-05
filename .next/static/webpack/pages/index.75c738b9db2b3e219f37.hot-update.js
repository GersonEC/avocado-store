webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar/Navbar */ "./components/Navbar/Navbar.tsx");
var _jsxFileName = "C:\\code\\avocado-store\\pages\\index.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Home() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      avocados = _useState[0],
      setAvocados = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      avosQuantity = _useState2[0],
      setAvosQuantity = _useState2[1];

  var pro = [];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.fetch('/api/avo').then(function (response) {
      return response.json();
    }).then(function (_ref) {
      var data = _ref.data,
          length = _ref.length;
      setAvocados(data);
      setAvosQuantity(length);
    });
  }, []);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, "Hello, world!"), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, "Quantity: ", avosQuantity), avocados.map(function (avo) {
    return __jsx("li", {
      key: avo.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }
    }, avo.name);
  }));
}

_s(Home, "qTTQc4mKk39YFJMRC2Pp8P00UyY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsImF2b2NhZG9zIiwic2V0QXZvY2Fkb3MiLCJhdm9zUXVhbnRpdHkiLCJzZXRBdm9zUXVhbnRpdHkiLCJwcm8iLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwibGVuZ3RoIiwibWFwIiwiYXZvIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUM3QixrQkFBZ0NDLHNEQUFRLENBQWEsRUFBYixDQUF4QztBQUFBLE1BQU9DLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQXdDRixzREFBUSxDQUFDLENBQUQsQ0FBaEQ7QUFBQSxNQUFPRyxZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUNBLE1BQU1DLEdBQVksR0FBRyxFQUFyQjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsVUFBTSxDQUNIQyxLQURILENBQ1MsVUFEVCxFQUVHQyxJQUZILENBRVEsVUFBQ0MsUUFBRDtBQUFBLGFBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFkO0FBQUEsS0FGUixFQUdHRixJQUhILENBR1EsZ0JBQXNCO0FBQUEsVUFBbkJHLElBQW1CLFFBQW5CQSxJQUFtQjtBQUFBLFVBQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUMxQlgsaUJBQVcsQ0FBQ1UsSUFBRCxDQUFYO0FBQ0FSLHFCQUFlLENBQUNTLE1BQUQsQ0FBZjtBQUNELEtBTkg7QUFPRCxHQVJRLEVBUU4sRUFSTSxDQUFUO0FBVUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBZVYsWUFBZixDQUhGLEVBSUdGLFFBQVEsQ0FBQ2EsR0FBVCxDQUFhLFVBQUNDLEdBQUQ7QUFBQSxXQUNaO0FBQUksU0FBRyxFQUFFQSxHQUFHLENBQUNDLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFvQkQsR0FBRyxDQUFDQyxJQUF4QixDQURZO0FBQUEsR0FBYixDQUpILENBREY7QUFVRDs7R0F6QnVCakIsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NWM3MzhiOWRiMmIzZTIxOWYzNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW2F2b2NhZG9zLCBzZXRBdm9jYWRvc10gPSB1c2VTdGF0ZTxUUHJvZHVjdFtdPihbXSBhcyBUUHJvZHVjdFtdKVxyXG4gIGNvbnN0IFthdm9zUXVhbnRpdHksIHNldEF2b3NRdWFudGl0eV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IHBybzogUHJvdmFbXSA9IFtdXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3dcclxuICAgICAgLmZldGNoKCcvYXBpL2F2bycpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoeyBkYXRhLCBsZW5ndGggfSkgPT4ge1xyXG4gICAgICAgIHNldEF2b2NhZG9zKGRhdGEpXHJcbiAgICAgICAgc2V0QXZvc1F1YW50aXR5KGxlbmd0aClcclxuICAgICAgfSlcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPGgxPkhlbGxvLCB3b3JsZCE8L2gxPlxyXG4gICAgICA8aDM+UXVhbnRpdHk6IHthdm9zUXVhbnRpdHl9PC9oMz5cclxuICAgICAge2F2b2NhZG9zLm1hcCgoYXZvKSA9PiAoXHJcbiAgICAgICAgPGxpIGtleT17YXZvLm5hbWV9Pnthdm8ubmFtZX08L2xpPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9