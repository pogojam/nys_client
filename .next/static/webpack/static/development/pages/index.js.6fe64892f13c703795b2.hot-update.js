webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_blocks___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/blocks/ */ "./lib/blocks/index.js");
/* harmony import */ var _lib_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/reducers */ "./lib/reducers.js");
/* harmony import */ var _lib_interface_useObserver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/interface/useObserver */ "./lib/interface/useObserver.js");
/* harmony import */ var _lib_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/components */ "./lib/components/index.js");
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/theme */ "./lib/theme.js");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/util */ "./lib/util.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var _lib_static___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/static/ */ "./lib/static/index.js");
/* harmony import */ var _lib_forms_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/forms/forms */ "./lib/forms/forms.js");
/* harmony import */ var _lib_interface_withAuth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lib/interface/withAuth */ "./lib/interface/withAuth.js");



var _jsxFileName = "/Users/ryanbreaux/Projects/Web/Clients/nps_v2/pages/index.js",
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













var Body = _lib_components__WEBPACK_IMPORTED_MODULE_7__["Layout"].Body,
    Container = _lib_components__WEBPACK_IMPORTED_MODULE_7__["Layout"].Container,
    Viewport_Container = _lib_components__WEBPACK_IMPORTED_MODULE_7__["Layout"].Viewport_Container;
var initalState = {
  scrolled: false,
  modal: false
};
var Forms = {
  Login: _lib_forms_forms__WEBPACK_IMPORTED_MODULE_12__["Login"],
  Registration: _lib_forms_forms__WEBPACK_IMPORTED_MODULE_12__["Registration"]
};

function HomePage(_ref) {
  var user = _ref.user;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(_lib_reducers__WEBPACK_IMPORTED_MODULE_5__["default"].HomePage, initalState),
      store = _useReducer[0],
      dispatch = _useReducer[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      formType = _useState[0],
      setForm = _useState[1];

  var Modal_Form = Forms[formType];
  return __jsx(Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(_lib_blocks___WEBPACK_IMPORTED_MODULE_4__["Nav"], {
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
  }), store.modal && __jsx(_lib_components__WEBPACK_IMPORTED_MODULE_7__["Modal"], {
    show: store.modal,
    hideModal: function hideModal() {
      return dispatch({
        type: "HIDE_MODAL"
      });
    },
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

var Container_1_Styles = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__Container_1_Styles",
  componentId: "sc-1bxujxe-0"
})(["overflow:hidden;.Splash_Image{width:100%;height:100%;background-image:url(\"https://res.cloudinary.com/dxjse9tsv/image/upload/v1556242581/NationalYouthSports/action-activity-athlete.jpg\");background-size:cover;position:absolute;top:0%;left:0%;z-index:-1;transition:1s cubic-bezier(0.075,0.82,0.165,1);}.Splash_Logo{position:absolute;margin:15px;}.Splash_Nav_Container{position:absolute;bottom:0;max-width:500px;width:100%;.Splash_Nav_Background{position:absolute;background-color:", ";top:0;left:0;width:250vw;height:300%;}.Splash_Nav_SubContainer{position:relative;padding:20px;}}"], _lib_theme__WEBPACK_IMPORTED_MODULE_8__["default"].colors.c1);

var Container_1 = function Container_1(_ref2) {
  var dispatch = _ref2.dispatch,
      store = _ref2.store;

  var _useObserver = Object(_lib_interface_useObserver__WEBPACK_IMPORTED_MODULE_6__["default"])({
    threshold: Object(_lib_util__WEBPACK_IMPORTED_MODULE_9__["buildThresholdList"])(20)
  }),
      _useObserver2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useObserver, 2),
      ref = _useObserver2[0],
      entries = _useObserver2[1];

  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_10__["useSpring"])(function () {
    return {
      opacity: 1,
      xyr: [-32, 0, 17],
      y: 0
    };
  }),
      _useSpring2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useSpring, 2),
      _useSpring2$ = _useSpring2[0],
      xyr = _useSpring2$.xyr,
      opacity = _useSpring2$.opacity,
      y = _useSpring2$.y,
      setAnim = _useSpring2[1];

  var isIntersecting = entries.isIntersecting;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var Scrolled_Threshold = 0.1;

    if (isIntersecting) {
      var ir = entries.intersectionRatio;
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 5
    }
  }, __jsx(Viewport_Container, {
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "Splash_Logo",
    src: "https://res.cloudinary.com/dxjse9tsv/image/upload/v1556240214/General_Icons/NYS_Logo.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "Splash_Nav_Container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_10__["animated"].div, {
    className: "Splash_Nav_Background",
    style: {
      transform: xyr.interpolate(function (x, y, r) {
        return "translate(".concat(x, "%,").concat(y, "%) rotate(").concat(r, "deg)");
      })
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_10__["animated"].div, {
    style: {
      opacity: opacity.interpolate(function (val) {
        return val;
      })
    },
    className: "Splash_Nav_SubContainer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }, __jsx(_lib_components__WEBPACK_IMPORTED_MODULE_7__["Heading"], {
    type: "Big",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }, "Spring"), __jsx(_lib_components__WEBPACK_IMPORTED_MODULE_7__["Heading"], {
    type: "Sub",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, "Register Today"), __jsx(_lib_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    type: "Small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, "Sign Up"), __jsx(_lib_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    onClick: function onClick() {
      return dispatch({
        type: "SHOW_LOGIN"
      });
    },
    type: "Small",
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  })));
};

