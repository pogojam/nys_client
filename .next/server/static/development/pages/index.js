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
/*! exports provided: rotate, fadeIn, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const rotate = (pos1, pos2) => Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{transform:rotate(0deg) translate(", "%,", "%);}to{transform:rotate(360deg) translate(", "%,", "%);}"], pos1[0], pos1[1], pos2[0], pos2[1]);
const fadeIn = () => Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{opacity:0;}to{opacity:1}"]);
const css = {
  fadeIn,
  rotate
};
/* harmony default export */ __webpack_exports__["default"] = (css);

/***/ }),

/***/ "./lib/animations/index.js":
/*!*********************************!*\
  !*** ./lib/animations/index.js ***!
  \*********************************/
/*! exports provided: css, spring */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css.js */ "./lib/animations/css.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _css_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _spring_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spring.js */ "./lib/animations/spring.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spring", function() { return _spring_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

// @create-index



/***/ }),

/***/ "./lib/animations/spring.js":
/*!**********************************!*\
  !*** ./lib/animations/spring.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
});

const spring = {
  fadeIn,
  slideInBottom,
  slideInDown,
  slideInLeft,
  slideInRight
};
/* harmony default export */ __webpack_exports__["default"] = (spring);

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ "./lib/theme.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "./lib/util.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ "./lib/components/index.js");
/* harmony import */ var _components_style_templates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/style_templates */ "./lib/components/style_templates.js");
var _jsxFileName = "/Users/ryanbreaux/Projects/Web/Clients/nps_v2/lib/blocks/Card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const styles = _theme__WEBPACK_IMPORTED_MODULE_2__["default"].cards;

