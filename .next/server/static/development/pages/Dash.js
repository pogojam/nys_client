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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "./lib/blocks/dash/Calendar.js":
/*!*************************************!*\
  !*** ./lib/blocks/dash/Calendar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ */ "./lib/components/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/ryanbreaux/Projects/Web/Clients/nps_v2/lib/blocks/dash/Calendar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const {
  Container
} = _components___WEBPACK_IMPORTED_MODULE_1__["Layout"];
const Calendar_Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(Container)`
  .Calendar_Day_Container {
    margin-top: 2em;
  }

  .Calendar_Day_Heading {
    font-family: "Poiret One", cursive;
  }
`;

const buildWeek = () => {
  let week = [];
  const daysInWeek = 7;

  for (let i = 0; i < daysInWeek; ++i) {
    week.push(moment__WEBPACK_IMPORTED_MODULE_2___default()().add(i, "days"));
  }

  return week;
};

const Day = ({
  date
}) => __jsx("div", {
  className: "Calendar_Day_Container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 3
  }
}, __jsx(_components___WEBPACK_IMPORTED_MODULE_1__["Heading"], {
  className: "Calendar_Day_Heading",
  type: "Sub",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }
}, date));

const Calendar = params => {
  const Days = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(buildWeek());
  console.log(Days);
  return __jsx(Calendar_Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, Days.current.map((day, i) => {
    return __jsx(Day, {
      date: day.format("dddd/D"),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 16
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Calendar);

/***/ }),

/***/ "./lib/blocks/dash/Dash_Views.js":
/*!***************************************!*\
  !*** ./lib/blocks/dash/Dash_Views.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./lib/components/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ */ "./lib/blocks/dash/index.js");
var _jsxFileName = "/Users/ryanbreaux/Projects/Web/Clients/nps_v2/lib/blocks/dash/Dash_Views.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const {
  Container
} = _components__WEBPACK_IMPORTED_MODULE_2__["Layout"];

const billing = () => {
  return __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 10
    }
  }, "content");
};

const schedule = () => {
  return __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    style: {
      textAlign: "right",
      borderBottom: "1px solid black"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, "Calendar"), __jsx(___WEBPACK_IMPORTED_MODULE_3__["Calendar"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }));
};

const players = () => {
  return __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 10
    }
  }, "content");
};

const contact = () => {
  return __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 10
    }
  }, "content");
};

const Admin = {
  billing,
  schedule,
  contact,
  players
};
const User = {
  billing,
  schedule,
  contact,
  players
};
const Dash_Views = {
  Admin,
  User
};
/* harmony default export */ __webpack_exports__["default"] = (Dash_Views);

/***/ }),

/***/ "./lib/blocks/dash/User_Overview.js":
/*!******************************************!*\
  !*** ./lib/blocks/dash/User_Overview.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ */ "./lib/components/index.js");
var _jsxFileName = "/Users/ryanbreaux/Projects/Web/Clients/nps_v2/lib/blocks/dash/User_Overview.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const {
  Container
} = _components___WEBPACK_IMPORTED_MODULE_2__["Layout"];

const User_Overview = ({
  name = "",
  email = "",
  homePhone = "",
  players = []
}) => {
  return __jsx(Container, {
    className: "Dash_Overview",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(_components___WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    type: "Small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, name), players.map(({
    sport,
    name: n
  }) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components___WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    type: "Small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, n), __jsx(_components___WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: sport,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }))), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(_components___WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "phone",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx(_components___WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    type: "Small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, homePhone)), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(_components___WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "mail",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx(_components___WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    type: "Small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, email)), __jsx(_components___WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "message",
    messages: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (User_Overview);

/***/ }),

/***/ "./lib/blocks/dash/index.js":
/*!**********************************!*\
  !*** ./lib/blocks/dash/index.js ***!
  \**********************************/
