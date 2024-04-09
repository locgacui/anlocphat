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

/***/ "./static/js/extended-ui-perfect-scrollbar.js":
/*!****************************************************!*\
  !*** ./static/js/extended-ui-perfect-scrollbar.js ***!
  \****************************************************/
/***/ (function() {

eval("/**\n * Perfect Scrollbar\n */\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  (function () {\n    var verticalExample = document.getElementById('vertical-example'),\n      horizontalExample = document.getElementById('horizontal-example'),\n      horizVertExample = document.getElementById('both-scrollbars-example');\n\n    // Vertical Example\n    // --------------------------------------------------------------------\n    if (verticalExample) {\n      new PerfectScrollbar(verticalExample, {\n        wheelPropagation: false\n      });\n    }\n\n    // Horizontal Example\n    // --------------------------------------------------------------------\n    if (horizontalExample) {\n      new PerfectScrollbar(horizontalExample, {\n        wheelPropagation: false,\n        suppressScrollY: true\n      });\n    }\n\n    // Both vertical and Horizontal Example\n    // --------------------------------------------------------------------\n    if (horizVertExample) {\n      new PerfectScrollbar(horizVertExample, {\n        wheelPropagation: false\n      });\n    }\n  })();\n});\n\n//# sourceURL=webpack://Sneat/./static/js/extended-ui-perfect-scrollbar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/extended-ui-perfect-scrollbar.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});