const Card = (_ref) => {
  let {
    background,
    title,
    caption,
    img: Img
  } = _ref,
      props = _objectWithoutProperties(_ref, ["background", "title", "caption", "img"]);

  return __jsx(Styled_Card, _extends({
    background: background,
    className: "Card"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }), Img && __jsx(Img, {
    className: "Card_Img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "Heading_Caption_Container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, title && __jsx(_components__WEBPACK_IMPORTED_MODULE_4__["Heading"], {
    className: "Heading",
    type: "Big",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, title), caption && __jsx("p", {
    className: "Card_Caption",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 19
    }
  }, caption)));
};

const Styled_Card = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Card__Styled_Card",
  componentId: "at05zo-0"
})(["align-items:center;grid-template-columns:1fr 2fr;background:url(", ");.Card{}svg{min-height:15rem;height:40vh;height:100%;}.Card_Img{height:100%;justify-self:center;}text-align:center;display:grid;.Heading_Caption_Container{}", ""], ({
  background
}) => background, Object(_components_style_templates__WEBPACK_IMPORTED_MODULE_5__["default"])(styles.cards));
/* harmony default export */ __webpack_exports__["default"] = (Card);

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
})(["position:", ";left:0;top:0;width:100%;z-index:99;backdrop-filter:blur(6px);background-color:", ";border-bottom:1px solid ", ";.Nav_SubContainer{position:relative;margin-right:2em;display:flex;padding-bottom:5px;}.Nav_SubContainer_Alt_Buttons{transform:translateY(5px);& > *{margin-left:0.5em;margin-right:0.5em;}margin-left:auto;display:flex;align-items:center;}"], ({
  fixed
}) => fixed ? "fixed" : "relative", _theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.c1, _theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.p2));

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
      marginLeft: 0
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "Sports"), __jsx(Nav_Button, {
    style: o[1],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, " Roster"), __jsx(Nav_Button, {
    style: o[2],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, "Contact"), __jsx("div", {
    className: "Nav_SubContainer_Alt_Buttons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx(Nav_Button_Tiny, {
    onClick: () => handleCLick("SHOW_MODAL", "Registration"),
    style: o[3],
    type: "Tiny",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, "Register"), __jsx(Nav_Button_Tiny, {
    onClick: () => isLoggedIn ? Object(_util__WEBPACK_IMPORTED_MODULE_4__["locateTo"])("/Dash") : handleCLick("SHOW_MODAL", "Login"),
    style: o[4],
    type: "Tiny",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, isLoggedIn ? "Dash" : "Login"), isLoggedIn && __jsx(Nav_Button_Tiny, {
    onClick: () => Object(_util__WEBPACK_IMPORTED_MODULE_4__["locateTo"])("http://localhost:4000" + "/auth/logout"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, "Logout"), __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaFacebook"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, "content"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Nav);

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
})(["", ""], Object(_style_templates__WEBPACK_IMPORTED_MODULE_3__["default"])(styles));
const Small = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Base).withConfig({
  displayName: "Button__Small",
  componentId: "cvrf7p-1"
})(["", ""], Object(_style_templates__WEBPACK_IMPORTED_MODULE_3__["default"])(styles.small));
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
})(["position:relative;", " letter-spacing:6px;transition:all 0.6s cubic-bezier(0.075,0.82,0.165,1);&:after{content:\"\";position:absolute;bottom:-5px;left:0;height:1px;width:", ";border:1px solid;background-color:inherit;transition:width 0.6s cubic-bezier(0.075,0.82,0.165,1);}&:focus{outline:none;}&:hover{&:after{width:100px;}}"], Object(_style_templates__WEBPACK_IMPORTED_MODULE_3__["default"])(styles.nav), ({
  active
}) => active ? "100px" : "15px");
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./lib/components/Form.js":
/*!********************************!*\
  !*** ./lib/components/Form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./lib/util.js");
/* harmony import */ var _style_templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style_templates */ "./lib/components/style_templates.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ "./lib/theme.js");





const styles = _theme__WEBPACK_IMPORTED_MODULE_4__["default"].form;

const Container = props => {
  return Object(_util__WEBPACK_IMPORTED_MODULE_2__["withProps"])(BaseContainer, props);
};

const BaseContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "Form__BaseContainer",
  componentId: "sc-1glcamt-0"
})(["", " display:flex;width:100%;height:100%;flex-direction:column;.Form_Icon{", "}.Form_SubContainer{background-color:#1b1b1b;border:2px solid;", " & > *{", "}}input{", " margin-bottom:1em;}.Input_Short{max-width:20px;}label{margin-right:0.5em;margin-left:0.5em;}"], Object(_style_templates__WEBPACK_IMPORTED_MODULE_3__["default"])(styles), Object(_style_templates__WEBPACK_IMPORTED_MODULE_3__["default"])(styles.icons), Object(_style_templates__WEBPACK_IMPORTED_MODULE_3__["default"])(styles.subcontainer), Object(_style_templates__WEBPACK_IMPORTED_MODULE_3__["default"])(styles.subcontainer.items), Object(_style_templates__WEBPACK_IMPORTED_MODULE_3__["default"])(styles.input));
const Form = {
  Container
};
/* harmony default export */ __webpack_exports__["default"] = (Form);

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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./lib/util.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/ryanbreaux/Projects/Web/Clients/nps_v2/lib/components/Icon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const MessageNotification = ({
  messages
}) => {
  const Container = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
    displayName: "Icon__Container",
    componentId: "alsrz-0"
  })(["position:relative;.Message_Number{color:black;position:absolute;top:55%;right:-100%;transform:translate(-50%,-50%);font-size:0.9em;font-family:\"Poiret One\",cursive;font-weight:900;margin:0;}"]);
  return __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "Message_Number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, messages > 0 ? messages : ""), __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiMessageCircle"], {
    fill: messages > 0 ? "red" : "inherit",
    color: messages > 0 ? "red" : "inherit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }));
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
          lineNumber: 44,
          columnNumber: 9
        }
      });
      break;

    case "mail":
      return Object(_util__WEBPACK_IMPORTED_MODULE_2__["withProps"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiMail"], props);
      break;

    case "message":
      return Object(_util__WEBPACK_IMPORTED_MODULE_2__["withProps"])(MessageNotification, props);
      break;

    case "card":
      return Object(_util__WEBPACK_IMPORTED_MODULE_2__["withProps"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiCreditCard"], props);
      break;

    case "calendar":
      return Object(_util__WEBPACK_IMPORTED_MODULE_2__["withProps"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiCalendar"], props);
      break;

    case "arrow_right":
      return Object(_util__WEBPACK_IMPORTED_MODULE_2__["withProps"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiChevronRight"], props);
      break;

    case "arrow_down":
      return Object(_util__WEBPACK_IMPORTED_MODULE_2__["withProps"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiChevronDown"], props);
      break;

    case "phone":
      return Object(_util__WEBPACK_IMPORTED_MODULE_2__["withProps"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiPhone"], props);
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
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../animations */ "./lib/animations/index.js");
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
})(["padding:1em;", ""], Object(_style_templates__WEBPACK_IMPORTED_MODULE_5__["default"])(_theme__WEBPACK_IMPORTED_MODULE_4__["default"].modal));
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
})(["", " z-index:", ";position:fixed;opacity:0.4;top:0;width:100%;height:100%;backdrop-filter:blur(3px)"], Object(_style_templates__WEBPACK_IMPORTED_MODULE_5__["default"])(styles.backdrop), ({
  show
}) => show ? 1 : -999));
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
    Animation: _animations__WEBPACK_IMPORTED_MODULE_6__["spring"].slideInRight
  },
  center: {
    Container: Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"])(Model_Center),
    Animation: _animations__WEBPACK_IMPORTED_MODULE_6__["spring"].fadeIn
  }
};

const Modal = (_ref) => {
  let {
    type,
    hideModal,
    show,
    backdrop,
    bgStyles = {},
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["type", "hideModal", "show", "backdrop", "bgStyles", "children"]);

  const Container = Types[type].Container;
  const setAnim = Types[type].Animation;
  const Modal_Animation = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])(setAnim(show));
  const Backdrop_Animation = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])(_animations__WEBPACK_IMPORTED_MODULE_6__["spring"].fadeIn(show));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(Container, _extends({
    show: show,
    style: Modal_Animation
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }), children), backdrop && __jsx(Backdrop, {
    show: show,
    style: _objectSpread({}, Backdrop_Animation, {}, bgStyles),
    onClick: hideModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
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
/*! exports provided: Button, Form, Heading, Icon, Layout, Line, Modal, style_templates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.js */ "./lib/components/Button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.js */ "./lib/components/Form.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _Form_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Heading_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Heading.js */ "./lib/components/Heading.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return _Heading_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Icon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icon.js */ "./lib/components/Icon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _Icon_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Layout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Layout.js */ "./lib/components/Layout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _Layout_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Line_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Line.js */ "./lib/components/Line.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return _Line_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Modal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modal.js */ "./lib/components/Modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _Modal_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _style_templates_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style_templates.js */ "./lib/components/style_templates.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "style_templates", function() { return _style_templates_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

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

/***/ "./lib/forms/forms.js":
/*!****************************!*\
  !*** ./lib/forms/forms.js ***!
  \****************************/
/*! exports provided: Login, Registration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Registration", function() { return Registration; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ */ "./lib/components/index.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/ryanbreaux/Projects/Web/Clients/nps_v2/lib/forms/forms.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const handleLogin = data => {
  console.log(data);
};

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"])();
  return __jsx(_components___WEBPACK_IMPORTED_MODULE_2__["Form"].Container, {
    style: {
      alignItems: "center",
      justifyContent: "center"
    },
    onSubmit: handleSubmit(handleLogin),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "Form_SubContainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiUser"], {
    className: "Form_Icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
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
      lineNumber: 20,
      columnNumber: 11
    }
  })), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiLock"], {
    className: "Form_Icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
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
      lineNumber: 30,
      columnNumber: 11
    }
  })), __jsx("div", {
    style: {
      display: "flex",
      alignItems: "center"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(_components___WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "Small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, "Submit"), __jsx("a", {
    href: "http://localhost:4000/auth/facebook",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiFacebook"], {
    className: "Form_Icon",
    style: {
      marginLeft: "auto"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  })), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoLogoGoogle"], {
    className: "Form_Icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }))));
};
const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"])();
  return __jsx(_components___WEBPACK_IMPORTED_MODULE_2__["Form"].Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "Form_SubContainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "firstName",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, "FirstName"), __jsx("input", {
    name: "firstName",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }), __jsx("label", {
    htmlFor: "LastName",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, "LastName"), __jsx("input", {
    name: "lastName",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "dob",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, "DOB"), __jsx("input", {
    type: "date",
    name: "dob",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, "Email"), __jsx("input", {
    type: "text",
    name: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }), __jsx("label", {
    htmlFor: "homePhone",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, "Cell Phone"), __jsx("input", {
    type: "text",
    name: "homePhone",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "address",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, " Street"), __jsx("input", {
    type: "text",
    name: "address",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }), __jsx("label", {
    htmlFor: "unit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, " Unit"), __jsx("input", {
    className: "Input_Short",
    type: "text",
    name: "unit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "zip",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, " Zip"), __jsx("input", {
    type: "text",
    name: "zip",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }), __jsx("label", {
    htmlFor: "state",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, " State"), __jsx("input", {
    className: "Input_Short",
    type: "text",
    name: "state",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  })), __jsx(_components___WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "Small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, "Submit ")));
};

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
  }
}

const reducer = {
  HomePage,
  DashPage
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./lib/static/Base_Ball.js":
/*!*********************************!*\
  !*** ./lib/static/Base_Ball.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./lib/static/Cash_Sack.js":
/*!*********************************!*\
  !*** ./lib/static/Cash_Sack.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ryanbreaux/Projects/Web/Clients/nps_v2/lib/static/Cash_Sack.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Cash_Sack = ({
  className
}) => __jsx("svg", {
  className: className,
  width: "116px",
  height: "193px",
  viewBox: "0 0 116 193",
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
  transform: "translate(-123.000000, -319.000000)",
  id: "Group",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }
}, __jsx("g", {
  transform: "translate(123.000000, 319.000000)",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }
}, __jsx("path", {
  d: "M57.9983089,76 C90.0313147,76 116,102.195201 116,134.503411 C116,166.80821 90.0313147,193 57.9983089,193 C25.9653031,193 0,166.80821 0,134.503411 C0,102.195201 25.9653031,76 57.9983089,76",
  id: "Fill-210",
  fill: "#BB4489",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 11
  }
}), __jsx("polygon", {
  id: "Fill-211",
  fill: "#BB4489",
  points: "10 128 107 128 107 66 10 66",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M9.06165571,61 L107.938344,61 C111.822086,61 115,64.1501674 115,67.9966523 C115,71.8498326 111.822086,75 107.938344,75 L9.06165571,75 C5.17791393,75 2,71.8498326 2,67.9966523 C2,64.1501674 5.17791393,61 9.06165571,61",
  id: "Fill-212",
  fill: "#6AC5DB",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M57.9983247,96 C78.4341861,96 95,113.014309 95,134 C95,154.989132 78.4341861,172 57.9983247,172 C37.5658139,172 21,154.989132 21,134 C21,113.014309 37.5658139,96 57.9983247,96",
  id: "Fill-213",
  fill: "#0A0B09",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M29.0016554,26 C36.7325293,26 43,32.2674707 43,40.0016554 C43,47.7325293 36.7325293,54 29.0016554,54 C21.2707816,54 15,47.7325293 15,40.0016554 C15,32.2674707 21.2707816,26 29.0016554,26",
  id: "Fill-214",
  fill: "#EC912D",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M86.9983446,26 C94.7325293,26 101,32.2674707 101,40.0016554 C101,47.7325293 94.7325293,54 86.9983446,54 C79.2674707,54 73,47.7325293 73,40.0016554 C73,32.2674707 79.2674707,26 86.9983446,26",
  id: "Fill-215",
  fill: "#EC912D",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M58.9982734,0 C72.8044754,0 84,10.9723719 84,24.5033844 C84,38.034397 72.8044754,49 58.9982734,49 C45.1920713,49 34,38.034397 34,24.5033844 C34,10.9723719 45.1920713,0 58.9982734,0",
  id: "Fill-216",
  fill: "#BB4489",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M61.5203841,27.959065 C61.5203841,28.718663 60.705019,29.4782609 58.2697953,29.4782609 C55.5011777,29.4782609 55.1786556,27.3486739 52.5731111,27.3486739 C50.1342635,27.3486739 49,28.4100763 49,30.085261 C49,32.2182391 51.2757746,34.3478261 55.5011777,34.9582173 C55.5011777,36.7826087 56.8021381,38 59.0815365,38 C61.3573111,38 62.6582714,36.7826087 62.6582714,34.9582173 L62.6582714,34.8056195 C66.3980794,34.0426305 69,31.6112389 69,27.959065 C69,20.9565217 56.9652111,21.8721085 56.9652111,19.7391304 C56.9652111,19.1321303 57.6138793,18.5217391 59.2409857,18.5217391 C61.6834571,18.5217391 62.0059793,20.6513261 64.6079,20.6513261 C67.0467476,20.6513261 68.1846349,19.5899237 68.1846349,17.914739 C68.1846349,16.0869565 65.5863381,13.655565 62.6582714,13.0417827 C62.6582714,11.2173913 61.3573111,10 59.0815365,10 C56.8021381,10 55.5011777,11.2173913 55.5011777,13.0417827 L55.5011777,13.1977716 C52.0875159,13.9573695 49.4855952,16.3887611 49.4855952,19.7391304 C49.4855952,27.0468693 61.5203841,26.1312825 61.5203841,27.959065",
  id: "Fill-217",
  fill: "#FFFFFE",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M63.8431715,118.024914 L59.2318513,128.098207 C58.9811031,128.643857 58.5958072,129 57.9995158,129 C57.4001664,129 57.0179284,128.643857 56.7671802,128.098207 L52.15586,118.024914 C45.425412,103.325029 70.5766775,103.325029 63.8431715,118.024914",
  id: "Fill-218",
  fill: "#EC912D",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M63.8431715,149.96895 L59.2318513,139.898826 C58.9811031,139.352994 58.5958072,139 57.9995158,139 C57.4001664,139 57.0179284,139.352994 56.7671802,139.898826 L52.15586,149.96895 C45.425412,164.677017 70.5766775,164.677017 63.8431715,149.96895",
  id: "Fill-219",
  fill: "#C7C6C1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M41.8630126,135.782132 L53.3308538,135.006029 C53.9504655,134.963096 54.4762982,135.144737 54.8011757,135.702871 C55.1294025,136.257702 55.0255756,136.799323 54.6772534,137.311221 L48.2634345,146.713629 C38.8989239,160.439097 25.1267969,136.91161 41.8630126,135.782132",
  id: "Fill-220",
  fill: "#EC912D",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M68.7360882,120.28711 L62.3227238,129.689519 C61.9744262,130.198115 61.8706067,130.736433 62.1988102,131.29787 C62.5270137,131.856004 63.0494601,132.034342 63.672377,131.994712 L75.1360566,131.221911 C91.8744355,130.082525 78.0999352,106.561639 68.7360882,120.28711",
  id: "Fill-221",
  fill: "#C7C6C1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M68.7360882,146.71343 L62.3227238,137.307284 C61.9744262,136.798666 61.8706067,136.257019 62.1988102,135.702163 C62.5270137,135.144003 63.0494601,134.965656 63.672377,135.005289 L75.1360566,135.781428 C91.8744355,136.910958 78.0999352,160.439534 68.7360882,146.71343",
  id: "Fill-222",
  fill: "#EC912D",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M41.8630126,131.221939 L53.3308538,131.994781 C53.9504655,132.034413 54.4762982,131.852763 54.8011757,131.297902 C55.1294025,130.736436 55.0255756,130.201392 54.6772534,129.689467 L48.2634345,120.286561 C38.8989239,106.560365 25.1267969,130.089098 41.8630126,131.221939",
  id: "Fill-223",
  fill: "#C7C6C1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 11
  }
})))));

/* harmony default export */ __webpack_exports__["default"] = (Cash_Sack);

/***/ }),

/***/ "./lib/static/Charm_Background.js":
/*!****************************************!*\
  !*** ./lib/static/Charm_Background.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ryanbreaux/Projects/Web/Clients/nps_v2/lib/static/Charm_Background.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Charm_Background = ({
  className
}) => __jsx("svg", {
  className: className,
  width: "382px",
  height: "382px",
  viewBox: "0 0 382 382",
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
  opacity: "0.198497954",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}, __jsx("g", {
  transform: "translate(-520.000000, -64.000000)",
  fill: "#DB1700",
  id: "Fill-271",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 7
  }
}, __jsx("path", {
  d: "M879.485841,284.109457 C857.530931,262.156068 857.530931,247.840812 879.485841,225.899904 C894.838053,210.536276 894.838053,185.387852 879.485841,170.036705 C864.121148,154.685558 838.983462,154.685558 823.618769,170.036705 L762.18496,231.466255 L762.122552,231.341449 L750.365005,243.0857 C742.826195,250.636468 730.469537,250.636468 722.893283,243.0857 C715.354474,235.534933 715.354474,223.166651 722.893283,215.615883 L734.663312,203.871632 L734.550979,203.821709 L795.972307,142.39216 C811.324518,127.041013 811.324518,101.892589 795.972307,86.5414417 C780.595132,71.1528528 755.457446,71.1528528 740.092753,86.5414417 C718.137842,108.469869 703.859037,108.469869 681.904127,86.5414417 C666.539434,71.1528528 641.414229,71.1528528 626.024573,86.5414417 C610.672361,101.892589 610.672361,127.041013 626.024573,142.39216 L687.445901,203.821709 L687.321086,203.871632 L699.078633,215.615883 C706.642406,223.166651 706.642406,235.534933 699.078633,243.0857 C691.527342,250.636468 679.170684,250.636468 671.631875,243.0857 L659.849364,231.341449 L659.786957,231.466255 L598.378111,170.036705 C583.025899,154.685558 557.875731,154.685558 542.52352,170.036705 C527.158827,185.387852 527.158827,210.536276 542.52352,225.899904 C564.47843,247.840812 564.47843,262.156068 542.52352,284.109457 C527.158827,299.460604 527.158827,324.609028 542.52352,339.960175 C557.875731,355.323802 583.025899,355.323802 598.378111,339.960175 L659.786957,278.530625 L659.849364,278.655431 L671.631875,266.91118 C679.170684,259.360412 691.527342,259.360412 699.078633,266.91118 C706.642406,274.461947 706.642406,286.830229 699.078633,294.380997 L687.321086,306.125248 L687.445901,306.175171 L626.024573,367.60472 C610.672361,382.968348 610.672361,408.104291 626.024573,423.467919 C641.414229,438.844027 666.539434,438.844027 681.904127,423.467919 C703.859037,401.527011 718.137842,401.527011 740.092753,423.467919 C755.457446,438.844027 780.595132,438.819066 795.972307,423.467919 C811.324518,408.104291 811.324518,382.968348 795.972307,367.60472 L734.550979,306.175171 L734.663312,306.125248 L722.893283,294.380997 C715.354474,286.830229 715.354474,274.461947 722.893283,266.92366 C730.469537,259.360412 742.826195,259.360412 750.365005,266.92366 L762.122552,278.655431 L762.18496,278.530625 L823.618769,339.960175 C838.983462,355.323802 864.121148,355.323802 879.485841,339.960175 C894.838053,324.609028 894.838053,299.460604 879.485841,284.109457 Z",
  transform: "translate(711.000000, 255.000000) rotate(29.000000) translate(-711.000000, -255.000000) ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }
}))));

/* harmony default export */ __webpack_exports__["default"] = (Charm_Background);

/***/ }),

