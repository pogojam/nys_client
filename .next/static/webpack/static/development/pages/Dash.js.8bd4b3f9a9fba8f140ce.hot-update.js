webpackHotUpdate("static/development/pages/Dash.js",{

/***/ "./lib/blocks/Card.js":
/*!****************************!*\
  !*** ./lib/blocks/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ "./lib/theme.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util */ "./lib/util.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components */ "./lib/components/index.js");
/* harmony import */ var _components_style_templates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/style_templates */ "./lib/components/style_templates.js");



var _this = undefined,
    _jsxFileName = "/Users/ryanbreaux/Projects/Web/Clients/nps_v2/lib/blocks/Card.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var styles = _theme__WEBPACK_IMPORTED_MODULE_4__["default"].cards;

var Card = function Card(_ref) {
  var background = _ref.background,
      title = _ref.title,
      caption = _ref.caption,
      Img = _ref.img,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["background", "title", "caption", "img"]);

  return __jsx(Styled_Card, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    background: background,
    className: "Card"
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }), __jsx("div", {
    className: "Heading_Caption_Container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, title && __jsx(_components__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
    className: "Heading",
    type: "Big",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, title), caption && __jsx("p", {
    className: "Card_Caption",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 19
    }
  }, caption)), Img && __jsx(Img, {
    className: "Card_Img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }));
};

var Styled_Card = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Card__Styled_Card",
  componentId: "at05zo-0"
})(["align-items:center;grid-template-columns:1fr 2fr;background:url(", ");.Card{}svg{min-height:15rem;height:40vh;height:100%;}.Card_Img{height:100%;justify-self:center;}text-align:center;display:grid;.Heading_Caption_Container{}", ""], function (_ref2) {
  var background = _ref2.background;
  return background;
}, Object(_components_style_templates__WEBPACK_IMPORTED_MODULE_7__["default"])(styles.cards));
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=Dash.js.8bd4b3f9a9fba8f140ce.hot-update.js.map