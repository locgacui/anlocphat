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

/***/ "./static/js/app-academy-dashboard.js":
/*!********************************************!*\
  !*** ./static/js/app-academy-dashboard.js ***!
  \********************************************/
/***/ (function() {

eval("/**\n * Academy Dashboard charts and datatable\n */\n\n\n\n// Hour pie chart\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n(function () {\n  var labelColor, headingColor, borderColor;\n  if (isDarkStyle) {\n    labelColor = config.colors_dark.textMuted;\n    headingColor = config.colors_dark.headingColor;\n    borderColor = config.colors_dark.borderColor;\n  } else {\n    labelColor = config.colors.textMuted;\n    headingColor = config.colors.headingColor;\n    borderColor = config.colors.borderColor;\n  }\n\n  // Donut Chart Colors\n  var chartColors = {\n    donut: {\n      series1: '#71dd37e8',\n      series2: '#71dd37bf',\n      series3: config.colors.success,\n      series4: '#71dd3799',\n      series5: '#71dd3766',\n      series6: '#71dd3733'\n    }\n  };\n  var leadsReportChartEl = document.querySelector('#leadsReportChart'),\n    leadsReportChartConfig = {\n      chart: {\n        height: 157,\n        width: 130,\n        parentHeightOffset: 0,\n        type: 'donut'\n      },\n      labels: ['36h', '56h', '16h', '32h', '56h', '16h'],\n      series: [23, 35, 10, 20, 35, 23],\n      colors: [chartColors.donut.series1, chartColors.donut.series2, chartColors.donut.series3, chartColors.donut.series4, chartColors.donut.series5, chartColors.donut.series6],\n      stroke: {\n        width: 0\n      },\n      dataLabels: {\n        enabled: false,\n        formatter: function formatter(val, opt) {\n          return parseInt(val) + '%';\n        }\n      },\n      legend: {\n        show: false\n      },\n      tooltip: {\n        theme: false\n      },\n      grid: {\n        padding: {\n          top: 0\n        }\n      },\n      plotOptions: {\n        pie: {\n          donut: {\n            size: '75%',\n            labels: {\n              show: true,\n              value: {\n                fontSize: '1.5rem',\n                fontFamily: 'Public Sans',\n                color: headingColor,\n                fontWeight: 500,\n                offsetY: -15,\n                formatter: function formatter(val) {\n                  return parseInt(val) + '%';\n                }\n              },\n              name: {\n                offsetY: 20,\n                fontFamily: 'Public Sans'\n              },\n              total: {\n                show: true,\n                fontSize: '.7rem',\n                label: 'Total',\n                color: labelColor,\n                formatter: function formatter(w) {\n                  return '231h';\n                }\n              }\n            }\n          }\n        }\n      }\n    };\n  if (_typeof(leadsReportChartEl) !== undefined && leadsReportChartEl !== null) {\n    var leadsReportChart = new ApexCharts(leadsReportChartEl, leadsReportChartConfig);\n    leadsReportChart.render();\n  }\n\n  // datatbale bar chart\n\n  var horizontalBarChartEl = document.querySelector('#horizontalBarChart'),\n    horizontalBarChartConfig = {\n      chart: {\n        height: 270,\n        type: 'bar',\n        toolbar: {\n          show: false\n        }\n      },\n      plotOptions: {\n        bar: {\n          horizontal: true,\n          barHeight: '70%',\n          distributed: true,\n          startingShape: 'rounded',\n          borderRadius: 7\n        }\n      },\n      grid: {\n        strokeDashArray: 10,\n        borderColor: borderColor,\n        xaxis: {\n          lines: {\n            show: true\n          }\n        },\n        yaxis: {\n          lines: {\n            show: false\n          }\n        },\n        padding: {\n          top: -35,\n          bottom: -12\n        }\n      },\n      colors: [config.colors.primary, config.colors.info, config.colors.success, config.colors.secondary, config.colors.danger, config.colors.warning],\n      dataLabels: {\n        enabled: true,\n        style: {\n          colors: ['#fff'],\n          fontWeight: 200,\n          fontSize: '13px',\n          fontFamily: 'Public Sans'\n        },\n        formatter: function formatter(val, opts) {\n          return horizontalBarChartConfig.labels[opts.dataPointIndex];\n        },\n        offsetX: 0,\n        dropShadow: {\n          enabled: false\n        }\n      },\n      labels: ['UI Design', 'UX Design', 'Music', 'Animation', 'React', 'SEO'],\n      series: [{\n        data: [35, 20, 14, 12, 10, 9]\n      }],\n      xaxis: {\n        categories: ['6', '5', '4', '3', '2', '1'],\n        axisBorder: {\n          show: false\n        },\n        axisTicks: {\n          show: false\n        },\n        labels: {\n          style: {\n            colors: labelColor,\n            fontSize: '13px'\n          },\n          formatter: function formatter(val) {\n            return \"\".concat(val, \"%\");\n          }\n        }\n      },\n      yaxis: {\n        max: 35,\n        labels: {\n          style: {\n            colors: [labelColor],\n            fontFamily: 'Public Sans',\n            fontSize: '13px'\n          }\n        }\n      },\n      tooltip: {\n        enabled: true,\n        style: {\n          fontSize: '12px'\n        },\n        onDatasetHover: {\n          highlightDataSeries: false\n        },\n        custom: function custom(_ref) {\n          var series = _ref.series,\n            seriesIndex = _ref.seriesIndex,\n            dataPointIndex = _ref.dataPointIndex,\n            w = _ref.w;\n          return '<div class=\"px-3 py-2\">' + '<span>' + series[seriesIndex][dataPointIndex] + '%</span>' + '</div>';\n        }\n      },\n      legend: {\n        show: false\n      }\n    };\n  if (_typeof(horizontalBarChartEl) !== undefined && horizontalBarChartEl !== null) {\n    var horizontalBarChart = new ApexCharts(horizontalBarChartEl, horizontalBarChartConfig);\n    horizontalBarChart.render();\n  }\n\n  //radial Barchart\n\n  function radialBarChart(color, value, show) {\n    var radialBarChartOpt = {\n      chart: {\n        height: show == 'true' ? 58 : 55,\n        width: show == 'true' ? 58 : 45,\n        type: 'radialBar'\n      },\n      plotOptions: {\n        radialBar: {\n          hollow: {\n            size: show == 'true' ? '45%' : '25%'\n          },\n          dataLabels: {\n            show: show == 'true' ? true : false,\n            value: {\n              offsetY: -10,\n              fontSize: '15px',\n              fontWeight: 500,\n              fontFamily: 'Public Sans',\n              color: headingColor\n            }\n          },\n          track: {\n            background: config.colors_label.secondary\n          }\n        }\n      },\n      stroke: {\n        lineCap: 'round'\n      },\n      colors: [color],\n      grid: {\n        padding: {\n          top: show == 'true' ? -12 : -15,\n          bottom: show == 'true' ? -17 : -15,\n          left: show == 'true' ? -17 : -5,\n          right: -15\n        }\n      },\n      series: [value],\n      labels: show == 'true' ? [''] : ['Progress']\n    };\n    return radialBarChartOpt;\n  }\n  var chartProgressList = document.querySelectorAll('.chart-progress');\n  if (chartProgressList) {\n    chartProgressList.forEach(function (chartProgressEl) {\n      var color = config.colors[chartProgressEl.dataset.color],\n        series = chartProgressEl.dataset.series;\n      var progress_variant = chartProgressEl.dataset.progress_variant;\n      var optionsBundle = radialBarChart(color, series, progress_variant);\n      var chart = new ApexCharts(chartProgressEl, optionsBundle);\n      chart.render();\n    });\n  }\n\n  // datatable\n\n  // Variable declaration for table\n  var dt_academy_course = $('.datatables-academy-course'),\n    logoObj = {\n      angular: '<span class=\"badge bg-label-danger p-2\"><i class=\"bx bxl-angular fs-3\"></i></span>',\n      figma: '<span class=\"badge bg-label-warning p-2\"><i class=\"bx bxl-figma fs-3\"></i></span>',\n      react: '<span class=\"badge bg-label-info p-2\"><i class=\"bx bxl-react fs-3\"></i></span>',\n      art: '<span class=\"badge bg-label-success p-2\"><i class=\"bx bxs-color fs-3\"></i></span>',\n      fundamentals: '<span class=\"badge bg-label-primary p-2\"><i class=\"bx bx-diamond fs-3\"></i></span>'\n    };\n\n  // orders datatable\n  if (dt_academy_course.length) {\n    var dt_course = dt_academy_course.DataTable({\n      ajax: assetsPath + 'json/app-academy-dashboard.json',\n      // JSON file to add data\n      columns: [\n      // columns according to JSON\n      {\n        data: ''\n      }, {\n        data: 'id'\n      }, {\n        data: 'course name'\n      }, {\n        data: 'time'\n      }, {\n        data: 'progress'\n      }, {\n        data: 'status'\n      }],\n      columnDefs: [{\n        // For Responsive\n        className: 'control',\n        searchable: false,\n        orderable: false,\n        responsivePriority: 2,\n        targets: 0,\n        render: function render(data, type, full, meta) {\n          return '';\n        }\n      }, _defineProperty({\n        // For Checkboxes\n        targets: 1,\n        orderable: false,\n        searchable: false,\n        checkboxes: true,\n        render: function render() {\n          return '<input type=\"checkbox\" class=\"dt-checkboxes form-check-input\">';\n        }\n      }, \"checkboxes\", {\n        selectAllRender: '<input type=\"checkbox\" class=\"form-check-input\">'\n      }), {\n        // order number\n        targets: 2,\n        responsivePriority: 2,\n        render: function render(data, type, full, meta) {\n          var $logo = full['logo'];\n          var $course = full['course'];\n          var $user = full['user'];\n          var $image = full['image'];\n          if ($image) {\n            // For Avatar image\n            var $output = '<img src=\"' + assetsPath + 'img/avatars/' + $image + '\" alt=\"Avatar\" class=\"rounded-circle\">';\n          } else {\n            // For Avatar badge\n            var stateNum = Math.floor(Math.random() * 6);\n            var states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary'];\n            var $state = states[stateNum],\n              $name = full['user'],\n              $initials = $name.match(/\\b\\w/g) || [];\n            $initials = (($initials.shift() || '') + ($initials.pop() || '')).toUpperCase();\n            $output = '<span class=\"avatar-initial rounded-circle bg-label-' + $state + '\">' + $initials + '</span>';\n          }\n          // Creates full output for row\n          var $row_output = '<div class=\"d-flex align-items-center\">' + '<span class=\"me-3\">' + logoObj[$logo] + '</span>' + '<div>' + '<a class=\"text-heading text-truncate fw-medium mb-2 text-wrap\" href=\"app-academy-course-details.html\">' + $course + '</a>' + '<div class=\"d-flex align-items-center mt-1\">' + '<div class=\"avatar-wrapper me-2\">' + '<div class=\"avatar avatar-xs\">' + $output + '</div>' + '</div>' + '<span class=\"text-nowrap\">' + $user + '</span>' + '</div>' + '</div>' + '</div>';\n          return $row_output;\n        }\n      }, {\n        targets: 3,\n        responsivePriority: 3,\n        render: function render(data, type, full, meta) {\n          var duration = moment.duration(data);\n          var Hs = Math.floor(duration.asHours());\n          var minutes = Math.floor(duration.asMinutes()) - Hs * 60;\n          var formattedTime = Hs + 'h ' + minutes + 'm';\n          return '<span class=\"fw-medium text-nowrap\">' + formattedTime + '</span>';\n        }\n      }, {\n        // progress\n        targets: 4,\n        render: function render(data, type, full, meta) {\n          var $status_number = full['status'];\n          var $average_number = full['number'];\n          return '<div class=\"d-flex align-items-center gap-3\">' + '<p class=\"fw-medium mb-0\">' + $status_number + '</p>' + '<div class=\"progress w-100\" style=\"height: 8px;\">' + '<div class=\"progress-bar\" style=\"width: ' + $status_number + '\" aria-valuenow=\"' + $status_number + '\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>' + '</div>' + '<small class=\"text-muted\">' + $average_number + '</small></div>';\n        }\n      }, {\n        // status\n        targets: 5,\n        render: function render(data, type, full, meta) {\n          var $user_number = full['user_number'];\n          var $note = full['note'];\n          var $view = full['view'];\n          return '<div class=\"d-flex align-items-center justify-content-between\">' + '<div class=\"w-px-50 d-flex align-items-center\">' + '<i class=\"bx bx-user bx-xs me-2 text-primary\"></i>' + $user_number + '</div>' + '<div class=\"w-px-50 d-flex align-items-center\">' + '<i class=\"bx bx-book-open bx-xs me-2 text-info\" ></i>' + $note + '</div>' + '<div class=\"w-px-50 d-flex align-items-center\">' + '<i class=\"bx bx-video bx-xs me-2 text-danger\" ></i>' + $view + '</div>' + '</div>';\n        }\n      }],\n      order: [[2, 'desc']],\n      dom: '<\"card-header flex-column flex-md-row\"<\"head-label text-center\">f' + '>t' + '<\"row mx-4\"' + '<\"col-sm-6 col-12 text-center text-xl-start pb-2 pb-xl-0 px-0\"i>' + '<\"col-sm-6 col-12 d-flex justify-content-center justify-content-xl-end px-0\"p>' + '>',\n      lengthMenu: [5],\n      language: {\n        sLengthMenu: '_MENU_',\n        search: '',\n        searchPlaceholder: 'Course'\n      },\n      // Buttons with Dropdown\n\n      // For responsive popup\n      responsive: {\n        details: {\n          display: $.fn.dataTable.Responsive.display.modal({\n            header: function header(row) {\n              var data = row.data();\n              return 'Details of ' + data['order'];\n            }\n          }),\n          type: 'column',\n          renderer: function renderer(api, rowIdx, columns) {\n            var data = $.map(columns, function (col, i) {\n              return col.title !== '' // ? Do not show row in modal popup if title is blank (for check box)\n              ? '<tr data-dt-row=\"' + col.rowIndex + '\" data-dt-column=\"' + col.columnIndex + '\">' + '<td>' + col.title + ':' + '</td> ' + '<td>' + col.data + '</td>' + '</tr>' : '';\n            }).join('');\n            return data ? $('<table class=\"table\"/><tbody />').append(data) : false;\n          }\n        }\n      }\n    });\n    $('div.head-label').html('<h5 class=\"card-title mb-0 text-nowrap\">Course you are taking</h5>');\n  }\n\n  // Delete Record\n  $('.datatables-orders tbody').on('click', '.delete-record', function () {\n    dt_course.row($(this).parents('tr')).remove().draw();\n  });\n\n  // Filter form control to default size\n  // ? setTimeout used for multilingual table initialization\n  setTimeout(function () {\n    $('.dataTables_filter .form-control').removeClass('form-control-sm');\n    $('.dataTables_length .form-select').removeClass('form-select-sm');\n  }, 300);\n})();\n\n//# sourceURL=webpack://Sneat/./static/js/app-academy-dashboard.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/app-academy-dashboard.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});