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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "client", function() { return client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8oxP");
/* harmony import */ var _lib_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Oyez");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oz4i");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("TG1l");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("W+0S");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const httplink = new apollo_link_http__WEBPACK_IMPORTED_MODULE_5__["HttpLink"]({
  uri: "http://localhost:4000/api",
  credentials: "include"
});
const client = new apollo_client__WEBPACK_IMPORTED_MODULE_2___default.a({
  link: httplink,
  cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__["InMemoryCache"](),
  fetch: (isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6___default())
});
function MyApp({
  Component,
  pageProps
}) {
  return __jsx(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["ApolloProvider"], {
    client: client
  }, __jsx(Component, pageProps));
}

/***/ }),

/***/ "8oxP":
/***/ (function(module, exports) {



/***/ }),

/***/ "Oyez":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "TG1l":
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "W+0S":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "oz4i":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ })

/******/ });