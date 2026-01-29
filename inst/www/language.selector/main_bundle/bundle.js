/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./srcjs/main.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./srcjs/SelectLanguage.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./srcjs/SelectLanguage.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".language-select-container {\n  position: fixed;\n  bottom: 20px;\n  left: 20px;\n  display: flex;\n  align-items: center;\n}\n\n.language-select-radial-button {\n  width: 60px;\n  height: 60px;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  transition: transform 0.2s ease-in-out;\n}\n\n.language-select-radial-button:hover {\n  transform: scale(1.1);\n}\n\n/* Menu for Desktop */\n.language-select-menu {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  transition: max-width 0.5s ease, opacity 0.5s ease;\n  max-width: 0;\n  opacity: 0;\n  margin-left: 10px;\n}\n\n.language-select-menu.open {\n  max-width: 600px;\n  opacity: 1;\n}\n\n.language-select-menu-item {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: none;\n  color: white;\n  font-size: 18px;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: transform 0.2s, opacity 0.2s;\n  filter: grayscale(1);\n}\n\n.language-select-menu-item:hover {\n  transform: scale(1.1);\n  opacity: 1;\n}\n\n.language-select-menu-item-selected {\n  filter: grayscale(0) !important;\n}\n\n.language-select-menu.closed {\n    visibility: hidden;\n}\n\n/* Modal for Mobile */\n.language-select-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.3s ease-in-out, visibility 0.3s;\n  visibility: hidden;\n}\n\n.language-select-modal-content {\n  background-color: white;\n  border-radius: 10px;\n  padding: 20px;\n  width: 80%;\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transform: translateY(-20px);\n  opacity: 0;\n  animation: language-select-slideDown 0.4s forwards;\n}\n\n.language-select-modal.view {\n  opacity: 1;\n  visibility: visible;\n}\n\n.language-select-close-button {\n  align-self: flex-end;\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  margin-bottom: 10px;\n}\n\n.language-select-modal-options {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n\n.language-select-modal-item {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  border: none;\n  color: white;\n  font-size: 18px;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: transform 0.2s, opacity 0.2s;\n  filter: grayscale(1);\n}\n\n.language-select-modal-item:hover {\n  transform: scale(1.1);\n  opacity: 1;\n  filter: grayscale(0);\n}\n\n.language-select-modal:not(.view) {\n  visibility: hidden;\n}\n.language-select-modal:not(.view) .language-select-modal-content {\n  visibility: hidden;\n}\n\n\n/* Slide down animation for modal content */\n@keyframes language-select-slideDown {\n  0% {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n/* Slide up animation for modal closing */\n@keyframes language-select-slideUp {\n  0% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n}\n", "",{"version":3,"sources":["webpack://./srcjs/SelectLanguage.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,YAAY;EACZ,UAAU;EACV,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,qBAAqB;AACvB;;AAEA,qBAAqB;AACrB;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,kDAAkD;EAClD,YAAY;EACZ,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,wCAAwC;EACxC,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;EACrB,UAAU;AACZ;;AAEA;EACE,+BAA+B;AACjC;;AAEA;IACI,kBAAkB;AACtB;;AAEA,qBAAqB;AACrB;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,UAAU;EACV,kBAAkB;EAClB,qDAAqD;EACrD,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,UAAU;EACV,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,4BAA4B;EAC5B,UAAU;EACV,kDAAkD;AACpD;;AAEA;EACE,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,wCAAwC;EACxC,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;EACrB,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;;;AAGA,2CAA2C;AAC3C;EACE;IACE,UAAU;IACV,4BAA4B;EAC9B;EACA;IACE,UAAU;IACV,wBAAwB;EAC1B;AACF;;AAEA,yCAAyC;AACzC;EACE;IACE,UAAU;IACV,wBAAwB;EAC1B;EACA;IACE,UAAU;IACV,4BAA4B;EAC9B;AACF","sourcesContent":[".language-select-container {\n  position: fixed;\n  bottom: 20px;\n  left: 20px;\n  display: flex;\n  align-items: center;\n}\n\n.language-select-radial-button {\n  width: 60px;\n  height: 60px;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  transition: transform 0.2s ease-in-out;\n}\n\n.language-select-radial-button:hover {\n  transform: scale(1.1);\n}\n\n/* Menu for Desktop */\n.language-select-menu {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  transition: max-width 0.5s ease, opacity 0.5s ease;\n  max-width: 0;\n  opacity: 0;\n  margin-left: 10px;\n}\n\n.language-select-menu.open {\n  max-width: 600px;\n  opacity: 1;\n}\n\n.language-select-menu-item {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: none;\n  color: white;\n  font-size: 18px;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: transform 0.2s, opacity 0.2s;\n  filter: grayscale(1);\n}\n\n.language-select-menu-item:hover {\n  transform: scale(1.1);\n  opacity: 1;\n}\n\n.language-select-menu-item-selected {\n  filter: grayscale(0) !important;\n}\n\n.language-select-menu.closed {\n    visibility: hidden;\n}\n\n/* Modal for Mobile */\n.language-select-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.3s ease-in-out, visibility 0.3s;\n  visibility: hidden;\n}\n\n.language-select-modal-content {\n  background-color: white;\n  border-radius: 10px;\n  padding: 20px;\n  width: 80%;\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transform: translateY(-20px);\n  opacity: 0;\n  animation: language-select-slideDown 0.4s forwards;\n}\n\n.language-select-modal.view {\n  opacity: 1;\n  visibility: visible;\n}\n\n.language-select-close-button {\n  align-self: flex-end;\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  margin-bottom: 10px;\n}\n\n.language-select-modal-options {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n\n.language-select-modal-item {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  border: none;\n  color: white;\n  font-size: 18px;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: transform 0.2s, opacity 0.2s;\n  filter: grayscale(1);\n}\n\n.language-select-modal-item:hover {\n  transform: scale(1.1);\n  opacity: 1;\n  filter: grayscale(0);\n}\n\n.language-select-modal:not(.view) {\n  visibility: hidden;\n}\n.language-select-modal:not(.view) .language-select-modal-content {\n  visibility: hidden;\n}\n\n\n/* Slide down animation for modal content */\n@keyframes language-select-slideDown {\n  0% {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n/* Slide up animation for modal closing */\n@keyframes language-select-slideUp {\n  0% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./srcjs/SelectLanguage.css":
/*!**********************************!*\
  !*** ./srcjs/SelectLanguage.css ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_SelectLanguage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./SelectLanguage.css */ "./node_modules/css-loader/dist/cjs.js!./srcjs/SelectLanguage.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_SelectLanguage_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_SelectLanguage_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./srcjs/main.jsx":
/*!************************!*\
  !*** ./srcjs/main.jsx ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _select_language_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select_language.js */ "./srcjs/select_language.js");


// Initialize inputs
Object(_select_language_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ }),

/***/ "./srcjs/select_language.js":
/*!**********************************!*\
  !*** ./srcjs/select_language.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initSelectLanguage; });
/* harmony import */ var reactR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reactR */ "reactR");
/* harmony import */ var reactR__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reactR__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SelectLanguage_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectLanguage.css */ "./srcjs/SelectLanguage.css");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var SelectLanguage = function SelectLanguage(_ref) {
  var configuration = _ref.configuration,
    value = _ref.value,
    setValue = _ref.setValue;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(value.toUpperCase()),
    _useState2 = _slicedToArray(_useState, 2),
    selectedLanguage = _useState2[0],
    setSelectedLanguage = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isMenuOpen = _useState4[0],
    setIsMenuOpen = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(window.innerWidth <= 768),
    _useState6 = _slicedToArray(_useState5, 2),
    isMobile = _useState6[0],
    setIsMobile = _useState6[1];
  var modalRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var handleResize = function handleResize() {
      return setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return function () {
      return window.removeEventListener('resize', handleResize);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return function () {
      return document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);
  var handleLanguageSelect = function handleLanguageSelect(abbr) {
    setSelectedLanguage(abbr);
    setIsMenuOpen(false);
    setValue(abbr.toLowerCase());
  };

  // Get CSS class for language flag (uses bundled CSS)
  var getFlagClass = function getFlagClass(lang) {
    return "language-flag language-flag-".concat(lang.toLowerCase());
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "language-select-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "language-select-radial-button language-flag language-flag-main",
    onClick: function onClick() {
      return setIsMenuOpen(!isMenuOpen);
    }
  }), isMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "language-select-modal ".concat(isMenuOpen ? 'view' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "language-select-modal-content",
    ref: modalRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "language-select-modal-options"
  }, configuration.languages.map(function (_ref2) {
    var name = _ref2.name,
      lang = _ref2.lang;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      key: lang,
      className: "language-select-modal-item ".concat(getFlagClass(lang), " ").concat(selectedLanguage.toUpperCase() === lang.toUpperCase() ? 'language-select-menu-item-selected' : ''),
      onClick: function onClick() {
        return handleLanguageSelect(lang.toUpperCase());
      }
    }, lang.toUpperCase());
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "language-select-menu ".concat(isMenuOpen ? 'open' : 'closed')
  }, configuration.languages.map(function (_ref3) {
    var name = _ref3.name,
      lang = _ref3.lang;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      key: name,
      className: "language-select-menu-item ".concat(getFlagClass(lang), " ").concat(selectedLanguage.toUpperCase() === lang.toUpperCase() ? 'language-select-menu-item-selected' : ''),
      onClick: function onClick() {
        return handleLanguageSelect(lang.toUpperCase());
      }
    }, lang.toUpperCase());
  })));
};
function initSelectLanguage() {
  return Object(reactR__WEBPACK_IMPORTED_MODULE_0__["reactShinyInput"])('.select_language', 'language.selector.select_language', SelectLanguage);
}

/***/ }),

/***/ "react":
/*!*******************************!*\
  !*** external "window.React" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.React;

/***/ }),

/***/ "reactR":
/*!********************************!*\
  !*** external "window.reactR" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.reactR;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map