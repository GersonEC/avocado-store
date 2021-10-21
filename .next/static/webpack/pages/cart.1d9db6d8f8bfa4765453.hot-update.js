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
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\code\\avocado-store\\components\\CheckoutForm\\CheckoutForm.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var CheckoutForm = function CheckoutForm(_ref) {
  _s();

  var amount = _ref.amount;
  var stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.useStripe)();
  var elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.useElements)();

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
              cardElement = elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.CardElement); // Use your card Element with other Stripe.js APIs

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
              return axios__WEBPACK_IMPORTED_MODULE_4___default().post('http://localhost:3001/api/checkout', {
                id: id,
                amount: amount * 100
              });

            case 16:
              _yield$axios$post = _context.sent;
              data = _yield$axios$post.data;
              console.log(data);
              (_elements$getElement = elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.CardElement)) === null || _elements$getElement === void 0 ? void 0 : _elements$getElement.clear();

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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "checkout",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("form", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "checkout__inputs",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
          htmlFor: "name",
          children: "Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
          type: "text",
          id: "name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
          htmlFor: "surname",
          children: "Surname"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
          type: "text",
          id: "surname"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.CardElement, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
        onClick: function onClick() {
          return handleSubmit;
        },
        label: "Pay",
        disabled: !stripe
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, _this);
};