var Container_2_Styles = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__Container_2_Styles",
  componentId: "sc-1bxujxe-1"
})(["display:flex;align-items:center;height:100%;transition:opacity 2s cubic-bezier(0.23,1,0.32,1);.Heading_Container{position:absolute;top:0;left:0;height:100%;.Heading_Container_Headings{position:sticky;top:70vh;margin-top:80vh;white-space:pre-line;align-self:self-start;z-index:1;& > *{margin-bottom:-45px;}}}.Card_Background_Container{width:100%;}.Card_Container{display:flex;flex-direction:column;justify-content:space-around;z-index:1;.Card{height:60vh;margin-top:84px;margin-bottom:20rem;background-size:cover;}& > *{}}.Background_Container{display:none;position:absolute;top:0;left:0;height:100%;width:100%;z-index:0;}.Background_Sub_Container{position:relative;height:100%;width:100%;overflow:hidden;}"]);
var Background_Stripe = Object(react_spring__WEBPACK_IMPORTED_MODULE_10__["animated"])(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__Background_Stripe",
  componentId: "sc-1bxujxe-2"
})(["position:absolute;height:15vh;width:500vw;top:0;transform:rotate(40deg) translate(0%,", "%);will-change:opacity;background-color:", ";"], function (_ref3) {
  var index = _ref3.index;
  return index * 500;
}, function (_ref4) {
  var index = _ref4.index;
  return index % 2 === 0 ? "#ffffff1f" : "#0e0d0d38";
}));
var Card_Anim = Object(react_spring__WEBPACK_IMPORTED_MODULE_10__["animated"])(_lib_blocks___WEBPACK_IMPORTED_MODULE_4__["Card"]);

