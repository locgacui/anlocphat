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

/***/ "./static/js/modal-add-new-cc.js":
/*!***************************************!*\
  !*** ./static/js/modal-add-new-cc.js ***!
  \***************************************/
/***/ (function() {

eval("/**\n * Add new credit card\n */\n\n\n\ndocument.addEventListener('DOMContentLoaded', function (e) {\n  (function () {\n    // Variables\n    var creditCardMask = document.querySelector('.credit-card-mask'),\n      expiryDateMask = document.querySelector('.expiry-date-mask'),\n      cvvMask = document.querySelector('.cvv-code-mask'),\n      btnReset = document.querySelector('.btn-reset');\n    var cleave;\n\n    // Credit Card\n    function initCleave() {\n      if (creditCardMask) {\n        cleave = new Cleave(creditCardMask, {\n          creditCard: true,\n          onCreditCardTypeChanged: function onCreditCardTypeChanged(type) {\n            if (type != '' && type != 'unknown') {\n              document.querySelector('.card-type').innerHTML = '<img src=\"' + assetsPath + 'img/icons/payments/' + type + '-cc.png\" class=\"cc-icon-image\" height=\"28\"/>';\n            } else {\n              document.querySelector('.card-type').innerHTML = '';\n            }\n          }\n        });\n      }\n    }\n\n    // Init cleave on show modal (To fix the cc image issue)\n    var addNewCCModal = document.getElementById('addNewCCModal');\n    addNewCCModal.addEventListener('show.bs.modal', function (event) {\n      initCleave();\n    });\n\n    // Expiry Date Mask\n    if (expiryDateMask) {\n      new Cleave(expiryDateMask, {\n        date: true,\n        delimiter: '/',\n        datePattern: ['m', 'y']\n      });\n    }\n\n    // CVV\n    if (cvvMask) {\n      new Cleave(cvvMask, {\n        numeral: true,\n        numeralPositiveOnly: true\n      });\n    }\n\n    // Credit card form validation\n    FormValidation.formValidation(document.getElementById('addNewCCForm'), {\n      fields: {\n        modalAddCard: {\n          validators: {\n            notEmpty: {\n              message: 'Please enter your credit card number'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap5: new FormValidation.plugins.Bootstrap5({\n          // Use this for enabling/changing valid/invalid class\n          // eleInvalidClass: '',\n          eleValidClass: '',\n          rowSelector: '.col-12'\n        }),\n        submitButton: new FormValidation.plugins.SubmitButton(),\n        // Submit the form when all fields are valid\n        // defaultSubmit: new FormValidation.plugins.DefaultSubmit(),\n        autoFocus: new FormValidation.plugins.AutoFocus()\n      },\n      init: function init(instance) {\n        instance.on('plugins.message.placed', function (e) {\n          //* Move the error message out of the `input-group` element\n          if (e.element.parentElement.classList.contains('input-group')) {\n            e.element.parentElement.insertAdjacentElement('afterend', e.messageElement);\n          }\n        });\n      }\n    }).on('plugins.message.displayed', function (e) {\n      if (e.element.parentElement.classList.contains('input-group')) {\n        //* Move the error message out of the `input-group` element\n        e.element.parentElement.insertAdjacentElement('afterend', e.messageElement.parentElement);\n      }\n    });\n\n    // reset card image on click of cancel\n    btnReset.addEventListener('click', function (e) {\n      // blank '.card-type' innerHTML to remove image\n      document.querySelector('.card-type').innerHTML = '';\n      // destroy cleave and init again on modal open\n      cleave.destroy();\n    });\n  })();\n});\n\n//# sourceURL=webpack://Sneat/./static/js/modal-add-new-cc.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/modal-add-new-cc.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});