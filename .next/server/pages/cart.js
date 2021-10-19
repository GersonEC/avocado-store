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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\code\\avocado-store\\pages\\cart.tsx";





const calcTotalPrice = items => {
  let totalPrice = 0;
  items.forEach(item => {
    totalPrice += item.quantity * item.cartAvo.price;
  });
  return parseFloat(totalPrice.toFixed(2));
};

function Cart() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const avosCart = (0,contexts_cartAvosContext__WEBPACK_IMPORTED_MODULE_1__.useAvoCart)();
  const avos = avosCart.state;
  const totalQuantity = avosCart.state.map(el => el.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);
  const totalPrice = calcTotalPrice(avosCart.state);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "cart",
    children: [avos.map(avo => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "cart__row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
        src: avo.cartAvo.image,
        alt: avo.cartAvo.name,
        title: avo.cartAvo.name,
        height: '140'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
          children: avo.cartAvo.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          children: [avo.quantity, " x ", avo.cartAvo.price, "\u20AC"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, this)]
    }, avo.cartAvo.id, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "cart__total",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
        children: ["Total: ", totalPrice, " \u20AC"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_0__.default, {
        onClick: () => router.push('/checkout'),
        label: 'Checkout'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQ29CcUMsR0FBRyxDQUFDdEMsT0FBSixDQUFZMEIsS0FEaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGO0FBQUEsT0FBZ0NZLEdBQUcsQ0FBQ3RDLE9BQUosQ0FBWU0sRUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELENBREgsZUFpQkU7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLDhCQUNFO0FBQUEsOEJBQVlrQixVQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsOERBQUQ7QUFBUSxlQUFPLEVBQUUsTUFBTU0sTUFBTSxDQUFDcEIsSUFBUCxDQUFZLFdBQVosQ0FBdkI7QUFBaUQsYUFBSyxFQUFFO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3QkQ7Ozs7Ozs7Ozs7QUM3Q0Q7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxhdHppLW5leHQvLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24udHN4Iiwid2VicGFjazovL3BsYXR6aS1uZXh0Ly4vY29udGV4dHMvY2FydEF2b3NDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9wbGF0emktbmV4dC8uL3BhZ2VzL2NhcnQudHN4Iiwid2VicGFjazovL3BsYXR6aS1uZXh0L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9wbGF0emktbmV4dC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcGxhdHppLW5leHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgQnV0dG9uUHJvcHMge1xyXG4gIGxhYmVsOiBzdHJpbmdcclxuICBvbkNsaWNrOiAoKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IEJ1dHRvbiA9IChwcm9wczogQnV0dG9uUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICA8cD57cHJvcHMubGFiZWx9PC9wPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYXJ0U3RhdGUge1xyXG4gIGNhcnRBdm86IFRQcm9kdWN0XHJcbiAgcXVhbnRpdHk6IG51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2FydEFjdGlvbiB7XHJcbiAgdHlwZTogJ2FkZCdcclxuICBwYXlsb2FkOiBDYXJ0U3RhdGVcclxufVxyXG5cclxudHlwZSBEaXNwYXRjaCA9IChhY3Rpb246IENhcnRBY3Rpb24pID0+IHZvaWRcclxuXHJcbmNvbnN0IENhcnRBdm9zQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8XHJcbiAgeyBzdGF0ZTogQ2FydFN0YXRlW107IGRpc3BhdGNoOiBEaXNwYXRjaCB9IHwgdW5kZWZpbmVkXHJcbj4odW5kZWZpbmVkKVxyXG5cclxuZnVuY3Rpb24gY2FydEF2b3NSZWR1Y2VyKHN0YXRlOiBDYXJ0U3RhdGVbXSwgYWN0aW9uOiBDYXJ0QWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSAnYWRkJzoge1xyXG4gICAgICBjb25zdCB7IGNhcnRBdm8sIHF1YW50aXR5IH0gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICBjb25zdCBpdGVtID0gc3RhdGUuZmluZCgoZWwpID0+IGVsLmNhcnRBdm8uaWQgPT09IGNhcnRBdm8uaWQpXHJcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0gWy4uLnN0YXRlXVxyXG4gICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgIC8vdXBkYXRlXHJcbiAgICAgICAgaXRlbS5xdWFudGl0eSArPSBxdWFudGl0eVxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gbmV3U3RhdGUuZmluZEluZGV4KChlbCkgPT4gZWwuY2FydEF2by5pZCA9PT0gY2FydEF2by5pZClcclxuICAgICAgICBuZXdTdGF0ZVtpbmRleF0gPSBpdGVtXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy9hZGRcclxuICAgICAgICBuZXdTdGF0ZS5wdXNoKGFjdGlvbi5wYXlsb2FkKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBuZXdTdGF0ZVxyXG4gICAgfVxyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuaGFuZGxlZCBhY3Rpb24gdHlwZTogJHthY3Rpb24udHlwZX1gKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0gW10gYXMgQ2FydFN0YXRlW11cclxuXHJcbmZ1bmN0aW9uIENhcnRQcm92aWRlcih7IGNoaWxkcmVuIH06IGFueSkge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihjYXJ0QXZvc1JlZHVjZXIsIGluaXRpYWxTdGF0ZSlcclxuICBjb25zdCB2YWx1ZSA9IHsgc3RhdGUsIGRpc3BhdGNoIH1cclxuICByZXR1cm4gKFxyXG4gICAgPENhcnRBdm9zQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NhcnRBdm9zQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZUF2b0NhcnQoKSB7XHJcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoQ2FydEF2b3NDb250ZXh0KVxyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcigndXNlQXZvQ2FydCBtdXN0IGJlIHVzZWQgd2l0aGluIGEgQ2FydEF2b3NDb250ZXh0JylcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHRcclxufVxyXG5cclxuZXhwb3J0IHsgQ2FydFByb3ZpZGVyLCB1c2VBdm9DYXJ0IH1cclxuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICdAY29tcG9uZW50cy9CdXR0b24vQnV0dG9uJ1xyXG5pbXBvcnQgeyBDYXJ0U3RhdGUsIHVzZUF2b0NhcnQgfSBmcm9tICdjb250ZXh0cy9jYXJ0QXZvc0NvbnRleHQnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgY2FsY1RvdGFsUHJpY2UgPSAoaXRlbXM6IENhcnRTdGF0ZVtdKTogbnVtYmVyID0+IHtcclxuICBsZXQgdG90YWxQcmljZSA9IDBcclxuICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICB0b3RhbFByaWNlICs9IGl0ZW0ucXVhbnRpdHkgKiBpdGVtLmNhcnRBdm8ucHJpY2VcclxuICB9KVxyXG4gIHJldHVybiBwYXJzZUZsb2F0KHRvdGFsUHJpY2UudG9GaXhlZCgyKSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IGF2b3NDYXJ0ID0gdXNlQXZvQ2FydCgpXHJcbiAgY29uc3QgYXZvcyA9IGF2b3NDYXJ0LnN0YXRlXHJcbiAgY29uc3QgdG90YWxRdWFudGl0eSA9IGF2b3NDYXJ0LnN0YXRlXHJcbiAgICAubWFwKChlbCkgPT4gZWwucXVhbnRpdHkpXHJcbiAgICAucmVkdWNlKChwcmV2VmFsdWUsIGN1cnJWYWx1ZSkgPT4gcHJldlZhbHVlICsgY3VyclZhbHVlLCAwKVxyXG4gIGNvbnN0IHRvdGFsUHJpY2UgPSBjYWxjVG90YWxQcmljZShhdm9zQ2FydC5zdGF0ZSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydFwiPlxyXG4gICAgICB7YXZvcy5tYXAoKGF2bykgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydF9fcm93XCIga2V5PXthdm8uY2FydEF2by5pZH0+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17YXZvLmNhcnRBdm8uaW1hZ2V9XHJcbiAgICAgICAgICAgIGFsdD17YXZvLmNhcnRBdm8ubmFtZX1cclxuICAgICAgICAgICAgdGl0bGU9e2F2by5jYXJ0QXZvLm5hbWV9XHJcbiAgICAgICAgICAgIGhlaWdodD17JzE0MCd9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzPnthdm8uY2FydEF2by5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIHthdm8ucXVhbnRpdHl9IHgge2F2by5jYXJ0QXZvLnByaWNlfeKCrFxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydF9fdG90YWxcIj5cclxuICAgICAgICA8aDM+VG90YWw6IHt0b3RhbFByaWNlfSDigqw8L2gzPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9jaGVja291dCcpfSBsYWJlbD17J0NoZWNrb3V0J30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJCdXR0b24iLCJwcm9wcyIsIm9uQ2xpY2siLCJsYWJlbCIsIlJlYWN0IiwiQ2FydEF2b3NDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVuZGVmaW5lZCIsImNhcnRBdm9zUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImNhcnRBdm8iLCJxdWFudGl0eSIsInBheWxvYWQiLCJpdGVtIiwiZmluZCIsImVsIiwiaWQiLCJuZXdTdGF0ZSIsImluZGV4IiwiZmluZEluZGV4IiwicHVzaCIsIkVycm9yIiwiaW5pdGlhbFN0YXRlIiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJ2YWx1ZSIsInVzZUF2b0NhcnQiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVJvdXRlciIsImNhbGNUb3RhbFByaWNlIiwiaXRlbXMiLCJ0b3RhbFByaWNlIiwiZm9yRWFjaCIsInByaWNlIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJDYXJ0Iiwicm91dGVyIiwiYXZvc0NhcnQiLCJhdm9zIiwidG90YWxRdWFudGl0eSIsIm1hcCIsInJlZHVjZSIsInByZXZWYWx1ZSIsImN1cnJWYWx1ZSIsImF2byIsImltYWdlIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=