var Container_2 = function Container_2(_ref5) {
  var store = _ref5.store;
  var fadeIn = Object(react_spring__WEBPACK_IMPORTED_MODULE_10__["useTrail"])(10, {
    opacity: store.scrolled ? 1 : 0
  });

  var _useObserver3 = Object(_lib_interface_useObserver__WEBPACK_IMPORTED_MODULE_6__["default"])({
    threshold: Object(_lib_util__WEBPACK_IMPORTED_MODULE_9__["buildThresholdList"])(40)
  }),
      _useObserver4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useObserver3, 2),
      ref = _useObserver4[0],
      entries = _useObserver4[1];

  var _useSpring3 = Object(react_spring__WEBPACK_IMPORTED_MODULE_10__["useSpring"])(function () {
    return {
      xy: [0, 0]
    };
  }),
      _useSpring4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useSpring3, 2),
      swoopIn = _useSpring4[0],
      setAnim = _useSpring4[1];

  var calcWave = function calcWave(range, wl) {
    var x = range;
    var y = range;
    return [0, 0];
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var isIntersecting = entries.isIntersecting;

    if (isIntersecting) {
      var ir = entries.intersectionRatio;
      var range = (ir - 0.5) * entries.boundingClientRect.height;
      var wl = entries.boundingClientRect.width / 3;
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 5
    }
  }, __jsx(Container_2_Styles, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "Heading_Container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 9
    }
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_10__["animated"].div, {
    className: "Heading_Container_Headings",
    style: _objectSpread({}, fadeIn[4], {
      transform: swoopIn.xy.interpolate(function (x, y) {
        return "translate(".concat(x, "px,").concat(y, "px)");
      })
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 11
    }
  }, __jsx(_lib_components__WEBPACK_IMPORTED_MODULE_7__["Heading"], {
    type: "Big",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 13
    }
  }, "The Best"), __jsx(_lib_components__WEBPACK_IMPORTED_MODULE_7__["Heading"], {
    type: "Big",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 13
    }
  }, "League In"), __jsx(_lib_components__WEBPACK_IMPORTED_MODULE_7__["Heading"], {
    type: "Big",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 13
    }
  }, "Scottsdale"))), __jsx("div", {
    className: "Card_Background_Container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "Card_Container",
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 13
    }
  }), __jsx(Card_Anim, {
    background: "https://res.cloudinary.com/dxjse9tsv/image/upload/v1586595987/NationalYouthSports/adria-crehuet-cano-yndHHu2kJAw-unsplash.jpg",
    title: "Fun",
    style: fadeIn[1],
    img: _lib_static___WEBPACK_IMPORTED_MODULE_11__["Hand_Slap"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 13
    }
  }), __jsx(Card_Anim, {
    background: "https://res.cloudinary.com/dxjse9tsv/image/upload/v1586593941/NationalYouthSports/johann-rosch-JgDjK1c4UIU-unsplash.jpg",
    title: "Tournament",
    style: fadeIn[2],
    img: _lib_static___WEBPACK_IMPORTED_MODULE_11__["Horn"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 13
    }
  }), __jsx(Card_Anim, {
    background: "https://res.cloudinary.com/dxjse9tsv/image/upload/v1586594243/NationalYouthSports/ben-hershey-Ql2n3JsUpww-unsplash.jpg",
    title: "Modern",
    style: fadeIn[3],
    img: _lib_static___WEBPACK_IMPORTED_MODULE_11__["Computer"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "Background_Container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "Background_Sub_Container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 13
    }
  }, __jsx(Background_Stripe, {
    style: fadeIn[5],
    index: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 15
    }
  }), __jsx(Background_Stripe, {
    style: fadeIn[6],
    index: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 15
    }
  }), __jsx(Background_Stripe, {
    style: fadeIn[7],
    index: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 15
    }
  }), __jsx(Background_Stripe, {
    style: fadeIn[8],
    index: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 15
    }
  }), __jsx(Background_Stripe, {
    style: fadeIn[9],
    index: 5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 15
    }
  }))))));
};

var Container_3_Styles = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "pages__Container_3_Styles",
  componentId: "sc-1bxujxe-3"
})(["background:beige;height:100%;"]);

var Container_3 = function Container_3() {
  return __jsx(Viewport_Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 5
    }
  }, __jsx(Container_3_Styles, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_interface_withAuth__WEBPACK_IMPORTED_MODULE_13__["default"])(HomePage));

/***/ })

})
//# sourceMappingURL=index.js.6fe64892f13c703795b2.hot-update.js.map