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




const calcTotalPrice = items => {
  let totalPrice = 0;
  items.forEach(item => {
    totalPrice += item.quantity * item.cartAvo.price;
  });
  return parseFloat(totalPrice.toFixed(2));
};

function Cart() {
  const avosCart = (0,contexts_cartAvosContext__WEBPACK_IMPORTED_MODULE_1__.useAvoCart)();
  const avos = avosCart.state;
  const totalQuantity = avosCart.state.map(el => el.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);
  const totalPrice = calcTotalPrice(avosCart.state);
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
        lineNumber: 24,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
          children: avo.cartAvo.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          children: [avo.quantity, " x ", avo.cartAvo.price, "\u20AC"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, this)]
    }, avo.cartAvo.id, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "cart__total",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
        children: ["Total: ", totalPrice, " \u20AC"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_0__.default, {
        onClick: () => {},
        label: 'Checkout'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvY2FydC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsTUFBTUEsTUFBTSxHQUFJQyxLQUFELElBQXdCO0FBQ3JDLHNCQUNFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQSwyQkFDRTtBQUFRLGFBQU8sRUFBRUEsS0FBSyxDQUFDQyxPQUF2QjtBQUFBLDZCQUNFO0FBQUEsa0JBQUlELEtBQUssQ0FBQ0U7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU9ELENBUkQ7O0FBVUEsaUVBQWVILE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7O0FBY0EsTUFBTUssZUFBZSxnQkFBR0QsZ0RBQUEsQ0FFdEJHLFNBRnNCLENBQXhCOztBQUlBLFNBQVNDLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQTZDQyxNQUE3QyxFQUFpRTtBQUMvRCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLEtBQUw7QUFBWTtBQUNWLGNBQU07QUFBRUMsVUFBQUEsT0FBRjtBQUFXQyxVQUFBQTtBQUFYLFlBQXdCSCxNQUFNLENBQUNJLE9BQXJDO0FBQ0EsY0FBTUMsSUFBSSxHQUFHTixLQUFLLENBQUNPLElBQU4sQ0FBWUMsRUFBRCxJQUFRQSxFQUFFLENBQUNMLE9BQUgsQ0FBV00sRUFBWCxLQUFrQk4sT0FBTyxDQUFDTSxFQUE3QyxDQUFiO0FBQ0EsY0FBTUMsUUFBUSxHQUFHLENBQUMsR0FBR1YsS0FBSixDQUFqQjs7QUFDQSxZQUFJTSxJQUFKLEVBQVU7QUFDUjtBQUNBQSxVQUFBQSxJQUFJLENBQUNGLFFBQUwsSUFBaUJBLFFBQWpCO0FBQ0EsZ0JBQU1PLEtBQUssR0FBR0QsUUFBUSxDQUFDRSxTQUFULENBQW9CSixFQUFELElBQVFBLEVBQUUsQ0FBQ0wsT0FBSCxDQUFXTSxFQUFYLEtBQWtCTixPQUFPLENBQUNNLEVBQXJELENBQWQ7QUFDQUMsVUFBQUEsUUFBUSxDQUFDQyxLQUFELENBQVIsR0FBa0JMLElBQWxCO0FBQ0QsU0FMRCxNQUtPO0FBQ0w7QUFDQUksVUFBQUEsUUFBUSxDQUFDRyxJQUFULENBQWNaLE1BQU0sQ0FBQ0ksT0FBckI7QUFDRDs7QUFDRCxlQUFPSyxRQUFQO0FBQ0Q7O0FBQ0Q7QUFBUztBQUNQLGNBQU0sSUFBSUksS0FBSixDQUFXLDBCQUF5QmIsTUFBTSxDQUFDQyxJQUFLLEVBQWhELENBQU47QUFDRDtBQWxCSDtBQW9CRDs7QUFFRCxNQUFNYSxZQUFZLEdBQUcsRUFBckI7O0FBRUEsU0FBU0MsWUFBVCxDQUFzQjtBQUFFQyxFQUFBQTtBQUFGLENBQXRCLEVBQXlDO0FBQ3ZDLFFBQU0sQ0FBQ2pCLEtBQUQsRUFBUWtCLFFBQVIsSUFBb0J2Qiw2Q0FBQSxDQUFpQkksZUFBakIsRUFBa0NnQixZQUFsQyxDQUExQjtBQUNBLFFBQU1LLEtBQUssR0FBRztBQUFFcEIsSUFBQUEsS0FBRjtBQUFTa0IsSUFBQUE7QUFBVCxHQUFkO0FBQ0Esc0JBQ0UsOERBQUMsZUFBRCxDQUFpQixRQUFqQjtBQUEwQixTQUFLLEVBQUVFLEtBQWpDO0FBQUEsY0FDR0g7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7QUFFRCxTQUFTSSxVQUFULEdBQXNCO0FBQ3BCLFFBQU1DLE9BQU8sR0FBRzNCLDZDQUFBLENBQWlCQyxlQUFqQixDQUFoQjs7QUFDQSxNQUFJMEIsT0FBTyxLQUFLeEIsU0FBaEIsRUFBMkI7QUFDekIsVUFBTSxJQUFJZ0IsS0FBSixDQUFVLGtEQUFWLENBQU47QUFDRDs7QUFDRCxTQUFPUSxPQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNERDtBQUNBOzs7QUFFQSxNQUFNRSxjQUFjLEdBQUlDLEtBQUQsSUFBZ0M7QUFDckQsTUFBSUMsVUFBVSxHQUFHLENBQWpCO0FBQ0FELEVBQUFBLEtBQUssQ0FBQ0UsT0FBTixDQUFlckIsSUFBRCxJQUFVO0FBQ3RCb0IsSUFBQUEsVUFBVSxJQUFJcEIsSUFBSSxDQUFDRixRQUFMLEdBQWdCRSxJQUFJLENBQUNILE9BQUwsQ0FBYXlCLEtBQTNDO0FBQ0QsR0FGRDtBQUdBLFNBQU9DLFVBQVUsQ0FBQ0gsVUFBVSxDQUFDSSxPQUFYLENBQW1CLENBQW5CLENBQUQsQ0FBakI7QUFDRCxDQU5EOztBQVFlLFNBQVNDLElBQVQsR0FBZ0I7QUFDN0IsUUFBTUMsUUFBUSxHQUFHWCxvRUFBVSxFQUEzQjtBQUNBLFFBQU1ZLElBQUksR0FBR0QsUUFBUSxDQUFDaEMsS0FBdEI7QUFDQSxRQUFNa0MsYUFBYSxHQUFHRixRQUFRLENBQUNoQyxLQUFULENBQ25CbUMsR0FEbUIsQ0FDZDNCLEVBQUQsSUFBUUEsRUFBRSxDQUFDSixRQURJLEVBRW5CZ0MsTUFGbUIsQ0FFWixDQUFDQyxTQUFELEVBQVlDLFNBQVosS0FBMEJELFNBQVMsR0FBR0MsU0FGMUIsRUFFcUMsQ0FGckMsQ0FBdEI7QUFHQSxRQUFNWixVQUFVLEdBQUdGLGNBQWMsQ0FBQ1EsUUFBUSxDQUFDaEMsS0FBVixDQUFqQztBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQSxlQUNHaUMsSUFBSSxDQUFDRSxHQUFMLENBQVVJLEdBQUQsaUJBQ1I7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDhCQUNFO0FBQ0UsV0FBRyxFQUFFQSxHQUFHLENBQUNwQyxPQUFKLENBQVlxQyxLQURuQjtBQUVFLFdBQUcsRUFBRUQsR0FBRyxDQUFDcEMsT0FBSixDQUFZc0MsSUFGbkI7QUFHRSxhQUFLLEVBQUVGLEdBQUcsQ0FBQ3BDLE9BQUosQ0FBWXNDLElBSHJCO0FBSUUsY0FBTSxFQUFFO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBT0U7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLRixHQUFHLENBQUNwQyxPQUFKLENBQVlzQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQSxxQkFDR0YsR0FBRyxDQUFDbkMsUUFEUCxTQUNvQm1DLEdBQUcsQ0FBQ3BDLE9BQUosQ0FBWXlCLEtBRGhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBLE9BQWdDVyxHQUFHLENBQUNwQyxPQUFKLENBQVlNLEVBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxDQURILGVBaUJFO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSw4QkFDRTtBQUFBLDhCQUFZaUIsVUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLDhEQUFEO0FBQVEsZUFBTyxFQUFFLE1BQU0sQ0FBRSxDQUF6QjtBQUEyQixhQUFLLEVBQUU7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdCRDs7Ozs7Ozs7OztBQzNDRDs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxhdHppLW5leHQvLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24udHN4Iiwid2VicGFjazovL3BsYXR6aS1uZXh0Ly4vY29udGV4dHMvY2FydEF2b3NDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9wbGF0emktbmV4dC8uL3BhZ2VzL2NhcnQudHN4Iiwid2VicGFjazovL3BsYXR6aS1uZXh0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9wbGF0emktbmV4dC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBCdXR0b25Qcm9wcyB7XHJcbiAgbGFiZWw6IHN0cmluZ1xyXG4gIG9uQ2xpY2s6ICgpID0+IHZvaWRcclxufVxyXG5cclxuY29uc3QgQnV0dG9uID0gKHByb3BzOiBCdXR0b25Qcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgIDxwPntwcm9wcy5sYWJlbH08L3A+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhcnRTdGF0ZSB7XHJcbiAgY2FydEF2bzogVFByb2R1Y3RcclxuICBxdWFudGl0eTogbnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBDYXJ0QWN0aW9uIHtcclxuICB0eXBlOiAnYWRkJ1xyXG4gIHBheWxvYWQ6IENhcnRTdGF0ZVxyXG59XHJcblxyXG50eXBlIERpc3BhdGNoID0gKGFjdGlvbjogQ2FydEFjdGlvbikgPT4gdm9pZFxyXG5cclxuY29uc3QgQ2FydEF2b3NDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxcclxuICB7IHN0YXRlOiBDYXJ0U3RhdGVbXTsgZGlzcGF0Y2g6IERpc3BhdGNoIH0gfCB1bmRlZmluZWRcclxuPih1bmRlZmluZWQpXHJcblxyXG5mdW5jdGlvbiBjYXJ0QXZvc1JlZHVjZXIoc3RhdGU6IENhcnRTdGF0ZVtdLCBhY3Rpb246IENhcnRBY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdhZGQnOiB7XHJcbiAgICAgIGNvbnN0IHsgY2FydEF2bywgcXVhbnRpdHkgfSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBzdGF0ZS5maW5kKChlbCkgPT4gZWwuY2FydEF2by5pZCA9PT0gY2FydEF2by5pZClcclxuICAgICAgY29uc3QgbmV3U3RhdGUgPSBbLi4uc3RhdGVdXHJcbiAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgLy91cGRhdGVcclxuICAgICAgICBpdGVtLnF1YW50aXR5ICs9IHF1YW50aXR5XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBuZXdTdGF0ZS5maW5kSW5kZXgoKGVsKSA9PiBlbC5jYXJ0QXZvLmlkID09PSBjYXJ0QXZvLmlkKVxyXG4gICAgICAgIG5ld1N0YXRlW2luZGV4XSA9IGl0ZW1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvL2FkZFxyXG4gICAgICAgIG5ld1N0YXRlLnB1c2goYWN0aW9uLnBheWxvYWQpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5ld1N0YXRlXHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkIGFjdGlvbiB0eXBlOiAke2FjdGlvbi50eXBlfWApXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSBbXSBhcyBDYXJ0U3RhdGVbXVxyXG5cclxuZnVuY3Rpb24gQ2FydFByb3ZpZGVyKHsgY2hpbGRyZW4gfTogYW55KSB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKGNhcnRBdm9zUmVkdWNlciwgaW5pdGlhbFN0YXRlKVxyXG4gIGNvbnN0IHZhbHVlID0geyBzdGF0ZSwgZGlzcGF0Y2ggfVxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydEF2b3NDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ2FydEF2b3NDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gdXNlQXZvQ2FydCgpIHtcclxuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChDYXJ0QXZvc0NvbnRleHQpXHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VBdm9DYXJ0IG11c3QgYmUgdXNlZCB3aXRoaW4gYSBDYXJ0QXZvc0NvbnRleHQnKVxyXG4gIH1cclxuICByZXR1cm4gY29udGV4dFxyXG59XHJcblxyXG5leHBvcnQgeyBDYXJ0UHJvdmlkZXIsIHVzZUF2b0NhcnQgfVxyXG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gJ0Bjb21wb25lbnRzL0J1dHRvbi9CdXR0b24nXHJcbmltcG9ydCB7IENhcnRTdGF0ZSwgdXNlQXZvQ2FydCB9IGZyb20gJ2NvbnRleHRzL2NhcnRBdm9zQ29udGV4dCdcclxuXHJcbmNvbnN0IGNhbGNUb3RhbFByaWNlID0gKGl0ZW1zOiBDYXJ0U3RhdGVbXSk6IG51bWJlciA9PiB7XHJcbiAgbGV0IHRvdGFsUHJpY2UgPSAwXHJcbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgdG90YWxQcmljZSArPSBpdGVtLnF1YW50aXR5ICogaXRlbS5jYXJ0QXZvLnByaWNlXHJcbiAgfSlcclxuICByZXR1cm4gcGFyc2VGbG9hdCh0b3RhbFByaWNlLnRvRml4ZWQoMikpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnQoKSB7XHJcbiAgY29uc3QgYXZvc0NhcnQgPSB1c2VBdm9DYXJ0KClcclxuICBjb25zdCBhdm9zID0gYXZvc0NhcnQuc3RhdGVcclxuICBjb25zdCB0b3RhbFF1YW50aXR5ID0gYXZvc0NhcnQuc3RhdGVcclxuICAgIC5tYXAoKGVsKSA9PiBlbC5xdWFudGl0eSlcclxuICAgIC5yZWR1Y2UoKHByZXZWYWx1ZSwgY3VyclZhbHVlKSA9PiBwcmV2VmFsdWUgKyBjdXJyVmFsdWUsIDApXHJcbiAgY29uc3QgdG90YWxQcmljZSA9IGNhbGNUb3RhbFByaWNlKGF2b3NDYXJ0LnN0YXRlKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0XCI+XHJcbiAgICAgIHthdm9zLm1hcCgoYXZvKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0X19yb3dcIiBrZXk9e2F2by5jYXJ0QXZvLmlkfT5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXthdm8uY2FydEF2by5pbWFnZX1cclxuICAgICAgICAgICAgYWx0PXthdm8uY2FydEF2by5uYW1lfVxyXG4gICAgICAgICAgICB0aXRsZT17YXZvLmNhcnRBdm8ubmFtZX1cclxuICAgICAgICAgICAgaGVpZ2h0PXsnMTQwJ31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDM+e2F2by5jYXJ0QXZvLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAge2F2by5xdWFudGl0eX0geCB7YXZvLmNhcnRBdm8ucHJpY2V94oKsXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0X190b3RhbFwiPlxyXG4gICAgICAgIDxoMz5Ub3RhbDoge3RvdGFsUHJpY2V9IOKCrDwvaDM+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7fX0gbGFiZWw9eydDaGVja291dCd9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiQnV0dG9uIiwicHJvcHMiLCJvbkNsaWNrIiwibGFiZWwiLCJSZWFjdCIsIkNhcnRBdm9zQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1bmRlZmluZWQiLCJjYXJ0QXZvc1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJjYXJ0QXZvIiwicXVhbnRpdHkiLCJwYXlsb2FkIiwiaXRlbSIsImZpbmQiLCJlbCIsImlkIiwibmV3U3RhdGUiLCJpbmRleCIsImZpbmRJbmRleCIsInB1c2giLCJFcnJvciIsImluaXRpYWxTdGF0ZSIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwidmFsdWUiLCJ1c2VBdm9DYXJ0IiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJjYWxjVG90YWxQcmljZSIsIml0ZW1zIiwidG90YWxQcmljZSIsImZvckVhY2giLCJwcmljZSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiQ2FydCIsImF2b3NDYXJ0IiwiYXZvcyIsInRvdGFsUXVhbnRpdHkiLCJtYXAiLCJyZWR1Y2UiLCJwcmV2VmFsdWUiLCJjdXJyVmFsdWUiLCJhdm8iLCJpbWFnZSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9