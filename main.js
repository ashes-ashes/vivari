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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../assets/terrarium.png */ "./src/assets/terrarium.png"));
// Module
exports.push([module.i, "\nhtml {\n\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    background-color: black;\n    font-family: 'Open Sans', sans-serif;\n}\n\nmain {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    background-image: linear-gradient(#232829, black);\n    padding-top: 100px;\n    width: 100%;\n}\n\naside {\n    display: flex;\n    width: 100%;\n    flex-direction: column;\n    align-items: center;\n    width: 400px;\n}\n\n#vivari {\n    border: 2px solid lightgray;\n    background-color: darkslategrey;\n    background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n    background-size: 800px 500px;\n}\n\nh1 {\n    color: palegoldenrod;\n    font-size: 50px;\n    /* margin: 10px; */\n    font-family: 'Mansalva', cursive;\n    text-shadow: 0px 0px 20px rgba(255,254,232,0.6);\n}\n\nli {\n    font-size: 20px;\n    color: dimgray;\n}\n\na {\n    font-size: 20px;\n    color: dimgray;\n\n    transition-property: text-shadow, color;\n    transition-duration: .2s;\n}\n\na:hover {\n    color: palegoldenrod;\n    text-shadow: 0px 0px 5px rgba(255,254,232, 0.6);\n}\n\na:active {\n    text-shadow: 0px 0px 10px rgba(255,254,232);\n}\n\n\nfooter ul {\n    width: 1200px;\n    margin: auto;\n    margin-top: 80px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    \n    opacity: 0;\n    transition-property: opacity;\n    transition-duration: 2s;\n}\n\nfooter ul.vis {\n    opacity: 1\n}\n\narticle {\n    color: palegoldenrod;\n    text-shadow: 0px 0px 10px rgba(255,254,232, 0.8);\n    font-size: 20px;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    height: 400px;\n}\n\narticle p {\n    opacity: 0;\n    transition-property: opacity;\n    transition-duration: 2s;\n}\n\narticle p.vis {\n    opacity: 1;\n}\n\n@media only screen and (max-width: 1200px) {\n\n  main {\n      flex-direction: column-reverse;\n      align-items: center;\n      padding-top: 50px;\n  }\n\n  article {\n    flex-direction: row;\n    height: auto;\n    margin: 20px;\n    width: 800px;\n  }\n\n\n  footer ul {\n      width: 800px;\n      margin-top: 20px;\n  }\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n\tbackground-color: transparent;\n\tcolor: inherit;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}", ""]);


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
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, needQuotes) {
  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

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

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
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
  var css = remove ? '' : obj.css; // For old IE

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
  }

  if (sourceMap && btoa) {
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
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/assets/mote.png":
/*!*****************************!*\
  !*** ./src/assets/mote.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAABRNAAAUTQGUyo0vAAACnGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8ZXhpZjpGb2NhbFBsYW5lWFJlc29sdXRpb24+MTMyPC9leGlmOkZvY2FsUGxhbmVYUmVzb2x1dGlvbj4KICAgICAgICAgPGV4aWY6Rm9jYWxQbGFuZVJlc29sdXRpb25Vbml0PjI8L2V4aWY6Rm9jYWxQbGFuZVJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpGb2NhbFBsYW5lWVJlc29sdXRpb24+MTMyPC9leGlmOkZvY2FsUGxhbmVZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CtzpqsoAAAk4SURBVEgNXVfZjh1JEY2IXOrWXXqxfXuQh1nwMIywJV4sJCReLPEN/p7x/ATvPPsP4MWPg4SRQMICRmpmFTPdttvdd6nKyswITvbYYuB2Z9et6qo8sZw4EcVmxNQ+nzxiuvs3fnpxKofvnMj59pW8399iv9yIG3q56gfxqRP2hWWoTEs8syXS3pmVvV0UZ4v9THM36NHlRvNsoePySH96cqZPNis7/+3ant17bB9/TMaM9T3wI37y5ImcnJ/LfLeW7tZKGqAv3n23MR8Wg/PmnAtBpBRhiUyTMkUx08n2VSxIrTOutez6mnFMkuvB22NNm5XuT8717tlaH58D/Nn34O4RP5In9Bp0vZZ+Ht2WXnpWDUSz6OfadeK76FwX2GaB/cw77UK0zrFFZR/ngfxCYJh4N81IahSZyUT9lklsQQE+Hty8oHsI0vnil3Tv3jNzDx6QO1nA0wY6RbcT9fPsInaNNTCQ3SwE7T27uXc0d5F7WNFTkN7hf3NvHUIHMySoUydcRUy4mxFPuHlvTLszodR5auDnAH//d58T/+lP98PNzcq9AdWc4gz+RJPOR5s5spl4PwuRAQBjHCIh7Dw5KlSRZKuuSs5mE36SljJW4rFMPE6syac8daGbJpUyxKnuzxF2ulv94dmJdNXLbhh8vy5Bs+ui6MwLPApuHgPPGZ5qlF4iwi0UCVElM3iGzJsWU5qwZzKnQ65hHyfy1cHtTUHAHb/IiSR0tJ1e0sF6TU9Xp+ZnYG/oxOmNmQ85RO1q5x3PZ50tJNJSvV9R5KXvZU7e9cwOwPhRZi+Im2olLYk6GXjSfRxKBwN82QPaOwEvbLcX01rs9vFKR0l6vx/Zh8OV7PPea6rB+wxvpffOgStxxVEOwZoDiv6AnVuS8zNy4I2EOTHcrWVEVYxIMaJe9+bzVoWjDch1NZ6ZWc1VD6PqUKTuX3Htwko/T535Tb10iwWKcdLgo3QOxJHoF9zTAffuiDt3RCEcAHQFZw8lzk+IHAy5cUB1+8r01XMj21HOV4o0RFC7SkEmkADN1VMo3kquVBEErlO9rLMODPZ9L35P4GYMzldwE+Hs3IJnsuLeH1CIxxy7m+Lntym8dYfdBzeI3opEfSCHOrGvNqT/fEFy8W/ml6fEmZ22yGrx1ab2KV4mrzkfFp93817C5qX4cOFQe9V3UgPCDIPdjAPNEd4lcgrP4pLFjjh8+CG5X79D/LYjWmCxwXMm/ghsvz0n+jRKIFa7MCShaKcTT3lEXY62q2OVkBLSMwJvcXwD0jSbxLrgHGtgANcAkYihZ88gU1hy8GuO7wH0NwD9EJ62T6NVYxbKCSVMdH9Bfnab7PeZw/7cat06r4N1vkcKUZyI96ge9e2OgHc5TCJDjgLmOwC56l3Lc4A4dOQRBN8tJR68R+5XPyF+N9K1rqOgmqcE2SAP4Ob1DOr7EYj3ixMYfwS+Q78ISzpuQkQudF6Q/XKNJ2HFEP3K3PTXIAooE5ARAsgQZYfA4WFeHzO/20FHANAAseAjgNt6bQCOvISGfzBnWR2jzhcQHY/AQGzMe1ddxv7s/TXeMZ6EBqHTdG0PD2lHMbC1GDrsi6M5klVH3Atxu9w8bKgN9Ief63OQGyngW0e4Ffy6zgXOcdbEmlH4GQt4l63D/fDxN9+Bit2bN+ohUPV6w2vA16Cw7s29b4xAxeJra1eSW8eCS6z/vel/v72Cx1BaVBzamlMlExVBf4PrqpAGopH0aiTetV1x2rZql6H838f79TkC2ey0DQr4bIOAZVhQhLRW7F4y6OycjsBpeLr0BpmKasXrBDCHIqeshYrhwZpAWtToN+emn+2IEhArFoJ4bQAwr8HbNaTALmHV37dUNy+s6g6WZ9w2wZ/smcrUfHEFbW7So7wx2dQBJpV2W5OXUlD00N8R1xJUAMfd11T/+i3ZPxLBIjKsa/AKoIIFhaIN4vPppeU/f47nLsjQFUoeKaNxFJv2Q2kPFTSfqhH6eeDRJGReY8hFA3KTdHKzOlqSAeW5w5jTc3WvqHzxGfEfEMH0LtF7oOIB4oqOScilvcSef3xF9S/fUNl8yTZeNI8tYxUbzHhEHaVtqugefRnTVj1Bq8uQdAMhRchzlZom9NEYdMepoi4zJgzQXe1r1s8Sx/2W3c/fJ1pHsw55vUqmzxPpv55TfvGFTtvvrJQrS2VDU92Wsew5GYA5OVcnJL8e8aKOqwv1S8xGWQOCPWVIbxKB4iQLYCdqsEDRwE4QBPzPNpxeUHj+Lcn8JtmLS8PUAI8A7HZa8xUStaVcLinlVzaUjRbeCZVhRMOELCKTVGo/aD2N5iumwbSfyhw1jiQn3OgnTAAOEwHmK64GMvUgnCER4uZSL6/IbeetElhCAW/RjxPA0RZT3lLSK4Be5tEwaubdVHgEqZOgQWRMC37Xpk807IxRFFNr9SXlGVo71F0YBUQBUyRYHFQqNsDkpkObs+A6BEVQiVA99HfcUhCQBCK1SO1syFswZqsj7SCHO2dlmLJNjoaSroCTkl5eTOqv6Mf1WE55px4TFQarJjCoAwvV/ASaQBDQ4JJl2ruudBCGiHEOswXMqhCSNvqgEtBoQU2QqWLabROv6b4kN+Jiwsg2DeiOBzLVCxrr5mdr88PFqcXlSd1Dym7Arud1wBgZ0NpR+jFUDFdZJkyAGBjzyBFBCRhrRSHubSxvwx7KKzPKBpWflPJYMo0lGdpgTSmHLG6bF/Wk7Fypd9eD3n3wQP394zv69KtT2sRVpdsRjbifdlu4iikBvwgNOkjvk6YSYwi+tTcMldDg1iyaLjVZRkFjyNHEqAyeSilTCmEKSN8NKAQkojbQy6/O9PHxHXtIj8zTs3t2/y7p0zunND87sUX1kM8rwzys2KY2Nk+TDxLDmK/QBSw7miEtGXFukxzw4HjVCTSDARk5j9khAqjbo658kTd66E6uQZuT9x8+RjLfvML833tTmzyvqHM/Wvay1Y0LTWl7vCiUSUa8xswR6BGvMDP0hD3YXXNWTVHz9WtMqRMqZ+UOayNue39qnp4C9CFAm+Q3VcfC39bgP8G6+5Bpfc7PXr9Dvbi1kX5YyUmX+Qqzkk8jaLXg7b7w6gBCeUW0nO+tdJ3qubfrFzaU5xvAafulna3X+gA5JYT3DWjD/A/dXvXibPeecQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/terrarium.png":
/*!**********************************!*\
  !*** ./src/assets/terrarium.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b219da93cf4fd6ade309fcd180cf09b9.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./properties */ "./src/properties.js");
