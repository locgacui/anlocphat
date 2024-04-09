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

/***/ "./static/js/ui-modals.js":
/*!********************************!*\
  !*** ./static/js/ui-modals.js ***!
  \********************************/
/***/ (function() {

eval("/**\n * UI Modals\n */\n\n\n\n(function () {\n  // Animation Dropdown\n  var animationDropdown = document.querySelector('#animation-dropdown'),\n    animationModal = document.querySelector('#animationModal');\n  if (animationDropdown) {\n    animationDropdown.onchange = function () {\n      animationModal.classList = '';\n      animationModal.classList.add('modal', 'animate__animated', this.value);\n    };\n  }\n\n  // On hiding modal, remove iframe video/audio to stop playing\n  var youTubeModal = document.querySelector('#youTubeModal'),\n    youTubeModalVideo = youTubeModal.querySelector('iframe');\n  youTubeModal.addEventListener('hidden.bs.modal', function () {\n    youTubeModalVideo.setAttribute('src', '');\n  });\n\n  // Function to get and auto play youTube video\n  var autoPlayYouTubeModal = function autoPlayYouTubeModal() {\n    var modalTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle=\"modal\"]'));\n    modalTriggerList.map(function (modalTriggerEl) {\n      modalTriggerEl.onclick = function () {\n        var theModal = this.getAttribute('data-bs-target'),\n          videoSRC = this.getAttribute('data-theVideo'),\n          videoSRCauto = \"\".concat(videoSRC, \"?autoplay=1\"),\n          modalVideo = document.querySelector(\"\".concat(theModal, \" iframe\"));\n        if (modalVideo) {\n          modalVideo.setAttribute('src', videoSRCauto);\n        }\n      };\n    });\n  };\n\n  // Calling function on load\n  autoPlayYouTubeModal();\n\n  // Onboarding modal carousel height animation\n  document.querySelectorAll('.carousel').forEach(function (carousel) {\n    carousel.addEventListener('slide.bs.carousel', function (event) {\n      // ! Todo: Convert to JS (animation) (jquery)\n      var nextH = $(event.relatedTarget).height();\n      $(carousel).find('.active.carousel-item').parent().animate({\n        height: nextH\n      }, 500);\n    });\n  });\n})();\n\n//# sourceURL=webpack://Sneat/./static/js/ui-modals.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/ui-modals.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});