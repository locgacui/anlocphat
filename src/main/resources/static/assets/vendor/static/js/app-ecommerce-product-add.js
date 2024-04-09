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

/***/ "./static/js/app-ecommerce-product-add.js":
/*!************************************************!*\
  !*** ./static/js/app-ecommerce-product-add.js ***!
  \************************************************/
/***/ (function() {

eval("/**\n * App eCommerce Add Product Script\n */\n\n\n//Javascript to handle the e-commerce product add page\n(function () {\n  // Comment editor\n\n  var commentEditor = document.querySelector('.comment-editor');\n  if (commentEditor) {\n    new Quill(commentEditor, {\n      modules: {\n        toolbar: '.comment-toolbar'\n      },\n      placeholder: 'Product Description',\n      theme: 'snow'\n    });\n  }\n\n  // previewTemplate: Updated Dropzone default previewTemplate\n\n  // ! Don't change it unless you really know what you are doing\n\n  var previewTemplate = \"<div class=\\\"dz-preview dz-file-preview\\\">\\n<div class=\\\"dz-details\\\">\\n  <div class=\\\"dz-thumbnail\\\">\\n    <img data-dz-thumbnail>\\n    <span class=\\\"dz-nopreview\\\">No preview</span>\\n    <div class=\\\"dz-success-mark\\\"></div>\\n    <div class=\\\"dz-error-mark\\\"></div>\\n    <div class=\\\"dz-error-message\\\"><span data-dz-errormessage></span></div>\\n    <div class=\\\"progress\\\">\\n      <div class=\\\"progress-bar progress-bar-primary\\\" role=\\\"progressbar\\\" aria-valuemin=\\\"0\\\" aria-valuemax=\\\"100\\\" data-dz-uploadprogress></div>\\n    </div>\\n  </div>\\n  <div class=\\\"dz-filename\\\" data-dz-name></div>\\n  <div class=\\\"dz-size\\\" data-dz-size></div>\\n</div>\\n</div>\";\n\n  // ? Start your code from here\n\n  // Basic Dropzone\n\n  var dropzoneBasic = document.querySelector('#dropzone-basic');\n  if (dropzoneBasic) {\n    var myDropzone = new Dropzone(dropzoneBasic, {\n      previewTemplate: previewTemplate,\n      parallelUploads: 1,\n      maxFilesize: 5,\n      acceptedFiles: '.jpg,.jpeg,.png,.gif',\n      addRemoveLinks: true,\n      maxFiles: 1\n    });\n  }\n\n  // Basic Tags\n\n  var tagifyBasicEl = document.querySelector('#ecommerce-product-tags');\n  var TagifyBasic = new Tagify(tagifyBasicEl);\n\n  // Flatpickr\n\n  // Datepicker\n  var date = new Date();\n  var productDate = document.querySelector('.product-date');\n  if (productDate) {\n    productDate.flatpickr({\n      monthSelectorType: 'static',\n      defaultDate: date\n    });\n  }\n})();\n\n//Jquery to handle the e-commerce product add page\n\n$(function () {\n  // Select2\n  var select2 = $('.select2');\n  if (select2.length) {\n    select2.each(function () {\n      var $this = $(this);\n      $this.wrap('<div class=\"position-relative\"></div>').select2({\n        dropdownParent: $this.parent(),\n        placeholder: $this.data('placeholder') // for dynamic placeholder\n      });\n    });\n  }\n  var formRepeater = $('.form-repeater');\n\n  // Form Repeater\n  // ! Using jQuery each loop to add dynamic id and class for inputs. You may need to improve it based on form fields.\n  // -----------------------------------------------------------------------------------------------------------------\n\n  if (formRepeater.length) {\n    var row = 2;\n    var col = 1;\n    formRepeater.on('submit', function (e) {\n      e.preventDefault();\n    });\n    formRepeater.repeater({\n      show: function show() {\n        var fromControl = $(this).find('.form-control, .form-select');\n        var formLabel = $(this).find('.form-label');\n        fromControl.each(function (i) {\n          var id = 'form-repeater-' + row + '-' + col;\n          $(fromControl[i]).attr('id', id);\n          $(formLabel[i]).attr('for', id);\n          col++;\n        });\n        row++;\n        $(this).slideDown();\n        $('.select2-container').remove();\n        $('.select2.form-select').select2({\n          placeholder: 'Placeholder text'\n        });\n        $('.select2-container').css('width', '100%');\n        $('.form-repeater:first .form-select').select2({\n          dropdownParent: $(this).parent(),\n          placeholder: 'Placeholder text'\n        });\n        $('.position-relative .select2').each(function () {\n          $(this).select2({\n            dropdownParent: $(this).closest('.position-relative')\n          });\n        });\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack://Sneat/./static/js/app-ecommerce-product-add.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/app-ecommerce-product-add.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});