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

/***/ "./static/js/offcanvas-add-payment.js":
/*!********************************************!*\
  !*** ./static/js/offcanvas-add-payment.js ***!
  \********************************************/
/***/ (function() {

eval("/**\n * Add Payment Offcanvas\n */\n\n\n\n(function () {\n  // Invoice amount\n  var paymentAmount = document.querySelector('.invoice-amount');\n\n  // Prefix\n  if (paymentAmount) {\n    new Cleave(paymentAmount, {\n      numeral: true\n    });\n  }\n\n  // Datepicker\n  var date = new Date(),\n    invoiceDateList = document.querySelectorAll('.invoice-date');\n  if (invoiceDateList) {\n    invoiceDateList.forEach(function (invoiceDateEl) {\n      invoiceDateEl.flatpickr({\n        monthSelectorType: 'static',\n        defaultDate: date\n      });\n    });\n  }\n})();\n\n//# sourceURL=webpack://Sneat/./static/js/offcanvas-add-payment.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/offcanvas-add-payment.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});