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
        }, this), error === true && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          className: "product-preview__cart--feedback error",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillCloseCircle, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 15
          }, this), ' ']
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          className: "success",
          children: error === false && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillCheckCircle, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
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
        lineNumber: 108,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: product.attributes.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "product-attributes",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
        children: "Attributes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("strong", {
          children: "Shape:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, this), " ", product.attributes.shape]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("strong", {
          children: "Hardiness:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, this), " ", product.attributes.hardiness]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("strong", {
          children: "Taste:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, this), " ", product.attributes.taste]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 112,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9baWRdLjFiMGIxMzY5Y2IyZDZkMTgwNjkyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFnQ2UsU0FBU0ssV0FBVCxPQUF5RDtBQUFBOztBQUFBLE1BQWxDQyxPQUFrQyxRQUFsQ0EsT0FBa0M7O0FBQ3RFLG9CQUFxQkosb0VBQVUsRUFBL0I7QUFBQSxNQUFRSyxRQUFSLGVBQVFBLFFBQVI7O0FBQ0Esa0JBQWdDTiwrQ0FBUSxDQUFDLENBQUQsQ0FBeEM7QUFBQSxNQUFPTyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUE4QlIsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBQUEsTUFBT1MsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxtQkFBOENWLCtDQUFRLENBQWdCLElBQWhCLENBQXREO0FBQUEsTUFBT1csZUFBUDtBQUFBLE1BQXdCQyxrQkFBeEI7O0FBQ0EsbUJBQTBCWiwrQ0FBUSxDQUFpQixJQUFqQixDQUFsQztBQUFBLE1BQU9hLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUVBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsQ0FBRCxFQUFZO0FBQ25DUixJQUFBQSxXQUFXLENBQUNTLFFBQVEsQ0FBQ0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBVCxDQUFYO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0JWLElBQUFBLFVBQVUsQ0FBQyxJQUFELENBQVY7QUFFQVcsSUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZixVQUFJO0FBQ0ZmLFFBQUFBLFFBQVEsQ0FBQztBQUNQZ0IsVUFBQUEsSUFBSSxFQUFFLEtBREM7QUFFUEMsVUFBQUEsT0FBTyxFQUFFO0FBQ1BDLFlBQUFBLE9BQU8sRUFBRW5CLE9BREY7QUFF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UixPQUFPLENBQUMyQixVQUFSLENBQW1CQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0JGLGVBb0NFO0FBQUssZUFBUyxFQUFDLG9CQUFmO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsT0FDMkI1QixPQUFPLENBQUMyQixVQUFSLENBQW1CRSxLQUQ5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUtFO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsT0FDK0I3QixPQUFPLENBQUMyQixVQUFSLENBQW1CRyxTQURsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQVFFO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsT0FDMkI5QixPQUFPLENBQUMyQixVQUFSLENBQW1CSSxLQUQ5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtREQ7O0dBeEZ1QmhDO1VBQ0RIOzs7S0FEQ0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9baWRdLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcidcclxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0Bjb21wb25lbnRzL0J1dHRvbi9CdXR0b24nXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUF2b0NhcnQgfSBmcm9tICdjb250ZXh0cy9jYXJ0QXZvc0NvbnRleHQnXHJcbmltcG9ydCB7IEFpRmlsbENoZWNrQ2lyY2xlLCBBaUZpbGxDbG9zZUNpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2FpJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAnaHR0cHM6Ly9hdm9jYWRvLXN0b3JlLWk4cGNsZWFxNS1hdm8tdGVhbS52ZXJjZWwuYXBwL2FwaS9hdm8nXHJcbiAgKVxyXG4gIGNvbnN0IHsgZGF0YTogYXZvY2Fkb3MgfTogVEFQSUF2b1Jlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgY29uc3QgcGF0aHMgPSBhdm9jYWRvcy5tYXAoKGF2bykgPT4gKHtcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBpZDogYXZvLmlkLFxyXG4gICAgfSxcclxuICB9KSlcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICAvL0luY3JlbWVudGFsIHN0YXRpYyBnZW5lcmF0aW9uLCBxdWFsc2lhc2kgcGFnaW5hIGNoZSBub24gc2kgc3BlY2lmaWNoaSBuZWkgcGF0aHMsIGRhcmEgNDA0XHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCBpZCA9IHBhcmFtcz8uaWQgYXMgc3RyaW5nXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL2F2b2NhZG8tc3RvcmUtaThwY2xlYXE1LWF2by10ZWFtLnZlcmNlbC5hcHAvYXBpL2F2by8ke2lkfWBcclxuICApXHJcbiAgY29uc3QgcHJvZHVjdDogVFByb2R1Y3QgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcHJvZHVjdCxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0SXRlbSh7IHByb2R1Y3QgfTogeyBwcm9kdWN0OiBUUHJvZHVjdCB9KSB7XHJcbiAgY29uc3QgeyBkaXNwYXRjaCB9ID0gdXNlQXZvQ2FydCgpXHJcbiAgY29uc3QgW3F1YW50aXR5LCBzZXRRdWFudGl0eV0gPSB1c2VTdGF0ZSgxKVxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtmZWVkYmFja01lc3NhZ2UsIHNldEZlZWRiYWNrTWVzc2FnZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8Ym9vbGVhbiB8IG51bGw+KG51bGwpXHJcblxyXG4gIGNvbnN0IG9uUXVhbnRpdHlDaGFuZ2UgPSAoZTogYW55KSA9PiB7XHJcbiAgICBzZXRRdWFudGl0eShwYXJzZUludChlLnRhcmdldC52YWx1ZSkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkFkZFRvQ2FydENsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6ICdhZGQnLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBjYXJ0QXZvOiBwcm9kdWN0LFxyXG4gICAgICAgICAgICBxdWFudGl0eSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXRRdWFudGl0eSgxKVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgc2V0RmVlZGJhY2tNZXNzYWdlKCdQcm9kdWN0IGFkZGVkIGNvcnJlY3RseScpXHJcbiAgICAgICAgc2V0RXJyb3IoZmFsc2UpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgc2V0RmVlZGJhY2tNZXNzYWdlKGAke2Vycm9yfWApXHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICBzZXRFcnJvcih0cnVlKVxyXG4gICAgICB9XHJcbiAgICB9LCAyMDAwKVxyXG4gICAgc2V0RmVlZGJhY2tNZXNzYWdlKG51bGwpXHJcbiAgICBzZXRFcnJvcihudWxsKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJldmlld1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPXtwcm9kdWN0LmltYWdlfSB0aXRsZT17cHJvZHVjdC5uYW1lfSBhbHQ9e3Byb2R1Y3QubmFtZX0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJldmlld19fY2FydFwiPlxyXG4gICAgICAgICAgPGgzPntwcm9kdWN0Lm5hbWV9PC9oMz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJldmlld19fY2FydC0tcHJpY2VcIj57cHJvZHVjdC5wcmljZX0g4oKsPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmV2aWV3X19jYXJ0LS1za3VcIj5TS1U6e3Byb2R1Y3Quc2t1fTwvcD5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiAnMC4ycmVtIDAuOHJlbScsIGlubGluZVNpemU6ICc1cmVtJyB9fVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIG1pbj1cIjFcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUXVhbnRpdHlcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtxdWFudGl0eX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25RdWFudGl0eUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD17J0FkZCB0byBDYXJ0J30gb25DbGljaz17b25BZGRUb0NhcnRDbGlja30gLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1wcmV2aWV3X19jYXJ0LS1sb2FkaW5nXCI+XHJcbiAgICAgICAgICAgICAge2xvYWRpbmcgPyAnQWRkaW5nLi4uJyA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2Vycm9yID09PSB0cnVlICYmIChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1wcmV2aWV3X19jYXJ0LS1mZWVkYmFjayBlcnJvclwiPlxyXG4gICAgICAgICAgICAgIDxBaUZpbGxDbG9zZUNpcmNsZSAvPnsnICd9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWNjZXNzXCI+XHJcbiAgICAgICAgICAgIHtlcnJvciA9PT0gZmFsc2UgJiYgPEFpRmlsbENoZWNrQ2lyY2xlIC8+fVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbFwiPlxyXG4gICAgICAgIDxoMz5BYm91dCB0aGlzIEF2b2NhZG88L2gzPlxyXG4gICAgICAgIDxwPntwcm9kdWN0LmF0dHJpYnV0ZXMuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1hdHRyaWJ1dGVzXCI+XHJcbiAgICAgICAgPGgzPkF0dHJpYnV0ZXM8L2gzPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPHN0cm9uZz5TaGFwZTo8L3N0cm9uZz4ge3Byb2R1Y3QuYXR0cmlidXRlcy5zaGFwZX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8c3Ryb25nPkhhcmRpbmVzczo8L3N0cm9uZz4ge3Byb2R1Y3QuYXR0cmlidXRlcy5oYXJkaW5lc3N9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPHN0cm9uZz5UYXN0ZTo8L3N0cm9uZz4ge3Byb2R1Y3QuYXR0cmlidXRlcy50YXN0ZX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJ1c2VTdGF0ZSIsInVzZUF2b0NhcnQiLCJBaUZpbGxDaGVja0NpcmNsZSIsIkFpRmlsbENsb3NlQ2lyY2xlIiwiUHJvZHVjdEl0ZW0iLCJwcm9kdWN0IiwiZGlzcGF0Y2giLCJxdWFudGl0eSIsInNldFF1YW50aXR5IiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZWVkYmFja01lc3NhZ2UiLCJzZXRGZWVkYmFja01lc3NhZ2UiLCJlcnJvciIsInNldEVycm9yIiwib25RdWFudGl0eUNoYW5nZSIsImUiLCJwYXJzZUludCIsInRhcmdldCIsInZhbHVlIiwib25BZGRUb0NhcnRDbGljayIsInNldFRpbWVvdXQiLCJ0eXBlIiwicGF5bG9hZCIsImNhcnRBdm8iLCJpbWFnZSIsIm5hbWUiLCJwcmljZSIsInNrdSIsImRpc3BsYXkiLCJwYWRkaW5nIiwiaW5saW5lU2l6ZSIsImF0dHJpYnV0ZXMiLCJkZXNjcmlwdGlvbiIsInNoYXBlIiwiaGFyZGluZXNzIiwidGFzdGUiXSwic291cmNlUm9vdCI6IiJ9