/***/ "./lib/static/Computer.js":
/*!********************************!*\
  !*** ./lib/static/Computer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ryanbreaux/Projects/Web/Clients/nps_v2/lib/static/Computer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Computer = ({
  className
}) => __jsx("svg", {
  className: className,
  width: "142px",
  height: "151px",
  viewBox: "0 0 142 151",
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
  transform: "translate(-1153.000000, -354.000000)",
  id: "Group-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }
}, __jsx("g", {
  transform: "translate(1153.000000, 354.000000)",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }
}, __jsx("path", {
  d: "M35.3207151,110 L106.676912,110 C117.853899,110 127,119.22147 127,130.501197 C127,141.776137 117.853899,151 106.676912,151 L35.3207151,151 C24.1437287,151 15,141.776137 15,130.501197 C15,119.22147 24.1437287,110 35.3207151,110",
  id: "Fill-284",
  fill: "#BB4489",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M116.449838,129 C113.14829,129 109.854195,129 106.550162,129 C105.69807,129 105,129.630009 105,130.398041 L105,132.604185 C105,133.369991 105.69807,134 106.550162,134 C109.854195,134 113.14829,134 116.449838,134 C117.304414,134 118,133.369991 118,132.604185 L118,130.398041 C118,129.630009 117.304414,129 116.449838,129",
  id: "Fill-285",
  fill: "#FFFFFE",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M101.496656,129 L101.496656,129 C102.872046,129 104,130.124221 104,131.493321 L104,131.504452 C104,132.875779 102.872046,134 101.496656,134 C100.127954,134 99,132.875779 99,131.504452 L99,131.493321 C99,130.124221 100.127954,129 101.496656,129",
  id: "Fill-286",
  fill: "#FFFFFE",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M94.5,129 L94.5,129 C95.875,129 97,130.124221 97,131.493321 L97,131.504452 C97,132.875779 95.875,134 94.5,134 C93.125,134 92,132.875779 92,131.504452 L92,131.493321 C92,130.124221 93.125,129 94.5,129",
  id: "Fill-287",
  fill: "#FFFFFE",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M86.5033437,129 L86.5033437,129 C87.8787338,129 89,130.124221 89,131.493321 L89,131.504452 C89,132.875779 87.8720464,134 86.5033437,134 C85.1234953,134 84,132.875779 84,131.504452 L84,131.493321 C84,130.124221 85.1234953,129 86.5033437,129",
  id: "Fill-288",
  fill: "#FFFFFE",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M79.5,129 L79.5,129 C80.875,129 82,130.124221 82,131.493321 L82,131.504452 C82,132.875779 80.875,134 79.5,134 C78.1227679,134 77,132.875779 77,131.504452 L77,131.493321 C77,130.124221 78.1227679,129 79.5,129",
  id: "Fill-289",
  fill: "#FFFFFE",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M72.5,129 L72.5066964,129 C73.8816964,129 75,130.124221 75,131.493321 L75,131.504452 C75,132.875779 73.8816964,134 72.5066964,134 L72.5,134 C71.1294643,134 70,132.875779 70,131.504452 L70,131.493321 C70,130.124221 71.1294643,129 72.5,129",
  id: "Fill-290",
  fill: "#FFFFFE",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M65.5011156,129 L65.5011156,129 C66.8777332,129 68,130.124221 68,131.493321 L68,131.504452 C68,132.875779 66.8777332,134 65.5011156,134 C64.124498,134 63,132.875779 63,131.504452 L63,131.493321 C63,130.124221 64.124498,129 65.5011156,129",
  id: "Fill-291",
  fill: "#FFFFFE",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M57.4944221,129 L57.4944221,129 C58.8777332,129 60,130.124221 60,131.493321 L60,131.504452 C60,132.875779 58.8777332,134 57.4944221,134 C56.124498,134 55,132.875779 55,131.504452 L55,131.493321 C55,130.124221 56.124498,129 57.4944221,129",
  id: "Fill-292",
  fill: "#FFFFFE",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M51.5,129 L51.5,129 C52.875,129 54,130.124221 54,131.493321 L54,131.504452 C54,132.875779 52.875,134 51.5,134 C50.125,134 49,132.875779 49,131.504452 L49,131.493321 C49,130.124221 50.125,129 51.5,129",
  id: "Fill-293",
  fill: "#FFFFFE",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M44.5022302,129 L44.5022302,129 C45.8782337,129 47,130.124221 47,131.493321 L47,131.504452 C47,132.875779 45.8782337,134 44.5022302,134 C43.1284567,134 42,132.875779 42,131.504452 L42,131.493321 C42,130.124221 43.1284567,129 44.5022302,129",
  id: "Fill-294",
  fill: "#FFFFFE",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M37.5044643,129 L37.5044643,129 C38.875,129 40,130.124221 40,131.493321 L40,131.504452 C40,132.875779 38.875,134 37.5,134 C36.1227679,134 35,132.875779 35,131.504452 L35,131.493321 C35,130.124221 36.1227679,129 37.5044643,129",
  id: "Fill-295",
  fill: "#FFFFFE",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M29.5,129 L29.5,129 C30.875,129 32,130.124221 32,131.493321 L32,131.504452 C32,132.875779 30.875,134 29.5,134 C28.1227679,134 27,132.875779 27,131.504452 L27,131.493321 C27,130.124221 28.1227679,129 29.5,129",
  id: "Fill-296",
  fill: "#FFFFFE",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M106.5,120 L106.5,120 C107.877232,120 109,121.122494 109,122.496659 L109,122.501114 C109,123.875278 107.877232,125 106.5,125 C105.122768,125 104,123.875278 104,122.501114 L104,122.496659 C104,121.122494 105.122768,120 106.5,120",
  id: "Fill-297",
  fill: "#FFFFFE",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M99.4933036,120 L99.5,120 C100.875,120 102,121.122494 102,122.496659 L102,122.501114 C102,123.875278 100.875,125 99.5,125 L99.4933036,125 C98.1227679,125 97,123.875278 97,122.501114 L97,122.496659 C97,121.122494 98.1227679,120 99.4933036,120",
  id: "Fill-298",
  fill: "#FFFFFE",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M92.5,120 L92.5,120 C93.8772321,120 95,121.122494 95,122.496659 L95,122.501114 C95,123.875278 93.8772321,125 92.5,125 C91.125,125 90,123.875278 90,122.501114 L90,122.496659 C90,121.122494 91.125,120 92.5,120",
  id: "Fill-299",
  fill: "#FFFFFE",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M85.5,120 L85.5,120 C86.8772321,120 88,121.122494 88,122.496659 L88,122.501114 C88,123.875278 86.8772321,125 85.5,125 C84.125,125 83,123.875278 83,122.501114 L83,122.496659 C83,121.122494 84.125,120 85.5,120",
  id: "Fill-300",
  fill: "#FFFFFE",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M77.4966563,120 L77.4966563,120 C78.8765047,120 80,121.122494 80,122.496659 L80,122.501114 C80,123.875278 78.8698172,125 77.4966563,125 C76.1234953,125 75,123.875278 75,122.501114 L75,122.496659 C75,121.122494 76.1234953,120 77.4966563,120",
  id: "Fill-301",
  fill: "#FFFFFE",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M70.5033437,120 L70.5033437,120 C71.8765047,120 73,121.122494 73,122.496659 L73,122.501114 C73,123.875278 71.8765047,125 70.5033437,125 C69.1279536,125 68,123.875278 68,122.501114 L68,122.496659 C68,121.122494 69.1279536,120 70.5033437,120",
  id: "Fill-302",
  fill: "#FFFFFE",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M64.4977698,120 L64.4977698,120 C65.8737734,120 67,121.122494 67,122.496659 L67,122.501114 C67,123.875278 65.8737734,125 64.4977698,125 C63.1217663,125 62,123.875278 62,122.501114 L62,122.496659 C62,121.122494 63.1217663,120 64.4977698,120",
  id: "Fill-303",
  fill: "#FFFFFE",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M56.5,120 L56.5,120 C57.875,120 59,121.122494 59,122.496659 L59,122.501114 C59,123.875278 57.875,125 56.5,125 C55.1227679,125 54,123.875278 54,122.501114 L54,122.496659 C54,121.122494 55.1227679,120 56.5,120",
  id: "Fill-304",
  fill: "#FFFFFE",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M49.5033437,120 L49.5033437,120 C50.8720464,120 52,121.122494 52,122.496659 L52,122.501114 C52,123.875278 50.8720464,125 49.5033437,125 C48.1301828,125 47,123.875278 47,122.501114 L47,122.496659 C47,121.122494 48.1301828,120 49.5033437,120",
  id: "Fill-305",
  fill: "#FFFFFE",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M42.4988844,120 L42.4988844,120 C43.875502,120 45,121.122494 45,122.496659 L45,122.501114 C45,123.875278 43.875502,125 42.4988844,125 C41.124498,125 40,123.875278 40,122.501114 L40,122.496659 C40,121.122494 41.124498,120 42.4988844,120",
  id: "Fill-306",
  fill: "#FFFFFE",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M35.5033437,120 L35.5033437,120 C36.8765047,120 38,121.122494 38,122.496659 L38,122.501114 C38,123.875278 36.8698172,125 35.5033437,125 C34.1234953,125 33,123.875278 33,122.501114 L33.0066875,122.496659 C33.0066875,121.122494 34.1234953,120 35.5033437,120",
  id: "Fill-307",
  fill: "#FFFFFE",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M109.5,138 L109.504464,138 C110.875,138 112,139.120267 112,140.494432 L112,140.503341 C112,141.875278 110.875,143 109.504464,143 L109.5,143 C108.120536,143 107,141.875278 107,140.503341 L107,140.494432 C107,139.120267 108.120536,138 109.5,138",
  id: "Fill-308",
  fill: "#FFFFFE",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 132,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M102.498884,138 L102.498884,138 C103.875502,138 105,139.120267 105,140.494432 L105,140.503341 C105,141.875278 103.875502,143 102.498884,143 C101.122267,143 100,141.875278 100,140.503341 L100,140.494432 C100,139.120267 101.122267,138 102.498884,138",
  id: "Fill-309",
  fill: "#FFFFFE",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 137,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M38.5,138 L38.5,138 C39.875,138 41,139.120267 41,140.494432 L41,140.503341 C41,141.875278 39.875,143 38.5,143 C37.1227679,143 36,141.875278 36,140.503341 L36,140.494432 C36,139.120267 37.1227679,138 38.5,138",
  id: "Fill-310",
  fill: "#FFFFFE",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 142,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M31.5033437,138 L31.5033437,138 C32.8720464,138 34,139.120267 34,140.494432 L34,140.503341 C34,141.875278 32.8720464,143 31.5033437,143 C30.1234953,143 29,141.875278 29,140.503341 L29,140.494432 C29,139.120267 30.1234953,138 31.5033437,138",
  id: "Fill-311",
  fill: "#FFFFFE",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 147,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M45.9966371,138 C44.9010951,138 44,138.628062 44,139.394209 L44,141.601336 C44,142.36971 44.9010951,143 45.9966371,143 C63.0012503,143 79.9987497,143 96.9986203,143 C98.0989049,143 99,142.36971 99,141.601336 L99,139.394209 C99,138.628062 98.0989049,138 96.9986203,138 C79.9987497,138 63.0012503,138 45.9966371,138",
  id: "Fill-312",
  fill: "#FFFFFE",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 152,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M36.9248738,7.49529567 C20.7396324,7.49529567 7.46446958,20.8134026 7.46446958,37.0702357 L7.46446958,63.9297643 C7.46446958,80.1842217 20.7396324,93.5023286 36.9248738,93.5023286 L105.082224,93.5023286 C121.267465,93.5023286 134.537896,80.1794703 134.537896,63.9297643 L134.537896,37.0702357 C134.537896,20.818154 121.267465,7.49529567 105.082224,7.49529567 L36.9248738,7.49529567 Z M36.9248738,0 L105.082224,0 C125.384162,0 142,16.6797055 142,37.0702357 L142,63.9297643 C142,84.3202945 125.384162,101 105.082224,101 L36.9248738,101 C16.6182042,101 0,84.3202945 0,63.9297643 L0,37.0702357 C0,16.6797055 16.6182042,0 36.9248738,0 L36.9248738,0 Z",
  id: "Fill-313",
  fill: "#BB4489",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 157,
    columnNumber: 11
  }
})))));

/* harmony default export */ __webpack_exports__["default"] = (Computer);

