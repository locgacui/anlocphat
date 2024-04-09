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

/***/ "./static/js/app-academy-course.js":
/*!*****************************************!*\
  !*** ./static/js/app-academy-course.js ***!
  \*****************************************/
/***/ (function() {

eval("/**\n * app-academy-course Script\n */\n\n\n\n// Datatable (jquery)\n$(function () {\n  // Select2\n  var select2 = $('.select2');\n  if (select2.length) {\n    select2.each(function () {\n      var $this = $(this);\n      $this.wrap('<div class=\"position-relative\"></div>').select2({\n        dropdownParent: $this.parent(),\n        placeholder: $this.data('placeholder'),\n        // for dynamic placeholder\n        dropdownCss: {\n          minWidth: '150px' // set a minimum width for the dropdown\n        }\n      });\n    });\n    $('.select2-selection__rendered').addClass('w-px-150');\n  }\n});\n\n//Media player\n\n(function () {\n  var videoPlayer = new Plyr('#guitar-video-player');\n  var videoPlayer2 = new Plyr('#guitar-video-player-2');\n  document.getElementsByClassName('plyr')[0].style.borderRadius = '4px';\n  document.getElementsByClassName('plyr')[1].style.borderRadius = '4px';\n  document.getElementsByClassName('plyr__poster')[0].style.display = 'none';\n  document.getElementsByClassName('plyr__poster')[1].style.display = 'none';\n})();\n\n//# sourceURL=webpack://Sneat/./static/js/app-academy-course.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/app-academy-course.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});