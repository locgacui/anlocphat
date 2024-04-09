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

/***/ "./static/js/offcanvas-send-invoice.js":
/*!*********************************************!*\
  !*** ./static/js/offcanvas-send-invoice.js ***!
  \*********************************************/
/***/ (function() {

eval("/**\n * Send Invoice Offcanvas\n */\n\n\n\n(function () {\n  // Send invoice textarea\n  var invoiceMsg = document.querySelector('#invoice-message');\n  var trimMsg = invoiceMsg.textContent.replace(/^\\s+|\\s+$/gm, '');\n  invoiceMsg.value = trimMsg;\n})();\n\n//# sourceURL=webpack://Sneat/./static/js/offcanvas-send-invoice.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/offcanvas-send-invoice.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});