/***/ }),

/***/ "./lib/static/Hand_Slap.js":
/*!*********************************!*\
  !*** ./lib/static/Hand_Slap.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ryanbreaux/Projects/Web/Clients/nps_v2/lib/static/Hand_Slap.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Hand_Slap = ({
  className
}) => __jsx("svg", {
  className: className,
  width: "171px",
  height: "186px",
  viewBox: "0 0 171 186",
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
  transform: "translate(-402.000000, -319.000000)",
  id: "Group-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }
}, __jsx("g", {
  transform: "translate(402.000000, 319.000000)",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }
}, __jsx("path", {
  d: "M128.75077,99.8780319 L128.75077,92.2769682 C128.758575,88.1706104 132.055457,84.8010506 136.13129,84.6946763 C136.799408,84.6790331 137.465966,84.7509921 138.115351,84.9074248 C141.427844,85.7193104 143.905188,88.7259464 143.905188,92.2863541 C143.905188,96.4615423 140.495913,99.8780319 136.326418,99.8780319 L128.75077,99.8780319 Z M80,49.2751898 C80,62.5641456 87.3539827,74.1292134 98.1921702,80.2113158 L98.1921702,81.8960958 L118.51826,91.2257406 L128.75077,112 L136.326418,112 C147.148996,112 156,103.128703 156,92.2863541 C156,81.442441 147.148996,72.5711439 136.326418,72.5711439 C129.425132,72.5711439 122.519164,72.5711439 115.616317,72.5711439 C102.734749,72.561758 92.1666187,62.1558563 92.1666187,49.2751898 L92.1619357,28.5259596 C92.1619357,22.1857432 86.9855811,17 80.6618741,17 C80.4402087,17 80.2169823,17.004693 80,17.0187719 L80,49.2751898 L80,49.2751898 Z",
  id: "Fill-81",
  fill: "#BB4489",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M25,150.671392 L25,145 L8.98367724,145 C4.04373268,145 0,149.149953 0,154.225105 C0,156.939023 0,161.182287 0,165.955366 C0,169.29399 2.63627964,172 5.88543271,172 C9.13920542,172 11.7708654,169.29399 11.7708654,165.955366 C11.7708654,164.446579 11.7708654,159.244904 11.7708654,157.737699 C11.7708654,153.850281 14.8660302,150.671392 18.6526024,150.671392 L25,150.671392",
  id: "Fill-82",
  fill: "#EC912D",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M147,117.181243 L147,112 L170.992134,112 L170.992134,117.181243 L169.771288,117.181243 C168.685742,117.181243 167.801573,118.049908 167.801573,119.109219 C167.801573,120.168529 168.685742,121.035657 169.771288,121.035657 L171,121.035657 L171,132.475903 C171,135.526226 168.47178,138 165.350442,138 C162.227532,138 159.696165,135.526226 159.696165,132.475903 C159.696165,131.098338 159.699312,125.016143 159.699312,123.638578 C159.699312,120.088581 156.724287,117.181243 153.090069,117.181243 L147,117.181243",
  id: "Fill-83",
  fill: "#8B4188",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M103.94197,163 L109,163 L109,185.990546 L103.94197,185.990546 L103.94197,184.821402 C103.94197,183.781462 103.095044,182.930602 102.061481,182.930602 C101.02478,182.930602 100.180991,183.781462 100.180991,184.821402 L100.180991,186 L89.390527,186 C86.4153074,186 84,183.57505 84,180.586011 C84,177.592245 86.4153074,175.16887 89.390527,175.16887 C90.7346299,175.16887 96.2976788,175.170446 97.6417817,175.170446 C101.106336,175.170446 103.94197,172.320066 103.94197,168.839419 L103.94197,163",
  id: "Fill-84",
  fill: "#8B4188",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M31.2485521,100.422147 L31.2485521,92.8336311 C31.2438694,88.7348957 27.9425755,85.3715905 23.8670774,85.2669752 C23.2036969,85.2497995 22.5325118,85.321625 21.887862,85.4793287 C18.5756418,86.2881458 16.0985007,89.2892009 16.0985007,92.8429996 C16.0985007,97.0104376 19.5074964,100.422147 23.6719655,100.422147 L31.2485521,100.422147 Z M80,49.9116741 C80,63.1759625 72.6450606,74.7195628 61.8077634,80.788814 L61.8077634,128 L31.2485521,128 L31.2485521,112.520052 L23.6719655,112.520052 C12.85496,112.520052 4,103.665222 4,92.8429996 C4,82.0192153 12.85496,73.1643855 23.6719655,73.1643855 C30.5758061,73.1643855 37.4780858,73.1643855 44.3803656,73.1643855 C57.2608749,73.1565784 67.8328199,62.7684311 67.8328199,49.9116741 L67.8328199,28.5045647 C67.8328199,22.1761173 73.0087492,17 79.3366194,17 C79.5582666,17 79.7814746,17.0046843 80,17.0187371 L80,49.9116741 L80,49.9116741 Z",
  id: "Fill-85",
  fill: "#6AC5DB",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M60.6427269,160 L55,160 L55,176.017309 C55,180.957558 59.1286712,185 64.1723791,185 C67.0181121,185 68.5070121,185 73.990944,185 C77.3083454,185 80,182.365098 80,179.114205 C80,175.861772 77.3083454,173.22841 73.990944,173.22841 C72.4926105,173.22841 69.1626313,173.22841 67.6642978,173.22841 C63.8029055,173.22841 60.6427269,170.133054 60.6427269,166.347789 L60.6427269,160",
  id: "Fill-87",
  fill: "#EC912D",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M67,172 L49.4650585,172 L49.4650585,139.339289 C49.4650585,137.667431 48.110614,136.299263 46.457076,136.299263 C44.8019883,136.299263 43.4459942,137.668997 43.4459942,139.339289 L43.4459942,150.071739 C43.4459942,154.943294 39.5019883,158.927262 34.6792982,158.927262 L14,158.927262 L14,141.21465 L25.9110526,141.21465 L25.9110526,134.752638 C25.9110526,123.339235 35.1550585,114 46.457076,114 C57.7559942,114 67,123.339235 67,134.752638 L67,172",
  id: "Fill-88",
  fill: "#DCDBD6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M116.500775,25 L116.500775,25 C129.424651,25 140,35.5746512 140,48.500775 L140,72 L116.500775,72 C102.581681,72 93,61.4253488 93,48.500775 C93,35.5746512 103.575349,25 116.500775,25",
  id: "Fill-89",
  fill: "#EC912D",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M129,106 L120.471084,106 C108.108111,106 98,95.9654631 98,83.7032967 L98,77 L129,77 L129,106",
  id: "Fill-91",
  fill: "#BB4489",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M159,112 L129.086736,112 C110.887779,112 96,126.888974 96,145.085914 L96,175 C130.793964,175 159,146.7931 159,112",
  id: "Fill-93",
  fill: "#EC912D",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M35.4984222,29 C46.8205187,29 56,38.1775503 56,49.4992111 C56,60.8224497 46.8205187,70 35.4984222,70 C24.1779035,70 15,60.8224497 15,49.4992111 C15,38.1775503 24.1779035,29 35.4984222,29",
  id: "Fill-94",
  fill: "#BB4489",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M15.2276725,48 L55.673246,48 L57.2882548,42.4146085 C57.2882548,27.6258539 59.6490131,13.3683657 64,0 L8,0 C12.3478601,13.3683657 14.7133086,27.6258539 14.7133086,42.4146085 L14.7133086,45.8702049 L15.2276725,48",
  id: "Fill-96",
  fill: "#EC912D",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 11
  }
})))));

/* harmony default export */ __webpack_exports__["default"] = (Hand_Slap);

