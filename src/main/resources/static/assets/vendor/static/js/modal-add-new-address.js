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

/***/ "./static/js/modal-add-new-address.js":
/*!********************************************!*\
  !*** ./static/js/modal-add-new-address.js ***!
  \********************************************/
/***/ (function() {

eval("/**\n * Add New Address\n */\n\n\n\n// Select2 (jquery)\n$(function () {\n  var select2 = $('.select2');\n\n  // Select2 Country\n  if (select2.length) {\n    select2.each(function () {\n      var $this = $(this);\n      $this.wrap('<div class=\"position-relative\"></div>').select2({\n        placeholder: 'Select value',\n        dropdownParent: $this.parent()\n      });\n    });\n  }\n});\n\n// Add New Address form validation\ndocument.addEventListener('DOMContentLoaded', function () {\n  (function () {\n    // initCustomOptionCheck on modal show to update the custom select\n    var addNewAddress = document.getElementById('addNewAddress');\n    addNewAddress.addEventListener('show.bs.modal', function (event) {\n      // Init custom option check\n      window.Helpers.initCustomOptionCheck();\n    });\n    FormValidation.formValidation(document.getElementById('addNewAddressForm'), {\n      fields: {\n        modalAddressFirstName: {\n          validators: {\n            notEmpty: {\n              message: 'Please enter your first name'\n            },\n            regexp: {\n              regexp: /^[a-zA-Zs]+$/,\n              message: 'The first name can only consist of alphabetical'\n            }\n          }\n        },\n        modalAddressLastName: {\n          validators: {\n            notEmpty: {\n              message: 'Please enter your last name'\n            },\n            regexp: {\n              regexp: /^[a-zA-Zs]+$/,\n              message: 'The last name can only consist of alphabetical'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap5: new FormValidation.plugins.Bootstrap5({\n          // Use this for enabling/changing valid/invalid class\n          // eleInvalidClass: '',\n          eleValidClass: '',\n          rowSelector: '.col-12'\n        }),\n        submitButton: new FormValidation.plugins.SubmitButton(),\n        // Submit the form when all fields are valid\n        // defaultSubmit: new FormValidation.plugins.DefaultSubmit(),\n        autoFocus: new FormValidation.plugins.AutoFocus()\n      }\n    });\n  })();\n});\n\n//# sourceURL=webpack://Sneat/./static/js/modal-add-new-address.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/modal-add-new-address.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});