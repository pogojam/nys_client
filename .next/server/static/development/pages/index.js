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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/animations/css.js":
/*!*******************************!*\
  !*** ./lib/animations/css.js ***!
  \*******************************/
/*! exports provided: rotate, fadeIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const rotate = (pos1, pos2) => Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{transform:rotate(0deg) translate(", "%,", "%);}to{transform:rotate(360deg) translate(", "%,", "%);}"], pos1[0], pos1[1], pos2[0], pos2[1]);
const fadeIn = () => Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{opacity:0;}to{opacity:1}"]);

/***/ }),

/***/ "./lib/animations/spring.js":
/*!**********************************!*\
  !*** ./lib/animations/spring.js ***!
  \**********************************/
/*! exports provided: slideInRight, slideInDown, slideInLeft, slideInBottom, fadeIn, FadeIn_Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInRight", function() { return slideInRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInDown", function() { return slideInDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInLeft", function() { return slideInLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInBottom", function() { return slideInBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FadeIn_Wrapper", function() { return FadeIn_Wrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _interface___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interface/ */ "./lib/interface/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./lib/util.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/ryanbreaux/Projects/Web/Clients/nps_v2/lib/animations/spring.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




 // React Spring Animations

const slideInRight = state => ({
  transform: `translateX(${state ? 0 : -100}%)`
});
const slideInDown = state => ({
  transform: `translateY(${state ? 0 : -100}%)`
});
const slideInLeft = state => ({
  transform: `translateX(${state ? 0 : 100}%)`
});
const slideInBottom = state => ({
  transform: `translateY(${state ? 0 : 100}%)`
});
const fadeIn = state => ({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
}); // Wrappers

const FadeIn_Wrapper = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  const [ref, entries] = Object(_interface___WEBPACK_IMPORTED_MODULE_1__["useObserver"])({
    threshold: Object(_util__WEBPACK_IMPORTED_MODULE_2__["buildThresholdList"])(40)
  });
  const [animation, setAnimation] = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["useSpring"])(() => ({
    opacity: [0]
  }));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (entries.isIntersecting) {
      const ir = entries.intersectionRatio;
      const opacity = ir;
      setAnimation({
        opacity: [opacity]
      });
    }
  });
  return __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].div, _extends({}, props, {
    style: _objectSpread({}, animation, {
      willChange: "opacity"
    }),
    ref: ref,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }), children);
};

/***/ }),

/***/ "./lib/blocks/Card.js":
/*!****************************!*\
  !*** ./lib/blocks/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_Index_Styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/Index_Styles */ "./lib/blocks/home/Index_Styles.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ "./lib/components/index.js");
var _jsxFileName = "/Users/ryanbreaux/Projects/Web/Clients/nps_v2/lib/blocks/Card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Card = (_ref) => {
  let {
    background,
    button,
    title,
    caption,
    img: Img
  } = _ref,
      props = _objectWithoutProperties(_ref, ["background", "button", "title", "caption", "img"]);

  return __jsx(_home_Index_Styles__WEBPACK_IMPORTED_MODULE_1__["Index_Card_Styles"], _extends({
    background: background,
    className: "Card"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }), Img ? __jsx(Img, {
    className: "Card_Img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 12
    }
  }) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 43
    }
  }), __jsx("div", {
    className: "Card_SubContainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, title && __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
    className: "Heading",
    type: "Big",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, title), button && button, caption && __jsx("p", {
    className: "Caption",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 19
    }
  }, caption)));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"])(Card));

/***/ }),

/***/ "./lib/blocks/Nav.js":
/*!***************************!*\
  !*** ./lib/blocks/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ "./lib/components/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util */ "./lib/util.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme */ "./lib/theme.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/ryanbreaux/Projects/Web/Clients/nps_v2/lib/blocks/Nav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const {
  Container: Generic_Container
} = _components__WEBPACK_IMPORTED_MODULE_3__["Layout"];
const Nav_Button = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"])(props => Object(_components__WEBPACK_IMPORTED_MODULE_3__["Button"])(_objectSpread({
  type: "Nav"
}, props)));
const Nav_Button_Tiny = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"])(props => Object(_components__WEBPACK_IMPORTED_MODULE_3__["Button"])(_objectSpread({
  type: "Tiny"
}, props)));
const Container = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"])(styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Nav__Container",
  componentId: "sc-58li5f-0"
})(["position:", ";will-change:transform;left:0;top:0;width:100%;z-index:99;backdrop-filter:blur(6px);background-color:#00000052;.Nav_SubContainer{position:relative;margin-right:2em;display:flex;padding-bottom:5px;}.Nav_SubContainer_Alt_Buttons{transform:translateY(5px);& > *{margin-left:0.5em;margin-right:0.5em;}margin-left:auto;display:flex;align-items:center;}"], ({
  fixed
}) => fixed ? "fixed" : "relative"));

