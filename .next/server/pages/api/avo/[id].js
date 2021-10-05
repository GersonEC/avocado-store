module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/avo/[id].ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./database/data.ts":
/*!**************************!*\
  !*** ./database/data.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const data = {
  '2zd33b8c': {
    name: 'Maluma Hass Avocado',
    id: '2zd33b8c',
    sku: 'NUR72KCM',
    price: 1.15,
    image: '/images/maluma.jpg',
    attributes: {
      description: 'A relatively new cultivar, it was, the pretty boy baby, discovered in South Africa in the early 1990s by Mr. A.G. (Dries) Joubert. Maluma Babyy. It is a chance seedling of unknown parentage',
      shape: 'Oval',
      hardiness: '1 °C',
      taste: 'Catchy, is an avocado'
    }
  },
  '6trfgkkj': {
    name: 'Fuerte Avocado',
    id: '6trfgkkj',
    sku: 'AX4M8SJV',
    price: 1.21,
    image: '/images/fuerte.jpg',
    attributes: {
      description: 'The Fuerte avocado is the second largest commercial variety behind Hass. It is a long time California commercial variety valued for its winter season ripening and its B-Type blossom type which most growers plant adjacent to the Hass for a more consistent production cycle. This avocado tends to produce heavily in alternate years.',
      shape: 'Pear',
      hardiness: '-1 °C',
      taste: 'Magnificent, is a strong avocado'
    }
  },
  '7bcr49em': {
    name: 'Gwen Hass Avocado',
    id: '7bcr49em',
    sku: 'HYA78F6J',
    price: 1.25,
    image: '/images/gwen.jpg',
    attributes: {
      description: "A seedling bred from 'Hass' x 'Thille' in 1982, 'Gwen' is higher yielding and more dwarfing than 'Hass' in California. The fruit has an oval shape, slightly smaller than 'Hass' (100–200 g or 3.5–7.1 oz), with a rich, nutty flavor. The skin texture is more finely pebbled than 'Hass', and is dull green when ripe. It is frost-hardy down to −1 °C (30 °F)",
      shape: 'Plump',
      hardiness: '−1 °C',
      taste: 'Superb, is an avocado'
    }
  },
  '098323ks': {
    name: 'Bacon Avocado',
    id: '098323ks',
    sku: 'BXD100BLK',
    price: 1.51,
    image: '/images/bacon.jpg',
    attributes: {
      description: 'Developed by a farmer, James Bacon, in 1954, Bacon has medium-sized fruit with smooth, green skin with yellow-green, light-tasting flesh. When ripe, the skin remains green, but darkens slightly, and fruit yields to gentle pressure. It is cold-hardy down to −5 °C (23 °F)',
      shape: 'Oval',
      hardiness: '−5 °C',
      taste: 'Creamy, is an avocado'
    }
  },
  b8uthe2y: {
    name: 'Hass Avocado',
    id: 'b8uthe2y',
    sku: 'RMRCZN7E',
    price: 1.39,
    image: '/images/hass.jpg',
    attributes: {
      description: "The 'Hass' is the most common cultivar of avocado. It produces fruit year-round and accounts for 80% of cultivated avocados in the world.[21][55] All 'Hass' trees are descended from a single 'mother tree' raised by a mail carrier named Rudolph Hass, of La Habra Heights, California.[20][55] Hass patented the productive tree in 1935. The 'mother tree', of uncertain subspecies, died of root rot and was cut down in September 2002.[21][55][56] 'Hass' trees have medium-sized (150–250 g or 5.3–8.8 oz), ovate fruit with a black, pebbled skin. The flesh has a nutty, rich flavor with 19% oil. A hybrid Guatemalan type can withstand temperatures to −1 °C (30 °F)",
      shape: 'Oval',
      hardiness: '−1 °C',
      taste: 'Gorgeous, is an avocado'
    }
  },
  ewxsd6xb: {
    name: 'Lamb Hass Avocado',
    id: 'ewxsd6xb',
    sku: 'N55229ZA',
    price: 1.34,
    image: '/images/lamb.jpg',
    attributes: {
      description: 'The Lamb Hass avocado is a cross between a Hass and Gwen avocado. The fruits are larger in size and later maturing than Hass. It is gaining in popularity as a commercial and backyard variety due to its exceptional flavor and easy peeling qualities. The tree has an upright, compact habit.',
      shape: 'Obovate',
      hardiness: '-2 °C',
      taste: 'Great, is an avocado'
    }
  },
  fpr72m9k: {
    name: 'Pinkerton Avocado',
    id: 'fpr72m9k',
    sku: 'B4HZ42TM',
    price: 1.27,
    image: '/images/pinkerton.jpg',
    attributes: {
      description: "First grown on the Pinkerton Ranch in Saticoy, California, in the early 1970s, 'Pinkerton' is a seedling of 'Hass' x 'Rincon'. The large fruit has a small seed, and its green skin deepens in color as it ripens. The thick flesh has a smooth, creamy texture, pale green color, good flavor, and high oil content. It shows some cold tolerance, to −1 °C (30 °F) and bears consistently heavy crops. A hybrid Guatemalan type, it has excellent peeling characteristics",
      shape: 'Long pear',
      hardiness: '−1 °C',
      taste: 'Marvelous, is an avocado'
    }
  },
  t9dv25gs: {
    name: 'Reed Avocado',
    id: 't9dv25gs',
    sku: 'ZY3T9XXC',
    price: 1.18,
    image: '/images/reed.jpg',
    attributes: {
      description: 'Developed from a chance seedling found in 1948 by James S. Reed in California, this cultivar has large, round, green fruit with a smooth texture and dark, thick, glossy skin. Smooth and delicate, the flesh has a slightly nutty flavor. The skin ripens green. A Guatemalan type, it is hardy to −1 °C (30 °F). Tree size is about 5 by 4 m (16.4 by 13.1 ft)',
      shape: 'Round',
      hardiness: '−1 °C',
      taste: 'Exquisite, is an avocado'
    }
  },
  t345w48y: {
    name: 'Zutano Avocado',
    id: 't345w48y',
    sku: 'MW79ZZ6Y',
    price: 1.25,
    image: '/images/zutano.jpg',
    attributes: {
      description: 'The Zutano avocado is a cold hardy, consistent producing avocado variety. It resembles the Fuerte in appearance but is less flavorful but more cold hardy. The green fruits are obovate in shape with waxy bumps on the skin. The flesh has a low oil but high water content which causes it to have a more fibrous texture.',
      shape: 'Pear',
      hardiness: '-5 °C',
      taste: 'Splendid, is an avocado'
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./database/db.ts":
/*!************************!*\
  !*** ./database/db.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./database/data.ts");
// Oh you curious...
// This is not a real database,
// But let's imagine it is one :)


class Database {
  constructor() {}

  async getAll() {
    const asArray = Object.values(_data__WEBPACK_IMPORTED_MODULE_0__["default"]);
    await randomDelay();
    return asArray;
  }

  async getById(id) {
    if (!Object.prototype.hasOwnProperty.call(_data__WEBPACK_IMPORTED_MODULE_0__["default"], id)) {
      return null;
    }

    const entry = _data__WEBPACK_IMPORTED_MODULE_0__["default"][id];
    await randomDelay();
    return entry;
  }

} // Let's also add a delay to make it a bit closer to reality


const randomDelay = () => new Promise(resolve => {
  const max = 350;
  const min = 100;
  const delay = Math.floor(Math.random() * (max - min + 1)) + min;
  setTimeout(resolve, delay);
});

/* harmony default export */ __webpack_exports__["default"] = (Database);

