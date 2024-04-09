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

/***/ "./static/js/pages-account-settings-account.js":
/*!*****************************************************!*\
  !*** ./static/js/pages-account-settings-account.js ***!
  \*****************************************************/
/***/ (function() {

eval("/**\n * Account Settings - Account\n */\n\n\n\ndocument.addEventListener('DOMContentLoaded', function (e) {\n  (function () {\n    var formAccSettings = document.querySelector('#formAccountSettings'),\n      deactivateAcc = document.querySelector('#formAccountDeactivation'),\n      deactivateButton = deactivateAcc.querySelector('.deactivate-account');\n\n    // Form validation for Add new record\n    if (formAccSettings) {\n      var fv = FormValidation.formValidation(formAccSettings, {\n        fields: {\n          firstName: {\n            validators: {\n              notEmpty: {\n                message: 'Please enter first name'\n              }\n            }\n          },\n          lastName: {\n            validators: {\n              notEmpty: {\n                message: 'Please enter last name'\n              }\n            }\n          }\n        },\n        plugins: {\n          trigger: new FormValidation.plugins.Trigger(),\n          bootstrap5: new FormValidation.plugins.Bootstrap5({\n            eleValidClass: '',\n            rowSelector: '.col-md-6'\n          }),\n          submitButton: new FormValidation.plugins.SubmitButton(),\n          // Submit the form when all fields are valid\n          // defaultSubmit: new FormValidation.plugins.DefaultSubmit(),\n          autoFocus: new FormValidation.plugins.AutoFocus()\n        },\n        init: function init(instance) {\n          instance.on('plugins.message.placed', function (e) {\n            if (e.element.parentElement.classList.contains('input-group')) {\n              e.element.parentElement.insertAdjacentElement('afterend', e.messageElement);\n            }\n          });\n        }\n      });\n    }\n    if (deactivateAcc) {\n      var _fv = FormValidation.formValidation(deactivateAcc, {\n        fields: {\n          accountActivation: {\n            validators: {\n              notEmpty: {\n                message: 'Please confirm you want to delete account'\n              }\n            }\n          }\n        },\n        plugins: {\n          trigger: new FormValidation.plugins.Trigger(),\n          bootstrap5: new FormValidation.plugins.Bootstrap5({\n            eleValidClass: ''\n          }),\n          submitButton: new FormValidation.plugins.SubmitButton(),\n          fieldStatus: new FormValidation.plugins.FieldStatus({\n            onStatusChanged: function onStatusChanged(areFieldsValid) {\n              areFieldsValid ?\n              // Enable the submit button\n              // so user has a chance to submit the form again\n              deactivateButton.removeAttribute('disabled') :\n              // Disable the submit button\n              deactivateButton.setAttribute('disabled', 'disabled');\n            }\n          }),\n          // Submit the form when all fields are valid\n          // defaultSubmit: new FormValidation.plugins.DefaultSubmit(),\n          autoFocus: new FormValidation.plugins.AutoFocus()\n        },\n        init: function init(instance) {\n          instance.on('plugins.message.placed', function (e) {\n            if (e.element.parentElement.classList.contains('input-group')) {\n              e.element.parentElement.insertAdjacentElement('afterend', e.messageElement);\n            }\n          });\n        }\n      });\n    }\n\n    // Deactivate account alert\n    var accountActivation = document.querySelector('#accountActivation');\n\n    // Alert With Functional Confirm Button\n    if (deactivateButton) {\n      deactivateButton.onclick = function () {\n        if (accountActivation.checked == true) {\n          Swal.fire({\n            text: 'Are you sure you would like to deactivate your account?',\n            icon: 'warning',\n            showCancelButton: true,\n            confirmButtonText: 'Yes',\n            customClass: {\n              confirmButton: 'btn btn-primary me-2',\n              cancelButton: 'btn btn-label-secondary'\n            },\n            buttonsStyling: false\n          }).then(function (result) {\n            if (result.value) {\n              Swal.fire({\n                icon: 'success',\n                title: 'Deleted!',\n                text: 'Your file has been deleted.',\n                customClass: {\n                  confirmButton: 'btn btn-success'\n                }\n              });\n            } else if (result.dismiss === Swal.DismissReason.cancel) {\n              Swal.fire({\n                title: 'Cancelled',\n                text: 'Deactivation Cancelled!!',\n                icon: 'error',\n                customClass: {\n                  confirmButton: 'btn btn-success'\n                }\n              });\n            }\n          });\n        }\n      };\n    }\n\n    // CleaveJS validation\n\n    var phoneNumber = document.querySelector('#phoneNumber'),\n      zipCode = document.querySelector('#zipCode');\n    // Phone Mask\n    if (phoneNumber) {\n      new Cleave(phoneNumber, {\n        phone: true,\n        phoneRegionCode: 'US'\n      });\n    }\n\n    // Pincode\n    if (zipCode) {\n      new Cleave(zipCode, {\n        delimiter: '',\n        numeral: true\n      });\n    }\n\n    // Update/reset user image of account page\n    var accountUserImage = document.getElementById('uploadedAvatar');\n    var fileInput = document.querySelector('.account-file-input'),\n      resetFileInput = document.querySelector('.account-image-reset');\n    if (accountUserImage) {\n      var resetImage = accountUserImage.src;\n      fileInput.onchange = function () {\n        if (fileInput.files[0]) {\n          accountUserImage.src = window.URL.createObjectURL(fileInput.files[0]);\n        }\n      };\n      resetFileInput.onclick = function () {\n        fileInput.value = '';\n        accountUserImage.src = resetImage;\n      };\n    }\n  })();\n});\n\n// Select2 (jquery)\n$(function () {\n  var select2 = $('.select2');\n  // For all Select2\n  if (select2.length) {\n    select2.each(function () {\n      var $this = $(this);\n      $this.wrap('<div class=\"position-relative\"></div>');\n      $this.select2({\n        dropdownParent: $this.parent()\n      });\n    });\n  }\n});\n\n//# sourceURL=webpack://Sneat/./static/js/pages-account-settings-account.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/pages-account-settings-account.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});