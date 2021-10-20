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





var CheckoutForm = function CheckoutForm(_ref) {
  _s();

  var amount = _ref.amount;
  var stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useStripe)();
  var elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useElements)();

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = (0,C_code_avocado_store_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_code_avocado_store_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {
      var cardElement, _yield$stripe$createP, error, paymentMethod, _elements$getElement, _ref3, id, _yield$axios$post, data;

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
              _ref3 = paymentMethod, id = _ref3.id;
              _context.next = 16;
              return axios__WEBPACK_IMPORTED_MODULE_3___default().post('http://localhost:3001/api/checkout', {
                id: id,
                amount: amount * 100
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
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.CardElement, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        type: "submit",
        disabled: !stripe,
        children: "Pay"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FydC5mYzVhZDk1ZTVlMWM1MjAwNDYzMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBTU8sSUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBbUM7QUFBQTs7QUFBQSxNQUFoQ0MsTUFBZ0MsUUFBaENBLE1BQWdDO0FBQzdELE1BQU1DLE1BQU0sR0FBR0wsa0VBQVMsRUFBeEI7QUFDQSxNQUFNTSxRQUFRLEdBQUdMLG9FQUFXLEVBQTVCOztBQUVBLE1BQU1NLFlBQVk7QUFBQSxnU0FBRyxpQkFBT0MsS0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CO0FBQ0FBLGNBQUFBLEtBQUssQ0FBQ0MsY0FBTjs7QUFGbUIsb0JBSWYsQ0FBQ0osTUFBRCxJQUFXLENBQUNDLFFBSkc7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFVbkI7QUFDQTtBQUNBO0FBQ01JLGNBQUFBLFdBYmEsR0FhQ0osUUFBUSxDQUFDSyxVQUFULENBQW9CWixnRUFBcEIsQ0FiRCxFQWVuQjs7QUFmbUI7QUFBQSxxQkFnQm9CTSxNQUFNLENBQUNPLG1CQUFQLENBQTJCO0FBQ2hFQyxnQkFBQUEsSUFBSSxFQUFFLE1BRDBEO0FBRWhFQyxnQkFBQUEsSUFBSSxFQUFFSjtBQUYwRCxlQUEzQixDQWhCcEI7O0FBQUE7QUFBQTtBQWdCWEssY0FBQUEsS0FoQlcseUJBZ0JYQSxLQWhCVztBQWdCSkMsY0FBQUEsYUFoQkkseUJBZ0JKQSxhQWhCSTs7QUFBQSxtQkFvQmZELEtBcEJlO0FBQUE7QUFBQTtBQUFBOztBQXFCakJFLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJILEtBQXZCO0FBckJpQjtBQUFBOztBQUFBO0FBQUEsc0JBdUJGQyxhQXZCRSxFQXVCVEcsRUF2QlMsU0F1QlRBLEVBdkJTO0FBQUE7QUFBQSxxQkF3Qk1qQixpREFBQSxDQUFXLG9DQUFYLEVBQWlEO0FBQ3RFaUIsZ0JBQUFBLEVBQUUsRUFBRkEsRUFEc0U7QUFFdEVmLGdCQUFBQSxNQUFNLEVBQUVBLE1BQU0sR0FBRztBQUZxRCxlQUFqRCxDQXhCTjs7QUFBQTtBQUFBO0FBd0JUaUIsY0FBQUEsSUF4QlMscUJBd0JUQSxJQXhCUztBQTRCakJKLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxJQUFaO0FBQ0Esc0NBQUFmLFFBQVEsQ0FBQ0ssVUFBVCxDQUFvQlosZ0VBQXBCLCtFQUFrQ3VCLEtBQWxDOztBQTdCaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWmYsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFpQ0Esc0JBQ0U7QUFBQSwyQkFDRTtBQUFNLGNBQVEsRUFBRUEsWUFBaEI7QUFBQSw4QkFDRSw4REFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGdCQUFRLEVBQUUsQ0FBQ0YsTUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFVRCxDQS9DTTs7R0FBTUY7VUFDSUgsZ0VBQ0VDOzs7S0FGTkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dEZvcm0vQ2hlY2tvdXRGb3JtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkRWxlbWVudCwgdXNlU3RyaXBlLCB1c2VFbGVtZW50cyB9IGZyb20gJ0BzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5pbnRlcmZhY2UgQ2hlY2tvdXRGb3JtUHJvcHMge1xyXG4gIGFtb3VudDogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDaGVja291dEZvcm0gPSAoeyBhbW91bnQgfTogQ2hlY2tvdXRGb3JtUHJvcHMpID0+IHtcclxuICBjb25zdCBzdHJpcGUgPSB1c2VTdHJpcGUoKVxyXG4gIGNvbnN0IGVsZW1lbnRzID0gdXNlRWxlbWVudHMoKVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgLy8gQmxvY2sgbmF0aXZlIGZvcm0gc3VibWlzc2lvbi5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICBpZiAoIXN0cmlwZSB8fCAhZWxlbWVudHMpIHtcclxuICAgICAgLy8gU3RyaXBlLmpzIGhhcyBub3QgbG9hZGVkIHlldC4gTWFrZSBzdXJlIHRvIGRpc2FibGVcclxuICAgICAgLy8gZm9ybSBzdWJtaXNzaW9uIHVudGlsIFN0cmlwZS5qcyBoYXMgbG9hZGVkLlxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgYSByZWZlcmVuY2UgdG8gYSBtb3VudGVkIENhcmRFbGVtZW50LiBFbGVtZW50cyBrbm93cyBob3dcclxuICAgIC8vIHRvIGZpbmQgeW91ciBDYXJkRWxlbWVudCBiZWNhdXNlIHRoZXJlIGNhbiBvbmx5IGV2ZXIgYmUgb25lIG9mXHJcbiAgICAvLyBlYWNoIHR5cGUgb2YgZWxlbWVudC5cclxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZWxlbWVudHMuZ2V0RWxlbWVudChDYXJkRWxlbWVudClcclxuXHJcbiAgICAvLyBVc2UgeW91ciBjYXJkIEVsZW1lbnQgd2l0aCBvdGhlciBTdHJpcGUuanMgQVBJc1xyXG4gICAgY29uc3QgeyBlcnJvciwgcGF5bWVudE1ldGhvZCB9ID0gYXdhaXQgc3RyaXBlLmNyZWF0ZVBheW1lbnRNZXRob2Qoe1xyXG4gICAgICB0eXBlOiAnY2FyZCcsXHJcbiAgICAgIGNhcmQ6IGNhcmRFbGVtZW50ISxcclxuICAgIH0pXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1tlcnJvcl0nLCBlcnJvcilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHsgaWQgfSA9IHBheW1lbnRNZXRob2QhXHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9jaGVja291dCcsIHtcclxuICAgICAgICBpZCxcclxuICAgICAgICBhbW91bnQ6IGFtb3VudCAqIDEwMCxcclxuICAgICAgfSlcclxuICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgZWxlbWVudHMuZ2V0RWxlbWVudChDYXJkRWxlbWVudCk/LmNsZWFyKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8Q2FyZEVsZW1lbnQgLz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17IXN0cmlwZX0+XHJcbiAgICAgICAgICBQYXlcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJDYXJkRWxlbWVudCIsInVzZVN0cmlwZSIsInVzZUVsZW1lbnRzIiwiYXhpb3MiLCJDaGVja291dEZvcm0iLCJhbW91bnQiLCJzdHJpcGUiLCJlbGVtZW50cyIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjYXJkRWxlbWVudCIsImdldEVsZW1lbnQiLCJjcmVhdGVQYXltZW50TWV0aG9kIiwidHlwZSIsImNhcmQiLCJlcnJvciIsInBheW1lbnRNZXRob2QiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJwb3N0IiwiZGF0YSIsImNsZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==