function Nav({
  fixed,
  show,
  dispatch,
  isLoggedIn,
  setForm
}) {
  const {
    y
  } = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    y: show ? "translateY(0%)" : "translateY(-100%)"
  });
  const o = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useTrail"])(6, {
    opacity: show ? 1 : 0
  });

  const handleCLick = (type, form) => {
    setForm(form);
    dispatch({
      type
    });
  };

  return __jsx(Container, {
    fixed: fixed,
    style: {
      transform: y
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, __jsx(Generic_Container, {
    className: "Nav_SubContainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx(Nav_Button, {
    style: _objectSpread({}, o[0], {
      marginLeft: 0,
      willChange: "opacity"
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "Sports"), __jsx(Nav_Button, {
    style: _objectSpread({}, o[1], {
      willChange: "opacity"
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, " ", "Roster"), __jsx(Nav_Button, {
    style: _objectSpread({}, o[2], {
      willChange: "opacity"
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, "Contact"), __jsx("div", {
    className: "Nav_SubContainer_Alt_Buttons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx(Nav_Button_Tiny, {
    onClick: () => handleCLick("SHOW_MODAL", "User_Registration_Form"),
    style: o[3],
    type: "Tiny",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, "Register"), __jsx(Nav_Button_Tiny, {
    onClick: () => isLoggedIn ? Object(_util__WEBPACK_IMPORTED_MODULE_4__["locateTo"])("/Dash") : handleCLick("SHOW_MODAL", "Login_Form"),
    style: o[4],
    type: "Tiny",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, isLoggedIn ? "Dash" : "Login"), isLoggedIn && __jsx(Nav_Button_Tiny, {
    onClick: () => Object(_util__WEBPACK_IMPORTED_MODULE_4__["locateTo"])("http://localhost:4000" + "/auth/logout"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, "Logout"), __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaFacebook"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, "content"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./lib/blocks/home/Index_Styles.js":
/*!*****************************************!*\
  !*** ./lib/blocks/home/Index_Styles.js ***!
  \*****************************************/
/*! exports provided: Index_Card_Styles, Container_1_Styles, Container_2_Styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index_Card_Styles", function() { return Index_Card_Styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container_1_Styles", function() { return Container_1_Styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container_2_Styles", function() { return Container_2_Styles; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_style_templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/style_templates */ "./lib/components/style_templates.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme */ "./lib/theme.js");
/* harmony import */ var _animations_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animations/css */ "./lib/animations/css.js");




const styles = _theme__WEBPACK_IMPORTED_MODULE_2__["default"].cards;
const Index_Card_Styles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Index_Styles__Index_Card_Styles",
  componentId: "sc-9oagiu-0"
})(["position:relative;background:url(", ");background-position:center;background-repeat:no-repeat;height:80vh;margin-top:84px;background-size:cover;z-index:1;.Card_SubContainer{padding:2em;position:absolute;bottom:0;left:0;}p{font-family:\"Work Sans\",sans-serif;}svg{min-height:15rem;height:40vh;height:100%;}.Card_Img{height:100%;}.Caption{}.Heading{}", ""], ({
  background
}) => background, Object(_components_style_templates__WEBPACK_IMPORTED_MODULE_1__["default"])(styles.cards));
const Container_1_Styles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Index_Styles__Container_1_Styles",
  componentId: "sc-9oagiu-1"
})(["height:100vh;overflow:hidden;position:relative;.Splash_Image{background-repeat:no-repeat;background-position:center top;background-size:cover;background-image:url(\"https://res.cloudinary.com/dxjse9tsv/image/upload/v1586905934/NationalYouthSports/woman-in-teal-jersey-1198166.jpg\");will-change:opacity;overflow:hidden;width:100%;height:100%;position:relative;top:0%;left:0%;z-index:-1;animation:", " 1s cubic-bezier(0.075,0.82,0.165,1);&::before{content:\"\";height:100%;left:0;position:fixed;top:0;width:100%;will-change:transform;}}.Splash_Logo{position:absolute;right:48px;top:48px;}.Splash_Nav_Container{position:absolute;bottom:48px;left:48px;max-width:500px;width:100%;color:black;button{color:black;border-color:black;}.Splash_Nav_Container_SubContainer{position:relative;padding:20px;}}"], _animations_css__WEBPACK_IMPORTED_MODULE_3__["fadeIn"]);
const Container_2_Styles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Index_Styles__Container_2_Styles",
  componentId: "sc-9oagiu-2"
})(["display:flex;align-items:center;height:100%;.Heading_Container{position:absolute;top:0;left:0;height:100%;z-index:12;.Heading_Container_Headings{position:sticky;top:70vh;margin-top:100vh;white-space:pre-line;align-self:self-start;z-index:1;& > *{margin-bottom:-45px;}}}.Card_Background_Container{width:100%;}.Cards_Wrapper,.Double{display:flex;& > *{flex-basis:50%;}div:nth-child(1){margin-right:20px;}div:nth-child(2){margin-left:20px;}}.Background_Container{display:none;position:absolute;top:0;left:0;height:100%;width:100%;z-index:0;}.Background_Sub_Container{position:relative;height:100%;width:100%;overflow:hidden;}"]);

/***/ }),

/***/ "./lib/blocks/index.js":
/*!*****************************!*\
  !*** ./lib/blocks/index.js ***!
  \*****************************/
/*! exports provided: Card, Nav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.js */ "./lib/blocks/Card.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _Card_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav.js */ "./lib/blocks/Nav.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return _Nav_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

// @create-index



/***/ }),

/***/ "./lib/components/Button.js":
/*!**********************************!*\
  !*** ./lib/components/Button.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme */ "./lib/theme.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./lib/util.js");
/* harmony import */ var _style_templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style_templates */ "./lib/components/style_templates.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const {
  buttons: styles
} = _theme__WEBPACK_IMPORTED_MODULE_1__["default"];

const Button = (_ref) => {
  let {
    type
  } = _ref,
      props = _objectWithoutProperties(_ref, ["type"]);

  switch (type) {
    case "Big":
      return Object(_util__WEBPACK_IMPORTED_MODULE_2__["withProps"])(Big, props);
      break;

    case "Small":
      return Object(_util__WEBPACK_IMPORTED_MODULE_2__["withProps"])(Small, props);
      break;

    case "Tiny":
      return Object(_util__WEBPACK_IMPORTED_MODULE_2__["withProps"])(Tiny, props);
      break;

    case "Nav":
      return Object(_util__WEBPACK_IMPORTED_MODULE_2__["withProps"])(Nav, props);
      break;

    default:
      return Object(_util__WEBPACK_IMPORTED_MODULE_2__["withProps"])(Base, props);
  }
};

const Base = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "Button__Base",
  componentId: "cvrf7p-0"
})(["&:focus{outline:none;}", ""], Object(_style_templates__WEBPACK_IMPORTED_MODULE_3__["default"])(styles));
const Small = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Base).withConfig({
  displayName: "Button__Small",
  componentId: "cvrf7p-1"
})(["transition:background-color 0.6s linear;&:hover{background-color:#3d4ae61a;}", ""], Object(_style_templates__WEBPACK_IMPORTED_MODULE_3__["default"])(styles.small));
const Tiny = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Base).withConfig({
  displayName: "Button__Tiny",
  componentId: "cvrf7p-2"
})(["", ""], Object(_style_templates__WEBPACK_IMPORTED_MODULE_3__["default"])(styles.tiny));
const Big = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Base).withConfig({
  displayName: "Button__Big",
  componentId: "cvrf7p-3"
})(["", ""], Object(_style_templates__WEBPACK_IMPORTED_MODULE_3__["default"])(styles.big));
const Nav = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Base).withConfig({
  displayName: "Button__Nav",
  componentId: "cvrf7p-4"
})(["position:relative;", " letter-spacing:6px;transition:all 0.6s cubic-bezier(0.075,0.82,0.165,1);&:after{content:\"\";position:absolute;bottom:-3px;left:0;height:1px;opacity:0;width:100%;background-color:white;transition:opacity 0.6s cubic-bezier(0.075,0.82,0.165,1);}&:focus{outline:none;}&:hover{&:after{opacity:1;}}"], Object(_style_templates__WEBPACK_IMPORTED_MODULE_3__["default"])(styles.nav));
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./lib/components/Heading.js":
/*!***********************************!*\
  !*** ./lib/components/Heading.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme */ "./lib/theme.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./lib/util.js");
/* harmony import */ var _style_templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style_templates */ "./lib/components/style_templates.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const {
  headings: styles
} = _theme__WEBPACK_IMPORTED_MODULE_1__["default"];

const Heading = (_ref) => {
  let {
    type
  } = _ref,
      props = _objectWithoutProperties(_ref, ["type"]);

  switch (type) {
    case "Small":
      return Object(_util__WEBPACK_IMPORTED_MODULE_2__["withProps"])(Object(_util__WEBPACK_IMPORTED_MODULE_2__["changeTo"])(Small, "h3"), props);

    case "Sub":
      return Object(_util__WEBPACK_IMPORTED_MODULE_2__["withProps"])(Object(_util__WEBPACK_IMPORTED_MODULE_2__["changeTo"])(Sub, "h2"), props);
      break;

    case "Big":
      return Object(_util__WEBPACK_IMPORTED_MODULE_2__["withProps"])(Object(_util__WEBPACK_IMPORTED_MODULE_2__["changeTo"])(Big, "h1"), props);
      break;

    default:
      return Object(_util__WEBPACK_IMPORTED_MODULE_2__["withProps"])(Standard, props);
  }
};

