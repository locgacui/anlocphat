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

/***/ "./static/js/forms-editors.js":
/*!************************************!*\
  !*** ./static/js/forms-editors.js ***!
  \************************************/
/***/ (function() {

eval("/**\n * Form Editors\n */\n\n\n\n(function () {\n  // Snow Theme\n  // --------------------------------------------------------------------\n  var snowEditor = new Quill('#snow-editor', {\n    bounds: '#snow-editor',\n    modules: {\n      formula: true,\n      toolbar: '#snow-toolbar'\n    },\n    theme: 'snow'\n  });\n\n  // Bubble Theme\n  // --------------------------------------------------------------------\n  var bubbleEditor = new Quill('#bubble-editor', {\n    modules: {\n      toolbar: '#bubble-toolbar'\n    },\n    theme: 'bubble'\n  });\n\n  // Full Toolbar\n  // --------------------------------------------------------------------\n  var fullToolbar = [[{\n    font: []\n  }, {\n    size: []\n  }], ['bold', 'italic', 'underline', 'strike'], [{\n    color: []\n  }, {\n    background: []\n  }], [{\n    script: 'super'\n  }, {\n    script: 'sub'\n  }], [{\n    header: '1'\n  }, {\n    header: '2'\n  }, 'blockquote', 'code-block'], [{\n    list: 'ordered'\n  }, {\n    list: 'bullet'\n  }, {\n    indent: '-1'\n  }, {\n    indent: '+1'\n  }], [{\n    direction: 'rtl'\n  }], ['link', 'image', 'video', 'formula'], ['clean']];\n  var fullEditor = new Quill('#full-editor', {\n    bounds: '#full-editor',\n    placeholder: 'Type Something...',\n    modules: {\n      formula: true,\n      toolbar: fullToolbar\n    },\n    theme: 'snow'\n  });\n})();\n\n//# sourceURL=webpack://Sneat/./static/js/forms-editors.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/forms-editors.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});