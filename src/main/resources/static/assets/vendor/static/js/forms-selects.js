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

/***/ "./static/js/forms-selects.js":
/*!************************************!*\
  !*** ./static/js/forms-selects.js ***!
  \************************************/
/***/ (function() {

eval("/**\n * Selects & Tags\n */\n\n\n\n$(function () {\n  var selectPicker = $('.selectpicker'),\n    select2 = $('.select2'),\n    select2Icons = $('.select2-icons');\n\n  // Bootstrap Select\n  // --------------------------------------------------------------------\n  if (selectPicker.length) {\n    selectPicker.selectpicker();\n  }\n\n  // Select2\n  // --------------------------------------------------------------------\n\n  // Default\n  if (select2.length) {\n    select2.each(function () {\n      var $this = $(this);\n      $this.wrap('<div class=\"position-relative\"></div>').select2({\n        placeholder: 'Select value',\n        dropdownParent: $this.parent()\n      });\n    });\n  }\n\n  // Select2 Icons\n  if (select2Icons.length) {\n    // custom template to render icons\n    var renderIcons = function renderIcons(option) {\n      if (!option.id) {\n        return option.text;\n      }\n      var $icon = \"<i class='\" + $(option.element).data('icon') + \" me-2'></i>\" + option.text;\n      return $icon;\n    };\n    select2Icons.wrap('<div class=\"position-relative\"></div>').select2({\n      dropdownParent: select2Icons.parent(),\n      templateResult: renderIcons,\n      templateSelection: renderIcons,\n      escapeMarkup: function escapeMarkup(es) {\n        return es;\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack://Sneat/./static/js/forms-selects.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/forms-selects.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});