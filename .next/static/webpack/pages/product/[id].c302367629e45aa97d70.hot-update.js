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

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      feedback = _useState3[0],
      setFeedback = _useState3[1];

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
        setFeedback('Product added correctly');
      }, 2000);
    } catch (error) {
      setFeedback("Error: ".concat(error));
      setLoading(false);
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
        lineNumber: 72,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "product-preview__cart",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
          children: product.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: "product-preview__cart--price",
          children: [product.price, " \u20AC"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: "product-preview__cart--sku",
          children: ["SKU:", product.sku]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
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
            lineNumber: 78,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_0__.default, {
            label: 'Add to Cart',
            onClick: onAddToCartClick
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
            className: "product-preview__cart--loading",
            children: loading ? 'Adding' : null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          className: "product-preview__cart--feedback",
          children: feedback
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "product-detail",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
        children: "About this Avocado"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: product.attributes.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "product-attributes",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
        children: "Attributes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("strong", {
          children: "Shape:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, this), " ", product.attributes.shape]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("strong", {
          children: "Hardiness:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, this), " ", product.attributes.hardiness]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("strong", {
          children: "Taste:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, this), " ", product.attributes.taste]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, this);
}

_s(ProductItem, "fDPcfvtoQOseMzY2yt5sFAXsb7Q=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9baWRdLmMzMDIzNjc2MjllNDVhYTk3ZDcwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBOzs7QUFpQ2UsU0FBU0csV0FBVCxPQUF5RDtBQUFBOztBQUFBLE1BQWxDQyxPQUFrQyxRQUFsQ0EsT0FBa0M7O0FBQ3RFLG9CQUFxQkYsb0VBQVUsRUFBL0I7QUFBQSxNQUFRRyxRQUFSLGVBQVFBLFFBQVI7O0FBQ0Esa0JBQWdDSiwrQ0FBUSxDQUFDLENBQUQsQ0FBeEM7QUFBQSxNQUFPSyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUE4Qk4sK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBQUEsTUFBT08sT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxtQkFBZ0NSLCtDQUFRLENBQWdCLElBQWhCLENBQXhDO0FBQUEsTUFBT1MsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFFQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLENBQUQsRUFBWTtBQUNuQ04sSUFBQUEsV0FBVyxDQUFDTyxRQUFRLENBQUNELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQVQsQ0FBWDtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCUixJQUFBQSxVQUFVLENBQUMsSUFBRCxDQUFWOztBQUNBLFFBQUk7QUFDRlMsTUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZmIsUUFBQUEsUUFBUSxDQUFDO0FBQ1BjLFVBQUFBLElBQUksRUFBRSxLQURDO0FBRVBDLFVBQUFBLE9BQU8sRUFBRTtBQUNQQyxZQUFBQSxPQUFPLEVBQUVqQixPQURGO0FBRVBFLFlBQUFBLFFBQVEsRUFBUkE7QUFGTztBQUZGLFNBQUQsQ0FBUjtBQU9BQyxRQUFBQSxXQUFXLENBQUMsQ0FBRCxDQUFYO0FBQ0FF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RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixPQUMyQjdCLE9BQU8sQ0FBQzBCLFVBQVIsQ0FBbUJJLEtBRDlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJDRDs7R0ExRXVCL0I7VUFDREQ7OztLQURDQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0L1tpZF0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQGNvbXBvbmVudHMvQnV0dG9uL0J1dHRvbidcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlQXZvQ2FydCB9IGZyb20gJ2NvbnRleHRzL2NhcnRBdm9zQ29udGV4dCdcclxuaW1wb3J0IHsgdHlwZSB9IGZyb20gJ29zJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAnaHR0cHM6Ly9hdm9jYWRvLXN0b3JlLWk4cGNsZWFxNS1hdm8tdGVhbS52ZXJjZWwuYXBwL2FwaS9hdm8nXHJcbiAgKVxyXG4gIGNvbnN0IHsgZGF0YTogYXZvY2Fkb3MgfTogVEFQSUF2b1Jlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgY29uc3QgcGF0aHMgPSBhdm9jYWRvcy5tYXAoKGF2bykgPT4gKHtcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBpZDogYXZvLmlkLFxyXG4gICAgfSxcclxuICB9KSlcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICAvL0luY3JlbWVudGFsIHN0YXRpYyBnZW5lcmF0aW9uLCBxdWFsc2lhc2kgcGFnaW5hIGNoZSBub24gc2kgc3BlY2lmaWNoaSBuZWkgcGF0aHMsIGRhcmEgNDA0XHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCBpZCA9IHBhcmFtcz8uaWQgYXMgc3RyaW5nXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL2F2b2NhZG8tc3RvcmUtaThwY2xlYXE1LWF2by10ZWFtLnZlcmNlbC5hcHAvYXBpL2F2by8ke2lkfWBcclxuICApXHJcbiAgY29uc3QgcHJvZHVjdDogVFByb2R1Y3QgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcHJvZHVjdCxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0SXRlbSh7IHByb2R1Y3QgfTogeyBwcm9kdWN0OiBUUHJvZHVjdCB9KSB7XHJcbiAgY29uc3QgeyBkaXNwYXRjaCB9ID0gdXNlQXZvQ2FydCgpXHJcbiAgY29uc3QgW3F1YW50aXR5LCBzZXRRdWFudGl0eV0gPSB1c2VTdGF0ZSgxKVxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtmZWVkYmFjaywgc2V0RmVlZGJhY2tdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcclxuXHJcbiAgY29uc3Qgb25RdWFudGl0eUNoYW5nZSA9IChlOiBhbnkpID0+IHtcclxuICAgIHNldFF1YW50aXR5KHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uQWRkVG9DYXJ0Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiAnYWRkJyxcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgY2FydEF2bzogcHJvZHVjdCxcclxuICAgICAgICAgICAgcXVhbnRpdHksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0UXVhbnRpdHkoMSlcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIHNldEZlZWRiYWNrKCdQcm9kdWN0IGFkZGVkIGNvcnJlY3RseScpXHJcbiAgICAgIH0sIDIwMDApXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRGZWVkYmFjayhgRXJyb3I6ICR7ZXJyb3J9YClcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByZXZpZXdcIj5cclxuICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC5pbWFnZX0gdGl0bGU9e3Byb2R1Y3QubmFtZX0gYWx0PXtwcm9kdWN0Lm5hbWV9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByZXZpZXdfX2NhcnRcIj5cclxuICAgICAgICAgIDxoMz57cHJvZHVjdC5uYW1lfTwvaDM+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0LXByZXZpZXdfX2NhcnQtLXByaWNlXCI+e3Byb2R1Y3QucHJpY2V9IOKCrDwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJldmlld19fY2FydC0tc2t1XCI+U0tVOntwcm9kdWN0LnNrdX08L3A+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogJzAuMnJlbSAwLjhyZW0nLCBpbmxpbmVTaXplOiAnNXJlbScgfX1cclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBtaW49XCIxXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlF1YW50aXR5XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cXVhbnRpdHl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uUXVhbnRpdHlDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9eydBZGQgdG8gQ2FydCd9IG9uQ2xpY2s9e29uQWRkVG9DYXJ0Q2xpY2t9IC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJldmlld19fY2FydC0tbG9hZGluZ1wiPlxyXG4gICAgICAgICAgICAgIHtsb2FkaW5nID8gJ0FkZGluZycgOiBudWxsfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJldmlld19fY2FydC0tZmVlZGJhY2tcIj57ZmVlZGJhY2t9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbFwiPlxyXG4gICAgICAgIDxoMz5BYm91dCB0aGlzIEF2b2NhZG88L2gzPlxyXG4gICAgICAgIDxwPntwcm9kdWN0LmF0dHJpYnV0ZXMuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWF0dHJpYnV0ZXNcIj5cclxuICAgICAgICA8aDM+QXR0cmlidXRlczwvaDM+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8c3Ryb25nPlNoYXBlOjwvc3Ryb25nPiB7cHJvZHVjdC5hdHRyaWJ1dGVzLnNoYXBlfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxzdHJvbmc+SGFyZGluZXNzOjwvc3Ryb25nPiB7cHJvZHVjdC5hdHRyaWJ1dGVzLmhhcmRpbmVzc31cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8c3Ryb25nPlRhc3RlOjwvc3Ryb25nPiB7cHJvZHVjdC5hdHRyaWJ1dGVzLnRhc3RlfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInVzZVN0YXRlIiwidXNlQXZvQ2FydCIsIlByb2R1Y3RJdGVtIiwicHJvZHVjdCIsImRpc3BhdGNoIiwicXVhbnRpdHkiLCJzZXRRdWFudGl0eSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmVlZGJhY2siLCJzZXRGZWVkYmFjayIsIm9uUXVhbnRpdHlDaGFuZ2UiLCJlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQWRkVG9DYXJ0Q2xpY2siLCJzZXRUaW1lb3V0IiwidHlwZSIsInBheWxvYWQiLCJjYXJ0QXZvIiwiZXJyb3IiLCJpbWFnZSIsIm5hbWUiLCJwcmljZSIsInNrdSIsImRpc3BsYXkiLCJwYWRkaW5nIiwiaW5saW5lU2l6ZSIsImF0dHJpYnV0ZXMiLCJkZXNjcmlwdGlvbiIsInNoYXBlIiwiaGFyZGluZXNzIiwidGFzdGUiXSwic291cmNlUm9vdCI6IiJ9