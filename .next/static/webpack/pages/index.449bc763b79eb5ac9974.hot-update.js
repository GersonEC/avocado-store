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

  var pro = [{
    name: 'Gerson'
  }];
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
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, "Hello, world!"), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "Quantity: ", avosQuantity, " "), avocados.map(function (avo) {
    return __jsx("li", {
      key: avo.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsImF2b2NhZG9zIiwic2V0QXZvY2Fkb3MiLCJhdm9zUXVhbnRpdHkiLCJzZXRBdm9zUXVhbnRpdHkiLCJwcm8iLCJuYW1lIiwidXNlRWZmZWN0Iiwid2luZG93IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImxlbmd0aCIsIm1hcCIsImF2byJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUM3QixrQkFBZ0NDLHNEQUFRLENBQWEsRUFBYixDQUF4QztBQUFBLE1BQU9DLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQXdDRixzREFBUSxDQUFDLENBQUQsQ0FBaEQ7QUFBQSxNQUFPRyxZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUNBLE1BQU1DLEdBQVksR0FBRyxDQUNuQjtBQUNFQyxRQUFJLEVBQUU7QUFEUixHQURtQixDQUFyQjtBQU1BQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsVUFBTSxDQUNIQyxLQURILENBQ1MsVUFEVCxFQUVHQyxJQUZILENBRVEsVUFBQ0MsUUFBRDtBQUFBLGFBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFkO0FBQUEsS0FGUixFQUdHRixJQUhILENBR1EsZ0JBQXNCO0FBQUEsVUFBbkJHLElBQW1CLFFBQW5CQSxJQUFtQjtBQUFBLFVBQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUMxQlosaUJBQVcsQ0FBQ1csSUFBRCxDQUFYO0FBQ0FULHFCQUFlLENBQUNVLE1BQUQsQ0FBZjtBQUNELEtBTkg7QUFPRCxHQVJRLEVBUU4sRUFSTSxDQUFUO0FBVUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDYVgsWUFEYixNQUhGLEVBTUdGLFFBQVEsQ0FBQ2MsR0FBVCxDQUFhLFVBQUNDLEdBQUQ7QUFBQSxXQUNaO0FBQUksU0FBRyxFQUFFQSxHQUFHLENBQUNWLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFvQlUsR0FBRyxDQUFDVixJQUF4QixDQURZO0FBQUEsR0FBYixDQU5ILENBREY7QUFZRDs7R0EvQnVCUCxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ0OWJjNzYzYjc5ZWI1YWM5OTc0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbYXZvY2Fkb3MsIHNldEF2b2NhZG9zXSA9IHVzZVN0YXRlPFRQcm9kdWN0W10+KFtdIGFzIFRQcm9kdWN0W10pXHJcbiAgY29uc3QgW2F2b3NRdWFudGl0eSwgc2V0QXZvc1F1YW50aXR5XSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgcHJvOiBQcm92YVtdID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnR2Vyc29uJyxcclxuICAgIH0sXHJcbiAgXVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93XHJcbiAgICAgIC5mZXRjaCgnL2FwaS9hdm8nKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKHsgZGF0YSwgbGVuZ3RoIH0pID0+IHtcclxuICAgICAgICBzZXRBdm9jYWRvcyhkYXRhKVxyXG4gICAgICAgIHNldEF2b3NRdWFudGl0eShsZW5ndGgpXHJcbiAgICAgIH0pXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TmF2YmFyIC8+XHJcbiAgICAgIDxoMT5IZWxsbywgd29ybGQhPC9oMT5cclxuICAgICAgPGgzPlxyXG4gICAgICAgIFF1YW50aXR5OiB7YXZvc1F1YW50aXR5fSB7fVxyXG4gICAgICA8L2gzPlxyXG4gICAgICB7YXZvY2Fkb3MubWFwKChhdm8pID0+IChcclxuICAgICAgICA8bGkga2V5PXthdm8ubmFtZX0+e2F2by5uYW1lfTwvbGk+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=