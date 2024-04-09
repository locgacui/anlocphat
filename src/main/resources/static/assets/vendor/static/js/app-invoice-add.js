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

/***/ "./static/js/app-invoice-add.js":
/*!**************************************!*\
  !*** ./static/js/app-invoice-add.js ***!
  \**************************************/
/***/ (function() {

eval("/**\n * App Invoice - Add\n */\n\n\n\n(function () {\n  var invoiceItemPriceList = document.querySelectorAll('.invoice-item-price'),\n    invoiceItemQtyList = document.querySelectorAll('.invoice-item-qty'),\n    invoiceDateList = document.querySelectorAll('.date-picker');\n\n  // Price\n  if (invoiceItemPriceList) {\n    invoiceItemPriceList.forEach(function (invoiceItemPrice) {\n      new Cleave(invoiceItemPrice, {\n        delimiter: '',\n        numeral: true\n      });\n    });\n  }\n\n  // Qty\n  if (invoiceItemQtyList) {\n    invoiceItemQtyList.forEach(function (invoiceItemQty) {\n      new Cleave(invoiceItemQty, {\n        delimiter: '',\n        numeral: true\n      });\n    });\n  }\n\n  // Datepicker\n  if (invoiceDateList) {\n    invoiceDateList.forEach(function (invoiceDateEl) {\n      invoiceDateEl.flatpickr({\n        monthSelectorType: 'static'\n      });\n    });\n  }\n})();\n\n// repeater (jquery)\n$(function () {\n  var applyChangesBtn = $('.btn-apply-changes'),\n    discount,\n    tax1,\n    tax2,\n    discountInput,\n    tax1Input,\n    tax2Input,\n    sourceItem = $('.source-item'),\n    adminDetails = {\n      'App Design': 'Designed UI kit & app pages.',\n      'App Customization': 'Customization & Bug Fixes.',\n      'ABC Template': 'Bootstrap 4 admin template.',\n      'App Development': 'Native App Development.'\n    };\n\n  // Prevent dropdown from closing on tax change\n  $(document).on('click', '.tax-select', function (e) {\n    e.stopPropagation();\n  });\n\n  // On tax change update it's value value\n  function updateValue(listener, el) {\n    listener.closest('.repeater-wrapper').find(el).text(listener.val());\n  }\n\n  // Apply item changes btn\n  if (applyChangesBtn.length) {\n    $(document).on('click', '.btn-apply-changes', function (e) {\n      var $this = $(this);\n      tax1Input = $this.closest('.dropdown-menu').find('#taxInput1');\n      tax2Input = $this.closest('.dropdown-menu').find('#taxInput2');\n      discountInput = $this.closest('.dropdown-menu').find('#discountInput');\n      tax1 = $this.closest('.repeater-wrapper').find('.tax-1');\n      tax2 = $this.closest('.repeater-wrapper').find('.tax-2');\n      discount = $('.discount');\n      if (tax1Input.val() !== null) {\n        updateValue(tax1Input, tax1);\n      }\n      if (tax2Input.val() !== null) {\n        updateValue(tax2Input, tax2);\n      }\n      if (discountInput.val().length) {\n        $this.closest('.repeater-wrapper').find(discount).text(discountInput.val() + '%');\n      }\n    });\n  }\n\n  // Repeater init\n  if (sourceItem.length) {\n    sourceItem.on('submit', function (e) {\n      e.preventDefault();\n    });\n    sourceItem.repeater({\n      show: function show() {\n        $(this).slideDown();\n        // Initialize tooltip on load of each item\n        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle=\"tooltip\"]'));\n        tooltipTriggerList.map(function (tooltipTriggerEl) {\n          return new bootstrap.Tooltip(tooltipTriggerEl);\n        });\n      },\n      hide: function hide(e) {\n        $(this).slideUp();\n      }\n    });\n  }\n\n  // Item details select onchange\n  $(document).on('change', '.item-details', function () {\n    var $this = $(this),\n      value = adminDetails[$this.val()];\n    if ($this.next('textarea').length) {\n      $this.next('textarea').val(value);\n    } else {\n      $this.after('<textarea class=\"form-control\" rows=\"2\">' + value + '</textarea>');\n    }\n  });\n});\n\n//# sourceURL=webpack://Sneat/./static/js/app-invoice-add.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/app-invoice-add.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});