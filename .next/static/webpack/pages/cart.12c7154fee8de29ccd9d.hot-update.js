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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\code\\avocado-store\\components\\CheckoutForm\\CheckoutForm.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var CheckoutForm = function CheckoutForm(_ref) {
  _s();

  var amount = _ref.amount;
  var stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useStripe)();
  var elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useElements)();
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

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
              _context.next = 21;
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "checkout",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "checkout__inputs",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
            style: {
              display: 'block'
            },
            htmlFor: "name",
            children: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
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
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("label", {
            style: {
              display: 'block'
            },
            htmlFor: "surname",
            children: "Surname"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.CardElement, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
        type: "submit",
        disabled: !stripe,
        children: "Pay"
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
  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useStripe, _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useElements, next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FydC4xMmM3MTU0ZmVlOGRlMjljY2Q5ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQU1PLElBQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQW1DO0FBQUE7O0FBQUEsTUFBaENDLE1BQWdDLFFBQWhDQSxNQUFnQztBQUM3RCxNQUFNQyxNQUFNLEdBQUdOLGtFQUFTLEVBQXhCO0FBQ0EsTUFBTU8sUUFBUSxHQUFHTixvRUFBVyxFQUE1QjtBQUNBLE1BQU1PLE1BQU0sR0FBR0wsc0RBQVMsRUFBeEI7O0FBRUEsTUFBTU0sWUFBWTtBQUFBLGdTQUFHLGlCQUFPQyxLQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkI7QUFDQUEsY0FBQUEsS0FBSyxDQUFDQyxjQUFOOztBQUZtQixvQkFJZixDQUFDTCxNQUFELElBQVcsQ0FBQ0MsUUFKRztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQVVuQjtBQUNBO0FBQ0E7QUFDTUssY0FBQUEsV0FiYSxHQWFDTCxRQUFRLENBQUNNLFVBQVQsQ0FBb0JkLGdFQUFwQixDQWJELEVBZW5COztBQWZtQjtBQUFBLHFCQWdCb0JPLE1BQU0sQ0FBQ1EsbUJBQVAsQ0FBMkI7QUFDaEVDLGdCQUFBQSxJQUFJLEVBQUUsTUFEMEQ7QUFFaEVDLGdCQUFBQSxJQUFJLEVBQUVKO0FBRjBELGVBQTNCLENBaEJwQjs7QUFBQTtBQUFBO0FBZ0JYSyxjQUFBQSxLQWhCVyx5QkFnQlhBLEtBaEJXO0FBZ0JKQyxjQUFBQSxhQWhCSSx5QkFnQkpBLGFBaEJJOztBQUFBLG1CQW9CZkQsS0FwQmU7QUFBQTtBQUFBO0FBQUE7O0FBcUJqQkUsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkgsS0FBdkI7QUFyQmlCO0FBQUE7O0FBQUE7QUFBQSxzQkF1QkZDLGFBdkJFLEVBdUJURyxFQXZCUyxTQXVCVEEsRUF2QlM7QUFBQTtBQUFBLHFCQXdCTW5CLGlEQUFBLENBQVcsb0NBQVgsRUFBaUQ7QUFDdEVtQixnQkFBQUEsRUFBRSxFQUFGQSxFQURzRTtBQUV0RWhCLGdCQUFBQSxNQUFNLEVBQUVBLE1BQU0sR0FBRztBQUZxRCxlQUFqRCxDQXhCTjs7QUFBQTtBQUFBO0FBd0JUa0IsY0FBQUEsSUF4QlMscUJBd0JUQSxJQXhCUztBQTRCakJKLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxJQUFaO0FBQ0Esc0NBQUFoQixRQUFRLENBQUNNLFVBQVQsQ0FBb0JkLGdFQUFwQiwrRUFBa0N5QixLQUFsQztBQUNBaEIsY0FBQUEsTUFBTSxDQUFDaUIsSUFBUCxDQUFZLFNBQVo7O0FBOUJpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaaEIsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFrQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBLDJCQUNFO0FBQU0sY0FBUSxFQUFFQSxZQUFoQjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFBLGdDQUNFO0FBQUEsa0NBQ0U7QUFBTyxpQkFBSyxFQUFFO0FBQUVpQixjQUFBQSxPQUFPLEVBQUU7QUFBWCxhQUFkO0FBQW9DLG1CQUFPLEVBQUMsTUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRTtBQUFPLGdCQUFJLEVBQUMsTUFBWjtBQUFtQixjQUFFLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRTtBQUFBLGtDQUNFO0FBQU8saUJBQUssRUFBRTtBQUFFQSxjQUFBQSxPQUFPLEVBQUU7QUFBWCxhQUFkO0FBQW9DLG1CQUFPLEVBQUMsU0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRTtBQUFPLGdCQUFJLEVBQUMsTUFBWjtBQUFtQixjQUFFLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFlRSw4REFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZkYsZUFnQkU7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixnQkFBUSxFQUFFLENBQUNwQixNQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3QkQsQ0EvRE07O0dBQU1GO1VBQ0lKLGdFQUNFQyxrRUFDRkU7OztLQUhKQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NoZWNrb3V0Rm9ybS9DaGVja291dEZvcm0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSAnQGNvbXBvbmVudHMvQnV0dG9uL0J1dHRvbidcclxuaW1wb3J0IHsgQ2FyZEVsZW1lbnQsIHVzZVN0cmlwZSwgdXNlRWxlbWVudHMgfSBmcm9tICdAc3RyaXBlL3JlYWN0LXN0cmlwZS1qcydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmludGVyZmFjZSBDaGVja291dEZvcm1Qcm9wcyB7XHJcbiAgYW1vdW50OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENoZWNrb3V0Rm9ybSA9ICh7IGFtb3VudCB9OiBDaGVja291dEZvcm1Qcm9wcykgPT4ge1xyXG4gIGNvbnN0IHN0cmlwZSA9IHVzZVN0cmlwZSgpXHJcbiAgY29uc3QgZWxlbWVudHMgPSB1c2VFbGVtZW50cygpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50OiBhbnkpID0+IHtcclxuICAgIC8vIEJsb2NrIG5hdGl2ZSBmb3JtIHN1Ym1pc3Npb24uXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgaWYgKCFzdHJpcGUgfHwgIWVsZW1lbnRzKSB7XHJcbiAgICAgIC8vIFN0cmlwZS5qcyBoYXMgbm90IGxvYWRlZCB5ZXQuIE1ha2Ugc3VyZSB0byBkaXNhYmxlXHJcbiAgICAgIC8vIGZvcm0gc3VibWlzc2lvbiB1bnRpbCBTdHJpcGUuanMgaGFzIGxvYWRlZC5cclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGEgcmVmZXJlbmNlIHRvIGEgbW91bnRlZCBDYXJkRWxlbWVudC4gRWxlbWVudHMga25vd3MgaG93XHJcbiAgICAvLyB0byBmaW5kIHlvdXIgQ2FyZEVsZW1lbnQgYmVjYXVzZSB0aGVyZSBjYW4gb25seSBldmVyIGJlIG9uZSBvZlxyXG4gICAgLy8gZWFjaCB0eXBlIG9mIGVsZW1lbnQuXHJcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGVsZW1lbnRzLmdldEVsZW1lbnQoQ2FyZEVsZW1lbnQpXHJcblxyXG4gICAgLy8gVXNlIHlvdXIgY2FyZCBFbGVtZW50IHdpdGggb3RoZXIgU3RyaXBlLmpzIEFQSXNcclxuICAgIGNvbnN0IHsgZXJyb3IsIHBheW1lbnRNZXRob2QgfSA9IGF3YWl0IHN0cmlwZS5jcmVhdGVQYXltZW50TWV0aG9kKHtcclxuICAgICAgdHlwZTogJ2NhcmQnLFxyXG4gICAgICBjYXJkOiBjYXJkRWxlbWVudCEsXHJcbiAgICB9KVxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdbZXJyb3JdJywgZXJyb3IpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB7IGlkIH0gPSBwYXltZW50TWV0aG9kIVxyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvY2hlY2tvdXQnLCB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgYW1vdW50OiBhbW91bnQgKiAxMDAsXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgIGVsZW1lbnRzLmdldEVsZW1lbnQoQ2FyZEVsZW1lbnQpPy5jbGVhcigpXHJcbiAgICAgIHJvdXRlci5wdXNoKCcvdGhhbmtzJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0XCI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXRfX2lucHV0c1wiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycgfX0gaHRtbEZvcj1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICBOYW1lXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snIH19IGh0bWxGb3I9XCJzdXJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgU3VybmFtZVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInN1cm5hbWVcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPENhcmRFbGVtZW50IC8+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9eyFzdHJpcGV9PlxyXG4gICAgICAgICAgUGF5XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiQ2FyZEVsZW1lbnQiLCJ1c2VTdHJpcGUiLCJ1c2VFbGVtZW50cyIsImF4aW9zIiwidXNlUm91dGVyIiwiQ2hlY2tvdXRGb3JtIiwiYW1vdW50Iiwic3RyaXBlIiwiZWxlbWVudHMiLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2FyZEVsZW1lbnQiLCJnZXRFbGVtZW50IiwiY3JlYXRlUGF5bWVudE1ldGhvZCIsInR5cGUiLCJjYXJkIiwiZXJyb3IiLCJwYXltZW50TWV0aG9kIiwiY29uc29sZSIsImxvZyIsImlkIiwicG9zdCIsImRhdGEiLCJjbGVhciIsInB1c2giLCJkaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==