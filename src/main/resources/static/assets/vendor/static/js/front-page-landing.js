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

/***/ "./static/js/front-page-landing.js":
/*!*****************************************!*\
  !*** ./static/js/front-page-landing.js ***!
  \*****************************************/
/***/ (function() {

eval("/**\n * Main - Front Pages\n */\n\n\n(function () {\n  var nav = document.querySelector('.layout-navbar'),\n    heroAnimation = document.getElementById('hero-animation'),\n    animationImg = document.querySelectorAll('.hero-dashboard-img'),\n    animationElements = document.querySelectorAll('.hero-elements-img'),\n    swiperLogos = document.getElementById('swiper-clients-logos'),\n    swiperReviews = document.getElementById('swiper-reviews'),\n    ReviewsPreviousBtn = document.getElementById('reviews-previous-btn'),\n    ReviewsNextBtn = document.getElementById('reviews-next-btn'),\n    ReviewsSliderPrev = document.querySelector('.swiper-button-prev'),\n    ReviewsSliderNext = document.querySelector('.swiper-button-next'),\n    priceDurationToggler = document.querySelector('.price-duration-toggler'),\n    priceMonthlyList = [].slice.call(document.querySelectorAll('.price-monthly')),\n    priceYearlyList = [].slice.call(document.querySelectorAll('.price-yearly'));\n\n  // Hero\n  var mediaQueryXL = '1200';\n  var width = screen.width;\n  if (width >= mediaQueryXL && heroAnimation) {\n    heroAnimation.addEventListener('mousemove', function parallax(e) {\n      animationElements.forEach(function (layer) {\n        layer.style.transform = 'translateZ(1rem)';\n      });\n      animationImg.forEach(function (layer) {\n        var x = (window.innerWidth - e.pageX * 2) / 100;\n        var y = (window.innerHeight - e.pageY * 2) / 100;\n        layer.style.transform = \"perspective(1200px) rotateX(\".concat(y, \"deg) rotateY(\").concat(x, \"deg) scale3d(1, 1, 1)\");\n      });\n    });\n    nav.addEventListener('mousemove', function parallax(e) {\n      animationElements.forEach(function (layer) {\n        layer.style.transform = 'translateZ(1rem)';\n      });\n      animationImg.forEach(function (layer) {\n        var x = (window.innerWidth - e.pageX * 2) / 100;\n        var y = (window.innerHeight - e.pageY * 2) / 100;\n        layer.style.transform = \"perspective(1200px) rotateX(\".concat(y, \"deg) rotateY(\").concat(x, \"deg) scale3d(1, 1, 1)\");\n      });\n    });\n    heroAnimation.addEventListener('mouseout', function () {\n      animationElements.forEach(function (layer) {\n        layer.style.transform = 'translateZ(0)';\n      });\n      animationImg.forEach(function (layer) {\n        layer.style.transform = 'perspective(1200px) scale(1) rotateX(0) rotateY(0)';\n      });\n    });\n  }\n\n  // swiper carousel\n  // Customers reviews\n  // -----------------------------------\n  if (swiperReviews) {\n    new Swiper(swiperReviews, {\n      slidesPerView: 1,\n      spaceBetween: 5,\n      grabCursor: true,\n      autoplay: {\n        delay: 3000,\n        disableOnInteraction: false\n      },\n      loop: true,\n      loopAdditionalSlides: 1,\n      navigation: {\n        nextEl: '.swiper-button-next',\n        prevEl: '.swiper-button-prev'\n      },\n      breakpoints: {\n        1200: {\n          slidesPerView: 3,\n          spaceBetween: 26\n        },\n        992: {\n          slidesPerView: 2,\n          spaceBetween: 20\n        }\n      }\n    });\n  }\n\n  // Reviews slider next and previous\n  // -----------------------------------\n  // Add click event listener to next button\n  ReviewsNextBtn.addEventListener('click', function () {\n    ReviewsSliderNext.click();\n  });\n  ReviewsPreviousBtn.addEventListener('click', function () {\n    ReviewsSliderPrev.click();\n  });\n\n  // Review client logo\n  // -----------------------------------\n  if (swiperLogos) {\n    new Swiper(swiperLogos, {\n      slidesPerView: 2,\n      autoplay: {\n        delay: 3000,\n        disableOnInteraction: false\n      },\n      breakpoints: {\n        992: {\n          slidesPerView: 5\n        },\n        768: {\n          slidesPerView: 3\n        }\n      }\n    });\n  }\n\n  // Pricing Plans\n  // -----------------------------------\n  document.addEventListener('DOMContentLoaded', function (event) {\n    function togglePrice() {\n      if (priceDurationToggler.checked) {\n        // If checked\n        priceYearlyList.map(function (yearEl) {\n          yearEl.classList.remove('d-none');\n        });\n        priceMonthlyList.map(function (monthEl) {\n          monthEl.classList.add('d-none');\n        });\n      } else {\n        // If not checked\n        priceYearlyList.map(function (yearEl) {\n          yearEl.classList.add('d-none');\n        });\n        priceMonthlyList.map(function (monthEl) {\n          monthEl.classList.remove('d-none');\n        });\n      }\n    }\n    // togglePrice Event Listener\n    togglePrice();\n    priceDurationToggler.onchange = function () {\n      togglePrice();\n    };\n  });\n})();\n\n//# sourceURL=webpack://Sneat/./static/js/front-page-landing.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/front-page-landing.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});