/* harmony import */ var _terrarium_terrarium_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terrarium/terrarium_view */ "./src/terrarium/terrarium_view.js");
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_3__);





var fetchWindowProps = function fetchWindowProps(canvas) {
  var props = canvas.getBoundingClientRect();
  _properties__WEBPACK_IMPORTED_MODULE_0__["default"].window.offset.x = props.x;
  _properties__WEBPACK_IMPORTED_MODULE_0__["default"].window.offset.y = props.y;
  _properties__WEBPACK_IMPORTED_MODULE_0__["default"].terrarium.height = props.height;
  _properties__WEBPACK_IMPORTED_MODULE_0__["default"].terrarium.width = props.width;
};

window.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById('vivari');
  var ctx = canvas.getContext("2d");
  var terrarium = new _terrarium_terrarium_view__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, canvas);
  fetchWindowProps(canvas);
  terrarium.start();
  terrarium.terrarium.addPhysicsObject(coin);
  setTimeout(function () {
    var p = document.getElementById('instructions1');
    p.classList.add('vis');
  }, 1000);
  setTimeout(function () {
    var p = document.getElementById('instructions2');
    p.classList.add('vis');
  }, 5000);
  setTimeout(function () {
    var links = document.getElementById('hireme');
    links.classList.add('vis');
  }, 9000);
  setTimeout(function () {
    var instructions = document.getElementsByClassName('instruction');
    Array.from(instructions).forEach(function (el) {
      el.classList.remove('vis');
    }, 20000);
  });
  document.getElementById("???").addEventListener('click', function () {
    terrarium.terrarium.addMote();
  });
  window.onresize = fetchWindowProps(canvas);
});

