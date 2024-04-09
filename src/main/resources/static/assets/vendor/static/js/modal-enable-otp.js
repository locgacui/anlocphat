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

/***/ "./static/js/modal-enable-otp.js":
/*!***************************************!*\
  !*** ./static/js/modal-enable-otp.js ***!
  \***************************************/
/***/ (function() {

eval("/**\n * Enable OTP\n */\n\n\n\ndocument.addEventListener('DOMContentLoaded', function (e) {\n  (function () {\n    var phoneMask = document.querySelector('.phone-number-otp-mask');\n\n    // Phone Number Input Mask\n    if (phoneMask) {\n      new Cleave(phoneMask, {\n        phone: true,\n        phoneRegionCode: 'US'\n      });\n    }\n\n    // Enable OTP form validation\n    FormValidation.formValidation(document.getElementById('enableOTPForm'), {\n      fields: {\n        modalEnableOTPPhone: {\n          validators: {\n            notEmpty: {\n              message: 'Please enter your mobile number'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap5: new FormValidation.plugins.Bootstrap5({\n          // Use this for enabling/changing valid/invalid class\n          // eleInvalidClass: '',\n          eleValidClass: '',\n          rowSelector: '.col-12'\n        }),\n        submitButton: new FormValidation.plugins.SubmitButton(),\n        // Submit the form when all fields are valid\n        // defaultSubmit: new FormValidation.plugins.DefaultSubmit(),\n        autoFocus: new FormValidation.plugins.AutoFocus()\n      },\n      init: function init(instance) {\n        instance.on('plugins.message.placed', function (e) {\n          //* Move the error message out of the `input-group` element\n          if (e.element.parentElement.classList.contains('input-group')) {\n            e.element.parentElement.insertAdjacentElement('afterend', e.messageElement);\n          }\n        });\n      }\n    });\n  })();\n});\n\n//# sourceURL=webpack://Sneat/./static/js/modal-enable-otp.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/modal-enable-otp.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});