"use strict";
self["webpackHotUpdate_N_E"]("pages/product/[id]",{

/***/ "./pages/product/[id].tsx":
/*!********************************!*\
  !*** ./pages/product/[id].tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ ProductItem; }
/* harmony export */ });
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var contexts_cartAvosContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! contexts/cartAvosContext */ "./contexts/cartAvosContext.tsx");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\code\\avocado-store\\pages\\product\\[id].tsx",
    _s = $RefreshSig$();






var __N_SSG = true;
function ProductItem(_ref) {
  _s();

  var product = _ref.product;

  var _useAvoCart = (0,contexts_cartAvosContext__WEBPACK_IMPORTED_MODULE_2__.useAvoCart)(),
      dispatch = _useAvoCart.dispatch;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),
      quantity = _useState[0],
      setQuantity = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      feedbackMessage = _useState3[0],
      setFeedbackMessage = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      error = _useState4[0],
      setError = _useState4[1];

  var onQuantityChange = function onQuantityChange(e) {
    setQuantity(parseInt(e.target.value));
  };

  var onAddToCartClick = function onAddToCartClick() {
    setLoading(true);

    try {
      throw new Error('Errore inserimento');
      setTimeout(function () {
        dispatch({
          type: 'add',
          payload: {
            cartAvo: product,
            quantity: quantity
          }
        });
        setQuantity(1);
        setLoading(false);
        setFeedbackMessage('Product added correctly');
        setError(false);
      }, 2000);
    } catch (error) {
      setFeedbackMessage("Error: ".concat(error));
      setLoading(false);
      setError(true);
    }

    setFeedbackMessage(null);
    setError(null);
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
        lineNumber: 78,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "product-preview__cart",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
          children: product.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: "product-preview__cart--price",
          children: [product.price, " \u20AC"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: "product-preview__cart--sku",
          children: ["SKU:", product.sku]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
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
            lineNumber: 84,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_0__.default, {
            label: 'Add to Cart',
            onClick: onAddToCartClick
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
            className: "product-preview__cart--loading",
            children: loading ? 'Adding...' : null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: "product-preview__cart--feedback",
          children: [feedbackMessage, error === true && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillCloseCircle, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 32
          }, this), error === false && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillCheckCircle, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "product-detail",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
        children: "About this Avocado"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: product.attributes.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "product-attributes",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
        children: "Attributes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("strong", {
          children: "Shape:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, this), " ", product.attributes.shape]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("strong", {
          children: "Hardiness:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, this), " ", product.attributes.hardiness]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("strong", {
          children: "Taste:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, this), " ", product.attributes.taste]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 5
  }, this);
}

_s(ProductItem, "cTiIb2ES0M9EbL4fhwwHA2e7L80=", false, function () {
  return [contexts_cartAvosContext__WEBPACK_IMPORTED_MODULE_2__.useAvoCart];
});

_c = ProductItem;

var _c;