const Base = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "Heading__Base",
  componentId: "sc-1iozxal-0"
})(["", ""], Object(_style_templates__WEBPACK_IMPORTED_MODULE_3__["default"])(styles));
const Sub = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Base).withConfig({
  displayName: "Heading__Sub",
  componentId: "sc-1iozxal-1"
})(["", ""], Object(_style_templates__WEBPACK_IMPORTED_MODULE_3__["default"])(styles.sub));
const Small = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Base).withConfig({
  displayName: "Heading__Small",
  componentId: "sc-1iozxal-2"
})(["", ""], Object(_style_templates__WEBPACK_IMPORTED_MODULE_3__["default"])(styles.small));
const Big = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Base).withConfig({
  displayName: "Heading__Big",
  componentId: "sc-1iozxal-3"
})(["", ""], Object(_style_templates__WEBPACK_IMPORTED_MODULE_3__["default"])(styles.big));
const Standard = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Base).withConfig({
  displayName: "Heading__Standard",
  componentId: "sc-1iozxal-4"
})([""]);
/* harmony default export */ __webpack_exports__["default"] = (Heading);

/***/ }),

/***/ "./lib/components/Icon.js":
/*!********************************!*\
  !*** ./lib/components/Icon.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_Soccer_Ball_Background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/Soccer_Ball_Background */ "./lib/static/Soccer_Ball_Background.js");
/* harmony import */ var _static_shirt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/shirt */ "./lib/static/shirt.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "./lib/util.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/ryanbreaux/Projects/Web/Clients/nps_v2/lib/components/Icon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const MessageNotification = ({
  messages
}) => {
  const Container = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
    displayName: "Icon__Container",
    componentId: "alsrz-0"
  })(["position:relative;.Message_Number{color:black;position:absolute;top:55%;right:-100%;transform:translate(-50%,-50%);font-size:0.9em;font-family:\"Poiret One\",cursive;font-weight:900;margin:0;}"]);
  return __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "Message_Number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, messages > 0 ? messages : ""), __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiMessageCircle"], {
    fill: messages > 0 ? "red" : "inherit",
    color: messages > 0 ? "red" : "inherit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }));
};

const Shirt = ({
  size
}) => {
  const Container = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
    displayName: "Icon__Container",
    componentId: "alsrz-1"
  })(["position:relative;width:48px;height:40px;.Shirt_Size{position:absolute;top:0;left:0;transform:translate(20px,0px);}"]);
  return __jsx(Container, {
    className: "Shirt_Icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx(_static_shirt__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }), __jsx("p", {
    className: "Shirt_Size",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, size));
};

const Icon = (_ref) => {
  let {
    type
  } = _ref,
      props = _objectWithoutProperties(_ref, ["type"]);

  switch (type) {
    case "soccer":
      return __jsx(_static_Soccer_Ball_Background__WEBPACK_IMPORTED_MODULE_1__["default"], {
        style: {
          height: "10px",
          width: "10px",
          opacity: 1
        },
        color: "black",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 9
        }
      });
      break;

    case "mail":
      return Object(_util__WEBPACK_IMPORTED_MODULE_3__["withProps"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiMail"], props);
      break;

    case "message":
      return Object(_util__WEBPACK_IMPORTED_MODULE_3__["withProps"])(MessageNotification, props);
      break;

    case "card":
      return Object(_util__WEBPACK_IMPORTED_MODULE_3__["withProps"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiCreditCard"], props);
      break;

    case "calendar":
      return Object(_util__WEBPACK_IMPORTED_MODULE_3__["withProps"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiCalendar"], props);
      break;

    case "arrow_right":
      return Object(_util__WEBPACK_IMPORTED_MODULE_3__["withProps"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiChevronRight"], props);
      break;

    case "arrow_down":
      return Object(_util__WEBPACK_IMPORTED_MODULE_3__["withProps"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiChevronDown"], props);
      break;

    case "phone":
      return Object(_util__WEBPACK_IMPORTED_MODULE_3__["withProps"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiPhone"], props);
      break;

    case "clock":
      return Object(_util__WEBPACK_IMPORTED_MODULE_3__["withProps"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiClock"], props);
      break;

    case "shirt":
      return Object(_util__WEBPACK_IMPORTED_MODULE_3__["withProps"])(Shirt, props);
      break;

    case "plus":
      return Object(_util__WEBPACK_IMPORTED_MODULE_3__["withProps"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiPlus"], props);
      break;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./lib/components/Layout.js":
/*!**********************************!*\
  !*** ./lib/components/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Body = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Layout__Body",
  componentId: "sc-1bj2m1g-0"
})(["max-width:100vw;height:100%;"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Layout__Wrapper",
  componentId: "sc-1bj2m1g-1"
})(["width:100%;height:100%;"]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Wrapper).withConfig({
  displayName: "Layout__Container",
  componentId: "sc-1bj2m1g-2"
})(["padding-left:48px;padding-right:48px;"]);
const Viewport_Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Container).withConfig({
  displayName: "Layout__Viewport_Container",
  componentId: "sc-1bj2m1g-3"
})(["height:100vh;position:relative;"]);
const Layout = {
  Body,
  Container,
  Wrapper,
  Viewport_Container
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./lib/components/Line.js":
/*!********************************!*\
  !*** ./lib/components/Line.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./lib/util.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Line = (_ref) => {
  let {
    type
  } = _ref,
      props = _objectWithoutProperties(_ref, ["type"]);

  switch (type) {
    case "Vertical":
      return Object(_util__WEBPACK_IMPORTED_MODULE_1__["withProps"])(Vertical, props);
      break;

    case "Horizontal":
      return Object(_util__WEBPACK_IMPORTED_MODULE_1__["withProps"])(Horizontal, props);
      break;

    default:
      return Object(_util__WEBPACK_IMPORTED_MODULE_1__["withProps"])(Vertical, props);
  }
};

const Horizontal = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Line__Horizontal",
  componentId: "sc-1vtk6gn-0"
})(["height:1px;background:black;width:60px;"]);
const Vertical = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Line__Vertical",
  componentId: "sc-1vtk6gn-1"
})(["width:1px;background:black;height:100%;"]);
/* harmony default export */ __webpack_exports__["default"] = (Line);

/***/ }),

/***/ "./lib/components/Modal.js":
/*!*********************************!*\
  !*** ./lib/components/Modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ */ "./lib/components/index.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ "./lib/theme.js");
/* harmony import */ var _style_templates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style_templates */ "./lib/components/style_templates.js");
/* harmony import */ var _animations_spring__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../animations/spring */ "./lib/animations/spring.js");
var _jsxFileName = "/Users/ryanbreaux/Projects/Web/Clients/nps_v2/lib/components/Modal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const {
  Wrapper
} = ___WEBPACK_IMPORTED_MODULE_3__["Layout"];
const styles = _theme__WEBPACK_IMPORTED_MODULE_4__["default"].modal;
const Base = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Modal__Base",
  componentId: "p8ri5u-0"
})(["", ""], Object(_style_templates__WEBPACK_IMPORTED_MODULE_5__["default"])(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].modal));
const Model_Left = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Wrapper).withConfig({
  displayName: "Modal__Model_Left",
  componentId: "p8ri5u-1"
})(["width:20vw;position:absolute;left:0;top:0;"]);
const Model_Center = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Base).withConfig({
  displayName: "Modal__Model_Center",
  componentId: "p8ri5u-2"
})(["top:50%;left:50%;transform:translate(-50%,-50%);position:fixed;z-index:9999;"]);
const Model_Right = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Base).withConfig({
  displayName: "Modal__Model_Right",
  componentId: "p8ri5u-3"
})(["height:100%;width:30vw;"]);
const Model_Bottom = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Base).withConfig({
  displayName: "Modal__Model_Bottom",
  componentId: "p8ri5u-4"
})(["height:100%;width:30vw;"]);
const Model_Top = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Base).withConfig({
  displayName: "Modal__Model_Top",
  componentId: "p8ri5u-5"
})(["height:100%;width:30vw;"]);
const Backdrop = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"])(styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Modal__Backdrop",
  componentId: "p8ri5u-6"
})(["", " z-index:20;position:fixed;opacity:0.4;top:0;width:100%;height:100%;backdrop-filter:blur(3px);"], Object(_style_templates__WEBPACK_IMPORTED_MODULE_5__["default"])(styles.backdrop)));
const Types = {
  top: {
    Container: Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"])(Model_Top)
  },
  bottom: {
    Container: Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"])(Model_Bottom)
  },
  right: {
    Container: Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"])(Model_Right)
  },
  left: {
    Container: Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"])(Model_Left),
    Animation: _animations_spring__WEBPACK_IMPORTED_MODULE_6__["slideInRight"]
  },
  center: {
    Container: Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"])(Model_Center),
    Animation: _animations_spring__WEBPACK_IMPORTED_MODULE_6__["fadeIn"]
  }
};

const Modal = (_ref) => {
  let {
    type = "center",
    hideModal,
    show,
    backdrop = false,
    bgStyles = {},
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["type", "hideModal", "show", "backdrop", "bgStyles", "children"]);

  const Container = Types[type].Container;
  const setAnim = Types[type].Animation;
  const Modal_Animation = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])(setAnim(show));
  const Backdrop_Animation = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])(Object(_animations_spring__WEBPACK_IMPORTED_MODULE_6__["fadeIn"])(show));
  console.log(backdrop, hideModal);

  if (!hideModal) {
    console.error("No {props:hideModal} function given to Modal");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(Container, _extends({
    show: show,
    style: Modal_Animation
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }), children), backdrop && __jsx(Backdrop, {
    show: show,
    style: _objectSpread({}, Backdrop_Animation, {}, bgStyles),
    onClick: hideModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./lib/components/index.js":
/*!*********************************!*\
  !*** ./lib/components/index.js ***!
  \*********************************/
/*! exports provided: Button, Heading, Icon, Layout, Line, Modal, style_templates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.js */ "./lib/components/Button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Heading_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Heading.js */ "./lib/components/Heading.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return _Heading_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Icon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon.js */ "./lib/components/Icon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _Icon_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Layout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout.js */ "./lib/components/Layout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _Layout_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Line_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Line.js */ "./lib/components/Line.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return _Line_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modal.js */ "./lib/components/Modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _Modal_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _style_templates_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style_templates.js */ "./lib/components/style_templates.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "style_templates", function() { return _style_templates_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

// @create-index








/***/ }),

/***/ "./lib/components/style_templates.js":
/*!*******************************************!*\
  !*** ./lib/components/style_templates.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const templates = {
  ff: "font-family",
  fs: "font-size",
  px: ["padding-right", "padding-left"],
  py: ["padding-top", "padding-bottom"],
  my: ["margin-top", "margin-bottom"],
  mx: ["margin-left", "margin-right"],
  fw: "font-weight",
  bc: "background-color",
  bdc: "border-color",
  bdr: "border-radius",
  c: "color"
};

const dumpStyles = theme => {
  if (!theme) {
    console.error("Please pass in a theme to dump styles");
    return;
  }

  const themeKeys = Object.keys(theme);
  const dump = themeKeys.reduce((acc, themeKey, i) => {
    const templateKeys = Object.keys(templates);
    const templateVal = templates[themeKey];
    if (!templateKeys.includes(themeKey)) return acc;

    if (typeof templateVal === "object") {
      return acc = acc + templateVal[0] + ":" + theme[themeKey] + `;` + templateVal[1] + ":" + theme[themeKey] + `;`;
    } else {
      return acc = acc + templateVal + ":" + theme[themeKey] + `;`;
    }
  }, "");
  return dump;
};

/* harmony default export */ __webpack_exports__["default"] = (dumpStyles);

/***/ }),

