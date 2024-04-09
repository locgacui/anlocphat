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

/***/ "./static/js/ui-menu.js":
/*!******************************!*\
  !*** ./static/js/ui-menu.js ***!
  \******************************/
/***/ (function() {

eval("/**\n * Menu\n */\n\n\n\n(function () {\n  // ? This JS is for menu demo purpose only\n\n  // Vertical\n  var menu1 = document.querySelector('#menu-1'),\n    menu1Btn = document.querySelector('#menu-1-toggle-collapsed');\n  if (menu1) {\n    new Menu(menu1);\n  }\n  if (menu1Btn) {\n    menu1Btn.onclick = function () {\n      menu1.classList.toggle('menu-collapsed');\n    };\n  }\n\n  // Horizontal\n  var menu2 = document.querySelector('#menu-2');\n  if (menu2) {\n    new Menu(menu2, {\n      orientation: 'horizontal'\n    });\n  }\n\n  // Horizontal (Show dropdown on hover)\n  var menu3 = document.querySelector('#menu-3');\n  if (menu3) {\n    new Menu(menu3, {\n      orientation: 'horizontal',\n      showDropdownOnHover: true\n    });\n  }\n\n  // No animation\n  var menu5 = document.querySelector('#menu-5'),\n    menu5Btn = document.querySelector('#menu-5-toggle-collapsed');\n  if (menu5) {\n    new Menu(menu5, {\n      animate: false\n    });\n  }\n  if (menu5Btn) {\n    menu5Btn.onclick = function () {\n      menu5.classList.toggle('menu-collapsed');\n    };\n  }\n  var menu6 = document.querySelector('#menu-6');\n  if (menu6) {\n    new Menu(menu6, {\n      orientation: 'horizontal',\n      animate: false,\n      closeChildren: true\n    });\n  }\n\n  // No accordion\n  var menu7 = document.querySelector('#menu-7'),\n    menu7Btn = document.querySelector('#menu-7-toggle-collapsed');\n  if (menu7) {\n    new Menu(menu7, {\n      accordion: false\n    });\n  }\n  if (menu7Btn) {\n    menu7Btn.onclick = function () {\n      menu7.classList.toggle('menu-collapsed');\n    };\n  }\n  var menu8 = document.querySelector('#menu-8');\n  if (menu8) {\n    new Menu(menu8, {\n      orientation: 'horizontal',\n      accordion: false\n    });\n  }\n\n  // Elements\n  var menus9List = document.querySelectorAll('.menus-9'),\n    menu9Btn = document.querySelector('#menus-9-toggle-collapsed');\n  if (menus9List) {\n    menus9List.forEach(function (e) {\n      new Menu(e);\n    });\n  }\n  if (menu9Btn) {\n    menu9Btn.onclick = function () {\n      menus9List.forEach(function (e) {\n        e.classList.toggle('menu-collapsed');\n      });\n    };\n  }\n\n  // Colors (vertical)\n  var menus10List = document.querySelectorAll('.menus-10'),\n    menu10Btn = document.querySelector('#menus-10-toggle-collapsed');\n  if (menus10List) {\n    menus10List.forEach(function (e) {\n      new Menu(e);\n    });\n  }\n  if (menu10Btn) {\n    menu10Btn.onclick = function () {\n      menus10List.forEach(function (e) {\n        e.classList.toggle('menu-collapsed');\n      });\n    };\n  }\n\n  // Colors (horizontal)\n  var menus11List = document.querySelectorAll('.menus-11');\n  if (menus11List) {\n    menus11List.forEach(function (e) {\n      new Menu(e, {\n        orientation: 'horizontal'\n      });\n    });\n  }\n\n  // With background (For Docs)\n  var menus12List = document.querySelectorAll('.menus-12'),\n    menu12Btn = document.querySelector('#menus-12-toggle-collapsed');\n  if (menus12List) {\n    menus12List.forEach(function (e) {\n      new Menu(e);\n    });\n  }\n  if (menu12Btn) {\n    menu12Btn.onclick = function () {\n      menus12List.forEach(function (e) {\n        e.classList.toggle('menu-collapsed');\n      });\n    };\n  }\n})();\n\n//# sourceURL=webpack://Sneat/./static/js/ui-menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/ui-menu.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});