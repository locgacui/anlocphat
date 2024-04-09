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

/***/ "./static/js/form-layouts.js":
/*!***********************************!*\
  !*** ./static/js/form-layouts.js ***!
  \***********************************/
/***/ (function() {

eval("/**\n * Form Layout Vertical\n */\n\n\n(function () {\n  var phoneMaskList = document.querySelectorAll('.phone-mask'),\n    creditCardMask = document.querySelector('.credit-card-mask'),\n    expiryDateMask = document.querySelector('.expiry-date-mask'),\n    cvvMask = document.querySelector('.cvv-code-mask'),\n    datepickerList = document.querySelectorAll('.dob-picker'),\n    formCheckInputPayment = document.querySelectorAll('.form-check-input-payment');\n\n  // Phone Number\n  if (phoneMaskList) {\n    phoneMaskList.forEach(function (phoneMask) {\n      new Cleave(phoneMask, {\n        phone: true,\n        phoneRegionCode: 'US'\n      });\n    });\n  }\n\n  // Credit Card\n  if (creditCardMask) {\n    new Cleave(creditCardMask, {\n      creditCard: true,\n      onCreditCardTypeChanged: function onCreditCardTypeChanged(type) {\n        if (type != '' && type != 'unknown') {\n          document.querySelector('.card-type').innerHTML = '<img src=\"' + assetsPath + 'img/icons/payments/' + type + '-cc.png\" height=\"28\"/>';\n        } else {\n          document.querySelector('.card-type').innerHTML = '';\n        }\n      }\n    });\n  }\n\n  // Expiry Date Mask\n  if (expiryDateMask) {\n    new Cleave(expiryDateMask, {\n      date: true,\n      delimiter: '/',\n      datePattern: ['m', 'y']\n    });\n  }\n\n  // CVV\n  if (cvvMask) {\n    new Cleave(cvvMask, {\n      numeral: true,\n      numeralPositiveOnly: true\n    });\n  }\n\n  // Flat Picker Birth Date\n  if (datepickerList) {\n    datepickerList.forEach(function (datepicker) {\n      datepicker.flatpickr({\n        monthSelectorType: 'static'\n      });\n    });\n  }\n\n  // Toggle CC Payment Method based on selected option\n  if (formCheckInputPayment) {\n    formCheckInputPayment.forEach(function (paymentInput) {\n      paymentInput.addEventListener('change', function (e) {\n        var paymentInputValue = e.target.value;\n        if (paymentInputValue === 'credit-card') {\n          document.querySelector('#form-credit-card').classList.remove('d-none');\n        } else {\n          document.querySelector('#form-credit-card').classList.add('d-none');\n        }\n      });\n    });\n  }\n})();\n\n// select2 (jquery)\n$(function () {\n  // Form sticky actions\n  var topSpacing;\n  var stickyEl = $('.sticky-element');\n\n  // Init custom option check\n  window.Helpers.initCustomOptionCheck();\n\n  // Set topSpacing if the navbar is fixed\n  if (Helpers.isNavbarFixed()) {\n    topSpacing = $('.layout-navbar').height() + 7;\n  } else {\n    topSpacing = 0;\n  }\n\n  // sticky element init (Sticky Layout)\n  if (stickyEl.length) {\n    stickyEl.sticky({\n      topSpacing: topSpacing,\n      zIndex: 9\n    });\n  }\n\n  // Select2 Country\n  var select2 = $('.select2');\n  if (select2.length) {\n    select2.each(function () {\n      var $this = $(this);\n      $this.wrap('<div class=\"position-relative\"></div>').select2({\n        placeholder: 'Select value',\n        dropdownParent: $this.parent()\n      });\n    });\n  }\n});\n\n//# sourceURL=webpack://Sneat/./static/js/form-layouts.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/form-layouts.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});