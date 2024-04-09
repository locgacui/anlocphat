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

/***/ "./static/js/form-wizard-icons.js":
/*!****************************************!*\
  !*** ./static/js/form-wizard-icons.js ***!
  \****************************************/
/***/ (function() {

eval("/**\n *  Form Wizard\n */\n\n\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n$(function () {\n  var select2 = $('.select2'),\n    selectPicker = $('.selectpicker');\n\n  // Bootstrap select\n  if (selectPicker.length) {\n    selectPicker.selectpicker();\n  }\n\n  // select2\n  if (select2.length) {\n    select2.each(function () {\n      var $this = $(this);\n      $this.wrap('<div class=\"position-relative\"></div>');\n      $this.select2({\n        placeholder: 'Select value',\n        dropdownParent: $this.parent()\n      });\n    });\n  }\n});\n(function () {\n  // Icons Wizard\n  // --------------------------------------------------------------------\n  var wizardIcons = document.querySelector('.wizard-icons-example');\n  if (_typeof(wizardIcons) !== undefined && wizardIcons !== null) {\n    var wizardIconsBtnNextList = [].slice.call(wizardIcons.querySelectorAll('.btn-next')),\n      wizardIconsBtnPrevList = [].slice.call(wizardIcons.querySelectorAll('.btn-prev')),\n      wizardIconsBtnSubmit = wizardIcons.querySelector('.btn-submit');\n    var iconsStepper = new Stepper(wizardIcons, {\n      linear: false\n    });\n    if (wizardIconsBtnNextList) {\n      wizardIconsBtnNextList.forEach(function (wizardIconsBtnNext) {\n        wizardIconsBtnNext.addEventListener('click', function (event) {\n          iconsStepper.next();\n        });\n      });\n    }\n    if (wizardIconsBtnPrevList) {\n      wizardIconsBtnPrevList.forEach(function (wizardIconsBtnPrev) {\n        wizardIconsBtnPrev.addEventListener('click', function (event) {\n          iconsStepper.previous();\n        });\n      });\n    }\n    if (wizardIconsBtnSubmit) {\n      wizardIconsBtnSubmit.addEventListener('click', function (event) {\n        alert('Submitted..!!');\n      });\n    }\n  }\n\n  // Vertical Icons Wizard\n  // --------------------------------------------------------------------\n  var wizardIconsVertical = document.querySelector('.wizard-vertical-icons-example');\n  if (_typeof(wizardIconsVertical) !== undefined && wizardIconsVertical !== null) {\n    var wizardIconsVerticalBtnNextList = [].slice.call(wizardIconsVertical.querySelectorAll('.btn-next')),\n      wizardIconsVerticalBtnPrevList = [].slice.call(wizardIconsVertical.querySelectorAll('.btn-prev')),\n      wizardIconsVerticalBtnSubmit = wizardIconsVertical.querySelector('.btn-submit');\n    var verticalIconsStepper = new Stepper(wizardIconsVertical, {\n      linear: false\n    });\n    if (wizardIconsVerticalBtnNextList) {\n      wizardIconsVerticalBtnNextList.forEach(function (wizardIconsVerticalBtnNext) {\n        wizardIconsVerticalBtnNext.addEventListener('click', function (event) {\n          verticalIconsStepper.next();\n        });\n      });\n    }\n    if (wizardIconsVerticalBtnPrevList) {\n      wizardIconsVerticalBtnPrevList.forEach(function (wizardIconsVerticalBtnPrev) {\n        wizardIconsVerticalBtnPrev.addEventListener('click', function (event) {\n          verticalIconsStepper.previous();\n        });\n      });\n    }\n    if (wizardIconsVerticalBtnSubmit) {\n      wizardIconsVerticalBtnSubmit.addEventListener('click', function (event) {\n        alert('Submitted..!!');\n      });\n    }\n  }\n\n  // Icons Modern Wizard\n  // --------------------------------------------------------------------\n  var wizardIconsModern = document.querySelector('.wizard-modern-icons-example');\n  if (_typeof(wizardIconsModern) !== undefined && wizardIconsModern !== null) {\n    var wizardIconsModernBtnNextList = [].slice.call(wizardIconsModern.querySelectorAll('.btn-next')),\n      wizardIconsModernBtnPrevList = [].slice.call(wizardIconsModern.querySelectorAll('.btn-prev')),\n      wizardIconsModernBtnSubmit = wizardIconsModern.querySelector('.btn-submit');\n    var modernIconsStepper = new Stepper(wizardIconsModern, {\n      linear: false\n    });\n    if (wizardIconsModernBtnNextList) {\n      wizardIconsModernBtnNextList.forEach(function (wizardIconsModernBtnNext) {\n        wizardIconsModernBtnNext.addEventListener('click', function (event) {\n          modernIconsStepper.next();\n        });\n      });\n    }\n    if (wizardIconsModernBtnPrevList) {\n      wizardIconsModernBtnPrevList.forEach(function (wizardIconsModernBtnPrev) {\n        wizardIconsModernBtnPrev.addEventListener('click', function (event) {\n          modernIconsStepper.previous();\n        });\n      });\n    }\n    if (wizardIconsModernBtnSubmit) {\n      wizardIconsModernBtnSubmit.addEventListener('click', function (event) {\n        alert('Submitted..!!');\n      });\n    }\n  }\n\n  // Icons Modern Wizard\n  // --------------------------------------------------------------------\n  var wizardIconsModernVertical = document.querySelector('.wizard-modern-vertical-icons-example');\n  if (_typeof(wizardIconsModernVertical) !== undefined && wizardIconsModernVertical !== null) {\n    var wizardIconsModernVerticalBtnNextList = [].slice.call(wizardIconsModernVertical.querySelectorAll('.btn-next')),\n      wizardIconsModernVerticalBtnPrevList = [].slice.call(wizardIconsModernVertical.querySelectorAll('.btn-prev')),\n      wizardIconsModernVerticalBtnSubmit = wizardIconsModernVertical.querySelector('.btn-submit');\n    var verticalModernIconsStepper = new Stepper(wizardIconsModernVertical, {\n      linear: false\n    });\n    if (wizardIconsModernVerticalBtnNextList) {\n      wizardIconsModernVerticalBtnNextList.forEach(function (wizardIconsModernVerticalBtnNext) {\n        wizardIconsModernVerticalBtnNext.addEventListener('click', function (event) {\n          verticalModernIconsStepper.next();\n        });\n      });\n    }\n    if (wizardIconsModernVerticalBtnPrevList) {\n      wizardIconsModernVerticalBtnPrevList.forEach(function (wizardIconsModernVerticalBtnPrev) {\n        wizardIconsModernVerticalBtnPrev.addEventListener('click', function (event) {\n          verticalModernIconsStepper.previous();\n        });\n      });\n    }\n    if (wizardIconsModernVerticalBtnSubmit) {\n      wizardIconsModernVerticalBtnSubmit.addEventListener('click', function (event) {\n        alert('Submitted..!!');\n      });\n    }\n  }\n})();\n\n//# sourceURL=webpack://Sneat/./static/js/form-wizard-icons.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/form-wizard-icons.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});