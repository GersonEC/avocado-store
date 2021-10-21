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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\code\\avocado-store\\components\\CheckoutForm\\CheckoutForm.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var CheckoutForm = function CheckoutForm(_ref) {
  _s();

  var amount = _ref.amount;
  var stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.useStripe)();
  var elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.useElements)();
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

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
              _context.next = 21;
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
              router.push('/thanks');

            case 21:
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: "checkout",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("form", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "checkout__inputs",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("label", {
            style: {
              display: 'block'
            },
            htmlFor: "name",
            children: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            type: "text",
            id: "name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("label", {
            style: {
              display: 'block'
            },
            htmlFor: "surname",
            children: "Surname"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            type: "text",
            id: "surname"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.CardElement, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
        onClick: function onClick() {
          return handleSubmit;
        },
        label: "Pay",
        disabled: !stripe
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, _this);
};

_s(CheckoutForm, "nq3mB3OSIuGzX29Tib2BTeZFVNY=", false, function () {
  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.useStripe, _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.useElements, next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FydC45ZWIyNjM4NDM3ZDNmYWY1MjBhYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQU1PLElBQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQW1DO0FBQUE7O0FBQUEsTUFBaENDLE1BQWdDLFFBQWhDQSxNQUFnQztBQUM3RCxNQUFNQyxNQUFNLEdBQUdOLGtFQUFTLEVBQXhCO0FBQ0EsTUFBTU8sUUFBUSxHQUFHTixvRUFBVyxFQUE1QjtBQUNBLE1BQU1PLE1BQU0sR0FBR0wsc0RBQVMsRUFBeEI7O0FBRUEsTUFBTU0sWUFBWTtBQUFBLGdTQUFHLGlCQUFPQyxLQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkI7QUFDQUEsY0FBQUEsS0FBSyxDQUFDQyxjQUFOOztBQUZtQixvQkFJZixDQUFDTCxNQUFELElBQVcsQ0FBQ0MsUUFKRztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQVVuQjtBQUNBO0FBQ0E7QUFDTUssY0FBQUEsV0FiYSxHQWFDTCxRQUFRLENBQUNNLFVBQVQsQ0FBb0JkLGdFQUFwQixDQWJELEVBZW5COztBQWZtQjtBQUFBLHFCQWdCb0JPLE1BQU0sQ0FBQ1EsbUJBQVAsQ0FBMkI7QUFDaEVDLGdCQUFBQSxJQUFJLEVBQUUsTUFEMEQ7QUFFaEVDLGdCQUFBQSxJQUFJLEVBQUVKO0FBRjBELGVBQTNCLENBaEJwQjs7QUFBQTtBQUFBO0FBZ0JYSyxjQUFBQSxLQWhCVyx5QkFnQlhBLEtBaEJXO0FBZ0JKQyxjQUFBQSxhQWhCSSx5QkFnQkpBLGFBaEJJOztBQUFBLG1CQW9CZkQsS0FwQmU7QUFBQTtBQUFBO0FBQUE7O0FBcUJqQkUsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkgsS0FBdkI7QUFyQmlCO0FBQUE7O0FBQUE7QUFBQSxzQkF1QkZDLGFBdkJFLEVBdUJURyxFQXZCUyxTQXVCVEEsRUF2QlM7QUFBQTtBQUFBLHFCQXdCTW5CLGlEQUFBLENBQVcsb0NBQVgsRUFBaUQ7QUFDdEVtQixnQkFBQUEsRUFBRSxFQUFGQSxFQURzRTtBQUV0RWhCLGdCQUFBQSxNQUFNLEVBQUVBLE1BQU0sR0FBRztBQUZxRCxlQUFqRCxDQXhCTjs7QUFBQTtBQUFBO0FBd0JUa0IsY0FBQUEsSUF4QlMscUJBd0JUQSxJQXhCUztBQTRCakJKLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxJQUFaO0FBQ0Esc0NBQUFoQixRQUFRLENBQUNNLFVBQVQsQ0FBb0JkLGdFQUFwQiwrRUFBa0N5QixLQUFsQztBQUNBaEIsY0FBQUEsTUFBTSxDQUFDaUIsSUFBUCxDQUFZLFNBQVo7O0FBOUJpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaaEIsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFrQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBLDJCQUNFO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQUEsZ0NBQ0U7QUFBQSxrQ0FDRTtBQUFPLGlCQUFLLEVBQUU7QUFBRWlCLGNBQUFBLE9BQU8sRUFBRTtBQUFYLGFBQWQ7QUFBb0MsbUJBQU8sRUFBQyxNQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUlFO0FBQU8sZ0JBQUksRUFBQyxNQUFaO0FBQW1CLGNBQUUsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU9FO0FBQUEsa0NBQ0U7QUFBTyxpQkFBSyxFQUFFO0FBQUVBLGNBQUFBLE9BQU8sRUFBRTtBQUFYLGFBQWQ7QUFBb0MsbUJBQU8sRUFBQyxTQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUlFO0FBQU8sZ0JBQUksRUFBQyxNQUFaO0FBQW1CLGNBQUUsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQWVFLDhEQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmRixlQWdCRSw4REFBQyw4REFBRDtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFNakIsWUFBTjtBQUFBLFNBQWpCO0FBQXFDLGFBQUssRUFBQyxLQUEzQztBQUFpRCxnQkFBUSxFQUFFLENBQUNIO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0JELENBN0RNOztHQUFNRjtVQUNJSixnRUFDRUMsa0VBQ0ZFOzs7S0FISkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dEZvcm0vQ2hlY2tvdXRGb3JtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gJ0Bjb21wb25lbnRzL0J1dHRvbi9CdXR0b24nXHJcbmltcG9ydCB7IENhcmRFbGVtZW50LCB1c2VTdHJpcGUsIHVzZUVsZW1lbnRzIH0gZnJvbSAnQHN0cmlwZS9yZWFjdC1zdHJpcGUtanMnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbnRlcmZhY2UgQ2hlY2tvdXRGb3JtUHJvcHMge1xyXG4gIGFtb3VudDogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDaGVja291dEZvcm0gPSAoeyBhbW91bnQgfTogQ2hlY2tvdXRGb3JtUHJvcHMpID0+IHtcclxuICBjb25zdCBzdHJpcGUgPSB1c2VTdHJpcGUoKVxyXG4gIGNvbnN0IGVsZW1lbnRzID0gdXNlRWxlbWVudHMoKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogYW55KSA9PiB7XHJcbiAgICAvLyBCbG9jayBuYXRpdmUgZm9ybSBzdWJtaXNzaW9uLlxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgIGlmICghc3RyaXBlIHx8ICFlbGVtZW50cykge1xyXG4gICAgICAvLyBTdHJpcGUuanMgaGFzIG5vdCBsb2FkZWQgeWV0LiBNYWtlIHN1cmUgdG8gZGlzYWJsZVxyXG4gICAgICAvLyBmb3JtIHN1Ym1pc3Npb24gdW50aWwgU3RyaXBlLmpzIGhhcyBsb2FkZWQuXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCBhIHJlZmVyZW5jZSB0byBhIG1vdW50ZWQgQ2FyZEVsZW1lbnQuIEVsZW1lbnRzIGtub3dzIGhvd1xyXG4gICAgLy8gdG8gZmluZCB5b3VyIENhcmRFbGVtZW50IGJlY2F1c2UgdGhlcmUgY2FuIG9ubHkgZXZlciBiZSBvbmUgb2ZcclxuICAgIC8vIGVhY2ggdHlwZSBvZiBlbGVtZW50LlxyXG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSBlbGVtZW50cy5nZXRFbGVtZW50KENhcmRFbGVtZW50KVxyXG5cclxuICAgIC8vIFVzZSB5b3VyIGNhcmQgRWxlbWVudCB3aXRoIG90aGVyIFN0cmlwZS5qcyBBUElzXHJcbiAgICBjb25zdCB7IGVycm9yLCBwYXltZW50TWV0aG9kIH0gPSBhd2FpdCBzdHJpcGUuY3JlYXRlUGF5bWVudE1ldGhvZCh7XHJcbiAgICAgIHR5cGU6ICdjYXJkJyxcclxuICAgICAgY2FyZDogY2FyZEVsZW1lbnQhLFxyXG4gICAgfSlcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZygnW2Vycm9yXScsIGVycm9yKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgeyBpZCB9ID0gcGF5bWVudE1ldGhvZCFcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2NoZWNrb3V0Jywge1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIGFtb3VudDogYW1vdW50ICogMTAwLFxyXG4gICAgICB9KVxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICBlbGVtZW50cy5nZXRFbGVtZW50KENhcmRFbGVtZW50KT8uY2xlYXIoKVxyXG4gICAgICByb3V0ZXIucHVzaCgnL3RoYW5rcycpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja291dFwiPlxyXG4gICAgICA8Zm9ybT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0X19pbnB1dHNcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snIH19IGh0bWxGb3I9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgTmFtZVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJyB9fSBodG1sRm9yPVwic3VybmFtZVwiPlxyXG4gICAgICAgICAgICAgIFN1cm5hbWVcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzdXJuYW1lXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxDYXJkRWxlbWVudCAvPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU3VibWl0fSBsYWJlbD1cIlBheVwiIGRpc2FibGVkPXshc3RyaXBlfSAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkNhcmRFbGVtZW50IiwidXNlU3RyaXBlIiwidXNlRWxlbWVudHMiLCJheGlvcyIsInVzZVJvdXRlciIsIkNoZWNrb3V0Rm9ybSIsImFtb3VudCIsInN0cmlwZSIsImVsZW1lbnRzIiwicm91dGVyIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhcmRFbGVtZW50IiwiZ2V0RWxlbWVudCIsImNyZWF0ZVBheW1lbnRNZXRob2QiLCJ0eXBlIiwiY2FyZCIsImVycm9yIiwicGF5bWVudE1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInBvc3QiLCJkYXRhIiwiY2xlYXIiLCJwdXNoIiwiZGlzcGxheSJdLCJzb3VyY2VSb290IjoiIn0=