/***/ }),

/***/ "./src/objects/life/critter/critter.js":
/*!*********************************************!*\
  !*** ./src/objects/life/critter/critter.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _life__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../life */ "./src/objects/life/life.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ "./src/utils.js");
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../properties */ "./src/properties.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Critter =
/*#__PURE__*/
function (_Life) {
  _inherits(Critter, _Life);

  function Critter(options) {
    var _this;

    _classCallCheck(this, Critter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Critter).call(this, options));
    _this.hunger = 0;
    return _this;
  }

  _createClass(Critter, [{
    key: "hop",
    value: function hop() {
      this.vel.x += _utils__WEBPACK_IMPORTED_MODULE_1__["default"].randInRange(-2, 2) * this.hopsPower + _properties__WEBPACK_IMPORTED_MODULE_2__["default"].physics.groundFriction;
      this.vel.y = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].randInRange(2, 4) * this.hopsPower + _properties__WEBPACK_IMPORTED_MODULE_2__["default"].physics.gravity.y;
    }
  }]);

  return Critter;
}(_life__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Critter);

/***/ }),

/***/ "./src/objects/life/critter/mote.js":
/*!******************************************!*\
  !*** ./src/objects/life/critter/mote.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _critter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./critter */ "./src/objects/life/critter/critter.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ "./src/utils.js");
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../properties */ "./src/properties.js");
/* harmony import */ var _assets_mote_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/mote.png */ "./src/assets/mote.png");
/* harmony import */ var _assets_mote_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_mote_png__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Mote =
/*#__PURE__*/
function (_Critter) {
  _inherits(Mote, _Critter);

  function Mote(options) {
    var _this;

    _classCallCheck(this, Mote);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Mote).call(this, options));
    _this.sprite = new Image(30, 30);
    _this.sprite.src = _assets_mote_png__WEBPACK_IMPORTED_MODULE_3___default.a;
    _this.hopsPower = 10;
    return _this;
  }

  _createClass(Mote, [{
    key: "move",
    value: function move() {
      _get(_getPrototypeOf(Mote.prototype), "move", this).call(this);

      if (Math.random() < 0.01) {
        this.hop();
      }
    }
  }]);

  return Mote;
}(_critter__WEBPACK_IMPORTED_MODULE_0__["default"]);

