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

/***/ "./static/vendor/js/dropdown-hover.js":
/*!********************************************!*\
  !*** ./static/vendor/js/dropdown-hover.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n/*\n * ATTENTION: The \"eval\" devtool has been used (maybe by default in mode: \"development\").\n * This devtool is neither made for production nor for readable output files.\n * It uses \"eval()\" calls to create a separate source file in the browser devtools.\n * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)\n * or disable the default devtool with \"devtool: false\".\n * If you are looking for production-ready output files, see mode: \"production\" (https://webpack.js.org/configuration/mode/).\n */\n(function webpackUniversalModuleDefinition(root, factory) {\n  if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var i, a; }\n})(self, function () {\n  return /******/function () {\n    // webpackBootstrap\n    /******/\n    var __webpack_modules__ = {\n      /***/\"./js/dropdown-hover.js\": (\n      /*!******************************!*\\\n        !*** ./js/dropdown-hover.js ***!\n        \\******************************/\n      /***/\n      function jsDropdownHoverJs() {\n        eval(\"// Add onHover event for dropdowns\\n\\n;\\n(function ($) {\\n  if (!$ || !$.fn) return;\\n  var SELECTOR = '[data-bs-toggle=dropdown][data-trigger=hover]';\\n  var TIMEOUT = 150;\\n  function openDropdown($i) {\\n    var t = $i.data('dd-timeout');\\n    if (t) {\\n      clearTimeout(t);\\n      t = null;\\n      $i.data('dd-timeout', t);\\n    }\\n    if ($i.attr('aria-expanded') !== 'true') $i.dropdown('toggle');\\n  }\\n  function closeDropdown($i) {\\n    var t = $i.data('dd-timeout');\\n    if (t) clearTimeout(t);\\n    t = setTimeout(function () {\\n      var t2 = $i.data('dd-timeout');\\n      if (t2) {\\n        clearTimeout(t2);\\n        t2 = null;\\n        $i.data('dd-timeout', t2);\\n      }\\n      if ($i.attr('aria-expanded') === 'true') $i.dropdown('toggle');\\n    }, TIMEOUT);\\n    $i.data('dd-timeout', t);\\n  }\\n  $(function () {\\n    $('body').on('mouseenter', \\\"\\\".concat(SELECTOR, \\\", \\\").concat(SELECTOR, \\\" ~ .dropdown-menu\\\"), function () {\\n      var $toggle = $(this).hasClass('dropdown-toggle') ? $(this) : $(this).prev('.dropdown-toggle');\\n      var $dropdown = $(this).hasClass('dropdown-menu') ? $(this) : $(this).next('.dropdown-menu');\\n      if (window.getComputedStyle($dropdown[0], null).getPropertyValue('position') === 'static') return;\\n\\n      // Set hovered flag\\n      if ($(this).is(SELECTOR)) {\\n        $(this).data('hovered', true);\\n      }\\n      openDropdown($(this).hasClass('dropdown-toggle') ? $(this) : $(this).prev('.dropdown-toggle'));\\n    }).on('mouseleave', \\\"\\\".concat(SELECTOR, \\\", \\\").concat(SELECTOR, \\\" ~ .dropdown-menu\\\"), function () {\\n      var $toggle = $(this).hasClass('dropdown-toggle') ? $(this) : $(this).prev('.dropdown-toggle');\\n      var $dropdown = $(this).hasClass('dropdown-menu') ? $(this) : $(this).next('.dropdown-menu');\\n      if (window.getComputedStyle($dropdown[0], null).getPropertyValue('position') === 'static') return;\\n\\n      // Remove hovered flag\\n      if ($(this).is(SELECTOR)) {\\n        $(this).data('hovered', false);\\n      }\\n      closeDropdown($(this).hasClass('dropdown-toggle') ? $(this) : $(this).prev('.dropdown-toggle'));\\n    }).on('hide.bs.dropdown', function (e) {\\n      if ($(this).find(SELECTOR).data('hovered')) e.preventDefault();\\n    });\\n  });\\n})(window.jQuery);\\n\\n//# sourceURL=webpack://Sneat/./js/dropdown-hover.js?\");\n\n        /***/\n      })\n\n      /******/\n    };\n    /************************************************************************/\n    /******/\n    /******/ // startup\n    /******/ // Load entry module and return exports\n    /******/ // This entry module can't be inlined because the eval devtool is used.\n    /******/\n    var __nested_webpack_exports__ = {};\n    /******/\n    __webpack_modules__[\"./js/dropdown-hover.js\"]();\n    /******/\n    /******/\n    return __nested_webpack_exports__;\n    /******/\n  }();\n});\n\n//# sourceURL=webpack://Sneat/./static/vendor/js/dropdown-hover.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./static/vendor/js/dropdown-hover.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});