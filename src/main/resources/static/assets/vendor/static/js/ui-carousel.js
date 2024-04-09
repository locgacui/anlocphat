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

/***/ "./static/js/ui-carousel.js":
/*!**********************************!*\
  !*** ./static/js/ui-carousel.js ***!
  \**********************************/
/***/ (function() {

eval("/**\n * UI Carousel\n */\n\n\n\n(function () {\n  var swiperDefault = document.querySelector('#swiper-default'),\n    swiperWithArrows = document.querySelector('#swiper-with-arrows'),\n    swiperWithPagination = document.querySelector('#swiper-with-pagination'),\n    swiperWithProgress = document.querySelector('#swiper-with-progress'),\n    swiperWithScrollbar = document.querySelector('#swiper-with-scrollbar'),\n    verticalSwiper = document.querySelector('#swiper-vertical'),\n    swiperMultipleSlides = document.querySelector('#swiper-multiple-slides'),\n    swiper3dCoverflowEffect = document.querySelector('#swiper-3d-coverflow-effect'),\n    swiper3dCubeEffect = document.querySelector('#swiper-3d-cube-effect'),\n    swiper3dFlipEffect = document.querySelector('#swiper-3d-flip-effect'),\n    galleryThumbs = document.querySelector('.gallery-thumbs'),\n    galleryTop = document.querySelector('.gallery-top');\n  var galleryInstance;\n\n  // Default\n  // --------------------------------------------------------------------\n  if (swiperDefault) {\n    new Swiper(swiperDefault, {\n      slidesPerView: 'auto'\n    });\n  }\n\n  // With arrows\n  // --------------------------------------------------------------------\n  if (swiperWithArrows) {\n    new Swiper(swiperWithArrows, {\n      slidesPerView: 'auto',\n      navigation: {\n        prevEl: '.swiper-button-prev',\n        nextEl: '.swiper-button-next'\n      }\n    });\n  }\n\n  // With pagination\n  // --------------------------------------------------------------------\n  if (swiperWithPagination) {\n    new Swiper(swiperWithPagination, {\n      slidesPerView: 'auto',\n      pagination: {\n        clickable: true,\n        el: '.swiper-pagination'\n      }\n    });\n  }\n\n  // With progress\n  // --------------------------------------------------------------------\n  if (swiperWithProgress) {\n    new Swiper(swiperWithProgress, {\n      slidesPerView: 'auto',\n      pagination: {\n        type: 'progressbar',\n        el: '.swiper-pagination'\n      },\n      navigation: {\n        prevEl: '.swiper-button-prev',\n        nextEl: '.swiper-button-next'\n      }\n    });\n  }\n\n  // With scrollbar\n  // --------------------------------------------------------------------\n  if (swiperWithScrollbar) {\n    new Swiper(swiperWithScrollbar, {\n      scrollbar: {\n        hide: true,\n        el: '.swiper-scrollbar'\n      }\n    });\n  }\n\n  // Vertical\n  // --------------------------------------------------------------------\n  if (verticalSwiper) {\n    new Swiper(verticalSwiper, {\n      direction: 'vertical',\n      pagination: {\n        clickable: true,\n        el: '.swiper-pagination'\n      }\n    });\n  }\n\n  // Multiple slides\n  // --------------------------------------------------------------------\n  if (swiperMultipleSlides) {\n    new Swiper(swiperMultipleSlides, {\n      slidesPerView: 3,\n      spaceBetween: 30,\n      pagination: {\n        clickable: true,\n        el: '.swiper-pagination'\n      }\n    });\n  }\n\n  // 3D coverflow effect\n  // --------------------------------------------------------------------\n  if (swiper3dCoverflowEffect) {\n    new Swiper(swiper3dCoverflowEffect, {\n      effect: 'coverflow',\n      grabCursor: true,\n      centeredSlides: true,\n      slidesPerView: 'auto',\n      coverflowEffect: {\n        rotate: 50,\n        stretch: 0,\n        depth: 100,\n        modifier: 1,\n        slideShadows: true\n      },\n      pagination: {\n        el: '.swiper-pagination'\n      }\n    });\n  }\n\n  // 3D cube effect\n  // --------------------------------------------------------------------\n  if (swiper3dCubeEffect) {\n    new Swiper(swiper3dCubeEffect, {\n      effect: 'cube',\n      grabCursor: true,\n      cubeEffect: {\n        shadow: true,\n        slideShadows: true,\n        shadowScale: 0.94,\n        shadowOffset: 20\n      },\n      pagination: {\n        el: '.swiper-pagination'\n      }\n    });\n  }\n\n  // 3D flip effect\n  // --------------------------------------------------------------------\n  if (swiper3dFlipEffect) {\n    new Swiper(swiper3dFlipEffect, {\n      effect: 'flip',\n      grabCursor: true,\n      pagination: {\n        el: '.swiper-pagination'\n      },\n      navigation: {\n        prevEl: '.swiper-button-prev',\n        nextEl: '.swiper-button-next'\n      }\n    });\n  }\n\n  // Gallery effect\n  // --------------------------------------------------------------------\n  if (galleryThumbs) {\n    galleryInstance = new Swiper(galleryThumbs, {\n      spaceBetween: 10,\n      slidesPerView: 4,\n      freeMode: true,\n      watchSlidesVisibility: true,\n      watchSlidesProgress: true\n    });\n  }\n  if (galleryTop) {\n    new Swiper(galleryTop, {\n      spaceBetween: 10,\n      navigation: {\n        nextEl: '.swiper-button-next',\n        prevEl: '.swiper-button-prev'\n      },\n      thumbs: {\n        swiper: galleryInstance\n      }\n    });\n  }\n})();\n\n//# sourceURL=webpack://Sneat/./static/js/ui-carousel.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/ui-carousel.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});