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

/***/ "./static/js/modal-create-app.js":
/*!***************************************!*\
  !*** ./static/js/modal-create-app.js ***!
  \***************************************/
/***/ (function() {

eval("/**\n *  Modal Example Wizard\n */\n\n\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n$(function () {\n  // Modal id\n  var appModal = document.getElementById('createApp');\n\n  // Credit Card\n  var creditCardMask1 = document.querySelector('.app-credit-card-mask'),\n    expiryDateMask1 = document.querySelector('.app-expiry-date-mask'),\n    cvvMask1 = document.querySelector('.app-cvv-code-mask');\n  var cleave;\n\n  // Cleave JS card Mask\n  function initCleave() {\n    if (creditCardMask1) {\n      cleave = new Cleave(creditCardMask1, {\n        creditCard: true,\n        onCreditCardTypeChanged: function onCreditCardTypeChanged(type) {\n          if (type != '' && type != 'unknown') {\n            document.querySelector('.app-card-type').innerHTML = '<img src=\"' + assetsPath + 'img/icons/payments/' + type + '-cc.png\" class=\"cc-icon-image\" height=\"28\"/>';\n          } else {\n            document.querySelector('.app-card-type').innerHTML = '';\n          }\n        }\n      });\n    }\n  }\n\n  // Expiry Date Mask\n  if (expiryDateMask1) {\n    new Cleave(expiryDateMask1, {\n      date: true,\n      delimiter: '/',\n      datePattern: ['m', 'y']\n    });\n  }\n\n  // CVV\n  if (cvvMask1) {\n    new Cleave(cvvMask1, {\n      numeral: true,\n      numeralPositiveOnly: true\n    });\n  }\n  appModal.addEventListener('show.bs.modal', function (event) {\n    var wizardCreateApp = document.querySelector('#wizard-create-app');\n    if (_typeof(wizardCreateApp) !== undefined && wizardCreateApp !== null) {\n      // Wizard next prev button\n      var wizardCreateAppNextList = [].slice.call(wizardCreateApp.querySelectorAll('.btn-next'));\n      var wizardCreateAppPrevList = [].slice.call(wizardCreateApp.querySelectorAll('.btn-prev'));\n      var wizardCreateAppBtnSubmit = wizardCreateApp.querySelector('.btn-submit');\n      var createAppStepper = new Stepper(wizardCreateApp, {\n        linear: false\n      });\n      if (wizardCreateAppNextList) {\n        wizardCreateAppNextList.forEach(function (wizardCreateAppNext) {\n          wizardCreateAppNext.addEventListener('click', function (event) {\n            createAppStepper.next();\n            initCleave();\n          });\n        });\n      }\n      if (wizardCreateAppPrevList) {\n        wizardCreateAppPrevList.forEach(function (wizardCreateAppPrev) {\n          wizardCreateAppPrev.addEventListener('click', function (event) {\n            createAppStepper.previous();\n            initCleave();\n          });\n        });\n      }\n      if (wizardCreateAppBtnSubmit) {\n        wizardCreateAppBtnSubmit.addEventListener('click', function (event) {\n          alert('Submitted..!!');\n        });\n      }\n    }\n  });\n});\n\n//# sourceURL=webpack://Sneat/./static/js/modal-create-app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/modal-create-app.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});