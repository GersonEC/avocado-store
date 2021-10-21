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
      disabled: props.disabled,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: props.label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\code\\avocado-store\\components\\CheckoutForm\\CheckoutForm.tsx";




const CheckoutForm = ({
  amount
}) => {
  const stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_0__.useStripe)();
  const elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_0__.useElements)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

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
      router.push('/thanks');
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "checkout",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "checkout__inputs",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
            style: {
              display: 'block'
            },
            htmlFor: "name",
            children: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
            type: "text",
            id: "name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("label", {
            style: {
              display: 'block'
            },
            htmlFor: "surname",
            children: "Surname"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
            type: "text",
            id: "surname"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_0__.CardElement, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        type: "submit",
        disabled: !stripe,
        children: "Pay"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "cart__checkout",
      children: isCheckoutVisible ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_CheckoutForm_CheckoutForm__WEBPACK_IMPORTED_MODULE_1__.CheckoutForm, {
        amount: totalPrice
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 30
      }, this) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this)]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REYsZUFPRTtBQUFBLGdDQUNFO0FBQUEsb0JBQUtGLEdBQUcsQ0FBQ3JDLE9BQUosQ0FBWXVDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLHFCQUNHRixHQUFHLENBQUNwQyxRQURQLFNBQ29Cb0MsR0FBRyxDQUFDckMsT0FBSixDQUFZd0IsS0FEaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGO0FBQUEsT0FBZ0NhLEdBQUcsQ0FBQ3JDLE9BQUosQ0FBWWIsRUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELENBREgsZUFpQkU7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLDhCQUNFO0FBQUEsOEJBQVltQyxVQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsOERBQUQ7QUFDRSxlQUFPLEVBQUUsTUFBTU8sb0JBQW9CLENBQUMsQ0FBQ0QsaUJBQUYsQ0FEckM7QUFFRSxhQUFLLEVBQUU7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJGLGVBd0JFO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUEsZ0JBQ0dBLGlCQUFpQixnQkFBRyw4REFBQywrRUFBRDtBQUFjLGNBQU0sRUFBRU47QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFILEdBQTBDO0FBRDlEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4QkQ7Ozs7Ozs7Ozs7QUN0REQ7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BsYXR6aS1uZXh0Ly4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9wbGF0emktbmV4dC8uL2NvbXBvbmVudHMvQ2hlY2tvdXRGb3JtL0NoZWNrb3V0Rm9ybS50c3giLCJ3ZWJwYWNrOi8vcGxhdHppLW5leHQvLi9jb250ZXh0cy9jYXJ0QXZvc0NvbnRleHQudHN4Iiwid2VicGFjazovL3BsYXR6aS1uZXh0Ly4vcGFnZXMvY2FydC50c3giLCJ3ZWJwYWNrOi8vcGxhdHppLW5leHQvZXh0ZXJuYWwgXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiIiwid2VicGFjazovL3BsYXR6aS1uZXh0L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9wbGF0emktbmV4dC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vcGxhdHppLW5leHQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3BsYXR6aS1uZXh0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIEJ1dHRvblByb3BzIHtcclxuICBsYWJlbDogc3RyaW5nXHJcbiAgb25DbGljazogKCkgPT4gdm9pZFxyXG4gIGRpc2FibGVkPzogYm9vbGVhblxyXG59XHJcblxyXG5jb25zdCBCdXR0b24gPSAocHJvcHM6IEJ1dHRvblByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCI+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMub25DbGlja30gZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfT5cclxuICAgICAgICA8cD57cHJvcHMubGFiZWx9PC9wPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXHJcbiIsImltcG9ydCBCdXR0b24gZnJvbSAnQGNvbXBvbmVudHMvQnV0dG9uL0J1dHRvbidcclxuaW1wb3J0IHsgQ2FyZEVsZW1lbnQsIHVzZVN0cmlwZSwgdXNlRWxlbWVudHMgfSBmcm9tICdAc3RyaXBlL3JlYWN0LXN0cmlwZS1qcydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmludGVyZmFjZSBDaGVja291dEZvcm1Qcm9wcyB7XHJcbiAgYW1vdW50OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENoZWNrb3V0Rm9ybSA9ICh7IGFtb3VudCB9OiBDaGVja291dEZvcm1Qcm9wcykgPT4ge1xyXG4gIGNvbnN0IHN0cmlwZSA9IHVzZVN0cmlwZSgpXHJcbiAgY29uc3QgZWxlbWVudHMgPSB1c2VFbGVtZW50cygpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50OiBhbnkpID0+IHtcclxuICAgIC8vIEJsb2NrIG5hdGl2ZSBmb3JtIHN1Ym1pc3Npb24uXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgaWYgKCFzdHJpcGUgfHwgIWVsZW1lbnRzKSB7XHJcbiAgICAgIC8vIFN0cmlwZS5qcyBoYXMgbm90IGxvYWRlZCB5ZXQuIE1ha2Ugc3VyZSB0byBkaXNhYmxlXHJcbiAgICAgIC8vIGZvcm0gc3VibWlzc2lvbiB1bnRpbCBTdHJpcGUuanMgaGFzIGxvYWRlZC5cclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2V0IGEgcmVmZXJlbmNlIHRvIGEgbW91bnRlZCBDYXJkRWxlbWVudC4gRWxlbWVudHMga25vd3MgaG93XHJcbiAgICAvLyB0byBmaW5kIHlvdXIgQ2FyZEVsZW1lbnQgYmVjYXVzZSB0aGVyZSBjYW4gb25seSBldmVyIGJlIG9uZSBvZlxyXG4gICAgLy8gZWFjaCB0eXBlIG9mIGVsZW1lbnQuXHJcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGVsZW1lbnRzLmdldEVsZW1lbnQoQ2FyZEVsZW1lbnQpXHJcblxyXG4gICAgLy8gVXNlIHlvdXIgY2FyZCBFbGVtZW50IHdpdGggb3RoZXIgU3RyaXBlLmpzIEFQSXNcclxuICAgIGNvbnN0IHsgZXJyb3IsIHBheW1lbnRNZXRob2QgfSA9IGF3YWl0IHN0cmlwZS5jcmVhdGVQYXltZW50TWV0aG9kKHtcclxuICAgICAgdHlwZTogJ2NhcmQnLFxyXG4gICAgICBjYXJkOiBjYXJkRWxlbWVudCEsXHJcbiAgICB9KVxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdbZXJyb3JdJywgZXJyb3IpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB7IGlkIH0gPSBwYXltZW50TWV0aG9kIVxyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvY2hlY2tvdXQnLCB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgYW1vdW50OiBhbW91bnQgKiAxMDAsXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgIGVsZW1lbnRzLmdldEVsZW1lbnQoQ2FyZEVsZW1lbnQpPy5jbGVhcigpXHJcbiAgICAgIHJvdXRlci5wdXNoKCcvdGhhbmtzJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0XCI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXRfX2lucHV0c1wiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycgfX0gaHRtbEZvcj1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICBOYW1lXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snIH19IGh0bWxGb3I9XCJzdXJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgU3VybmFtZVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInN1cm5hbWVcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPENhcmRFbGVtZW50IC8+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9eyFzdHJpcGV9PlxyXG4gICAgICAgICAgUGF5XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FydFN0YXRlIHtcclxuICBjYXJ0QXZvOiBUUHJvZHVjdFxyXG4gIHF1YW50aXR5OiBudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIENhcnRBY3Rpb24ge1xyXG4gIHR5cGU6ICdhZGQnXHJcbiAgcGF5bG9hZDogQ2FydFN0YXRlXHJcbn1cclxuXHJcbnR5cGUgRGlzcGF0Y2ggPSAoYWN0aW9uOiBDYXJ0QWN0aW9uKSA9PiB2b2lkXHJcblxyXG5jb25zdCBDYXJ0QXZvc0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PFxyXG4gIHsgc3RhdGU6IENhcnRTdGF0ZVtdOyBkaXNwYXRjaDogRGlzcGF0Y2ggfSB8IHVuZGVmaW5lZFxyXG4+KHVuZGVmaW5lZClcclxuXHJcbmZ1bmN0aW9uIGNhcnRBdm9zUmVkdWNlcihzdGF0ZTogQ2FydFN0YXRlW10sIGFjdGlvbjogQ2FydEFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ2FkZCc6IHtcclxuICAgICAgY29uc3QgeyBjYXJ0QXZvLCBxdWFudGl0eSB9ID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgY29uc3QgaXRlbSA9IHN0YXRlLmZpbmQoKGVsKSA9PiBlbC5jYXJ0QXZvLmlkID09PSBjYXJ0QXZvLmlkKVxyXG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IFsuLi5zdGF0ZV1cclxuICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAvL3VwZGF0ZVxyXG4gICAgICAgIGl0ZW0ucXVhbnRpdHkgKz0gcXVhbnRpdHlcclxuICAgICAgICBjb25zdCBpbmRleCA9IG5ld1N0YXRlLmZpbmRJbmRleCgoZWwpID0+IGVsLmNhcnRBdm8uaWQgPT09IGNhcnRBdm8uaWQpXHJcbiAgICAgICAgbmV3U3RhdGVbaW5kZXhdID0gaXRlbVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vYWRkXHJcbiAgICAgICAgbmV3U3RhdGUucHVzaChhY3Rpb24ucGF5bG9hZClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbmV3U3RhdGVcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmhhbmRsZWQgYWN0aW9uIHR5cGU6ICR7YWN0aW9uLnR5cGV9YClcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdIGFzIENhcnRTdGF0ZVtdXHJcblxyXG5mdW5jdGlvbiBDYXJ0UHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBhbnkpIHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIoY2FydEF2b3NSZWR1Y2VyLCBpbml0aWFsU3RhdGUpXHJcbiAgY29uc3QgdmFsdWUgPSB7IHN0YXRlLCBkaXNwYXRjaCB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0QXZvc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9DYXJ0QXZvc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VBdm9DYXJ0KCkge1xyXG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KENhcnRBdm9zQ29udGV4dClcclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZUF2b0NhcnQgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIENhcnRBdm9zQ29udGV4dCcpXHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0XHJcbn1cclxuXHJcbmV4cG9ydCB7IENhcnRQcm92aWRlciwgdXNlQXZvQ2FydCB9XHJcbiIsImltcG9ydCBCdXR0b24gZnJvbSAnQGNvbXBvbmVudHMvQnV0dG9uL0J1dHRvbidcclxuaW1wb3J0IHsgQ2hlY2tvdXRGb3JtIH0gZnJvbSAnQGNvbXBvbmVudHMvQ2hlY2tvdXRGb3JtL0NoZWNrb3V0Rm9ybSdcclxuaW1wb3J0IHsgQ2FydFN0YXRlLCB1c2VBdm9DYXJ0IH0gZnJvbSAnY29udGV4dHMvY2FydEF2b3NDb250ZXh0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IGNhbGNUb3RhbFByaWNlID0gKGl0ZW1zOiBDYXJ0U3RhdGVbXSk6IG51bWJlciA9PiB7XHJcbiAgbGV0IHRvdGFsUHJpY2UgPSAwXHJcbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgdG90YWxQcmljZSArPSBpdGVtLnF1YW50aXR5ICogaXRlbS5jYXJ0QXZvLnByaWNlXHJcbiAgfSlcclxuICByZXR1cm4gcGFyc2VGbG9hdCh0b3RhbFByaWNlLnRvRml4ZWQoMikpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnQoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBbaXNDaGVja291dFZpc2libGUsIHNldElzQ2hlY2tvdXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGF2b3NDYXJ0ID0gdXNlQXZvQ2FydCgpXHJcbiAgY29uc3QgYXZvcyA9IGF2b3NDYXJ0LnN0YXRlXHJcbiAgY29uc3QgdG90YWxRdWFudGl0eSA9IGF2b3NDYXJ0LnN0YXRlXHJcbiAgICAubWFwKChlbCkgPT4gZWwucXVhbnRpdHkpXHJcbiAgICAucmVkdWNlKChwcmV2VmFsdWUsIGN1cnJWYWx1ZSkgPT4gcHJldlZhbHVlICsgY3VyclZhbHVlLCAwKVxyXG4gIGNvbnN0IHRvdGFsUHJpY2UgPSBjYWxjVG90YWxQcmljZShhdm9zQ2FydC5zdGF0ZSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydFwiPlxyXG4gICAgICB7YXZvcy5tYXAoKGF2bykgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydF9fcm93XCIga2V5PXthdm8uY2FydEF2by5pZH0+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17YXZvLmNhcnRBdm8uaW1hZ2V9XHJcbiAgICAgICAgICAgIGFsdD17YXZvLmNhcnRBdm8ubmFtZX1cclxuICAgICAgICAgICAgdGl0bGU9e2F2by5jYXJ0QXZvLm5hbWV9XHJcbiAgICAgICAgICAgIGhlaWdodD17JzE0MCd9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzPnthdm8uY2FydEF2by5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIHthdm8ucXVhbnRpdHl9IHgge2F2by5jYXJ0QXZvLnByaWNlfeKCrFxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydF9fdG90YWxcIj5cclxuICAgICAgICA8aDM+VG90YWw6IHt0b3RhbFByaWNlfSDigqw8L2gzPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzQ2hlY2tvdXRWaXNpYmxlKCFpc0NoZWNrb3V0VmlzaWJsZSl9XHJcbiAgICAgICAgICBsYWJlbD17J0NoZWNrb3V0J31cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0X19jaGVja291dFwiPlxyXG4gICAgICAgIHtpc0NoZWNrb3V0VmlzaWJsZSA/IDxDaGVja291dEZvcm0gYW1vdW50PXt0b3RhbFByaWNlfSAvPiA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiQnV0dG9uIiwicHJvcHMiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJsYWJlbCIsIkNhcmRFbGVtZW50IiwidXNlU3RyaXBlIiwidXNlRWxlbWVudHMiLCJheGlvcyIsInVzZVJvdXRlciIsIkNoZWNrb3V0Rm9ybSIsImFtb3VudCIsInN0cmlwZSIsImVsZW1lbnRzIiwicm91dGVyIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhcmRFbGVtZW50IiwiZ2V0RWxlbWVudCIsImVycm9yIiwicGF5bWVudE1ldGhvZCIsImNyZWF0ZVBheW1lbnRNZXRob2QiLCJ0eXBlIiwiY2FyZCIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImRhdGEiLCJwb3N0IiwiY2xlYXIiLCJwdXNoIiwiZGlzcGxheSIsIlJlYWN0IiwiQ2FydEF2b3NDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVuZGVmaW5lZCIsImNhcnRBdm9zUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiY2FydEF2byIsInF1YW50aXR5IiwicGF5bG9hZCIsIml0ZW0iLCJmaW5kIiwiZWwiLCJuZXdTdGF0ZSIsImluZGV4IiwiZmluZEluZGV4IiwiRXJyb3IiLCJpbml0aWFsU3RhdGUiLCJDYXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInZhbHVlIiwidXNlQXZvQ2FydCIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJjYWxjVG90YWxQcmljZSIsIml0ZW1zIiwidG90YWxQcmljZSIsImZvckVhY2giLCJwcmljZSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiQ2FydCIsImlzQ2hlY2tvdXRWaXNpYmxlIiwic2V0SXNDaGVja291dFZpc2libGUiLCJhdm9zQ2FydCIsImF2b3MiLCJ0b3RhbFF1YW50aXR5IiwibWFwIiwicmVkdWNlIiwicHJldlZhbHVlIiwiY3VyclZhbHVlIiwiYXZvIiwiaW1hZ2UiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==