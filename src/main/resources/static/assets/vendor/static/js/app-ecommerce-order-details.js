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

/***/ "./static/js/app-ecommerce-order-details.js":
/*!**************************************************!*\
  !*** ./static/js/app-ecommerce-order-details.js ***!
  \**************************************************/
/***/ (function() {

eval("/**\n * app-ecommerce-order-details Script\n */\n\n\n\n// Datatable (jquery)\n$(function () {\n  // Variable declaration for table\n\n  var dt_details_table = $('.datatables-order-details');\n\n  // E-commerce Products datatable\n  if (dt_details_table.length) {\n    var dt_products = dt_details_table.DataTable({\n      ajax: assetsPath + 'json/ecommerce-order-details.json',\n      // JSON file to add data\n      columns: [\n      // columns according to JSON\n      {\n        data: 'id'\n      }, {\n        data: 'id'\n      }, {\n        data: 'product_name'\n      }, {\n        data: 'price'\n      }, {\n        data: 'qty'\n      }, {\n        data: ''\n      }],\n      columnDefs: [{\n        // For Responsive\n        className: 'control',\n        searchable: false,\n        orderable: false,\n        responsivePriority: 2,\n        targets: 0,\n        render: function render(data, type, full, meta) {\n          return '';\n        }\n      }, {\n        // For Checkboxes\n        targets: 1,\n        orderable: false,\n        checkboxes: {\n          selectAllRender: '<input type=\"checkbox\" class=\"form-check-input\">'\n        },\n        render: function render() {\n          return '<input type=\"checkbox\" class=\"dt-checkboxes form-check-input\" >';\n        },\n        searchable: false\n      }, {\n        // Product name and product info\n        targets: 2,\n        responsivePriority: 1,\n        searchable: false,\n        orderable: false,\n        render: function render(data, type, full, meta) {\n          var $name = full['product_name'],\n            $product_brand = full['product_info'],\n            $image = full['image'];\n          if ($image) {\n            // For Product image\n            var $output = '<img src=\"' + assetsPath + 'img/products/' + $image + '\" alt=\"product-' + $name + '\" class=\"rounded-2\">';\n          } else {\n            // For Product badge\n            var stateNum = Math.floor(Math.random() * 6);\n            var states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary'];\n            var $state = states[stateNum],\n              $name = full['product_name'],\n              $initials = $name.match(/\\b\\w/g) || [];\n            $initials = (($initials.shift() || '') + ($initials.pop() || '')).toUpperCase();\n            $output = '<span class=\"avatar-initial rounded-2 bg-label-' + $state + '\">' + $initials + '</span>';\n          }\n          // Creates full output for Product name and product_brand\n          var $row_output = '<div class=\"d-flex justify-content-start align-items-center text-nowrap\">' + '<div class=\"avatar-wrapper\">' + '<div class=\"avatar me-2\">' + $output + '</div>' + '</div>' + '<div class=\"d-flex flex-column\">' + '<h6 class=\"text-body mb-0\">' + $name + '</h6>' + '<small class=\"text-muted\">' + $product_brand + '</small>' + '</div>' + '</div>';\n          return $row_output;\n        }\n      }, {\n        // For Price\n        targets: 3,\n        searchable: false,\n        orderable: false,\n        render: function render(data, type, full, meta) {\n          var $price = full['price'];\n          var $output = '<span>$' + $price + '</span>';\n          return $output;\n        }\n      }, {\n        // For Qty\n        targets: 4,\n        searchable: false,\n        orderable: false,\n        render: function render(data, type, full, meta) {\n          var $qty = full['qty'];\n          var $output = '<span class=\"text-body\">' + $qty + '</span>';\n          return $output;\n        }\n      }, {\n        // Total\n        targets: 5,\n        searchable: false,\n        orderable: false,\n        render: function render(data, type, full, meta) {\n          var $total = full['qty'] * full['price'];\n          var $output = '<h6 class=\"mb-0\">$' + $total + '</h6>';\n          return $output;\n        }\n      }],\n      order: [2, ''],\n      //set any columns order asc/desc\n      dom: 't',\n      // For responsive popup\n      responsive: {\n        details: {\n          display: $.fn.dataTable.Responsive.display.modal({\n            header: function header(row) {\n              var data = row.data();\n              return 'Details of ' + data['full_name'];\n            }\n          }),\n          type: 'column',\n          renderer: function renderer(api, rowIdx, columns) {\n            var data = $.map(columns, function (col, i) {\n              return col.title !== '' // ? Do not show row in modal popup if title is blank (for check box)\n              ? '<tr data-dt-row=\"' + col.rowIndex + '\" data-dt-column=\"' + col.columnIndex + '\">' + '<td>' + col.title + ':' + '</td> ' + '<td>' + col.data + '</td>' + '</tr>' : '';\n            }).join('');\n            return data ? $('<table class=\"table\"/><tbody />').append(data) : false;\n          }\n        }\n      }\n    });\n  }\n  // Filter form control to default size\n  // ? setTimeout used for multilingual table initialization\n  setTimeout(function () {\n    $('.dataTables_filter .form-control').removeClass('form-control-sm');\n    $('.dataTables_length .form-select').removeClass('form-select-sm');\n  }, 300);\n});\n\n//sweet alert\n(function () {\n  var deleteOrder = document.querySelector('.delete-order');\n  // Suspend User javascript\n  if (deleteOrder) {\n    deleteOrder.onclick = function () {\n      Swal.fire({\n        title: 'Are you sure?',\n        text: \"You won't be able to revert order!\",\n        icon: 'warning',\n        showCancelButton: true,\n        confirmButtonText: 'Yes, Delete order!',\n        customClass: {\n          confirmButton: 'btn btn-primary me-2',\n          cancelButton: 'btn btn-label-secondary'\n        },\n        buttonsStyling: false\n      }).then(function (result) {\n        if (result.value) {\n          Swal.fire({\n            icon: 'success',\n            title: 'Deleted!',\n            text: 'Order has been removed.',\n            customClass: {\n              confirmButton: 'btn btn-success'\n            }\n          });\n        } else if (result.dismiss === Swal.DismissReason.cancel) {\n          Swal.fire({\n            title: 'Cancelled',\n            text: 'Cancelled Delete :)',\n            icon: 'error',\n            customClass: {\n              confirmButton: 'btn btn-success'\n            }\n          });\n        }\n      });\n    };\n  }\n\n  //for custom year\n  function getCurrentYear() {\n    var currentYear = new Date().getFullYear();\n    return currentYear;\n  }\n  var year = getCurrentYear();\n  document.getElementById('orderYear').innerHTML = year;\n})();\n\n//# sourceURL=webpack://Sneat/./static/js/app-ecommerce-order-details.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/app-ecommerce-order-details.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});