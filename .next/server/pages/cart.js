"use strict";
(() => {
var exports = {};
exports.id = "pages/cart";
exports.ids = ["pages/cart"];
exports.modules = {

/***/ "./components/Button/Button.tsx":
/*!**************************************!*\
  !*** ./components/Button/Button.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\code\\avocado-store\\components\\Button\\Button.tsx";


const Button = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "button",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: props.onClick,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: props.label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

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



const CheckoutForm = ({
  amount
}) => {
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
        amount: amount * 100
      });
      console.log(data);
      (_elements$getElement = elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_0__.CardElement)) === null || _elements$getElement === void 0 ? void 0 : _elements$getElement.clear();
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "checkout",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_0__.CardElement, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        type: "submit",
        disabled: !stripe,
        children: "Pay"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./contexts/cartAvosContext.tsx":
/*!**************************************!*\
  !*** ./contexts/cartAvosContext.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartProvider": () => (/* binding */ CartProvider),
/* harmony export */   "useAvoCart": () => (/* binding */ useAvoCart)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\code\\avocado-store\\contexts\\cartAvosContext.tsx";


const CartAvosContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);

function cartAvosReducer(state, action) {
  switch (action.type) {
    case 'add':
      {
        const {
          cartAvo,
          quantity
        } = action.payload;
        const item = state.find(el => el.cartAvo.id === cartAvo.id);
        const newState = [...state];

        if (item) {
          //update
          item.quantity += quantity;
          const index = newState.findIndex(el => el.cartAvo.id === cartAvo.id);
          newState[index] = item;
        } else {
          //add
          newState.push(action.payload);
        }

        return newState;
      }

    default:
      {
        throw new Error(`Unhandled action type: ${action.type}`);
      }
  }
}

const initialState = [];

function CartProvider({
  children
}) {
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0__.useReducer(cartAvosReducer, initialState);
  const value = {
    state,
    dispatch
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CartAvosContext.Provider, {
    value: value,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

function useAvoCart() {
  const context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(CartAvosContext);

  if (context === undefined) {
    throw new Error('useAvoCart must be used within a CartAvosContext');
  }

  return context;
}



/***/ }),

/***/ "./pages/cart.tsx":
/*!************************!*\
  !*** ./pages/cart.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cart)
/* harmony export */ });
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var _components_CheckoutForm_CheckoutForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/CheckoutForm/CheckoutForm */ "./components/CheckoutForm/CheckoutForm.tsx");
/* harmony import */ var contexts_cartAvosContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! contexts/cartAvosContext */ "./contexts/cartAvosContext.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\code\\avocado-store\\pages\\cart.tsx";







const calcTotalPrice = items => {
  let totalPrice = 0;
  items.forEach(item => {
    totalPrice += item.quantity * item.cartAvo.price;
  });
  return parseFloat(totalPrice.toFixed(2));
};

