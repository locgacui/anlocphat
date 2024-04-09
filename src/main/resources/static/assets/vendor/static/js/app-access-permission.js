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

/***/ "./static/js/app-access-permission.js":
/*!********************************************!*\
  !*** ./static/js/app-access-permission.js ***!
  \********************************************/
/***/ (function() {

eval("/**\n * App user list (jquery)\n */\n\n\n\n$(function () {\n  var dataTablePermissions = $('.datatables-permissions'),\n    dt_permission,\n    userList = 'app-user-list.html';\n\n  // Users List datatable\n  if (dataTablePermissions.length) {\n    dt_permission = dataTablePermissions.DataTable({\n      ajax: assetsPath + 'json/permissions-list.json',\n      // JSON file to add data\n      columns: [\n      // columns according to JSON\n      {\n        data: ''\n      }, {\n        data: 'id'\n      }, {\n        data: 'name'\n      }, {\n        data: 'assigned_to'\n      }, {\n        data: 'created_date'\n      }, {\n        data: ''\n      }],\n      columnDefs: [{\n        // For Responsive\n        className: 'control',\n        orderable: false,\n        searchable: false,\n        responsivePriority: 2,\n        targets: 0,\n        render: function render(data, type, full, meta) {\n          return '';\n        }\n      }, {\n        targets: 1,\n        searchable: false,\n        visible: false\n      }, {\n        // Name\n        targets: 2,\n        render: function render(data, type, full, meta) {\n          var $name = full['name'];\n          return '<span class=\"text-nowrap\">' + $name + '</span>';\n        }\n      }, {\n        // User Role\n        targets: 3,\n        orderable: false,\n        render: function render(data, type, full, meta) {\n          var $assignedTo = full['assigned_to'],\n            $output = '';\n          var roleBadgeObj = {\n            Admin: '<a href=\"' + userList + '\"><span class=\"badge  bg-label-primary m-1\">Administrator</span></a>',\n            Manager: '<a href=\"' + userList + '\"><span class=\"badge  bg-label-warning m-1\">Manager</span></a>',\n            Users: '<a href=\"' + userList + '\"><span class=\"badge  bg-label-success m-1\">Users</span></a>',\n            Support: '<a href=\"' + userList + '\"><span class=\"badge  bg-label-info m-1\">Support</span></a>',\n            Restricted: '<a href=\"' + userList + '\"><span class=\"badge  bg-label-danger m-1\">Restricted User</span></a>'\n          };\n          for (var i = 0; i < $assignedTo.length; i++) {\n            var val = $assignedTo[i];\n            $output += roleBadgeObj[val];\n          }\n          return '<span class=\"text-nowrap\">' + $output + '</span>';\n        }\n      }, {\n        // remove ordering from Name\n        targets: 4,\n        orderable: false,\n        render: function render(data, type, full, meta) {\n          var $date = full['created_date'];\n          return '<span class=\"text-nowrap\">' + $date + '</span>';\n        }\n      }, {\n        // Actions\n        targets: -1,\n        searchable: false,\n        title: 'Actions',\n        orderable: false,\n        render: function render(data, type, full, meta) {\n          return '<span class=\"text-nowrap\"><button class=\"btn btn-sm btn-icon me-2\" data-bs-target=\"#editPermissionModal\" data-bs-toggle=\"modal\" data-bs-dismiss=\"modal\"><i class=\"bx bx-edit\"></i></button>' + '<button class=\"btn btn-sm btn-icon delete-record\"><i class=\"bx bx-trash\"></i></button></span>';\n        }\n      }],\n      order: [[1, 'asc']],\n      dom: '<\"row mx-1\"' + '<\"col-sm-12 col-md-3\" l>' + '<\"col-sm-12 col-md-9\"<\"dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-md-end justify-content-center flex-wrap me-1\"<\"me-3\"f>B>>' + '>t' + '<\"row mx-2\"' + '<\"col-sm-12 col-md-6\"i>' + '<\"col-sm-12 col-md-6\"p>' + '>',\n      language: {\n        sLengthMenu: '_MENU_',\n        search: 'Search',\n        searchPlaceholder: 'Search..'\n      },\n      // Buttons with Dropdown\n      buttons: [{\n        text: 'Add Permission',\n        className: 'add-new btn btn-primary mb-3 mb-md-0',\n        attr: {\n          'data-bs-toggle': 'modal',\n          'data-bs-target': '#addPermissionModal'\n        },\n        init: function init(api, node, config) {\n          $(node).removeClass('btn-secondary');\n        }\n      }],\n      // For responsive popup\n      responsive: {\n        details: {\n          display: $.fn.dataTable.Responsive.display.modal({\n            header: function header(row) {\n              var data = row.data();\n              return 'Details of ' + data['name'];\n            }\n          }),\n          type: 'column',\n          renderer: function renderer(api, rowIdx, columns) {\n            var data = $.map(columns, function (col, i) {\n              return col.title !== '' // ? Do not show row in modal popup if title is blank (for check box)\n              ? '<tr data-dt-row=\"' + col.rowIndex + '\" data-dt-column=\"' + col.columnIndex + '\">' + '<td>' + col.title + ':' + '</td> ' + '<td>' + col.data + '</td>' + '</tr>' : '';\n            }).join('');\n            return data ? $('<table class=\"table\"/><tbody />').append(data) : false;\n          }\n        }\n      },\n      initComplete: function initComplete() {\n        // Adding role filter once table initialized\n        this.api().columns(3).every(function () {\n          var column = this;\n          var select = $('<select id=\"UserRole\" class=\"form-select text-capitalize\"><option value=\"\"> Select Role </option></select>').appendTo('.user_role').on('change', function () {\n            var val = $.fn.dataTable.util.escapeRegex($(this).val());\n            column.search(val ? '^' + val + '$' : '', true, false).draw();\n          });\n          column.data().unique().sort().each(function (d, j) {\n            select.append('<option value=\"' + d + '\" class=\"text-capitalize\">' + d + '</option>');\n          });\n        });\n      }\n    });\n  }\n\n  // Delete Record\n  $('.datatables-permissions tbody').on('click', '.delete-record', function () {\n    dt_permission.row($(this).parents('tr')).remove().draw();\n  });\n\n  // Filter form control to default size\n  // ? setTimeout used for multilingual table initialization\n  setTimeout(function () {\n    $('.dataTables_filter .form-control').removeClass('form-control-sm');\n    $('.dataTables_length .form-select').removeClass('form-select-sm');\n  }, 300);\n});\n\n//# sourceURL=webpack://Sneat/./static/js/app-access-permission.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/app-access-permission.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});