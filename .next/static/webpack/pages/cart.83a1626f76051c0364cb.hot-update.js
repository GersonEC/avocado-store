self["webpackHotUpdate_N_E"]("pages/cart",{

/***/ "./pages/cart.tsx":
/*!************************!*\
  !*** ./pages/cart.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Cart; }
/* harmony export */ });
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var contexts_cartAvosContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! contexts/cartAvosContext */ "./contexts/cartAvosContext.tsx");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\code\\avocado-store\\pages\\cart.tsx",
    _s = $RefreshSig$();






var calcTotalPrice = function calcTotalPrice(items) {
  var totalPrice = 0;
  items.forEach(function (item) {
    totalPrice += item.quantity * item.cartAvo.price;
  });
  return parseFloat(totalPrice.toFixed(2));
};

function Cart() {
  _s();

  var _this = this;

  var avosCart = (0,contexts_cartAvosContext__WEBPACK_IMPORTED_MODULE_1__.useAvoCart)();
  var avos = avosCart.state;
  var totalQuantity = avosCart.state.map(function (el) {
    return el.quantity;
  }).reduce(function (prevValue, currValue) {
    return prevValue + currValue;
  }, 0);
  var totalPrice = calcTotalPrice(avosCart.state);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "cart",
    children: [avos.map(function (avo) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "cart__row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
          src: avo.cartAvo.image,
          alt: avo.cartAvo.name,
          title: avo.cartAvo.name,
          height: '140'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
            children: avo.cartAvo.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
            children: [avo.quantity, " x ", avo.cartAvo.price, "\u20AC"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this)]
      }, avo.cartAvo.id, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "cart__total",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
        children: ["Total: ", totalPrice, " \u20AC"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_0__.default, {
        onClick: function onClick() {},
        label: 'Checkout'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.CardElement, {
      options: {
        style: {
          base: {
            fontSize: '16px',
            color: '#424770',
            '::placeholder': {
              color: '#aab7c4'
            }
          },
          invalid: {
            color: '#9e2146'
          }
        }
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

_s(Cart, "goaixxdK1MPRlRU+R6vy/0t8x28=", false, function () {
  return [contexts_cartAvosContext__WEBPACK_IMPORTED_MODULE_1__.useAvoCart];
});

_c = Cart;

var _c;

$RefreshReg$(_c, "Cart");

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


/***/ }),

/***/ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__(/*! react */ "./node_modules/react/index.js")) :
	0;
}(this, (function (exports, React) { 'use strict';

	React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	function emptyFunction() {}

	function emptyFunctionWithReset() {}

	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	var factoryWithThrowingShims = function () {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret_1) {
	      // It is still safe when called from React.
	      return;
	    }

	    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
	    err.name = 'Invariant Violation';
	    throw err;
	  }
	  shim.isRequired = shim;

	  function getShim() {
	    return shim;
	  }
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,
	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,
	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };
	  ReactPropTypes.PropTypes = ReactPropTypes;
	  return ReactPropTypes;
	};

	var propTypes = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	{
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = factoryWithThrowingShims();
	}
	});

	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	    _typeof = function (obj) {
	      return typeof obj;
	    };
	  } else {
	    _typeof = function (obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };
	  }

	  return _typeof(obj);
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function ownKeys(object, enumerableOnly) {
	  var keys = Object.keys(object);

	  if (Object.getOwnPropertySymbols) {
	    var symbols = Object.getOwnPropertySymbols(object);
	    if (enumerableOnly) symbols = symbols.filter(function (sym) {
	      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	    });
	    keys.push.apply(keys, symbols);
	  }

	  return keys;
	}

	function _objectSpread2(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};

	    if (i % 2) {
	      ownKeys(Object(source), true).forEach(function (key) {
	        _defineProperty(target, key, source[key]);
	      });
	    } else if (Object.getOwnPropertyDescriptors) {
	      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
	    } else {
	      ownKeys(Object(source)).forEach(function (key) {
	        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	      });
	    }
	  }

	  return target;
	}

	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
	}

	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	function _iterableToArrayLimit(arr, i) {
	  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
	  var _arr = [];
	  var _n = true;
	  var _d = false;
	  var _e = undefined;

	  try {
	    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);

	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }

	  return _arr;
	}

	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	}

	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

	  return arr2;
	}

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	var usePrevious = function usePrevious(value) {
	  var ref = React.useRef(value);
	  React.useEffect(function () {
	    ref.current = value;
	  }, [value]);
	  return ref.current;
	};

	var isUnknownObject = function isUnknownObject(raw) {
	  return raw !== null && _typeof(raw) === 'object';
	};
	var isPromise = function isPromise(raw) {
	  return isUnknownObject(raw) && typeof raw.then === 'function';
	}; // We are using types to enforce the `stripe` prop in this lib,
	// but in an untyped integration `stripe` could be anything, so we need
	// to do some sanity validation to prevent type errors.

	var isStripe = function isStripe(raw) {
	  return isUnknownObject(raw) && typeof raw.elements === 'function' && typeof raw.createToken === 'function' && typeof raw.createPaymentMethod === 'function' && typeof raw.confirmCardPayment === 'function';
	};

	var PLAIN_OBJECT_STR = '[object Object]';
	var isEqual = function isEqual(left, right) {
	  if (!isUnknownObject(left) || !isUnknownObject(right)) {
	    return left === right;
	  }

	  var leftArray = Array.isArray(left);
	  var rightArray = Array.isArray(right);
	  if (leftArray !== rightArray) return false;
	  var leftPlainObject = Object.prototype.toString.call(left) === PLAIN_OBJECT_STR;
	  var rightPlainObject = Object.prototype.toString.call(right) === PLAIN_OBJECT_STR;
	  if (leftPlainObject !== rightPlainObject) return false;
	  if (!leftPlainObject && !leftArray) return false;
	  var leftKeys = Object.keys(left);
	  var rightKeys = Object.keys(right);
	  if (leftKeys.length !== rightKeys.length) return false;
	  var keySet = {};

	  for (var i = 0; i < leftKeys.length; i += 1) {
	    keySet[leftKeys[i]] = true;
	  }

	  for (var _i = 0; _i < rightKeys.length; _i += 1) {
	    keySet[rightKeys[_i]] = true;
	  }

	  var allKeys = Object.keys(keySet);

	  if (allKeys.length !== leftKeys.length) {
	    return false;
	  }

	  var l = left;
	  var r = right;

	  var pred = function pred(key) {
	    return isEqual(l[key], r[key]);
	  };

	  return allKeys.every(pred);
	};

	var extractAllowedOptionsUpdates = function extractAllowedOptionsUpdates(options, prevOptions, immutableKeys) {
	  if (!isUnknownObject(options)) {
	    return null;
	  }

	  return Object.keys(options).reduce(function (newOptions, key) {
	    var isUpdated = !isUnknownObject(prevOptions) || !isEqual(options[key], prevOptions[key]);

	    if (immutableKeys.includes(key)) {
	      if (isUpdated) {
	        console.warn("Unsupported prop change: options.".concat(key, " is not a mutable property."));
	      }

	      return newOptions;
	    }

	    if (!isUpdated) {
	      return newOptions;
	    }

	    return _objectSpread2(_objectSpread2({}, newOptions || {}), {}, _defineProperty({}, key, options[key]));
	  }, null);
	};

	var INVALID_STRIPE_ERROR = 'Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.'; // We are using types to enforce the `stripe` prop in this lib, but in a real
	// integration `stripe` could be anything, so we need to do some sanity
	// validation to prevent type errors.

	var validateStripe = function validateStripe(maybeStripe) {
	  if (maybeStripe === null || isStripe(maybeStripe)) {
	    return maybeStripe;
	  }

	  throw new Error(INVALID_STRIPE_ERROR);
	};

	var parseStripeProp = function parseStripeProp(raw) {
	  if (isPromise(raw)) {
	    return {
	      tag: 'async',
	      stripePromise: Promise.resolve(raw).then(validateStripe)
	    };
	  }

	  var stripe = validateStripe(raw);

	  if (stripe === null) {
	    return {
	      tag: 'empty'
	    };
	  }

	  return {
	    tag: 'sync',
	    stripe: stripe
	  };
	};

	var ElementsContext = /*#__PURE__*/React.createContext(null);
	ElementsContext.displayName = 'ElementsContext';
	var parseElementsContext = function parseElementsContext(ctx, useCase) {
	  if (!ctx) {
	    throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(useCase, " in an <Elements> provider."));
	  }

	  return ctx;
	};
	/**
	 * The `Elements` provider allows you to use [Element components](https://stripe.com/docs/stripe-js/react#element-components) and access the [Stripe object](https://stripe.com/docs/js/initializing) in any nested component.
	 * Render an `Elements` provider at the root of your React app so that it is available everywhere you need it.
	 *
	 * To use the `Elements` provider, call `loadStripe` from `@stripe/stripe-js` with your publishable key.
	 * The `loadStripe` function will asynchronously load the Stripe.js script and initialize a `Stripe` object.
	 * Pass the returned `Promise` to `Elements`.
	 *
	 * @docs https://stripe.com/docs/stripe-js/react#elements-provider
	 */

	var Elements = function Elements(_ref) {
	  var rawStripeProp = _ref.stripe,
	      options = _ref.options,
	      children = _ref.children;

	  var _final = React.useRef(false);

	  var isMounted = React.useRef(true);
	  var parsed = React.useMemo(function () {
	    return parseStripeProp(rawStripeProp);
	  }, [rawStripeProp]);

	  var _React$useState = React.useState(function () {
	    return {
	      stripe: null,
	      elements: null
	    };
	  }),
	      _React$useState2 = _slicedToArray(_React$useState, 2),
	      ctx = _React$useState2[0],
	      setContext = _React$useState2[1];

	  var prevStripe = usePrevious(rawStripeProp);

	  if (prevStripe !== null) {
	    if (prevStripe !== rawStripeProp) {
	      console.warn('Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.');
	    }
	  }

	  if (!_final.current) {
	    if (parsed.tag === 'sync') {
	      _final.current = true;
	      setContext({
	        stripe: parsed.stripe,
	        elements: parsed.stripe.elements(options)
	      });
	    }

	    if (parsed.tag === 'async') {
	      _final.current = true;
	      parsed.stripePromise.then(function (stripe) {
	        if (stripe && isMounted.current) {
	          // Only update Elements context if the component is still mounted
	          // and stripe is not null. We allow stripe to be null to make
	          // handling SSR easier.
	          setContext({
	            stripe: stripe,
	            elements: stripe.elements(options)
	          });
	        }
	      });
	    }
	  }

	  var prevOptions = usePrevious(options);
	  React.useEffect(function () {
	    if (!ctx.elements) {
	      return;
	    }

	    var updates = extractAllowedOptionsUpdates(options, prevOptions, ['clientSecret', 'fonts']);

	    if (updates) {
	      ctx.elements.update(updates);
	    }
	  }, [options, prevOptions, ctx.elements]);
	  React.useEffect(function () {
	    return function () {
	      isMounted.current = false;
	    };
	  }, []);
	  React.useEffect(function () {
	    var anyStripe = ctx.stripe;

	    if (!anyStripe || !anyStripe._registerWrapper || !anyStripe.registerAppInfo) {
	      return;
	    }

	    anyStripe._registerWrapper({
	      name: 'react-stripe-js',
	      version: "1.6.0"
	    });

	    anyStripe.registerAppInfo({
	      name: 'react-stripe-js',
	      version: "1.6.0",
	      url: 'https://stripe.com/docs/stripe-js/react'
	    });
	  }, [ctx.stripe]);
	  return /*#__PURE__*/React.createElement(ElementsContext.Provider, {
	    value: ctx
	  }, children);
	};
	Elements.propTypes = {
	  stripe: propTypes.any,
	  options: propTypes.object
	};
	var useElementsContextWithUseCase = function useElementsContextWithUseCase(useCaseMessage) {
	  var ctx = React.useContext(ElementsContext);
	  return parseElementsContext(ctx, useCaseMessage);
	};
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#useelements-hook
	 */

	var useElements = function useElements() {
	  var _useElementsContextWi = useElementsContextWithUseCase('calls useElements()'),
	      elements = _useElementsContextWi.elements;

	  return elements;
	};
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#usestripe-hook
	 */

	var useStripe = function useStripe() {
	  var _useElementsContextWi2 = useElementsContextWithUseCase('calls useStripe()'),
	      stripe = _useElementsContextWi2.stripe;

	  return stripe;
	};
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#elements-consumer
	 */

	var ElementsConsumer = function ElementsConsumer(_ref2) {
	  var children = _ref2.children;
	  var ctx = useElementsContextWithUseCase('mounts <ElementsConsumer>'); // Assert to satisfy the busted React.FC return type (it should be ReactNode)

	  return children(ctx);
	};
	ElementsConsumer.propTypes = {
	  children: propTypes.func.isRequired
	};

	var useCallbackReference = function useCallbackReference(cb) {
	  var ref = React.useRef(cb);
	  React.useEffect(function () {
	    ref.current = cb;
	  }, [cb]);
	  return function () {
	    if (ref.current) {
	      ref.current.apply(ref, arguments);
	    }
	  };
	};

	var noop = function noop() {};

	var capitalized = function capitalized(str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	};

	var createElementComponent = function createElementComponent(type, isServer) {
	  var displayName = "".concat(capitalized(type), "Element");

	  var ClientElement = function ClientElement(_ref) {
	    var id = _ref.id,
	        className = _ref.className,
	        _ref$options = _ref.options,
	        options = _ref$options === void 0 ? {} : _ref$options,
	        _ref$onBlur = _ref.onBlur,
	        onBlur = _ref$onBlur === void 0 ? noop : _ref$onBlur,
	        _ref$onFocus = _ref.onFocus,
	        onFocus = _ref$onFocus === void 0 ? noop : _ref$onFocus,
	        _ref$onReady = _ref.onReady,
	        onReady = _ref$onReady === void 0 ? noop : _ref$onReady,
	        _ref$onChange = _ref.onChange,
	        onChange = _ref$onChange === void 0 ? noop : _ref$onChange,
	        _ref$onEscape = _ref.onEscape,
	        onEscape = _ref$onEscape === void 0 ? noop : _ref$onEscape,
	        _ref$onClick = _ref.onClick,
	        onClick = _ref$onClick === void 0 ? noop : _ref$onClick;

	    var _useElementsContextWi = useElementsContextWithUseCase("mounts <".concat(displayName, ">")),
	        elements = _useElementsContextWi.elements;

	    var elementRef = React.useRef(null);
	    var domNode = React.useRef(null);
	    var callOnReady = useCallbackReference(onReady);
	    var callOnBlur = useCallbackReference(onBlur);
	    var callOnFocus = useCallbackReference(onFocus);
	    var callOnClick = useCallbackReference(onClick);
	    var callOnChange = useCallbackReference(onChange);
	    var callOnEscape = useCallbackReference(onEscape);
	    React.useLayoutEffect(function () {
	      if (elementRef.current == null && elements && domNode.current != null) {
	        var element = elements.create(type, options);
	        elementRef.current = element;
	        element.mount(domNode.current);
	        element.on('ready', function () {
	          return callOnReady(element);
	        });
	        element.on('change', callOnChange);
	        element.on('blur', callOnBlur);
	        element.on('focus', callOnFocus);
	        element.on('escape', callOnEscape); // Users can pass an an onClick prop on any Element component
	        // just as they could listen for the `click` event on any Element,
	        // but only the PaymentRequestButton will actually trigger the event.

	        element.on('click', callOnClick);
	      }
	    });
	    var prevOptions = usePrevious(options);
	    React.useEffect(function () {
	      if (!elementRef.current) {
	        return;
	      }

	      var updates = extractAllowedOptionsUpdates(options, prevOptions, ['paymentRequest']);

	      if (updates) {
	        elementRef.current.update(updates);
	      }
	    }, [options, prevOptions]);
	    React.useLayoutEffect(function () {
	      return function () {
	        if (elementRef.current) {
	          elementRef.current.destroy();
	        }
	      };
	    }, []);
	    return /*#__PURE__*/React.createElement("div", {
	      id: id,
	      className: className,
	      ref: domNode
	    });
	  }; // Only render the Element wrapper in a server environment.


	  var ServerElement = function ServerElement(props) {
	    // Validate that we are in the right context by calling useElementsContextWithUseCase.
	    useElementsContextWithUseCase("mounts <".concat(displayName, ">"));
	    var id = props.id,
	        className = props.className;
	    return /*#__PURE__*/React.createElement("div", {
	      id: id,
	      className: className
	    });
	  };

	  var Element = isServer ? ServerElement : ClientElement;
	  Element.propTypes = {
	    id: propTypes.string,
	    className: propTypes.string,
	    onChange: propTypes.func,
	    onBlur: propTypes.func,
	    onFocus: propTypes.func,
	    onReady: propTypes.func,
	    onClick: propTypes.func,
	    options: propTypes.object
	  };
	  Element.displayName = displayName;
	  Element.__elementType = type;
	  return Element;
	};

	var isServer = typeof window === 'undefined';
	/**
	 * Requires beta access:
	 * Contact [Stripe support](https://support.stripe.com/) for more information.
	 *
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var AuBankAccountElement = createElementComponent('auBankAccount', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var CardElement = createElementComponent('card', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var CardNumberElement = createElementComponent('cardNumber', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var CardExpiryElement = createElementComponent('cardExpiry', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var CardCvcElement = createElementComponent('cardCvc', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var FpxBankElement = createElementComponent('fpxBank', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var IbanElement = createElementComponent('iban', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var IdealBankElement = createElementComponent('idealBank', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var P24BankElement = createElementComponent('p24Bank', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var EpsBankElement = createElementComponent('epsBank', isServer);
	var PaymentElement = createElementComponent('payment', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var PaymentRequestButtonElement = createElementComponent('paymentRequestButton', isServer);
	/**
	 * Requires beta access:
	 * Contact [Stripe support](https://support.stripe.com/) for more information.
	 *
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var LinkAuthenticationElement = createElementComponent('linkAuthentication', isServer);
	/**
	 * Requires beta access:
	 * Contact [Stripe support](https://support.stripe.com/) for more information.
	 *
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var ShippingAddressElement = createElementComponent('shippingAddress', isServer);
	/**
	 * @docs https://stripe.com/docs/stripe-js/react#element-components
	 */

	var AfterpayClearpayMessageElement = createElementComponent('afterpayClearpayMessage', isServer);

	exports.AfterpayClearpayMessageElement = AfterpayClearpayMessageElement;
	exports.AuBankAccountElement = AuBankAccountElement;
	exports.CardCvcElement = CardCvcElement;
	exports.CardElement = CardElement;
	exports.CardExpiryElement = CardExpiryElement;
	exports.CardNumberElement = CardNumberElement;
	exports.Elements = Elements;
	exports.ElementsConsumer = ElementsConsumer;
	exports.EpsBankElement = EpsBankElement;
	exports.FpxBankElement = FpxBankElement;
	exports.IbanElement = IbanElement;
	exports.IdealBankElement = IdealBankElement;
	exports.LinkAuthenticationElement = LinkAuthenticationElement;
	exports.P24BankElement = P24BankElement;
	exports.PaymentElement = PaymentElement;
	exports.PaymentRequestButtonElement = PaymentRequestButtonElement;
	exports.ShippingAddressElement = ShippingAddressElement;
	exports.useElements = useElements;
	exports.useStripe = useStripe;

	Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FydC44M2ExNjI2Zjc2MDUxYzAzNjRjYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxJQUFNRyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBZ0M7QUFDckQsTUFBSUMsVUFBVSxHQUFHLENBQWpCO0FBQ0FELEVBQUFBLEtBQUssQ0FBQ0UsT0FBTixDQUFjLFVBQUNDLElBQUQsRUFBVTtBQUN0QkYsSUFBQUEsVUFBVSxJQUFJRSxJQUFJLENBQUNDLFFBQUwsR0FBZ0JELElBQUksQ0FBQ0UsT0FBTCxDQUFhQyxLQUEzQztBQUNELEdBRkQ7QUFHQSxTQUFPQyxVQUFVLENBQUNOLFVBQVUsQ0FBQ08sT0FBWCxDQUFtQixDQUFuQixDQUFELENBQWpCO0FBQ0QsQ0FORDs7QUFRZSxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQzdCLE1BQU1DLFFBQVEsR0FBR2Isb0VBQVUsRUFBM0I7QUFDQSxNQUFNYyxJQUFJLEdBQUdELFFBQVEsQ0FBQ0UsS0FBdEI7QUFDQSxNQUFNQyxhQUFhLEdBQUdILFFBQVEsQ0FBQ0UsS0FBVCxDQUNuQkUsR0FEbUIsQ0FDZixVQUFDQyxFQUFEO0FBQUEsV0FBUUEsRUFBRSxDQUFDWCxRQUFYO0FBQUEsR0FEZSxFQUVuQlksTUFGbUIsQ0FFWixVQUFDQyxTQUFELEVBQVlDLFNBQVo7QUFBQSxXQUEwQkQsU0FBUyxHQUFHQyxTQUF0QztBQUFBLEdBRlksRUFFcUMsQ0FGckMsQ0FBdEI7QUFHQSxNQUFNakIsVUFBVSxHQUFHRixjQUFjLENBQUNXLFFBQVEsQ0FBQ0UsS0FBVixDQUFqQztBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQSxlQUNHRCxJQUFJLENBQUNHLEdBQUwsQ0FBUyxVQUFDSyxHQUFEO0FBQUEsMEJBQ1I7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxnQ0FD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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5RUFBeUU7O0FBRXpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdEQUFnRCxhQUFhOztBQUU3RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhcnQudHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9yZWFjdC1zdHJpcGUtanMvZGlzdC9yZWFjdC1zdHJpcGUudW1kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSAnQGNvbXBvbmVudHMvQnV0dG9uL0J1dHRvbidcclxuaW1wb3J0IHsgQ2FydFN0YXRlLCB1c2VBdm9DYXJ0IH0gZnJvbSAnY29udGV4dHMvY2FydEF2b3NDb250ZXh0J1xyXG5pbXBvcnQgeyBDYXJkRWxlbWVudCB9IGZyb20gJ0BzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzJ1xyXG5cclxuY29uc3QgY2FsY1RvdGFsUHJpY2UgPSAoaXRlbXM6IENhcnRTdGF0ZVtdKTogbnVtYmVyID0+IHtcclxuICBsZXQgdG90YWxQcmljZSA9IDBcclxuICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICB0b3RhbFByaWNlICs9IGl0ZW0ucXVhbnRpdHkgKiBpdGVtLmNhcnRBdm8ucHJpY2VcclxuICB9KVxyXG4gIHJldHVybiBwYXJzZUZsb2F0KHRvdGFsUHJpY2UudG9GaXhlZCgyKSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydCgpIHtcclxuICBjb25zdCBhdm9zQ2FydCA9IHVzZUF2b0NhcnQoKVxyXG4gIGNvbnN0IGF2b3MgPSBhdm9zQ2FydC5zdGF0ZVxyXG4gIGNvbnN0IHRvdGFsUXVhbnRpdHkgPSBhdm9zQ2FydC5zdGF0ZVxyXG4gICAgLm1hcCgoZWwpID0+IGVsLnF1YW50aXR5KVxyXG4gICAgLnJlZHVjZSgocHJldlZhbHVlLCBjdXJyVmFsdWUpID0+IHByZXZWYWx1ZSArIGN1cnJWYWx1ZSwgMClcclxuICBjb25zdCB0b3RhbFByaWNlID0gY2FsY1RvdGFsUHJpY2UoYXZvc0NhcnQuc3RhdGUpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnRcIj5cclxuICAgICAge2F2b3MubWFwKChhdm8pID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnRfX3Jvd1wiIGtleT17YXZvLmNhcnRBdm8uaWR9PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9e2F2by5jYXJ0QXZvLmltYWdlfVxyXG4gICAgICAgICAgICBhbHQ9e2F2by5jYXJ0QXZvLm5hbWV9XHJcbiAgICAgICAgICAgIHRpdGxlPXthdm8uY2FydEF2by5uYW1lfVxyXG4gICAgICAgICAgICBoZWlnaHQ9eycxNDAnfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMz57YXZvLmNhcnRBdm8ubmFtZX08L2gzPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICB7YXZvLnF1YW50aXR5fSB4IHthdm8uY2FydEF2by5wcmljZX3igqxcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnRfX3RvdGFsXCI+XHJcbiAgICAgICAgPGgzPlRvdGFsOiB7dG90YWxQcmljZX0g4oKsPC9oMz5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHt9fSBsYWJlbD17J0NoZWNrb3V0J30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxDYXJkRWxlbWVudFxyXG4gICAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIGJhc2U6IHtcclxuICAgICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnIzQyNDc3MCcsXHJcbiAgICAgICAgICAgICAgJzo6cGxhY2Vob2xkZXInOiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNhYWI3YzQnLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGludmFsaWQ6IHtcclxuICAgICAgICAgICAgICBjb2xvcjogJyM5ZTIxNDYnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZSgncmVhY3QnKSkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJywgJ3JlYWN0J10sIGZhY3RvcnkpIDpcblx0KGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC5SZWFjdFN0cmlwZSA9IHt9LCBnbG9iYWwuUmVhY3QpKTtcbn0odGhpcywgKGZ1bmN0aW9uIChleHBvcnRzLCBSZWFjdCkgeyAndXNlIHN0cmljdCc7XG5cblx0UmVhY3QgPSBSZWFjdCAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoUmVhY3QsICdkZWZhdWx0JykgPyBSZWFjdFsnZGVmYXVsdCddIDogUmVhY3Q7XG5cblx0ZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xuXHRcdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcblx0fVxuXG5cdC8qKlxuXHQgKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cblx0ICpcblx0ICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG5cdCAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cblx0ICovXG5cblx0dmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblx0dmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0XzEgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcblxuXHRmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge31cblxuXHRmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0KCkge31cblxuXHRlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LnJlc2V0V2FybmluZ0NhY2hlID0gZW1wdHlGdW5jdGlvbjtcblxuXHR2YXIgZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zID0gZnVuY3Rpb24gKCkge1xuXHQgIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcblx0ICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0XzEpIHtcblx0ICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cblx0ICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgKyAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJyk7XG5cdCAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcblx0ICAgIHRocm93IGVycjtcblx0ICB9XG5cdCAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcblxuXHQgIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG5cdCAgICByZXR1cm4gc2hpbTtcblx0ICB9XG5cdCAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG5cblx0ICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG5cdCAgICBhcnJheTogc2hpbSxcblx0ICAgIGJvb2w6IHNoaW0sXG5cdCAgICBmdW5jOiBzaGltLFxuXHQgICAgbnVtYmVyOiBzaGltLFxuXHQgICAgb2JqZWN0OiBzaGltLFxuXHQgICAgc3RyaW5nOiBzaGltLFxuXHQgICAgc3ltYm9sOiBzaGltLFxuXHQgICAgYW55OiBzaGltLFxuXHQgICAgYXJyYXlPZjogZ2V0U2hpbSxcblx0ICAgIGVsZW1lbnQ6IHNoaW0sXG5cdCAgICBlbGVtZW50VHlwZTogc2hpbSxcblx0ICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG5cdCAgICBub2RlOiBzaGltLFxuXHQgICAgb2JqZWN0T2Y6IGdldFNoaW0sXG5cdCAgICBvbmVPZjogZ2V0U2hpbSxcblx0ICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcblx0ICAgIHNoYXBlOiBnZXRTaGltLFxuXHQgICAgZXhhY3Q6IGdldFNoaW0sXG5cdCAgICBjaGVja1Byb3BUeXBlczogZW1wdHlGdW5jdGlvbldpdGhSZXNldCxcblx0ICAgIHJlc2V0V2FybmluZ0NhY2hlOiBlbXB0eUZ1bmN0aW9uXG5cdCAgfTtcblx0ICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblx0ICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG5cdH07XG5cblx0dmFyIHByb3BUeXBlcyA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcblx0LyoqXG5cdCAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuXHQgKlxuXHQgKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcblx0ICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuXHQgKi9cblx0e1xuXHQgIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG5cdCAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuXHQgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zKCk7XG5cdH1cblx0fSk7XG5cblx0ZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcblx0ICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cblx0ICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcblx0ICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG5cdCAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuXHQgICAgfTtcblx0ICB9IGVsc2Uge1xuXHQgICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcblx0ICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG5cdCAgICB9O1xuXHQgIH1cblxuXHQgIHJldHVybiBfdHlwZW9mKG9iaik7XG5cdH1cblxuXHRmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG5cdCAgaWYgKGtleSBpbiBvYmopIHtcblx0ICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuXHQgICAgICB2YWx1ZTogdmFsdWUsXG5cdCAgICAgIGVudW1lcmFibGU6IHRydWUsXG5cdCAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0ICAgICAgd3JpdGFibGU6IHRydWVcblx0ICAgIH0pO1xuXHQgIH0gZWxzZSB7XG5cdCAgICBvYmpba2V5XSA9IHZhbHVlO1xuXHQgIH1cblxuXHQgIHJldHVybiBvYmo7XG5cdH1cblxuXHRmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcblx0ICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cblx0ICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuXHQgICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG5cdCAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG5cdCAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuXHQgICAgfSk7XG5cdCAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG5cdCAgfVxuXG5cdCAgcmV0dXJuIGtleXM7XG5cdH1cblxuXHRmdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcblx0ICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHQgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cblx0ICAgIGlmIChpICUgMikge1xuXHQgICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0ICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcblx0ICAgICAgfSk7XG5cdCAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG5cdCAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0ICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcblx0ICAgICAgfSk7XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgcmV0dXJuIHRhcmdldDtcblx0fVxuXG5cdGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuXHQgIHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7XG5cdH1cblxuXHRmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG5cdCAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcblx0fVxuXG5cdGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcblx0ICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcblx0ICB2YXIgX2FyciA9IFtdO1xuXHQgIHZhciBfbiA9IHRydWU7XG5cdCAgdmFyIF9kID0gZmFsc2U7XG5cdCAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG5cdCAgdHJ5IHtcblx0ICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcblx0ICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuXHQgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG5cdCAgICB9XG5cdCAgfSBjYXRjaCAoZXJyKSB7XG5cdCAgICBfZCA9IHRydWU7XG5cdCAgICBfZSA9IGVycjtcblx0ICB9IGZpbmFsbHkge1xuXHQgICAgdHJ5IHtcblx0ICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuXHQgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcblx0ICAgIH1cblx0ICB9XG5cblx0ICByZXR1cm4gX2Fycjtcblx0fVxuXG5cdGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcblx0ICBpZiAoIW8pIHJldHVybjtcblx0ICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuXHQgIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcblx0ICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuXHQgIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuXHQgIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcblx0fVxuXG5cdGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG5cdCAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cblx0ICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cblx0ICByZXR1cm4gYXJyMjtcblx0fVxuXG5cdGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG5cdCAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcblx0fVxuXG5cdHZhciB1c2VQcmV2aW91cyA9IGZ1bmN0aW9uIHVzZVByZXZpb3VzKHZhbHVlKSB7XG5cdCAgdmFyIHJlZiA9IFJlYWN0LnVzZVJlZih2YWx1ZSk7XG5cdCAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcblx0ICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG5cdCAgfSwgW3ZhbHVlXSk7XG5cdCAgcmV0dXJuIHJlZi5jdXJyZW50O1xuXHR9O1xuXG5cdHZhciBpc1Vua25vd25PYmplY3QgPSBmdW5jdGlvbiBpc1Vua25vd25PYmplY3QocmF3KSB7XG5cdCAgcmV0dXJuIHJhdyAhPT0gbnVsbCAmJiBfdHlwZW9mKHJhdykgPT09ICdvYmplY3QnO1xuXHR9O1xuXHR2YXIgaXNQcm9taXNlID0gZnVuY3Rpb24gaXNQcm9taXNlKHJhdykge1xuXHQgIHJldHVybiBpc1Vua25vd25PYmplY3QocmF3KSAmJiB0eXBlb2YgcmF3LnRoZW4gPT09ICdmdW5jdGlvbic7XG5cdH07IC8vIFdlIGFyZSB1c2luZyB0eXBlcyB0byBlbmZvcmNlIHRoZSBgc3RyaXBlYCBwcm9wIGluIHRoaXMgbGliLFxuXHQvLyBidXQgaW4gYW4gdW50eXBlZCBpbnRlZ3JhdGlvbiBgc3RyaXBlYCBjb3VsZCBiZSBhbnl0aGluZywgc28gd2UgbmVlZFxuXHQvLyB0byBkbyBzb21lIHNhbml0eSB2YWxpZGF0aW9uIHRvIHByZXZlbnQgdHlwZSBlcnJvcnMuXG5cblx0dmFyIGlzU3RyaXBlID0gZnVuY3Rpb24gaXNTdHJpcGUocmF3KSB7XG5cdCAgcmV0dXJuIGlzVW5rbm93bk9iamVjdChyYXcpICYmIHR5cGVvZiByYXcuZWxlbWVudHMgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHJhdy5jcmVhdGVUb2tlbiA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgcmF3LmNyZWF0ZVBheW1lbnRNZXRob2QgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHJhdy5jb25maXJtQ2FyZFBheW1lbnQgPT09ICdmdW5jdGlvbic7XG5cdH07XG5cblx0dmFyIFBMQUlOX09CSkVDVF9TVFIgPSAnW29iamVjdCBPYmplY3RdJztcblx0dmFyIGlzRXF1YWwgPSBmdW5jdGlvbiBpc0VxdWFsKGxlZnQsIHJpZ2h0KSB7XG5cdCAgaWYgKCFpc1Vua25vd25PYmplY3QobGVmdCkgfHwgIWlzVW5rbm93bk9iamVjdChyaWdodCkpIHtcblx0ICAgIHJldHVybiBsZWZ0ID09PSByaWdodDtcblx0ICB9XG5cblx0ICB2YXIgbGVmdEFycmF5ID0gQXJyYXkuaXNBcnJheShsZWZ0KTtcblx0ICB2YXIgcmlnaHRBcnJheSA9IEFycmF5LmlzQXJyYXkocmlnaHQpO1xuXHQgIGlmIChsZWZ0QXJyYXkgIT09IHJpZ2h0QXJyYXkpIHJldHVybiBmYWxzZTtcblx0ICB2YXIgbGVmdFBsYWluT2JqZWN0ID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGxlZnQpID09PSBQTEFJTl9PQkpFQ1RfU1RSO1xuXHQgIHZhciByaWdodFBsYWluT2JqZWN0ID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHJpZ2h0KSA9PT0gUExBSU5fT0JKRUNUX1NUUjtcblx0ICBpZiAobGVmdFBsYWluT2JqZWN0ICE9PSByaWdodFBsYWluT2JqZWN0KSByZXR1cm4gZmFsc2U7XG5cdCAgaWYgKCFsZWZ0UGxhaW5PYmplY3QgJiYgIWxlZnRBcnJheSkgcmV0dXJuIGZhbHNlO1xuXHQgIHZhciBsZWZ0S2V5cyA9IE9iamVjdC5rZXlzKGxlZnQpO1xuXHQgIHZhciByaWdodEtleXMgPSBPYmplY3Qua2V5cyhyaWdodCk7XG5cdCAgaWYgKGxlZnRLZXlzLmxlbmd0aCAhPT0gcmlnaHRLZXlzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXHQgIHZhciBrZXlTZXQgPSB7fTtcblxuXHQgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVmdEtleXMubGVuZ3RoOyBpICs9IDEpIHtcblx0ICAgIGtleVNldFtsZWZ0S2V5c1tpXV0gPSB0cnVlO1xuXHQgIH1cblxuXHQgIGZvciAodmFyIF9pID0gMDsgX2kgPCByaWdodEtleXMubGVuZ3RoOyBfaSArPSAxKSB7XG5cdCAgICBrZXlTZXRbcmlnaHRLZXlzW19pXV0gPSB0cnVlO1xuXHQgIH1cblxuXHQgIHZhciBhbGxLZXlzID0gT2JqZWN0LmtleXMoa2V5U2V0KTtcblxuXHQgIGlmIChhbGxLZXlzLmxlbmd0aCAhPT0gbGVmdEtleXMubGVuZ3RoKSB7XG5cdCAgICByZXR1cm4gZmFsc2U7XG5cdCAgfVxuXG5cdCAgdmFyIGwgPSBsZWZ0O1xuXHQgIHZhciByID0gcmlnaHQ7XG5cblx0ICB2YXIgcHJlZCA9IGZ1bmN0aW9uIHByZWQoa2V5KSB7XG5cdCAgICByZXR1cm4gaXNFcXVhbChsW2tleV0sIHJba2V5XSk7XG5cdCAgfTtcblxuXHQgIHJldHVybiBhbGxLZXlzLmV2ZXJ5KHByZWQpO1xuXHR9O1xuXG5cdHZhciBleHRyYWN0QWxsb3dlZE9wdGlvbnNVcGRhdGVzID0gZnVuY3Rpb24gZXh0cmFjdEFsbG93ZWRPcHRpb25zVXBkYXRlcyhvcHRpb25zLCBwcmV2T3B0aW9ucywgaW1tdXRhYmxlS2V5cykge1xuXHQgIGlmICghaXNVbmtub3duT2JqZWN0KG9wdGlvbnMpKSB7XG5cdCAgICByZXR1cm4gbnVsbDtcblx0ICB9XG5cblx0ICByZXR1cm4gT2JqZWN0LmtleXMob3B0aW9ucykucmVkdWNlKGZ1bmN0aW9uIChuZXdPcHRpb25zLCBrZXkpIHtcblx0ICAgIHZhciBpc1VwZGF0ZWQgPSAhaXNVbmtub3duT2JqZWN0KHByZXZPcHRpb25zKSB8fCAhaXNFcXVhbChvcHRpb25zW2tleV0sIHByZXZPcHRpb25zW2tleV0pO1xuXG5cdCAgICBpZiAoaW1tdXRhYmxlS2V5cy5pbmNsdWRlcyhrZXkpKSB7XG5cdCAgICAgIGlmIChpc1VwZGF0ZWQpIHtcblx0ICAgICAgICBjb25zb2xlLndhcm4oXCJVbnN1cHBvcnRlZCBwcm9wIGNoYW5nZTogb3B0aW9ucy5cIi5jb25jYXQoa2V5LCBcIiBpcyBub3QgYSBtdXRhYmxlIHByb3BlcnR5LlwiKSk7XG5cdCAgICAgIH1cblxuXHQgICAgICByZXR1cm4gbmV3T3B0aW9ucztcblx0ICAgIH1cblxuXHQgICAgaWYgKCFpc1VwZGF0ZWQpIHtcblx0ICAgICAgcmV0dXJuIG5ld09wdGlvbnM7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgbmV3T3B0aW9ucyB8fCB7fSksIHt9LCBfZGVmaW5lUHJvcGVydHkoe30sIGtleSwgb3B0aW9uc1trZXldKSk7XG5cdCAgfSwgbnVsbCk7XG5cdH07XG5cblx0dmFyIElOVkFMSURfU1RSSVBFX0VSUk9SID0gJ0ludmFsaWQgcHJvcCBgc3RyaXBlYCBzdXBwbGllZCB0byBgRWxlbWVudHNgLiBXZSByZWNvbW1lbmQgdXNpbmcgdGhlIGBsb2FkU3RyaXBlYCB1dGlsaXR5IGZyb20gYEBzdHJpcGUvc3RyaXBlLWpzYC4gU2VlIGh0dHBzOi8vc3RyaXBlLmNvbS9kb2NzL3N0cmlwZS1qcy9yZWFjdCNlbGVtZW50cy1wcm9wcy1zdHJpcGUgZm9yIGRldGFpbHMuJzsgLy8gV2UgYXJlIHVzaW5nIHR5cGVzIHRvIGVuZm9yY2UgdGhlIGBzdHJpcGVgIHByb3AgaW4gdGhpcyBsaWIsIGJ1dCBpbiBhIHJlYWxcblx0Ly8gaW50ZWdyYXRpb24gYHN0cmlwZWAgY291bGQgYmUgYW55dGhpbmcsIHNvIHdlIG5lZWQgdG8gZG8gc29tZSBzYW5pdHlcblx0Ly8gdmFsaWRhdGlvbiB0byBwcmV2ZW50IHR5cGUgZXJyb3JzLlxuXG5cdHZhciB2YWxpZGF0ZVN0cmlwZSA9IGZ1bmN0aW9uIHZhbGlkYXRlU3RyaXBlKG1heWJlU3RyaXBlKSB7XG5cdCAgaWYgKG1heWJlU3RyaXBlID09PSBudWxsIHx8IGlzU3RyaXBlKG1heWJlU3RyaXBlKSkge1xuXHQgICAgcmV0dXJuIG1heWJlU3RyaXBlO1xuXHQgIH1cblxuXHQgIHRocm93IG5ldyBFcnJvcihJTlZBTElEX1NUUklQRV9FUlJPUik7XG5cdH07XG5cblx0dmFyIHBhcnNlU3RyaXBlUHJvcCA9IGZ1bmN0aW9uIHBhcnNlU3RyaXBlUHJvcChyYXcpIHtcblx0ICBpZiAoaXNQcm9taXNlKHJhdykpIHtcblx0ICAgIHJldHVybiB7XG5cdCAgICAgIHRhZzogJ2FzeW5jJyxcblx0ICAgICAgc3RyaXBlUHJvbWlzZTogUHJvbWlzZS5yZXNvbHZlKHJhdykudGhlbih2YWxpZGF0ZVN0cmlwZSlcblx0ICAgIH07XG5cdCAgfVxuXG5cdCAgdmFyIHN0cmlwZSA9IHZhbGlkYXRlU3RyaXBlKHJhdyk7XG5cblx0ICBpZiAoc3RyaXBlID09PSBudWxsKSB7XG5cdCAgICByZXR1cm4ge1xuXHQgICAgICB0YWc6ICdlbXB0eSdcblx0ICAgIH07XG5cdCAgfVxuXG5cdCAgcmV0dXJuIHtcblx0ICAgIHRhZzogJ3N5bmMnLFxuXHQgICAgc3RyaXBlOiBzdHJpcGVcblx0ICB9O1xuXHR9O1xuXG5cdHZhciBFbGVtZW50c0NvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblx0RWxlbWVudHNDb250ZXh0LmRpc3BsYXlOYW1lID0gJ0VsZW1lbnRzQ29udGV4dCc7XG5cdHZhciBwYXJzZUVsZW1lbnRzQ29udGV4dCA9IGZ1bmN0aW9uIHBhcnNlRWxlbWVudHNDb250ZXh0KGN0eCwgdXNlQ2FzZSkge1xuXHQgIGlmICghY3R4KSB7XG5cdCAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBFbGVtZW50cyBjb250ZXh0OyBZb3UgbmVlZCB0byB3cmFwIHRoZSBwYXJ0IG9mIHlvdXIgYXBwIHRoYXQgXCIuY29uY2F0KHVzZUNhc2UsIFwiIGluIGFuIDxFbGVtZW50cz4gcHJvdmlkZXIuXCIpKTtcblx0ICB9XG5cblx0ICByZXR1cm4gY3R4O1xuXHR9O1xuXHQvKipcblx0ICogVGhlIGBFbGVtZW50c2AgcHJvdmlkZXIgYWxsb3dzIHlvdSB0byB1c2UgW0VsZW1lbnQgY29tcG9uZW50c10oaHR0cHM6Ly9zdHJpcGUuY29tL2RvY3Mvc3RyaXBlLWpzL3JlYWN0I2VsZW1lbnQtY29tcG9uZW50cykgYW5kIGFjY2VzcyB0aGUgW1N0cmlwZSBvYmplY3RdKGh0dHBzOi8vc3RyaXBlLmNvbS9kb2NzL2pzL2luaXRpYWxpemluZykgaW4gYW55IG5lc3RlZCBjb21wb25lbnQuXG5cdCAqIFJlbmRlciBhbiBgRWxlbWVudHNgIHByb3ZpZGVyIGF0IHRoZSByb290IG9mIHlvdXIgUmVhY3QgYXBwIHNvIHRoYXQgaXQgaXMgYXZhaWxhYmxlIGV2ZXJ5d2hlcmUgeW91IG5lZWQgaXQuXG5cdCAqXG5cdCAqIFRvIHVzZSB0aGUgYEVsZW1lbnRzYCBwcm92aWRlciwgY2FsbCBgbG9hZFN0cmlwZWAgZnJvbSBgQHN0cmlwZS9zdHJpcGUtanNgIHdpdGggeW91ciBwdWJsaXNoYWJsZSBrZXkuXG5cdCAqIFRoZSBgbG9hZFN0cmlwZWAgZnVuY3Rpb24gd2lsbCBhc3luY2hyb25vdXNseSBsb2FkIHRoZSBTdHJpcGUuanMgc2NyaXB0IGFuZCBpbml0aWFsaXplIGEgYFN0cmlwZWAgb2JqZWN0LlxuXHQgKiBQYXNzIHRoZSByZXR1cm5lZCBgUHJvbWlzZWAgdG8gYEVsZW1lbnRzYC5cblx0ICpcblx0ICogQGRvY3MgaHR0cHM6Ly9zdHJpcGUuY29tL2RvY3Mvc3RyaXBlLWpzL3JlYWN0I2VsZW1lbnRzLXByb3ZpZGVyXG5cdCAqL1xuXG5cdHZhciBFbGVtZW50cyA9IGZ1bmN0aW9uIEVsZW1lbnRzKF9yZWYpIHtcblx0ICB2YXIgcmF3U3RyaXBlUHJvcCA9IF9yZWYuc3RyaXBlLFxuXHQgICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuXHQgICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG5cblx0ICB2YXIgX2ZpbmFsID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcblxuXHQgIHZhciBpc01vdW50ZWQgPSBSZWFjdC51c2VSZWYodHJ1ZSk7XG5cdCAgdmFyIHBhcnNlZCA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuXHQgICAgcmV0dXJuIHBhcnNlU3RyaXBlUHJvcChyYXdTdHJpcGVQcm9wKTtcblx0ICB9LCBbcmF3U3RyaXBlUHJvcF0pO1xuXG5cdCAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiB7XG5cdCAgICAgIHN0cmlwZTogbnVsbCxcblx0ICAgICAgZWxlbWVudHM6IG51bGxcblx0ICAgIH07XG5cdCAgfSksXG5cdCAgICAgIF9SZWFjdCR1c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfUmVhY3QkdXNlU3RhdGUsIDIpLFxuXHQgICAgICBjdHggPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuXHQgICAgICBzZXRDb250ZXh0ID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuXHQgIHZhciBwcmV2U3RyaXBlID0gdXNlUHJldmlvdXMocmF3U3RyaXBlUHJvcCk7XG5cblx0ICBpZiAocHJldlN0cmlwZSAhPT0gbnVsbCkge1xuXHQgICAgaWYgKHByZXZTdHJpcGUgIT09IHJhd1N0cmlwZVByb3ApIHtcblx0ICAgICAgY29uc29sZS53YXJuKCdVbnN1cHBvcnRlZCBwcm9wIGNoYW5nZSBvbiBFbGVtZW50czogWW91IGNhbm5vdCBjaGFuZ2UgdGhlIGBzdHJpcGVgIHByb3AgYWZ0ZXIgc2V0dGluZyBpdC4nKTtcblx0ICAgIH1cblx0ICB9XG5cblx0ICBpZiAoIV9maW5hbC5jdXJyZW50KSB7XG5cdCAgICBpZiAocGFyc2VkLnRhZyA9PT0gJ3N5bmMnKSB7XG5cdCAgICAgIF9maW5hbC5jdXJyZW50ID0gdHJ1ZTtcblx0ICAgICAgc2V0Q29udGV4dCh7XG5cdCAgICAgICAgc3RyaXBlOiBwYXJzZWQuc3RyaXBlLFxuXHQgICAgICAgIGVsZW1lbnRzOiBwYXJzZWQuc3RyaXBlLmVsZW1lbnRzKG9wdGlvbnMpXG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXG5cdCAgICBpZiAocGFyc2VkLnRhZyA9PT0gJ2FzeW5jJykge1xuXHQgICAgICBfZmluYWwuY3VycmVudCA9IHRydWU7XG5cdCAgICAgIHBhcnNlZC5zdHJpcGVQcm9taXNlLnRoZW4oZnVuY3Rpb24gKHN0cmlwZSkge1xuXHQgICAgICAgIGlmIChzdHJpcGUgJiYgaXNNb3VudGVkLmN1cnJlbnQpIHtcblx0ICAgICAgICAgIC8vIE9ubHkgdXBkYXRlIEVsZW1lbnRzIGNvbnRleHQgaWYgdGhlIGNvbXBvbmVudCBpcyBzdGlsbCBtb3VudGVkXG5cdCAgICAgICAgICAvLyBhbmQgc3RyaXBlIGlzIG5vdCBudWxsLiBXZSBhbGxvdyBzdHJpcGUgdG8gYmUgbnVsbCB0byBtYWtlXG5cdCAgICAgICAgICAvLyBoYW5kbGluZyBTU1IgZWFzaWVyLlxuXHQgICAgICAgICAgc2V0Q29udGV4dCh7XG5cdCAgICAgICAgICAgIHN0cmlwZTogc3RyaXBlLFxuXHQgICAgICAgICAgICBlbGVtZW50czogc3RyaXBlLmVsZW1lbnRzKG9wdGlvbnMpXG5cdCAgICAgICAgICB9KTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIHZhciBwcmV2T3B0aW9ucyA9IHVzZVByZXZpb3VzKG9wdGlvbnMpO1xuXHQgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG5cdCAgICBpZiAoIWN0eC5lbGVtZW50cykge1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cblx0ICAgIHZhciB1cGRhdGVzID0gZXh0cmFjdEFsbG93ZWRPcHRpb25zVXBkYXRlcyhvcHRpb25zLCBwcmV2T3B0aW9ucywgWydjbGllbnRTZWNyZXQnLCAnZm9udHMnXSk7XG5cblx0ICAgIGlmICh1cGRhdGVzKSB7XG5cdCAgICAgIGN0eC5lbGVtZW50cy51cGRhdGUodXBkYXRlcyk7XG5cdCAgICB9XG5cdCAgfSwgW29wdGlvbnMsIHByZXZPcHRpb25zLCBjdHguZWxlbWVudHNdKTtcblx0ICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuXHQgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgaXNNb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcblx0ICAgIH07XG5cdCAgfSwgW10pO1xuXHQgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG5cdCAgICB2YXIgYW55U3RyaXBlID0gY3R4LnN0cmlwZTtcblxuXHQgICAgaWYgKCFhbnlTdHJpcGUgfHwgIWFueVN0cmlwZS5fcmVnaXN0ZXJXcmFwcGVyIHx8ICFhbnlTdHJpcGUucmVnaXN0ZXJBcHBJbmZvKSB7XG5cdCAgICAgIHJldHVybjtcblx0ICAgIH1cblxuXHQgICAgYW55U3RyaXBlLl9yZWdpc3RlcldyYXBwZXIoe1xuXHQgICAgICBuYW1lOiAncmVhY3Qtc3RyaXBlLWpzJyxcblx0ICAgICAgdmVyc2lvbjogXCIxLjYuMFwiXG5cdCAgICB9KTtcblxuXHQgICAgYW55U3RyaXBlLnJlZ2lzdGVyQXBwSW5mbyh7XG5cdCAgICAgIG5hbWU6ICdyZWFjdC1zdHJpcGUtanMnLFxuXHQgICAgICB2ZXJzaW9uOiBcIjEuNi4wXCIsXG5cdCAgICAgIHVybDogJ2h0dHBzOi8vc3RyaXBlLmNvbS9kb2NzL3N0cmlwZS1qcy9yZWFjdCdcblx0ICAgIH0pO1xuXHQgIH0sIFtjdHguc3RyaXBlXSk7XG5cdCAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEVsZW1lbnRzQ29udGV4dC5Qcm92aWRlciwge1xuXHQgICAgdmFsdWU6IGN0eFxuXHQgIH0sIGNoaWxkcmVuKTtcblx0fTtcblx0RWxlbWVudHMucHJvcFR5cGVzID0ge1xuXHQgIHN0cmlwZTogcHJvcFR5cGVzLmFueSxcblx0ICBvcHRpb25zOiBwcm9wVHlwZXMub2JqZWN0XG5cdH07XG5cdHZhciB1c2VFbGVtZW50c0NvbnRleHRXaXRoVXNlQ2FzZSA9IGZ1bmN0aW9uIHVzZUVsZW1lbnRzQ29udGV4dFdpdGhVc2VDYXNlKHVzZUNhc2VNZXNzYWdlKSB7XG5cdCAgdmFyIGN0eCA9IFJlYWN0LnVzZUNvbnRleHQoRWxlbWVudHNDb250ZXh0KTtcblx0ICByZXR1cm4gcGFyc2VFbGVtZW50c0NvbnRleHQoY3R4LCB1c2VDYXNlTWVzc2FnZSk7XG5cdH07XG5cdC8qKlxuXHQgKiBAZG9jcyBodHRwczovL3N0cmlwZS5jb20vZG9jcy9zdHJpcGUtanMvcmVhY3QjdXNlZWxlbWVudHMtaG9va1xuXHQgKi9cblxuXHR2YXIgdXNlRWxlbWVudHMgPSBmdW5jdGlvbiB1c2VFbGVtZW50cygpIHtcblx0ICB2YXIgX3VzZUVsZW1lbnRzQ29udGV4dFdpID0gdXNlRWxlbWVudHNDb250ZXh0V2l0aFVzZUNhc2UoJ2NhbGxzIHVzZUVsZW1lbnRzKCknKSxcblx0ICAgICAgZWxlbWVudHMgPSBfdXNlRWxlbWVudHNDb250ZXh0V2kuZWxlbWVudHM7XG5cblx0ICByZXR1cm4gZWxlbWVudHM7XG5cdH07XG5cdC8qKlxuXHQgKiBAZG9jcyBodHRwczovL3N0cmlwZS5jb20vZG9jcy9zdHJpcGUtanMvcmVhY3QjdXNlc3RyaXBlLWhvb2tcblx0ICovXG5cblx0dmFyIHVzZVN0cmlwZSA9IGZ1bmN0aW9uIHVzZVN0cmlwZSgpIHtcblx0ICB2YXIgX3VzZUVsZW1lbnRzQ29udGV4dFdpMiA9IHVzZUVsZW1lbnRzQ29udGV4dFdpdGhVc2VDYXNlKCdjYWxscyB1c2VTdHJpcGUoKScpLFxuXHQgICAgICBzdHJpcGUgPSBfdXNlRWxlbWVudHNDb250ZXh0V2kyLnN0cmlwZTtcblxuXHQgIHJldHVybiBzdHJpcGU7XG5cdH07XG5cdC8qKlxuXHQgKiBAZG9jcyBodHRwczovL3N0cmlwZS5jb20vZG9jcy9zdHJpcGUtanMvcmVhY3QjZWxlbWVudHMtY29uc3VtZXJcblx0ICovXG5cblx0dmFyIEVsZW1lbnRzQ29uc3VtZXIgPSBmdW5jdGlvbiBFbGVtZW50c0NvbnN1bWVyKF9yZWYyKSB7XG5cdCAgdmFyIGNoaWxkcmVuID0gX3JlZjIuY2hpbGRyZW47XG5cdCAgdmFyIGN0eCA9IHVzZUVsZW1lbnRzQ29udGV4dFdpdGhVc2VDYXNlKCdtb3VudHMgPEVsZW1lbnRzQ29uc3VtZXI+Jyk7IC8vIEFzc2VydCB0byBzYXRpc2Z5IHRoZSBidXN0ZWQgUmVhY3QuRkMgcmV0dXJuIHR5cGUgKGl0IHNob3VsZCBiZSBSZWFjdE5vZGUpXG5cblx0ICByZXR1cm4gY2hpbGRyZW4oY3R4KTtcblx0fTtcblx0RWxlbWVudHNDb25zdW1lci5wcm9wVHlwZXMgPSB7XG5cdCAgY2hpbGRyZW46IHByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcblx0fTtcblxuXHR2YXIgdXNlQ2FsbGJhY2tSZWZlcmVuY2UgPSBmdW5jdGlvbiB1c2VDYWxsYmFja1JlZmVyZW5jZShjYikge1xuXHQgIHZhciByZWYgPSBSZWFjdC51c2VSZWYoY2IpO1xuXHQgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG5cdCAgICByZWYuY3VycmVudCA9IGNiO1xuXHQgIH0sIFtjYl0pO1xuXHQgIHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdCAgICBpZiAocmVmLmN1cnJlbnQpIHtcblx0ICAgICAgcmVmLmN1cnJlbnQuYXBwbHkocmVmLCBhcmd1bWVudHMpO1xuXHQgICAgfVxuXHQgIH07XG5cdH07XG5cblx0dmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG5cblx0dmFyIGNhcGl0YWxpemVkID0gZnVuY3Rpb24gY2FwaXRhbGl6ZWQoc3RyKSB7XG5cdCAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcblx0fTtcblxuXHR2YXIgY3JlYXRlRWxlbWVudENvbXBvbmVudCA9IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRDb21wb25lbnQodHlwZSwgaXNTZXJ2ZXIpIHtcblx0ICB2YXIgZGlzcGxheU5hbWUgPSBcIlwiLmNvbmNhdChjYXBpdGFsaXplZCh0eXBlKSwgXCJFbGVtZW50XCIpO1xuXG5cdCAgdmFyIENsaWVudEVsZW1lbnQgPSBmdW5jdGlvbiBDbGllbnRFbGVtZW50KF9yZWYpIHtcblx0ICAgIHZhciBpZCA9IF9yZWYuaWQsXG5cdCAgICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG5cdCAgICAgICAgX3JlZiRvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuXHQgICAgICAgIG9wdGlvbnMgPSBfcmVmJG9wdGlvbnMgPT09IHZvaWQgMCA/IHt9IDogX3JlZiRvcHRpb25zLFxuXHQgICAgICAgIF9yZWYkb25CbHVyID0gX3JlZi5vbkJsdXIsXG5cdCAgICAgICAgb25CbHVyID0gX3JlZiRvbkJsdXIgPT09IHZvaWQgMCA/IG5vb3AgOiBfcmVmJG9uQmx1cixcblx0ICAgICAgICBfcmVmJG9uRm9jdXMgPSBfcmVmLm9uRm9jdXMsXG5cdCAgICAgICAgb25Gb2N1cyA9IF9yZWYkb25Gb2N1cyA9PT0gdm9pZCAwID8gbm9vcCA6IF9yZWYkb25Gb2N1cyxcblx0ICAgICAgICBfcmVmJG9uUmVhZHkgPSBfcmVmLm9uUmVhZHksXG5cdCAgICAgICAgb25SZWFkeSA9IF9yZWYkb25SZWFkeSA9PT0gdm9pZCAwID8gbm9vcCA6IF9yZWYkb25SZWFkeSxcblx0ICAgICAgICBfcmVmJG9uQ2hhbmdlID0gX3JlZi5vbkNoYW5nZSxcblx0ICAgICAgICBvbkNoYW5nZSA9IF9yZWYkb25DaGFuZ2UgPT09IHZvaWQgMCA/IG5vb3AgOiBfcmVmJG9uQ2hhbmdlLFxuXHQgICAgICAgIF9yZWYkb25Fc2NhcGUgPSBfcmVmLm9uRXNjYXBlLFxuXHQgICAgICAgIG9uRXNjYXBlID0gX3JlZiRvbkVzY2FwZSA9PT0gdm9pZCAwID8gbm9vcCA6IF9yZWYkb25Fc2NhcGUsXG5cdCAgICAgICAgX3JlZiRvbkNsaWNrID0gX3JlZi5vbkNsaWNrLFxuXHQgICAgICAgIG9uQ2xpY2sgPSBfcmVmJG9uQ2xpY2sgPT09IHZvaWQgMCA/IG5vb3AgOiBfcmVmJG9uQ2xpY2s7XG5cblx0ICAgIHZhciBfdXNlRWxlbWVudHNDb250ZXh0V2kgPSB1c2VFbGVtZW50c0NvbnRleHRXaXRoVXNlQ2FzZShcIm1vdW50cyA8XCIuY29uY2F0KGRpc3BsYXlOYW1lLCBcIj5cIikpLFxuXHQgICAgICAgIGVsZW1lbnRzID0gX3VzZUVsZW1lbnRzQ29udGV4dFdpLmVsZW1lbnRzO1xuXG5cdCAgICB2YXIgZWxlbWVudFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblx0ICAgIHZhciBkb21Ob2RlID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXHQgICAgdmFyIGNhbGxPblJlYWR5ID0gdXNlQ2FsbGJhY2tSZWZlcmVuY2Uob25SZWFkeSk7XG5cdCAgICB2YXIgY2FsbE9uQmx1ciA9IHVzZUNhbGxiYWNrUmVmZXJlbmNlKG9uQmx1cik7XG5cdCAgICB2YXIgY2FsbE9uRm9jdXMgPSB1c2VDYWxsYmFja1JlZmVyZW5jZShvbkZvY3VzKTtcblx0ICAgIHZhciBjYWxsT25DbGljayA9IHVzZUNhbGxiYWNrUmVmZXJlbmNlKG9uQ2xpY2spO1xuXHQgICAgdmFyIGNhbGxPbkNoYW5nZSA9IHVzZUNhbGxiYWNrUmVmZXJlbmNlKG9uQ2hhbmdlKTtcblx0ICAgIHZhciBjYWxsT25Fc2NhcGUgPSB1c2VDYWxsYmFja1JlZmVyZW5jZShvbkVzY2FwZSk7XG5cdCAgICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuXHQgICAgICBpZiAoZWxlbWVudFJlZi5jdXJyZW50ID09IG51bGwgJiYgZWxlbWVudHMgJiYgZG9tTm9kZS5jdXJyZW50ICE9IG51bGwpIHtcblx0ICAgICAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRzLmNyZWF0ZSh0eXBlLCBvcHRpb25zKTtcblx0ICAgICAgICBlbGVtZW50UmVmLmN1cnJlbnQgPSBlbGVtZW50O1xuXHQgICAgICAgIGVsZW1lbnQubW91bnQoZG9tTm9kZS5jdXJyZW50KTtcblx0ICAgICAgICBlbGVtZW50Lm9uKCdyZWFkeScsIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgIHJldHVybiBjYWxsT25SZWFkeShlbGVtZW50KTtcblx0ICAgICAgICB9KTtcblx0ICAgICAgICBlbGVtZW50Lm9uKCdjaGFuZ2UnLCBjYWxsT25DaGFuZ2UpO1xuXHQgICAgICAgIGVsZW1lbnQub24oJ2JsdXInLCBjYWxsT25CbHVyKTtcblx0ICAgICAgICBlbGVtZW50Lm9uKCdmb2N1cycsIGNhbGxPbkZvY3VzKTtcblx0ICAgICAgICBlbGVtZW50Lm9uKCdlc2NhcGUnLCBjYWxsT25Fc2NhcGUpOyAvLyBVc2VycyBjYW4gcGFzcyBhbiBhbiBvbkNsaWNrIHByb3Agb24gYW55IEVsZW1lbnQgY29tcG9uZW50XG5cdCAgICAgICAgLy8ganVzdCBhcyB0aGV5IGNvdWxkIGxpc3RlbiBmb3IgdGhlIGBjbGlja2AgZXZlbnQgb24gYW55IEVsZW1lbnQsXG5cdCAgICAgICAgLy8gYnV0IG9ubHkgdGhlIFBheW1lbnRSZXF1ZXN0QnV0dG9uIHdpbGwgYWN0dWFsbHkgdHJpZ2dlciB0aGUgZXZlbnQuXG5cblx0ICAgICAgICBlbGVtZW50Lm9uKCdjbGljaycsIGNhbGxPbkNsaWNrKTtcblx0ICAgICAgfVxuXHQgICAgfSk7XG5cdCAgICB2YXIgcHJldk9wdGlvbnMgPSB1c2VQcmV2aW91cyhvcHRpb25zKTtcblx0ICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG5cdCAgICAgIGlmICghZWxlbWVudFJlZi5jdXJyZW50KSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cblx0ICAgICAgdmFyIHVwZGF0ZXMgPSBleHRyYWN0QWxsb3dlZE9wdGlvbnNVcGRhdGVzKG9wdGlvbnMsIHByZXZPcHRpb25zLCBbJ3BheW1lbnRSZXF1ZXN0J10pO1xuXG5cdCAgICAgIGlmICh1cGRhdGVzKSB7XG5cdCAgICAgICAgZWxlbWVudFJlZi5jdXJyZW50LnVwZGF0ZSh1cGRhdGVzKTtcblx0ICAgICAgfVxuXHQgICAgfSwgW29wdGlvbnMsIHByZXZPcHRpb25zXSk7XG5cdCAgICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuXHQgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGlmIChlbGVtZW50UmVmLmN1cnJlbnQpIHtcblx0ICAgICAgICAgIGVsZW1lbnRSZWYuY3VycmVudC5kZXN0cm95KCk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9O1xuXHQgICAgfSwgW10pO1xuXHQgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcblx0ICAgICAgaWQ6IGlkLFxuXHQgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcblx0ICAgICAgcmVmOiBkb21Ob2RlXG5cdCAgICB9KTtcblx0ICB9OyAvLyBPbmx5IHJlbmRlciB0aGUgRWxlbWVudCB3cmFwcGVyIGluIGEgc2VydmVyIGVudmlyb25tZW50LlxuXG5cblx0ICB2YXIgU2VydmVyRWxlbWVudCA9IGZ1bmN0aW9uIFNlcnZlckVsZW1lbnQocHJvcHMpIHtcblx0ICAgIC8vIFZhbGlkYXRlIHRoYXQgd2UgYXJlIGluIHRoZSByaWdodCBjb250ZXh0IGJ5IGNhbGxpbmcgdXNlRWxlbWVudHNDb250ZXh0V2l0aFVzZUNhc2UuXG5cdCAgICB1c2VFbGVtZW50c0NvbnRleHRXaXRoVXNlQ2FzZShcIm1vdW50cyA8XCIuY29uY2F0KGRpc3BsYXlOYW1lLCBcIj5cIikpO1xuXHQgICAgdmFyIGlkID0gcHJvcHMuaWQsXG5cdCAgICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lO1xuXHQgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcblx0ICAgICAgaWQ6IGlkLFxuXHQgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuXHQgICAgfSk7XG5cdCAgfTtcblxuXHQgIHZhciBFbGVtZW50ID0gaXNTZXJ2ZXIgPyBTZXJ2ZXJFbGVtZW50IDogQ2xpZW50RWxlbWVudDtcblx0ICBFbGVtZW50LnByb3BUeXBlcyA9IHtcblx0ICAgIGlkOiBwcm9wVHlwZXMuc3RyaW5nLFxuXHQgICAgY2xhc3NOYW1lOiBwcm9wVHlwZXMuc3RyaW5nLFxuXHQgICAgb25DaGFuZ2U6IHByb3BUeXBlcy5mdW5jLFxuXHQgICAgb25CbHVyOiBwcm9wVHlwZXMuZnVuYyxcblx0ICAgIG9uRm9jdXM6IHByb3BUeXBlcy5mdW5jLFxuXHQgICAgb25SZWFkeTogcHJvcFR5cGVzLmZ1bmMsXG5cdCAgICBvbkNsaWNrOiBwcm9wVHlwZXMuZnVuYyxcblx0ICAgIG9wdGlvbnM6IHByb3BUeXBlcy5vYmplY3Rcblx0ICB9O1xuXHQgIEVsZW1lbnQuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcblx0ICBFbGVtZW50Ll9fZWxlbWVudFR5cGUgPSB0eXBlO1xuXHQgIHJldHVybiBFbGVtZW50O1xuXHR9O1xuXG5cdHZhciBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuXHQvKipcblx0ICogUmVxdWlyZXMgYmV0YSBhY2Nlc3M6XG5cdCAqIENvbnRhY3QgW1N0cmlwZSBzdXBwb3J0XShodHRwczovL3N1cHBvcnQuc3RyaXBlLmNvbS8pIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuXHQgKlxuXHQgKiBAZG9jcyBodHRwczovL3N0cmlwZS5jb20vZG9jcy9zdHJpcGUtanMvcmVhY3QjZWxlbWVudC1jb21wb25lbnRzXG5cdCAqL1xuXG5cdHZhciBBdUJhbmtBY2NvdW50RWxlbWVudCA9IGNyZWF0ZUVsZW1lbnRDb21wb25lbnQoJ2F1QmFua0FjY291bnQnLCBpc1NlcnZlcik7XG5cdC8qKlxuXHQgKiBAZG9jcyBodHRwczovL3N0cmlwZS5jb20vZG9jcy9zdHJpcGUtanMvcmVhY3QjZWxlbWVudC1jb21wb25lbnRzXG5cdCAqL1xuXG5cdHZhciBDYXJkRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnRDb21wb25lbnQoJ2NhcmQnLCBpc1NlcnZlcik7XG5cdC8qKlxuXHQgKiBAZG9jcyBodHRwczovL3N0cmlwZS5jb20vZG9jcy9zdHJpcGUtanMvcmVhY3QjZWxlbWVudC1jb21wb25lbnRzXG5cdCAqL1xuXG5cdHZhciBDYXJkTnVtYmVyRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnRDb21wb25lbnQoJ2NhcmROdW1iZXInLCBpc1NlcnZlcik7XG5cdC8qKlxuXHQgKiBAZG9jcyBodHRwczovL3N0cmlwZS5jb20vZG9jcy9zdHJpcGUtanMvcmVhY3QjZWxlbWVudC1jb21wb25lbnRzXG5cdCAqL1xuXG5cdHZhciBDYXJkRXhwaXJ5RWxlbWVudCA9IGNyZWF0ZUVsZW1lbnRDb21wb25lbnQoJ2NhcmRFeHBpcnknLCBpc1NlcnZlcik7XG5cdC8qKlxuXHQgKiBAZG9jcyBodHRwczovL3N0cmlwZS5jb20vZG9jcy9zdHJpcGUtanMvcmVhY3QjZWxlbWVudC1jb21wb25lbnRzXG5cdCAqL1xuXG5cdHZhciBDYXJkQ3ZjRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnRDb21wb25lbnQoJ2NhcmRDdmMnLCBpc1NlcnZlcik7XG5cdC8qKlxuXHQgKiBAZG9jcyBodHRwczovL3N0cmlwZS5jb20vZG9jcy9zdHJpcGUtanMvcmVhY3QjZWxlbWVudC1jb21wb25lbnRzXG5cdCAqL1xuXG5cdHZhciBGcHhCYW5rRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnRDb21wb25lbnQoJ2ZweEJhbmsnLCBpc1NlcnZlcik7XG5cdC8qKlxuXHQgKiBAZG9jcyBodHRwczovL3N0cmlwZS5jb20vZG9jcy9zdHJpcGUtanMvcmVhY3QjZWxlbWVudC1jb21wb25lbnRzXG5cdCAqL1xuXG5cdHZhciBJYmFuRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnRDb21wb25lbnQoJ2liYW4nLCBpc1NlcnZlcik7XG5cdC8qKlxuXHQgKiBAZG9jcyBodHRwczovL3N0cmlwZS5jb20vZG9jcy9zdHJpcGUtanMvcmVhY3QjZWxlbWVudC1jb21wb25lbnRzXG5cdCAqL1xuXG5cdHZhciBJZGVhbEJhbmtFbGVtZW50ID0gY3JlYXRlRWxlbWVudENvbXBvbmVudCgnaWRlYWxCYW5rJywgaXNTZXJ2ZXIpO1xuXHQvKipcblx0ICogQGRvY3MgaHR0cHM6Ly9zdHJpcGUuY29tL2RvY3Mvc3RyaXBlLWpzL3JlYWN0I2VsZW1lbnQtY29tcG9uZW50c1xuXHQgKi9cblxuXHR2YXIgUDI0QmFua0VsZW1lbnQgPSBjcmVhdGVFbGVtZW50Q29tcG9uZW50KCdwMjRCYW5rJywgaXNTZXJ2ZXIpO1xuXHQvKipcblx0ICogQGRvY3MgaHR0cHM6Ly9zdHJpcGUuY29tL2RvY3Mvc3RyaXBlLWpzL3JlYWN0I2VsZW1lbnQtY29tcG9uZW50c1xuXHQgKi9cblxuXHR2YXIgRXBzQmFua0VsZW1lbnQgPSBjcmVhdGVFbGVtZW50Q29tcG9uZW50KCdlcHNCYW5rJywgaXNTZXJ2ZXIpO1xuXHR2YXIgUGF5bWVudEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50Q29tcG9uZW50KCdwYXltZW50JywgaXNTZXJ2ZXIpO1xuXHQvKipcblx0ICogQGRvY3MgaHR0cHM6Ly9zdHJpcGUuY29tL2RvY3Mvc3RyaXBlLWpzL3JlYWN0I2VsZW1lbnQtY29tcG9uZW50c1xuXHQgKi9cblxuXHR2YXIgUGF5bWVudFJlcXVlc3RCdXR0b25FbGVtZW50ID0gY3JlYXRlRWxlbWVudENvbXBvbmVudCgncGF5bWVudFJlcXVlc3RCdXR0b24nLCBpc1NlcnZlcik7XG5cdC8qKlxuXHQgKiBSZXF1aXJlcyBiZXRhIGFjY2Vzczpcblx0ICogQ29udGFjdCBbU3RyaXBlIHN1cHBvcnRdKGh0dHBzOi8vc3VwcG9ydC5zdHJpcGUuY29tLykgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG5cdCAqXG5cdCAqIEBkb2NzIGh0dHBzOi8vc3RyaXBlLmNvbS9kb2NzL3N0cmlwZS1qcy9yZWFjdCNlbGVtZW50LWNvbXBvbmVudHNcblx0ICovXG5cblx0dmFyIExpbmtBdXRoZW50aWNhdGlvbkVsZW1lbnQgPSBjcmVhdGVFbGVtZW50Q29tcG9uZW50KCdsaW5rQXV0aGVudGljYXRpb24nLCBpc1NlcnZlcik7XG5cdC8qKlxuXHQgKiBSZXF1aXJlcyBiZXRhIGFjY2Vzczpcblx0ICogQ29udGFjdCBbU3RyaXBlIHN1cHBvcnRdKGh0dHBzOi8vc3VwcG9ydC5zdHJpcGUuY29tLykgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG5cdCAqXG5cdCAqIEBkb2NzIGh0dHBzOi8vc3RyaXBlLmNvbS9kb2NzL3N0cmlwZS1qcy9yZWFjdCNlbGVtZW50LWNvbXBvbmVudHNcblx0ICovXG5cblx0dmFyIFNoaXBwaW5nQWRkcmVzc0VsZW1lbnQgPSBjcmVhdGVFbGVtZW50Q29tcG9uZW50KCdzaGlwcGluZ0FkZHJlc3MnLCBpc1NlcnZlcik7XG5cdC8qKlxuXHQgKiBAZG9jcyBodHRwczovL3N0cmlwZS5jb20vZG9jcy9zdHJpcGUtanMvcmVhY3QjZWxlbWVudC1jb21wb25lbnRzXG5cdCAqL1xuXG5cdHZhciBBZnRlcnBheUNsZWFycGF5TWVzc2FnZUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50Q29tcG9uZW50KCdhZnRlcnBheUNsZWFycGF5TWVzc2FnZScsIGlzU2VydmVyKTtcblxuXHRleHBvcnRzLkFmdGVycGF5Q2xlYXJwYXlNZXNzYWdlRWxlbWVudCA9IEFmdGVycGF5Q2xlYXJwYXlNZXNzYWdlRWxlbWVudDtcblx0ZXhwb3J0cy5BdUJhbmtBY2NvdW50RWxlbWVudCA9IEF1QmFua0FjY291bnRFbGVtZW50O1xuXHRleHBvcnRzLkNhcmRDdmNFbGVtZW50ID0gQ2FyZEN2Y0VsZW1lbnQ7XG5cdGV4cG9ydHMuQ2FyZEVsZW1lbnQgPSBDYXJkRWxlbWVudDtcblx0ZXhwb3J0cy5DYXJkRXhwaXJ5RWxlbWVudCA9IENhcmRFeHBpcnlFbGVtZW50O1xuXHRleHBvcnRzLkNhcmROdW1iZXJFbGVtZW50ID0gQ2FyZE51bWJlckVsZW1lbnQ7XG5cdGV4cG9ydHMuRWxlbWVudHMgPSBFbGVtZW50cztcblx0ZXhwb3J0cy5FbGVtZW50c0NvbnN1bWVyID0gRWxlbWVudHNDb25zdW1lcjtcblx0ZXhwb3J0cy5FcHNCYW5rRWxlbWVudCA9IEVwc0JhbmtFbGVtZW50O1xuXHRleHBvcnRzLkZweEJhbmtFbGVtZW50ID0gRnB4QmFua0VsZW1lbnQ7XG5cdGV4cG9ydHMuSWJhbkVsZW1lbnQgPSBJYmFuRWxlbWVudDtcblx0ZXhwb3J0cy5JZGVhbEJhbmtFbGVtZW50ID0gSWRlYWxCYW5rRWxlbWVudDtcblx0ZXhwb3J0cy5MaW5rQXV0aGVudGljYXRpb25FbGVtZW50ID0gTGlua0F1dGhlbnRpY2F0aW9uRWxlbWVudDtcblx0ZXhwb3J0cy5QMjRCYW5rRWxlbWVudCA9IFAyNEJhbmtFbGVtZW50O1xuXHRleHBvcnRzLlBheW1lbnRFbGVtZW50ID0gUGF5bWVudEVsZW1lbnQ7XG5cdGV4cG9ydHMuUGF5bWVudFJlcXVlc3RCdXR0b25FbGVtZW50ID0gUGF5bWVudFJlcXVlc3RCdXR0b25FbGVtZW50O1xuXHRleHBvcnRzLlNoaXBwaW5nQWRkcmVzc0VsZW1lbnQgPSBTaGlwcGluZ0FkZHJlc3NFbGVtZW50O1xuXHRleHBvcnRzLnVzZUVsZW1lbnRzID0gdXNlRWxlbWVudHM7XG5cdGV4cG9ydHMudXNlU3RyaXBlID0gdXNlU3RyaXBlO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKSk7XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwidXNlQXZvQ2FydCIsIkNhcmRFbGVtZW50IiwiY2FsY1RvdGFsUHJpY2UiLCJpdGVtcyIsInRvdGFsUHJpY2UiLCJmb3JFYWNoIiwiaXRlbSIsInF1YW50aXR5IiwiY2FydEF2byIsInByaWNlIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJDYXJ0IiwiYXZvc0NhcnQiLCJhdm9zIiwic3RhdGUiLCJ0b3RhbFF1YW50aXR5IiwibWFwIiwiZWwiLCJyZWR1Y2UiLCJwcmV2VmFsdWUiLCJjdXJyVmFsdWUiLCJhdm8iLCJpbWFnZSIsIm5hbWUiLCJpZCIsInN0eWxlIiwiYmFzZSIsImZvbnRTaXplIiwiY29sb3IiLCJpbnZhbGlkIl0sInNvdXJjZVJvb3QiOiIifQ==