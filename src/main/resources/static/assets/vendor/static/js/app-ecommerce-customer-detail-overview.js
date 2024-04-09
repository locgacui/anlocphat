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

/***/ "./static/js/app-ecommerce-customer-detail-overview.js":
/*!*************************************************************!*\
  !*** ./static/js/app-ecommerce-customer-detail-overview.js ***!
  \*************************************************************/
/***/ (function() {

eval("/**\n * Page Detail overview\n */\n\n\n\n// Datatable (jquery)\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n$(function () {\n  // Variable declaration for table\n  var dt_customer_order = $('.datatables-customer-order'),\n    order_details = 'app-ecommerce-order-details.html',\n    statusObj = {\n      1: {\n        title: 'Ready to  Pickup',\n        class: 'bg-label-info'\n      },\n      2: {\n        title: 'Dispatched',\n        class: 'bg-label-warning'\n      },\n      3: {\n        title: 'Delivered',\n        class: 'bg-label-success'\n      },\n      4: {\n        title: 'Out for delivery',\n        class: 'bg-label-primary'\n      }\n    };\n\n  // orders datatable\n  if (dt_customer_order.length) {\n    var dt_order = dt_customer_order.DataTable({\n      ajax: assetsPath + 'json/ecommerce-customer-order.json',\n      // JSON file to add data\n      columns: [\n      // columns according to JSON\n      {\n        data: ''\n      }, {\n        data: 'id'\n      }, {\n        data: 'order'\n      }, {\n        data: 'date'\n      }, {\n        data: 'status'\n      }, {\n        data: 'spent'\n      }, {\n        data: ' '\n      }],\n      columnDefs: [{\n        // For Responsive\n        className: 'control',\n        searchable: false,\n        orderable: false,\n        responsivePriority: 2,\n        targets: 0,\n        render: function render(data, type, full, meta) {\n          return '';\n        }\n      }, _defineProperty({\n        // For Checkboxes\n        targets: 1,\n        orderable: false,\n        searchable: false,\n        responsivePriority: 3,\n        checkboxes: true,\n        render: function render() {\n          return '<input type=\"checkbox\" class=\"dt-checkboxes form-check-input\">';\n        }\n      }, \"checkboxes\", {\n        selectAllRender: '<input type=\"checkbox\" class=\"form-check-input\">'\n      }), {\n        // order order number\n        targets: 2,\n        responsivePriority: 4,\n        render: function render(data, type, full, meta) {\n          var $id = full['order'];\n          return \"<a href='\" + order_details + \"' class='fw-medium'><span>#\" + $id + '</span></a>';\n        }\n      }, {\n        // date\n        targets: 3,\n        render: function render(data, type, full, meta) {\n          var date = new Date(full.date); // convert the date string to a Date object\n          var formattedDate = date.toLocaleDateString('en-US', {\n            month: 'short',\n            day: 'numeric',\n            year: 'numeric'\n          });\n          return '<span class=\"text-nowrap\">' + formattedDate + '</span > ';\n        }\n      }, {\n        // status\n        targets: 4,\n        render: function render(data, type, full, meta) {\n          var $status = full['status'];\n          return '<span class=\"badge ' + statusObj[$status].class + '\" text-capitalized>' + statusObj[$status].title + '</span>';\n        }\n      }, {\n        // spent\n        targets: 5,\n        render: function render(data, type, full, meta) {\n          var $spent = full['spent'];\n          return '<span >' + $spent + '</span>';\n        }\n      }, {\n        // Actions\n        targets: -1,\n        title: 'Actions',\n        searchable: false,\n        orderable: false,\n        render: function render(data, type, full, meta) {\n          return '<div class=\"text-xxl-center\">' + '<button class=\"btn btn-sm btn-icon dropdown-toggle hide-arrow\" data-bs-toggle=\"dropdown\"><i class=\"bx bx-dots-vertical-rounded\"></i></button>' + '<div class=\"dropdown-menu dropdown-menu-end m-0\">' + '<a href=\"javascript:;\" class=\"dropdown-item\">View</a>' + '<a href=\"javascript:;\" class=\"dropdown-item  delete-record\">Delete</a>' + '</div>' + '</div>';\n        }\n      }],\n      order: [[2, 'desc']],\n      dom: '<\"card-header d-flex flex-wrap py-3 py-sm-2\"<\"head-label text-center me-4 ms-1\">f' + '>t' + '<\"row mx-4\"' + '<\"col-md-12 col-xl-6 text-center text-xl-start pb-2 pb-lg-0 pe-0\"i>' + '<\"col-md-12 col-xl-6 d-flex justify-content-center justify-content-xl-end\"p>' + '>',\n      lengthMenu: [6, 30, 50, 70, 100],\n      language: {\n        sLengthMenu: '_MENU_',\n        search: '',\n        searchPlaceholder: 'Search order'\n      },\n      // Buttons with Dropdown\n\n      // For responsive popup\n      responsive: {\n        details: {\n          display: $.fn.dataTable.Responsive.display.modal({\n            header: function header(row) {\n              var data = row.data();\n              return 'Details of ' + data['order'];\n            }\n          }),\n          type: 'column',\n          renderer: function renderer(api, rowIdx, columns) {\n            var data = $.map(columns, function (col, i) {\n              return col.title !== '' // ? Do not show row in modal popup if title is blank (for check box)\n              ? '<tr data-dt-row=\"' + col.rowIndex + '\" data-dt-column=\"' + col.columnIndex + '\">' + '<td>' + col.title + ':' + '</td> ' + '<td>' + col.data + '</td>' + '</tr>' : '';\n            }).join('');\n            return data ? $('<table class=\"table\"/><tbody />').append(data) : false;\n          }\n        }\n      }\n    });\n    $('div.head-label').html('<h5 class=\"card-title mb-0 text-nowrap\">Orders placed</h5>');\n  }\n\n  // Delete Record\n  $('.datatables-orders tbody').on('click', '.delete-record', function () {\n    dt_order.row($(this).parents('tr')).remove().draw();\n  });\n\n  // Filter form control to default size\n  // ? setTimeout used for multilingual table initialization\n  setTimeout(function () {\n    $('.dataTables_filter .form-control').removeClass('form-control-sm');\n    $('.dataTables_length .form-select').removeClass('form-select-sm');\n  }, 300);\n});\n\n// Validation & Phone mask\n\n//# sourceURL=webpack://Sneat/./static/js/app-ecommerce-customer-detail-overview.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/app-ecommerce-customer-detail-overview.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});