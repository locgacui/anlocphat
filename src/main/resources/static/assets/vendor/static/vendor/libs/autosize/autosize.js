/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./static/vendor/libs/autosize/autosize.js":
/*!*************************************************!*\
  !*** ./static/vendor/libs/autosize/autosize.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n/*\n * ATTENTION: The \"eval\" devtool has been used (maybe by default in mode: \"development\").\n * This devtool is neither made for production nor for readable output files.\n * It uses \"eval()\" calls to create a separate source file in the browser devtools.\n * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)\n * or disable the default devtool with \"devtool: false\".\n * If you are looking for production-ready output files, see mode: \"production\" (https://webpack.js.org/configuration/mode/).\n */\n(function webpackUniversalModuleDefinition(root, factory) {\n  if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var i, a; }\n})(self, function () {\n  return /******/function () {\n    // webpackBootstrap\n    /******/\n    \"use strict\";\n\n    /******/\n    var __webpack_modules__ = {\n      /***/\"./node_modules/autosize/dist/autosize.esm.js\": (\n      /*!****************************************************!*\\\n        !*** ./node_modules/autosize/dist/autosize.esm.js ***!\n        \\****************************************************/\n      /***/\n      function node_modulesAutosizeDistAutosizeEsmJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {\n        eval(\"__webpack_require__.r(__webpack_exports__);\\nvar e=new Map;function t(t){var o=e.get(t);o&&o.destroy()}function o(t){var o=e.get(t);o&&o.update()}var r=null;\\\"undefined\\\"==typeof window?((r=function(e){return e}).destroy=function(e){return e},r.update=function(e){return e}):((r=function(t,o){return t&&Array.prototype.forEach.call(t.length?t:[t],function(t){return function(t){if(t&&t.nodeName&&\\\"TEXTAREA\\\"===t.nodeName&&!e.has(t)){var o,r=null,n=window.getComputedStyle(t),i=(o=t.value,function(){a({testForHeightReduction:\\\"\\\"===o||!t.value.startsWith(o),restoreTextAlign:null}),o=t.value}),l=function(o){t.removeEventListener(\\\"autosize:destroy\\\",l),t.removeEventListener(\\\"autosize:update\\\",s),t.removeEventListener(\\\"input\\\",i),window.removeEventListener(\\\"resize\\\",s),Object.keys(o).forEach(function(e){return t.style[e]=o[e]}),e.delete(t)}.bind(t,{height:t.style.height,resize:t.style.resize,textAlign:t.style.textAlign,overflowY:t.style.overflowY,overflowX:t.style.overflowX,wordWrap:t.style.wordWrap});t.addEventListener(\\\"autosize:destroy\\\",l),t.addEventListener(\\\"autosize:update\\\",s),t.addEventListener(\\\"input\\\",i),window.addEventListener(\\\"resize\\\",s),t.style.overflowX=\\\"hidden\\\",t.style.wordWrap=\\\"break-word\\\",e.set(t,{destroy:l,update:s}),s()}function a(e){var o,i,l=e.restoreTextAlign,s=void 0===l?null:l,d=e.testForHeightReduction,u=void 0===d||d,c=n.overflowY;if(0!==t.scrollHeight&&(\\\"vertical\\\"===n.resize?t.style.resize=\\\"none\\\":\\\"both\\\"===n.resize&&(t.style.resize=\\\"horizontal\\\"),u&&(o=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push([e.parentNode,e.parentNode.scrollTop]),e=e.parentNode;return function(){return t.forEach(function(e){var t=e[0],o=e[1];t.style.scrollBehavior=\\\"auto\\\",t.scrollTop=o,t.style.scrollBehavior=null})}}(t),t.style.height=\\\"\\\"),i=\\\"content-box\\\"===n.boxSizing?t.scrollHeight-(parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)):t.scrollHeight+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),\\\"none\\\"!==n.maxHeight&&i>parseFloat(n.maxHeight)?(\\\"hidden\\\"===n.overflowY&&(t.style.overflow=\\\"scroll\\\"),i=parseFloat(n.maxHeight)):\\\"hidden\\\"!==n.overflowY&&(t.style.overflow=\\\"hidden\\\"),t.style.height=i+\\\"px\\\",s&&(t.style.textAlign=s),o&&o(),r!==i&&(t.dispatchEvent(new Event(\\\"autosize:resized\\\",{bubbles:!0})),r=i),c!==n.overflow&&!s)){var v=n.textAlign;\\\"hidden\\\"===n.overflow&&(t.style.textAlign=\\\"start\\\"===v?\\\"end\\\":\\\"start\\\"),a({restoreTextAlign:v,testForHeightReduction:!0})}}function s(){a({testForHeightReduction:!0,restoreTextAlign:null})}}(t)}),t}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],t),e},r.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],o),e});var n=r;/* harmony default export */ __webpack_exports__[\\\"default\\\"] = (n);\\n\\n\\n//# sourceURL=webpack://Sneat/./node_modules/autosize/dist/autosize.esm.js?\");\n\n        /***/\n      }),\n      /***/\"./libs/autosize/autosize.js\": (\n      /*!***********************************!*\\\n        !*** ./libs/autosize/autosize.js ***!\n        \\***********************************/\n      /***/\n      function libsAutosizeAutosizeJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {\n        eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   autosize: function() { return /* reexport safe */ autosize__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"]; }\\n/* harmony export */ });\\n/* harmony import */ var autosize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! autosize */ \\\"./node_modules/autosize/dist/autosize.esm.js\\\");\\n\\ntry {\\n  window.autosize = autosize__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"];\\n} catch (e) {}\\n\\n\\n//# sourceURL=webpack://Sneat/./libs/autosize/autosize.js?\");\n\n        /***/\n      })\n\n      /******/\n    };\n    /************************************************************************/\n    /******/ // The module cache\n    /******/\n    var __webpack_module_cache__ = {};\n    /******/\n    /******/ // The require function\n    /******/\n    function __nested_webpack_require_6037__(moduleId) {\n      /******/ // Check if module is in cache\n      /******/var cachedModule = __webpack_module_cache__[moduleId];\n      /******/\n      if (cachedModule !== undefined) {\n        /******/return cachedModule.exports;\n        /******/\n      }\n      /******/ // Create a new module (and put it into the cache)\n      /******/\n      var module = __webpack_module_cache__[moduleId] = {\n        /******/ // no module.id needed\n        /******/ // no module.loaded needed\n        /******/exports: {}\n        /******/\n      };\n      /******/\n      /******/ // Execute the module function\n      /******/\n      __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_6037__);\n      /******/\n      /******/ // Return the exports of the module\n      /******/\n      return module.exports;\n      /******/\n    }\n    /******/\n    /************************************************************************/\n    /******/ /* webpack/runtime/define property getters */\n    /******/\n    !function () {\n      /******/ // define getter functions for harmony exports\n      /******/__nested_webpack_require_6037__.d = function (exports, definition) {\n        /******/for (var key in definition) {\n          /******/if (__nested_webpack_require_6037__.o(definition, key) && !__nested_webpack_require_6037__.o(exports, key)) {\n            /******/Object.defineProperty(exports, key, {\n              enumerable: true,\n              get: definition[key]\n            });\n            /******/\n          }\n          /******/\n        }\n        /******/\n      };\n      /******/\n    }();\n    /******/\n    /******/ /* webpack/runtime/hasOwnProperty shorthand */\n    /******/\n    !function () {\n      /******/__nested_webpack_require_6037__.o = function (obj, prop) {\n        return Object.prototype.hasOwnProperty.call(obj, prop);\n      };\n      /******/\n    }();\n    /******/\n    /******/ /* webpack/runtime/make namespace object */\n    /******/\n    !function () {\n      /******/ // define __esModule on exports\n      /******/__nested_webpack_require_6037__.r = function (exports) {\n        /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n          /******/Object.defineProperty(exports, Symbol.toStringTag, {\n            value: 'Module'\n          });\n          /******/\n        }\n        /******/\n        Object.defineProperty(exports, '__esModule', {\n          value: true\n        });\n        /******/\n      };\n      /******/\n    }();\n    /******/\n    /************************************************************************/\n    /******/\n    /******/ // startup\n    /******/ // Load entry module and return exports\n    /******/ // This entry module can't be inlined because the eval devtool is used.\n    /******/\n    var __nested_webpack_exports__ = __nested_webpack_require_6037__(\"./libs/autosize/autosize.js\");\n    /******/\n    /******/\n    return __nested_webpack_exports__;\n    /******/\n  }();\n});\n\n//# sourceURL=webpack://Sneat/./static/vendor/libs/autosize/autosize.js?");

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./static/vendor/libs/autosize/autosize.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});