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

/***/ "./static/js/front-main.js":
/*!*********************************!*\
  !*** ./static/js/front-main.js ***!
  \*********************************/
/***/ (function() {

eval("/**\n * Main - Front Pages\n */\n\n\nwindow.isRtl = window.Helpers.isRtl();\nwindow.isDarkStyle = window.Helpers.isDarkStyle();\n(function (_window$templateCusto, _window$templateCusto2) {\n  var menu = document.getElementById('navbarSupportedContent'),\n    nav = document.querySelector('.layout-navbar'),\n    navItemLink = document.querySelectorAll('.navbar-nav .nav-link');\n\n  // Initialised custom options if checked\n  setTimeout(function () {\n    window.Helpers.initCustomOptionCheck();\n  }, 1000);\n\n  // Init BS Tooltip\n  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle=\"tooltip\"]'));\n  tooltipTriggerList.map(function (tooltipTriggerEl) {\n    return new bootstrap.Tooltip(tooltipTriggerEl);\n  });\n\n  // If layout is RTL add .dropdown-menu-end class to .dropdown-menu\n  if (isRtl) {\n    Helpers._addClass('dropdown-menu-end', document.querySelectorAll('#layout-navbar .dropdown-menu'));\n  }\n\n  // Navbar\n  window.addEventListener('scroll', function (e) {\n    if (window.scrollY > 10) {\n      nav.classList.add('navbar-active');\n    } else {\n      nav.classList.remove('navbar-active');\n    }\n  });\n  window.addEventListener('load', function (e) {\n    if (window.scrollY > 10) {\n      nav.classList.add('navbar-active');\n    } else {\n      nav.classList.remove('navbar-active');\n    }\n  });\n\n  // Function to close the mobile menu\n  function closeMenu() {\n    menu.classList.remove('show');\n  }\n  document.addEventListener('click', function (event) {\n    // Check if the clicked element is inside mobile menu\n    if (!menu.contains(event.target)) {\n      closeMenu();\n    }\n  });\n  navItemLink.forEach(function (link) {\n    link.addEventListener('click', function (event) {\n      if (!link.classList.contains('dropdown-toggle')) {\n        closeMenu();\n      } else {\n        event.preventDefault();\n      }\n    });\n  });\n\n  // If layout is RTL add .dropdown-menu-end class to .dropdown-menu\n  if (isRtl) {\n    Helpers._addClass('dropdown-menu-end', document.querySelectorAll('.dropdown-menu'));\n  }\n\n  // Mega dropdown\n  var megaDropdown = document.querySelectorAll('.nav-link.mega-dropdown');\n  if (megaDropdown) {\n    megaDropdown.forEach(function (e) {\n      new MegaDropdown(e);\n    });\n  }\n\n  //Style Switcher (Light/Dark/System Mode)\n  var styleSwitcher = document.querySelector('.dropdown-style-switcher');\n\n  // Get style from local storage or use 'system' as default\n  var storedStyle = localStorage.getItem('templateCustomizer-' + templateName + '--Style') || ( //if no template style then use Customizer style\n  (_window$templateCusto = (_window$templateCusto2 = window.templateCustomizer) === null || _window$templateCusto2 === void 0 || (_window$templateCusto2 = _window$templateCusto2.settings) === null || _window$templateCusto2 === void 0 ? void 0 : _window$templateCusto2.defaultStyle) !== null && _window$templateCusto !== void 0 ? _window$templateCusto : 'light'); //!if there is no Customizer then use default style as light\n\n  // Set style on click of style switcher item if template customizer is enabled\n  if (window.templateCustomizer && styleSwitcher) {\n    var styleSwitcherItems = [].slice.call(styleSwitcher.children[1].querySelectorAll('.dropdown-item'));\n    styleSwitcherItems.forEach(function (item) {\n      item.addEventListener('click', function () {\n        var currentStyle = this.getAttribute('data-theme');\n        if (currentStyle === 'light') {\n          window.templateCustomizer.setStyle('light');\n        } else if (currentStyle === 'dark') {\n          window.templateCustomizer.setStyle('dark');\n        } else {\n          window.templateCustomizer.setStyle('system');\n        }\n      });\n    });\n\n    // Update style switcher icon based on the stored style\n\n    var styleSwitcherIcon = styleSwitcher.querySelector('i');\n    if (storedStyle === 'light') {\n      styleSwitcherIcon.classList.add('bx-sun');\n      new bootstrap.Tooltip(styleSwitcherIcon, {\n        title: 'Light Mode',\n        fallbackPlacements: ['bottom']\n      });\n    } else if (storedStyle === 'dark') {\n      styleSwitcherIcon.classList.add('bx-moon');\n      new bootstrap.Tooltip(styleSwitcherIcon, {\n        title: 'Dark Mode',\n        fallbackPlacements: ['bottom']\n      });\n    } else {\n      styleSwitcherIcon.classList.add('bx-desktop');\n      new bootstrap.Tooltip(styleSwitcherIcon, {\n        title: 'System Mode',\n        fallbackPlacements: ['bottom']\n      });\n    }\n  }\n\n  // Run switchImage function based on the stored style\n  switchImage(storedStyle);\n\n  // Update light/dark image based on current style\n  function switchImage(style) {\n    if (style === 'system') {\n      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {\n        style = 'dark';\n      } else {\n        style = 'light';\n      }\n    }\n    var switchImagesList = [].slice.call(document.querySelectorAll('[data-app-' + style + '-img]'));\n    switchImagesList.map(function (imageEl) {\n      var setImage = imageEl.getAttribute('data-app-' + style + '-img');\n      imageEl.src = assetsPath + 'img/' + setImage; // Using window.assetsPath to get the exact relative path\n    });\n  }\n})();\n\n//# sourceURL=webpack://Sneat/./static/js/front-main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/front-main.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});