/***/ "./lib/forms/Form_Styles.js":
/*!**********************************!*\
  !*** ./lib/forms/Form_Styles.js ***!
  \**********************************/
/*! exports provided: User_Registration_Styles, Login_Styles, User_Billing_Styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User_Registration_Styles", function() { return User_Registration_Styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login_Styles", function() { return Login_Styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User_Billing_Styles", function() { return User_Billing_Styles; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_style_templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/style_templates */ "./lib/components/style_templates.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ "./lib/theme.js");



const styles = _theme__WEBPACK_IMPORTED_MODULE_2__["default"].form;
const Base_Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "Form_Styles__Base_Container",
  componentId: "sc-1xzpy0x-0"
})(["", " display:flex;width:100%;height:100%;flex-direction:column;.Form_Icon{", "}.Form_SubContainer{margin:0;border:2px solid;", " & > *{", " & > *{margin:0;margin-left:1em;margin-right:1em;}}input{", " margin-bottom:1em;color:white;}.Input_Short{max-width:20px;}label{margin-right:0.5em;margin-left:0.5em;}}"], Object(_components_style_templates__WEBPACK_IMPORTED_MODULE_1__["default"])(styles), Object(_components_style_templates__WEBPACK_IMPORTED_MODULE_1__["default"])(styles.icons), Object(_components_style_templates__WEBPACK_IMPORTED_MODULE_1__["default"])(styles.subcontainer), Object(_components_style_templates__WEBPACK_IMPORTED_MODULE_1__["default"])(styles.subcontainer.items), Object(_components_style_templates__WEBPACK_IMPORTED_MODULE_1__["default"])(styles.input));
const User_Registration_Styles = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Base_Container).withConfig({
  displayName: "Form_Styles__User_Registration_Styles",
  componentId: "sc-1xzpy0x-1"
})([".Form_SubContainer{margin:0;background-color:#1b1b1b;font-family:\"Work Sans\",sans-serif;@media (max-width:600px){.Form_Block{grid-template-columns:1fr 2fr;grid-template-rows:auto;}}}.Form_Block{font-size:0.8em;display:grid;grid-template-columns:1fr 2fr 1fr 2fr;}"]);
const Login_Styles = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Base_Container).withConfig({
  displayName: "Form_Styles__Login_Styles",
  componentId: "sc-1xzpy0x-2"
})([".Form_SubContainer{background-color:#1b1b1b;}input{margin:0;}.Form_Icon,.Form_Submit{margin-left:0;}.Form_Block{font-size:0.8em;display:grid;grid-template-rows:1fr 1fr;}"]);
const User_Billing_Styles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Form_Styles__User_Billing_Styles",
  componentId: "sc-1xzpy0x-3"
})(["max-height:40vh;max-width:50vh;.Form_SubContainer{background-color:none;}.Form_Block{font-size:0.8em;display:grid;grid-template-columns:1fr 2fr 1fr 2fr;grid-gap:10px;justify-content:center;align-items:center;}.Stripe_Card_Container{padding:4px;margin-top:7px;margin-bottom:7px;border-radius:3px;border:1px solid black;}button{margin-left:0;}"]);

/***/ }),

/***/ "./lib/forms/Forms.js":
/*!****************************!*\
  !*** ./lib/forms/Forms.js ***!
  \****************************/
