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

/***/ "./static/js/app-ecommerce-customer-detail.js":
/*!****************************************************!*\
  !*** ./static/js/app-ecommerce-customer-detail.js ***!
  \****************************************************/
/***/ (function() {

eval("/**\n * App eCommerce Customer Detail - delete customer Script\n */\n\n\n(function () {\n  var deleteCustomer = document.querySelector('.delete-customer');\n\n  // Suspend User javascript\n  if (deleteCustomer) {\n    deleteCustomer.onclick = function () {\n      Swal.fire({\n        title: 'Are you sure?',\n        text: \"You won't be able to revert customer!\",\n        icon: 'warning',\n        showCancelButton: true,\n        confirmButtonText: 'Yes, Delete customer!',\n        customClass: {\n          confirmButton: 'btn btn-primary me-2',\n          cancelButton: 'btn btn-label-secondary'\n        },\n        buttonsStyling: false\n      }).then(function (result) {\n        if (result.value) {\n          Swal.fire({\n            icon: 'success',\n            title: 'Deleted!',\n            text: 'Customer has been removed.',\n            customClass: {\n              confirmButton: 'btn btn-success'\n            }\n          });\n        } else if (result.dismiss === Swal.DismissReason.cancel) {\n          Swal.fire({\n            title: 'Cancelled',\n            text: 'Cancelled Delete :)',\n            icon: 'error',\n            customClass: {\n              confirmButton: 'btn btn-success'\n            }\n          });\n        }\n      });\n    };\n  }\n\n  //? Billing page have multiple buttons\n  // Cancel Subscription alert\n  // Cancel Subscription alert\n  var cancelSubscription = document.querySelectorAll('.cancel-subscription');\n\n  // Alert With Functional Confirm Button\n  if (cancelSubscription) {\n    cancelSubscription.forEach(function (btnCancle) {\n      btnCancle.onclick = function () {\n        Swal.fire({\n          text: 'Are you sure you would like to cancel your subscription?',\n          icon: 'warning',\n          showCancelButton: true,\n          confirmButtonText: 'Yes',\n          customClass: {\n            confirmButton: 'btn btn-primary me-2',\n            cancelButton: 'btn btn-label-secondary'\n          },\n          buttonsStyling: false\n        }).then(function (result) {\n          if (result.value) {\n            Swal.fire({\n              icon: 'success',\n              title: 'Unsubscribed!',\n              text: 'Your subscription cancelled successfully.',\n              customClass: {\n                confirmButton: 'btn btn-success'\n              }\n            });\n          } else if (result.dismiss === Swal.DismissReason.cancel) {\n            Swal.fire({\n              title: 'Cancelled',\n              text: 'Unsubscription Cancelled!!',\n              icon: 'error',\n              customClass: {\n                confirmButton: 'btn btn-success'\n              }\n            });\n          }\n        });\n      };\n    });\n  }\n})();\n\n//# sourceURL=webpack://Sneat/./static/js/app-ecommerce-customer-detail.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/app-ecommerce-customer-detail.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});