"use strict";
self["webpackHotUpdate_N_E"]("pages/cart",{

/***/ "./components/CheckoutForm/CheckoutForm.tsx":
/*!**************************************************!*\
  !*** ./components/CheckoutForm/CheckoutForm.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutForm": function() { return /* binding */ CheckoutForm; }
/* harmony export */ });
/* harmony import */ var C_code_avocado_store_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_code_avocado_store_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_code_avocado_store_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_code_avocado_store_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\code\\avocado-store\\components\\CheckoutForm\\CheckoutForm.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var CheckoutForm = function CheckoutForm() {
  _s();

  var stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useStripe)();
  var elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useElements)();

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = (0,C_code_avocado_store_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_code_avocado_store_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {
      var cardElement, _yield$stripe$createP, error, paymentMethod, _elements$getElement, _ref2, id, _yield$axios$post, data;

      return C_code_avocado_store_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // Block native form submission.
              event.preventDefault();

              if (!(!stripe || !elements)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              // Get a reference to a mounted CardElement. Elements knows how
              // to find your CardElement because there can only ever be one of
              // each type of element.
              cardElement = elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.CardElement); // Use your card Element with other Stripe.js APIs

              _context.next = 6;
              return stripe.createPaymentMethod({
                type: 'card',
                card: cardElement
              });

            case 6:
              _yield$stripe$createP = _context.sent;
              error = _yield$stripe$createP.error;
              paymentMethod = _yield$stripe$createP.paymentMethod;

              if (!error) {
                _context.next = 13;
                break;
              }

              console.log('[error]', error);
              _context.next = 20;
              break;

            case 13:
              _ref2 = paymentMethod, id = _ref2.id;
              _context.next = 16;
              return axios__WEBPACK_IMPORTED_MODULE_3___default().post('http://localhost:3001/api/checkout', {
                id: id,
                amount: 2.5 * 100
              });

            case 16:
              _yield$axios$post = _context.sent;
              data = _yield$axios$post.data;
              console.log(data);
              (_elements$getElement = elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.CardElement)) === null || _elements$getElement === void 0 ? void 0 : _elements$getElement.clear();

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.CardElement, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
      type: "submit",
      disabled: !stripe,
      children: "Pay"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, _this);
};

_s(CheckoutForm, "EKvoGMX7lxsZ5SGPpYu2aKFzClQ=", false, function () {
  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useStripe, _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useElements];
});

_c = CheckoutForm;

var _c;