/*! exports provided: Login_Form, User_Registration_Form, User_Billing_Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login_Form", function() { return Login_Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User_Registration_Form", function() { return User_Registration_Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User_Billing_Form", function() { return User_Billing_Form; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./lib/components/index.js");
/* harmony import */ var _Form_Styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Form_Styles */ "./lib/forms/Form_Styles.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_stripe_elements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-stripe-elements */ "react-stripe-elements");
/* harmony import */ var react_stripe_elements__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_stripe_elements__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/ryanbreaux/Projects/Web/Clients/nps_v2/lib/forms/Forms.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const handleLogin = data => {
  console.log(data);
};

const Login_Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"])();
  return __jsx(_Form_Styles__WEBPACK_IMPORTED_MODULE_3__["Login_Styles"], {
    style: {
      alignItems: "center",
      justifyContent: "center"
    },
    onSubmit: handleSubmit(handleLogin),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "Form_SubContainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "Form_Block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiUser"], {
    className: "Form_Icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }), __jsx("input", {
    type: "text",
    name: "UserName",
    className: "Login_Username",
    ref: register({
      required: true
    }),
    style: {
      width: "100%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "Form_Block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiLock"], {
    className: "Form_Icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }), __jsx("input", {
    type: "password",
    name: "Password",
    className: "Login_Password",
    ref: register({
      required: true
    }),
    style: {
      width: "100%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "Form_Block",
    style: {
      display: "flex",
      alignItems: "center"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "Form_Submit",
    type: "Small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, "Submit"), __jsx("a", {
    href: "http://localhost:4000/auth/facebook",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiFacebook"], {
    style: {
      marginLeft: "auto"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  })), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoLogoGoogle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }))));
};

const FirstLastName = () => __jsx("div", {
  className: "Form_Block",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 3
  }
}, __jsx("label", {
  htmlFor: "firstName",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }
}, "FirstName"), __jsx("input", {
  name: "firstName",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }
}), __jsx("label", {
  htmlFor: "LastName",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }
}, "LastName"), __jsx("input", {
  name: "lastName",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }
}));

const DOB = () => __jsx("div", {
  className: "Form_Block",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 3
  }
}, __jsx("label", {
  htmlFor: "dob",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 5
  }
}, "DOB"), __jsx("input", {
  type: "date",
  name: "dob",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 5
  }
}));

const Contact = () => __jsx("div", {
  className: "Form_Block",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 3
  }
}, __jsx("label", {
  htmlFor: "email",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 5
  }
}, "Email"), __jsx("input", {
  type: "text",
  name: "email",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }
}), __jsx("label", {
  htmlFor: "homePhone",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 5
  }
}, "Cell Phone"), __jsx("input", {
  type: "text",
  name: "homePhone",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 5
  }
}));

const Address = () => __jsx("div", {
  className: "Form_Block",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 3
  }
}, __jsx("label", {
  htmlFor: "address",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 5
  }
}, " Street"), __jsx("input", {
  type: "text",
  name: "address",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 5
  }
}), __jsx("label", {
  htmlFor: "unit",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 5
  }
}, " Unit"), __jsx("input", {
  className: "Input_Short",
  type: "text",
  name: "unit",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 5
  }
}));

const ZipState = () => __jsx("div", {
  className: "Form_Block",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 3
  }
}, __jsx("label", {
  htmlFor: "zip",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 5
  }
}, " Zip"), __jsx("input", {
  type: "text",
  name: "zip",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 5
  }
}), __jsx("label", {
  htmlFor: "state",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 5
  }
}, " State"), __jsx("input", {
  className: "Input_Short",
  type: "text",
  name: "state",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 5
  }
}));

const User_Registration_Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"])();
  return __jsx(_Form_Styles__WEBPACK_IMPORTED_MODULE_3__["User_Registration_Styles"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "Form_SubContainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, __jsx(FirstLastName, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }), __jsx(DOB, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }), __jsx(Contact, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }), __jsx(Address, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }), __jsx(ZipState, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "Small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, "Submit ")));
};
const User_Billing_Form = () => {
  const CardElementStyles = {
    base: {
      color: "#00ffff",
      fontSize: "15px",
      padding: "15px",
      background: "#0000007a",
      iconColor: "black",
      empty: {
        color: "#00ffff"
      }
    }
  };
  const {
    register,
    handleSubmit,
    watch,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"])();
  return __jsx(_Form_Styles__WEBPACK_IMPORTED_MODULE_3__["User_Billing_Styles"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 5
    }
  }, __jsx(DOB, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  }), __jsx(Contact, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }
  }), __jsx(Address, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }
  }), __jsx(ZipState, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "Stripe_Card_Container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }
  }, __jsx(react_stripe_elements__WEBPACK_IMPORTED_MODULE_6__["CardElement"], {
    color: "aqua",
    style: CardElementStyles,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  })), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "Small",
    onClick: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }
  }, "Subscribe"));
};

/***/ }),

/***/ "./lib/interface/index.js":
/*!********************************!*\
  !*** ./lib/interface/index.js ***!
  \********************************/
/*! exports provided: useObserver, withAuth, useNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useObserver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useObserver.js */ "./lib/interface/useObserver.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useObserver", function() { return _useObserver_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _withAuth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withAuth.js */ "./lib/interface/withAuth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withAuth", function() { return _withAuth_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _useNav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useNav.js */ "./lib/interface/useNav.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNav", function() { return _useNav_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

// @create-index




/***/ }),

/***/ "./lib/interface/useNav.js":
/*!*********************************!*\
  !*** ./lib/interface/useNav.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./lib/components/index.js");
var _jsxFileName = "/Users/ryanbreaux/Projects/Web/Clients/nps_v2/lib/interface/useNav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const useNav = (views = {}, NavName) => {
  const initalState = window.localStorage.getItem(NavName);
  const viewKeys = Object.keys(views);
  const {
    0: view_name,
    1: changeView
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initalState ? initalState : viewKeys[0]);
  const {
    0: Buttons,
    1: setButtons
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const ActiveView = views[view_name];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const buttons = viewKeys.map(name => __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "Nav",
      active: name === view_name ? true : false,
      onClick: () => changeView(name),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }
    }, name));
    setButtons(buttons);
    window.localStorage.setItem(NavName, view_name);
  }, [view_name]);
  return [Buttons, ActiveView, view_name];
};

/* harmony default export */ __webpack_exports__["default"] = (useNav);

/***/ }),

/***/ "./lib/interface/useObserver.js":
/*!**************************************!*\
  !*** ./lib/interface/useObserver.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useObserver = ({
  root = null,
  rootMargin,
  threshold = 0
}) => {
  const {
    0: entry,
    1: updateEntry
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: node,
    1: setNode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const isWindow = false;
  const observer = isWindow ? Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new window.IntersectionObserver(([entry]) => updateEntry(entry), {
    root,
    rootMargin,
    threshold
  })) : null;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const {
      current: currentObserver
    } = observer;
    currentObserver.disconnect();
    if (node) currentObserver.observe(node);
    return () => currentObserver.disconnect();
  }, [node]);
  return [setNode, entry];
};

/* harmony default export */ __webpack_exports__["default"] = (useObserver);

/***/ }),

