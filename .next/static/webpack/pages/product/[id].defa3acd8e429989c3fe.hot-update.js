webpackHotUpdate_N_E("pages/product/[id]",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dHMvY2FydEF2b3NDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJDYXJ0QXZvc0NvbnRleHQiLCJSZWFjdCIsInVuZGVmaW5lZCIsImNhcnRBdm9zUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJjYXJ0QXZvIiwicXVhbnRpdHkiLCJpdGVtIiwiZmluZCIsImVsIiwiaWQiLCJuZXdTdGF0ZSIsImluZGV4IiwiZmluZEluZGV4IiwicHVzaCIsIkVycm9yIiwiaW5pdGlhbFN0YXRlIiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInZhbHVlIiwidXNlQXZvQ2FydCIsImNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWNBLElBQU1BLGVBQWUsZ0JBQUdDLG1EQUFBLENBRXRCQyxTQUZzQixDQUF4Qjs7QUFJQSxTQUFTQyxlQUFULENBQXlCQyxLQUF6QixFQUE2Q0MsTUFBN0MsRUFBaUU7QUFDL0QsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBSyxLQUFMO0FBQVk7QUFDViw4QkFBOEJELE1BQU0sQ0FBQ0UsT0FBckM7QUFBQSxZQUFRQyxPQUFSLG1CQUFRQSxPQUFSO0FBQUEsWUFBaUJDLFFBQWpCLG1CQUFpQkEsUUFBakI7QUFDQSxZQUFNQyxJQUFJLEdBQUdOLEtBQUssQ0FBQ08sSUFBTixDQUFXLFVBQUNDLEVBQUQ7QUFBQSxpQkFBUUEsRUFBRSxDQUFDSixPQUFILENBQVdLLEVBQVgsS0FBa0JMLE9BQU8sQ0FBQ0ssRUFBbEM7QUFBQSxTQUFYLENBQWI7O0FBQ0EsWUFBTUMsUUFBUSxHQUFHLDZGQUFJVixLQUFQLENBQWQ7O0FBQ0EsWUFBSU0sSUFBSixFQUFVO0FBQ1I7QUFDQUEsY0FBSSxDQUFDRCxRQUFMLElBQWlCQSxRQUFqQjtBQUNBLGNBQU1NLEtBQUssR0FBR0QsUUFBUSxDQUFDRSxTQUFULENBQW1CLFVBQUNKLEVBQUQ7QUFBQSxtQkFBUUEsRUFBRSxDQUFDSixPQUFILENBQVdLLEVBQVgsS0FBa0JMLE9BQU8sQ0FBQ0ssRUFBbEM7QUFBQSxXQUFuQixDQUFkO0FBQ0FDLGtCQUFRLENBQUNDLEtBQUQsQ0FBUixHQUFrQkwsSUFBbEI7QUFDRCxTQUxELE1BS087QUFDTDtBQUNBSSxrQkFBUSxDQUFDRyxJQUFULENBQWNaLE1BQU0sQ0FBQ0UsT0FBckI7QUFDRDs7QUFDRCxlQUFPTyxRQUFQO0FBQ0Q7O0FBQ0Q7QUFBUztBQUNQLGNBQU0sSUFBSUksS0FBSixrQ0FBb0NiLE1BQU0sQ0FBQ0MsSUFBM0MsRUFBTjtBQUNEO0FBbEJIO0FBb0JEOztBQUVELElBQU1hLFlBQVksR0FBRyxFQUFyQjs7QUFFQSxTQUFTQyxZQUFULE9BQXlDO0FBQUE7O0FBQUEsTUFBakJDLFFBQWlCLFFBQWpCQSxRQUFpQjs7QUFDdkMsMEJBQTBCcEIsZ0RBQUEsQ0FBaUJFLGVBQWpCLEVBQWtDZ0IsWUFBbEMsQ0FBMUI7QUFBQTtBQUFBLE1BQU9mLEtBQVA7QUFBQSxNQUFja0IsUUFBZDs7QUFDQSxNQUFNQyxLQUFLLEdBQUc7QUFBRW5CLFNBQUssRUFBTEEsS0FBRjtBQUFTa0IsWUFBUSxFQUFSQTtBQUFULEdBQWQ7QUFDQSxTQUNFLE1BQUMsZUFBRCxDQUFpQixRQUFqQjtBQUEwQixTQUFLLEVBQUVDLEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0YsUUFESCxDQURGO0FBS0Q7O0dBUlFELFk7O0tBQUFBLFk7O0FBVVQsU0FBU0ksVUFBVCxHQUFzQjtBQUFBOztBQUNwQixNQUFNQyxPQUFPLEdBQUd4QixnREFBQSxDQUFpQkQsZUFBakIsQ0FBaEI7O0FBQ0EsTUFBSXlCLE9BQU8sS0FBS3ZCLFNBQWhCLEVBQTJCO0FBQ3pCLFVBQU0sSUFBSWdCLEtBQUosQ0FBVSxrREFBVixDQUFOO0FBQ0Q7O0FBQ0QsU0FBT08sT0FBUDtBQUNEOztJQU5RRCxVOztBQVFUIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QvW2lkXS5kZWZhM2FjZDhlNDI5OTg5YzNmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbnRlcmZhY2UgQ2FydFN0YXRlIHtcclxuICBjYXJ0QXZvOiBUUHJvZHVjdFxyXG4gIHF1YW50aXR5OiBudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIENhcnRBY3Rpb24ge1xyXG4gIHR5cGU6ICdhZGQnXHJcbiAgcGF5bG9hZDogQ2FydFN0YXRlXHJcbn1cclxuXHJcbnR5cGUgRGlzcGF0Y2ggPSAoYWN0aW9uOiBDYXJ0QWN0aW9uKSA9PiB2b2lkXHJcblxyXG5jb25zdCBDYXJ0QXZvc0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PFxyXG4gIHsgc3RhdGU6IENhcnRTdGF0ZVtdOyBkaXNwYXRjaDogRGlzcGF0Y2ggfSB8IHVuZGVmaW5lZFxyXG4+KHVuZGVmaW5lZClcclxuXHJcbmZ1bmN0aW9uIGNhcnRBdm9zUmVkdWNlcihzdGF0ZTogQ2FydFN0YXRlW10sIGFjdGlvbjogQ2FydEFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ2FkZCc6IHtcclxuICAgICAgY29uc3QgeyBjYXJ0QXZvLCBxdWFudGl0eSB9ID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgY29uc3QgaXRlbSA9IHN0YXRlLmZpbmQoKGVsKSA9PiBlbC5jYXJ0QXZvLmlkID09PSBjYXJ0QXZvLmlkKVxyXG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IFsuLi5zdGF0ZV1cclxuICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAvL3VwZGF0ZVxyXG4gICAgICAgIGl0ZW0ucXVhbnRpdHkgKz0gcXVhbnRpdHlcclxuICAgICAgICBjb25zdCBpbmRleCA9IG5ld1N0YXRlLmZpbmRJbmRleCgoZWwpID0+IGVsLmNhcnRBdm8uaWQgPT09IGNhcnRBdm8uaWQpXHJcbiAgICAgICAgbmV3U3RhdGVbaW5kZXhdID0gaXRlbVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vYWRkXHJcbiAgICAgICAgbmV3U3RhdGUucHVzaChhY3Rpb24ucGF5bG9hZClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbmV3U3RhdGVcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmhhbmRsZWQgYWN0aW9uIHR5cGU6ICR7YWN0aW9uLnR5cGV9YClcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdIGFzIENhcnRTdGF0ZVtdXHJcblxyXG5mdW5jdGlvbiBDYXJ0UHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBhbnkpIHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIoY2FydEF2b3NSZWR1Y2VyLCBpbml0aWFsU3RhdGUpXHJcbiAgY29uc3QgdmFsdWUgPSB7IHN0YXRlLCBkaXNwYXRjaCB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0QXZvc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9DYXJ0QXZvc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VBdm9DYXJ0KCkge1xyXG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KENhcnRBdm9zQ29udGV4dClcclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZUF2b0NhcnQgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIENhcnRBdm9zQ29udGV4dCcpXHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0XHJcbn1cclxuXHJcbmV4cG9ydCB7IENhcnRQcm92aWRlciwgdXNlQXZvQ2FydCB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=