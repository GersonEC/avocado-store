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
    setTimeout(function () {
      try {
        dispatch({
          type: 'add',
          payload: {
            cartAvo: product,
            quantity: quantity
          }
        });
        throw new Error('Errore inserimento');
        setQuantity(1);
        setLoading(false);
        setFeedbackMessage('Product added correctly');
        setError(false);
      } catch (error) {
        setFeedbackMessage("".concat(error));
        setLoading(false);
        setError(true);
      }
    }, 2000);
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
        lineNumber: 80,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "product-preview__cart",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
          children: product.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: "product-preview__cart--price",
          children: [product.price, " \u20AC"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: "product-preview__cart--sku",
          children: ["SKU:", product.sku]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
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
            lineNumber: 86,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_0__.default, {
            label: 'Add to Cart',
            onClick: onAddToCartClick
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
            className: "product-preview__cart--loading",
            children: loading ? 'Adding...' : null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: "product-preview__cart--feedback",
          children: [feedbackMessage, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
            className: "error",
            children: error === true && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillCloseCircle, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 34
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
            className: "success",
            children: error === false && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillCheckCircle, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 35
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "product-detail",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
        children: "About this Avocado"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: product.attributes.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "product-attributes",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
        children: "Attributes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("strong", {
          children: "Shape:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, this), " ", product.attributes.shape]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("strong", {
          children: "Hardiness:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, this), " ", product.attributes.hardiness]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("strong", {
          children: "Taste:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, this), " ", product.attributes.taste]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 78,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9baWRdLjljMzkyMDkwMTE1NDlhZWE4Yzg2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFnQ2UsU0FBU0ssV0FBVCxPQUF5RDtBQUFBOztBQUFBLE1BQWxDQyxPQUFrQyxRQUFsQ0EsT0FBa0M7O0FBQ3RFLG9CQUFxQkosb0VBQVUsRUFBL0I7QUFBQSxNQUFRSyxRQUFSLGVBQVFBLFFBQVI7O0FBQ0Esa0JBQWdDTiwrQ0FBUSxDQUFDLENBQUQsQ0FBeEM7QUFBQSxNQUFPTyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUE4QlIsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBQUEsTUFBT1MsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxtQkFBOENWLCtDQUFRLENBQWdCLElBQWhCLENBQXREO0FBQUEsTUFBT1csZUFBUDtBQUFBLE1BQXdCQyxrQkFBeEI7O0FBQ0EsbUJBQTBCWiwrQ0FBUSxDQUFpQixJQUFqQixDQUFsQztBQUFBLE1BQU9hLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUVBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsQ0FBRCxFQUFZO0FBQ25DUixJQUFBQSxXQUFXLENBQUNTLFFBQVEsQ0FBQ0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBVCxDQUFYO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0JWLElBQUFBLFVBQVUsQ0FBQyxJQUFELENBQVY7QUFFQVcsSUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZixVQUFJO0FBQ0ZmLFFBQUFBLFFBQVEsQ0FBQztBQUNQZ0IsVUFBQUEsSUFBSSxFQUFFLEtBREM7QUFFUEMsVUFBQUEsT0FBTyxFQUFFO0FBQ1BDLFlBQUFBLE9BQU8sRUFBRW5CLE9BREY7QUFF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QSxZQURGLGVBZ0NFO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUEsa0JBQUlSLE9BQU8sQ0FBQzRCLFVBQVIsQ0FBbUJDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQ0YsZUFxQ0U7QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixPQUMyQjdCLE9BQU8sQ0FBQzRCLFVBQVIsQ0FBbUJFLEtBRDlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBS0U7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixPQUMrQjlCLE9BQU8sQ0FBQzRCLFVBQVIsQ0FBbUJHLFNBRGxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBUUU7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixPQUMyQi9CLE9BQU8sQ0FBQzRCLFVBQVIsQ0FBbUJJLEtBRDlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9ERDs7R0EzRnVCakM7VUFDREg7OztLQURDRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0L1tpZF0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQGNvbXBvbmVudHMvQnV0dG9uL0J1dHRvbidcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlQXZvQ2FydCB9IGZyb20gJ2NvbnRleHRzL2NhcnRBdm9zQ29udGV4dCdcclxuaW1wb3J0IHsgQWlGaWxsQ2hlY2tDaXJjbGUsIEFpRmlsbENsb3NlQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICdodHRwczovL2F2b2NhZG8tc3RvcmUtaThwY2xlYXE1LWF2by10ZWFtLnZlcmNlbC5hcHAvYXBpL2F2bydcclxuICApXHJcbiAgY29uc3QgeyBkYXRhOiBhdm9jYWRvcyB9OiBUQVBJQXZvUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICBjb25zdCBwYXRocyA9IGF2b2NhZG9zLm1hcCgoYXZvKSA9PiAoe1xyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIGlkOiBhdm8uaWQsXHJcbiAgICB9LFxyXG4gIH0pKVxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIC8vSW5jcmVtZW50YWwgc3RhdGljIGdlbmVyYXRpb24sIHF1YWxzaWFzaSBwYWdpbmEgY2hlIG5vbiBzaSBzcGVjaWZpY2hpIG5laSBwYXRocywgZGFyYSA0MDRcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IGlkID0gcGFyYW1zPy5pZCBhcyBzdHJpbmdcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vYXZvY2Fkby1zdG9yZS1pOHBjbGVhcTUtYXZvLXRlYW0udmVyY2VsLmFwcC9hcGkvYXZvLyR7aWR9YFxyXG4gIClcclxuICBjb25zdCBwcm9kdWN0OiBUUHJvZHVjdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwcm9kdWN0LFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RJdGVtKHsgcHJvZHVjdCB9OiB7IHByb2R1Y3Q6IFRQcm9kdWN0IH0pIHtcclxuICBjb25zdCB7IGRpc3BhdGNoIH0gPSB1c2VBdm9DYXJ0KClcclxuICBjb25zdCBbcXVhbnRpdHksIHNldFF1YW50aXR5XSA9IHVzZVN0YXRlKDEpXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2ZlZWRiYWNrTWVzc2FnZSwgc2V0RmVlZGJhY2tNZXNzYWdlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxib29sZWFuIHwgbnVsbD4obnVsbClcclxuXHJcbiAgY29uc3Qgb25RdWFudGl0eUNoYW5nZSA9IChlOiBhbnkpID0+IHtcclxuICAgIHNldFF1YW50aXR5KHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uQWRkVG9DYXJ0Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogJ2FkZCcsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGNhcnRBdm86IHByb2R1Y3QsXHJcbiAgICAgICAgICAgIHF1YW50aXR5LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3JlIGluc2VyaW1lbnRvJylcclxuXHJcbiAgICAgICAgc2V0UXVhbnRpdHkoMSlcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIHNldEZlZWRiYWNrTWVzc2FnZSgnUHJvZHVjdCBhZGRlZCBjb3JyZWN0bHknKVxyXG4gICAgICAgIHNldEVycm9yKGZhbHNlKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHNldEZlZWRiYWNrTWVzc2FnZShgJHtlcnJvcn1gKVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgc2V0RXJyb3IodHJ1ZSlcclxuICAgICAgfVxyXG4gICAgfSwgMjAwMClcclxuICAgIHNldEZlZWRiYWNrTWVzc2FnZShudWxsKVxyXG4gICAgc2V0RXJyb3IobnVsbClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByZXZpZXdcIj5cclxuICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC5pbWFnZX0gdGl0bGU9e3Byb2R1Y3QubmFtZX0gYWx0PXtwcm9kdWN0Lm5hbWV9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByZXZpZXdfX2NhcnRcIj5cclxuICAgICAgICAgIDxoMz57cHJvZHVjdC5uYW1lfTwvaDM+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0LXByZXZpZXdfX2NhcnQtLXByaWNlXCI+e3Byb2R1Y3QucHJpY2V9IOKCrDwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJldmlld19fY2FydC0tc2t1XCI+U0tVOntwcm9kdWN0LnNrdX08L3A+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogJzAuMnJlbSAwLjhyZW0nLCBpbmxpbmVTaXplOiAnNXJlbScgfX1cclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBtaW49XCIxXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlF1YW50aXR5XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cXVhbnRpdHl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uUXVhbnRpdHlDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9eydBZGQgdG8gQ2FydCd9IG9uQ2xpY2s9e29uQWRkVG9DYXJ0Q2xpY2t9IC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJldmlld19fY2FydC0tbG9hZGluZ1wiPlxyXG4gICAgICAgICAgICAgIHtsb2FkaW5nID8gJ0FkZGluZy4uLicgOiBudWxsfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJldmlld19fY2FydC0tZmVlZGJhY2tcIj5cclxuICAgICAgICAgICAge2ZlZWRiYWNrTWVzc2FnZX1cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JcIj5cclxuICAgICAgICAgICAgICB7ZXJyb3IgPT09IHRydWUgJiYgPEFpRmlsbENsb3NlQ2lyY2xlIC8+fVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICB7ZXJyb3IgPT09IGZhbHNlICYmIDxBaUZpbGxDaGVja0NpcmNsZSAvPn1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbFwiPlxyXG4gICAgICAgIDxoMz5BYm91dCB0aGlzIEF2b2NhZG88L2gzPlxyXG4gICAgICAgIDxwPntwcm9kdWN0LmF0dHJpYnV0ZXMuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1hdHRyaWJ1dGVzXCI+XHJcbiAgICAgICAgPGgzPkF0dHJpYnV0ZXM8L2gzPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPHN0cm9uZz5TaGFwZTo8L3N0cm9uZz4ge3Byb2R1Y3QuYXR0cmlidXRlcy5zaGFwZX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8c3Ryb25nPkhhcmRpbmVzczo8L3N0cm9uZz4ge3Byb2R1Y3QuYXR0cmlidXRlcy5oYXJkaW5lc3N9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPHN0cm9uZz5UYXN0ZTo8L3N0cm9uZz4ge3Byb2R1Y3QuYXR0cmlidXRlcy50YXN0ZX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJ1c2VTdGF0ZSIsInVzZUF2b0NhcnQiLCJBaUZpbGxDaGVja0NpcmNsZSIsIkFpRmlsbENsb3NlQ2lyY2xlIiwiUHJvZHVjdEl0ZW0iLCJwcm9kdWN0IiwiZGlzcGF0Y2giLCJxdWFudGl0eSIsInNldFF1YW50aXR5IiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZWVkYmFja01lc3NhZ2UiLCJzZXRGZWVkYmFja01lc3NhZ2UiLCJlcnJvciIsInNldEVycm9yIiwib25RdWFudGl0eUNoYW5nZSIsImUiLCJwYXJzZUludCIsInRhcmdldCIsInZhbHVlIiwib25BZGRUb0NhcnRDbGljayIsInNldFRpbWVvdXQiLCJ0eXBlIiwicGF5bG9hZCIsImNhcnRBdm8iLCJFcnJvciIsImltYWdlIiwibmFtZSIsInByaWNlIiwic2t1IiwiZGlzcGxheSIsInBhZGRpbmciLCJpbmxpbmVTaXplIiwiYXR0cmlidXRlcyIsImRlc2NyaXB0aW9uIiwic2hhcGUiLCJoYXJkaW5lc3MiLCJ0YXN0ZSJdLCJzb3VyY2VSb290IjoiIn0=