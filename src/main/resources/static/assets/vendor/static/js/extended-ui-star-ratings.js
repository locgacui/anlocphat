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

/***/ "./static/js/extended-ui-star-ratings.js":
/*!***********************************************!*\
  !*** ./static/js/extended-ui-star-ratings.js ***!
  \***********************************************/
/***/ (function() {

eval("/**\n * Star Ratings (jquery)\n */\n\n\n\n$(function () {\n  var basicRatings = $('.basic-ratings'),\n    customSvg = $('.custom-svg-ratings'),\n    multiColor = $('.multi-color-ratings'),\n    halfStar = $('.half-star-ratings'),\n    fullStar = $('.full-star-ratings'),\n    readOnlyRatings = $('.read-only-ratings'),\n    onSetEvents = $('.onset-event-ratings'),\n    onChangeEvents = $('.onChange-event-ratings'),\n    ratingMethods = $('.methods-ratings'),\n    initializeRatings = $('.btn-initialize'),\n    destroyRatings = $('.btn-destroy'),\n    getRatings = $('.btn-get-rating'),\n    setRatings = $('.btn-set-rating');\n\n  // Basic Ratings\n  // --------------------------------------------------------------------\n  if (basicRatings) {\n    basicRatings.rateYo({\n      rating: 3.6,\n      rtl: isRtl\n    });\n  }\n\n  // Custom SVG Ratings\n  // --------------------------------------------------------------------\n  if (customSvg) {\n    customSvg.rateYo({\n      rating: 3.2,\n      starSvg: \"<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>\" + \"<path d='M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379\" + ' 4.246-3.611-2.625-3.612 2.625' + ' 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833' + ' 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388' + ' 7.416 5.388-2.833-8.718' + \" 7.417-5.389h-9.167l-2.833-8.718z'-></path>\",\n      rtl: isRtl\n    });\n  }\n\n  // Multi Color Ratings\n  // --------------------------------------------------------------------\n  if (multiColor) {\n    multiColor.rateYo({\n      rtl: isRtl,\n      multiColor: {\n        startColor: '#fffca0',\n        endColor: '#ffab00'\n      }\n    });\n  }\n\n  // Half Star Ratings\n  // --------------------------------------------------------------------\n  if (halfStar) {\n    halfStar.rateYo({\n      rtl: isRtl,\n      rating: 2\n    });\n  }\n\n  // Full Star Ratings\n  // --------------------------------------------------------------------\n  if (fullStar) {\n    fullStar.rateYo({\n      rtl: isRtl,\n      rating: 2\n    });\n  }\n\n  // Read Only Ratings\n  // --------------------------------------------------------------------\n  if (readOnlyRatings) {\n    readOnlyRatings.rateYo({\n      rating: 2,\n      rtl: isRtl\n    });\n  }\n\n  // Ratings Events\n  // --------------------------------------------------------------------\n\n  // onSet Event\n  if (onSetEvents) {\n    onSetEvents.rateYo({\n      rtl: isRtl\n    }).on('rateyo.set', function (e, data) {\n      alert('The rating is set to ' + data.rating + '!');\n    });\n  }\n\n  // onChange Event\n  if (onChangeEvents) {\n    onChangeEvents.rateYo({\n      rtl: isRtl\n    }).on('rateyo.change', function (e, data) {\n      var rating = data.rating;\n      $(this).parent().find('.counter').text(rating);\n    });\n  }\n\n  // Ratings Methods\n  // --------------------------------------------------------------------\n  if (ratingMethods) {\n    var $instance = ratingMethods.rateYo({\n      rtl: isRtl\n    });\n    if (initializeRatings) {\n      initializeRatings.on('click', function () {\n        $instance.rateYo({\n          rtl: isRtl\n        });\n      });\n    }\n    if (destroyRatings) {\n      destroyRatings.on('click', function () {\n        if ($instance.hasClass('jq-ry-container')) {\n          $instance.rateYo('destroy');\n        } else {\n          window.alert('Please Initialize Ratings First');\n        }\n      });\n    }\n    if (getRatings) {\n      getRatings.on('click', function () {\n        if ($instance.hasClass('jq-ry-container')) {\n          var rating = $instance.rateYo('rating');\n          window.alert('Current Ratings are ' + rating);\n        } else {\n          window.alert('Please Initialize Ratings First');\n        }\n      });\n    }\n    if (setRatings) {\n      setRatings.on('click', function () {\n        if ($instance.hasClass('jq-ry-container')) {\n          $instance.rateYo('rating', 1);\n        } else {\n          window.alert('Please Initialize Ratings First');\n        }\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://Sneat/./static/js/extended-ui-star-ratings.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/extended-ui-star-ratings.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});