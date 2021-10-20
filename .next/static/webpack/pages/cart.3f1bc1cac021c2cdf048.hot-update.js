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
              debugger; // Block native form submission.

              event.preventDefault();

              if (!(!stripe || !elements)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return");

            case 4:
              // Get a reference to a mounted CardElement. Elements knows how
              // to find your CardElement because there can only ever be one of
              // each type of element.
              cardElement = elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.CardElement); // Use your card Element with other Stripe.js APIs

              _context.next = 7;
              return stripe.createPaymentMethod({
                type: 'card',
                card: cardElement
              });

            case 7:
              _yield$stripe$createP = _context.sent;
              error = _yield$stripe$createP.error;
              paymentMethod = _yield$stripe$createP.paymentMethod;
              debugger;

              if (!error) {
                _context.next = 15;
                break;
              }

              console.log('[error]', error);
              _context.next = 22;
              break;

            case 15:
              _ref3 = paymentMethod, id = _ref3.id;
              _context.next = 18;
              return axios__WEBPACK_IMPORTED_MODULE_3___default().post('http://localhost:3001/api/checkout', {
                id: id,
                amount: amount * 100
              });

            case 18:
              _yield$axios$post = _context.sent;
              data = _yield$axios$post.data;
              console.log(data);
              (_elements$getElement = elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.CardElement)) === null || _elements$getElement === void 0 ? void 0 : _elements$getElement.clear();

            case 22:
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.CardElement, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
      type: "submit",
      disabled: !stripe,
      children: "Pay"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FydC4zZjFiYzFjYWMwMjFjMmNkZjA0OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBTU8sSUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBbUM7QUFBQTs7QUFBQSxNQUFoQ0MsTUFBZ0MsUUFBaENBLE1BQWdDO0FBQzdELE1BQU1DLE1BQU0sR0FBR0wsa0VBQVMsRUFBeEI7QUFDQSxNQUFNTSxRQUFRLEdBQUdMLG9FQUFXLEVBQTVCOztBQUVBLE1BQU1NLFlBQVk7QUFBQSxnU0FBRyxpQkFBT0MsS0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CLHVCQURtQixDQUVuQjs7QUFDQUEsY0FBQUEsS0FBSyxDQUFDQyxjQUFOOztBQUhtQixvQkFLZixDQUFDSixNQUFELElBQVcsQ0FBQ0MsUUFMRztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQVduQjtBQUNBO0FBQ0E7QUFDTUksY0FBQUEsV0FkYSxHQWNDSixRQUFRLENBQUNLLFVBQVQsQ0FBb0JaLGdFQUFwQixDQWRELEVBZ0JuQjs7QUFoQm1CO0FBQUEscUJBaUJvQk0sTUFBTSxDQUFDTyxtQkFBUCxDQUEyQjtBQUNoRUMsZ0JBQUFBLElBQUksRUFBRSxNQUQwRDtBQUVoRUMsZ0JBQUFBLElBQUksRUFBRUo7QUFGMEQsZUFBM0IsQ0FqQnBCOztBQUFBO0FBQUE7QUFpQlhLLGNBQUFBLEtBakJXLHlCQWlCWEEsS0FqQlc7QUFpQkpDLGNBQUFBLGFBakJJLHlCQWlCSkEsYUFqQkk7QUFxQm5COztBQXJCbUIsbUJBc0JmRCxLQXRCZTtBQUFBO0FBQUE7QUFBQTs7QUF1QmpCRSxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCSCxLQUF2QjtBQXZCaUI7QUFBQTs7QUFBQTtBQUFBLHNCQXlCRkMsYUF6QkUsRUF5QlRHLEVBekJTLFNBeUJUQSxFQXpCUztBQUFBO0FBQUEscUJBMEJNakIsaURBQUEsQ0FBVyxvQ0FBWCxFQUFpRDtBQUN0RWlCLGdCQUFBQSxFQUFFLEVBQUZBLEVBRHNFO0FBRXRFZixnQkFBQUEsTUFBTSxFQUFFQSxNQUFNLEdBQUc7QUFGcUQsZUFBakQsQ0ExQk47O0FBQUE7QUFBQTtBQTBCVGlCLGNBQUFBLElBMUJTLHFCQTBCVEEsSUExQlM7QUE4QmpCSixjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsSUFBWjtBQUNBLHNDQUFBZixRQUFRLENBQUNLLFVBQVQsQ0FBb0JaLGdFQUFwQiwrRUFBa0N1QixLQUFsQzs7QUEvQmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpmLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBbUNBLHNCQUNFO0FBQU0sWUFBUSxFQUFFQSxZQUFoQjtBQUFBLDRCQUNFLDhEQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsY0FBUSxFQUFFLENBQUNGLE1BQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRRCxDQS9DTTs7R0FBTUY7VUFDSUgsZ0VBQ0VDOzs7S0FGTkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dEZvcm0vQ2hlY2tvdXRGb3JtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkRWxlbWVudCwgdXNlU3RyaXBlLCB1c2VFbGVtZW50cyB9IGZyb20gJ0BzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5pbnRlcmZhY2UgQ2hlY2tvdXRGb3JtUHJvcHMge1xyXG4gIGFtb3VudDogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDaGVja291dEZvcm0gPSAoeyBhbW91bnQgfTogQ2hlY2tvdXRGb3JtUHJvcHMpID0+IHtcclxuICBjb25zdCBzdHJpcGUgPSB1c2VTdHJpcGUoKVxyXG4gIGNvbnN0IGVsZW1lbnRzID0gdXNlRWxlbWVudHMoKVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgZGVidWdnZXJcclxuICAgIC8vIEJsb2NrIG5hdGl2ZSBmb3JtIHN1Ym1pc3Npb24uXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgaWYgKCFzdHJpcGUgfHwgIWVsZW1lbnRzKSB7XHJcbiAgICAgIC8vIFN0cmlwZS5qcyBoYXMgbm90IGxvYWRlZCB5ZXQuIE1ha2Ugc3VyZSB0byBkaXNhYmxlXHJcbiAgICAgIC8vIGZvcm0gc3VibWlzc2lvbiB1bnRpbCBTdHJpcGUuanMgaGFzIGxvYWRlZC5cclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGEgcmVmZXJlbmNlIHRvIGEgbW91bnRlZCBDYXJkRWxlbWVudC4gRWxlbWVudHMga25vd3MgaG93XHJcbiAgICAvLyB0byBmaW5kIHlvdXIgQ2FyZEVsZW1lbnQgYmVjYXVzZSB0aGVyZSBjYW4gb25seSBldmVyIGJlIG9uZSBvZlxyXG4gICAgLy8gZWFjaCB0eXBlIG9mIGVsZW1lbnQuXHJcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGVsZW1lbnRzLmdldEVsZW1lbnQoQ2FyZEVsZW1lbnQpXHJcblxyXG4gICAgLy8gVXNlIHlvdXIgY2FyZCBFbGVtZW50IHdpdGggb3RoZXIgU3RyaXBlLmpzIEFQSXNcclxuICAgIGNvbnN0IHsgZXJyb3IsIHBheW1lbnRNZXRob2QgfSA9IGF3YWl0IHN0cmlwZS5jcmVhdGVQYXltZW50TWV0aG9kKHtcclxuICAgICAgdHlwZTogJ2NhcmQnLFxyXG4gICAgICBjYXJkOiBjYXJkRWxlbWVudCEsXHJcbiAgICB9KVxyXG4gICAgZGVidWdnZXJcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZygnW2Vycm9yXScsIGVycm9yKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgeyBpZCB9ID0gcGF5bWVudE1ldGhvZCFcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2NoZWNrb3V0Jywge1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIGFtb3VudDogYW1vdW50ICogMTAwLFxyXG4gICAgICB9KVxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICBlbGVtZW50cy5nZXRFbGVtZW50KENhcmRFbGVtZW50KT8uY2xlYXIoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8Q2FyZEVsZW1lbnQgLz5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9eyFzdHJpcGV9PlxyXG4gICAgICAgIFBheVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkNhcmRFbGVtZW50IiwidXNlU3RyaXBlIiwidXNlRWxlbWVudHMiLCJheGlvcyIsIkNoZWNrb3V0Rm9ybSIsImFtb3VudCIsInN0cmlwZSIsImVsZW1lbnRzIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhcmRFbGVtZW50IiwiZ2V0RWxlbWVudCIsImNyZWF0ZVBheW1lbnRNZXRob2QiLCJ0eXBlIiwiY2FyZCIsImVycm9yIiwicGF5bWVudE1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInBvc3QiLCJkYXRhIiwiY2xlYXIiXSwic291cmNlUm9vdCI6IiJ9