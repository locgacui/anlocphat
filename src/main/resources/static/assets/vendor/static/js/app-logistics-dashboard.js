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

/***/ "./static/js/app-logistics-dashboard.js":
/*!**********************************************!*\
  !*** ./static/js/app-logistics-dashboard.js ***!
  \**********************************************/
/***/ (function() {

eval("/**\n *  Logistics Dashboard\n */\n\n\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n(function () {\n  var labelColor, headingColor;\n  if (isDarkStyle) {\n    labelColor = config.colors_dark.textMuted;\n    headingColor = config.colors_dark.headingColor;\n  } else {\n    labelColor = config.colors.textMuted;\n    headingColor = config.colors.headingColor;\n  }\n\n  // Chart Colors\n  var chartColors = {\n    donut: {\n      series1: config.colors.success,\n      series2: 'rgba(113, 221, 55, 0.6)',\n      series3: 'rgba(113, 221, 55, 0.4)',\n      series4: 'rgba(113, 221, 55, 0.2)'\n    },\n    line: {\n      series1: config.colors.warning,\n      series2: config.colors.primary,\n      series3: '#7367f029'\n    }\n  };\n\n  // Shipment statistics Chart\n  // --------------------------------------------------------------------\n  var shipmentEl = document.querySelector('#shipmentStatisticsChart'),\n    shipmentConfig = {\n      series: [{\n        name: 'Shipment',\n        type: 'column',\n        data: [38, 45, 33, 38, 32, 50, 48, 40, 42, 37]\n      }, {\n        name: 'Delivery',\n        type: 'line',\n        data: [23, 28, 23, 32, 28, 44, 32, 38, 26, 34]\n      }],\n      chart: {\n        height: 270,\n        type: 'line',\n        stacked: false,\n        parentHeightOffset: 0,\n        toolbar: {\n          show: false\n        },\n        zoom: {\n          enabled: false\n        }\n      },\n      markers: {\n        size: 4,\n        colors: [config.colors.white],\n        strokeColors: chartColors.line.series2,\n        hover: {\n          size: 6\n        },\n        borderRadius: 4\n      },\n      stroke: {\n        curve: 'smooth',\n        width: [0, 3],\n        lineCap: 'round'\n      },\n      legend: _defineProperty({\n        show: true,\n        position: 'bottom',\n        markers: {\n          width: 8,\n          height: 8,\n          offsetX: -3\n        },\n        height: 40,\n        offsetY: 10,\n        itemMargin: {\n          horizontal: 10,\n          vertical: 0\n        },\n        fontSize: '15px',\n        fontFamily: 'Public Sans',\n        fontWeight: 400,\n        labels: {\n          colors: headingColor,\n          useSeriesColors: false\n        }\n      }, \"offsetY\", 10),\n      grid: {\n        strokeDashArray: 8\n      },\n      colors: [chartColors.line.series1, chartColors.line.series2],\n      fill: {\n        opacity: [1, 1]\n      },\n      plotOptions: {\n        bar: {\n          columnWidth: '30%',\n          startingShape: 'rounded',\n          endingShape: 'rounded',\n          borderRadius: 4\n        }\n      },\n      dataLabels: {\n        enabled: false\n      },\n      xaxis: {\n        tickAmount: 10,\n        categories: ['1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan', '8 Jan', '9 Jan', '10 Jan'],\n        labels: {\n          style: {\n            colors: labelColor,\n            fontSize: '13px',\n            fontFamily: 'Public Sans',\n            fontWeight: 400\n          }\n        },\n        axisBorder: {\n          show: false\n        },\n        axisTicks: {\n          show: false\n        }\n      },\n      yaxis: {\n        tickAmount: 4,\n        min: 10,\n        max: 50,\n        labels: {\n          style: {\n            colors: labelColor,\n            fontSize: '13px',\n            fontFamily: 'Public Sans',\n            fontWeight: 400\n          },\n          formatter: function formatter(val) {\n            return val + '%';\n          }\n        }\n      },\n      responsive: [{\n        breakpoint: 1400,\n        options: {\n          chart: {\n            height: 270\n          },\n          xaxis: {\n            labels: {\n              style: {\n                fontSize: '10px'\n              }\n            }\n          },\n          legend: {\n            itemMargin: {\n              vertical: 0,\n              horizontal: 10\n            },\n            fontSize: '13px',\n            offsetY: 12\n          }\n        }\n      }, {\n        breakpoint: 1399,\n        options: {\n          chart: {\n            height: 415\n          },\n          plotOptions: {\n            bar: {\n              columnWidth: '50%'\n            }\n          }\n        }\n      }, {\n        breakpoint: 982,\n        options: {\n          plotOptions: {\n            bar: {\n              columnWidth: '30%'\n            }\n          }\n        }\n      }, {\n        breakpoint: 480,\n        options: {\n          chart: {\n            height: 250\n          },\n          legend: {\n            offsetY: 7\n          }\n        }\n      }]\n    };\n  if (_typeof(shipmentEl) !== undefined && shipmentEl !== null) {\n    var shipment = new ApexCharts(shipmentEl, shipmentConfig);\n    shipment.render();\n  }\n\n  // Reasons for delivery exceptions Chart\n  // --------------------------------------------------------------------\n  var deliveryExceptionsChartE1 = document.querySelector('#deliveryExceptionsChart'),\n    deliveryExceptionsChartConfig = {\n      chart: {\n        height: 420,\n        parentHeightOffset: 0,\n        type: 'donut'\n      },\n      labels: ['Incorrect address', 'Weather conditions', 'Federal Holidays', 'Damage during transit'],\n      series: [13, 25, 22, 40],\n      colors: [chartColors.donut.series1, chartColors.donut.series2, chartColors.donut.series3, chartColors.donut.series4],\n      stroke: {\n        width: 0\n      },\n      dataLabels: {\n        enabled: false,\n        formatter: function formatter(val, opt) {\n          return parseInt(val) + '%';\n        }\n      },\n      legend: {\n        show: true,\n        position: 'bottom',\n        offsetY: 10,\n        markers: {\n          width: 8,\n          height: 8,\n          offsetX: -3\n        },\n        itemMargin: {\n          horizontal: 15,\n          vertical: 5\n        },\n        fontSize: '13px',\n        fontFamily: 'Public Sans',\n        fontWeight: 400,\n        labels: {\n          colors: headingColor,\n          useSeriesColors: false\n        }\n      },\n      tooltip: {\n        theme: false\n      },\n      grid: {\n        padding: {\n          top: 15\n        }\n      },\n      plotOptions: {\n        pie: {\n          donut: {\n            size: '75%',\n            labels: {\n              show: true,\n              value: {\n                fontSize: '26px',\n                fontFamily: 'Public Sans',\n                color: headingColor,\n                fontWeight: 500,\n                offsetY: -30,\n                formatter: function formatter(val) {\n                  return parseInt(val) + '%';\n                }\n              },\n              name: {\n                offsetY: 20,\n                fontFamily: 'Public Sans'\n              },\n              total: {\n                show: true,\n                fontSize: '0.7rem',\n                label: 'AVG. Exceptions',\n                color: labelColor,\n                formatter: function formatter(w) {\n                  return '30%';\n                }\n              }\n            }\n          }\n        }\n      },\n      responsive: [{\n        breakpoint: 420,\n        options: {\n          chart: {\n            height: 360\n          }\n        }\n      }]\n    };\n  if (_typeof(deliveryExceptionsChartE1) !== undefined && deliveryExceptionsChartE1 !== null) {\n    var deliveryExceptionsChart = new ApexCharts(deliveryExceptionsChartE1, deliveryExceptionsChartConfig);\n    deliveryExceptionsChart.render();\n  }\n})();\n\n// DataTable (jquery)\n// --------------------------------------------------------------------\n$(function () {\n  // Variable declaration for table\n  var dt_dashboard_table = $('.dt-route-vehicles');\n\n  // On route vehicles DataTable\n  if (dt_dashboard_table.length) {\n    var dt_dashboard = dt_dashboard_table.DataTable({\n      ajax: assetsPath + 'json/logistics-dashboard.json',\n      columns: [{\n        data: 'id'\n      }, {\n        data: 'id'\n      }, {\n        data: 'location'\n      }, {\n        data: 'start_city'\n      }, {\n        data: 'end_city'\n      }, {\n        data: 'warnings'\n      }, {\n        data: 'progress'\n      }],\n      columnDefs: [{\n        // For Responsive\n        className: 'control',\n        orderable: false,\n        searchable: false,\n        responsivePriority: 2,\n        targets: 0,\n        render: function render(data, type, full, meta) {\n          return '';\n        }\n      }, _defineProperty({\n        // For Checkboxes\n        targets: 1,\n        orderable: false,\n        searchable: false,\n        checkboxes: true,\n        responsivePriority: 3,\n        render: function render() {\n          return '<input type=\"checkbox\" class=\"dt-checkboxes form-check-input\">';\n        }\n      }, \"checkboxes\", {\n        selectAllRender: '<input type=\"checkbox\" class=\"form-check-input\">'\n      }), {\n        // Icon and location\n        targets: 2,\n        responsivePriority: 1,\n        render: function render(data, type, full, meta) {\n          var $location = full['location'];\n          // Creates full output for row\n          var $row_output = '<div class=\"d-flex justify-content-start align-items-center user-name\">' + '<div class=\"avatar-wrapper\">' + '<div class=\"avatar me-2\">' + '<span class=\"avatar-initial rounded-circle bg-label-secondary\"><i class=\"bx bxs-truck\"></i></span>' + '</div>' + '</div>' + '<div class=\"d-flex flex-column\">' + '<a class=\"text-body fw-medium\" href=\"app-logistics-fleet.html\">VOL-' + $location + '</a>' + '</div>' + '</div>';\n          return $row_output;\n        }\n      }, {\n        // starting route\n        targets: 3,\n        render: function render(data, type, full, meta) {\n          var $start_city = full['start_city'],\n            $start_country = full['start_country'];\n          var $row_output = '<div class=\"text-body\">' + $start_city + ', ' + $start_country + '</div >';\n          return $row_output;\n        }\n      }, {\n        // ending route\n        targets: 4,\n        render: function render(data, type, full, meta) {\n          var $end_city = full['end_city'],\n            $end_country = full['end_country'];\n          var $row_output = '<div class=\"text-body\">' + $end_city + ', ' + $end_country + '</div >';\n          return $row_output;\n        }\n      }, {\n        // warnings\n        targets: -2,\n        render: function render(data, type, full, meta) {\n          var $status_number = full['warnings'];\n          var $status = {\n            1: {\n              title: 'No Warnings',\n              class: 'bg-label-success'\n            },\n            2: {\n              title: 'Temperature Not Optimal',\n              class: 'bg-label-warning'\n            },\n            3: {\n              title: 'Ecu Not Responding',\n              class: 'bg-label-danger'\n            },\n            4: {\n              title: 'Oil Leakage',\n              class: 'bg-label-info'\n            },\n            5: {\n              title: 'fuel problems',\n              class: 'bg-label-primary'\n            }\n          };\n          if (typeof $status[$status_number] === 'undefined') {\n            return data;\n          }\n          return '<span class=\"badge rounded ' + $status[$status_number].class + '\">' + $status[$status_number].title + '</span>';\n        }\n      }, {\n        // progress\n        targets: -1,\n        render: function render(data, type, full, meta) {\n          var $progress = full['progress'];\n          var $progress_output = '<div class=\"d-flex align-items-center\">' + '<div div class=\"progress w-100\" style=\"height: 8px;\">' + '<div class=\"progress-bar\" role=\"progressbar\" style=\"width:' + $progress + '%;\" aria-valuenow=\"' + $progress + '\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>' + '</div>' + '<div class=\"text-body ms-3\">' + $progress + '%</div>' + '</div>';\n          return $progress_output;\n        }\n      }],\n      order: [2, 'asc'],\n      dom: '<\"table-responsive\"t><\"row d-flex align-items-center\"<\"col-sm-12 col-md-6\"i><\"col-sm-12 col-md-6\"p>>',\n      displayLength: 5,\n      responsive: {\n        details: {\n          display: $.fn.dataTable.Responsive.display.modal({\n            header: function header(row) {\n              var data = row.data();\n              return 'Details of ' + data['location'];\n            }\n          }),\n          type: 'column',\n          renderer: function renderer(api, rowIdx, columns) {\n            var data = $.map(columns, function (col, i) {\n              return col.title !== '' // ? Do not show row in modal popup if title is blank (for check box)\n              ? '<tr data-dt-row=\"' + col.rowIndex + '\" data-dt-column=\"' + col.columnIndex + '\">' + '<td>' + col.title + ':' + '</td> ' + '<td>' + col.data + '</td>' + '</tr>' : '';\n            }).join('');\n            return data ? $('<table class=\"table\"/><tbody />').append(data) : false;\n          }\n        }\n      }\n    });\n    $('.dataTables_info').addClass('pt-0');\n  }\n});\n\n//# sourceURL=webpack://Sneat/./static/js/app-logistics-dashboard.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/app-logistics-dashboard.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});