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

/***/ "./static/js/form-input-group.js":
/*!***************************************!*\
  !*** ./static/js/form-input-group.js ***!
  \***************************************/
/***/ (function() {

eval("/**\n * Form Input Groups\n */\n\n\n\n(function () {\n  var speechToText = $('.speech-to-text'); // ! jQuery dependency for speech to text\n\n  // Speech To Text\n  if (speechToText.length) {\n    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;\n    if (SpeechRecognition !== undefined && SpeechRecognition !== null) {\n      var recognition = new SpeechRecognition(),\n        listening = false;\n      speechToText.on('click', function () {\n        var $this = $(this);\n        recognition.onspeechstart = function () {\n          listening = true;\n        };\n        if (listening === false) {\n          recognition.start();\n        }\n        recognition.onerror = function (event) {\n          listening = false;\n        };\n        recognition.onresult = function (event) {\n          $this.closest('.form-send-message').find('.message-input').val(event.results[0][0].transcript);\n        };\n        recognition.onspeechend = function (event) {\n          listening = false;\n          recognition.stop();\n        };\n      });\n    }\n  }\n})();\n\n//# sourceURL=webpack://Sneat/./static/js/form-input-group.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/form-input-group.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});