/***/ }),

/***/ "./lib/static/Horn.js":
/*!****************************!*\
  !*** ./lib/static/Horn.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ryanbreaux/Projects/Web/Clients/nps_v2/lib/static/Horn.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Horn = ({
  className
}) => __jsx("svg", {
  className: className,
  width: "160px",
  height: "64px",
  viewBox: "0 0 160 64",
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
  transform: "translate(-783.000000, -380.000000)",
  id: "Group-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }
}, __jsx("g", {
  transform: "translate(783.000000, 380.000000)",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }
}, __jsx("path", {
  d: "M107.287853,29.745 L77.982147,29.745 C69.2653303,29.745 62.135,36.7207089 62.135,45.2465754 C62.135,53.7708664 69.2653303,60.745 77.982147,60.745 L107.287853,60.745 C116.00467,60.745 123.135,53.7708664 123.135,45.2465754 C123.135,36.7207089 116.00467,29.745 107.287853,29.745",
  id: "Fill-192",
  fill: "#BB4489",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M107.287853,29.745 L77.982147,29.745 C69.2653303,29.745 62.135,36.7207089 62.135,45.2465754 C62.135,53.7708664 69.2653303,60.745 77.982147,60.745 L107.287853,60.745 C116.00467,60.745 123.135,53.7708664 123.135,45.2465754 C123.135,36.7207089 116.00467,29.745 107.287853,29.745 Z",
  id: "Stroke-193",
  stroke: "#1B1A19",
  strokeWidth: "0.567",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 11
  }
}), __jsx("polygon", {
  id: "Fill-194",
  fill: "#EC912D",
  points: "48.135 32.745 143.135 32.745 143.135 25.745 48.135 25.745",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M76.9677071,32.1951128 L109.308708,32.1951128 C116.145447,32.1951128 121.7441,37.8426025 121.7441,44.7441909 C121.7441,51.6457793 116.145447,57.2948872 109.308708,57.2948872 L76.9677071,57.2948872 C70.1277603,57.2948872 64.5291074,51.6457793 64.5291074,44.7441909 C64.5291074,37.8426025 70.1277603,32.1951128 76.9677071,32.1951128 Z M109.308708,25.745 L76.9677071,25.745 C66.6091569,25.745 58.135,34.2955259 58.135,44.7441909 C58.135,55.1928559 66.6091569,63.745 76.9677071,63.745 L109.308708,63.745 C119.665654,63.745 128.135,55.1928559 128.135,44.7441909 C128.135,34.2939077 119.665654,25.745 109.308708,25.745 L109.308708,25.745 Z",
  id: "Fill-195",
  fill: "#EC912D",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M0.135,0.745 L2.10795788,0.745 C10.8584943,15.4487952 26.8913564,25.3027223 45.2241508,25.3027223 C48.2653313,25.3027223 51.2414343,25.0324904 54.135,24.5126914 L54.135,32.9788982 C51.2414343,32.4590992 48.2653313,32.1872777 45.2241508,32.1872777 C26.8913564,32.1872777 10.8584943,42.0396152 2.10795788,56.745 L0.135,56.745 L0.135,0.745",
  id: "Fill-196",
  fill: "#BB4489",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M149.135,18.745 C154.657079,18.745 159.135,23.2216839 159.135,28.7457971 C159.135,34.2667218 154.657079,38.745 149.135,38.745 C143.61611,38.745 139.135,34.2667218 139.135,28.7457971 C139.135,23.2216839 143.61611,18.745 149.135,18.745",
  id: "Fill-197",
  fill: "#BB4489",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 11
  }
}), __jsx("polygon", {
  id: "Fill-198",
  fill: "#EC912D",
  points: "70.135 30.745 75.135 30.745 75.135 13.745 70.135 13.745",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M72.635,17.745 C76.2264397,17.745 79.135,14.8336322 79.135,11.2442097 C79.135,7.65478723 76.2264397,4.745 72.635,4.745 C69.0467218,4.745 66.135,7.65478723 66.135,11.2442097 C66.135,14.8336322 69.0467218,17.745 72.635,17.745",
  id: "Fill-199",
  fill: "#6AC5DB",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 11
  }
}), __jsx("polygon", {
  id: "Fill-200",
  fill: "#EC912D",
  points: "90.135 30.745 95.135 30.745 95.135 13.745 90.135 13.745",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M92.6357903,17.745 C96.2267933,17.745 99.135,14.8336322 99.135,11.2442097 C99.135,7.65478723 96.2267933,4.745 92.6357903,4.745 C89.0479483,4.745 86.135,7.65478723 86.135,11.2442097 C86.135,14.8336322 89.0479483,17.745 92.6357903,17.745",
  id: "Fill-201",
  fill: "#6AC5DB",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 11
  }
}), __jsx("polygon", {
  id: "Fill-202",
  fill: "#EC912D",
  points: "111.135 30.745 116.135 30.745 116.135 13.745 111.135 13.745",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M113.633419,17.745 C117.22644,17.745 120.135,14.8336322 120.135,11.2442097 C120.135,7.65478723 117.22644,4.745 113.633419,4.745 C110.046722,4.745 107.135,7.65478723 107.135,11.2442097 C107.135,14.8336322 110.046722,17.745 113.633419,17.745",
  id: "Fill-203",
  fill: "#6AC5DB",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M76.6357926,37.745 C72.4907012,37.745 69.135,41.1022863 69.135,45.2442074 C69.135,49.3861286 72.4907012,52.745 76.6357926,52.745 C80.7777137,52.745 84.135,49.3861286 84.135,45.2442074 C84.135,41.1022863 80.7777137,37.745 76.6357926,37.745",
  id: "Fill-204",
  fill: "#0A0B09",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 11
  }
}), __jsx("path", {
  d: "M108.636585,37.745 C104.491056,37.745 101.135,41.1038714 101.135,45.2442074 C101.135,49.3861286 104.491056,52.745 108.636585,52.745 C112.778944,52.745 116.135,49.3861286 116.135,45.2442074 C116.135,41.1038714 112.778944,37.745 108.636585,37.745",
  id: "Fill-205",
  fill: "#0A0B09",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 11
  }
})))));

/* harmony default export */ __webpack_exports__["default"] = (Horn);

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