_s(CheckoutForm, "EKvoGMX7lxsZ5SGPpYu2aKFzClQ=", false, function () {
  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.useStripe, _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.useElements];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FydC4xZDlkYjZkOGY4YmZhNDc2NTQ1My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBTU8sSUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBbUM7QUFBQTs7QUFBQSxNQUFoQ0MsTUFBZ0MsUUFBaENBLE1BQWdDO0FBQzdELE1BQU1DLE1BQU0sR0FBR0wsa0VBQVMsRUFBeEI7QUFDQSxNQUFNTSxRQUFRLEdBQUdMLG9FQUFXLEVBQTVCOztBQUVBLE1BQU1NLFlBQVk7QUFBQSxnU0FBRyxpQkFBT0MsS0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CO0FBQ0FBLGNBQUFBLEtBQUssQ0FBQ0MsY0FBTjs7QUFGbUIsb0JBSWYsQ0FBQ0osTUFBRCxJQUFXLENBQUNDLFFBSkc7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFVbkI7QUFDQTtBQUNBO0FBQ01JLGNBQUFBLFdBYmEsR0FhQ0osUUFBUSxDQUFDSyxVQUFULENBQW9CWixnRUFBcEIsQ0FiRCxFQWVuQjs7QUFmbUI7QUFBQSxxQkFnQm9CTSxNQUFNLENBQUNPLG1CQUFQLENBQTJCO0FBQ2hFQyxnQkFBQUEsSUFBSSxFQUFFLE1BRDBEO0FBRWhFQyxnQkFBQUEsSUFBSSxFQUFFSjtBQUYwRCxlQUEzQixDQWhCcEI7O0FBQUE7QUFBQTtBQWdCWEssY0FBQUEsS0FoQlcseUJBZ0JYQSxLQWhCVztBQWdCSkMsY0FBQUEsYUFoQkkseUJBZ0JKQSxhQWhCSTs7QUFBQSxtQkFvQmZELEtBcEJlO0FBQUE7QUFBQTtBQUFBOztBQXFCakJFLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJILEtBQXZCO0FBckJpQjtBQUFBOztBQUFBO0FBQUEsc0JBdUJGQyxhQXZCRSxFQXVCVEcsRUF2QlMsU0F1QlRBLEVBdkJTO0FBQUE7QUFBQSxxQkF3Qk1qQixpREFBQSxDQUFXLG9DQUFYLEVBQWlEO0FBQ3RFaUIsZ0JBQUFBLEVBQUUsRUFBRkEsRUFEc0U7QUFFdEVmLGdCQUFBQSxNQUFNLEVBQUVBLE1BQU0sR0FBRztBQUZxRCxlQUFqRCxDQXhCTjs7QUFBQTtBQUFBO0FBd0JUaUIsY0FBQUEsSUF4QlMscUJBd0JUQSxJQXhCUztBQTRCakJKLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxJQUFaO0FBQ0Esc0NBQUFmLFFBQVEsQ0FBQ0ssVUFBVCxDQUFvQlosZ0VBQXBCLCtFQUFrQ3VCLEtBQWxDOztBQTdCaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWmYsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFpQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBLDJCQUNFO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQUEsZ0NBQ0U7QUFBTyxpQkFBTyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLFlBQUUsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0U7QUFBTyxpQkFBTyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFJRTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLFlBQUUsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBT0UsOERBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGLGVBUUUsOERBQUMsOERBQUQ7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBTUEsWUFBTjtBQUFBLFNBQWpCO0FBQXFDLGFBQUssRUFBQyxLQUEzQztBQUFpRCxnQkFBUSxFQUFFLENBQUNGO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFjRCxDQW5ETTs7R0FBTUY7VUFDSUgsZ0VBQ0VDOzs7S0FGTkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dEZvcm0vQ2hlY2tvdXRGb3JtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gJ0Bjb21wb25lbnRzL0J1dHRvbi9CdXR0b24nXHJcbmltcG9ydCB7IENhcmRFbGVtZW50LCB1c2VTdHJpcGUsIHVzZUVsZW1lbnRzIH0gZnJvbSAnQHN0cmlwZS9yZWFjdC1zdHJpcGUtanMnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmludGVyZmFjZSBDaGVja291dEZvcm1Qcm9wcyB7XHJcbiAgYW1vdW50OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENoZWNrb3V0Rm9ybSA9ICh7IGFtb3VudCB9OiBDaGVja291dEZvcm1Qcm9wcykgPT4ge1xyXG4gIGNvbnN0IHN0cmlwZSA9IHVzZVN0cmlwZSgpXHJcbiAgY29uc3QgZWxlbWVudHMgPSB1c2VFbGVtZW50cygpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogYW55KSA9PiB7XHJcbiAgICAvLyBCbG9jayBuYXRpdmUgZm9ybSBzdWJtaXNzaW9uLlxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgIGlmICghc3RyaXBlIHx8ICFlbGVtZW50cykge1xyXG4gICAgICAvLyBTdHJpcGUuanMgaGFzIG5vdCBsb2FkZWQgeWV0LiBNYWtlIHN1cmUgdG8gZGlzYWJsZVxyXG4gICAgICAvLyBmb3JtIHN1Ym1pc3Npb24gdW50aWwgU3RyaXBlLmpzIGhhcyBsb2FkZWQuXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCBhIHJlZmVyZW5jZSB0byBhIG1vdW50ZWQgQ2FyZEVsZW1lbnQuIEVsZW1lbnRzIGtub3dzIGhvd1xyXG4gICAgLy8gdG8gZmluZCB5b3VyIENhcmRFbGVtZW50IGJlY2F1c2UgdGhlcmUgY2FuIG9ubHkgZXZlciBiZSBvbmUgb2ZcclxuICAgIC8vIGVhY2ggdHlwZSBvZiBlbGVtZW50LlxyXG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSBlbGVtZW50cy5nZXRFbGVtZW50KENhcmRFbGVtZW50KVxyXG5cclxuICAgIC8vIFVzZSB5b3VyIGNhcmQgRWxlbWVudCB3aXRoIG90aGVyIFN0cmlwZS5qcyBBUElzXHJcbiAgICBjb25zdCB7IGVycm9yLCBwYXltZW50TWV0aG9kIH0gPSBhd2FpdCBzdHJpcGUuY3JlYXRlUGF5bWVudE1ldGhvZCh7XHJcbiAgICAgIHR5cGU6ICdjYXJkJyxcclxuICAgICAgY2FyZDogY2FyZEVsZW1lbnQhLFxyXG4gICAgfSlcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZygnW2Vycm9yXScsIGVycm9yKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgeyBpZCB9ID0gcGF5bWVudE1ldGhvZCFcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2NoZWNrb3V0Jywge1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIGFtb3VudDogYW1vdW50ICogMTAwLFxyXG4gICAgICB9KVxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICBlbGVtZW50cy5nZXRFbGVtZW50KENhcmRFbGVtZW50KT8uY2xlYXIoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXRcIj5cclxuICAgICAgPGZvcm0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja291dF9faW5wdXRzXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIC8+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1cm5hbWVcIj5TdXJuYW1lPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwic3VybmFtZVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPENhcmRFbGVtZW50IC8+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJtaXR9IGxhYmVsPVwiUGF5XCIgZGlzYWJsZWQ9eyFzdHJpcGV9IC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiQ2FyZEVsZW1lbnQiLCJ1c2VTdHJpcGUiLCJ1c2VFbGVtZW50cyIsImF4aW9zIiwiQ2hlY2tvdXRGb3JtIiwiYW1vdW50Iiwic3RyaXBlIiwiZWxlbWVudHMiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2FyZEVsZW1lbnQiLCJnZXRFbGVtZW50IiwiY3JlYXRlUGF5bWVudE1ldGhvZCIsInR5cGUiLCJjYXJkIiwiZXJyb3IiLCJwYXltZW50TWV0aG9kIiwiY29uc29sZSIsImxvZyIsImlkIiwicG9zdCIsImRhdGEiLCJjbGVhciJdLCJzb3VyY2VSb290IjoiIn0=