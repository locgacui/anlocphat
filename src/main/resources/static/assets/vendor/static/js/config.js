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

/***/ "./static/js/config.js":
/*!*****************************!*\
  !*** ./static/js/config.js ***!
  \*****************************/
/***/ (function() {

eval("/**\n * Config\n * -------------------------------------------------------------------------------------\n * ! IMPORTANT: Make sure you clear the browser local storage In order to see the config changes in the template.\n * ! To clear local storage: (https://www.leadshook.com/help/how-to-clear-local-storage-in-google-chrome-browser/).\n */\n\n\n\n// JS global variables\nwindow.config = {\n  colors: {\n    primary: '#696cff',\n    secondary: '#8592a3',\n    success: '#71dd37',\n    info: '#03c3ec',\n    warning: '#ffab00',\n    danger: '#ff3e1d',\n    dark: '#233446',\n    black: '#000',\n    white: '#fff',\n    cardColor: '#fff',\n    bodyBg: '#f5f5f9',\n    bodyColor: '#697a8d',\n    headingColor: '#566a7f',\n    textMuted: '#a1acb8',\n    borderColor: '#eceef1'\n  },\n  colors_label: {\n    primary: '#666ee81a',\n    secondary: '#8897aa1a',\n    success: '#28d0941a',\n    info: '#1e9ff21a',\n    warning: '#ff91491a',\n    danger: '#ff49611a',\n    dark: '#181c211a'\n  },\n  colors_dark: {\n    cardColor: '#2b2c40',\n    bodyBg: '#232333',\n    bodyColor: '#a3a4cc',\n    headingColor: '#cbcbe2',\n    textMuted: '#7071a4',\n    borderColor: '#444564'\n  },\n  enableMenuLocalStorage: true // Enable menu state with local storage support\n};\nwindow.assetsPath = document.documentElement.getAttribute('data-assets-path');\nwindow.templateName = document.documentElement.getAttribute('data-template');\nwindow.rtlSupport = true; // set true for rtl support (rtl + ltr), false for ltr only.\n\n/**\n * TemplateCustomizer\n * ! You must use(include) template-customizer.js to use TemplateCustomizer settings\n * -----------------------------------------------------------------------------------------------\n */\n\n// To use more themes, just push it to THEMES object.\n\n/* TemplateCustomizer.THEMES.push({\n  name: 'theme-raspberry',\n  title: 'Raspberry'\n}); */\n\n// To add more languages, just push it to LANGUAGES object.\n/*\nTemplateCustomizer.LANGUAGES.fr = { ... };\n*/\n\n/**\n * TemplateCustomizer settings\n * -------------------------------------------------------------------------------------\n * cssPath: Core CSS file path\n * themesPath: Theme CSS file path\n * displayCustomizer: true(Show customizer), false(Hide customizer)\n * lang: To set default language, Add more langues and set default. Fallback language is 'en'\n * controls: [ 'rtl', 'style', 'headerType', 'contentLayout', 'layoutCollapsed', 'layoutNavbarOptions', 'themes' ] | Show/Hide customizer controls\n * defaultTheme: 0(Default), 1(Bordered), 2(Semi Dark)\n * defaultStyle: 'light', 'dark', 'system' (Mode)\n * defaultTextDir: 'ltr', 'rtl' (rtlSupport must be true for rtl mode)\n * defaultContentLayout: 'compact', 'wide' (compact=container-xxl, wide=container-fluid)\n * defaultHeaderType: 'static', 'fixed' (for horizontal layout only)\n * defaultMenuCollapsed: true, false (For vertical layout only)\n * defaultNavbarType: 'sticky', 'static', 'hidden' (For vertical layout only)\n * defaultFooterFixed: true, false (For vertical layout only)\n * defaultShowDropdownOnHover : true, false (for horizontal layout only)\n */\n\nif (typeof TemplateCustomizer !== 'undefined') {\n  window.templateCustomizer = new TemplateCustomizer({\n    cssPath: assetsPath + 'vendor/css' + (rtlSupport ? '/rtl' : '') + '/',\n    themesPath: assetsPath + 'vendor/css' + (rtlSupport ? '/rtl' : '') + '/',\n    displayCustomizer: true,\n    lang: localStorage.getItem('templateCustomizer-' + templateName + '--Lang') || 'en',\n    // Set default language here\n    // defaultTheme: 2,\n    // defaultStyle: 'system',\n    // defaultTextDir: 'rtl',\n    // defaultContentLayout: 'wide',\n    // defaultHeaderType: 'static',\n    // defaultMenuCollapsed: true,\n    // defaultNavbarType: 'sticky',\n    // defaultFooterFixed: false,\n    // defaultShowDropdownOnHover: false,\n    controls: ['rtl', 'style', 'headerType', 'contentLayout', 'layoutCollapsed', 'layoutNavbarOptions', 'themes']\n  });\n}\n\n//# sourceURL=webpack://Sneat/./static/js/config.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/config.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});