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

/***/ "./static/js/wizard-ex-create-deal.js":
/*!********************************************!*\
  !*** ./static/js/wizard-ex-create-deal.js ***!
  \********************************************/
/***/ (function() {

eval("/**\n *  Form Wizard\n */\n\n\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n(function () {\n  // flatpickrRange\n  var flatpickrRange = document.querySelector('#dealDuration');\n  if (flatpickrRange) {\n    flatpickrRange.flatpickr({\n      mode: 'range'\n    });\n  }\n\n  // Init custom option check\n  window.Helpers.initCustomOptionCheck();\n  // Vertical Wizard\n  // --------------------------------------------------------------------\n\n  var wizardCreateDeal = document.querySelector('#wizard-create-deal');\n  if (_typeof(wizardCreateDeal) !== undefined && wizardCreateDeal !== null) {\n    // Wizard form\n    var wizardCreateDealForm = wizardCreateDeal.querySelector('#wizard-create-deal-form');\n    // Wizard steps\n    var wizardCreateDealFormStep1 = wizardCreateDealForm.querySelector('#deal-type');\n    var wizardCreateDealFormStep2 = wizardCreateDealForm.querySelector('#deal-details');\n    var wizardCreateDealFormStep3 = wizardCreateDealForm.querySelector('#deal-usage');\n    var wizardCreateDealFormStep4 = wizardCreateDealForm.querySelector('#review-complete');\n    // Wizard next prev button\n    var wizardCreateDealNext = [].slice.call(wizardCreateDealForm.querySelectorAll('.btn-next'));\n    var wizardCreateDealPrev = [].slice.call(wizardCreateDealForm.querySelectorAll('.btn-prev'));\n    var validationStepper = new Stepper(wizardCreateDeal, {\n      linear: true\n    });\n\n    // Deal Type\n    var FormValidation1 = FormValidation.formValidation(wizardCreateDealFormStep1, {\n      fields: {\n        dealAmount: {\n          validators: {\n            notEmpty: {\n              message: 'Please enter amount'\n            },\n            numeric: {\n              message: 'The amount must be a number'\n            }\n          }\n        },\n        dealRegion: {\n          validators: {\n            notEmpty: {\n              message: 'Please select region'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap5: new FormValidation.plugins.Bootstrap5({\n          // Use this for enabling/changing valid/invalid class\n          // eleInvalidClass: '',\n          eleValidClass: '',\n          rowSelector: '.col-sm-6'\n        }),\n        autoFocus: new FormValidation.plugins.AutoFocus(),\n        submitButton: new FormValidation.plugins.SubmitButton()\n      }\n    }).on('core.form.valid', function () {\n      // Jump to the next step when all fields in the current step are valid\n      validationStepper.next();\n    });\n\n    // select2 (Region)\n    var dealRegion = $('#dealRegion');\n    if (dealRegion.length) {\n      dealRegion.wrap('<div class=\"position-relative\"></div>');\n      dealRegion.select2({\n        placeholder: 'Select an region',\n        dropdownParent: dealRegion.parent()\n      }).on('change', function () {\n        // Revalidate the region field when an option is chosen\n        FormValidation1.revalidateField('dealRegion');\n      });\n    }\n\n    // Deal Details\n    var FormValidation2 = FormValidation.formValidation(wizardCreateDealFormStep2, {\n      fields: {\n        // * Validate the fields here based on your requirements\n        dealTitle: {\n          validators: {\n            notEmpty: {\n              message: 'Please enter deal title'\n            }\n          }\n        },\n        dealCode: {\n          validators: {\n            notEmpty: {\n              message: 'Please enter deal code'\n            },\n            stringLength: {\n              min: 4,\n              max: 10,\n              message: 'The deal code must be more than 4 and less than 10 characters long'\n            },\n            regexp: {\n              regexp: /^[A-Z0-9]+$/,\n              message: 'The deal code can only consist of capital alphabetical and number'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap5: new FormValidation.plugins.Bootstrap5({\n          // Use this for enabling/changing valid/invalid class\n          // eleInvalidClass: '',\n          eleValidClass: '',\n          rowSelector: '.col-sm-6'\n        }),\n        autoFocus: new FormValidation.plugins.AutoFocus(),\n        submitButton: new FormValidation.plugins.SubmitButton()\n      }\n    }).on('core.form.valid', function () {\n      // Jump to the next step when all fields in the current step are valid\n      validationStepper.next();\n    });\n\n    // select2 (Offered Item)\n    var dealOfferedItem = $('#dealOfferedItem');\n    if (dealOfferedItem.length) {\n      dealOfferedItem.wrap('<div class=\"position-relative\"></div>');\n      dealOfferedItem.select2({\n        placeholder: 'Select an offered item',\n        dropdownParent: dealOfferedItem.parent()\n      }).on('change', function () {\n        // Revalidate the field if needed when an option is chosen\n        // FormValidation2.revalidateField('dealOfferedItem');\n      });\n    }\n\n    // Deal Usage\n    var FormValidation3 = FormValidation.formValidation(wizardCreateDealFormStep3, {\n      fields: {\n        // * Validate the fields here based on your requirements\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap5: new FormValidation.plugins.Bootstrap5({\n          // Use this for enabling/changing valid/invalid class\n          // eleInvalidClass: '',\n          eleValidClass: '',\n          rowSelector: '.col-sm-6'\n        }),\n        autoFocus: new FormValidation.plugins.AutoFocus(),\n        submitButton: new FormValidation.plugins.SubmitButton()\n      }\n    }).on('core.form.valid', function () {\n      validationStepper.next();\n    });\n\n    // Deal Usage\n    var FormValidation4 = FormValidation.formValidation(wizardCreateDealFormStep4, {\n      fields: {\n        // * Validate the fields here based on your requirements\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap5: new FormValidation.plugins.Bootstrap5({\n          // Use this for enabling/changing valid/invalid class\n          // eleInvalidClass: '',\n          eleValidClass: '',\n          rowSelector: '.col-md-12'\n        }),\n        autoFocus: new FormValidation.plugins.AutoFocus(),\n        submitButton: new FormValidation.plugins.SubmitButton()\n      }\n    }).on('core.form.valid', function () {\n      // You can submit the form\n      // wizardCreateDealForm.submit()\n      // or send the form data to server via an Ajax request\n      // To make the demo simple, I just placed an alert\n      alert('Submitted..!!');\n    });\n    wizardCreateDealNext.forEach(function (item) {\n      item.addEventListener('click', function (event) {\n        // When click the Next button, we will validate the current step\n        switch (validationStepper._currentIndex) {\n          case 0:\n            FormValidation1.validate();\n            break;\n          case 1:\n            FormValidation2.validate();\n            break;\n          case 2:\n            FormValidation3.validate();\n            break;\n          case 3:\n            FormValidation4.validate();\n            break;\n          default:\n            break;\n        }\n      });\n    });\n    wizardCreateDealPrev.forEach(function (item) {\n      item.addEventListener('click', function (event) {\n        switch (validationStepper._currentIndex) {\n          case 3:\n            validationStepper.previous();\n            break;\n          case 2:\n            validationStepper.previous();\n            break;\n          case 1:\n            validationStepper.previous();\n            break;\n          case 0:\n          default:\n            break;\n        }\n      });\n    });\n  }\n})();\n\n//# sourceURL=webpack://Sneat/./static/js/wizard-ex-create-deal.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/wizard-ex-create-deal.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});