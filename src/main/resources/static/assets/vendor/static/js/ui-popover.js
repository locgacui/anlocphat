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
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./static/js/ui-popover.js":
/*!*********************************!*\
  !*** ./static/js/ui-popover.js ***!
  \*********************************/
/***/ (function() {

eval("// /**\n//  * UI Tooltips & Popovers\n//  */\n\n\n\n(function () {\n  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle=\"popover\"]'));\n  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {\n    // added { html: true, sanitize: false } option to render button in content area of popover\n    return new bootstrap.Popover(popoverTriggerEl, {\n      html: true,\n      sanitize: false\n    });\n  });\n})();\n\n//# sourceURL=webpack://Sneat/./static/js/ui-popover.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/ui-popover.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});