window.coin = new Mote({
  size: {
    x: 30,
    y: 30
  },
  isAnimated: false,
  ageFrames: {
    0: [{
      x: 0,
      y: 0
    }, {
      x: 31,
      y: 0
    }, {
      x: 61,
      y: 0
    }]
  }
});
/* harmony default export */ __webpack_exports__["default"] = (Mote);

/***/ }),

/***/ "./src/objects/life/life.js":
/*!**********************************!*\
  !*** ./src/objects/life/life.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _physics_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../physics_object */ "./src/objects/physics_object.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Life =
/*#__PURE__*/
function (_PhysicsObject) {
  _inherits(Life, _PhysicsObject);

  function Life(options) {
    var _this;

    _classCallCheck(this, Life);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Life).call(this, options));
    _this.isMature = false;
    _this.ageFrames = options.ageFrames || {};
    _this.matureAge = options.matureAge;
    return _this;
  }

  _createClass(Life, [{
    key: "move",
    value: function move() {
      this.grow();

      _get(_getPrototypeOf(Life.prototype), "move", this).call(this);
    }
  }, {
    key: "grow",
    value: function grow() {
      if (Object.keys(this.ageFrames).includes(this.age)) {
        this.frames = this.ageFrames[this.age];
      }
    }
  }]);

  return Life;
}(_physics_object__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Life);

