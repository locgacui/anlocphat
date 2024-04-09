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

/***/ "./static/js/pages-auth.js":
/*!*********************************!*\
  !*** ./static/js/pages-auth.js ***!
  \*********************************/
/***/ (function() {

eval("/**\n *  Pages Authentication\n */\n\n\n\nvar formAuthentication = document.querySelector('#formAuthentication');\ndocument.addEventListener('DOMContentLoaded', function (e) {\n  (function () {\n    // Form validation for Add new record\n    if (formAuthentication) {\n      var fv = FormValidation.formValidation(formAuthentication, {\n        fields: {\n          username: {\n            validators: {\n              notEmpty: {\n                message: 'Please enter username'\n              },\n              stringLength: {\n                min: 6,\n                message: 'Username must be more than 6 characters'\n              }\n            }\n          },\n          email: {\n            validators: {\n              notEmpty: {\n                message: 'Please enter your email'\n              },\n              emailAddress: {\n                message: 'Please enter valid email address'\n              }\n            }\n          },\n          'email-username': {\n            validators: {\n              notEmpty: {\n                message: 'Please enter email / username'\n              },\n              stringLength: {\n                min: 6,\n                message: 'Username must be more than 6 characters'\n              }\n            }\n          },\n          password: {\n            validators: {\n              notEmpty: {\n                message: 'Please enter your password'\n              },\n              stringLength: {\n                min: 6,\n                message: 'Password must be more than 6 characters'\n              }\n            }\n          },\n          'confirm-password': {\n            validators: {\n              notEmpty: {\n                message: 'Please confirm password'\n              },\n              identical: {\n                compare: function compare() {\n                  return formAuthentication.querySelector('[name=\"password\"]').value;\n                },\n                message: 'The password and its confirm are not the same'\n              },\n              stringLength: {\n                min: 6,\n                message: 'Password must be more than 6 characters'\n              }\n            }\n          },\n          terms: {\n            validators: {\n              notEmpty: {\n                message: 'Please agree terms & conditions'\n              }\n            }\n          }\n        },\n        plugins: {\n          trigger: new FormValidation.plugins.Trigger(),\n          bootstrap5: new FormValidation.plugins.Bootstrap5({\n            eleValidClass: '',\n            rowSelector: '.mb-3'\n          }),\n          submitButton: new FormValidation.plugins.SubmitButton(),\n          defaultSubmit: new FormValidation.plugins.DefaultSubmit(),\n          autoFocus: new FormValidation.plugins.AutoFocus()\n        },\n        init: function init(instance) {\n          instance.on('plugins.message.placed', function (e) {\n            if (e.element.parentElement.classList.contains('input-group')) {\n              e.element.parentElement.insertAdjacentElement('afterend', e.messageElement);\n            }\n          });\n        }\n      });\n    }\n\n    //  Two Steps Verification\n    var numeralMask = document.querySelectorAll('.numeral-mask');\n\n    // Verification masking\n    if (numeralMask.length) {\n      numeralMask.forEach(function (e) {\n        new Cleave(e, {\n          numeral: true\n        });\n      });\n    }\n  })();\n});\n\n//# sourceURL=webpack://Sneat/./static/js/pages-auth.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/pages-auth.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});