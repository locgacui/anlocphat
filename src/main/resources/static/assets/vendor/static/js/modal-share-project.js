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

/***/ "./static/js/modal-share-project.js":
/*!******************************************!*\
  !*** ./static/js/modal-share-project.js ***!
  \******************************************/
/***/ (function() {

eval("/**\n * Share Project\n */\n\n\n\n$(function () {\n  var select2ShareProject = $('.share-project-select');\n  var shareProject = document.getElementById('shareProject');\n  shareProject.addEventListener('show.bs.modal', function (event) {\n    // do something...\n    if (select2ShareProject.length) {\n      var renderAvatar = function renderAvatar(option) {\n        if (!option.id) {\n          return option.text;\n        }\n        var optionEle = '<div class=\"d-flex align-items-center\">' + '<div class=\"avatar avatar-xs me-2 d-flex\">' + '<img src=\"' + assetsPath + $(option.element).data('image') + '\" class=\"rounded-circle\">' + '</div>' + '<div class=\"name\">' + $(option.element).data('name') + '</div>' + '</div>';\n        return optionEle;\n      };\n      select2ShareProject.wrap('<div class=\"position-relative\"></div>').select2({\n        dropdownParent: shareProject,\n        templateResult: renderAvatar,\n        templateSelection: renderAvatar,\n        placeholder: 'Add Project Members',\n        escapeMarkup: function escapeMarkup(es) {\n          return es;\n        }\n      });\n    }\n  });\n});\n\n//# sourceURL=webpack://Sneat/./static/js/modal-share-project.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/modal-share-project.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});