/***/ }),

/***/ "./src/objects/physics_object.js":
/*!***************************************!*\
  !*** ./src/objects/physics_object.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../properties */ "./src/properties.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var PhysicsObject =
/*#__PURE__*/
function () {
  function PhysicsObject(options) {
    _classCallCheck(this, PhysicsObject);

    this.sprite = options.sprite;
    this.clip = options.clip || {
      x: 0,
      y: 0
    };
    this.pos = options.pos || {
      x: _properties__WEBPACK_IMPORTED_MODULE_0__["default"].terrarium.width / 2,
      y: 100
    };
    this.vel = {
      x: 0,
      y: 0
    };
    this.size = options.size;
    this.imgsize = options.imgsize || options.size;
    this.imgpos = options.imgpos || {
      x: 0,
      y: 0
    };
    this.age = 0;
    this.weight = options.weight || _properties__WEBPACK_IMPORTED_MODULE_0__["default"].physics.impact * 10;
    this.frame = 0;
    this.isAnimated = options.isAnimated || false;
    this.frames = options.frames || [this.clip];
    this.frameLength = options.frameLength || _properties__WEBPACK_IMPORTED_MODULE_0__["default"].window.frameLength;
    this.held = false;
    this.onGround = false;

    function advanceFrame() {
      if (this.isAnimated || this.frame !== 0) {
        this.frame < this.frames.length - 1 ? this.frame++ : this.frame = 0;
      }
    }

    this.animate = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].frameThrottle(this.frameLength, advanceFrame, this);
  }

  _createClass(PhysicsObject, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.drawImage(this.sprite, this.frames[this.frame].x, this.frames[this.frame].y, this.imgsize.x, this.imgsize.y, this.pos.x + this.imgpos.x, this.pos.y + this.imgpos.y, this.imgsize.x, this.imgsize.y);
    }
  }, {
    key: "move",
    value: function move() {
      if (!this.held) {
        this.applyFriction();
        this.deflect();
        this.pos = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].addVectors(this.pos, this.vel);
        this.applyGravity();
      }

      this.age++;
    }
  }, {
    key: "applyGravity",
    value: function applyGravity() {
      if (this.pos.y + this.size.y < _properties__WEBPACK_IMPORTED_MODULE_0__["default"].terrarium.groundHeight) {
        this.onGround = false;
        this.vel = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].addVectors(this.vel, _properties__WEBPACK_IMPORTED_MODULE_0__["default"].physics.gravity);
      } else if (this.pos.y + this.size.y >= _properties__WEBPACK_IMPORTED_MODULE_0__["default"].terrarium.groundHeight) {
        this.onGround = true;
        this.pos.y = _properties__WEBPACK_IMPORTED_MODULE_0__["default"].terrarium.groundHeight - this.size.y;
        this.vel.y = -(this.vel.y - this.weight);
      }
    }
  }, {
    key: "applyFriction",
    value: function applyFriction() {
      if (this.onGround) {
        if (this.vel.x < -_properties__WEBPACK_IMPORTED_MODULE_0__["default"].physics.groundFriction) {
          this.vel.x += _properties__WEBPACK_IMPORTED_MODULE_0__["default"].physics.groundFriction;
        } else if (this.vel.x > _properties__WEBPACK_IMPORTED_MODULE_0__["default"].physics.groundFriction) {
          this.vel.x -= _properties__WEBPACK_IMPORTED_MODULE_0__["default"].physics.groundFriction;
        } else {
          this.vel.x = 0;
        }
      }
    }
  }, {
    key: "deflect",
    value: function deflect() {
      if (this.pos.x <= 0 || this.pos.x + this.size.x >= _properties__WEBPACK_IMPORTED_MODULE_0__["default"].terrarium.width) {
        this.vel.x = -(this.vel.x / _properties__WEBPACK_IMPORTED_MODULE_0__["default"].physics.impact);
        this.pos.x <= 0 ? this.pos.x = 0 : this.pos.x = _properties__WEBPACK_IMPORTED_MODULE_0__["default"].terrarium.width - this.size.x;
      }
    }
  }, {
    key: "accelerate",
    value: function accelerate(vector) {
      this.vel = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].addVectors(this.vel, vector);
    }
  }, {
    key: "beDragged",
    value: function beDragged(prevPos, mousePos) {
      this.pos = {
        x: mousePos.x - this.size.x / 2,
        y: mousePos.y - this.size.y / 2
      };
      this.vel = {
        x: this.pos.x - this.prevPos.x,
        y: this.pos.y - this.prevPos.y
      };
      this.prevPos = this.pos;
    }
  }, {
    key: "startDrag",
    value: function startDrag() {
      this.held = true;
      this.prevPos = this.pos;
    }
  }, {
    key: "endDrag",
    value: function endDrag() {
      this.held = false;
    }
  }, {
    key: "doesContainPoint",
    value: function doesContainPoint(point) {
      var top = this.pos.y;
      var bottom = this.pos.y + this.size.y;
      var left = this.pos.x;
      var right = this.pos.x + this.size.x;

      if (top <= point.y && bottom >= point.y && left <= point.x && right >= point.x) {
        return true;
      } else {
        return false;
      }
    } // advanceFrame() {
    //     if (this.isAnimated || this.frame !== 0) {
    //         this.frame < this.frames.length - 1 ? this.frame++ : this.frame = 0;
    //     }
    // }

  }]);

  return PhysicsObject;
}();

