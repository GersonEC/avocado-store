"use strict";
(() => {
var exports = {};
exports.id = "pages/checkout";
exports.ids = ["pages/checkout"];
exports.modules = {

/***/ "./components/CheckoutForm/CheckoutForm.tsx":
/*!**************************************************!*\
  !*** ./components/CheckoutForm/CheckoutForm.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutForm": () => (/* binding */ CheckoutForm)
/* harmony export */ });
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/react-stripe-js */ "@stripe/react-stripe-js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\code\\avocado-store\\components\\CheckoutForm\\CheckoutForm.tsx";



const CheckoutForm = () => {
  const stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_0__.useStripe)();
  const elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_0__.useElements)();

  const handleSubmit = async event => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    } // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.


    const cardElement = elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_0__.CardElement); // Use your card Element with other Stripe.js APIs

    const {
      error,
      paymentMethod
    } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement
    });

    if (error) {
      console.log('[error]', error);
    } else {
      var _elements$getElement;

      const {
        id
      } = paymentMethod;
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_1___default().post('http://localhost:3001/api/checkout', {
        id,
        amount: 2.5 * 100
      });
      console.log(data);
      (_elements$getElement = elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_0__.CardElement)) === null || _elements$getElement === void 0 ? void 0 : _elements$getElement.clear();
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_0__.CardElement, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
      type: "submit",
      disabled: !stripe,
      children: "Pay"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./pages/checkout.tsx":
/*!****************************!*\
  !*** ./pages/checkout.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Checkout)
/* harmony export */ });
/* harmony import */ var _components_CheckoutForm_CheckoutForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/CheckoutForm/CheckoutForm */ "./components/CheckoutForm/CheckoutForm.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\code\\avocado-store\\pages\\checkout.tsx";


