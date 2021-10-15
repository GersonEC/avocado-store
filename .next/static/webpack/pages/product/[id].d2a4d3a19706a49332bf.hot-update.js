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
        lineNumber: 75,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "product-preview__cart",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
          children: product.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: "product-preview__cart--price",
          children: [product.price, " \u20AC"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: "product-preview__cart--sku",
          children: ["SKU:", product.sku]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
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
            lineNumber: 81,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_0__.default, {
            label: 'Add to Cart',
            onClick: onAddToCartClick
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
            className: "product-preview__cart--loading",
            children: loading ? 'Adding...' : null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: "product-preview__cart--feedback",
          children: [feedbackMessage, ' ', error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillCloseCircle, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 22
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillCheckCircle, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 46
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "product-detail",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
        children: "About this Avocado"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: product.attributes.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "product-attributes",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
        children: "Attributes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("strong", {
          children: "Shape:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, this), " ", product.attributes.shape]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("strong", {
          children: "Hardiness:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, this), " ", product.attributes.hardiness]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("strong", {
          children: "Taste:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, this), " ", product.attributes.taste]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9baWRdLmQyYTRkM2ExOTcwNmE0OTMzMmJmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFnQ2UsU0FBU0ssV0FBVCxPQUF5RDtBQUFBOztBQUFBLE1BQWxDQyxPQUFrQyxRQUFsQ0EsT0FBa0M7O0FBQ3RFLG9CQUFxQkosb0VBQVUsRUFBL0I7QUFBQSxNQUFRSyxRQUFSLGVBQVFBLFFBQVI7O0FBQ0Esa0JBQWdDTiwrQ0FBUSxDQUFDLENBQUQsQ0FBeEM7QUFBQSxNQUFPTyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUE4QlIsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBQUEsTUFBT1MsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxtQkFBOENWLCtDQUFRLENBQWdCLElBQWhCLENBQXREO0FBQUEsTUFBT1csZUFBUDtBQUFBLE1BQXdCQyxrQkFBeEI7O0FBQ0EsbUJBQTBCWiwrQ0FBUSxDQUFpQixJQUFqQixDQUFsQztBQUFBLE1BQU9hLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUVBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsQ0FBRCxFQUFZO0FBQ25DUixJQUFBQSxXQUFXLENBQUNTLFFBQVEsQ0FBQ0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBVCxDQUFYO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0JWLElBQUFBLFVBQVUsQ0FBQyxJQUFELENBQVY7O0FBQ0EsUUFBSTtBQUNGVyxNQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmZixRQUFBQSxRQUFRLENBQUM7QUFDUGdCLFVBQUFBLElBQUksRUFBRSxLQURDO0FBRVBDLFVBQUFBLE9BQU8sRUFBRTtBQUNQQyxZQUFBQSxPQUFPLEVBQUVuQixPQURGO0FB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O0FBQUEsY0FERixlQUVFO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsT0FDMkI1QixPQUFPLENBQUMyQixVQUFSLENBQW1CRSxLQUQ5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUtFO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsT0FDK0I3QixPQUFPLENBQUMyQixVQUFSLENBQW1CRyxTQURsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQVFFO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsT0FDMkI5QixPQUFPLENBQUMyQixVQUFSLENBQW1CSSxLQUQ5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErQ0Q7O0dBakZ1QmhDO1VBQ0RIOzs7S0FEQ0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9baWRdLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcidcclxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0Bjb21wb25lbnRzL0J1dHRvbi9CdXR0b24nXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUF2b0NhcnQgfSBmcm9tICdjb250ZXh0cy9jYXJ0QXZvc0NvbnRleHQnXHJcbmltcG9ydCB7IEFpRmlsbENoZWNrQ2lyY2xlLCBBaUZpbGxDbG9zZUNpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2FpJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAnaHR0cHM6Ly9hdm9jYWRvLXN0b3JlLWk4cGNsZWFxNS1hdm8tdGVhbS52ZXJjZWwuYXBwL2FwaS9hdm8nXHJcbiAgKVxyXG4gIGNvbnN0IHsgZGF0YTogYXZvY2Fkb3MgfTogVEFQSUF2b1Jlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgY29uc3QgcGF0aHMgPSBhdm9jYWRvcy5tYXAoKGF2bykgPT4gKHtcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBpZDogYXZvLmlkLFxyXG4gICAgfSxcclxuICB9KSlcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICAvL0luY3JlbWVudGFsIHN0YXRpYyBnZW5lcmF0aW9uLCBxdWFsc2lhc2kgcGFnaW5hIGNoZSBub24gc2kgc3BlY2lmaWNoaSBuZWkgcGF0aHMsIGRhcmEgNDA0XHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCBpZCA9IHBhcmFtcz8uaWQgYXMgc3RyaW5nXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL2F2b2NhZG8tc3RvcmUtaThwY2xlYXE1LWF2by10ZWFtLnZlcmNlbC5hcHAvYXBpL2F2by8ke2lkfWBcclxuICApXHJcbiAgY29uc3QgcHJvZHVjdDogVFByb2R1Y3QgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcHJvZHVjdCxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0SXRlbSh7IHByb2R1Y3QgfTogeyBwcm9kdWN0OiBUUHJvZHVjdCB9KSB7XHJcbiAgY29uc3QgeyBkaXNwYXRjaCB9ID0gdXNlQXZvQ2FydCgpXHJcbiAgY29uc3QgW3F1YW50aXR5LCBzZXRRdWFudGl0eV0gPSB1c2VTdGF0ZSgxKVxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtmZWVkYmFja01lc3NhZ2UsIHNldEZlZWRiYWNrTWVzc2FnZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8Ym9vbGVhbiB8IG51bGw+KG51bGwpXHJcblxyXG4gIGNvbnN0IG9uUXVhbnRpdHlDaGFuZ2UgPSAoZTogYW55KSA9PiB7XHJcbiAgICBzZXRRdWFudGl0eShwYXJzZUludChlLnRhcmdldC52YWx1ZSkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkFkZFRvQ2FydENsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgdHJ5IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogJ2FkZCcsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGNhcnRBdm86IHByb2R1Y3QsXHJcbiAgICAgICAgICAgIHF1YW50aXR5LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldFF1YW50aXR5KDEpXHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICBzZXRGZWVkYmFja01lc3NhZ2UoJ1Byb2R1Y3QgYWRkZWQgY29ycmVjdGx5JylcclxuICAgICAgICBzZXRFcnJvcihmYWxzZSlcclxuICAgICAgfSwgMjAwMClcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEZlZWRiYWNrTWVzc2FnZShgRXJyb3I6ICR7ZXJyb3J9YClcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgc2V0RXJyb3IodHJ1ZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByZXZpZXdcIj5cclxuICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC5pbWFnZX0gdGl0bGU9e3Byb2R1Y3QubmFtZX0gYWx0PXtwcm9kdWN0Lm5hbWV9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByZXZpZXdfX2NhcnRcIj5cclxuICAgICAgICAgIDxoMz57cHJvZHVjdC5uYW1lfTwvaDM+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0LXByZXZpZXdfX2NhcnQtLXByaWNlXCI+e3Byb2R1Y3QucHJpY2V9IOKCrDwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJldmlld19fY2FydC0tc2t1XCI+U0tVOntwcm9kdWN0LnNrdX08L3A+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogJzAuMnJlbSAwLjhyZW0nLCBpbmxpbmVTaXplOiAnNXJlbScgfX1cclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBtaW49XCIxXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlF1YW50aXR5XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cXVhbnRpdHl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uUXVhbnRpdHlDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9eydBZGQgdG8gQ2FydCd9IG9uQ2xpY2s9e29uQWRkVG9DYXJ0Q2xpY2t9IC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJldmlld19fY2FydC0tbG9hZGluZ1wiPlxyXG4gICAgICAgICAgICAgIHtsb2FkaW5nID8gJ0FkZGluZy4uLicgOiBudWxsfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJldmlld19fY2FydC0tZmVlZGJhY2tcIj5cclxuICAgICAgICAgICAge2ZlZWRiYWNrTWVzc2FnZX17JyAnfVxyXG4gICAgICAgICAgICB7ZXJyb3IgPyA8QWlGaWxsQ2xvc2VDaXJjbGUgLz4gOiA8QWlGaWxsQ2hlY2tDaXJjbGUgLz59XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsXCI+XHJcbiAgICAgICAgPGgzPkFib3V0IHRoaXMgQXZvY2FkbzwvaDM+XHJcbiAgICAgICAgPHA+e3Byb2R1Y3QuYXR0cmlidXRlcy5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWF0dHJpYnV0ZXNcIj5cclxuICAgICAgICA8aDM+QXR0cmlidXRlczwvaDM+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8c3Ryb25nPlNoYXBlOjwvc3Ryb25nPiB7cHJvZHVjdC5hdHRyaWJ1dGVzLnNoYXBlfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxzdHJvbmc+SGFyZGluZXNzOjwvc3Ryb25nPiB7cHJvZHVjdC5hdHRyaWJ1dGVzLmhhcmRpbmVzc31cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8c3Ryb25nPlRhc3RlOjwvc3Ryb25nPiB7cHJvZHVjdC5hdHRyaWJ1dGVzLnRhc3RlfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInVzZVN0YXRlIiwidXNlQXZvQ2FydCIsIkFpRmlsbENoZWNrQ2lyY2xlIiwiQWlGaWxsQ2xvc2VDaXJjbGUiLCJQcm9kdWN0SXRlbSIsInByb2R1Y3QiLCJkaXNwYXRjaCIsInF1YW50aXR5Iiwic2V0UXVhbnRpdHkiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZlZWRiYWNrTWVzc2FnZSIsInNldEZlZWRiYWNrTWVzc2FnZSIsImVycm9yIiwic2V0RXJyb3IiLCJvblF1YW50aXR5Q2hhbmdlIiwiZSIsInBhcnNlSW50IiwidGFyZ2V0IiwidmFsdWUiLCJvbkFkZFRvQ2FydENsaWNrIiwic2V0VGltZW91dCIsInR5cGUiLCJwYXlsb2FkIiwiY2FydEF2byIsImltYWdlIiwibmFtZSIsInByaWNlIiwic2t1IiwiZGlzcGxheSIsInBhZGRpbmciLCJpbmxpbmVTaXplIiwiYXR0cmlidXRlcyIsImRlc2NyaXB0aW9uIiwic2hhcGUiLCJoYXJkaW5lc3MiLCJ0YXN0ZSJdLCJzb3VyY2VSb290IjoiIn0=