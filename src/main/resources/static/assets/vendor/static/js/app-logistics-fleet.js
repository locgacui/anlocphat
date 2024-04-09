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
/******/ 	var __webpack_modules__ = ({

/***/ "./static/js/app-logistics-fleet.js":
/*!******************************************!*\
  !*** ./static/js/app-logistics-fleet.js ***!
  \******************************************/
/***/ (function() {

eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n/**\n * Logistic Fleet\n */\n'use strict';\n(function () {\n  // Mapbox Access Token\n\n  //!YOUR_MAPBOX_ACCESS_TOKEN_HERE!\n  mapboxgl.accessToken = 'pk.eyJ1IjoibG9yZC1zaGl2YW0iLCJhIjoiY2xpeTlpNHFwMDVzbDNmczl2MXdob29udyJ9.JOLDU6VQG_ra1CoVG4jbUA';\n  var geojson = {\n    type: 'FeatureCollection',\n    features: [{\n      type: 'Feature',\n      properties: {\n        iconSize: [20, 42],\n        message: '1'\n      },\n      geometry: {\n        type: 'Point',\n        coordinates: [-73.999024, 40.75249842]\n      }\n    }, {\n      type: 'Feature',\n      properties: {\n        iconSize: [20, 42],\n        message: '2'\n      },\n      geometry: {\n        type: 'Point',\n        coordinates: [-74.03, 40.75699842]\n      }\n    }, {\n      type: 'Feature',\n      properties: {\n        iconSize: [20, 42],\n        message: '3'\n      },\n      geometry: {\n        type: 'Point',\n        coordinates: [-73.967524, 40.7599842]\n      }\n    }, {\n      type: 'Feature',\n      properties: {\n        iconSize: [20, 42],\n        message: '4'\n      },\n      geometry: {\n        type: 'Point',\n        coordinates: [-74.0325, 40.742992]\n      }\n    }]\n  };\n  var map = new mapboxgl.Map({\n    container: 'map',\n    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio\n    style: 'mapbox://styles/mapbox/light-v9',\n    center: [-73.999024, 40.75249842],\n    zoom: 12.25\n  });\n\n  // Add markers to the map and thier functionality\n  var _iterator = _createForOfIteratorHelper(geojson.features),\n    _step;\n  try {\n    var _loop = function _loop() {\n      var marker = _step.value;\n      // Create a DOM element for each marker.\n      var el = document.createElement('div');\n      var width = marker.properties.iconSize[0];\n      var height = marker.properties.iconSize[1];\n      el.className = 'marker';\n      el.insertAdjacentHTML('afterbegin', '<img src=\"' + assetsPath + 'img/illustrations/fleet-car.png\" alt=\"Fleet Car\" width=\"20\" class=\"rounded-3\" id=\"carFleet-' + marker.properties.message + '\">');\n      el.style.width = \"\".concat(width, \"px\");\n      el.style.height = \"\".concat(height, \"px\");\n      el.style.cursor = 'pointer';\n\n      // Add markers to the map.\n      new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);\n\n      // Select Accordion for respective Marker\n      var element = document.getElementById('fl-' + marker.properties.message);\n\n      // Select Car for respective Marker\n      var car = document.getElementById('carFleet-' + marker.properties.message);\n      element.addEventListener('click', function () {\n        var focusedElement = document.querySelector('.marker-focus');\n        if (Helpers._hasClass('active', element)) {\n          //fly to location\n          map.flyTo({\n            center: geojson.features[marker.properties.message - 1].geometry.coordinates,\n            zoom: 16\n          });\n          // Remove marker-focus from other marked cars\n          focusedElement && Helpers._removeClass('marker-focus', focusedElement);\n          Helpers._addClass('marker-focus', car);\n        } else {\n          //remove marker-focus if not active\n          Helpers._removeClass('marker-focus', car);\n        }\n      });\n    };\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      _loop();\n    }\n\n    //For selecting default car location\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n  var defCar = document.getElementById('carFleet-1');\n  Helpers._addClass('marker-focus', defCar);\n\n  //hide mapbox controls\n  document.querySelector('.mapboxgl-control-container').classList.add('d-none');\n\n  //Selecting Sidebar Accordion for perfect scroll\n  var sidebarAccordionBody = $('.logistics-fleet-sidebar-body');\n\n  //Perfect Scrollbar for Sidebar Accordion\n  if (sidebarAccordionBody.length) {\n    new PerfectScrollbar(sidebarAccordionBody[0], {\n      wheelPropagation: false,\n      suppressScrollX: true\n    });\n  }\n})();\n\n//# sourceURL=webpack://Sneat/./static/js/app-logistics-fleet.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/app-logistics-fleet.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});