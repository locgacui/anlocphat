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

/***/ "./static/js/ui-app-brand.js":
/*!***********************************!*\
  !*** ./static/js/ui-app-brand.js ***!
  \***********************************/
/***/ (function() {

eval("/**\n * UI App Brand\n */\n\n\n\n(function () {\n  var layoutMenu1 = document.querySelector('#layout-menu1'),\n    layoutMenu2 = document.querySelector('#layout-menu2'),\n    layoutMenu3 = document.querySelector('#layout-menu3'),\n    layoutMenu4 = document.querySelector('#layout-menu4');\n\n  // Initializing four vertical demo menus\n  if (layoutMenu1) {\n    new Menu(layoutMenu1);\n  }\n  if (layoutMenu2) {\n    new Menu(layoutMenu2);\n  }\n  if (layoutMenu3) {\n    new Menu(layoutMenu3);\n  }\n  if (layoutMenu4) {\n    new Menu(layoutMenu4);\n  }\n\n  // On toggle button click\n  var appToggleBtn = document.querySelector('.app-brand-toggle');\n  if (appToggleBtn) {\n    appToggleBtn.onclick = function () {\n      if (layoutMenu1) {\n        layoutMenu1.classList.toggle('menu-collapsed');\n      }\n      if (layoutMenu2) {\n        layoutMenu2.classList.toggle('menu-collapsed');\n      }\n      if (layoutMenu3) {\n        layoutMenu3.classList.toggle('menu-collapsed');\n      }\n      if (layoutMenu4) {\n        layoutMenu4.classList.toggle('menu-collapsed');\n      }\n    };\n  }\n\n  // For Docs only\n  var brandNameBtn = document.querySelector('.brand-menu-toggle'),\n    logoNameBtn = document.querySelector('.brand-logo-toggle'),\n    logoNameTextBtn = document.querySelector('.logo-name-toggle'),\n    brandImageBtn = document.querySelector('.brand-image-toggle');\n  if (brandNameBtn) {\n    brandNameBtn.onclick = function () {\n      if (layoutMenu1) {\n        layoutMenu1.classList.toggle('menu-collapsed');\n      }\n    };\n  }\n  if (logoNameBtn) {\n    logoNameBtn.onclick = function () {\n      if (layoutMenu2) {\n        layoutMenu2.classList.toggle('menu-collapsed');\n      }\n    };\n  }\n  if (logoNameTextBtn) {\n    logoNameTextBtn.onclick = function () {\n      if (layoutMenu3) {\n        layoutMenu3.classList.toggle('menu-collapsed');\n      }\n    };\n  }\n  if (brandImageBtn) {\n    brandImageBtn.onclick = function () {\n      if (layoutMenu4) {\n        layoutMenu4.classList.toggle('menu-collapsed');\n      }\n    };\n  }\n})();\n\n//# sourceURL=webpack://Sneat/./static/js/ui-app-brand.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/ui-app-brand.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});