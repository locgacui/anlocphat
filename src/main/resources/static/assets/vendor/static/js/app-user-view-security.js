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

/***/ "./static/js/app-user-view-security.js":
/*!*********************************************!*\
  !*** ./static/js/app-user-view-security.js ***!
  \*********************************************/
/***/ (function() {

eval("/**\n * App User View - Security\n */\n\n\n\n(function () {\n  var formChangePass = document.querySelector('#formChangePassword');\n\n  // Form validation for Change password\n  if (formChangePass) {\n    var fv = FormValidation.formValidation(formChangePass, {\n      fields: {\n        newPassword: {\n          validators: {\n            notEmpty: {\n              message: 'Please enter new password'\n            },\n            stringLength: {\n              min: 8,\n              message: 'Password must be more than 8 characters'\n            }\n          }\n        },\n        confirmPassword: {\n          validators: {\n            notEmpty: {\n              message: 'Please confirm new password'\n            },\n            identical: {\n              compare: function compare() {\n                return formChangePass.querySelector('[name=\"newPassword\"]').value;\n              },\n              message: 'The password and its confirm are not the same'\n            },\n            stringLength: {\n              min: 8,\n              message: 'Password must be more than 8 characters'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap5: new FormValidation.plugins.Bootstrap5({\n          eleValidClass: '',\n          rowSelector: '.form-password-toggle'\n        }),\n        submitButton: new FormValidation.plugins.SubmitButton(),\n        // Submit the form when all fields are valid\n        // defaultSubmit: new FormValidation.plugins.DefaultSubmit(),\n        autoFocus: new FormValidation.plugins.AutoFocus()\n      },\n      init: function init(instance) {\n        instance.on('plugins.message.placed', function (e) {\n          if (e.element.parentElement.classList.contains('input-group')) {\n            e.element.parentElement.insertAdjacentElement('afterend', e.messageElement);\n          }\n        });\n      }\n    });\n  }\n})();\n\n//# sourceURL=webpack://Sneat/./static/js/app-user-view-security.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/app-user-view-security.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});