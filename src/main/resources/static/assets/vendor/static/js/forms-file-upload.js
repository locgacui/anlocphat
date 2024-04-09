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

/***/ "./static/js/forms-file-upload.js":
/*!****************************************!*\
  !*** ./static/js/forms-file-upload.js ***!
  \****************************************/
/***/ (function() {

eval("/**\n * File Upload\n */\n\n\n\n(function () {\n  // previewTemplate: Updated Dropzone default previewTemplate\n  // ! Don't change it unless you really know what you are doing\n  var previewTemplate = \"<div class=\\\"dz-preview dz-file-preview\\\">\\n<div class=\\\"dz-details\\\">\\n  <div class=\\\"dz-thumbnail\\\">\\n    <img data-dz-thumbnail>\\n    <span class=\\\"dz-nopreview\\\">No preview</span>\\n    <div class=\\\"dz-success-mark\\\"></div>\\n    <div class=\\\"dz-error-mark\\\"></div>\\n    <div class=\\\"dz-error-message\\\"><span data-dz-errormessage></span></div>\\n    <div class=\\\"progress\\\">\\n      <div class=\\\"progress-bar progress-bar-primary\\\" role=\\\"progressbar\\\" aria-valuemin=\\\"0\\\" aria-valuemax=\\\"100\\\" data-dz-uploadprogress></div>\\n    </div>\\n  </div>\\n  <div class=\\\"dz-filename\\\" data-dz-name></div>\\n  <div class=\\\"dz-size\\\" data-dz-size></div>\\n</div>\\n</div>\";\n\n  // ? Start your code from here\n\n  // Basic Dropzone\n  // --------------------------------------------------------------------\n  var dropzoneBasic = document.querySelector('#dropzone-basic');\n  if (dropzoneBasic) {\n    var myDropzone = new Dropzone(dropzoneBasic, {\n      previewTemplate: previewTemplate,\n      parallelUploads: 1,\n      maxFilesize: 5,\n      addRemoveLinks: true,\n      maxFiles: 1\n    });\n  }\n\n  // Multiple Dropzone\n  // --------------------------------------------------------------------\n  var dropzoneMulti = document.querySelector('#dropzone-multi');\n  if (dropzoneMulti) {\n    var myDropzoneMulti = new Dropzone(dropzoneMulti, {\n      previewTemplate: previewTemplate,\n      parallelUploads: 1,\n      maxFilesize: 5,\n      addRemoveLinks: true\n    });\n  }\n})();\n\n//# sourceURL=webpack://Sneat/./static/js/forms-file-upload.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/forms-file-upload.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});