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

/***/ "./static/js/extended-ui-misc-clipboardjs.js":
/*!***************************************************!*\
  !*** ./static/js/extended-ui-misc-clipboardjs.js ***!
  \***************************************************/
/***/ (function() {

eval("/**\n * Clipboard\n */\n\n\n\n(function () {\n  var clipboardList = [].slice.call(document.querySelectorAll('.clipboard-btn'));\n  if (ClipboardJS) {\n    clipboardList.map(function (clipboardEl) {\n      var clipboard = new ClipboardJS(clipboardEl);\n      clipboard.on('success', function (e) {\n        if (e.action == 'copy') {\n          toastr['success']('', 'Copied to Clipboard!!');\n        }\n      });\n    });\n  } else {\n    clipboardList.map(function (clipboardEl) {\n      clipboardEl.setAttribute('disabled', true);\n    });\n  }\n})();\n\n//# sourceURL=webpack://Sneat/./static/js/extended-ui-misc-clipboardjs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/extended-ui-misc-clipboardjs.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});