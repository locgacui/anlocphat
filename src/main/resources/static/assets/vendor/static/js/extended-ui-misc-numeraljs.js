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

/***/ "./static/js/extended-ui-misc-numeraljs.js":
/*!*************************************************!*\
  !*** ./static/js/extended-ui-misc-numeraljs.js ***!
  \*************************************************/
/***/ (function() {

eval("/**\n * NumeralJS\n */\n\n\n\n(function () {\n  var dNum = document.querySelector('.dNum'),\n    fNum = document.querySelector('.fNum'),\n    fCurrency = document.querySelector('.fCurrency'),\n    fBytes = document.querySelector('.fBytes'),\n    fPercent = document.querySelector('.fPercent'),\n    fTime = document.querySelector('.fTime'),\n    fExponential = document.querySelector('.fExponential');\n  if (dNum) {\n    dNum.innerHTML = numeral(974).value();\n  }\n  if (fNum) {\n    fNum.innerHTML = numeral(1230974).format('0.0a');\n  }\n  if (fCurrency) {\n    fCurrency.innerHTML = numeral(1000.234).format('$0,0.000');\n  }\n  if (fBytes) {\n    fBytes.innerHTML = numeral(3467479682787).format('0.000ib');\n  }\n  if (fPercent) {\n    fPercent.innerHTML = numeral(0.974878234).format('0.000%');\n  }\n  if (fTime) {\n    fTime.innerHTML = numeral(63846).format('00:00:00');\n  }\n  if (fExponential) {\n    fExponential.innerHTML = numeral(1123456789).format('0,0e+0');\n  }\n})();\n\n//# sourceURL=webpack://Sneat/./static/js/extended-ui-misc-numeraljs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/extended-ui-misc-numeraljs.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});