/***/ "./lib/static/index.js":
/*!*****************************!*\
  !*** ./lib/static/index.js ***!
  \*****************************/
/*! exports provided: Base_Ball, Cash_Sack, Charm_Background, Computer, Hand_Slap, Horn, Soccer_Ball_Background */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Base_Ball_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base_Ball.js */ "./lib/static/Base_Ball.js");
/* harmony import */ var _Base_Ball_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Base_Ball_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Base_Ball", function() { return _Base_Ball_js__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var _Cash_Sack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cash_Sack.js */ "./lib/static/Cash_Sack.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cash_Sack", function() { return _Cash_Sack_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Charm_Background_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Charm_Background.js */ "./lib/static/Charm_Background.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Charm_Background", function() { return _Charm_Background_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Computer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Computer.js */ "./lib/static/Computer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Computer", function() { return _Computer_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Hand_Slap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hand_Slap.js */ "./lib/static/Hand_Slap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hand_Slap", function() { return _Hand_Slap_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Horn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Horn.js */ "./lib/static/Horn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Horn", function() { return _Horn_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Soccer_Ball_Background_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Soccer_Ball_Background.js */ "./lib/static/Soccer_Ball_Background.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Soccer_Ball_Background", function() { return _Soccer_Ball_Background_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

// @create-index








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
};
const dash = {
  body: {
    bc: "#e5dee8"
  },
  overview: {
    c: "black"
  },
  nav: {
    bc: "",
    c: "black"
  }
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
const modal = {
  px: "1em",
  py: "1em",
  bc: "",
  bdr: "5px",
  backdrop: {
    bc: "#ffffff17"
  }
};
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
  form,
  dash
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! exports provided: changeTo, withProps, buildThresholdList, locateTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTo", function() { return changeTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withProps", function() { return withProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildThresholdList", function() { return buildThresholdList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locateTo", function() { return locateTo; });
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
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/theme */ "./lib/theme.js");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/util */ "./lib/util.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_static___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/static/ */ "./lib/static/index.js");
/* harmony import */ var _lib_forms_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/forms/forms */ "./lib/forms/forms.js");
/* harmony import */ var _lib_interface_withAuth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/interface/withAuth */ "./lib/interface/withAuth.js");
var _jsxFileName = "/Users/ryanbreaux/Projects/Web/Clients/nps_v2/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const {
  Body,
  Container,
  Viewport_Container
} = _lib_components__WEBPACK_IMPORTED_MODULE_5__["Layout"];
const initalState = {
  scrolled: false,
  modal: false
};
const Forms = {
  Login: _lib_forms_forms__WEBPACK_IMPORTED_MODULE_10__["Login"],
  Registration: _lib_forms_forms__WEBPACK_IMPORTED_MODULE_10__["Registration"]
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
  return __jsx(Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
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
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx(Container_1, {
    store: store,
    dispatch: dispatch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), __jsx(Container_2, {
    store: store,
    dispatch: dispatch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx(Container_3, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(Modal_Form, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  })));
}

const Container_1_Styles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Container_1_Styles",
  componentId: "sc-1bxujxe-0"
})(["overflow:hidden;.Splash_Image{width:100%;height:100%;background-image:url(\"https://res.cloudinary.com/dxjse9tsv/image/upload/v1556242581/NationalYouthSports/action-activity-athlete.jpg\");background-size:cover;position:absolute;top:0%;left:0%;z-index:-1;transition:1s cubic-bezier(0.075,0.82,0.165,1);}.Splash_Logo{position:absolute;margin:15px;}.Splash_Nav_Container{position:absolute;bottom:0;max-width:500px;width:100%;.Splash_Nav_Background{position:absolute;background-color:", ";top:0;left:0;width:250vw;height:300%;}.Splash_Nav_SubContainer{position:relative;padding:20px;}}"], _lib_theme__WEBPACK_IMPORTED_MODULE_6__["default"].colors.c1);