function Checkout() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_CheckoutForm_CheckoutForm__WEBPACK_IMPORTED_MODULE_0__.CheckoutForm, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "@stripe/react-stripe-js":
/*!******************************************!*\
  !*** external "@stripe/react-stripe-js" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@stripe/react-stripe-js");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/checkout.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvY2hlY2tvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFTyxNQUFNSSxZQUFZLEdBQUcsTUFBTTtBQUNoQyxRQUFNQyxNQUFNLEdBQUdKLGtFQUFTLEVBQXhCO0FBQ0EsUUFBTUssUUFBUSxHQUFHSixvRUFBVyxFQUE1Qjs7QUFFQSxRQUFNSyxZQUFZLEdBQUcsTUFBT0MsS0FBUCxJQUFzQjtBQUN6QztBQUNBQSxJQUFBQSxLQUFLLENBQUNDLGNBQU47O0FBRUEsUUFBSSxDQUFDSixNQUFELElBQVcsQ0FBQ0MsUUFBaEIsRUFBMEI7QUFDeEI7QUFDQTtBQUNBO0FBQ0QsS0FSd0MsQ0FVekM7QUFDQTtBQUNBOzs7QUFDQSxVQUFNSSxXQUFXLEdBQUdKLFFBQVEsQ0FBQ0ssVUFBVCxDQUFvQlgsZ0VBQXBCLENBQXBCLENBYnlDLENBZXpDOztBQUNBLFVBQU07QUFBRVksTUFBQUEsS0FBRjtBQUFTQyxNQUFBQTtBQUFULFFBQTJCLE1BQU1SLE1BQU0sQ0FBQ1MsbUJBQVAsQ0FBMkI7QUFDaEVDLE1BQUFBLElBQUksRUFBRSxNQUQwRDtBQUVoRUMsTUFBQUEsSUFBSSxFQUFFTjtBQUYwRCxLQUEzQixDQUF2Qzs7QUFLQSxRQUFJRSxLQUFKLEVBQVc7QUFDVEssTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1Qk4sS0FBdkI7QUFDRCxLQUZELE1BRU87QUFBQTs7QUFDTCxZQUFNO0FBQUVPLFFBQUFBO0FBQUYsVUFBU04sYUFBZjtBQUNBLFlBQU07QUFBRU8sUUFBQUE7QUFBRixVQUFXLE1BQU1qQixpREFBQSxDQUFXLG9DQUFYLEVBQWlEO0FBQ3RFZ0IsUUFBQUEsRUFEc0U7QUFFdEVHLFFBQUFBLE1BQU0sRUFBRSxNQUFNO0FBRndELE9BQWpELENBQXZCO0FBSUFMLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxJQUFaO0FBQ0EsOEJBQUFkLFFBQVEsQ0FBQ0ssVUFBVCxDQUFvQlgsZ0VBQXBCLCtFQUFrQ3VCLEtBQWxDO0FBQ0Q7QUFDRixHQWhDRDs7QUFrQ0Esc0JBQ0U7QUFBTSxZQUFRLEVBQUVoQixZQUFoQjtBQUFBLDRCQUNFLDhEQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQXNCLGNBQVEsRUFBRSxDQUFDRixNQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVFELENBOUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIUDs7QUFFZSxTQUFTbUIsUUFBVCxHQUFvQjtBQUNqQyxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLCtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7Ozs7Ozs7OztBQ1JEOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BsYXR6aS1uZXh0Ly4vY29tcG9uZW50cy9DaGVja291dEZvcm0vQ2hlY2tvdXRGb3JtLnRzeCIsIndlYnBhY2s6Ly9wbGF0emktbmV4dC8uL3BhZ2VzL2NoZWNrb3V0LnRzeCIsIndlYnBhY2s6Ly9wbGF0emktbmV4dC9leHRlcm5hbCBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCIiLCJ3ZWJwYWNrOi8vcGxhdHppLW5leHQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3BsYXR6aS1uZXh0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZEVsZW1lbnQsIHVzZVN0cmlwZSwgdXNlRWxlbWVudHMgfSBmcm9tICdAc3RyaXBlL3JlYWN0LXN0cmlwZS1qcydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGNvbnN0IENoZWNrb3V0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBzdHJpcGUgPSB1c2VTdHJpcGUoKVxyXG4gIGNvbnN0IGVsZW1lbnRzID0gdXNlRWxlbWVudHMoKVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgLy8gQmxvY2sgbmF0aXZlIGZvcm0gc3VibWlzc2lvbi5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICBpZiAoIXN0cmlwZSB8fCAhZWxlbWVudHMpIHtcclxuICAgICAgLy8gU3RyaXBlLmpzIGhhcyBub3QgbG9hZGVkIHlldC4gTWFrZSBzdXJlIHRvIGRpc2FibGVcclxuICAgICAgLy8gZm9ybSBzdWJtaXNzaW9uIHVudGlsIFN0cmlwZS5qcyBoYXMgbG9hZGVkLlxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgYSByZWZlcmVuY2UgdG8gYSBtb3VudGVkIENhcmRFbGVtZW50LiBFbGVtZW50cyBrbm93cyBob3dcclxuICAgIC8vIHRvIGZpbmQgeW91ciBDYXJkRWxlbWVudCBiZWNhdXNlIHRoZXJlIGNhbiBvbmx5IGV2ZXIgYmUgb25lIG9mXHJcbiAgICAvLyBlYWNoIHR5cGUgb2YgZWxlbWVudC5cclxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZWxlbWVudHMuZ2V0RWxlbWVudChDYXJkRWxlbWVudClcclxuXHJcbiAgICAvLyBVc2UgeW91ciBjYXJkIEVsZW1lbnQgd2l0aCBvdGhlciBTdHJpcGUuanMgQVBJc1xyXG4gICAgY29uc3QgeyBlcnJvciwgcGF5bWVudE1ldGhvZCB9ID0gYXdhaXQgc3RyaXBlLmNyZWF0ZVBheW1lbnRNZXRob2Qoe1xyXG4gICAgICB0eXBlOiAnY2FyZCcsXHJcbiAgICAgIGNhcmQ6IGNhcmRFbGVtZW50ISxcclxuICAgIH0pXHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdbZXJyb3JdJywgZXJyb3IpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB7IGlkIH0gPSBwYXltZW50TWV0aG9kIVxyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvY2hlY2tvdXQnLCB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgYW1vdW50OiAyLjUgKiAxMDAsXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgIGVsZW1lbnRzLmdldEVsZW1lbnQoQ2FyZEVsZW1lbnQpPy5jbGVhcigpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxDYXJkRWxlbWVudCAvPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17IXN0cmlwZX0+XHJcbiAgICAgICAgUGF5XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgeyBDaGVja291dEZvcm0gfSBmcm9tICdAY29tcG9uZW50cy9DaGVja291dEZvcm0vQ2hlY2tvdXRGb3JtJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2tvdXQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxDaGVja291dEZvcm0gLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIkNhcmRFbGVtZW50IiwidXNlU3RyaXBlIiwidXNlRWxlbWVudHMiLCJheGlvcyIsIkNoZWNrb3V0Rm9ybSIsInN0cmlwZSIsImVsZW1lbnRzIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhcmRFbGVtZW50IiwiZ2V0RWxlbWVudCIsImVycm9yIiwicGF5bWVudE1ldGhvZCIsImNyZWF0ZVBheW1lbnRNZXRob2QiLCJ0eXBlIiwiY2FyZCIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImRhdGEiLCJwb3N0IiwiYW1vdW50IiwiY2xlYXIiLCJDaGVja291dCJdLCJzb3VyY2VSb290IjoiIn0=