/***/ "./lib/interface/withAuth.js":
/*!***********************************!*\
  !*** ./lib/interface/withAuth.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ryanbreaux/Projects/Web/Clients/nps_v2/lib/interface/withAuth.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
  query {
    getUser {
      firstName
      lastName
      email
      homePhone
      workPhone
      players {
        id
        name
      }
      role
    }
  }
`;

const withAuth = (AuthComponent, redirect) => ({
  children
}) => {
  const {
    client,
    loading,
    data,
    err
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(QUERY);
  if (loading) return "loading...";
  if (err) return err;
  const user = data.getUser ? data.getUser : null;

  if (redirect && !user) {
    return redirect;
  } else {
    return __jsx(AuthComponent, {
      client: client,
      children: children,
      user: user,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 12
      }
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (withAuth);

/***/ }),

/***/ "./lib/reducers.js":
/*!*************************!*\
  !*** ./lib/reducers.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


let prevState = {};

function HomePage(state, action) {
  switch (action.type) {
    case "SCROLLED":
      return Object.assign({}, state, {
        scrolled: true
      });

    case "NOT_SCROLLED":
      return {
        scrolled: false
      };

    case "SHOW_MODAL":
      prevState = state;
      return {
        modal: true
      };

    case "HIDE_MODAL":
      return _objectSpread({
        modal: false
      }, prevState);

    default:
      return state;
  }
}

function DashPage(state, action) {
  switch (action.type) {
    case "LOGOUT":
      return {
        loggedIn: false
      };

    case "SHOW_MODAL":
      return {
        modal: true,
        input: action.input
      };

    case "HIDE_MODAL":
      return _objectSpread({
        modal: false
      }, prevState);
      break;

    default:
      return state;
  }
}

function Form(state, action) {
  switch (action.type) {
    case "SHOW_MODAL":
      return {
        modal: true
      };

    case "HIDE_MODAL":
      return _objectSpread({
        modal: false
      }, prevState);
      break;

    default:
      return state;
  }
}

const reducer = {
  HomePage,
  DashPage
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./lib/static/Soccer_Ball_Background.js":
/*!**********************************************!*\
  !*** ./lib/static/Soccer_Ball_Background.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ryanbreaux/Projects/Web/Clients/nps_v2/lib/static/Soccer_Ball_Background.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Soccer_Ball_Background = ({
  className,
  style,
  color = "#00EAFF"
}) => __jsx("svg", {
  style: style,
  className: className,
  width: "785px",
  height: "785px",
  viewBox: "0 0 785 785",
  version: "1.1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 3
  }
}, __jsx("g", {
  id: "Home",
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}, __jsx("g", {
  transform: "translate(-471.000000, -120.000000)",
  fill: color,
  fillRule: "nonzero",
  id: "Soccer_Icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 7
  }
}, __jsx("g", {
  transform: "translate(471.000000, 120.000000)",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }
}, __jsx("path", {
  d: "M392.5,0 C175.730632,0 0,175.730632 0,392.5 C0,609.269368 175.730632,785 392.5,785 C609.269368,785 785,609.269368 785,392.5 C784.757242,175.832845 609.167155,0.242757979 392.5,0 Z M406.509643,113.156779 L542.958333,58.6130782 C558.443685,65.6210937 573.424357,73.6959635 587.791747,82.7801929 L588.149495,83.0037838 C602.267741,91.9474687 615.759928,101.843018 628.536621,112.620157 L629.635417,113.57841 C635.365763,118.459107 640.936401,123.512289 646.353719,128.72518 C647.037272,129.395956 647.752767,130.03479 648.43632,130.718344 C654.11556,136.263427 659.615926,141.980997 664.937419,147.864664 C665.378215,148.362956 665.799845,148.886799 666.24064,149.385091 C670.910522,154.617147 675.40153,160.034465 679.758383,165.541219 C680.80607,166.850831 681.853761,168.160441 682.869506,169.470052 C687.596883,175.590089 692.170939,181.818725 696.489461,188.245402 L669.287883,303.874471 L535.458414,348.490682 L406.541586,245.338053 L406.509643,113.156779 Z M102.117716,169.546712 C103.133464,168.237102 104.168375,166.927489 105.216065,165.624268 C109.52181,160.162232 113.974487,154.83435 118.574096,149.634237 C119.072388,149.084838 119.532349,148.522664 120.024251,147.973267 C125.313802,142.076823 130.788614,136.36564 136.461466,130.833333 C137.113078,130.194499 137.764689,129.523723 138.448242,128.935995 C143.820841,123.755046 149.34676,118.733805 155.026001,113.878661 L156.335612,112.779867 C168.997315,102.079387 182.361734,92.2477214 196.339438,83.3423674 L196.850505,83.0165613 C211.134846,73.9514974 226.019694,65.8894035 241.41561,58.875 L378.490357,113.156779 L378.490357,245.299724 L249.567138,348.433188 L115.73767,303.900025 L88.5360925,188.270956 C92.8929439,181.857056 97.4158931,175.641195 102.117716,169.546712 Z M86.3512773,593.266561 C82.5054936,587.402059 78.8258061,581.428956 75.3186043,575.340861 L74.468953,573.871542 C70.9809167,567.815389 67.6781405,561.657024 64.567017,555.402832 L64.4584139,555.204793 C57.9039714,542.044799 52.1480717,528.501505 47.2290442,514.645182 L47.2290442,514.517415 C44.9036861,507.975749 42.7827551,501.274374 40.821534,494.534668 L40.1124272,492.049602 C38.3173022,485.71875 36.6882735,479.317628 35.2317306,472.846232 C35.1039636,472.213787 34.9442554,471.613281 34.8164868,470.987224 C31.6031498,456.370688 29.2969556,441.575276 27.9042969,426.671264 L107.777792,330.826903 L240.680949,375.123698 L279.253784,529.402263 L215.875,613.728435 L86.3512773,593.266561 Z M479.624268,748.273397 C473.082602,749.896036 466.368449,751.295085 459.654297,752.553588 C458.71521,752.738852 457.756958,752.892172 456.817871,753.064656 C451.100301,754.086792 445.318848,754.961995 439.524617,755.677489 C437.978638,755.875529 436.445435,756.086344 434.905844,756.271607 C429.526855,756.897664 424.09676,757.370402 418.653891,757.760091 C416.941812,757.875081 415.248901,758.047566 413.536824,758.156169 C406.579915,758.584187 399.56551,758.833333 392.5,758.833333 C386.028606,758.833333 379.59554,758.660848 373.200806,758.322266 C372.427815,758.322266 371.686768,758.194499 370.913777,758.137004 C365.22176,757.811198 359.555298,757.383178 353.901612,756.833781 L353.25,756.712402 C340.862996,755.370849 328.546264,753.40324 316.357299,750.828736 L238.968872,629.66097 L301.351074,546.478313 L483.648926,546.478313 L547.053263,630.210367 L479.624268,748.273397 Z M750.279337,471 C750.145182,471.626057 749.991862,472.23295 749.857707,472.859009 C748.394776,479.324016 746.765747,485.725138 744.97701,492.062378 L744.274292,494.547445 C742.306681,501.28715 740.192138,507.962971 737.860392,514.530193 L737.860392,514.657958 C732.941366,528.514283 727.191854,542.057577 720.631022,555.21757 L720.522421,555.41561 C717.39213,561.676187 714.095743,567.834555 710.620483,573.884318 L709.770833,575.353638 C706.282797,581.460897 702.609497,587.421224 698.757324,593.253784 L569.674399,613.607056 L505.854818,529.351156 L544.408488,375.110922 L677.311646,330.814128 L757.185141,426.658488 C755.798868,441.568888 753.492676,456.377076 750.279337,471 L750.279337,471 Z",
  id: "Shape",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 11
  }
})))));

/* harmony default export */ __webpack_exports__["default"] = (Soccer_Ball_Background);