/*! exports provided: Calendar, Dash_Views, User_Overview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Calendar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calendar.js */ "./lib/blocks/dash/Calendar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Calendar", function() { return _Calendar_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Dash_Views_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dash_Views.js */ "./lib/blocks/dash/Dash_Views.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dash_Views", function() { return _Dash_Views_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _User_Overview_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User_Overview.js */ "./lib/blocks/dash/User_Overview.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User_Overview", function() { return _User_Overview_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

// @create-index




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

/***/ "./pages/Dash.js":
/*!***********************!*\
  !*** ./pages/Dash.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/reducers */ "./lib/reducers.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/interface */ "./lib/interface/index.js");
/* harmony import */ var _lib_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/components */ "./lib/components/index.js");
/* harmony import */ var _lib_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/blocks */ "./lib/blocks/index.js");
/* harmony import */ var _lib_blocks_dash___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/blocks/dash/ */ "./lib/blocks/dash/index.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/theme */ "./lib/theme.js");
/* harmony import */ var _lib_components_style_templates__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/components/style_templates */ "./lib/components/style_templates.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/Users/ryanbreaux/Projects/Web/Clients/nps_v2/pages/Dash.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













const {
  Body,
  Container,
  Wrapper
} = _lib_components__WEBPACK_IMPORTED_MODULE_4__["Layout"];
const styles = _lib_theme__WEBPACK_IMPORTED_MODULE_8__["default"].dash;
const Dash_Body = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(Body).withConfig({
  displayName: "Dash__Dash_Body",
  componentId: "sc-1ep5h3i-0"
})(["", " .Dash_Overview{", " padding-top:1em;padding-bottom:1em;display:flex;justify-content:space-between;height:initial;border-bottom:1px solid;opacity:0.5;h3{border-left:1px solid;padding-left:10px;}& > *{display:flex;align-items:center;}}.Dash_View{display:flex;.Dash_View_Nav{", " position:relative;border-right:1px solid;.Dash_View_Nav_Caption{margin-left:2em;padding-top:3em;opacity:0.7;padding-bottom:3em;font-size:0.5em;& > *{padding:0;margin:0;}}.Dash_View_Nav_Controlls{padding-top:1em;height:100%;width:100%;display:flex;flex-direction:column;border-top:1px solid black;& > *{color:black;text-align:left;}}}.Dash_View_SubContainer{color:black;height:100%;width:100%;}}"], Object(_lib_components_style_templates__WEBPACK_IMPORTED_MODULE_9__["default"])(styles.body), Object(_lib_components_style_templates__WEBPACK_IMPORTED_MODULE_9__["default"])(styles.overview), Object(_lib_components_style_templates__WEBPACK_IMPORTED_MODULE_9__["default"])(styles.nav));
const initalState = {
  loggedIn: false
};

const Dash = ({
  user
}) => {
  const {
    0: store,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_lib_reducers__WEBPACK_IMPORTED_MODULE_1__["default"].DashPage, initalState);
  const {
    firstName,
    lastName
  } = user;
  const Views = user.role.includes("Admin") ? _lib_blocks_dash___WEBPACK_IMPORTED_MODULE_6__["Dash_Views"].Admin : _lib_blocks_dash___WEBPACK_IMPORTED_MODULE_6__["Dash_Views"].User;
  const [NavButtons, ActiveView, view_name] = Object(_lib_interface__WEBPACK_IMPORTED_MODULE_3__["useNav"])(Views, "DASH_NAV");
  const transitions = Object(react_spring__WEBPACK_IMPORTED_MODULE_7__["useTransition"])(view_name, view => view, {
    unique: true,
    from: {
      opacity: 0,
      height: "0%",
      transform: `translateY(1rem)`
    },
    enter: {
      opacity: 1,
      height: "100%",
      transform: `translateY(0rem)`
    },
    leave: {
      opacity: 0,
      height: "0%",
      transform: `translateY(1rem)`
    },
    trail: 400 / Views.length
  }); //Quick fix for overflow bug on __next element

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const tag = document.getElementById("__next");
    tag.style.height = "100vh";
    tag.style.overflow = "hidden";
  }, []);
  return __jsx(Dash_Body, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, __jsx(_lib_blocks__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
    isLoggedIn: user,
    show: true,
    store: store,
    dispatch: dispatch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }), __jsx(_lib_blocks_dash___WEBPACK_IMPORTED_MODULE_6__["User_Overview"], _extends({
    name: firstName + " " + lastName
  }, user, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  })), __jsx(Wrapper, {
    className: "Dash_View",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, __jsx(_lib_components__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    className: "Dash_View_Nav",
    type: "left",
    show: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "Dash_View_Nav_Caption",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, __jsx(_lib_components__WEBPACK_IMPORTED_MODULE_4__["Heading"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, "Parent Dash")), __jsx("div", {
    className: "Dash_View_Nav_Controlls",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, NavButtons)), __jsx(Container, {
    className: "Dash_View_SubContainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, transitions.map(({
    key,
    props,
    item
  }) => {
    return __jsx(react_spring__WEBPACK_IMPORTED_MODULE_7__["animated"].div, {
      key: key,
      style: props,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 15
      }
    }, Views[item]());
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_interface__WEBPACK_IMPORTED_MODULE_3__["withAuth"])(Dash, __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 134,
    columnNumber: 31
  }
}, "content")));

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/Dash.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ryanbreaux/Projects/Web/Clients/nps_v2/pages/Dash.js */"./pages/Dash.js");


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

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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
//# sourceMappingURL=Dash.js.map