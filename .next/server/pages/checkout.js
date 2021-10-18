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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
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
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_0__.CardElement, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      type: "submit",
      disabled: !stripe,
      children: "Pay"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvY2hlY2tvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVPLE1BQU1HLFlBQVksR0FBRyxNQUFNO0FBQ2hDLFFBQU1DLE1BQU0sR0FBR0gsa0VBQVMsRUFBeEI7QUFDQSxRQUFNSSxRQUFRLEdBQUdILG9FQUFXLEVBQTVCOztBQUVBLFFBQU1JLFlBQVksR0FBRyxNQUFPQyxLQUFQLElBQXNCO0FBQ3pDO0FBQ0FBLElBQUFBLEtBQUssQ0FBQ0MsY0FBTjs7QUFFQSxRQUFJLENBQUNKLE1BQUQsSUFBVyxDQUFDQyxRQUFoQixFQUEwQjtBQUN4QjtBQUNBO0FBQ0E7QUFDRCxLQVJ3QyxDQVV6QztBQUNBO0FBQ0E7OztBQUNBLFVBQU1JLFdBQVcsR0FBR0osUUFBUSxDQUFDSyxVQUFULENBQW9CVixnRUFBcEIsQ0FBcEIsQ0FieUMsQ0FlekM7O0FBQ0EsVUFBTTtBQUFFVyxNQUFBQSxLQUFGO0FBQVNDLE1BQUFBO0FBQVQsUUFBMkIsTUFBTVIsTUFBTSxDQUFDUyxtQkFBUCxDQUEyQjtBQUNoRUMsTUFBQUEsSUFBSSxFQUFFLE1BRDBEO0FBRWhFQyxNQUFBQSxJQUFJLEVBQUVOO0FBRjBELEtBQTNCLENBQXZDOztBQUtBLFFBQUlFLEtBQUosRUFBVztBQUNUSyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCTixLQUF2QjtBQUNELEtBRkQsTUFFTztBQUNMSyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQkwsYUFBL0I7QUFDRDtBQUNGLEdBMUJEOztBQTRCQSxzQkFDRTtBQUFNLFlBQVEsRUFBRU4sWUFBaEI7QUFBQSw0QkFDRSw4REFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixjQUFRLEVBQUUsQ0FBQ0YsTUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFRRCxDQXhDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlA7O0FBRWUsU0FBU2MsUUFBVCxHQUFvQjtBQUNqQyxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLCtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7Ozs7Ozs7OztBQ1JEOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGF0emktbmV4dC8uL2NvbXBvbmVudHMvQ2hlY2tvdXRGb3JtL0NoZWNrb3V0Rm9ybS50c3giLCJ3ZWJwYWNrOi8vcGxhdHppLW5leHQvLi9wYWdlcy9jaGVja291dC50c3giLCJ3ZWJwYWNrOi8vcGxhdHppLW5leHQvZXh0ZXJuYWwgXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiIiwid2VicGFjazovL3BsYXR6aS1uZXh0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZEVsZW1lbnQsIHVzZVN0cmlwZSwgdXNlRWxlbWVudHMgfSBmcm9tICdAc3RyaXBlL3JlYWN0LXN0cmlwZS1qcydcclxuXHJcbmV4cG9ydCBjb25zdCBDaGVja291dEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3Qgc3RyaXBlID0gdXNlU3RyaXBlKClcclxuICBjb25zdCBlbGVtZW50cyA9IHVzZUVsZW1lbnRzKClcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50OiBhbnkpID0+IHtcclxuICAgIC8vIEJsb2NrIG5hdGl2ZSBmb3JtIHN1Ym1pc3Npb24uXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgaWYgKCFzdHJpcGUgfHwgIWVsZW1lbnRzKSB7XHJcbiAgICAgIC8vIFN0cmlwZS5qcyBoYXMgbm90IGxvYWRlZCB5ZXQuIE1ha2Ugc3VyZSB0byBkaXNhYmxlXHJcbiAgICAgIC8vIGZvcm0gc3VibWlzc2lvbiB1bnRpbCBTdHJpcGUuanMgaGFzIGxvYWRlZC5cclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGEgcmVmZXJlbmNlIHRvIGEgbW91bnRlZCBDYXJkRWxlbWVudC4gRWxlbWVudHMga25vd3MgaG93XHJcbiAgICAvLyB0byBmaW5kIHlvdXIgQ2FyZEVsZW1lbnQgYmVjYXVzZSB0aGVyZSBjYW4gb25seSBldmVyIGJlIG9uZSBvZlxyXG4gICAgLy8gZWFjaCB0eXBlIG9mIGVsZW1lbnQuXHJcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGVsZW1lbnRzLmdldEVsZW1lbnQoQ2FyZEVsZW1lbnQpXHJcblxyXG4gICAgLy8gVXNlIHlvdXIgY2FyZCBFbGVtZW50IHdpdGggb3RoZXIgU3RyaXBlLmpzIEFQSXNcclxuICAgIGNvbnN0IHsgZXJyb3IsIHBheW1lbnRNZXRob2QgfSA9IGF3YWl0IHN0cmlwZS5jcmVhdGVQYXltZW50TWV0aG9kKHtcclxuICAgICAgdHlwZTogJ2NhcmQnLFxyXG4gICAgICBjYXJkOiBjYXJkRWxlbWVudCEsXHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZygnW2Vycm9yXScsIGVycm9yKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ1tQYXltZW50TWV0aG9kXScsIHBheW1lbnRNZXRob2QpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxDYXJkRWxlbWVudCAvPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17IXN0cmlwZX0+XHJcbiAgICAgICAgUGF5XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgeyBDaGVja291dEZvcm0gfSBmcm9tICdAY29tcG9uZW50cy9DaGVja291dEZvcm0vQ2hlY2tvdXRGb3JtJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2tvdXQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxDaGVja291dEZvcm0gLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIkNhcmRFbGVtZW50IiwidXNlU3RyaXBlIiwidXNlRWxlbWVudHMiLCJDaGVja291dEZvcm0iLCJzdHJpcGUiLCJlbGVtZW50cyIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjYXJkRWxlbWVudCIsImdldEVsZW1lbnQiLCJlcnJvciIsInBheW1lbnRNZXRob2QiLCJjcmVhdGVQYXltZW50TWV0aG9kIiwidHlwZSIsImNhcmQiLCJjb25zb2xlIiwibG9nIiwiQ2hlY2tvdXQiXSwic291cmNlUm9vdCI6IiJ9