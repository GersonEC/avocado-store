"use strict";
(() => {
var exports = {};
exports.id = "pages/product/[id]";
exports.ids = ["pages/product/[id]"];
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

/***/ "./pages/product/[id].tsx":
/*!********************************!*\
  !*** ./pages/product/[id].tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (/* binding */ ProductItem)
/* harmony export */ });
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var contexts_cartAvosContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! contexts/cartAvosContext */ "./contexts/cartAvosContext.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\code\\avocado-store\\pages\\product\\[id].tsx";




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
  } = (0,contexts_cartAvosContext__WEBPACK_IMPORTED_MODULE_2__.useAvoCart)();
  const {
    0: quantity,
    1: setQuantity
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);

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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "product",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "product-preview",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
        src: product.image,
        title: product.name,
        alt: product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "product-preview__cart",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
          children: product.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: "product-preview__cart--price",
          children: [product.price, " \u20AC"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: "product-preview__cart--sku",
          children: ["SKU:", product.sku]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          style: {
            display: 'flex'
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
            style: {
              padding: '0.2rem 0.8rem',
              inlineSize: '5rem'
            },
            type: "number",
            min: "1",
            placeholder: "Quantity",
            value: quantity,
            onChange: onQuantityChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_0__.default, {
            label: 'Add to Cart',
            onClick: onAddToCartClick
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "product-detail",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
        children: "About this Avocado"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: product.attributes.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "product-attributes",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
        children: "Attributes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("strong", {
          children: "Shape:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this), " ", product.attributes.shape]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("strong", {
          children: "Hardiness:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, this), " ", product.attributes.hardiness]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("strong", {
          children: "Taste:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this), " ", product.attributes.taste]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/product/[id].tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly9wbGF0emktbmV4dC8uL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vcGxhdHppLW5leHQvLi9jb250ZXh0cy9jYXJ0QXZvc0NvbnRleHQudHN4Iiwid2VicGFjazovL3BsYXR6aS1uZXh0Ly4vcGFnZXMvcHJvZHVjdC9baWRdLnRzeCIsIndlYnBhY2s6Ly9wbGF0emktbmV4dC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcGxhdHppLW5leHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgQnV0dG9uUHJvcHMge1xyXG4gIGxhYmVsOiBzdHJpbmdcclxuICBvbkNsaWNrOiAoKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IEJ1dHRvbiA9IChwcm9wczogQnV0dG9uUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICA8cD57cHJvcHMubGFiZWx9PC9wPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW50ZXJmYWNlIENhcnRTdGF0ZSB7XHJcbiAgY2FydEF2bzogVFByb2R1Y3RcclxuICBxdWFudGl0eTogbnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBDYXJ0QWN0aW9uIHtcclxuICB0eXBlOiAnYWRkJ1xyXG4gIHBheWxvYWQ6IENhcnRTdGF0ZVxyXG59XHJcblxyXG50eXBlIERpc3BhdGNoID0gKGFjdGlvbjogQ2FydEFjdGlvbikgPT4gdm9pZFxyXG5cclxuY29uc3QgQ2FydEF2b3NDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxcclxuICB7IHN0YXRlOiBDYXJ0U3RhdGVbXTsgZGlzcGF0Y2g6IERpc3BhdGNoIH0gfCB1bmRlZmluZWRcclxuPih1bmRlZmluZWQpXHJcblxyXG5mdW5jdGlvbiBjYXJ0QXZvc1JlZHVjZXIoc3RhdGU6IENhcnRTdGF0ZVtdLCBhY3Rpb246IENhcnRBY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdhZGQnOiB7XHJcbiAgICAgIGNvbnN0IHsgY2FydEF2bywgcXVhbnRpdHkgfSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBzdGF0ZS5maW5kKChlbCkgPT4gZWwuY2FydEF2by5pZCA9PT0gY2FydEF2by5pZClcclxuICAgICAgY29uc3QgbmV3U3RhdGUgPSBbLi4uc3RhdGVdXHJcbiAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgLy91cGRhdGVcclxuICAgICAgICBpdGVtLnF1YW50aXR5ICs9IHF1YW50aXR5XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBuZXdTdGF0ZS5maW5kSW5kZXgoKGVsKSA9PiBlbC5jYXJ0QXZvLmlkID09PSBjYXJ0QXZvLmlkKVxyXG4gICAgICAgIG5ld1N0YXRlW2luZGV4XSA9IGl0ZW1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvL2FkZFxyXG4gICAgICAgIG5ld1N0YXRlLnB1c2goYWN0aW9uLnBheWxvYWQpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5ld1N0YXRlXHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkIGFjdGlvbiB0eXBlOiAke2FjdGlvbi50eXBlfWApXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSBbXSBhcyBDYXJ0U3RhdGVbXVxyXG5cclxuZnVuY3Rpb24gQ2FydFByb3ZpZGVyKHsgY2hpbGRyZW4gfTogYW55KSB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKGNhcnRBdm9zUmVkdWNlciwgaW5pdGlhbFN0YXRlKVxyXG4gIGNvbnN0IHZhbHVlID0geyBzdGF0ZSwgZGlzcGF0Y2ggfVxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydEF2b3NDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ2FydEF2b3NDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gdXNlQXZvQ2FydCgpIHtcclxuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChDYXJ0QXZvc0NvbnRleHQpXHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VBdm9DYXJ0IG11c3QgYmUgdXNlZCB3aXRoaW4gYSBDYXJ0QXZvc0NvbnRleHQnKVxyXG4gIH1cclxuICByZXR1cm4gY29udGV4dFxyXG59XHJcblxyXG5leHBvcnQgeyBDYXJ0UHJvdmlkZXIsIHVzZUF2b0NhcnQgfVxyXG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcidcclxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0Bjb21wb25lbnRzL0J1dHRvbi9CdXR0b24nXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUF2b0NhcnQgfSBmcm9tICdjb250ZXh0cy9jYXJ0QXZvc0NvbnRleHQnXHJcbmltcG9ydCB7IHR5cGUgfSBmcm9tICdvcydcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgJ2h0dHBzOi8vYXZvY2Fkby1zdG9yZS1pOHBjbGVhcTUtYXZvLXRlYW0udmVyY2VsLmFwcC9hcGkvYXZvJ1xyXG4gIClcclxuICBjb25zdCB7IGRhdGE6IGF2b2NhZG9zIH06IFRBUElBdm9SZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gIGNvbnN0IHBhdGhzID0gYXZvY2Fkb3MubWFwKChhdm8pID0+ICh7XHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgaWQ6IGF2by5pZCxcclxuICAgIH0sXHJcbiAgfSkpXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgLy9JbmNyZW1lbnRhbCBzdGF0aWMgZ2VuZXJhdGlvbiwgcXVhbHNpYXNpIHBhZ2luYSBjaGUgbm9uIHNpIHNwZWNpZmljaGkgbmVpIHBhdGhzLCBkYXJhIDQwNFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgY29uc3QgaWQgPSBwYXJhbXM/LmlkIGFzIHN0cmluZ1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9hdm9jYWRvLXN0b3JlLWk4cGNsZWFxNS1hdm8tdGVhbS52ZXJjZWwuYXBwL2FwaS9hdm8vJHtpZH1gXHJcbiAgKVxyXG4gIGNvbnN0IHByb2R1Y3Q6IFRQcm9kdWN0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHByb2R1Y3QsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdEl0ZW0oeyBwcm9kdWN0IH06IHsgcHJvZHVjdDogVFByb2R1Y3QgfSkge1xyXG4gIGNvbnN0IHsgZGlzcGF0Y2ggfSA9IHVzZUF2b0NhcnQoKVxyXG4gIGNvbnN0IFtxdWFudGl0eSwgc2V0UXVhbnRpdHldID0gdXNlU3RhdGUoMSlcclxuXHJcbiAgY29uc3Qgb25RdWFudGl0eUNoYW5nZSA9IChlOiBhbnkpID0+IHtcclxuICAgIHNldFF1YW50aXR5KHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uQWRkVG9DYXJ0Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICBkZWJ1Z2dlclxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnYWRkJyxcclxuICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgIGNhcnRBdm86IHByb2R1Y3QsXHJcbiAgICAgICAgcXVhbnRpdHksXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgc2V0UXVhbnRpdHkoMSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByZXZpZXdcIj5cclxuICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC5pbWFnZX0gdGl0bGU9e3Byb2R1Y3QubmFtZX0gYWx0PXtwcm9kdWN0Lm5hbWV9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByZXZpZXdfX2NhcnRcIj5cclxuICAgICAgICAgIDxoMz57cHJvZHVjdC5uYW1lfTwvaDM+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0LXByZXZpZXdfX2NhcnQtLXByaWNlXCI+e3Byb2R1Y3QucHJpY2V9IOKCrDwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJldmlld19fY2FydC0tc2t1XCI+U0tVOntwcm9kdWN0LnNrdX08L3A+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogJzAuMnJlbSAwLjhyZW0nLCBpbmxpbmVTaXplOiAnNXJlbScgfX1cclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBtaW49XCIxXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlF1YW50aXR5XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cXVhbnRpdHl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uUXVhbnRpdHlDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9eydBZGQgdG8gQ2FydCd9IG9uQ2xpY2s9e29uQWRkVG9DYXJ0Q2xpY2t9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWxcIj5cclxuICAgICAgICA8aDM+QWJvdXQgdGhpcyBBdm9jYWRvPC9oMz5cclxuICAgICAgICA8cD57cHJvZHVjdC5hdHRyaWJ1dGVzLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1hdHRyaWJ1dGVzXCI+XHJcbiAgICAgICAgPGgzPkF0dHJpYnV0ZXM8L2gzPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPHN0cm9uZz5TaGFwZTo8L3N0cm9uZz4ge3Byb2R1Y3QuYXR0cmlidXRlcy5zaGFwZX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8c3Ryb25nPkhhcmRpbmVzczo8L3N0cm9uZz4ge3Byb2R1Y3QuYXR0cmlidXRlcy5oYXJkaW5lc3N9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPHN0cm9uZz5UYXN0ZTo8L3N0cm9uZz4ge3Byb2R1Y3QuYXR0cmlidXRlcy50YXN0ZX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiQnV0dG9uIiwicHJvcHMiLCJvbkNsaWNrIiwibGFiZWwiLCJSZWFjdCIsIkNhcnRBdm9zQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1bmRlZmluZWQiLCJjYXJ0QXZvc1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJjYXJ0QXZvIiwicXVhbnRpdHkiLCJwYXlsb2FkIiwiaXRlbSIsImZpbmQiLCJlbCIsImlkIiwibmV3U3RhdGUiLCJpbmRleCIsImZpbmRJbmRleCIsInB1c2giLCJFcnJvciIsImluaXRpYWxTdGF0ZSIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwidmFsdWUiLCJ1c2VBdm9DYXJ0IiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsImdldFN0YXRpY1BhdGhzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJhdm9jYWRvcyIsImpzb24iLCJwYXRocyIsIm1hcCIsImF2byIsInBhcmFtcyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJwcm9kdWN0IiwiUHJvZHVjdEl0ZW0iLCJzZXRRdWFudGl0eSIsIm9uUXVhbnRpdHlDaGFuZ2UiLCJlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJvbkFkZFRvQ2FydENsaWNrIiwiaW1hZ2UiLCJuYW1lIiwicHJpY2UiLCJza3UiLCJkaXNwbGF5IiwicGFkZGluZyIsImlubGluZVNpemUiLCJhdHRyaWJ1dGVzIiwiZGVzY3JpcHRpb24iLCJzaGFwZSIsImhhcmRpbmVzcyIsInRhc3RlIl0sInNvdXJjZVJvb3QiOiIifQ==