function Cart() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    0: isCheckoutVisible,
    1: setIsCheckoutVisible
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const avosCart = (0,contexts_cartAvosContext__WEBPACK_IMPORTED_MODULE_2__.useAvoCart)();
  const avos = avosCart.state;
  const totalQuantity = avosCart.state.map(el => el.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);
  const totalPrice = calcTotalPrice(avosCart.state);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "cart",
    children: [avos.map(avo => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "cart__row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
        src: avo.cartAvo.image,
        alt: avo.cartAvo.name,
        title: avo.cartAvo.name,
        height: '140'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h3", {
          children: avo.cartAvo.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
          children: [avo.quantity, " x ", avo.cartAvo.price, "\u20AC"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }, this)]
    }, avo.cartAvo.id, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "cart__total",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h3", {
        children: ["Total: ", totalPrice, " \u20AC"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_0__.default, {
        onClick: () => setIsCheckoutVisible(!isCheckoutVisible),
        label: 'Checkout'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), isCheckoutVisible ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_CheckoutForm_CheckoutForm__WEBPACK_IMPORTED_MODULE_1__.CheckoutForm, {
      amount: totalPrice
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 28
    }, this) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./pages/cart.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTRCRDs7Ozs7Ozs7OztBQ3BERDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxhdHppLW5leHQvLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24udHN4Iiwid2VicGFjazovL3BsYXR6aS1uZXh0Ly4vY29tcG9uZW50cy9DaGVja291dEZvcm0vQ2hlY2tvdXRGb3JtLnRzeCIsIndlYnBhY2s6Ly9wbGF0emktbmV4dC8uL2NvbnRleHRzL2NhcnRBdm9zQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vcGxhdHppLW5leHQvLi9wYWdlcy9jYXJ0LnRzeCIsIndlYnBhY2s6Ly9wbGF0emktbmV4dC9leHRlcm5hbCBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCIiLCJ3ZWJwYWNrOi8vcGxhdHppLW5leHQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3BsYXR6aS1uZXh0L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9wbGF0emktbmV4dC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcGxhdHppLW5leHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgQnV0dG9uUHJvcHMge1xyXG4gIGxhYmVsOiBzdHJpbmdcclxuICBvbkNsaWNrOiAoKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IEJ1dHRvbiA9IChwcm9wczogQnV0dG9uUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICA8cD57cHJvcHMubGFiZWx9PC9wPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXHJcbiIsImltcG9ydCB7IENhcmRFbGVtZW50LCB1c2VTdHJpcGUsIHVzZUVsZW1lbnRzIH0gZnJvbSAnQHN0cmlwZS9yZWFjdC1zdHJpcGUtanMnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmludGVyZmFjZSBDaGVja291dEZvcm1Qcm9wcyB7XHJcbiAgYW1vdW50OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENoZWNrb3V0Rm9ybSA9ICh7IGFtb3VudCB9OiBDaGVja291dEZvcm1Qcm9wcykgPT4ge1xyXG4gIGNvbnN0IHN0cmlwZSA9IHVzZVN0cmlwZSgpXHJcbiAgY29uc3QgZWxlbWVudHMgPSB1c2VFbGVtZW50cygpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogYW55KSA9PiB7XHJcbiAgICAvLyBCbG9jayBuYXRpdmUgZm9ybSBzdWJtaXNzaW9uLlxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgIGlmICghc3RyaXBlIHx8ICFlbGVtZW50cykge1xyXG4gICAgICAvLyBTdHJpcGUuanMgaGFzIG5vdCBsb2FkZWQgeWV0LiBNYWtlIHN1cmUgdG8gZGlzYWJsZVxyXG4gICAgICAvLyBmb3JtIHN1Ym1pc3Npb24gdW50aWwgU3RyaXBlLmpzIGhhcyBsb2FkZWQuXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCBhIHJlZmVyZW5jZSB0byBhIG1vdW50ZWQgQ2FyZEVsZW1lbnQuIEVsZW1lbnRzIGtub3dzIGhvd1xyXG4gICAgLy8gdG8gZmluZCB5b3VyIENhcmRFbGVtZW50IGJlY2F1c2UgdGhlcmUgY2FuIG9ubHkgZXZlciBiZSBvbmUgb2ZcclxuICAgIC8vIGVhY2ggdHlwZSBvZiBlbGVtZW50LlxyXG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSBlbGVtZW50cy5nZXRFbGVtZW50KENhcmRFbGVtZW50KVxyXG5cclxuICAgIC8vIFVzZSB5b3VyIGNhcmQgRWxlbWVudCB3aXRoIG90aGVyIFN0cmlwZS5qcyBBUElzXHJcbiAgICBjb25zdCB7IGVycm9yLCBwYXltZW50TWV0aG9kIH0gPSBhd2FpdCBzdHJpcGUuY3JlYXRlUGF5bWVudE1ldGhvZCh7XHJcbiAgICAgIHR5cGU6ICdjYXJkJyxcclxuICAgICAgY2FyZDogY2FyZEVsZW1lbnQhLFxyXG4gICAgfSlcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZygnW2Vycm9yXScsIGVycm9yKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgeyBpZCB9ID0gcGF5bWVudE1ldGhvZCFcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2NoZWNrb3V0Jywge1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIGFtb3VudDogYW1vdW50ICogMTAwLFxyXG4gICAgICB9KVxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICBlbGVtZW50cy5nZXRFbGVtZW50KENhcmRFbGVtZW50KT8uY2xlYXIoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXRcIj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPENhcmRFbGVtZW50IC8+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9eyFzdHJpcGV9PlxyXG4gICAgICAgICAgUGF5XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FydFN0YXRlIHtcclxuICBjYXJ0QXZvOiBUUHJvZHVjdFxyXG4gIHF1YW50aXR5OiBudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIENhcnRBY3Rpb24ge1xyXG4gIHR5cGU6ICdhZGQnXHJcbiAgcGF5bG9hZDogQ2FydFN0YXRlXHJcbn1cclxuXHJcbnR5cGUgRGlzcGF0Y2ggPSAoYWN0aW9uOiBDYXJ0QWN0aW9uKSA9PiB2b2lkXHJcblxyXG5jb25zdCBDYXJ0QXZvc0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PFxyXG4gIHsgc3RhdGU6IENhcnRTdGF0ZVtdOyBkaXNwYXRjaDogRGlzcGF0Y2ggfSB8IHVuZGVmaW5lZFxyXG4+KHVuZGVmaW5lZClcclxuXHJcbmZ1bmN0aW9uIGNhcnRBdm9zUmVkdWNlcihzdGF0ZTogQ2FydFN0YXRlW10sIGFjdGlvbjogQ2FydEFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ2FkZCc6IHtcclxuICAgICAgY29uc3QgeyBjYXJ0QXZvLCBxdWFudGl0eSB9ID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgY29uc3QgaXRlbSA9IHN0YXRlLmZpbmQoKGVsKSA9PiBlbC5jYXJ0QXZvLmlkID09PSBjYXJ0QXZvLmlkKVxyXG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IFsuLi5zdGF0ZV1cclxuICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAvL3VwZGF0ZVxyXG4gICAgICAgIGl0ZW0ucXVhbnRpdHkgKz0gcXVhbnRpdHlcclxuICAgICAgICBjb25zdCBpbmRleCA9IG5ld1N0YXRlLmZpbmRJbmRleCgoZWwpID0+IGVsLmNhcnRBdm8uaWQgPT09IGNhcnRBdm8uaWQpXHJcbiAgICAgICAgbmV3U3RhdGVbaW5kZXhdID0gaXRlbVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vYWRkXHJcbiAgICAgICAgbmV3U3RhdGUucHVzaChhY3Rpb24ucGF5bG9hZClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbmV3U3RhdGVcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmhhbmRsZWQgYWN0aW9uIHR5cGU6ICR7YWN0aW9uLnR5cGV9YClcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdIGFzIENhcnRTdGF0ZVtdXHJcblxyXG5mdW5jdGlvbiBDYXJ0UHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBhbnkpIHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIoY2FydEF2b3NSZWR1Y2VyLCBpbml0aWFsU3RhdGUpXHJcbiAgY29uc3QgdmFsdWUgPSB7IHN0YXRlLCBkaXNwYXRjaCB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0QXZvc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9DYXJ0QXZvc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VBdm9DYXJ0KCkge1xyXG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KENhcnRBdm9zQ29udGV4dClcclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZUF2b0NhcnQgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIENhcnRBdm9zQ29udGV4dCcpXHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0XHJcbn1cclxuXHJcbmV4cG9ydCB7IENhcnRQcm92aWRlciwgdXNlQXZvQ2FydCB9XHJcbiIsImltcG9ydCBCdXR0b24gZnJvbSAnQGNvbXBvbmVudHMvQnV0dG9uL0J1dHRvbidcclxuaW1wb3J0IHsgQ2hlY2tvdXRGb3JtIH0gZnJvbSAnQGNvbXBvbmVudHMvQ2hlY2tvdXRGb3JtL0NoZWNrb3V0Rm9ybSdcclxuaW1wb3J0IHsgQ2FydFN0YXRlLCB1c2VBdm9DYXJ0IH0gZnJvbSAnY29udGV4dHMvY2FydEF2b3NDb250ZXh0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IGNhbGNUb3RhbFByaWNlID0gKGl0ZW1zOiBDYXJ0U3RhdGVbXSk6IG51bWJlciA9PiB7XHJcbiAgbGV0IHRvdGFsUHJpY2UgPSAwXHJcbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgdG90YWxQcmljZSArPSBpdGVtLnF1YW50aXR5ICogaXRlbS5jYXJ0QXZvLnByaWNlXHJcbiAgfSlcclxuICByZXR1cm4gcGFyc2VGbG9hdCh0b3RhbFByaWNlLnRvRml4ZWQoMikpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnQoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBbaXNDaGVja291dFZpc2libGUsIHNldElzQ2hlY2tvdXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGF2b3NDYXJ0ID0gdXNlQXZvQ2FydCgpXHJcbiAgY29uc3QgYXZvcyA9IGF2b3NDYXJ0LnN0YXRlXHJcbiAgY29uc3QgdG90YWxRdWFudGl0eSA9IGF2b3NDYXJ0LnN0YXRlXHJcbiAgICAubWFwKChlbCkgPT4gZWwucXVhbnRpdHkpXHJcbiAgICAucmVkdWNlKChwcmV2VmFsdWUsIGN1cnJWYWx1ZSkgPT4gcHJldlZhbHVlICsgY3VyclZhbHVlLCAwKVxyXG4gIGNvbnN0IHRvdGFsUHJpY2UgPSBjYWxjVG90YWxQcmljZShhdm9zQ2FydC5zdGF0ZSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydFwiPlxyXG4gICAgICB7YXZvcy5tYXAoKGF2bykgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydF9fcm93XCIga2V5PXthdm8uY2FydEF2by5pZH0+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17YXZvLmNhcnRBdm8uaW1hZ2V9XHJcbiAgICAgICAgICAgIGFsdD17YXZvLmNhcnRBdm8ubmFtZX1cclxuICAgICAgICAgICAgdGl0bGU9e2F2by5jYXJ0QXZvLm5hbWV9XHJcbiAgICAgICAgICAgIGhlaWdodD17JzE0MCd9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzPnthdm8uY2FydEF2by5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIHthdm8ucXVhbnRpdHl9IHgge2F2by5jYXJ0QXZvLnByaWNlfeKCrFxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydF9fdG90YWxcIj5cclxuICAgICAgICA8aDM+VG90YWw6IHt0b3RhbFByaWNlfSDigqw8L2gzPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzQ2hlY2tvdXRWaXNpYmxlKCFpc0NoZWNrb3V0VmlzaWJsZSl9XHJcbiAgICAgICAgICBsYWJlbD17J0NoZWNrb3V0J31cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2lzQ2hlY2tvdXRWaXNpYmxlID8gPENoZWNrb3V0Rm9ybSBhbW91bnQ9e3RvdGFsUHJpY2V9IC8+IDogbnVsbH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIkJ1dHRvbiIsInByb3BzIiwib25DbGljayIsImxhYmVsIiwiQ2FyZEVsZW1lbnQiLCJ1c2VTdHJpcGUiLCJ1c2VFbGVtZW50cyIsImF4aW9zIiwiQ2hlY2tvdXRGb3JtIiwiYW1vdW50Iiwic3RyaXBlIiwiZWxlbWVudHMiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2FyZEVsZW1lbnQiLCJnZXRFbGVtZW50IiwiZXJyb3IiLCJwYXltZW50TWV0aG9kIiwiY3JlYXRlUGF5bWVudE1ldGhvZCIsInR5cGUiLCJjYXJkIiwiY29uc29sZSIsImxvZyIsImlkIiwiZGF0YSIsInBvc3QiLCJjbGVhciIsIlJlYWN0IiwiQ2FydEF2b3NDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVuZGVmaW5lZCIsImNhcnRBdm9zUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiY2FydEF2byIsInF1YW50aXR5IiwicGF5bG9hZCIsIml0ZW0iLCJmaW5kIiwiZWwiLCJuZXdTdGF0ZSIsImluZGV4IiwiZmluZEluZGV4IiwicHVzaCIsIkVycm9yIiwiaW5pdGlhbFN0YXRlIiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJ2YWx1ZSIsInVzZUF2b0NhcnQiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiY2FsY1RvdGFsUHJpY2UiLCJpdGVtcyIsInRvdGFsUHJpY2UiLCJmb3JFYWNoIiwicHJpY2UiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsIkNhcnQiLCJyb3V0ZXIiLCJpc0NoZWNrb3V0VmlzaWJsZSIsInNldElzQ2hlY2tvdXRWaXNpYmxlIiwiYXZvc0NhcnQiLCJhdm9zIiwidG90YWxRdWFudGl0eSIsIm1hcCIsInJlZHVjZSIsInByZXZWYWx1ZSIsImN1cnJWYWx1ZSIsImF2byIsImltYWdlIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=