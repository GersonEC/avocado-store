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
            lineNumber: 53,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            type: "text",
            id: "name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
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
            lineNumber: 59,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            type: "text",
            id: "surname"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.CardElement, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
        onClick: function onClick() {
          return handleSubmit;
        },
        label: "Pay",
        disabled: !stripe
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FydC41ZTViYTczNDI1YjI1MTJlMDgyOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQU1PLElBQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQW1DO0FBQUE7O0FBQUEsTUFBaENDLE1BQWdDLFFBQWhDQSxNQUFnQztBQUM3RCxNQUFNQyxNQUFNLEdBQUdOLGtFQUFTLEVBQXhCO0FBQ0EsTUFBTU8sUUFBUSxHQUFHTixvRUFBVyxFQUE1QjtBQUNBLE1BQU1PLE1BQU0sR0FBR0wsc0RBQVMsRUFBeEI7O0FBRUEsTUFBTU0sWUFBWTtBQUFBLGdTQUFHLGlCQUFPQyxLQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkI7QUFDQUEsY0FBQUEsS0FBSyxDQUFDQyxjQUFOOztBQUZtQixvQkFJZixDQUFDTCxNQUFELElBQVcsQ0FBQ0MsUUFKRztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQVVuQjtBQUNBO0FBQ0E7QUFDTUssY0FBQUEsV0FiYSxHQWFDTCxRQUFRLENBQUNNLFVBQVQsQ0FBb0JkLGdFQUFwQixDQWJELEVBZW5COztBQWZtQjtBQUFBLHFCQWdCb0JPLE1BQU0sQ0FBQ1EsbUJBQVAsQ0FBMkI7QUFDaEVDLGdCQUFBQSxJQUFJLEVBQUUsTUFEMEQ7QUFFaEVDLGdCQUFBQSxJQUFJLEVBQUVKO0FBRjBELGVBQTNCLENBaEJwQjs7QUFBQTtBQUFBO0FBZ0JYSyxjQUFBQSxLQWhCVyx5QkFnQlhBLEtBaEJXO0FBZ0JKQyxjQUFBQSxhQWhCSSx5QkFnQkpBLGFBaEJJOztBQUFBLG1CQW9CZkQsS0FwQmU7QUFBQTtBQUFBO0FBQUE7O0FBcUJqQkUsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkgsS0FBdkI7QUFyQmlCO0FBQUE7O0FBQUE7QUFBQSxzQkF1QkZDLGFBdkJFLEVBdUJURyxFQXZCUyxTQXVCVEEsRUF2QlM7QUFBQTtBQUFBLHFCQXdCTW5CLGlEQUFBLENBQVcsb0NBQVgsRUFBaUQ7QUFDdEVtQixnQkFBQUEsRUFBRSxFQUFGQSxFQURzRTtBQUV0RWhCLGdCQUFBQSxNQUFNLEVBQUVBLE1BQU0sR0FBRztBQUZxRCxlQUFqRCxDQXhCTjs7QUFBQTtBQUFBO0FBd0JUa0IsY0FBQUEsSUF4QlMscUJBd0JUQSxJQXhCUztBQTRCakJKLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxJQUFaO0FBQ0Esc0NBQUFoQixRQUFRLENBQUNNLFVBQVQsQ0FBb0JkLGdFQUFwQiwrRUFBa0N5QixLQUFsQzs7QUE3QmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpmLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBaUNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQSwyQkFDRTtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFBLGdDQUNFO0FBQUEsa0NBQ0U7QUFBTyxpQkFBSyxFQUFFO0FBQUVnQixjQUFBQSxPQUFPLEVBQUU7QUFBWCxhQUFkO0FBQW9DLG1CQUFPLEVBQUMsTUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRTtBQUFPLGdCQUFJLEVBQUMsTUFBWjtBQUFtQixjQUFFLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRTtBQUFBLGtDQUNFO0FBQU8saUJBQUssRUFBRTtBQUFFQSxjQUFBQSxPQUFPLEVBQUU7QUFBWCxhQUFkO0FBQW9DLG1CQUFPLEVBQUMsU0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRTtBQUFPLGdCQUFJLEVBQUMsTUFBWjtBQUFtQixjQUFFLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFlRSw4REFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZkYsZUFnQkUsOERBQUMsOERBQUQ7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBTWhCLFlBQU47QUFBQSxTQUFqQjtBQUFxQyxhQUFLLEVBQUMsS0FBM0M7QUFBaUQsZ0JBQVEsRUFBRSxDQUFDSDtBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNCRCxDQTVETTs7R0FBTUY7VUFDSUosZ0VBQ0VDLGtFQUNGRTs7O0tBSEpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2hlY2tvdXRGb3JtL0NoZWNrb3V0Rm9ybS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tICdAY29tcG9uZW50cy9CdXR0b24vQnV0dG9uJ1xyXG5pbXBvcnQgeyBDYXJkRWxlbWVudCwgdXNlU3RyaXBlLCB1c2VFbGVtZW50cyB9IGZyb20gJ0BzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW50ZXJmYWNlIENoZWNrb3V0Rm9ybVByb3BzIHtcclxuICBhbW91bnQ6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2hlY2tvdXRGb3JtID0gKHsgYW1vdW50IH06IENoZWNrb3V0Rm9ybVByb3BzKSA9PiB7XHJcbiAgY29uc3Qgc3RyaXBlID0gdXNlU3RyaXBlKClcclxuICBjb25zdCBlbGVtZW50cyA9IHVzZUVsZW1lbnRzKClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgLy8gQmxvY2sgbmF0aXZlIGZvcm0gc3VibWlzc2lvbi5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICBpZiAoIXN0cmlwZSB8fCAhZWxlbWVudHMpIHtcclxuICAgICAgLy8gU3RyaXBlLmpzIGhhcyBub3QgbG9hZGVkIHlldC4gTWFrZSBzdXJlIHRvIGRpc2FibGVcclxuICAgICAgLy8gZm9ybSBzdWJtaXNzaW9uIHVudGlsIFN0cmlwZS5qcyBoYXMgbG9hZGVkLlxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgYSByZWZlcmVuY2UgdG8gYSBtb3VudGVkIENhcmRFbGVtZW50LiBFbGVtZW50cyBrbm93cyBob3dcclxuICAgIC8vIHRvIGZpbmQgeW91ciBDYXJkRWxlbWVudCBiZWNhdXNlIHRoZXJlIGNhbiBvbmx5IGV2ZXIgYmUgb25lIG9mXHJcbiAgICAvLyBlYWNoIHR5cGUgb2YgZWxlbWVudC5cclxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZWxlbWVudHMuZ2V0RWxlbWVudChDYXJkRWxlbWVudClcclxuXHJcbiAgICAvLyBVc2UgeW91ciBjYXJkIEVsZW1lbnQgd2l0aCBvdGhlciBTdHJpcGUuanMgQVBJc1xyXG4gICAgY29uc3QgeyBlcnJvciwgcGF5bWVudE1ldGhvZCB9ID0gYXdhaXQgc3RyaXBlLmNyZWF0ZVBheW1lbnRNZXRob2Qoe1xyXG4gICAgICB0eXBlOiAnY2FyZCcsXHJcbiAgICAgIGNhcmQ6IGNhcmRFbGVtZW50ISxcclxuICAgIH0pXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1tlcnJvcl0nLCBlcnJvcilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHsgaWQgfSA9IHBheW1lbnRNZXRob2QhXHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9jaGVja291dCcsIHtcclxuICAgICAgICBpZCxcclxuICAgICAgICBhbW91bnQ6IGFtb3VudCAqIDEwMCxcclxuICAgICAgfSlcclxuICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgZWxlbWVudHMuZ2V0RWxlbWVudChDYXJkRWxlbWVudCk/LmNsZWFyKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0XCI+XHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXRfX2lucHV0c1wiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycgfX0gaHRtbEZvcj1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICBOYW1lXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snIH19IGh0bWxGb3I9XCJzdXJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgU3VybmFtZVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInN1cm5hbWVcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPENhcmRFbGVtZW50IC8+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJtaXR9IGxhYmVsPVwiUGF5XCIgZGlzYWJsZWQ9eyFzdHJpcGV9IC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiQ2FyZEVsZW1lbnQiLCJ1c2VTdHJpcGUiLCJ1c2VFbGVtZW50cyIsImF4aW9zIiwidXNlUm91dGVyIiwiQ2hlY2tvdXRGb3JtIiwiYW1vdW50Iiwic3RyaXBlIiwiZWxlbWVudHMiLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2FyZEVsZW1lbnQiLCJnZXRFbGVtZW50IiwiY3JlYXRlUGF5bWVudE1ldGhvZCIsInR5cGUiLCJjYXJkIiwiZXJyb3IiLCJwYXltZW50TWV0aG9kIiwiY29uc29sZSIsImxvZyIsImlkIiwicG9zdCIsImRhdGEiLCJjbGVhciIsImRpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9