/* harmony default export */ __webpack_exports__["default"] = (PhysicsObject);

/***/ }),

/***/ "./src/properties.js":
/*!***************************!*\
  !*** ./src/properties.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var properties = {
  window: {
    offset: {
      x: 0,
      y: 0
    },
    tickLength: 20,
    frameLength: 5
  },
  terrarium: {
    height: 500,
    width: 800,
    groundHeight: 400
  },
  physics: {
    gravity: {
      x: 0,
      y: 3
    },
    impact: 3,
    groundFriction: 2
  },
  sidebar: {
    width: 200
  }
};
/* harmony default export */ __webpack_exports__["default"] = (properties);

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/terrarium/terrarium.js":
/*!************************************!*\
  !*** ./src/terrarium/terrarium.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _objects_physics_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../objects/physics_object */ "./src/objects/physics_object.js");
/* harmony import */ var _objects_life_critter_mote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../objects/life/critter/mote */ "./src/objects/life/critter/mote.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Terrarium =
/*#__PURE__*/
function () {
  function Terrarium() {
    _classCallCheck(this, Terrarium);

    this.physicsObjects = [];
    this.heldObj = null;
    this.addPhysicsObject = this.addPhysicsObject.bind(this);
  }

  _createClass(Terrarium, [{
    key: "draw",
    value: function draw(ctx) {
      this.physicsObjects.forEach(function (obj) {
        obj.draw(ctx);
      });
    }
  }, {
    key: "move",
    value: function move() {
      this.physicsObjects.forEach(function (obj) {
        obj.move();
      });
    }
  }, {
    key: "addPhysicsObject",
    value: function addPhysicsObject(obj) {
      this.physicsObjects.push(obj);
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(mousePos) {
      var target = this.physicsObjects.find(function (obj) {
        return obj.doesContainPoint(mousePos);
      });

      if (target) {
        target.startDrag();
        this.heldObj = target;
      }
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp() {
      if (this.heldObj) {
        this.heldObj.endDrag();
        this.heldObj = null;
      }
    }
  }, {
    key: "handleDrag",
    value: function handleDrag(mousePos) {
      if (this.heldObj) {
        var prevPos = this.heldObj.pos;
        this.heldObj.beDragged(prevPos, mousePos);
      }
    }
  }, {
    key: "addMote",
    value: function addMote() {
      this.addPhysicsObject(new _objects_life_critter_mote__WEBPACK_IMPORTED_MODULE_1__["default"]({
        size: {
          x: 30,
          y: 30
        },
        isAnimated: false,
        ageFrames: {
          0: [{
            x: 0,
            y: 0
          }, {
            x: 31,
            y: 0
          }, {
            x: 61,
            y: 0
          }]
        }
      }));
    }
  }]);

  return Terrarium;
}();

/* harmony default export */ __webpack_exports__["default"] = (Terrarium);

/***/ }),

