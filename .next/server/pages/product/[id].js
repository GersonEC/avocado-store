module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/product/[id].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Button/Button.tsx":
/*!**************************************!*\
  !*** ./components/Button/Button.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\code\\avocado-store\\components\\Button\\Button.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Button = props => {
  return __jsx("div", {
    className: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("button", {
    onClick: props.onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, props.label)));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./contexts/cartAvosContext.tsx":
/*!**************************************!*\
  !*** ./contexts/cartAvosContext.tsx ***!
  \**************************************/
/*! exports provided: CartProvider, useAvoCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartProvider", function() { return CartProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAvoCart", function() { return useAvoCart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\code\\avocado-store\\contexts\\cartAvosContext.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const CartAvosContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createContext"](undefined);

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
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0__["useReducer"](cartAvosReducer, initialState);
  const value = {
    state,
    dispatch
  };
  return __jsx(CartAvosContext.Provider, {
    value: value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, children);
}

function useAvoCart() {
  const context = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](CartAvosContext);

  if (context === undefined) {
    throw new Error('useAvoCart must be used within a CartAvosContext');
  }

  return context;
}



/***/ }),

/***/ "./pages/product/[id].tsx":
/*!********************************!*\
  !*** ./pages/product/[id].tsx ***!
  \********************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var contexts_cartAvosContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! contexts/cartAvosContext */ "./contexts/cartAvosContext.tsx");
