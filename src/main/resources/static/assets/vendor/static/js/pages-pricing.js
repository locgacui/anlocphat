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

/***/ "./static/js/pages-pricing.js":
/*!************************************!*\
  !*** ./static/js/pages-pricing.js ***!
  \************************************/
/***/ (function() {

eval("/**\n * Pricing\n */\n\n\n\ndocument.addEventListener('DOMContentLoaded', function (event) {\n  (function () {\n    var priceDurationToggler = document.querySelector('.price-duration-toggler'),\n      priceMonthlyList = [].slice.call(document.querySelectorAll('.price-monthly')),\n      priceYearlyList = [].slice.call(document.querySelectorAll('.price-yearly'));\n    function togglePrice() {\n      if (priceDurationToggler.checked) {\n        // If checked\n        priceYearlyList.map(function (yearEl) {\n          yearEl.classList.remove('d-none');\n        });\n        priceMonthlyList.map(function (monthEl) {\n          monthEl.classList.add('d-none');\n        });\n      } else {\n        // If not checked\n        priceYearlyList.map(function (yearEl) {\n          yearEl.classList.add('d-none');\n        });\n        priceMonthlyList.map(function (monthEl) {\n          monthEl.classList.remove('d-none');\n        });\n      }\n    }\n    // togglePrice Event Listener\n    togglePrice();\n    priceDurationToggler.onchange = function () {\n      togglePrice();\n    };\n  })();\n});\n\n//# sourceURL=webpack://Sneat/./static/js/pages-pricing.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/pages-pricing.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});