/***/ }),

/***/ "./lib/static/shirt.js":
/*!*****************************!*\
  !*** ./lib/static/shirt.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ryanbreaux/Projects/Web/Clients/nps_v2/lib/static/shirt.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Shirt_Svg = ({
  className
}) => __jsx("svg", {
  className: className,
  width: "48px",
  height: "40px",
  viewBox: "0 0 48 40",
  version: "1.1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 3
  }
}, __jsx("g", {
  id: "Home",
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}, __jsx("g", {
  id: "Parent_Dash",
  transform: "translate(-611.000000, -570.000000)",
  fill: "#000000",
  "fill-rule": "nonzero",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }
}, __jsx("g", {
  id: "Group-4",
  transform: "translate(611.000000, 570.000000)",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }
}, __jsx("g", {
  id: "286964",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 11
  }
}, __jsx("path", {
  d: "M34.0005,0 L29.001,0 C29.001,2.75747633 26.7568125,5.00009375 24,5.00009375 C21.2431875,5.00009375 19.0005,2.75747633 19.0005,0 L14.00025,0 L0,8 L4.0005,18.9999063 L10.0005,16.9997188 L10.0005,40 L38.001,40 L38.001,16.9997188 L44.001,18.9999063 L48,8 L34.0005,0 Z M42.7851563,16.487016 L38.6323125,15.1027468 L36,14.2247117 L36,16.9998125 L36,37.9991563 L12,37.9991563 L12,16.9998125 L12,14.2247117 L9.3676875,15.1028405 L5.21484375,16.4871098 L2.45578125,8.90015937 L14.53125,2.00018749 L17.2903125,2.00018749 C18.1509375,4.89172213 20.829375,7.00028124 24,7.00028124 C27.171375,7.00028124 29.8491563,4.89172213 30.7089375,2.00018749 L33.46875,2.00018749 L45.544875,8.90015937 L42.7851563,16.487016 Z",
  id: "Shape",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 13
  }
}))))));

/* harmony default export */ __webpack_exports__["default"] = (Shirt_Svg);

/***/ }),

/***/ "./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Legend
// p1 = Primary
// c1 = Contrast
// c = color
// px = Padding X
// py = Padding Y
// mx = Margin X
// my = Margin Y
// ff = FontFamily
// fw = FontWeight
// fs = FontSize
// bdr = Border Radius
// bc = Background Color
// bdc = Border Color
// Presets
const Dark = {
  c: "white",
  c1: "black",
  bc: "transparent",
  bdc: "white"
};
const colors = {
  p1: "white",
  p2: "#494949",
  p3: "#90909073",
  p4: "#060633",
  c1: "black",
  c2: "#7C7A7A",
  c3: "#FB3640"
}; // Component style handles

const buttons = {
  c: colors.p3,
  ff: "'Poiret One', cursive",
  tiny: _objectSpread({}, Dark, {
    py: ".4em",
    px: ".6em",
    bdr: "3px"
  }),
  small: _objectSpread({}, Dark, {
    px: "2.6em",
    py: ".6em",
    mx: ".3em",
    bdr: "3px"
  }),
  big: {},
  nav: _objectSpread({}, Dark, {
    ff: "'Poiret One', cursive",
    c: "white",
    bdc: "transparent",
    fs: "1.2em",
    mx: "1em",
    py: "3px",
    my: "3px"
  })
};
const headings = {
  ff: "'Work Sans', sans-serif",
  fw: "bold",
  fs: "4em",
  my: "10px",
  small: {
    ff: "'Poiret One', cursive",
    fs: ".9em",
    my: "0",
    mx: "1em"
  },
  sub: {
    fw: "100",
    fs: "1.5em"
  },
  big: {
    ff: "'Anton', sans-serif",
    fs: "4em"
  }
};
const cards = {};
const modal = {};
const form = {
  input: {
    bc: "transparent"
  },
  subcontainer: {
    bdr: "6px",
    bdc: "white",
    px: "1em",
    py: "1em",
    my: "3em",
    icons: {},
    items: {
      my: "1em"
    }
  }
};
const theme = {
  colors,
  buttons,
  cards,
  headings,
  modal,
  form
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! exports provided: changeTo, withProps, buildThresholdList, locateTo, wrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTo", function() { return changeTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withProps", function() { return withProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildThresholdList", function() { return buildThresholdList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locateTo", function() { return locateTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapComponent", function() { return wrapComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ryanbreaux/Projects/Web/Clients/nps_v2/lib/util.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const changeTo = (com, type) => {
  com.target = type;
  return com;
};
const withProps = (Component, _ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return __jsx(Component, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }), children);
};
const buildThresholdList = numSteps => {
  let thresholds = [];

  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
};
const locateTo = location => {
  window.location.href = location;
};
const wrapComponent = (C1, C2) => {
  return (_ref2) => {
    let {
      children
    } = _ref2,
        props = _objectWithoutProperties(_ref2, ["children"]);

    return __jsx(C2, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }
    }, __jsx(C1, _extends({}, props, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }
    }), children));
  };
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_blocks___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/blocks/ */ "./lib/blocks/index.js");
/* harmony import */ var _lib_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/reducers */ "./lib/reducers.js");
/* harmony import */ var _lib_interface_useObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/interface/useObserver */ "./lib/interface/useObserver.js");
/* harmony import */ var _lib_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/components */ "./lib/components/index.js");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/util */ "./lib/util.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_forms_Forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/forms/Forms */ "./lib/forms/Forms.js");
/* harmony import */ var _lib_animations_spring__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/animations/spring */ "./lib/animations/spring.js");
/* harmony import */ var _lib_interface_withAuth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/interface/withAuth */ "./lib/interface/withAuth.js");
/* harmony import */ var _lib_blocks_home_Index_Styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/blocks/home/Index_Styles */ "./lib/blocks/home/Index_Styles.js");
var _jsxFileName = "/Users/ryanbreaux/Projects/Web/Clients/nps_v2/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const {
  Body,
  Viewport_Container
} = _lib_components__WEBPACK_IMPORTED_MODULE_5__["Layout"];
const initalState = {
  scrolled: false,
  modal: false
};
const Forms = {
  Login_Form: _lib_forms_Forms__WEBPACK_IMPORTED_MODULE_8__["Login_Form"],
  User_Registration_Form: _lib_forms_Forms__WEBPACK_IMPORTED_MODULE_8__["User_Registration_Form"]
};

function HomePage({
  user
}) {
  const {
    0: store,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_lib_reducers__WEBPACK_IMPORTED_MODULE_3__["default"].HomePage, initalState);
  const {
    0: formType,
    1: setForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const Modal_Form = Forms[formType];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.scrollY > 0 && dispatch({
      type: "SCROLLED"
    });
  }, []);
  return __jsx(Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(_lib_blocks___WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    fixed: true,
    setForm: setForm,
    isLoggedIn: user,
    show: store.scrolled,
    dispatch: dispatch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx(Container_1, {
    store: store,
    dispatch: dispatch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }), __jsx(Container_2, {
    store: store,
    dispatch: dispatch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), store.modal && __jsx(_lib_components__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    show: store.modal,
    hideModal: () => dispatch({
      type: "HIDE_MODAL"
    }),
    type: "center",
    backdrop: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(Modal_Form, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  })));
}