var _jsxFileName = "C:\\code\\avocado-store\\pages\\product\\[id].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const getStaticPaths = async () => {
  const response = await fetch('https://avocado-store-i8pcleaq5-avo-team.vercel.app/api/avo');
  const {
    data: avocados
  } = await response.json();
  const paths = avocados.map(avo => ({
    params: {
      id: avo.id
    }
  }));
  return {
    paths,
    //Incremental static generation, qualsiasi pagina che non si specifichi nei paths, dara 404
    fallback: false
  };
};
const getStaticProps = async ({
  params
}) => {
  const id = params === null || params === void 0 ? void 0 : params.id;
  const response = await fetch(`https://avocado-store-i8pcleaq5-avo-team.vercel.app/api/avo/${id}`);
  const product = await response.json();
  return {
    props: {
      product
    }
  };
};
function ProductItem({
  product
}) {
  const {
    dispatch
  } = Object(contexts_cartAvosContext__WEBPACK_IMPORTED_MODULE_2__["useAvoCart"])();
  const {
    0: quantity,
    1: setQuantity
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);

  const onQuantityChange = e => {
    setQuantity(parseInt(e.target.value));
  };

  const onAddToCartClick = () => {
    debugger;
    dispatch({
      type: 'add',
      payload: {
        cartAvo: product,
        quantity
      }
    });
    setQuantity(1);
  };

  return __jsx("div", {
    className: "product",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "product-preview",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: product.image,
    title: product.name,
    alt: product.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "product-preview__cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, product.name), __jsx("p", {
    className: "product-preview__cart--price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, product.price), __jsx("p", {
    className: "product-preview__cart--sku",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, "SKU:", product.sku), __jsx("div", {
    style: {
      display: 'flex'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx("input", {
    style: {
      padding: '0.2rem 0.8rem',
      inlineSize: '5rem'
    },
    type: "number",
    min: "1",
    placeholder: "Quantity",
    value: quantity,
    onChange: onQuantityChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: 'Add to Cart',
    onClick: onAddToCartClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: "product-detail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, "About this Avocado"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, product.attributes.description)), __jsx("div", {
    className: "product-attributes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, "Attributes"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, "Shape:"), " ", product.attributes.shape), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, "Hardiness:"), " ", product.attributes.hardiness), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, "Taste:"), " ", product.attributes.taste)));
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9jYXJ0QXZvc0NvbnRleHQudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL3Byb2R1Y3QvLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInByb3BzIiwib25DbGljayIsImxhYmVsIiwiQ2FydEF2b3NDb250ZXh0IiwiUmVhY3QiLCJ1bmRlZmluZWQiLCJjYXJ0QXZvc1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJjYXJ0QXZvIiwicXVhbnRpdHkiLCJwYXlsb2FkIiwiaXRlbSIsImZpbmQiLCJlbCIsImlkIiwibmV3U3RhdGUiLCJpbmRleCIsImZpbmRJbmRleCIsInB1c2giLCJFcnJvciIsImluaXRpYWxTdGF0ZSIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ2YWx1ZSIsInVzZUF2b0NhcnQiLCJjb250ZXh0IiwiZ2V0U3RhdGljUGF0aHMiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImF2b2NhZG9zIiwianNvbiIsInBhdGhzIiwibWFwIiwiYXZvIiwicGFyYW1zIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsInByb2R1Y3QiLCJQcm9kdWN0SXRlbSIsInNldFF1YW50aXR5IiwidXNlU3RhdGUiLCJvblF1YW50aXR5Q2hhbmdlIiwiZSIsInBhcnNlSW50IiwidGFyZ2V0Iiwib25BZGRUb0NhcnRDbGljayIsImltYWdlIiwibmFtZSIsInByaWNlIiwic2t1IiwiZGlzcGxheSIsInBhZGRpbmciLCJpbmxpbmVTaXplIiwiYXR0cmlidXRlcyIsImRlc2NyaXB0aW9uIiwic2hhcGUiLCJoYXJkaW5lc3MiLCJ0YXN0ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7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QSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixPQUMyQmpCLE9BQU8sQ0FBQ2dCLFVBQVIsQ0FBbUJFLEtBRDlDLENBRkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixPQUMrQmxCLE9BQU8sQ0FBQ2dCLFVBQVIsQ0FBbUJHLFNBRGxELENBTEYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLE9BQzJCbkIsT0FBTyxDQUFDZ0IsVUFBUixDQUFtQkksS0FEOUMsQ0FSRixDQXhCRixDQURGO0FBdUNELEM7Ozs7Ozs7Ozs7O0FDaEdELGtDIiwiZmlsZSI6InBhZ2VzL3Byb2R1Y3QvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcHJvZHVjdC9baWRdLnRzeFwiKTtcbiIsImludGVyZmFjZSBCdXR0b25Qcm9wcyB7XHJcbiAgbGFiZWw6IHN0cmluZ1xyXG4gIG9uQ2xpY2s6ICgpID0+IHZvaWRcclxufVxyXG5cclxuY29uc3QgQnV0dG9uID0gKHByb3BzOiBCdXR0b25Qcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgIDxwPntwcm9wcy5sYWJlbH08L3A+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbnRlcmZhY2UgQ2FydFN0YXRlIHtcclxuICBjYXJ0QXZvOiBUUHJvZHVjdFxyXG4gIHF1YW50aXR5OiBudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIENhcnRBY3Rpb24ge1xyXG4gIHR5cGU6ICdhZGQnXHJcbiAgcGF5bG9hZDogQ2FydFN0YXRlXHJcbn1cclxuXHJcbnR5cGUgRGlzcGF0Y2ggPSAoYWN0aW9uOiBDYXJ0QWN0aW9uKSA9PiB2b2lkXHJcblxyXG5jb25zdCBDYXJ0QXZvc0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PFxyXG4gIHsgc3RhdGU6IENhcnRTdGF0ZVtdOyBkaXNwYXRjaDogRGlzcGF0Y2ggfSB8IHVuZGVmaW5lZFxyXG4+KHVuZGVmaW5lZClcclxuXHJcbmZ1bmN0aW9uIGNhcnRBdm9zUmVkdWNlcihzdGF0ZTogQ2FydFN0YXRlW10sIGFjdGlvbjogQ2FydEFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ2FkZCc6IHtcclxuICAgICAgY29uc3QgeyBjYXJ0QXZvLCBxdWFudGl0eSB9ID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgY29uc3QgaXRlbSA9IHN0YXRlLmZpbmQoKGVsKSA9PiBlbC5jYXJ0QXZvLmlkID09PSBjYXJ0QXZvLmlkKVxyXG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IFsuLi5zdGF0ZV1cclxuICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAvL3VwZGF0ZVxyXG4gICAgICAgIGl0ZW0ucXVhbnRpdHkgKz0gcXVhbnRpdHlcclxuICAgICAgICBjb25zdCBpbmRleCA9IG5ld1N0YXRlLmZpbmRJbmRleCgoZWwpID0+IGVsLmNhcnRBdm8uaWQgPT09IGNhcnRBdm8uaWQpXHJcbiAgICAgICAgbmV3U3RhdGVbaW5kZXhdID0gaXRlbVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vYWRkXHJcbiAgICAgICAgbmV3U3RhdGUucHVzaChhY3Rpb24ucGF5bG9hZClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbmV3U3RhdGVcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmhhbmRsZWQgYWN0aW9uIHR5cGU6ICR7YWN0aW9uLnR5cGV9YClcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdIGFzIENhcnRTdGF0ZVtdXHJcblxyXG5mdW5jdGlvbiBDYXJ0UHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBhbnkpIHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIoY2FydEF2b3NSZWR1Y2VyLCBpbml0aWFsU3RhdGUpXHJcbiAgY29uc3QgdmFsdWUgPSB7IHN0YXRlLCBkaXNwYXRjaCB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0QXZvc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9DYXJ0QXZvc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VBdm9DYXJ0KCkge1xyXG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KENhcnRBdm9zQ29udGV4dClcclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZUF2b0NhcnQgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIENhcnRBdm9zQ29udGV4dCcpXHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0XHJcbn1cclxuXHJcbmV4cG9ydCB7IENhcnRQcm92aWRlciwgdXNlQXZvQ2FydCB9XHJcbiIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQGNvbXBvbmVudHMvQnV0dG9uL0J1dHRvbidcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlQXZvQ2FydCB9IGZyb20gJ2NvbnRleHRzL2NhcnRBdm9zQ29udGV4dCdcclxuaW1wb3J0IHsgdHlwZSB9IGZyb20gJ29zJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAnaHR0cHM6Ly9hdm9jYWRvLXN0b3JlLWk4cGNsZWFxNS1hdm8tdGVhbS52ZXJjZWwuYXBwL2FwaS9hdm8nXHJcbiAgKVxyXG4gIGNvbnN0IHsgZGF0YTogYXZvY2Fkb3MgfTogVEFQSUF2b1Jlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgY29uc3QgcGF0aHMgPSBhdm9jYWRvcy5tYXAoKGF2bykgPT4gKHtcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBpZDogYXZvLmlkLFxyXG4gICAgfSxcclxuICB9KSlcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICAvL0luY3JlbWVudGFsIHN0YXRpYyBnZW5lcmF0aW9uLCBxdWFsc2lhc2kgcGFnaW5hIGNoZSBub24gc2kgc3BlY2lmaWNoaSBuZWkgcGF0aHMsIGRhcmEgNDA0XHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCBpZCA9IHBhcmFtcz8uaWQgYXMgc3RyaW5nXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL2F2b2NhZG8tc3RvcmUtaThwY2xlYXE1LWF2by10ZWFtLnZlcmNlbC5hcHAvYXBpL2F2by8ke2lkfWBcclxuICApXHJcbiAgY29uc3QgcHJvZHVjdDogVFByb2R1Y3QgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcHJvZHVjdCxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0SXRlbSh7IHByb2R1Y3QgfTogeyBwcm9kdWN0OiBUUHJvZHVjdCB9KSB7XHJcbiAgY29uc3QgeyBkaXNwYXRjaCB9ID0gdXNlQXZvQ2FydCgpXHJcbiAgY29uc3QgW3F1YW50aXR5LCBzZXRRdWFudGl0eV0gPSB1c2VTdGF0ZSgxKVxyXG5cclxuICBjb25zdCBvblF1YW50aXR5Q2hhbmdlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgc2V0UXVhbnRpdHkocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25BZGRUb0NhcnRDbGljayA9ICgpID0+IHtcclxuICAgIGRlYnVnZ2VyXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6ICdhZGQnLFxyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgY2FydEF2bzogcHJvZHVjdCxcclxuICAgICAgICBxdWFudGl0eSxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICBzZXRRdWFudGl0eSgxKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJldmlld1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPXtwcm9kdWN0LmltYWdlfSB0aXRsZT17cHJvZHVjdC5uYW1lfSBhbHQ9e3Byb2R1Y3QubmFtZX0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJldmlld19fY2FydFwiPlxyXG4gICAgICAgICAgPGgzPntwcm9kdWN0Lm5hbWV9PC9oMz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJldmlld19fY2FydC0tcHJpY2VcIj57cHJvZHVjdC5wcmljZX08L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0LXByZXZpZXdfX2NhcnQtLXNrdVwiPlNLVTp7cHJvZHVjdC5za3V9PC9wPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6ICcwLjJyZW0gMC44cmVtJywgaW5saW5lU2l6ZTogJzVyZW0nIH19XHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgbWluPVwiMVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJRdWFudGl0eVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3F1YW50aXR5fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblF1YW50aXR5Q2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGxhYmVsPXsnQWRkIHRvIENhcnQnfSBvbkNsaWNrPXtvbkFkZFRvQ2FydENsaWNrfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsXCI+XHJcbiAgICAgICAgPGgzPkFib3V0IHRoaXMgQXZvY2FkbzwvaDM+XHJcbiAgICAgICAgPHA+e3Byb2R1Y3QuYXR0cmlidXRlcy5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtYXR0cmlidXRlc1wiPlxyXG4gICAgICAgIDxoMz5BdHRyaWJ1dGVzPC9oMz5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxzdHJvbmc+U2hhcGU6PC9zdHJvbmc+IHtwcm9kdWN0LmF0dHJpYnV0ZXMuc2hhcGV9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPHN0cm9uZz5IYXJkaW5lc3M6PC9zdHJvbmc+IHtwcm9kdWN0LmF0dHJpYnV0ZXMuaGFyZGluZXNzfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxzdHJvbmc+VGFzdGU6PC9zdHJvbmc+IHtwcm9kdWN0LmF0dHJpYnV0ZXMudGFzdGV9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9