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

/***/ "./static/js/extended-ui-misc-idle-timer.js":
/*!**************************************************!*\
  !*** ./static/js/extended-ui-misc-idle-timer.js ***!
  \**************************************************/
/***/ (function() {

eval("/**\n * Ideal Timer (jquery)\n */\n\n\n\n$(function () {\n  var timerDoc = $('#document-Status'),\n    btnPause = $('#document-Pause'),\n    btnResume = $('#document-Resume'),\n    btnElapsed = $('#document-Elapsed'),\n    btnDestroy = $('#document-Destroy'),\n    btnInit = $('#document-Init');\n\n  // Document 5 Sec Timeout\n  // --------------------------------------------------------------------\n  if (timerDoc.length) {\n    var docTimeout = 5000;\n    // idle/active events\n    $(document).on('idle.idleTimer', function (event, elem, obj) {\n      timerDoc.val(function (i, value) {\n        return value + 'Idle @ ' + moment().format() + ' \\n';\n      }).removeClass('alert-success').addClass('alert-warning');\n    });\n    $(document).on('active.idleTimer', function (event, elem, obj, e) {\n      timerDoc.val(function (i, value) {\n        return value + 'Active [' + e.type + '] [' + e.target.nodeName + '] @ ' + moment().format() + ' \\n';\n      }).addClass('alert-success').removeClass('alert-warning');\n    });\n\n    // button events\n    btnPause.on('click', function () {\n      // Pause\n      $(document).idleTimer('pause');\n      timerDoc.val(function (i, value) {\n        return value + 'Paused @ ' + moment().format() + ' \\n';\n      });\n      $(this).blur();\n      return false;\n    });\n    btnResume.on('click', function () {\n      // Resume\n      $(document).idleTimer('resume');\n      timerDoc.val(function (i, value) {\n        return value + 'Resumed @ ' + moment().format() + ' \\n';\n      });\n      $(this).blur();\n      return false;\n    });\n    btnElapsed.on('click', function () {\n      // Elapsed\n      timerDoc.val(function (i, value) {\n        return value + 'Elapsed (since becoming active): ' + $(document).idleTimer('getElapsedTime') + ' \\n';\n      });\n      $(this).blur();\n      return false;\n    });\n    btnDestroy.on('click', function () {\n      // Destroy\n      $(document).idleTimer('destroy');\n      timerDoc.val(function (i, value) {\n        return value + 'Destroyed: @ ' + moment().format() + ' \\n';\n      }).removeClass('alert-success').removeClass('alert-warning');\n      $(this).blur();\n      return false;\n    });\n    btnInit.on('click', function () {\n      // Initialize\n      // show init with object\n      $(document).idleTimer({\n        timeout: docTimeout\n      });\n      timerDoc.val(function (i, value) {\n        return value + 'Init: @ ' + moment().format() + ' \\n';\n      });\n\n      // Apply classes for default state\n      if ($(document).idleTimer('isIdle')) {\n        timerDoc.removeClass('alert-success').addClass('alert-warning');\n      } else {\n        timerDoc.addClass('alert-success').removeClass('alert-warning');\n      }\n      $(this).blur();\n      return false;\n    });\n\n    // Clear old statuses\n    timerDoc.val('');\n\n    // Start timeout, passing no options\n    $(document).idleTimer(docTimeout);\n\n    // style based on state\n    if ($(document).idleTimer('isIdle')) {\n      timerDoc.val(function (i, value) {\n        return value + 'Initial Idle State @ ' + moment().format() + ' \\n';\n      }).removeClass('alert-success').addClass('alert-warning');\n    } else {\n      timerDoc.val(function (i, value) {\n        return value + 'Initial Active State @ ' + moment().format() + ' \\n';\n      }).addClass('alert-success').removeClass('alert-warning');\n    }\n  }\n\n  // Element 3 Sec Timeout\n  // --------------------------------------------------------------------\n  var elementTimer = $('#element-Status'),\n    btnReset = $('#element-Reset'),\n    btnRemaining = $('#element-Remaining'),\n    btnLastActive = $('#element-LastActive'),\n    btnState = $('#element-State');\n  if (elementTimer.length) {\n    var elTimeout = 3000;\n    // idle/active events\n    elementTimer.on('idle.idleTimer', function (event, elem, obj) {\n      event.stopPropagation();\n      elementTimer.val(function (i, value) {\n        return value + 'Idle @ ' + moment().format() + ' \\n';\n      }).removeClass('alert-success').addClass('alert-warning');\n    });\n    elementTimer.on('active.idleTimer', function (event) {\n      event.stopPropagation();\n      elementTimer.val(function (i, value) {\n        return value + 'Active @ ' + moment().format() + ' \\n';\n      }).addClass('alert-success').removeClass('alert-warning');\n    });\n\n    // button events\n    btnReset.on('click', function () {\n      // Reset\n      elementTimer.idleTimer('reset').val(function (i, value) {\n        return value + 'Reset @ ' + moment().format() + ' \\n';\n      });\n\n      // classes for default state\n      if ($('#element-Status').idleTimer('isIdle')) {\n        elementTimer.removeClass('alert-success').addClass('alert-warning');\n      } else {\n        elementTimer.addClass('alert-success').removeClass('alert-warning');\n      }\n      $(this).blur();\n      return false;\n    });\n    btnRemaining.on('click', function () {\n      // Remaining\n      elementTimer.val(function (i, value) {\n        return value + 'Remaining: ' + elementTimer.idleTimer('getRemainingTime') + ' \\n';\n      });\n      $(this).blur();\n      return false;\n    });\n    btnLastActive.on('click', function () {\n      // Last Active\n      elementTimer.val(function (i, value) {\n        return value + 'LastActive: ' + elementTimer.idleTimer('getLastActiveTime') + ' \\n';\n      });\n      $(this).blur();\n      return false;\n    });\n    btnState.on('click', function () {\n      // State\n      elementTimer.val(function (i, value) {\n        return value + 'State: ' + ($('#element-Status').idleTimer('isIdle') ? 'idle' : 'active') + ' \\n';\n      });\n      $(this).blur();\n      return false;\n    });\n\n    // Clear value if cached & start time\n    elementTimer.val('').idleTimer(elTimeout);\n\n    // show initial state\n    if (elementTimer.idleTimer('isIdle')) {\n      elementTimer.val(function (i, value) {\n        return value + 'Initial Idle @ ' + moment().format() + ' \\n';\n      }).removeClass('alert-success').addClass('alert-warning');\n    } else {\n      elementTimer.val(function (i, value) {\n        return value + 'Initial Active @ ' + moment().format() + ' \\n';\n      }).addClass('alert-success').removeClass('alert-warning');\n    }\n  }\n});\n\n//# sourceURL=webpack://Sneat/./static/js/extended-ui-misc-idle-timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/extended-ui-misc-idle-timer.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});