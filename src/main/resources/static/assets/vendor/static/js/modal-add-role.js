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

/***/ "./static/js/modal-add-role.js":
/*!*************************************!*\
  !*** ./static/js/modal-add-role.js ***!
  \*************************************/
/***/ (function() {

eval("/**\n * Add new role Modal JS\n */\n\n\n\ndocument.addEventListener('DOMContentLoaded', function (e) {\n  (function () {\n    // add role form validation\n    FormValidation.formValidation(document.getElementById('addRoleForm'), {\n      fields: {\n        modalRoleName: {\n          validators: {\n            notEmpty: {\n              message: 'Please enter role name'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap5: new FormValidation.plugins.Bootstrap5({\n          // Use this for enabling/changing valid/invalid class\n          // eleInvalidClass: '',\n          eleValidClass: '',\n          rowSelector: '.col-12'\n        }),\n        submitButton: new FormValidation.plugins.SubmitButton(),\n        // Submit the form when all fields are valid\n        // defaultSubmit: new FormValidation.plugins.DefaultSubmit(),\n        autoFocus: new FormValidation.plugins.AutoFocus()\n      }\n    });\n\n    // Select All checkbox click\n    var selectAll = document.querySelector('#selectAll'),\n      checkboxList = document.querySelectorAll('[type=\"checkbox\"]');\n    selectAll.addEventListener('change', function (t) {\n      checkboxList.forEach(function (e) {\n        e.checked = t.target.checked;\n      });\n    });\n  })();\n});\n\n//# sourceURL=webpack://Sneat/./static/js/modal-add-role.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/modal-add-role.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});