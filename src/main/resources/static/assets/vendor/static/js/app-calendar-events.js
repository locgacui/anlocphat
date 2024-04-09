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

/***/ "./static/js/app-calendar-events.js":
/*!******************************************!*\
  !*** ./static/js/app-calendar-events.js ***!
  \******************************************/
/***/ (function() {

eval("/**\n * App Calendar Events\n */\n\n\n\nvar date = new Date();\nvar nextDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);\n// prettier-ignore\nvar nextMonth = date.getMonth() === 11 ? new Date(date.getFullYear() + 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() + 1, 1);\n// prettier-ignore\nvar prevMonth = date.getMonth() === 11 ? new Date(date.getFullYear() - 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() - 1, 1);\nwindow.events = [{\n  id: 1,\n  url: '',\n  title: 'Design Review',\n  start: date,\n  end: nextDay,\n  allDay: false,\n  extendedProps: {\n    calendar: 'Business'\n  }\n}, {\n  id: 2,\n  url: '',\n  title: 'Meeting With Client',\n  start: new Date(date.getFullYear(), date.getMonth() + 1, -11),\n  end: new Date(date.getFullYear(), date.getMonth() + 1, -10),\n  allDay: true,\n  extendedProps: {\n    calendar: 'Business'\n  }\n}, {\n  id: 3,\n  url: '',\n  title: 'Family Trip',\n  allDay: true,\n  start: new Date(date.getFullYear(), date.getMonth() + 1, -9),\n  end: new Date(date.getFullYear(), date.getMonth() + 1, -7),\n  extendedProps: {\n    calendar: 'Holiday'\n  }\n}, {\n  id: 4,\n  url: '',\n  title: \"Doctor's Appointment\",\n  start: new Date(date.getFullYear(), date.getMonth() + 1, -11),\n  end: new Date(date.getFullYear(), date.getMonth() + 1, -10),\n  extendedProps: {\n    calendar: 'Personal'\n  }\n}, {\n  id: 5,\n  url: '',\n  title: 'Dart Game?',\n  start: new Date(date.getFullYear(), date.getMonth() + 1, -13),\n  end: new Date(date.getFullYear(), date.getMonth() + 1, -12),\n  allDay: true,\n  extendedProps: {\n    calendar: 'ETC'\n  }\n}, {\n  id: 6,\n  url: '',\n  title: 'Meditation',\n  start: new Date(date.getFullYear(), date.getMonth() + 1, -13),\n  end: new Date(date.getFullYear(), date.getMonth() + 1, -12),\n  allDay: true,\n  extendedProps: {\n    calendar: 'Personal'\n  }\n}, {\n  id: 7,\n  url: '',\n  title: 'Dinner',\n  start: new Date(date.getFullYear(), date.getMonth() + 1, -13),\n  end: new Date(date.getFullYear(), date.getMonth() + 1, -12),\n  extendedProps: {\n    calendar: 'Family'\n  }\n}, {\n  id: 8,\n  url: '',\n  title: 'Product Review',\n  start: new Date(date.getFullYear(), date.getMonth() + 1, -13),\n  end: new Date(date.getFullYear(), date.getMonth() + 1, -12),\n  allDay: true,\n  extendedProps: {\n    calendar: 'Business'\n  }\n}, {\n  id: 9,\n  url: '',\n  title: 'Monthly Meeting',\n  start: nextMonth,\n  end: nextMonth,\n  allDay: true,\n  extendedProps: {\n    calendar: 'Business'\n  }\n}, {\n  id: 10,\n  url: '',\n  title: 'Monthly Checkup',\n  start: prevMonth,\n  end: prevMonth,\n  allDay: true,\n  extendedProps: {\n    calendar: 'Personal'\n  }\n}];\n\n//# sourceURL=webpack://Sneat/./static/js/app-calendar-events.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/app-calendar-events.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});