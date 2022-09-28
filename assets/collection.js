/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/components/collection/components.js":
/*!*****************************************************!*\
  !*** ./scripts/components/collection/components.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ \"./scripts/components/collection/filter.js\");\n/* harmony import */ var _core_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/hero */ \"./scripts/components/core/hero.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  collectionFilter: _filter__WEBPACK_IMPORTED_MODULE_0__.default,\n  hero: _core_hero__WEBPACK_IMPORTED_MODULE_1__.default,\n});\n\n\n//# sourceURL=webpack://shopify-starter/./scripts/components/collection/components.js?");

/***/ }),

/***/ "./scripts/components/collection/filter.js":
/*!*************************************************!*\
  !*** ./scripts/components/collection/filter.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst debounce = (func, timeout = 300) => {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => {\n      func.apply(undefined, args);\n    }, timeout);\n  };\n};\n\nconst fetchHtml = async url =>\n  fetch(url)\n    .then(response => response.text())\n    .then(responseText => new DOMParser().parseFromString(responseText, 'text/html'));\n\nconst updateURLHash = searchParams =>\n  // eslint-disable-next-line no-restricted-globals\n  history.pushState(\n    { searchParams },\n    '',\n    `${window.location.pathname}${\n      searchParams.includes('?') ? searchParams : '?'.concat(searchParams)\n    }`\n  );\n\nconst fetchFilterSection = async (searchParams, section) => {\n  window.app.emit(['filter:loading']);\n\n  const filterHtmlRender = await fetchHtml(\n    `${window.location.origin + window.location.pathname}?section_id=${\n      section.name\n    }&${searchParams}`\n  );\n\n  window.app.emit(['filter:render'], { html: filterHtmlRender, uri: searchParams });\n};\n\nconst handleFilterEvent = (event, section) => {\n  event.preventDefault();\n  const formFilters = new URLSearchParams(new FormData(event.target.closest('form'))).toString();\n  fetchFilterSection(formFilters, section);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (window.component((node, ctx) => {\n  const el = node;\n\n  const section = {\n    name: 'main-collection',\n    grid: '[data-product-grid]',\n    loading: '[data-filter-loading]',\n    controls: '[data-filter-controls]',\n    selectedFilters: '[data-fiter-selected]',\n  };\n\n  el.querySelector(section.controls).addEventListener(\n    'input',\n    debounce(e => handleFilterEvent(e, section))\n  );\n\n  const setLoading = state => {\n    el.querySelector(section.loading).style.opacity = state ? 1 : 0;\n  };\n\n  ctx.on('filter:render', ({ html, uri }) => {\n    el.querySelector(section.grid).innerHTML = html.querySelector(section.grid).innerHTML;\n    el.querySelector(section.controls).innerHTML = html.querySelector(section.controls).innerHTML;\n    el.querySelector(section.selectedFilters).innerHTML = html.querySelector(\n      section.selectedFilters\n    ).innerHTML;\n\n    updateURLHash(uri);\n    window.app.mount();\n    window.app.emit(['filter:loaded']);\n  });\n\n  ctx.on('filter:loading', () => setLoading(true));\n\n  ctx.on('filter:loaded', () => setLoading(false));\n}));\n\n\n//# sourceURL=webpack://shopify-starter/./scripts/components/collection/filter.js?");

/***/ }),

/***/ "./scripts/components/core/hero.js":
/*!*****************************************!*\
  !*** ./scripts/components/core/hero.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_choozy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/choozy */ \"./scripts/lib/choozy.js\");\n/* harmony import */ var _lib_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/string */ \"./scripts/lib/string.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (window.component(node => {\n  const { button } = (0,_lib_choozy__WEBPACK_IMPORTED_MODULE_0__.default)(node, null);\n  // const info = button.getAttribute('data-info');\n  // const { info } = button.dataset;\n  const addToCart = (0,_lib_string__WEBPACK_IMPORTED_MODULE_1__.getString)('product.add_to_cart');\n  const quantity = (0,_lib_string__WEBPACK_IMPORTED_MODULE_1__.getString)('cart.quantity');\n  let count = 0;\n\n  button.addEventListener('click', () => {\n    count++;\n    button.innerHTML = `I'm tapped ${count} times`;\n    console.log(addToCart, quantity);\n  });\n}));\n\n\n//# sourceURL=webpack://shopify-starter/./scripts/components/core/hero.js?");

/***/ }),

/***/ "./scripts/lib/choozy.js":
/*!*******************************!*\
  !*** ./scripts/lib/choozy.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable */\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(container = document.body, prefix = 'js-') {\n  const elements = [...container.querySelectorAll(!prefix ? '*' : `[class*=\"${prefix}\"]`)];\n  const property = !prefix ? 'dataset' : 'classList';\n  return elements.reduce((res, el) => {\n    [].slice.call(!prefix ? Object.entries(el[property]) : el[property]).forEach(property => {\n      let key;\n      if (prefix && property.slice(0, prefix.length) === prefix)\n        key = property.slice(prefix.length, property.length);\n      else if (!prefix) [key] = property;\n      if (key) {\n        res[key] = res.hasOwnProperty(key)\n          ? res[key].constructor === Array\n            ? res[key].concat(el)\n            : [res[key], el]\n          : el;\n      }\n    });\n    return res;\n  }, {});\n}\n\n\n//# sourceURL=webpack://shopify-starter/./scripts/lib/choozy.js?");

/***/ }),

/***/ "./scripts/lib/string.js":
/*!*******************************!*\
  !*** ./scripts/lib/string.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toCamelCase\": () => (/* binding */ toCamelCase),\n/* harmony export */   \"getCamelCase\": () => (/* binding */ getCamelCase),\n/* harmony export */   \"getString\": () => (/* binding */ getString)\n/* harmony export */ });\nconst toCamelCase = function camalize(str) {\n  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());\n};\n\nconst getCamelCase = obj => {\n  return Object.entries(obj).reduce((o, [key, value]) => {\n    const object = o;\n    object[toCamelCase(key)] = value;\n    return object;\n  }, {});\n};\n\nconst getString = string => {\n  /**\n   * Get string from window.Phill.theme.strings\n   * @param {String} string seperate keys, by . just like in liquid\n   */\n\n  return (\n    string.split('.').reduce((obj, str) => obj?.[str], window?.Phill?.theme?.strings) ||\n    `Missing translation for ${string} in window.Phill`\n  );\n};\n\n\n//# sourceURL=webpack://shopify-starter/./scripts/lib/string.js?");

/***/ }),

/***/ "./scripts/util/collection.js":
/*!************************************!*\
  !*** ./scripts/util/collection.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_collection_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/collection/components */ \"./scripts/components/collection/components.js\");\n\n\nwindow.app.add(_components_collection_components__WEBPACK_IMPORTED_MODULE_0__.default);\nwindow.app.mount();\n\n\n//# sourceURL=webpack://shopify-starter/./scripts/util/collection.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/util/collection.js");
/******/ 	
/******/ })()
;