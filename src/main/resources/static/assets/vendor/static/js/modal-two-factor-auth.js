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

/***/ "./static/js/modal-two-factor-auth.js":
/*!********************************************!*\
  !*** ./static/js/modal-two-factor-auth.js ***!
  \********************************************/
/***/ (function() {

eval("/**\n * Two Factor Authentication\n */\n\n\n\ndocument.addEventListener('DOMContentLoaded', function (e) {\n  (function () {\n    var phoneMaskList = document.querySelectorAll('#twoFactorAuthInputSms');\n\n    // Phone Number\n    if (phoneMaskList) {\n      phoneMaskList.forEach(function (phoneMask) {\n        new Cleave(phoneMask, {\n          phone: true,\n          phoneRegionCode: 'US'\n        });\n      });\n    }\n  })();\n});\n\n//# sourceURL=webpack://Sneat/./static/js/modal-two-factor-auth.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/modal-two-factor-auth.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});