$RefreshReg$(_c, "CheckoutForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FydC5lNDllYzhkMDJhY2MyMGE5MGJmMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBTU8sSUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUNoQyxNQUFNQyxNQUFNLEdBQUdKLGtFQUFTLEVBQXhCO0FBQ0EsTUFBTUssUUFBUSxHQUFHSixvRUFBVyxFQUE1Qjs7QUFFQSxNQUFNSyxZQUFZO0FBQUEsK1JBQUcsaUJBQU9DLEtBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQjtBQUNBQSxjQUFBQSxLQUFLLENBQUNDLGNBQU47O0FBRm1CLG9CQUlmLENBQUNKLE1BQUQsSUFBVyxDQUFDQyxRQUpHO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBVW5CO0FBQ0E7QUFDQTtBQUNNSSxjQUFBQSxXQWJhLEdBYUNKLFFBQVEsQ0FBQ0ssVUFBVCxDQUFvQlgsZ0VBQXBCLENBYkQsRUFlbkI7O0FBZm1CO0FBQUEscUJBZ0JvQkssTUFBTSxDQUFDTyxtQkFBUCxDQUEyQjtBQUNoRUMsZ0JBQUFBLElBQUksRUFBRSxNQUQwRDtBQUVoRUMsZ0JBQUFBLElBQUksRUFBRUo7QUFGMEQsZUFBM0IsQ0FoQnBCOztBQUFBO0FBQUE7QUFnQlhLLGNBQUFBLEtBaEJXLHlCQWdCWEEsS0FoQlc7QUFnQkpDLGNBQUFBLGFBaEJJLHlCQWdCSkEsYUFoQkk7O0FBQUEsbUJBcUJmRCxLQXJCZTtBQUFBO0FBQUE7QUFBQTs7QUFzQmpCRSxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCSCxLQUF2QjtBQXRCaUI7QUFBQTs7QUFBQTtBQUFBLHNCQXdCRkMsYUF4QkUsRUF3QlRHLEVBeEJTLFNBd0JUQSxFQXhCUztBQUFBO0FBQUEscUJBeUJNaEIsaURBQUEsQ0FBVyxvQ0FBWCxFQUFpRDtBQUN0RWdCLGdCQUFBQSxFQUFFLEVBQUZBLEVBRHNFO0FBRXRFRSxnQkFBQUEsTUFBTSxFQUFFLE1BQU07QUFGd0QsZUFBakQsQ0F6Qk47O0FBQUE7QUFBQTtBQXlCVEMsY0FBQUEsSUF6QlMscUJBeUJUQSxJQXpCUztBQTZCakJMLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxJQUFaO0FBQ0Esc0NBQUFoQixRQUFRLENBQUNLLFVBQVQsQ0FBb0JYLGdFQUFwQiwrRUFBa0N1QixLQUFsQzs7QUE5QmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpoQixZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQWtDQSxzQkFDRTtBQUFNLFlBQVEsRUFBRUEsWUFBaEI7QUFBQSw0QkFDRSw4REFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQXNCLGNBQVEsRUFBRSxDQUFDRixNQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBUUQsQ0E5Q007O0dBQU1EO1VBQ0lILGdFQUNFQzs7O0tBRk5FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hlY2tvdXRGb3JtL0NoZWNrb3V0Rm9ybS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZEVsZW1lbnQsIHVzZVN0cmlwZSwgdXNlRWxlbWVudHMgfSBmcm9tICdAc3RyaXBlL3JlYWN0LXN0cmlwZS1qcydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuaW50ZXJmYWNlIENoZWNrb3V0Rm9ybVByb3BzIHtcclxuICBhbW91bnQ6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2hlY2tvdXRGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IHN0cmlwZSA9IHVzZVN0cmlwZSgpXHJcbiAgY29uc3QgZWxlbWVudHMgPSB1c2VFbGVtZW50cygpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogYW55KSA9PiB7XHJcbiAgICAvLyBCbG9jayBuYXRpdmUgZm9ybSBzdWJtaXNzaW9uLlxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgIGlmICghc3RyaXBlIHx8ICFlbGVtZW50cykge1xyXG4gICAgICAvLyBTdHJpcGUuanMgaGFzIG5vdCBsb2FkZWQgeWV0LiBNYWtlIHN1cmUgdG8gZGlzYWJsZVxyXG4gICAgICAvLyBmb3JtIHN1Ym1pc3Npb24gdW50aWwgU3RyaXBlLmpzIGhhcyBsb2FkZWQuXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCBhIHJlZmVyZW5jZSB0byBhIG1vdW50ZWQgQ2FyZEVsZW1lbnQuIEVsZW1lbnRzIGtub3dzIGhvd1xyXG4gICAgLy8gdG8gZmluZCB5b3VyIENhcmRFbGVtZW50IGJlY2F1c2UgdGhlcmUgY2FuIG9ubHkgZXZlciBiZSBvbmUgb2ZcclxuICAgIC8vIGVhY2ggdHlwZSBvZiBlbGVtZW50LlxyXG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSBlbGVtZW50cy5nZXRFbGVtZW50KENhcmRFbGVtZW50KVxyXG5cclxuICAgIC8vIFVzZSB5b3VyIGNhcmQgRWxlbWVudCB3aXRoIG90aGVyIFN0cmlwZS5qcyBBUElzXHJcbiAgICBjb25zdCB7IGVycm9yLCBwYXltZW50TWV0aG9kIH0gPSBhd2FpdCBzdHJpcGUuY3JlYXRlUGF5bWVudE1ldGhvZCh7XHJcbiAgICAgIHR5cGU6ICdjYXJkJyxcclxuICAgICAgY2FyZDogY2FyZEVsZW1lbnQhLFxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1tlcnJvcl0nLCBlcnJvcilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHsgaWQgfSA9IHBheW1lbnRNZXRob2QhXHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9jaGVja291dCcsIHtcclxuICAgICAgICBpZCxcclxuICAgICAgICBhbW91bnQ6IDIuNSAqIDEwMCxcclxuICAgICAgfSlcclxuICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgZWxlbWVudHMuZ2V0RWxlbWVudChDYXJkRWxlbWVudCk/LmNsZWFyKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgPENhcmRFbGVtZW50IC8+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXshc3RyaXBlfT5cclxuICAgICAgICBQYXlcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJDYXJkRWxlbWVudCIsInVzZVN0cmlwZSIsInVzZUVsZW1lbnRzIiwiYXhpb3MiLCJDaGVja291dEZvcm0iLCJzdHJpcGUiLCJlbGVtZW50cyIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjYXJkRWxlbWVudCIsImdldEVsZW1lbnQiLCJjcmVhdGVQYXltZW50TWV0aG9kIiwidHlwZSIsImNhcmQiLCJlcnJvciIsInBheW1lbnRNZXRob2QiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJwb3N0IiwiYW1vdW50IiwiZGF0YSIsImNsZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==