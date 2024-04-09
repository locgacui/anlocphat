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

/***/ "./static/js/modal-edit-cc.js":
/*!************************************!*\
  !*** ./static/js/modal-edit-cc.js ***!
  \************************************/
/***/ (function() {

eval("/**\n * Edit credit card\n */\n\n\n\ndocument.addEventListener('DOMContentLoaded', function (e) {\n  (function () {\n    var editCreditCardMaskEdit = document.querySelector('.credit-card-mask-edit'),\n      editExpiryDateMaskEdit = document.querySelector('.expiry-date-mask-edit'),\n      editCVVMaskEdit = document.querySelector('.cvv-code-mask-edit');\n\n    // Credit Card\n    if (editCreditCardMaskEdit) {\n      new Cleave(editCreditCardMaskEdit, {\n        creditCard: true,\n        onCreditCardTypeChanged: function onCreditCardTypeChanged(type) {\n          if (type != '' && type != 'unknown') {\n            document.querySelector('.card-type-edit').innerHTML = '<img src=\"' + assetsPath + 'img/icons/payments/' + type + '-cc.png\" height=\"28\"/>';\n          } else {\n            document.querySelector('.card-type-edit').innerHTML = '';\n          }\n        }\n      });\n    }\n\n    // Expiry Date MaskEdit\n    if (editExpiryDateMaskEdit) {\n      new Cleave(editExpiryDateMaskEdit, {\n        date: true,\n        delimiter: '/',\n        datePattern: ['m', 'y']\n      });\n    }\n\n    // CVV MaskEdit\n    if (editCVVMaskEdit) {\n      new Cleave(editCVVMaskEdit, {\n        numeral: true,\n        numeralPositiveOnly: true\n      });\n    }\n\n    // Credit card form validation\n    FormValidation.formValidation(document.getElementById('editCCForm'), {\n      fields: {\n        modalEditCard: {\n          validators: {\n            notEmpty: {\n              message: 'Please enter your credit card number'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap5: new FormValidation.plugins.Bootstrap5({\n          // Use this for enabling/changing valid/invalid class\n          // eleInvalidClass: '',\n          eleValidClass: '',\n          rowSelector: '.col-12'\n        }),\n        submitButton: new FormValidation.plugins.SubmitButton(),\n        // Submit the form when all fields are valid\n        // defaultSubmit: new FormValidation.plugins.DefaultSubmit(),\n        autoFocus: new FormValidation.plugins.AutoFocus()\n      },\n      init: function init(instance) {\n        instance.on('plugins.message.placed', function (e) {\n          //* Move the error message out of the `input-group` element\n          if (e.element.parentElement.classList.contains('input-group')) {\n            e.element.parentElement.insertAdjacentElement('afterend', e.messageElement);\n          }\n        });\n      }\n    });\n  })();\n});\n\n//# sourceURL=webpack://Sneat/./static/js/modal-edit-cc.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/modal-edit-cc.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});