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
/* harmony import */ var contexts_cartAvosContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! contexts/cartAvosContext */ "./contexts/cartAvosContext.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\code\\avocado-store\\pages\\cart.tsx";



function Cart() {
  const avosCart = (0,contexts_cartAvosContext__WEBPACK_IMPORTED_MODULE_1__.useAvoCart)();
  const avos = avosCart.state;
  const totalQuantity = avosCart.state.map(el => el.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "cart",
    children: [avos.map(avo => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "cart__row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
        src: avo.cartAvo.image,
        alt: avo.cartAvo.name,
        title: avo.cartAvo.name,
        height: '140'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
          children: avo.cartAvo.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          children: [avo.quantity, " x ", avo.cartAvo.price, "\u20AC"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, this)]
    }, avo.cartAvo.id, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "cart__total",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
        children: ["Totale: ", totalQuantity]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_0__.default, {
        onClick: () => {},
        label: 'Checkout'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUE7QUFBQSxZQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdCRDs7Ozs7Ozs7OztBQ2xDRDs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxhdHppLW5leHQvLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24udHN4Iiwid2VicGFjazovL3BsYXR6aS1uZXh0Ly4vY29udGV4dHMvY2FydEF2b3NDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9wbGF0emktbmV4dC8uL3BhZ2VzL2NhcnQudHN4Iiwid2VicGFjazovL3BsYXR6aS1uZXh0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9wbGF0emktbmV4dC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBCdXR0b25Qcm9wcyB7XHJcbiAgbGFiZWw6IHN0cmluZ1xyXG4gIG9uQ2xpY2s6ICgpID0+IHZvaWRcclxufVxyXG5cclxuY29uc3QgQnV0dG9uID0gKHByb3BzOiBCdXR0b25Qcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgIDxwPntwcm9wcy5sYWJlbH08L3A+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbnRlcmZhY2UgQ2FydFN0YXRlIHtcclxuICBjYXJ0QXZvOiBUUHJvZHVjdFxyXG4gIHF1YW50aXR5OiBudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIENhcnRBY3Rpb24ge1xyXG4gIHR5cGU6ICdhZGQnXHJcbiAgcGF5bG9hZDogQ2FydFN0YXRlXHJcbn1cclxuXHJcbnR5cGUgRGlzcGF0Y2ggPSAoYWN0aW9uOiBDYXJ0QWN0aW9uKSA9PiB2b2lkXHJcblxyXG5jb25zdCBDYXJ0QXZvc0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PFxyXG4gIHsgc3RhdGU6IENhcnRTdGF0ZVtdOyBkaXNwYXRjaDogRGlzcGF0Y2ggfSB8IHVuZGVmaW5lZFxyXG4+KHVuZGVmaW5lZClcclxuXHJcbmZ1bmN0aW9uIGNhcnRBdm9zUmVkdWNlcihzdGF0ZTogQ2FydFN0YXRlW10sIGFjdGlvbjogQ2FydEFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ2FkZCc6IHtcclxuICAgICAgY29uc3QgeyBjYXJ0QXZvLCBxdWFudGl0eSB9ID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgY29uc3QgaXRlbSA9IHN0YXRlLmZpbmQoKGVsKSA9PiBlbC5jYXJ0QXZvLmlkID09PSBjYXJ0QXZvLmlkKVxyXG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IFsuLi5zdGF0ZV1cclxuICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAvL3VwZGF0ZVxyXG4gICAgICAgIGl0ZW0ucXVhbnRpdHkgKz0gcXVhbnRpdHlcclxuICAgICAgICBjb25zdCBpbmRleCA9IG5ld1N0YXRlLmZpbmRJbmRleCgoZWwpID0+IGVsLmNhcnRBdm8uaWQgPT09IGNhcnRBdm8uaWQpXHJcbiAgICAgICAgbmV3U3RhdGVbaW5kZXhdID0gaXRlbVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vYWRkXHJcbiAgICAgICAgbmV3U3RhdGUucHVzaChhY3Rpb24ucGF5bG9hZClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbmV3U3RhdGVcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmhhbmRsZWQgYWN0aW9uIHR5cGU6ICR7YWN0aW9uLnR5cGV9YClcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdIGFzIENhcnRTdGF0ZVtdXHJcblxyXG5mdW5jdGlvbiBDYXJ0UHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBhbnkpIHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIoY2FydEF2b3NSZWR1Y2VyLCBpbml0aWFsU3RhdGUpXHJcbiAgY29uc3QgdmFsdWUgPSB7IHN0YXRlLCBkaXNwYXRjaCB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0QXZvc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9DYXJ0QXZvc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VBdm9DYXJ0KCkge1xyXG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KENhcnRBdm9zQ29udGV4dClcclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZUF2b0NhcnQgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIENhcnRBdm9zQ29udGV4dCcpXHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0XHJcbn1cclxuXHJcbmV4cG9ydCB7IENhcnRQcm92aWRlciwgdXNlQXZvQ2FydCB9XHJcbiIsImltcG9ydCBCdXR0b24gZnJvbSAnQGNvbXBvbmVudHMvQnV0dG9uL0J1dHRvbidcclxuaW1wb3J0IHsgdXNlQXZvQ2FydCB9IGZyb20gJ2NvbnRleHRzL2NhcnRBdm9zQ29udGV4dCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnQoKSB7XHJcbiAgY29uc3QgYXZvc0NhcnQgPSB1c2VBdm9DYXJ0KClcclxuICBjb25zdCBhdm9zID0gYXZvc0NhcnQuc3RhdGVcclxuICBjb25zdCB0b3RhbFF1YW50aXR5ID0gYXZvc0NhcnQuc3RhdGVcclxuICAgIC5tYXAoKGVsKSA9PiBlbC5xdWFudGl0eSlcclxuICAgIC5yZWR1Y2UoKHByZXZWYWx1ZSwgY3VyclZhbHVlKSA9PiBwcmV2VmFsdWUgKyBjdXJyVmFsdWUsIDApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnRcIj5cclxuICAgICAge2F2b3MubWFwKChhdm8pID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnRfX3Jvd1wiIGtleT17YXZvLmNhcnRBdm8uaWR9PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9e2F2by5jYXJ0QXZvLmltYWdlfVxyXG4gICAgICAgICAgICBhbHQ9e2F2by5jYXJ0QXZvLm5hbWV9XHJcbiAgICAgICAgICAgIHRpdGxlPXthdm8uY2FydEF2by5uYW1lfVxyXG4gICAgICAgICAgICBoZWlnaHQ9eycxNDAnfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMz57YXZvLmNhcnRBdm8ubmFtZX08L2gzPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICB7YXZvLnF1YW50aXR5fSB4IHthdm8uY2FydEF2by5wcmljZX3igqxcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnRfX3RvdGFsXCI+XHJcbiAgICAgICAgPGgzPlRvdGFsZToge3RvdGFsUXVhbnRpdHl9PC9oMz5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHt9fSBsYWJlbD17J0NoZWNrb3V0J30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJCdXR0b24iLCJwcm9wcyIsIm9uQ2xpY2siLCJsYWJlbCIsIlJlYWN0IiwiQ2FydEF2b3NDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVuZGVmaW5lZCIsImNhcnRBdm9zUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImNhcnRBdm8iLCJxdWFudGl0eSIsInBheWxvYWQiLCJpdGVtIiwiZmluZCIsImVsIiwiaWQiLCJuZXdTdGF0ZSIsImluZGV4IiwiZmluZEluZGV4IiwicHVzaCIsIkVycm9yIiwiaW5pdGlhbFN0YXRlIiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJ2YWx1ZSIsInVzZUF2b0NhcnQiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIkNhcnQiLCJhdm9zQ2FydCIsImF2b3MiLCJ0b3RhbFF1YW50aXR5IiwibWFwIiwicmVkdWNlIiwicHJldlZhbHVlIiwiY3VyclZhbHVlIiwiYXZvIiwiaW1hZ2UiLCJuYW1lIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9