$RefreshReg$(_c, "ProductItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9baWRdLjY5ZjFkZWMzYTYyYWYzMGZjNmU0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFnQ2UsU0FBU0ssV0FBVCxPQUF5RDtBQUFBOztBQUFBLE1BQWxDQyxPQUFrQyxRQUFsQ0EsT0FBa0M7O0FBQ3RFLG9CQUFxQkosb0VBQVUsRUFBL0I7QUFBQSxNQUFRSyxRQUFSLGVBQVFBLFFBQVI7O0FBQ0Esa0JBQWdDTiwrQ0FBUSxDQUFDLENBQUQsQ0FBeEM7QUFBQSxNQUFPTyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUE4QlIsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBQUEsTUFBT1MsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxtQkFBOENWLCtDQUFRLENBQWdCLElBQWhCLENBQXREO0FBQUEsTUFBT1csZUFBUDtBQUFBLE1BQXdCQyxrQkFBeEI7O0FBQ0EsbUJBQTBCWiwrQ0FBUSxDQUFpQixJQUFqQixDQUFsQztBQUFBLE1BQU9hLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUVBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsQ0FBRCxFQUFZO0FBQ25DUixJQUFBQSxXQUFXLENBQUNTLFFBQVEsQ0FBQ0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBVCxDQUFYO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0JWLElBQUFBLFVBQVUsQ0FBQyxJQUFELENBQVY7O0FBQ0EsUUFBSTtBQUNGLFlBQU0sSUFBSVcsS0FBSixDQUFVLG9CQUFWLENBQU47QUFDQUMsTUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZmhCLFFBQUFBLFFBQVEsQ0FBQztBQUNQaUIsVUFBQUEsSUFBSSxFQUFFLEtBREM7QUFFUEMsVUFBQUEsT0FB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QkM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVCRixlQWlDRTtBQUFLLGVBQVMsRUFBQyxvQkFBZjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLE9BQzJCN0IsT0FBTyxDQUFDNEIsVUFBUixDQUFtQkUsS0FEOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFLRTtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLE9BQytCOUIsT0FBTyxDQUFDNEIsVUFBUixDQUFtQkcsU0FEbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFRRTtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLE9BQzJCL0IsT0FBTyxDQUFDNEIsVUFBUixDQUFtQkksS0FEOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0REOztHQXJGdUJqQztVQUNESDs7O0tBRENHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3QvW2lkXS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInXHJcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAY29tcG9uZW50cy9CdXR0b24vQnV0dG9uJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VBdm9DYXJ0IH0gZnJvbSAnY29udGV4dHMvY2FydEF2b3NDb250ZXh0J1xyXG5pbXBvcnQgeyBBaUZpbGxDaGVja0NpcmNsZSwgQWlGaWxsQ2xvc2VDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9haSdcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgJ2h0dHBzOi8vYXZvY2Fkby1zdG9yZS1pOHBjbGVhcTUtYXZvLXRlYW0udmVyY2VsLmFwcC9hcGkvYXZvJ1xyXG4gIClcclxuICBjb25zdCB7IGRhdGE6IGF2b2NhZG9zIH06IFRBUElBdm9SZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gIGNvbnN0IHBhdGhzID0gYXZvY2Fkb3MubWFwKChhdm8pID0+ICh7XHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgaWQ6IGF2by5pZCxcclxuICAgIH0sXHJcbiAgfSkpXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgLy9JbmNyZW1lbnRhbCBzdGF0aWMgZ2VuZXJhdGlvbiwgcXVhbHNpYXNpIHBhZ2luYSBjaGUgbm9uIHNpIHNwZWNpZmljaGkgbmVpIHBhdGhzLCBkYXJhIDQwNFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgY29uc3QgaWQgPSBwYXJhbXM/LmlkIGFzIHN0cmluZ1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9hdm9jYWRvLXN0b3JlLWk4cGNsZWFxNS1hdm8tdGVhbS52ZXJjZWwuYXBwL2FwaS9hdm8vJHtpZH1gXHJcbiAgKVxyXG4gIGNvbnN0IHByb2R1Y3Q6IFRQcm9kdWN0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHByb2R1Y3QsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdEl0ZW0oeyBwcm9kdWN0IH06IHsgcHJvZHVjdDogVFByb2R1Y3QgfSkge1xyXG4gIGNvbnN0IHsgZGlzcGF0Y2ggfSA9IHVzZUF2b0NhcnQoKVxyXG4gIGNvbnN0IFtxdWFudGl0eSwgc2V0UXVhbnRpdHldID0gdXNlU3RhdGUoMSlcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbZmVlZGJhY2tNZXNzYWdlLCBzZXRGZWVkYmFja01lc3NhZ2VdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPGJvb2xlYW4gfCBudWxsPihudWxsKVxyXG5cclxuICBjb25zdCBvblF1YW50aXR5Q2hhbmdlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgc2V0UXVhbnRpdHkocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25BZGRUb0NhcnRDbGljayA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIHRyeSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3JlIGluc2VyaW1lbnRvJylcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogJ2FkZCcsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGNhcnRBdm86IHByb2R1Y3QsXHJcbiAgICAgICAgICAgIHF1YW50aXR5LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldFF1YW50aXR5KDEpXHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICBzZXRGZWVkYmFja01lc3NhZ2UoJ1Byb2R1Y3QgYWRkZWQgY29ycmVjdGx5JylcclxuICAgICAgICBzZXRFcnJvcihmYWxzZSlcclxuICAgICAgfSwgMjAwMClcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEZlZWRiYWNrTWVzc2FnZShgRXJyb3I6ICR7ZXJyb3J9YClcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgc2V0RXJyb3IodHJ1ZSlcclxuICAgIH1cclxuICAgIHNldEZlZWRiYWNrTWVzc2FnZShudWxsKVxyXG4gICAgc2V0RXJyb3IobnVsbClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByZXZpZXdcIj5cclxuICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC5pbWFnZX0gdGl0bGU9e3Byb2R1Y3QubmFtZX0gYWx0PXtwcm9kdWN0Lm5hbWV9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByZXZpZXdfX2NhcnRcIj5cclxuICAgICAgICAgIDxoMz57cHJvZHVjdC5uYW1lfTwvaDM+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0LXByZXZpZXdfX2NhcnQtLXByaWNlXCI+e3Byb2R1Y3QucHJpY2V9IOKCrDwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJldmlld19fY2FydC0tc2t1XCI+U0tVOntwcm9kdWN0LnNrdX08L3A+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogJzAuMnJlbSAwLjhyZW0nLCBpbmxpbmVTaXplOiAnNXJlbScgfX1cclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBtaW49XCIxXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlF1YW50aXR5XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cXVhbnRpdHl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uUXVhbnRpdHlDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9eydBZGQgdG8gQ2FydCd9IG9uQ2xpY2s9e29uQWRkVG9DYXJ0Q2xpY2t9IC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJldmlld19fY2FydC0tbG9hZGluZ1wiPlxyXG4gICAgICAgICAgICAgIHtsb2FkaW5nID8gJ0FkZGluZy4uLicgOiBudWxsfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJldmlld19fY2FydC0tZmVlZGJhY2tcIj5cclxuICAgICAgICAgICAge2ZlZWRiYWNrTWVzc2FnZX1cclxuICAgICAgICAgICAge2Vycm9yID09PSB0cnVlICYmIDxBaUZpbGxDbG9zZUNpcmNsZSAvPn1cclxuICAgICAgICAgICAge2Vycm9yID09PSBmYWxzZSAmJiA8QWlGaWxsQ2hlY2tDaXJjbGUgLz59XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsXCI+XHJcbiAgICAgICAgPGgzPkFib3V0IHRoaXMgQXZvY2FkbzwvaDM+XHJcbiAgICAgICAgPHA+e3Byb2R1Y3QuYXR0cmlidXRlcy5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWF0dHJpYnV0ZXNcIj5cclxuICAgICAgICA8aDM+QXR0cmlidXRlczwvaDM+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8c3Ryb25nPlNoYXBlOjwvc3Ryb25nPiB7cHJvZHVjdC5hdHRyaWJ1dGVzLnNoYXBlfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxzdHJvbmc+SGFyZGluZXNzOjwvc3Ryb25nPiB7cHJvZHVjdC5hdHRyaWJ1dGVzLmhhcmRpbmVzc31cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8c3Ryb25nPlRhc3RlOjwvc3Ryb25nPiB7cHJvZHVjdC5hdHRyaWJ1dGVzLnRhc3RlfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInVzZVN0YXRlIiwidXNlQXZvQ2FydCIsIkFpRmlsbENoZWNrQ2lyY2xlIiwiQWlGaWxsQ2xvc2VDaXJjbGUiLCJQcm9kdWN0SXRlbSIsInByb2R1Y3QiLCJkaXNwYXRjaCIsInF1YW50aXR5Iiwic2V0UXVhbnRpdHkiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZlZWRiYWNrTWVzc2FnZSIsInNldEZlZWRiYWNrTWVzc2FnZSIsImVycm9yIiwic2V0RXJyb3IiLCJvblF1YW50aXR5Q2hhbmdlIiwiZSIsInBhcnNlSW50IiwidGFyZ2V0IiwidmFsdWUiLCJvbkFkZFRvQ2FydENsaWNrIiwiRXJyb3IiLCJzZXRUaW1lb3V0IiwidHlwZSIsInBheWxvYWQiLCJjYXJ0QXZvIiwiaW1hZ2UiLCJuYW1lIiwicHJpY2UiLCJza3UiLCJkaXNwbGF5IiwicGFkZGluZyIsImlubGluZVNpemUiLCJhdHRyaWJ1dGVzIiwiZGVzY3JpcHRpb24iLCJzaGFwZSIsImhhcmRpbmVzcyIsInRhc3RlIl0sInNvdXJjZVJvb3QiOiIifQ==