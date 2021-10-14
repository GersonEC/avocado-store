webpackHotUpdate_N_E("pages/_app",{

/***/ "./contexts/cartAvosContext.tsx":
/*!**************************************!*\
  !*** ./contexts/cartAvosContext.tsx ***!
  \**************************************/
/*! exports provided: CartProvider, useAvoCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartProvider", function() { return CartProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAvoCart", function() { return useAvoCart; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "C:\\code\\avocado-store\\contexts\\cartAvosContext.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];

var CartAvosContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createContext"](undefined);

function cartAvosReducer(state, action) {
  switch (action.type) {
    case 'add':
      {
        var _action$payload = action.payload,
            cartAvo = _action$payload.cartAvo,
            quantity = _action$payload.quantity;
        var item = state.find(function (el) {
          return el.cartAvo.id === cartAvo.id;
        });

        var newState = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state);

        if (item) {
          //update
          item.quantity += quantity;
          var index = newState.findIndex(function (el) {
            return el.cartAvo.id === cartAvo.id;
          });
          newState[index] = item;
        } else {
          //add
          newState.push(action.payload);
        }

        return newState;
      }

    default:
      {
        throw new Error("Unhandled action type: ".concat(action.type));
      }
  }
}

var initialState = [];

function CartProvider(_ref) {
  _s();

  var children = _ref.children;

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_2__["useReducer"](cartAvosReducer, initialState),
      _React$useReducer2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  var value = {
    state: state,
    dispatch: dispatch
  };
  return __jsx(CartAvosContext.Provider, {
    value: value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, children);
}

_s(CartProvider, "6JWkGZ32UPfojeNx+xqn8ZU8A0Q=");

_c = CartProvider;

function useAvoCart() {
  _s2();

  var context = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](CartAvosContext);

  if (context === undefined) {
    throw new Error('useAvoCart must be used within a CartAvosContext');
  }

  return context;
}

_s2(useAvoCart, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");



var _c;

$RefreshReg$(_c, "CartProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dHMvY2FydEF2b3NDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJDYXJ0QXZvc0NvbnRleHQiLCJSZWFjdCIsInVuZGVmaW5lZCIsImNhcnRBdm9zUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJjYXJ0QXZvIiwicXVhbnRpdHkiLCJpdGVtIiwiZmluZCIsImVsIiwiaWQiLCJuZXdTdGF0ZSIsImluZGV4IiwiZmluZEluZGV4IiwicHVzaCIsIkVycm9yIiwiaW5pdGlhbFN0YXRlIiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInZhbHVlIiwidXNlQXZvQ2FydCIsImNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWNBLElBQU1BLGVBQWUsZ0JBQUdDLG1EQUFBLENBRXRCQyxTQUZzQixDQUF4Qjs7QUFJQSxTQUFTQyxlQUFULENBQXlCQyxLQUF6QixFQUE2Q0MsTUFBN0MsRUFBaUU7QUFDL0QsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBSyxLQUFMO0FBQVk7QUFDViw4QkFBOEJELE1BQU0sQ0FBQ0UsT0FBckM7QUFBQSxZQUFRQyxPQUFSLG1CQUFRQSxPQUFSO0FBQUEsWUFBaUJDLFFBQWpCLG1CQUFpQkEsUUFBakI7QUFDQSxZQUFNQyxJQUFJLEdBQUdOLEtBQUssQ0FBQ08sSUFBTixDQUFXLFVBQUNDLEVBQUQ7QUFBQSxpQkFBUUEsRUFBRSxDQUFDSixPQUFILENBQVdLLEVBQVgsS0FBa0JMLE9BQU8sQ0FBQ0ssRUFBbEM7QUFBQSxTQUFYLENBQWI7O0FBQ0EsWUFBTUMsUUFBUSxHQUFHLDZGQUFJVixLQUFQLENBQWQ7O0FBQ0EsWUFBSU0sSUFBSixFQUFVO0FBQ1I7QUFDQUEsY0FBSSxDQUFDRCxRQUFMLElBQWlCQSxRQUFqQjtBQUNBLGNBQU1NLEtBQUssR0FBR0QsUUFBUSxDQUFDRSxTQUFULENBQW1CLFVBQUNKLEVBQUQ7QUFBQSxtQkFBUUEsRUFBRSxDQUFDSixPQUFILENBQVdLLEVBQVgsS0FBa0JMLE9BQU8sQ0FBQ0ssRUFBbEM7QUFBQSxXQUFuQixDQUFkO0FBQ0FDLGtCQUFRLENBQUNDLEtBQUQsQ0FBUixHQUFrQkwsSUFBbEI7QUFDRCxTQUxELE1BS087QUFDTDtBQUNBSSxrQkFBUSxDQUFDRyxJQUFULENBQWNaLE1BQU0sQ0FBQ0UsT0FBckI7QUFDRDs7QUFDRCxlQUFPTyxRQUFQO0FBQ0Q7O0FBQ0Q7QUFBUztBQUNQLGNBQU0sSUFBSUksS0FBSixrQ0FBb0NiLE1BQU0sQ0FBQ0MsSUFBM0MsRUFBTjtBQUNEO0FBbEJIO0FBb0JEOztBQUVELElBQU1hLFlBQVksR0FBRyxFQUFyQjs7QUFFQSxTQUFTQyxZQUFULE9BQXlDO0FBQUE7O0FBQUEsTUFBakJDLFFBQWlCLFFBQWpCQSxRQUFpQjs7QUFDdkMsMEJBQTBCcEIsZ0RBQUEsQ0FBaUJFLGVBQWpCLEVBQWtDZ0IsWUFBbEMsQ0FBMUI7QUFBQTtBQUFBLE1BQU9mLEtBQVA7QUFBQSxNQUFja0IsUUFBZDs7QUFDQSxNQUFNQyxLQUFLLEdBQUc7QUFBRW5CLFNBQUssRUFBTEEsS0FBRjtBQUFTa0IsWUFBUSxFQUFSQTtBQUFULEdBQWQ7QUFDQSxTQUNFLE1BQUMsZUFBRCxDQUFpQixRQUFqQjtBQUEwQixTQUFLLEVBQUVDLEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0YsUUFESCxDQURGO0FBS0Q7O0dBUlFELFk7O0tBQUFBLFk7O0FBVVQsU0FBU0ksVUFBVCxHQUFzQjtBQUFBOztBQUNwQixNQUFNQyxPQUFPLEdBQUd4QixnREFBQSxDQUFpQkQsZUFBakIsQ0FBaEI7O0FBQ0EsTUFBSXlCLE9BQU8sS0FBS3ZCLFNBQWhCLEVBQTJCO0FBQ3pCLFVBQU0sSUFBSWdCLEtBQUosQ0FBVSxrREFBVixDQUFOO0FBQ0Q7O0FBQ0QsU0FBT08sT0FBUDtBQUNEOztJQU5RRCxVOztBQVFUIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZGVmYTNhY2Q4ZTQyOTk4OWMzZmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW50ZXJmYWNlIENhcnRTdGF0ZSB7XHJcbiAgY2FydEF2bzogVFByb2R1Y3RcclxuICBxdWFudGl0eTogbnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBDYXJ0QWN0aW9uIHtcclxuICB0eXBlOiAnYWRkJ1xyXG4gIHBheWxvYWQ6IENhcnRTdGF0ZVxyXG59XHJcblxyXG50eXBlIERpc3BhdGNoID0gKGFjdGlvbjogQ2FydEFjdGlvbikgPT4gdm9pZFxyXG5cclxuY29uc3QgQ2FydEF2b3NDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxcclxuICB7IHN0YXRlOiBDYXJ0U3RhdGVbXTsgZGlzcGF0Y2g6IERpc3BhdGNoIH0gfCB1bmRlZmluZWRcclxuPih1bmRlZmluZWQpXHJcblxyXG5mdW5jdGlvbiBjYXJ0QXZvc1JlZHVjZXIoc3RhdGU6IENhcnRTdGF0ZVtdLCBhY3Rpb246IENhcnRBY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdhZGQnOiB7XHJcbiAgICAgIGNvbnN0IHsgY2FydEF2bywgcXVhbnRpdHkgfSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBzdGF0ZS5maW5kKChlbCkgPT4gZWwuY2FydEF2by5pZCA9PT0gY2FydEF2by5pZClcclxuICAgICAgY29uc3QgbmV3U3RhdGUgPSBbLi4uc3RhdGVdXHJcbiAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgLy91cGRhdGVcclxuICAgICAgICBpdGVtLnF1YW50aXR5ICs9IHF1YW50aXR5XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBuZXdTdGF0ZS5maW5kSW5kZXgoKGVsKSA9PiBlbC5jYXJ0QXZvLmlkID09PSBjYXJ0QXZvLmlkKVxyXG4gICAgICAgIG5ld1N0YXRlW2luZGV4XSA9IGl0ZW1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvL2FkZFxyXG4gICAgICAgIG5ld1N0YXRlLnB1c2goYWN0aW9uLnBheWxvYWQpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5ld1N0YXRlXHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkIGFjdGlvbiB0eXBlOiAke2FjdGlvbi50eXBlfWApXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSBbXSBhcyBDYXJ0U3RhdGVbXVxyXG5cclxuZnVuY3Rpb24gQ2FydFByb3ZpZGVyKHsgY2hpbGRyZW4gfTogYW55KSB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKGNhcnRBdm9zUmVkdWNlciwgaW5pdGlhbFN0YXRlKVxyXG4gIGNvbnN0IHZhbHVlID0geyBzdGF0ZSwgZGlzcGF0Y2ggfVxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydEF2b3NDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ2FydEF2b3NDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gdXNlQXZvQ2FydCgpIHtcclxuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChDYXJ0QXZvc0NvbnRleHQpXHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VBdm9DYXJ0IG11c3QgYmUgdXNlZCB3aXRoaW4gYSBDYXJ0QXZvc0NvbnRleHQnKVxyXG4gIH1cclxuICByZXR1cm4gY29udGV4dFxyXG59XHJcblxyXG5leHBvcnQgeyBDYXJ0UHJvdmlkZXIsIHVzZUF2b0NhcnQgfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9