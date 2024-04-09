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

/***/ "./static/js/forms-extras.js":
/*!***********************************!*\
  !*** ./static/js/forms-extras.js ***!
  \***********************************/
/***/ (function() {

eval("/**\n * Form Extras\n */\n\n\n\n(function () {\n  var textarea = document.querySelector('#autosize-demo'),\n    creditCard = document.querySelector('.credit-card-mask'),\n    phoneMask = document.querySelector('.phone-number-mask'),\n    dateMask = document.querySelector('.date-mask'),\n    timeMask = document.querySelector('.time-mask'),\n    numeralMask = document.querySelector('.numeral-mask'),\n    blockMask = document.querySelector('.block-mask'),\n    delimiterMask = document.querySelector('.delimiter-mask'),\n    customDelimiter = document.querySelector('.custom-delimiter-mask'),\n    prefixMask = document.querySelector('.prefix-mask');\n\n  // Autosize\n  // --------------------------------------------------------------------\n  if (textarea) {\n    autosize(textarea);\n  }\n\n  // Cleave JS Input Mask\n  // --------------------------------------------------------------------\n\n  // Credit Card\n  if (creditCard) {\n    new Cleave(creditCard, {\n      creditCard: true,\n      onCreditCardTypeChanged: function onCreditCardTypeChanged(type) {\n        if (type != '' && type != 'unknown') {\n          document.querySelector('.card-type').innerHTML = '<img src=\"' + assetsPath + 'img/icons/payments/' + type + '-cc.png\" height=\"28\"/>';\n        } else {\n          document.querySelector('.card-type').innerHTML = '';\n        }\n      }\n    });\n  }\n\n  // Phone Number\n  if (phoneMask) {\n    new Cleave(phoneMask, {\n      phone: true,\n      phoneRegionCode: 'US'\n    });\n  }\n\n  // Date\n  if (dateMask) {\n    new Cleave(dateMask, {\n      date: true,\n      delimiter: '-',\n      datePattern: ['Y', 'm', 'd']\n    });\n  }\n\n  // Time\n  if (timeMask) {\n    new Cleave(timeMask, {\n      time: true,\n      timePattern: ['h', 'm', 's']\n    });\n  }\n\n  //Numeral\n  if (numeralMask) {\n    new Cleave(numeralMask, {\n      numeral: true,\n      numeralThousandsGroupStyle: 'thousand'\n    });\n  }\n\n  //Block\n  if (blockMask) {\n    new Cleave(blockMask, {\n      blocks: [4, 3, 3],\n      uppercase: true\n    });\n  }\n\n  // Delimiter\n  if (delimiterMask) {\n    new Cleave(delimiterMask, {\n      delimiter: '·',\n      blocks: [3, 3, 3],\n      uppercase: true\n    });\n  }\n\n  // Custom Delimiter\n  if (customDelimiter) {\n    new Cleave(customDelimiter, {\n      delimiters: ['.', '.', '-'],\n      blocks: [3, 3, 3, 2],\n      uppercase: true\n    });\n  }\n\n  // Prefix\n  if (prefixMask) {\n    new Cleave(prefixMask, {\n      prefix: '+63',\n      blocks: [3, 3, 3, 4],\n      uppercase: true\n    });\n  }\n})();\n\n// bootstrap-maxlength & repeater (jquery)\n$(function () {\n  var maxlengthInput = $('.bootstrap-maxlength-example'),\n    formRepeater = $('.form-repeater');\n\n  // Bootstrap Max Length\n  // --------------------------------------------------------------------\n  if (maxlengthInput.length) {\n    maxlengthInput.each(function () {\n      $(this).maxlength({\n        warningClass: 'label label-success bg-success text-white',\n        limitReachedClass: 'label label-danger',\n        separator: ' out of ',\n        preText: 'You typed ',\n        postText: ' chars available.',\n        validate: true,\n        threshold: +this.getAttribute('maxlength')\n      });\n    });\n  }\n\n  // Form Repeater\n  // ! Using jQuery each loop to add dynamic id and class for inputs. You may need to improve it based on form fields.\n  // -----------------------------------------------------------------------------------------------------------------\n\n  if (formRepeater.length) {\n    var row = 2;\n    var col = 1;\n    formRepeater.on('submit', function (e) {\n      e.preventDefault();\n    });\n    formRepeater.repeater({\n      show: function show() {\n        var fromControl = $(this).find('.form-control, .form-select');\n        var formLabel = $(this).find('.form-label');\n        fromControl.each(function (i) {\n          var id = 'form-repeater-' + row + '-' + col;\n          $(fromControl[i]).attr('id', id);\n          $(formLabel[i]).attr('for', id);\n          col++;\n        });\n        row++;\n        $(this).slideDown();\n      },\n      hide: function hide(e) {\n        confirm('Are you sure you want to delete this element?') && $(this).slideUp(e);\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack://Sneat/./static/js/forms-extras.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/forms-extras.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});