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

/***/ "./static/js/front-config.js":
/*!***********************************!*\
  !*** ./static/js/front-config.js ***!
  \***********************************/
/***/ (function() {

eval("/**\n * Config\n * -------------------------------------------------------------------------------------\n * ! IMPORTANT: Make sure you clear the browser local storage In order to see the config changes in the template.\n * ! To clear local storage: (https://www.leadshook.com/help/how-to-clear-local-storage-in-google-chrome-browser/).\n */\n\n\n\nwindow.assetsPath = document.documentElement.getAttribute('data-assets-path');\nwindow.templateName = document.documentElement.getAttribute('data-template');\nwindow.rtlSupport = true; // set true for rtl support (rtl + ltr), false for ltr only.\n\n/**\n * TemplateCustomizer settings\n * -------------------------------------------------------------------------------------\n * cssPath: Core CSS file path\n * themesPath: Theme CSS file path\n * displayCustomizer: true(Show customizer), false(Hide customizer)\n * lang: To set default language, Add more langues and set default. Fallback language is 'en'\n * controls: [ 'rtl', 'style', 'headerType', 'contentLayout', 'layoutCollapsed', 'layoutNavbarOptions', 'themes' ] | Show/Hide customizer controls\n * defaultStyle: 'light', 'dark', 'system' (Mode)\n * defaultTextDir: 'ltr', 'rtl' (rtlSupport must be true for rtl mode)\n */\n\nif (typeof TemplateCustomizer !== 'undefined') {\n  window.templateCustomizer = new TemplateCustomizer({\n    cssPath: assetsPath + 'vendor/css' + (rtlSupport ? '/rtl' : '') + '/',\n    themesPath: assetsPath + 'vendor/css' + (rtlSupport ? '/rtl' : '') + '/',\n    displayCustomizer: true,\n    // defaultTextDir: 'rtl'\n    // defaultStyle: 'dark',\n    controls: ['rtl', 'style']\n  });\n}\n\n//# sourceURL=webpack://Sneat/./static/js/front-config.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/front-config.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});