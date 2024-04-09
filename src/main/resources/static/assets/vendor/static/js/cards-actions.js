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

/***/ "./static/js/cards-actions.js":
/*!************************************!*\
  !*** ./static/js/cards-actions.js ***!
  \************************************/
/***/ (function() {

eval("/**\n * Cards Actions\n */\n\n\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n(function () {\n  var collapseElementList = [].slice.call(document.querySelectorAll('.card-collapsible'));\n  var expandElementList = [].slice.call(document.querySelectorAll('.card-expand'));\n  var closeElementList = [].slice.call(document.querySelectorAll('.card-close'));\n  var cardDnD = document.getElementById('sortable-4');\n\n  // Collapsible card\n  // --------------------------------------------------------------------\n  if (collapseElementList) {\n    collapseElementList.map(function (collapseElement) {\n      collapseElement.addEventListener('click', function (event) {\n        event.preventDefault();\n        // Collapse the element\n        new bootstrap.Collapse(collapseElement.closest('.card').querySelector('.collapse'));\n        // Toggle collapsed class in `.card-header` element\n        collapseElement.closest('.card-header').classList.toggle('collapsed');\n        // Toggle class bx-chevron-down & bx-chevron-up\n        Helpers._toggleClass(collapseElement.firstElementChild, 'bx-chevron-down', 'bx-chevron-up');\n      });\n    });\n  }\n\n  // Card Toggle fullscreen\n  // --------------------------------------------------------------------\n  if (expandElementList) {\n    expandElementList.map(function (expandElement) {\n      expandElement.addEventListener('click', function (event) {\n        event.preventDefault();\n        // Toggle class bx-fullscreen & bx-exit-fullscreen\n        Helpers._toggleClass(expandElement.firstElementChild, 'bx-fullscreen', 'bx-exit-fullscreen');\n        expandElement.closest('.card').classList.toggle('card-fullscreen');\n      });\n    });\n  }\n\n  // Toggle fullscreen on esc key\n  document.addEventListener('keyup', function (event) {\n    event.preventDefault();\n    //Esc button\n    if (event.key === 'Escape') {\n      var cardFullscreen = document.querySelector('.card-fullscreen');\n      // Toggle class bx-fullscreen & bx-exit-fullscreen\n\n      if (cardFullscreen) {\n        Helpers._toggleClass(cardFullscreen.querySelector('.card-expand').firstChild, 'bx-fullscreen', 'bx-exit-fullscreen');\n        cardFullscreen.classList.toggle('card-fullscreen');\n      }\n    }\n  });\n\n  // Card close\n  // --------------------------------------------------------------------\n  if (closeElementList) {\n    closeElementList.map(function (closeElement) {\n      closeElement.addEventListener('click', function (event) {\n        event.preventDefault();\n        closeElement.closest('.card').classList.add('d-none');\n      });\n    });\n  }\n\n  // Sortable.js (Drag & Drop cards)\n  // --------------------------------------------------------------------\n  if (_typeof(cardDnD) !== undefined && cardDnD !== null) {\n    Sortable.create(cardDnD, {\n      animation: 500,\n      handle: '.card'\n    });\n  }\n})();\n\n// Card reload (jquery)\n// --------------------------------------------------------------------\n$(function () {\n  var cardReload = $('.card-reload');\n  if (cardReload.length) {\n    cardReload.on('click', function (e) {\n      e.preventDefault();\n      var $this = $(this);\n      $this.closest('.card').block({\n        message: '<div class=\"sk-fold sk-primary\"><div class=\"sk-fold-cube\"></div><div class=\"sk-fold-cube\"></div><div class=\"sk-fold-cube\"></div><div class=\"sk-fold-cube\"></div></div><h5>LOADING...</h5>',\n        css: {\n          backgroundColor: 'transparent',\n          border: '0'\n        },\n        overlayCSS: {\n          backgroundColor: $('html').hasClass('dark-style') ? '#000' : '#fff',\n          opacity: 0.55\n        }\n      });\n      setTimeout(function () {\n        $this.closest('.card').unblock();\n        if ($this.closest('.card').find('.card-alert').length) {\n          $this.closest('.card').find('.card-alert').html('<div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\"><button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button><span class=\"fw-medium\">Holy grail!</span> Your success/error message here.</div>');\n        }\n      }, 2500);\n    });\n  }\n});\n\n//# sourceURL=webpack://Sneat/./static/js/cards-actions.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/cards-actions.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});