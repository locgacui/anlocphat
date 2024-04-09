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

/***/ "./static/js/extended-ui-tour.js":
/*!***************************************!*\
  !*** ./static/js/extended-ui-tour.js ***!
  \***************************************/
/***/ (function() {

eval("/**\n * Tour\n */\n\n\n\n(function () {\n  var startBtn = document.querySelector('#shepherd-example');\n  function setupTour(tour) {\n    var backBtnClass = 'btn btn-sm btn-label-secondary md-btn-flat',\n      nextBtnClass = 'btn btn-sm btn-primary btn-next';\n    tour.addStep({\n      title: 'Navbar',\n      text: 'This is your navbar',\n      attachTo: {\n        element: '.navbar',\n        on: 'bottom'\n      },\n      buttons: [{\n        action: tour.cancel,\n        classes: backBtnClass,\n        text: 'Skip'\n      }, {\n        text: 'Next',\n        classes: nextBtnClass,\n        action: tour.next\n      }]\n    });\n    tour.addStep({\n      title: 'Card',\n      text: 'This is a card',\n      attachTo: {\n        element: '.tour-card',\n        on: 'top'\n      },\n      buttons: [{\n        text: 'Skip',\n        classes: backBtnClass,\n        action: tour.cancel\n      }, {\n        text: 'Back',\n        classes: backBtnClass,\n        action: tour.back\n      }, {\n        text: 'Next',\n        classes: nextBtnClass,\n        action: tour.next\n      }]\n    });\n    tour.addStep({\n      title: 'Footer',\n      text: 'This is the Footer',\n      attachTo: {\n        element: '.footer',\n        on: 'top'\n      },\n      buttons: [{\n        text: 'Skip',\n        classes: backBtnClass,\n        action: tour.cancel\n      }, {\n        text: 'Back',\n        classes: backBtnClass,\n        action: tour.back\n      }, {\n        text: 'Next',\n        classes: nextBtnClass,\n        action: tour.next\n      }]\n    });\n    tour.addStep({\n      title: 'Upgrade',\n      text: 'Click here to upgrade plan',\n      attachTo: {\n        element: '.footer-link',\n        on: 'top'\n      },\n      buttons: [{\n        text: 'Back',\n        classes: backBtnClass,\n        action: tour.back\n      }, {\n        text: 'Finish',\n        classes: nextBtnClass,\n        action: tour.cancel\n      }]\n    });\n    return tour;\n  }\n  if (startBtn) {\n    // On start tour button click\n    startBtn.onclick = function () {\n      var tourVar = new Shepherd.Tour({\n        defaultStepOptions: {\n          scrollTo: false,\n          cancelIcon: {\n            enabled: true\n          }\n        },\n        useModalOverlay: true\n      });\n      setupTour(tourVar).start();\n    };\n  }\n\n  // ! Documentation Tour only\n  var startBtnDocs = document.querySelector('#shepherd-docs-example');\n  function setupTourDocs(tour) {\n    var backBtnClass = 'btn btn-sm btn-label-secondary md-btn-flat',\n      nextBtnClass = 'btn btn-sm btn-primary btn-next';\n    tour.addStep({\n      title: 'Navbar',\n      text: 'This is your navbar',\n      attachTo: {\n        element: '.navbar',\n        on: 'bottom'\n      },\n      buttons: [{\n        action: tour.cancel,\n        classes: backBtnClass,\n        text: 'Skip'\n      }, {\n        text: 'Next',\n        classes: nextBtnClass,\n        action: tour.next\n      }]\n    });\n    tour.addStep({\n      title: 'Footer',\n      text: 'This is the Footer',\n      attachTo: {\n        element: '.footer',\n        on: 'top'\n      },\n      buttons: [{\n        text: 'Skip',\n        classes: backBtnClass,\n        action: tour.cancel\n      }, {\n        text: 'Back',\n        classes: backBtnClass,\n        action: tour.back\n      }, {\n        text: 'Next',\n        classes: nextBtnClass,\n        action: tour.next\n      }]\n    });\n    tour.addStep({\n      title: 'Social Link',\n      text: 'Click here share on social media',\n      attachTo: {\n        element: '.footer-link',\n        on: 'top'\n      },\n      buttons: [{\n        text: 'Back',\n        classes: backBtnClass,\n        action: tour.back\n      }, {\n        text: 'Finish',\n        classes: nextBtnClass,\n        action: tour.cancel\n      }]\n    });\n    return tour;\n  }\n  if (startBtnDocs) {\n    // On start tour button click\n    startBtnDocs.onclick = function () {\n      var tourDocsVar = new Shepherd.Tour({\n        defaultStepOptions: {\n          scrollTo: false,\n          cancelIcon: {\n            enabled: true\n          }\n        },\n        useModalOverlay: true\n      });\n      setupTourDocs(tourDocsVar).start();\n    };\n  }\n})();\n\n//# sourceURL=webpack://Sneat/./static/js/extended-ui-tour.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/extended-ui-tour.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});