const Container_1 = ({
  dispatch,
  store
}) => {
  const [ref, entries] = Object(_lib_interface_useObserver__WEBPACK_IMPORTED_MODULE_4__["default"])({
    threshold: Object(_lib_util__WEBPACK_IMPORTED_MODULE_7__["buildThresholdList"])(20)
  });
  const [{
    xyr,
    opacity,
    y
  }, setAnim] = Object(react_spring__WEBPACK_IMPORTED_MODULE_8__["useSpring"])(() => {
    return {
      opacity: 1,
      xyr: [-32, 0, 17],
      y: 0
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
        opacity: ir,
        xyr: [-10 - 52 * ir, -10, ir * 17]
      });
    }
  });
  return __jsx(Container_1_Styles, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 5
    }
  }, __jsx(Viewport_Container, {
    ref: ref,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "Splash_Logo",
    src: "https://res.cloudinary.com/dxjse9tsv/image/upload/v1556240214/General_Icons/NYS_Logo.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "Splash_Nav_Container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_8__["animated"].div, {
    className: "Splash_Nav_Background",
    style: {
      transform: xyr.interpolate((x, y, r) => `translate(${x}%,${y}%) rotate(${r}deg)`)
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_8__["animated"].div, {
    style: {
      opacity: opacity.interpolate(val => val)
    },
    className: "Splash_Nav_SubContainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }, __jsx(_lib_components__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    type: "Big",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }, "Spring"), __jsx(_lib_components__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    type: "Sub",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, "Register Today"), __jsx(_lib_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    type: "Small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, "Sign Up"), __jsx(_lib_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    onClick: () => dispatch({
      type: "SHOW_LOGIN"
    }),
    type: "Small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, "Login"))), __jsx("div", {
    className: "Splash_Image",
    style: {
      opacity: store.login ? 0 : 1
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  })));
};

const Container_2_Styles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Container_2_Styles",
  componentId: "sc-1bxujxe-1"
})(["display:flex;align-items:center;height:100%;transition:opacity 2s cubic-bezier(0.23,1,0.32,1);.Heading_Container{position:absolute;top:0;left:0;height:100%;.Heading_Container_Headings{position:sticky;top:70vh;margin-top:80vh;white-space:pre-line;align-self:self-start;z-index:1;& > *{margin-bottom:-45px;}}}.Card_Background_Container{width:100%;}.Card_Container{display:flex;flex-direction:column;justify-content:space-around;z-index:1;.Card{height:80vh;margin-top:84px;margin-bottom:20rem;background-size:cover;}& > *{}}.Background_Container{display:none;position:absolute;top:0;left:0;height:100%;width:100%;z-index:0;}.Background_Sub_Container{position:relative;height:100%;width:100%;overflow:hidden;}"]);
const Background_Stripe = Object(react_spring__WEBPACK_IMPORTED_MODULE_8__["animated"])(styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Background_Stripe",
  componentId: "sc-1bxujxe-2"
})(["position:absolute;height:15vh;width:500vw;top:0;transform:rotate(40deg) translate(0%,", "%);will-change:opacity;background-color:", ";"], ({
  index
}) => index * 500, ({
  index
}) => index % 2 === 0 ? "#ffffff1f" : "#0e0d0d38"));
const Card_Anim = Object(react_spring__WEBPACK_IMPORTED_MODULE_8__["animated"])(_lib_blocks___WEBPACK_IMPORTED_MODULE_2__["Card"]);

