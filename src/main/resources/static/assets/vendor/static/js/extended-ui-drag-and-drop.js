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

/***/ "./static/js/extended-ui-drag-and-drop.js":
/*!************************************************!*\
  !*** ./static/js/extended-ui-drag-and-drop.js ***!
  \************************************************/
/***/ (function() {

eval("/**\n * Drag & Drop\n */\n\n\n(function () {\n  var cardEl = document.getElementById('sortable-cards'),\n    pendingTasks = document.getElementById('pending-tasks'),\n    completedTasks = document.getElementById('completed-tasks'),\n    cloneSource1 = document.getElementById('clone-source-1'),\n    cloneSource2 = document.getElementById('clone-source-2'),\n    handleList1 = document.getElementById('handle-list-1'),\n    handleList2 = document.getElementById('handle-list-2'),\n    imageList1 = document.getElementById('image-list-1'),\n    imageList2 = document.getElementById('image-list-2');\n\n  // Cards\n  // --------------------------------------------------------------------\n  if (cardEl) {\n    Sortable.create(cardEl);\n  }\n\n  // Images\n  // --------------------------------------------------------------------\n  if (imageList1) {\n    Sortable.create(imageList1, {\n      animation: 150,\n      group: 'imgList'\n    });\n  }\n  if (imageList2) {\n    Sortable.create(imageList2, {\n      animation: 150,\n      group: 'imgList'\n    });\n  }\n\n  // Cloning\n  // --------------------------------------------------------------------\n  if (cloneSource1) {\n    Sortable.create(cloneSource1, {\n      animation: 150,\n      group: {\n        name: 'cloneList',\n        pull: 'clone',\n        revertClone: true\n      }\n    });\n  }\n  if (cloneSource2) {\n    Sortable.create(cloneSource2, {\n      animation: 150,\n      group: {\n        name: 'cloneList',\n        pull: 'clone',\n        revertClone: true\n      }\n    });\n  }\n\n  // Multiple\n  // --------------------------------------------------------------------\n  if (pendingTasks) {\n    Sortable.create(pendingTasks, {\n      animation: 150,\n      group: 'taskList'\n    });\n  }\n  if (completedTasks) {\n    Sortable.create(completedTasks, {\n      animation: 150,\n      group: 'taskList'\n    });\n  }\n\n  // Handles\n  // --------------------------------------------------------------------\n  if (handleList1) {\n    Sortable.create(handleList1, {\n      animation: 150,\n      group: 'handleList',\n      handle: '.drag-handle'\n    });\n  }\n  if (handleList2) {\n    Sortable.create(handleList2, {\n      animation: 150,\n      group: 'handleList',\n      handle: '.drag-handle'\n    });\n  }\n})();\n\n//# sourceURL=webpack://Sneat/./static/js/extended-ui-drag-and-drop.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/extended-ui-drag-and-drop.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});