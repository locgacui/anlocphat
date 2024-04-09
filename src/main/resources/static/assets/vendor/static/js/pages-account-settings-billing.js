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

/***/ "./static/js/pages-account-settings-billing.js":
/*!*****************************************************!*\
  !*** ./static/js/pages-account-settings-billing.js ***!
  \*****************************************************/
/***/ (function() {

eval("/**\n * Account Settings - Billing & Plans\n */\n\n\n\ndocument.addEventListener('DOMContentLoaded', function (e) {\n  (function () {\n    var creditCardMask = document.querySelector('.credit-card-mask'),\n      expiryDateMask = document.querySelector('.expiry-date-mask'),\n      CVVMask = document.querySelector('.cvv-code-mask');\n\n    // Credit Card\n    if (creditCardMask) {\n      new Cleave(creditCardMask, {\n        creditCard: true,\n        onCreditCardTypeChanged: function onCreditCardTypeChanged(type) {\n          if (type != '' && type != 'unknown') {\n            document.querySelector('.card-type').innerHTML = '<img src=\"' + assetsPath + 'img/icons/payments/' + type + '-cc.png\" height=\"28\"/>';\n          } else {\n            document.querySelector('.card-type').innerHTML = '';\n          }\n        }\n      });\n    }\n\n    // Expiry Date Mask\n    if (expiryDateMask) {\n      new Cleave(expiryDateMask, {\n        date: true,\n        delimiter: '/',\n        datePattern: ['m', 'y']\n      });\n    }\n\n    // CVV Mask\n    if (CVVMask) {\n      new Cleave(CVVMask, {\n        numeral: true,\n        numeralPositiveOnly: true\n      });\n    }\n    var formAccSettings = document.getElementById('formAccountSettings'),\n      mobileNumber = document.querySelector('.mobile-number'),\n      zipCode = document.querySelector('.zip-code'),\n      creditCardForm = document.getElementById('creditCardForm');\n\n    // Form validation\n    if (formAccSettings) {\n      var fv = FormValidation.formValidation(formAccSettings, {\n        fields: {\n          companyName: {\n            validators: {\n              notEmpty: {\n                message: 'Please enter company name'\n              }\n            }\n          },\n          billingEmail: {\n            validators: {\n              notEmpty: {\n                message: 'Please enter billing email'\n              },\n              emailAddress: {\n                message: 'Please enter valid email address'\n              }\n            }\n          }\n        },\n        plugins: {\n          trigger: new FormValidation.plugins.Trigger(),\n          bootstrap5: new FormValidation.plugins.Bootstrap5({\n            eleValidClass: '',\n            rowSelector: '.col-sm-6'\n          }),\n          submitButton: new FormValidation.plugins.SubmitButton(),\n          // Submit the form when all fields are valid\n          // defaultSubmit: new FormValidation.plugins.DefaultSubmit(),\n          autoFocus: new FormValidation.plugins.AutoFocus()\n        }\n      });\n    }\n\n    // Credit card form validation\n    if (creditCardForm) {\n      FormValidation.formValidation(creditCardForm, {\n        fields: {\n          paymentCard: {\n            validators: {\n              notEmpty: {\n                message: 'Please enter your credit card number'\n              }\n            }\n          }\n        },\n        plugins: {\n          trigger: new FormValidation.plugins.Trigger(),\n          bootstrap5: new FormValidation.plugins.Bootstrap5({\n            // Use this for enabling/changing valid/invalid class\n            // eleInvalidClass: '',\n            eleValidClass: ''\n          }),\n          submitButton: new FormValidation.plugins.SubmitButton(),\n          // Submit the form when all fields are valid\n          // defaultSubmit: new FormValidation.plugins.DefaultSubmit(),\n          autoFocus: new FormValidation.plugins.AutoFocus()\n        },\n        init: function init(instance) {\n          instance.on('plugins.message.placed', function (e) {\n            //* Move the error message out of the `input-group` element\n            if (e.element.parentElement.classList.contains('input-group')) {\n              e.element.parentElement.insertAdjacentElement('afterend', e.messageElement);\n            }\n          });\n        }\n      });\n    }\n\n    // Cancel Subscription alert\n    var cancelSubscription = document.querySelector('.cancel-subscription');\n\n    // Alert With Functional Confirm Button\n    if (cancelSubscription) {\n      cancelSubscription.onclick = function () {\n        Swal.fire({\n          text: 'Are you sure you would like to cancel your subscription?',\n          icon: 'warning',\n          showCancelButton: true,\n          confirmButtonText: 'Yes',\n          customClass: {\n            confirmButton: 'btn btn-primary me-2',\n            cancelButton: 'btn btn-label-secondary'\n          },\n          buttonsStyling: false\n        }).then(function (result) {\n          if (result.value) {\n            Swal.fire({\n              icon: 'success',\n              title: 'Unsubscribed!',\n              text: 'Your subscription cancelled successfully.',\n              customClass: {\n                confirmButton: 'btn btn-success'\n              }\n            });\n          } else if (result.dismiss === Swal.DismissReason.cancel) {\n            Swal.fire({\n              title: 'Cancelled',\n              text: 'Unsubscription Cancelled!!',\n              icon: 'error',\n              customClass: {\n                confirmButton: 'btn btn-success'\n              }\n            });\n          }\n        });\n      };\n    }\n    // CleaveJS validation\n\n    // Phone Mask\n    if (mobileNumber) {\n      new Cleave(mobileNumber, {\n        phone: true,\n        phoneRegionCode: 'US'\n      });\n    }\n\n    // Pincode\n    if (zipCode) {\n      new Cleave(zipCode, {\n        delimiter: '',\n        numeral: true\n      });\n    }\n  })();\n});\n\n// Select2 (jquery)\n$(function () {\n  var select2 = $('.select2');\n\n  // Select2\n  if (select2.length) {\n    select2.each(function () {\n      var $this = $(this);\n      $this.wrap('<div class=\"position-relative\"></div>');\n      $this.select2({\n        dropdownParent: $this.parent()\n      });\n    });\n  }\n});\n\n//# sourceURL=webpack://Sneat/./static/js/pages-account-settings-billing.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/pages-account-settings-billing.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});