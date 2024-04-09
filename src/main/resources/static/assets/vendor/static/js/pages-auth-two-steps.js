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

/***/ "./static/js/pages-auth-two-steps.js":
/*!*******************************************!*\
  !*** ./static/js/pages-auth-two-steps.js ***!
  \*******************************************/
/***/ (function() {

eval("/**\n *  Page auth two steps\n */\n\n\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\ndocument.addEventListener('DOMContentLoaded', function (e) {\n  (function () {\n    var maskWrapper = document.querySelector('.numeral-mask-wrapper');\n    var _iterator = _createForOfIteratorHelper(maskWrapper.children),\n      _step;\n    try {\n      var _loop = function _loop() {\n        var pin = _step.value;\n        pin.onkeyup = function (e) {\n          // Check if the key pressed is a number (0-9)\n          if (/^\\d$/.test(e.key)) {\n            // While entering value, go to next\n            if (pin.nextElementSibling) {\n              if (this.value.length === parseInt(this.attributes['maxlength'].value)) {\n                pin.nextElementSibling.focus();\n              }\n            }\n          } else if (e.key === 'Backspace') {\n            // While deleting entered value, go to previous\n            if (pin.previousElementSibling) {\n              pin.previousElementSibling.focus();\n            }\n          }\n        };\n        // Prevent the default behavior for the minus key\n        pin.onkeypress = function (e) {\n          if (e.key === '-') {\n            e.preventDefault();\n          }\n        };\n      };\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        _loop();\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n    var twoStepsForm = document.querySelector('#twoStepsForm');\n\n    // Form validation for Add new record\n    if (twoStepsForm) {\n      var fv = FormValidation.formValidation(twoStepsForm, {\n        fields: {\n          otp: {\n            validators: {\n              notEmpty: {\n                message: 'Please enter otp'\n              }\n            }\n          }\n        },\n        plugins: {\n          trigger: new FormValidation.plugins.Trigger(),\n          bootstrap5: new FormValidation.plugins.Bootstrap5({\n            eleValidClass: '',\n            rowSelector: '.mb-3'\n          }),\n          submitButton: new FormValidation.plugins.SubmitButton(),\n          defaultSubmit: new FormValidation.plugins.DefaultSubmit(),\n          autoFocus: new FormValidation.plugins.AutoFocus()\n        }\n      });\n      var numeralMaskList = twoStepsForm.querySelectorAll('.numeral-mask');\n      var keyupHandler = function keyupHandler() {\n        var otpFlag = true,\n          otpVal = '';\n        numeralMaskList.forEach(function (numeralMaskEl) {\n          if (numeralMaskEl.value === '') {\n            otpFlag = false;\n            twoStepsForm.querySelector('[name=\"otp\"]').value = '';\n          }\n          otpVal = otpVal + numeralMaskEl.value;\n        });\n        if (otpFlag) {\n          twoStepsForm.querySelector('[name=\"otp\"]').value = otpVal;\n        }\n      };\n      numeralMaskList.forEach(function (numeralMaskEle) {\n        numeralMaskEle.addEventListener('keyup', keyupHandler);\n      });\n    }\n  })();\n});\n\n//# sourceURL=webpack://Sneat/./static/js/pages-auth-two-steps.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/pages-auth-two-steps.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});