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

/***/ "./static/js/app-academy-course-details.js":
/*!*************************************************!*\
  !*** ./static/js/app-academy-course-details.js ***!
  \*************************************************/
/***/ (function() {

eval("// Academy course detail\n\n\n\n(function () {\n  // video\n  var videoPlayer = new Plyr('#plyr-video-player');\n  document.getElementsByClassName('plyr')[0].style.borderRadius = '7px';\n  document.getElementsByClassName('plyr__poster')[0].style.display = 'none';\n\n  // content sticky\n\n  var htmlElement = document.getElementsByTagName('html')[0];\n  var stick = document.querySelector('.stick-top');\n  function TopSticky() {\n    if (htmlElement.classList.contains('layout-navbar-fixed')) {\n      stick.classList.add('course-content-fixed');\n    } else {\n      stick.classList.remove('course-content-fixed');\n    }\n  }\n  TopSticky();\n  window.onscroll = function () {\n    TopSticky();\n  };\n})();\n\n//# sourceURL=webpack://Sneat/./static/js/app-academy-course-details.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/app-academy-course-details.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});