const Container_1 = ({
  dispatch,
  store
}) => {
  const [ref, entries] = Object(_lib_interface_useObserver__WEBPACK_IMPORTED_MODULE_4__["default"])({
    threshold: Object(_lib_util__WEBPACK_IMPORTED_MODULE_6__["buildThresholdList"])(20)
  });
  const [{
    opacity
  }, setAnim] = Object(react_spring__WEBPACK_IMPORTED_MODULE_7__["useSpring"])(() => {
    return {
      opacity: 1
    };
  });
  const isIntersecting = entries.isIntersecting;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const Scrolled_Threshold = 0.1;

    if (isIntersecting) {
      const ir = entries.intersectionRatio;
      ir < Scrolled_Threshold && !store.scrolled && dispatch({
        type: "SCROLLED"
      });
      ir > Scrolled_Threshold && store.scrolled && dispatch({
        type: "NOT_SCROLLED"
      }); //Set Animations

      setAnim({
        opacity: ir < 0.6 || store.scrolled ? 0 : ir
      });
    }
  }, [store.scrolled, entries.intersectionRatio]);
  return __jsx(_lib_blocks_home_Index_Styles__WEBPACK_IMPORTED_MODULE_11__["Container_1_Styles"], {
    ref: ref,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }, __jsx("img", {
    className: "Splash_Logo",
    src: "https://res.cloudinary.com/dxjse9tsv/image/upload/v1556240214/General_Icons/NYS_Logo.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_7__["animated"].div, {
    className: "Splash_Image",
    style: {
      opacity
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "Splash_Nav_Container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_7__["animated"].div, {
    style: {
      opacity
    },
    className: "Splash_Nav_Container_SubContainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx(_lib_components__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    type: "Big",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, "Spring"), __jsx(_lib_components__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    type: "Sub",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, "Register Today"), __jsx(_lib_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    type: "Small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, "Sign Up"), __jsx(_lib_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    onClick: () => dispatch({
      type: "SHOW_LOGIN"
    }),
    type: "Small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, "Login"))));
};

const Background_Stripe = Object(react_spring__WEBPACK_IMPORTED_MODULE_7__["animated"])(styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Background_Stripe",
  componentId: "sc-1bxujxe-0"
})(["position:absolute;height:15vh;width:500vw;top:0;transform:rotate(40deg) translate(0%,", "%);will-change:opacity;background-color:", ";"], ({
  index
}) => index * 500, ({
  index
}) => index % 2 === 0 ? "#ffffff1f" : "#0e0d0d38"));

const Container_2 = ({
  store
}) => {
  const fadeIn = Object(react_spring__WEBPACK_IMPORTED_MODULE_7__["useTrail"])(10, {
    opacity: store.scrolled ? 1 : 0
  });
  const [ref, entries] = Object(_lib_interface_useObserver__WEBPACK_IMPORTED_MODULE_4__["default"])({
    threshold: Object(_lib_util__WEBPACK_IMPORTED_MODULE_6__["buildThresholdList"])(40)
  });
  const [swoopIn, setAnim] = Object(react_spring__WEBPACK_IMPORTED_MODULE_7__["useSpring"])(() => ({
    xy: [0, 0]
  }));

  const calcWave = (range, wl) => {
    const x = range;
    const y = range;
    return [0, 0];
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const isIntersecting = entries.isIntersecting;

    if (isIntersecting) {
      const ir = entries.intersectionRatio;
      const range = (ir - 0.5) * entries.boundingClientRect.height;
      const wl = entries.boundingClientRect.width / 3;
      setAnim({
        xy: calcWave(range, wl)
      });
    }
  });
  return __jsx(Viewport_Container, {
    style: {
      background: "whtie",
      height: "100%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 5
    }
  }, __jsx(_lib_blocks_home_Index_Styles__WEBPACK_IMPORTED_MODULE_11__["Container_2_Styles"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "Card_Background_Container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "Card_Container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 11
    }
  }, __jsx(_lib_animations_spring__WEBPACK_IMPORTED_MODULE_9__["FadeIn_Wrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }
  }, __jsx(_lib_blocks___WEBPACK_IMPORTED_MODULE_2__["Card"], {
    title: "Awards",
    background: "https://res.cloudinary.com/dxjse9tsv/image/upload/v1586905436/NationalYouthSports/ball-basketball-basketball-court-basketball-hoop-1752757.jpg",
    caption: "GYS is part of the ONLY major multi-sport league based in the east valley!",
    button: __jsx(_lib_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      type: "Small",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 25
      }
    }, "Join Us"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 15
    }
  })), __jsx(_lib_animations_spring__WEBPACK_IMPORTED_MODULE_9__["FadeIn_Wrapper"], {
    className: "Cards_Wrapper Double",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }
  }, __jsx(_lib_blocks___WEBPACK_IMPORTED_MODULE_2__["Card"], {
    background: "https://res.cloudinary.com/dxjse9tsv/image/upload/v1586910899/a-boy-seated-holding-a-basket-ball.jpg",
    title: "Believe",
    caption: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 15
    }
  }), __jsx(_lib_blocks___WEBPACK_IMPORTED_MODULE_2__["Card"], {
    background: "https://res.cloudinary.com/dxjse9tsv/image/upload/v1586593941/NationalYouthSports/johann-rosch-JgDjK1c4UIU-unsplash.jpg",
    title: "Fulfillment",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 15
    }
  })), __jsx(_lib_animations_spring__WEBPACK_IMPORTED_MODULE_9__["FadeIn_Wrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }
  }), __jsx(_lib_animations_spring__WEBPACK_IMPORTED_MODULE_9__["FadeIn_Wrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }, __jsx(_lib_blocks___WEBPACK_IMPORTED_MODULE_2__["Card"], {
    background: "https://res.cloudinary.com/dxjse9tsv/image/upload/v1586594243/NationalYouthSports/ben-hershey-Ql2n3JsUpww-unsplash.jpg",
    title: "Modern",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "Background_Container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "Background_Sub_Container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 13
    }
  }, __jsx(Background_Stripe, {
    style: fadeIn[5],
    index: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 15
    }
  }), __jsx(Background_Stripe, {
    style: fadeIn[6],
    index: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 15
    }
  }), __jsx(Background_Stripe, {
    style: fadeIn[7],
    index: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 15
    }
  }), __jsx(Background_Stripe, {
    style: fadeIn[8],
    index: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 15
    }
  }), __jsx(Background_Stripe, {
    style: fadeIn[9],
    index: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 15
    }
  }))))));
};

const Container_3_Styles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Container_3_Styles",
  componentId: "sc-1bxujxe-1"
})(["background:beige;height:100%;"]);

const Container_3 = () => {
  return __jsx(Viewport_Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 5
    }
  }, __jsx(Container_3_Styles, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_interface_withAuth__WEBPACK_IMPORTED_MODULE_10__["default"])(HomePage));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ryanbreaux/Projects/Web/Clients/nps_v2/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "react-stripe-elements":
/*!****************************************!*\
  !*** external "react-stripe-elements" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stripe-elements");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map