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

  var onQuantityChange = function onQuantityChange(e) {
    setQuantity(parseInt(e.target.value));
  };

  var onAddToCartClick = function onAddToCartClick() {
    setTimeout(function () {
      dispatch({
        type: 'add',
        payload: {
          cartAvo: product,
          quantity: quantity
        }
      });
      setQuantity(1);
    }, 2000);
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
        lineNumber: 62,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "product-preview__cart",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
          children: product.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: "product-preview__cart--price",
          children: [product.price, " \u20AC"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: "product-preview__cart--sku",
          children: ["SKU:", product.sku]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
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
            lineNumber: 68,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_0__.default, {
            label: 'Add to Cart',
            onClick: onAddToCartClick
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "product-detail",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
        children: "About this Avocado"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: product.attributes.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "product-attributes",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
        children: "Attributes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("strong", {
          children: "Shape:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, this), " ", product.attributes.shape]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("strong", {
          children: "Hardiness:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, this), " ", product.attributes.hardiness]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("strong", {
          children: "Taste:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, this), " ", product.attributes.taste]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, this);
}

_s(ProductItem, "IEgkKX4pxazaX84yEFfzIftJU0c=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9baWRdLjJhNDRmOGVhZjMyZjY4N2FmNGJhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBOzs7QUFpQ2UsU0FBU0csV0FBVCxPQUF5RDtBQUFBOztBQUFBLE1BQWxDQyxPQUFrQyxRQUFsQ0EsT0FBa0M7O0FBQ3RFLG9CQUFxQkYsb0VBQVUsRUFBL0I7QUFBQSxNQUFRRyxRQUFSLGVBQVFBLFFBQVI7O0FBQ0Esa0JBQWdDSiwrQ0FBUSxDQUFDLENBQUQsQ0FBeEM7QUFBQSxNQUFPSyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUVBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsQ0FBRCxFQUFZO0FBQ25DRixJQUFBQSxXQUFXLENBQUNHLFFBQVEsQ0FBQ0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBVCxDQUFYO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0JDLElBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2ZULE1BQUFBLFFBQVEsQ0FBQztBQUNQVSxRQUFBQSxJQUFJLEVBQUUsS0FEQztBQUVQQyxRQUFBQSxPQUFPLEVBQUU7QUFDUEMsVUFBQUEsT0FBTyxFQUFFYixPQURGO0FBRVBFLFVBQUFBLFFBQVEsRUFBUkE7QUFGTztBQUZGLE9BQUQsQ0FBUjtBQU9BQyxNQUFBQSxXQUFXLENBQUMsQ0FBRCxDQUFYO0FBQ0QsS0FUUyxFQVNQLElBVE8sQ0FBVjtBQVVELEdBWEQ7O0FBYUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUEsOEJBQ0U7QUFBSyxXQUFHLEVBQUVILE9BQU8sQ0FBQ2MsS0FBbEI7QUFBeUIsYUFBSyxFQUFFZCxPQUFPLENBQUNlLElBQXhDO0FBQThDLFdBQUcsRUFBRWYsT0FBTyxDQUFDZTtBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsdUJBQWY7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLZixPQUFPLENBQUNlO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUcsbUJBQVMsRUFBQyw4QkFBYjtBQUFBLHFCQUE2Q2YsT0FBTyxDQUFDZ0IsS0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0U7QUFBRyxtQkFBUyxFQUFDLDRCQUFiO0FBQUEsNkJBQStDaEIsT0FBTyxDQUFDaUIsR0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLGVBSUU7QUFBSyxlQUFLLEVBQUU7QUFBRUMsWUFBQUEsT0FBTyxFQUFFO0FBQVgsV0FBWjtBQUFBLGtDQUNFO0FBQ0UsaUJBQUssRUFBRTtBQUFFQyxjQUFBQSxPQUFPLEVBQUUsZUFBWDtBQUE0QkMsY0FBQUEsVUFBVSxFQUFFO0FBQXhDLGFBRFQ7QUFFRSxnQkFBSSxFQUFDLFFBRlA7QUFHRSxlQUFHLEVBQUMsR0FITjtBQUlFLHVCQUFXLEVBQUMsVUFKZDtBQUtFLGlCQUFLLEVBQUVsQixRQUxUO0FBTUUsb0JBQVEsRUFBRUU7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBU0UsOERBQUMsOERBQUQ7QUFBUSxpQkFBSyxFQUFFLGFBQWY7QUFBOEIsbUJBQU8sRUFBRUs7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFvQkU7QUFBSyxlQUFTLEVBQUMsZ0JBQWY7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxrQkFBSVQsT0FBTyxDQUFDcUIsVUFBUixDQUFtQkM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCRixlQXdCRTtBQUFLLGVBQVMsRUFBQyxvQkFBZjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLE9BQzJCdEIsT0FBTyxDQUFDcUIsVUFBUixDQUFtQkUsS0FEOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFLRTtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLE9BQytCdkIsT0FBTyxDQUFDcUIsVUFBUixDQUFtQkcsU0FEbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFRRTtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLE9BQzJCeEIsT0FBTyxDQUFDcUIsVUFBUixDQUFtQkksS0FEOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUNEOztHQTVEdUIxQjtVQUNERDs7O0tBRENDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3QvW2lkXS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInXHJcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAY29tcG9uZW50cy9CdXR0b24vQnV0dG9uJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VBdm9DYXJ0IH0gZnJvbSAnY29udGV4dHMvY2FydEF2b3NDb250ZXh0J1xyXG5pbXBvcnQgeyB0eXBlIH0gZnJvbSAnb3MnXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICdodHRwczovL2F2b2NhZG8tc3RvcmUtaThwY2xlYXE1LWF2by10ZWFtLnZlcmNlbC5hcHAvYXBpL2F2bydcclxuICApXHJcbiAgY29uc3QgeyBkYXRhOiBhdm9jYWRvcyB9OiBUQVBJQXZvUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICBjb25zdCBwYXRocyA9IGF2b2NhZG9zLm1hcCgoYXZvKSA9PiAoe1xyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIGlkOiBhdm8uaWQsXHJcbiAgICB9LFxyXG4gIH0pKVxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIC8vSW5jcmVtZW50YWwgc3RhdGljIGdlbmVyYXRpb24sIHF1YWxzaWFzaSBwYWdpbmEgY2hlIG5vbiBzaSBzcGVjaWZpY2hpIG5laSBwYXRocywgZGFyYSA0MDRcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IGlkID0gcGFyYW1zPy5pZCBhcyBzdHJpbmdcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vYXZvY2Fkby1zdG9yZS1pOHBjbGVhcTUtYXZvLXRlYW0udmVyY2VsLmFwcC9hcGkvYXZvLyR7aWR9YFxyXG4gIClcclxuICBjb25zdCBwcm9kdWN0OiBUUHJvZHVjdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwcm9kdWN0LFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RJdGVtKHsgcHJvZHVjdCB9OiB7IHByb2R1Y3Q6IFRQcm9kdWN0IH0pIHtcclxuICBjb25zdCB7IGRpc3BhdGNoIH0gPSB1c2VBdm9DYXJ0KClcclxuICBjb25zdCBbcXVhbnRpdHksIHNldFF1YW50aXR5XSA9IHVzZVN0YXRlKDEpXHJcblxyXG4gIGNvbnN0IG9uUXVhbnRpdHlDaGFuZ2UgPSAoZTogYW55KSA9PiB7XHJcbiAgICBzZXRRdWFudGl0eShwYXJzZUludChlLnRhcmdldC52YWx1ZSkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkFkZFRvQ2FydENsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiAnYWRkJyxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICBjYXJ0QXZvOiBwcm9kdWN0LFxyXG4gICAgICAgICAgcXVhbnRpdHksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgc2V0UXVhbnRpdHkoMSlcclxuICAgIH0sIDIwMDApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmV2aWV3XCI+XHJcbiAgICAgICAgPGltZyBzcmM9e3Byb2R1Y3QuaW1hZ2V9IHRpdGxlPXtwcm9kdWN0Lm5hbWV9IGFsdD17cHJvZHVjdC5uYW1lfSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmV2aWV3X19jYXJ0XCI+XHJcbiAgICAgICAgICA8aDM+e3Byb2R1Y3QubmFtZX08L2gzPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmV2aWV3X19jYXJ0LS1wcmljZVwiPntwcm9kdWN0LnByaWNlfSDigqw8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0LXByZXZpZXdfX2NhcnQtLXNrdVwiPlNLVTp7cHJvZHVjdC5za3V9PC9wPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6ICcwLjJyZW0gMC44cmVtJywgaW5saW5lU2l6ZTogJzVyZW0nIH19XHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgbWluPVwiMVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJRdWFudGl0eVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3F1YW50aXR5fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblF1YW50aXR5Q2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGxhYmVsPXsnQWRkIHRvIENhcnQnfSBvbkNsaWNrPXtvbkFkZFRvQ2FydENsaWNrfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsXCI+XHJcbiAgICAgICAgPGgzPkFib3V0IHRoaXMgQXZvY2FkbzwvaDM+XHJcbiAgICAgICAgPHA+e3Byb2R1Y3QuYXR0cmlidXRlcy5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtYXR0cmlidXRlc1wiPlxyXG4gICAgICAgIDxoMz5BdHRyaWJ1dGVzPC9oMz5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxzdHJvbmc+U2hhcGU6PC9zdHJvbmc+IHtwcm9kdWN0LmF0dHJpYnV0ZXMuc2hhcGV9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPHN0cm9uZz5IYXJkaW5lc3M6PC9zdHJvbmc+IHtwcm9kdWN0LmF0dHJpYnV0ZXMuaGFyZGluZXNzfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxzdHJvbmc+VGFzdGU6PC9zdHJvbmc+IHtwcm9kdWN0LmF0dHJpYnV0ZXMudGFzdGV9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiQnV0dG9uIiwidXNlU3RhdGUiLCJ1c2VBdm9DYXJ0IiwiUHJvZHVjdEl0ZW0iLCJwcm9kdWN0IiwiZGlzcGF0Y2giLCJxdWFudGl0eSIsInNldFF1YW50aXR5Iiwib25RdWFudGl0eUNoYW5nZSIsImUiLCJwYXJzZUludCIsInRhcmdldCIsInZhbHVlIiwib25BZGRUb0NhcnRDbGljayIsInNldFRpbWVvdXQiLCJ0eXBlIiwicGF5bG9hZCIsImNhcnRBdm8iLCJpbWFnZSIsIm5hbWUiLCJwcmljZSIsInNrdSIsImRpc3BsYXkiLCJwYWRkaW5nIiwiaW5saW5lU2l6ZSIsImF0dHJpYnV0ZXMiLCJkZXNjcmlwdGlvbiIsInNoYXBlIiwiaGFyZGluZXNzIiwidGFzdGUiXSwic291cmNlUm9vdCI6IiJ9