const Container_2 = ({
  store
}) => {
  const fadeIn = Object(react_spring__WEBPACK_IMPORTED_MODULE_8__["useTrail"])(10, {
    opacity: store.scrolled ? 1 : 0
  });
  const [ref, entries] = Object(_lib_interface_useObserver__WEBPACK_IMPORTED_MODULE_4__["default"])({
    threshold: Object(_lib_util__WEBPACK_IMPORTED_MODULE_7__["buildThresholdList"])(40)
  });
  const [swoopIn, setAnim] = Object(react_spring__WEBPACK_IMPORTED_MODULE_8__["useSpring"])(() => ({
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
      background: "black",
      height: "100%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 5
    }
  }, __jsx(Container_2_Styles, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "Heading_Container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 9
    }
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_8__["animated"].div, {
    className: "Heading_Container_Headings",
    style: _objectSpread({}, fadeIn[4], {
      transform: swoopIn.xy.interpolate((x, y) => `translate(${x}px,${y}px)`)
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 11
    }
  }, __jsx(_lib_components__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    type: "Big",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 13
    }
  }, "The Best"), __jsx(_lib_components__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    type: "Big",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 13
    }
  }, "League In"), __jsx(_lib_components__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    type: "Big",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 13
    }
  }, "Scottsdale"))), __jsx("div", {
    className: "Card_Background_Container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "Card_Container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 11
    }
  }, __jsx(Card_Anim, {
    title: "Awards",
    background: "https://res.cloudinary.com/dxjse9tsv/image/upload/v1586591862/NationalYouthSports/abigail-keenan-8-s5QuUBtyM-unsplash.jpg",
    caption: "GYS is part of the ONLY major multi-sport league based in the east valley!",
    style: fadeIn[0],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 13
    }
  }), __jsx(Card_Anim, {
    background: "https://res.cloudinary.com/dxjse9tsv/image/upload/v1586595987/NationalYouthSports/adria-crehuet-cano-yndHHu2kJAw-unsplash.jpg",
    title: "Fun",
    style: fadeIn[1],
    img: _lib_static___WEBPACK_IMPORTED_MODULE_9__["Hand_Slap"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 13
    }
  }), __jsx(Card_Anim, {
    background: "https://res.cloudinary.com/dxjse9tsv/image/upload/v1586593941/NationalYouthSports/johann-rosch-JgDjK1c4UIU-unsplash.jpg",
    title: "Tournament",
    style: fadeIn[2],
    img: _lib_static___WEBPACK_IMPORTED_MODULE_9__["Horn"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 13
    }
  }), __jsx(Card_Anim, {
    background: "https://res.cloudinary.com/dxjse9tsv/image/upload/v1586594243/NationalYouthSports/ben-hershey-Ql2n3JsUpww-unsplash.jpg",
    title: "Modern",
    style: fadeIn[3],
    img: _lib_static___WEBPACK_IMPORTED_MODULE_9__["Computer"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "Background_Container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "Background_Sub_Container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 13
    }
  }, __jsx(Background_Stripe, {
    style: fadeIn[5],
    index: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 15
    }
  }), __jsx(Background_Stripe, {
    style: fadeIn[6],
    index: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 15
    }
  }), __jsx(Background_Stripe, {
    style: fadeIn[7],
    index: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 15
    }
  }), __jsx(Background_Stripe, {
    style: fadeIn[8],
    index: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 15
    }
  }), __jsx(Background_Stripe, {
    style: fadeIn[9],
    index: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 15
    }
  }))))));
};

const Container_3_Styles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Container_3_Styles",
  componentId: "sc-1bxujxe-3"
})(["background:beige;height:100%;"]);

const Container_3 = () => {
  return __jsx(Viewport_Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 5
    }
  }, __jsx(Container_3_Styles, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_interface_withAuth__WEBPACK_IMPORTED_MODULE_11__["default"])(HomePage));

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