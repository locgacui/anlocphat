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

/***/ "./static/js/app-ecommerce-settings.js":
/*!*********************************************!*\
  !*** ./static/js/app-ecommerce-settings.js ***!
  \*********************************************/
/***/ (function() {

eval("/**\n * App eCommerce Settings Script\n */\n\n\n//Javascript to handle the e-commerce settings page\n$(function () {\n  // Select2\n  var select2 = $('.select2');\n  if (select2.length) {\n    select2.each(function () {\n      var $this = $(this);\n      $this.wrap('<div class=\"position-relative\"></div>').select2({\n        dropdownParent: $this.parent(),\n        placeholder: $this.data('placeholder') // for dynamic placeholder\n      });\n    });\n  }\n});\n(function () {\n  // Phone Number\n  var phoneMaskList = document.querySelectorAll('.phone-mask');\n  if (phoneMaskList) {\n    phoneMaskList.forEach(function (phoneMask) {\n      new Cleave(phoneMask, {\n        phone: true,\n        phoneRegionCode: 'US'\n      });\n    });\n  }\n})();\n\n//# sourceURL=webpack://Sneat/./static/js/app-ecommerce-settings.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/app-ecommerce-settings.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});