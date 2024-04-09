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

/***/ "./static/js/form-wizard-numbered.js":
/*!*******************************************!*\
  !*** ./static/js/form-wizard-numbered.js ***!
  \*******************************************/
/***/ (function() {

eval("/**\n *  Form Wizard\n */\n\n\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n$(function () {\n  var select2 = $('.select2'),\n    selectPicker = $('.selectpicker');\n\n  // Bootstrap select\n  if (selectPicker.length) {\n    selectPicker.selectpicker();\n  }\n\n  // select2\n  if (select2.length) {\n    select2.each(function () {\n      var $this = $(this);\n      $this.wrap('<div class=\"position-relative\"></div>');\n      $this.select2({\n        placeholder: 'Select value',\n        dropdownParent: $this.parent()\n      });\n    });\n  }\n});\n(function () {\n  // Numbered Wizard\n  // --------------------------------------------------------------------\n  var wizardNumbered = document.querySelector('.wizard-numbered'),\n    wizardNumberedBtnNextList = [].slice.call(wizardNumbered.querySelectorAll('.btn-next')),\n    wizardNumberedBtnPrevList = [].slice.call(wizardNumbered.querySelectorAll('.btn-prev')),\n    wizardNumberedBtnSubmit = wizardNumbered.querySelector('.btn-submit');\n  if (_typeof(wizardNumbered) !== undefined && wizardNumbered !== null) {\n    var numberedStepper = new Stepper(wizardNumbered, {\n      linear: false\n    });\n    if (wizardNumberedBtnNextList) {\n      wizardNumberedBtnNextList.forEach(function (wizardNumberedBtnNext) {\n        wizardNumberedBtnNext.addEventListener('click', function (event) {\n          numberedStepper.next();\n        });\n      });\n    }\n    if (wizardNumberedBtnPrevList) {\n      wizardNumberedBtnPrevList.forEach(function (wizardNumberedBtnPrev) {\n        wizardNumberedBtnPrev.addEventListener('click', function (event) {\n          numberedStepper.previous();\n        });\n      });\n    }\n    if (wizardNumberedBtnSubmit) {\n      wizardNumberedBtnSubmit.addEventListener('click', function (event) {\n        alert('Submitted..!!');\n      });\n    }\n  }\n\n  // Vertical Wizard\n  // --------------------------------------------------------------------\n  var wizardVertical = document.querySelector('.wizard-vertical'),\n    wizardVerticalBtnNextList = [].slice.call(wizardVertical.querySelectorAll('.btn-next')),\n    wizardVerticalBtnPrevList = [].slice.call(wizardVertical.querySelectorAll('.btn-prev')),\n    wizardVerticalBtnSubmit = wizardVertical.querySelector('.btn-submit');\n  if (_typeof(wizardVertical) !== undefined && wizardVertical !== null) {\n    var verticalStepper = new Stepper(wizardVertical, {\n      linear: false\n    });\n    if (wizardVerticalBtnNextList) {\n      wizardVerticalBtnNextList.forEach(function (wizardVerticalBtnNext) {\n        wizardVerticalBtnNext.addEventListener('click', function (event) {\n          verticalStepper.next();\n        });\n      });\n    }\n    if (wizardVerticalBtnPrevList) {\n      wizardVerticalBtnPrevList.forEach(function (wizardVerticalBtnPrev) {\n        wizardVerticalBtnPrev.addEventListener('click', function (event) {\n          verticalStepper.previous();\n        });\n      });\n    }\n    if (wizardVerticalBtnSubmit) {\n      wizardVerticalBtnSubmit.addEventListener('click', function (event) {\n        alert('Submitted..!!');\n      });\n    }\n  }\n\n  // Modern Wizard\n  // --------------------------------------------------------------------\n  var wizardModern = document.querySelector('.wizard-modern-example'),\n    wizardModernBtnNextList = [].slice.call(wizardModern.querySelectorAll('.btn-next')),\n    wizardModernBtnPrevList = [].slice.call(wizardModern.querySelectorAll('.btn-prev')),\n    wizardModernBtnSubmit = wizardModern.querySelector('.btn-submit');\n  if (_typeof(wizardModern) !== undefined && wizardModern !== null) {\n    var modernStepper = new Stepper(wizardModern, {\n      linear: false\n    });\n    if (wizardModernBtnNextList) {\n      wizardModernBtnNextList.forEach(function (wizardModernBtnNext) {\n        wizardModernBtnNext.addEventListener('click', function (event) {\n          modernStepper.next();\n        });\n      });\n    }\n    if (wizardModernBtnPrevList) {\n      wizardModernBtnPrevList.forEach(function (wizardModernBtnPrev) {\n        wizardModernBtnPrev.addEventListener('click', function (event) {\n          modernStepper.previous();\n        });\n      });\n    }\n    if (wizardModernBtnSubmit) {\n      wizardModernBtnSubmit.addEventListener('click', function (event) {\n        alert('Submitted..!!');\n      });\n    }\n  }\n\n  // Modern Vertical Wizard\n  // --------------------------------------------------------------------\n  var wizardModernVertical = document.querySelector('.wizard-modern-vertical'),\n    wizardModernVerticalBtnNextList = [].slice.call(wizardModernVertical.querySelectorAll('.btn-next')),\n    wizardModernVerticalBtnPrevList = [].slice.call(wizardModernVertical.querySelectorAll('.btn-prev')),\n    wizardModernVerticalBtnSubmit = wizardModernVertical.querySelector('.btn-submit');\n  if (_typeof(wizardModernVertical) !== undefined && wizardModernVertical !== null) {\n    var modernVerticalStepper = new Stepper(wizardModernVertical, {\n      linear: false\n    });\n    if (wizardModernVerticalBtnNextList) {\n      wizardModernVerticalBtnNextList.forEach(function (wizardModernVerticalBtnNext) {\n        wizardModernVerticalBtnNext.addEventListener('click', function (event) {\n          modernVerticalStepper.next();\n        });\n      });\n    }\n    if (wizardModernVerticalBtnPrevList) {\n      wizardModernVerticalBtnPrevList.forEach(function (wizardModernVerticalBtnPrev) {\n        wizardModernVerticalBtnPrev.addEventListener('click', function (event) {\n          modernVerticalStepper.previous();\n        });\n      });\n    }\n    if (wizardModernVerticalBtnSubmit) {\n      wizardModernVerticalBtnSubmit.addEventListener('click', function (event) {\n        alert('Submitted..!!');\n      });\n    }\n  }\n})();\n\n//# sourceURL=webpack://Sneat/./static/js/form-wizard-numbered.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/form-wizard-numbered.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});