/***/ "./src/terrarium/terrarium_view.js":
/*!*****************************************!*\
  !*** ./src/terrarium/terrarium_view.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _terrarium__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terrarium */ "./src/terrarium/terrarium.js");
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../properties */ "./src/properties.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var TerrariumView =
/*#__PURE__*/
function () {
  function TerrariumView(ctx, canvas) {
    _classCallCheck(this, TerrariumView);

    this.terrarium = new _terrarium__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.ctx = ctx;
    this.canvas = canvas;
    this.mousePos = {
      x: null,
      y: null
    };
    this.mouseDown = false;
    this.setupMouse.bind(this);
  }

  _createClass(TerrariumView, [{
    key: "start",
    value: function start() {
      var _this = this;

      setInterval(function () {
        _this.ctx.clearRect(0, 0, _properties__WEBPACK_IMPORTED_MODULE_1__["default"].terrarium.width, _properties__WEBPACK_IMPORTED_MODULE_1__["default"].terrarium.height);

        _this.terrarium.move();

        _this.terrarium.draw(_this.ctx);
      }, _properties__WEBPACK_IMPORTED_MODULE_1__["default"].window.tickLength);
      this.setupMouse();
    }
  }, {
    key: "setupMouse",
    value: function setupMouse() {
      var _this2 = this;

      this.canvas.addEventListener('mousemove', function (e) {
        _this2.mousePos.x = e.clientX - _properties__WEBPACK_IMPORTED_MODULE_1__["default"].window.offset.x;
        _this2.mousePos.y = e.clientY - _properties__WEBPACK_IMPORTED_MODULE_1__["default"].window.offset.y;

        if (_this2.mouseDown = true) {
          _this2.terrarium.handleDrag(_this2.mousePos);
        }
      });
      this.canvas.addEventListener('mousedown', function (e) {
        _this2.mousePos.x = e.clientX - _properties__WEBPACK_IMPORTED_MODULE_1__["default"].window.offset.x;
        _this2.mousePos.y = e.clientY - _properties__WEBPACK_IMPORTED_MODULE_1__["default"].window.offset.y;

        _this2.terrarium.handleMouseDown(_this2.mousePos);

        _this2.mouseDown = true;
      });
      this.canvas.addEventListener('mouseup', function (e) {
        _this2.terrarium.handleMouseUp(_this2.mousePos);

        _this2.mouseDown = false;
      });
    }
  }]);

  return TerrariumView;
}();

/* harmony default export */ __webpack_exports__["default"] = (TerrariumView);

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Util = {
  addVectors: function addVectors(vec1, vec2) {
    return {
      x: vec1.x + vec2.x,
      y: vec1.y + vec2.y
    };
  },
  findVector: function findVector(point1, point2) {
    return {
      x: point2.x - point1.x,
      y: point2.y - point1.y
    };
  },
  frameThrottle: function frameThrottle(delay, func, context, args1) {
    var countdown = delay;
    return function (args2) {
      var args = Object.assign({}, args1, args2);

      if (countdown === 0) {
        func.apply(context, args);
        countdown = delay;
      } else {
        countdown--;
      }
    };
  },
  randInRange: function randInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Util);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map