/***/ }),

/***/ "./pages/api/avo/[id].ts":
/*!*******************************!*\
  !*** ./pages/api/avo/[id].ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @database */ "./database/db.ts");


const getAvoById = async (request, response) => {
  const db = new _database__WEBPACK_IMPORTED_MODULE_0__["default"]();
  const id = request.query.id;
  const entry = await db.getById(id);
  response.statusCode = 200;
  response.setHeader('Content-type', 'application/json');
  response.end(JSON.stringify({
    data: entry
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (allAvos);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGF0YWJhc2UvZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9kYi50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXZvLy50cyJdLCJuYW1lcyI6WyJkYXRhIiwibmFtZSIsImlkIiwic2t1IiwicHJpY2UiLCJpbWFnZSIsImF0dHJpYnV0ZXMiLCJkZXNjcmlwdGlvbiIsInNoYXBlIiwiaGFyZGluZXNzIiwidGFzdGUiLCJiOHV0aGUyeSIsImV3eHNkNnhiIiwiZnByNzJtOWsiLCJ0OWR2MjVncyIsInQzNDV3NDh5IiwiRGF0YWJhc2UiLCJjb25zdHJ1Y3RvciIsImdldEFsbCIsImFzQXJyYXkiLCJPYmplY3QiLCJ2YWx1ZXMiLCJhbGxEYXRhIiwicmFuZG9tRGVsYXkiLCJnZXRCeUlkIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZW50cnkiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm1heCIsIm1pbiIsImRlbGF5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0VGltZW91dCIsImdldEF2b0J5SWQiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJkYiIsIkRCIiwicXVlcnkiLCJzdGF0dXNDb2RlIiwic2V0SGVhZGVyIiwiZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsImFsbEF2b3MiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JB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R0FBZixDQUFiO0FBQ0QsQ0FaRDs7QUFjZXFCLHNFQUFmLEUiLCJmaWxlIjoicGFnZXMvYXBpL2F2by9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvYXZvL1tpZF0udHNcIik7XG4iLCJjb25zdCBkYXRhOiBSZWNvcmQ8VFByb2R1Y3RJZCwgVFByb2R1Y3Q+ID0ge1xuICAnMnpkMzNiOGMnOiB7XG4gICAgbmFtZTogJ01hbHVtYSBIYXNzIEF2b2NhZG8nLFxuICAgIGlkOiAnMnpkMzNiOGMnLFxuICAgIHNrdTogJ05VUjcyS0NNJyxcbiAgICBwcmljZTogMS4xNSxcbiAgICBpbWFnZTogJy9pbWFnZXMvbWFsdW1hLmpwZycsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdBIHJlbGF0aXZlbHkgbmV3IGN1bHRpdmFyLCBpdCB3YXMsIHRoZSBwcmV0dHkgYm95IGJhYnksIGRpc2NvdmVyZWQgaW4gU291dGggQWZyaWNhIGluIHRoZSBlYXJseSAxOTkwcyBieSBNci4gQS5HLiAoRHJpZXMpIEpvdWJlcnQuIE1hbHVtYSBCYWJ5eS4gSXQgaXMgYSBjaGFuY2Ugc2VlZGxpbmcgb2YgdW5rbm93biBwYXJlbnRhZ2UnLFxuICAgICAgc2hhcGU6ICdPdmFsJyxcbiAgICAgIGhhcmRpbmVzczogJzEgwrBDJyxcbiAgICAgIHRhc3RlOiAnQ2F0Y2h5LCBpcyBhbiBhdm9jYWRvJyxcbiAgICB9LFxuICB9LFxuICAnNnRyZmdra2onOiB7XG4gICAgbmFtZTogJ0Z1ZXJ0ZSBBdm9jYWRvJyxcbiAgICBpZDogJzZ0cmZna2tqJyxcbiAgICBza3U6ICdBWDRNOFNKVicsXG4gICAgcHJpY2U6IDEuMjEsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2Z1ZXJ0ZS5qcGcnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnVGhlIEZ1ZXJ0ZSBhdm9jYWRvIGlzIHRoZSBzZWNvbmQgbGFyZ2VzdCBjb21tZXJjaWFsIHZhcmlldHkgYmVoaW5kIEhhc3MuIEl0IGlzIGEgbG9uZyB0aW1lIENhbGlmb3JuaWEgY29tbWVyY2lhbCB2YXJpZXR5IHZhbHVlZCBmb3IgaXRzIHdpbnRlciBzZWFzb24gcmlwZW5pbmcgYW5kIGl0cyBCLVR5cGUgYmxvc3NvbSB0eXBlIHdoaWNoIG1vc3QgZ3Jvd2VycyBwbGFudCBhZGphY2VudCB0byB0aGUgSGFzcyBmb3IgYSBtb3JlIGNvbnNpc3RlbnQgcHJvZHVjdGlvbiBjeWNsZS4gVGhpcyBhdm9jYWRvIHRlbmRzIHRvIHByb2R1Y2UgaGVhdmlseSBpbiBhbHRlcm5hdGUgeWVhcnMuJyxcbiAgICAgIHNoYXBlOiAnUGVhcicsXG4gICAgICBoYXJkaW5lc3M6ICctMSDCsEMnLFxuICAgICAgdGFzdGU6ICdNYWduaWZpY2VudCwgaXMgYSBzdHJvbmcgYXZvY2FkbycsXG4gICAgfSxcbiAgfSxcbiAgJzdiY3I0OWVtJzoge1xuICAgIG5hbWU6ICdHd2VuIEhhc3MgQXZvY2FkbycsXG4gICAgaWQ6ICc3YmNyNDllbScsXG4gICAgc2t1OiAnSFlBNzhGNkonLFxuICAgIHByaWNlOiAxLjI1LFxuICAgIGltYWdlOiAnL2ltYWdlcy9nd2VuLmpwZycsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiQSBzZWVkbGluZyBicmVkIGZyb20gJ0hhc3MnIHggJ1RoaWxsZScgaW4gMTk4MiwgJ0d3ZW4nIGlzIGhpZ2hlciB5aWVsZGluZyBhbmQgbW9yZSBkd2FyZmluZyB0aGFuICdIYXNzJyBpbiBDYWxpZm9ybmlhLiBUaGUgZnJ1aXQgaGFzIGFuIG92YWwgc2hhcGUsIHNsaWdodGx5IHNtYWxsZXIgdGhhbiAnSGFzcycgKDEwMOKAkzIwMCBnIG9yIDMuNeKAkzcuMSBveiksIHdpdGggYSByaWNoLCBudXR0eSBmbGF2b3IuIFRoZSBza2luIHRleHR1cmUgaXMgbW9yZSBmaW5lbHkgcGViYmxlZCB0aGFuICdIYXNzJywgYW5kIGlzIGR1bGwgZ3JlZW4gd2hlbiByaXBlLiBJdCBpcyBmcm9zdC1oYXJkeSBkb3duIHRvIOKIkjEgwrBDICgzMCDCsEYpXCIsXG4gICAgICBzaGFwZTogJ1BsdW1wJyxcbiAgICAgIGhhcmRpbmVzczogJ+KIkjEgwrBDJyxcbiAgICAgIHRhc3RlOiAnU3VwZXJiLCBpcyBhbiBhdm9jYWRvJyxcbiAgICB9LFxuICB9LFxuICAnMDk4MzIza3MnOiB7XG4gICAgbmFtZTogJ0JhY29uIEF2b2NhZG8nLFxuICAgIGlkOiAnMDk4MzIza3MnLFxuICAgIHNrdTogJ0JYRDEwMEJMSycsXG4gICAgcHJpY2U6IDEuNTEsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2JhY29uLmpwZycsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdEZXZlbG9wZWQgYnkgYSBmYXJtZXIsIEphbWVzIEJhY29uLCBpbiAxOTU0LCBCYWNvbiBoYXMgbWVkaXVtLXNpemVkIGZydWl0IHdpdGggc21vb3RoLCBncmVlbiBza2luIHdpdGggeWVsbG93LWdyZWVuLCBsaWdodC10YXN0aW5nIGZsZXNoLiBXaGVuIHJpcGUsIHRoZSBza2luIHJlbWFpbnMgZ3JlZW4sIGJ1dCBkYXJrZW5zIHNsaWdodGx5LCBhbmQgZnJ1aXQgeWllbGRzIHRvIGdlbnRsZSBwcmVzc3VyZS4gSXQgaXMgY29sZC1oYXJkeSBkb3duIHRvIOKIkjUgwrBDICgyMyDCsEYpJyxcbiAgICAgIHNoYXBlOiAnT3ZhbCcsXG4gICAgICBoYXJkaW5lc3M6ICfiiJI1IMKwQycsXG4gICAgICB0YXN0ZTogJ0NyZWFteSwgaXMgYW4gYXZvY2FkbycsXG4gICAgfSxcbiAgfSxcbiAgYjh1dGhlMnk6IHtcbiAgICBuYW1lOiAnSGFzcyBBdm9jYWRvJyxcbiAgICBpZDogJ2I4dXRoZTJ5JyxcbiAgICBza3U6ICdSTVJDWk43RScsXG4gICAgcHJpY2U6IDEuMzksXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2hhc3MuanBnJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJUaGUgJ0hhc3MnIGlzIHRoZSBtb3N0IGNvbW1vbiBjdWx0aXZhciBvZiBhdm9jYWRvLiBJdCBwcm9kdWNlcyBmcnVpdCB5ZWFyLXJvdW5kIGFuZCBhY2NvdW50cyBmb3IgODAlIG9mIGN1bHRpdmF0ZWQgYXZvY2Fkb3MgaW4gdGhlIHdvcmxkLlsyMV1bNTVdIEFsbCAnSGFzcycgdHJlZXMgYXJlIGRlc2NlbmRlZCBmcm9tIGEgc2luZ2xlICdtb3RoZXIgdHJlZScgcmFpc2VkIGJ5IGEgbWFpbCBjYXJyaWVyIG5hbWVkIFJ1ZG9scGggSGFzcywgb2YgTGEgSGFicmEgSGVpZ2h0cywgQ2FsaWZvcm5pYS5bMjBdWzU1XSBIYXNzIHBhdGVudGVkIHRoZSBwcm9kdWN0aXZlIHRyZWUgaW4gMTkzNS4gVGhlICdtb3RoZXIgdHJlZScsIG9mIHVuY2VydGFpbiBzdWJzcGVjaWVzLCBkaWVkIG9mIHJvb3Qgcm90IGFuZCB3YXMgY3V0IGRvd24gaW4gU2VwdGVtYmVyIDIwMDIuWzIxXVs1NV1bNTZdICdIYXNzJyB0cmVlcyBoYXZlIG1lZGl1bS1zaXplZCAoMTUw4oCTMjUwIGcgb3IgNS4z4oCTOC44IG96KSwgb3ZhdGUgZnJ1aXQgd2l0aCBhIGJsYWNrLCBwZWJibGVkIHNraW4uIFRoZSBmbGVzaCBoYXMgYSBudXR0eSwgcmljaCBmbGF2b3Igd2l0aCAxOSUgb2lsLiBBIGh5YnJpZCBHdWF0ZW1hbGFuIHR5cGUgY2FuIHdpdGhzdGFuZCB0ZW1wZXJhdHVyZXMgdG8g4oiSMSDCsEMgKDMwIMKwRilcIixcbiAgICAgIHNoYXBlOiAnT3ZhbCcsXG4gICAgICBoYXJkaW5lc3M6ICfiiJIxIMKwQycsXG4gICAgICB0YXN0ZTogJ0dvcmdlb3VzLCBpcyBhbiBhdm9jYWRvJyxcbiAgICB9LFxuICB9LFxuICBld3hzZDZ4Yjoge1xuICAgIG5hbWU6ICdMYW1iIEhhc3MgQXZvY2FkbycsXG4gICAgaWQ6ICdld3hzZDZ4YicsXG4gICAgc2t1OiAnTjU1MjI5WkEnLFxuICAgIHByaWNlOiAxLjM0LFxuICAgIGltYWdlOiAnL2ltYWdlcy9sYW1iLmpwZycsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdUaGUgTGFtYiBIYXNzIGF2b2NhZG8gaXMgYSBjcm9zcyBiZXR3ZWVuIGEgSGFzcyBhbmQgR3dlbiBhdm9jYWRvLiBUaGUgZnJ1aXRzIGFyZSBsYXJnZXIgaW4gc2l6ZSBhbmQgbGF0ZXIgbWF0dXJpbmcgdGhhbiBIYXNzLiBJdCBpcyBnYWluaW5nIGluIHBvcHVsYXJpdHkgYXMgYSBjb21tZXJjaWFsIGFuZCBiYWNreWFyZCB2YXJpZXR5IGR1ZSB0byBpdHMgZXhjZXB0aW9uYWwgZmxhdm9yIGFuZCBlYXN5IHBlZWxpbmcgcXVhbGl0aWVzLiBUaGUgdHJlZSBoYXMgYW4gdXByaWdodCwgY29tcGFjdCBoYWJpdC4nLFxuICAgICAgc2hhcGU6ICdPYm92YXRlJyxcbiAgICAgIGhhcmRpbmVzczogJy0yIMKwQycsXG4gICAgICB0YXN0ZTogJ0dyZWF0LCBpcyBhbiBhdm9jYWRvJyxcbiAgICB9LFxuICB9LFxuICBmcHI3Mm05azoge1xuICAgIG5hbWU6ICdQaW5rZXJ0b24gQXZvY2FkbycsXG4gICAgaWQ6ICdmcHI3Mm05aycsXG4gICAgc2t1OiAnQjRIWjQyVE0nLFxuICAgIHByaWNlOiAxLjI3LFxuICAgIGltYWdlOiAnL2ltYWdlcy9waW5rZXJ0b24uanBnJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJGaXJzdCBncm93biBvbiB0aGUgUGlua2VydG9uIFJhbmNoIGluIFNhdGljb3ksIENhbGlmb3JuaWEsIGluIHRoZSBlYXJseSAxOTcwcywgJ1BpbmtlcnRvbicgaXMgYSBzZWVkbGluZyBvZiAnSGFzcycgeCAnUmluY29uJy4gVGhlIGxhcmdlIGZydWl0IGhhcyBhIHNtYWxsIHNlZWQsIGFuZCBpdHMgZ3JlZW4gc2tpbiBkZWVwZW5zIGluIGNvbG9yIGFzIGl0IHJpcGVucy4gVGhlIHRoaWNrIGZsZXNoIGhhcyBhIHNtb290aCwgY3JlYW15IHRleHR1cmUsIHBhbGUgZ3JlZW4gY29sb3IsIGdvb2QgZmxhdm9yLCBhbmQgaGlnaCBvaWwgY29udGVudC4gSXQgc2hvd3Mgc29tZSBjb2xkIHRvbGVyYW5jZSwgdG8g4oiSMSDCsEMgKDMwIMKwRikgYW5kIGJlYXJzIGNvbnNpc3RlbnRseSBoZWF2eSBjcm9wcy4gQSBoeWJyaWQgR3VhdGVtYWxhbiB0eXBlLCBpdCBoYXMgZXhjZWxsZW50IHBlZWxpbmcgY2hhcmFjdGVyaXN0aWNzXCIsXG4gICAgICBzaGFwZTogJ0xvbmcgcGVhcicsXG4gICAgICBoYXJkaW5lc3M6ICfiiJIxIMKwQycsXG4gICAgICB0YXN0ZTogJ01hcnZlbG91cywgaXMgYW4gYXZvY2FkbycsXG4gICAgfSxcbiAgfSxcbiAgdDlkdjI1Z3M6IHtcbiAgICBuYW1lOiAnUmVlZCBBdm9jYWRvJyxcbiAgICBpZDogJ3Q5ZHYyNWdzJyxcbiAgICBza3U6ICdaWTNUOVhYQycsXG4gICAgcHJpY2U6IDEuMTgsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3JlZWQuanBnJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0RldmVsb3BlZCBmcm9tIGEgY2hhbmNlIHNlZWRsaW5nIGZvdW5kIGluIDE5NDggYnkgSmFtZXMgUy4gUmVlZCBpbiBDYWxpZm9ybmlhLCB0aGlzIGN1bHRpdmFyIGhhcyBsYXJnZSwgcm91bmQsIGdyZWVuIGZydWl0IHdpdGggYSBzbW9vdGggdGV4dHVyZSBhbmQgZGFyaywgdGhpY2ssIGdsb3NzeSBza2luLiBTbW9vdGggYW5kIGRlbGljYXRlLCB0aGUgZmxlc2ggaGFzIGEgc2xpZ2h0bHkgbnV0dHkgZmxhdm9yLiBUaGUgc2tpbiByaXBlbnMgZ3JlZW4uIEEgR3VhdGVtYWxhbiB0eXBlLCBpdCBpcyBoYXJkeSB0byDiiJIxIMKwQyAoMzAgwrBGKS4gVHJlZSBzaXplIGlzIGFib3V0IDUgYnkgNCBtICgxNi40IGJ5IDEzLjEgZnQpJyxcbiAgICAgIHNoYXBlOiAnUm91bmQnLFxuICAgICAgaGFyZGluZXNzOiAn4oiSMSDCsEMnLFxuICAgICAgdGFzdGU6ICdFeHF1aXNpdGUsIGlzIGFuIGF2b2NhZG8nLFxuICAgIH0sXG4gIH0sXG4gIHQzNDV3NDh5OiB7XG4gICAgbmFtZTogJ1p1dGFubyBBdm9jYWRvJyxcbiAgICBpZDogJ3QzNDV3NDh5JyxcbiAgICBza3U6ICdNVzc5Wlo2WScsXG4gICAgcHJpY2U6IDEuMjUsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3p1dGFuby5qcGcnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnVGhlIFp1dGFubyBhdm9jYWRvIGlzIGEgY29sZCBoYXJkeSwgY29uc2lzdGVudCBwcm9kdWNpbmcgYXZvY2FkbyB2YXJpZXR5LiBJdCByZXNlbWJsZXMgdGhlIEZ1ZXJ0ZSBpbiBhcHBlYXJhbmNlIGJ1dCBpcyBsZXNzIGZsYXZvcmZ1bCBidXQgbW9yZSBjb2xkIGhhcmR5LiBUaGUgZ3JlZW4gZnJ1aXRzIGFyZSBvYm92YXRlIGluIHNoYXBlIHdpdGggd2F4eSBidW1wcyBvbiB0aGUgc2tpbi4gVGhlIGZsZXNoIGhhcyBhIGxvdyBvaWwgYnV0IGhpZ2ggd2F0ZXIgY29udGVudCB3aGljaCBjYXVzZXMgaXQgdG8gaGF2ZSBhIG1vcmUgZmlicm91cyB0ZXh0dXJlLicsXG4gICAgICBzaGFwZTogJ1BlYXInLFxuICAgICAgaGFyZGluZXNzOiAnLTUgwrBDJyxcbiAgICAgIHRhc3RlOiAnU3BsZW5kaWQsIGlzIGFuIGF2b2NhZG8nLFxuICAgIH0sXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGFcbiIsIi8vIE9oIHlvdSBjdXJpb3VzLi4uXG4vLyBUaGlzIGlzIG5vdCBhIHJlYWwgZGF0YWJhc2UsXG4vLyBCdXQgbGV0J3MgaW1hZ2luZSBpdCBpcyBvbmUgOilcbmltcG9ydCBhbGxEYXRhIGZyb20gJy4vZGF0YSdcblxuY2xhc3MgRGF0YWJhc2Uge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgYXN5bmMgZ2V0QWxsKCk6IFByb21pc2U8VFByb2R1Y3RbXT4ge1xuICAgIGNvbnN0IGFzQXJyYXkgPSBPYmplY3QudmFsdWVzKGFsbERhdGEpXG4gICAgYXdhaXQgcmFuZG9tRGVsYXkoKVxuICAgIHJldHVybiBhc0FycmF5XG4gIH1cblxuICBhc3luYyBnZXRCeUlkKGlkOiBzdHJpbmcpOiBQcm9taXNlPFRQcm9kdWN0IHwgbnVsbD4ge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFsbERhdGEsIGlkKSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCBlbnRyeSA9IGFsbERhdGFbaWRdXG4gICAgYXdhaXQgcmFuZG9tRGVsYXkoKVxuICAgIHJldHVybiBlbnRyeVxuICB9XG59XG5cbi8vIExldCdzIGFsc28gYWRkIGEgZGVsYXkgdG8gbWFrZSBpdCBhIGJpdCBjbG9zZXIgdG8gcmVhbGl0eVxuY29uc3QgcmFuZG9tRGVsYXkgPSAoKSA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IG1heCA9IDM1MFxuICAgIGNvbnN0IG1pbiA9IDEwMFxuICAgIGNvbnN0IGRlbGF5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxuXG4gICAgc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSlcbiAgfSlcblxuZXhwb3J0IGRlZmF1bHQgRGF0YWJhc2VcbiIsImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgREIgZnJvbSAnQGRhdGFiYXNlJ1xyXG5cclxuY29uc3QgZ2V0QXZvQnlJZCA9IGFzeW5jIChcclxuICByZXF1ZXN0OiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXNwb25zZTogTmV4dEFwaVJlc3BvbnNlXHJcbikgPT4ge1xyXG4gIGNvbnN0IGRiID0gbmV3IERCKClcclxuXHJcbiAgY29uc3QgaWQgPSByZXF1ZXN0LnF1ZXJ5LmlkXHJcblxyXG4gIGNvbnN0IGVudHJ5ID0gYXdhaXQgZGIuZ2V0QnlJZChpZCBhcyBzdHJpbmcpXHJcbiAgcmVzcG9uc2Uuc3RhdHVzQ29kZSA9IDIwMFxyXG4gIHJlc3BvbnNlLnNldEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKVxyXG4gIHJlc3BvbnNlLmVuZChKU09OLnN0cmluZ2lmeSh7IGRhdGE6IGVudHJ5IH0pKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhbGxBdm9zXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=