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

/***/ "./static/js/dashboards-crm.js":
/*!*************************************!*\
  !*** ./static/js/dashboards-crm.js ***!
  \*************************************/
/***/ (function() {

eval("/**\n * Dashboard CRM\n */\n\n\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n(function () {\n  var cardColor, headingColor, labelColor, legendColor, shadeColor, borderColor, heatMap1, heatMap2, heatMap3, heatMap4;\n  if (isDarkStyle) {\n    cardColor = config.colors_dark.cardColor;\n    headingColor = config.colors_dark.headingColor;\n    labelColor = config.colors_dark.textMuted;\n    legendColor = config.colors_dark.bodyColor;\n    borderColor = config.colors_dark.borderColor;\n    shadeColor = 'dark';\n    heatMap1 = '#4f51c0';\n    heatMap2 = '#595cd9';\n    heatMap3 = '#8789ff';\n    heatMap4 = '#c3c4ff';\n  } else {\n    cardColor = config.colors.white;\n    headingColor = config.colors.headingColor;\n    labelColor = config.colors.textMuted;\n    legendColor = config.colors.bodyColor;\n    borderColor = config.colors.borderColor;\n    shadeColor = '';\n    heatMap1 = '#e1e2ff';\n    heatMap2 = '#c3c4ff';\n    heatMap3 = '#a5a7ff';\n    heatMap4 = '#696cff';\n  }\n\n  // Donut Chart Colors\n  var chartColors = {\n    donut: {\n      series1: config.colors.success,\n      series2: 'rgba(113, 221, 55, 0.6)',\n      series3: 'rgba(113, 221, 55, 0.4)',\n      series4: 'rgba(113, 221, 55, 0.2)'\n    }\n  };\n\n  // Radial bar chart functions\n  function radialBarChart(color, value) {\n    var radialBarChartOpt = {\n      chart: {\n        height: 55,\n        width: 45,\n        type: 'radialBar'\n      },\n      plotOptions: {\n        radialBar: {\n          hollow: {\n            size: '25%'\n          },\n          dataLabels: {\n            show: false\n          },\n          track: {\n            background: config.colors_label.secondary\n          }\n        }\n      },\n      colors: [color],\n      grid: {\n        padding: {\n          top: -15,\n          bottom: -15,\n          left: -5,\n          right: -15\n        }\n      },\n      series: [value],\n      labels: ['Progress']\n    };\n    return radialBarChartOpt;\n  }\n\n  // Progress Chart\n  // --------------------------------------------------------------------\n  // All progress chart\n  var chartProgressList = document.querySelectorAll('.chart-progress');\n  if (chartProgressList) {\n    chartProgressList.forEach(function (chartProgressEl) {\n      var color = config.colors[chartProgressEl.dataset.color],\n        series = chartProgressEl.dataset.series;\n      var optionsBundle = radialBarChart(color, series);\n      var chart = new ApexCharts(chartProgressEl, optionsBundle);\n      chart.render();\n    });\n  }\n\n  // Customer Ratings - Line Charts\n  // --------------------------------------------------------------------\n  var customerRatingsChartEl = document.querySelector('#customerRatingsChart'),\n    customerRatingsChartOptions = {\n      chart: {\n        height: 200,\n        toolbar: {\n          show: false\n        },\n        zoom: {\n          enabled: false\n        },\n        type: 'line',\n        dropShadow: {\n          enabled: true,\n          enabledOnSeries: [1],\n          top: 13,\n          left: 4,\n          blur: 3,\n          color: config.colors.primary,\n          opacity: 0.09\n        }\n      },\n      series: [{\n        name: 'Last Month',\n        data: [20, 54, 20, 38, 22, 28, 16, 19]\n      }, {\n        name: 'This Month',\n        data: [20, 32, 22, 65, 40, 46, 34, 70]\n      }],\n      stroke: {\n        curve: 'smooth',\n        dashArray: [8, 0],\n        width: [3, 4]\n      },\n      legend: {\n        show: false\n      },\n      colors: [borderColor, config.colors.primary],\n      grid: {\n        show: false,\n        borderColor: borderColor,\n        padding: {\n          top: -20,\n          bottom: -10,\n          left: 0\n        }\n      },\n      markers: {\n        size: 6,\n        colors: 'transparent',\n        strokeColors: 'transparent',\n        strokeWidth: 5,\n        hover: {\n          size: 6\n        },\n        discrete: [{\n          fillColor: config.colors.white,\n          seriesIndex: 1,\n          dataPointIndex: 7,\n          strokeColor: config.colors.primary,\n          size: 6\n        }, {\n          fillColor: config.colors.white,\n          seriesIndex: 1,\n          dataPointIndex: 3,\n          strokeColor: config.colors.black,\n          size: 6\n        }]\n      },\n      xaxis: {\n        labels: {\n          style: {\n            colors: labelColor,\n            fontSize: '13px'\n          }\n        },\n        axisTicks: {\n          show: false\n        },\n        categories: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],\n        axisBorder: {\n          show: false\n        }\n      },\n      yaxis: {\n        show: false\n      }\n    };\n  if (_typeof(customerRatingsChartEl) !== undefined && customerRatingsChartEl !== null) {\n    var customerRatingsChart = new ApexCharts(customerRatingsChartEl, customerRatingsChartOptions);\n    customerRatingsChart.render();\n  }\n\n  // Overview & Sales Activity - Staked Bar Chart\n  // --------------------------------------------------------------------\n  var salesActivityChartEl = document.querySelector('#salesActivityChart'),\n    salesActivityChartConfig = {\n      chart: {\n        type: 'bar',\n        height: 275,\n        stacked: true,\n        toolbar: {\n          show: false\n        }\n      },\n      series: [{\n        name: 'PRODUCT A',\n        data: [75, 50, 55, 60, 48, 82, 59]\n      }, {\n        name: 'PRODUCT B',\n        data: [25, 29, 32, 35, 34, 18, 30]\n      }],\n      plotOptions: {\n        bar: {\n          horizontal: false,\n          columnWidth: '40%',\n          borderRadius: 10,\n          startingShape: 'rounded',\n          endingShape: 'rounded'\n        }\n      },\n      dataLabels: {\n        enabled: false\n      },\n      stroke: {\n        curve: 'smooth',\n        width: 6,\n        lineCap: 'round',\n        colors: [cardColor]\n      },\n      legend: {\n        show: false\n      },\n      colors: [config.colors.danger, '#435971'],\n      fill: {\n        opacity: 1\n      },\n      grid: {\n        show: false,\n        strokeDashArray: 7,\n        padding: {\n          top: -10,\n          bottom: -12,\n          left: 0,\n          right: 0\n        }\n      },\n      xaxis: {\n        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],\n        labels: {\n          show: true,\n          style: {\n            colors: labelColor,\n            fontSize: '13px'\n          }\n        },\n        axisBorder: {\n          show: false\n        },\n        axisTicks: {\n          show: false\n        }\n      },\n      yaxis: {\n        show: false\n      },\n      responsive: [{\n        breakpoint: 1440,\n        options: {\n          plotOptions: {\n            bar: {\n              borderRadius: 10,\n              columnWidth: '50%'\n            }\n          }\n        }\n      }, {\n        breakpoint: 1300,\n        options: {\n          plotOptions: {\n            bar: {\n              borderRadius: 11,\n              columnWidth: '55%'\n            }\n          }\n        }\n      }, {\n        breakpoint: 1200,\n        options: {\n          plotOptions: {\n            bar: {\n              borderRadius: 10,\n              columnWidth: '45%'\n            }\n          }\n        }\n      }, {\n        breakpoint: 1040,\n        options: {\n          plotOptions: {\n            bar: {\n              borderRadius: 10,\n              columnWidth: '50%'\n            }\n          }\n        }\n      }, {\n        breakpoint: 992,\n        options: {\n          plotOptions: {\n            bar: {\n              borderRadius: 12,\n              columnWidth: '40%'\n            }\n          },\n          chart: {\n            type: 'bar',\n            height: 320\n          }\n        }\n      }, {\n        breakpoint: 768,\n        options: {\n          plotOptions: {\n            bar: {\n              borderRadius: 11,\n              columnWidth: '25%'\n            }\n          }\n        }\n      }, {\n        breakpoint: 576,\n        options: {\n          plotOptions: {\n            bar: {\n              borderRadius: 10,\n              columnWidth: '35%'\n            }\n          }\n        }\n      }, {\n        breakpoint: 440,\n        options: {\n          plotOptions: {\n            bar: {\n              borderRadius: 10,\n              columnWidth: '45%'\n            }\n          }\n        }\n      }, {\n        breakpoint: 360,\n        options: {\n          plotOptions: {\n            bar: {\n              borderRadius: 8,\n              columnWidth: '50%'\n            }\n          }\n        }\n      }],\n      states: {\n        hover: {\n          filter: {\n            type: 'none'\n          }\n        },\n        active: {\n          filter: {\n            type: 'none'\n          }\n        }\n      }\n    };\n  if (_typeof(salesActivityChartEl) !== undefined && salesActivityChartEl !== null) {\n    var salesActivityChart = new ApexCharts(salesActivityChartEl, salesActivityChartConfig);\n    salesActivityChart.render();\n  }\n\n  // Session Area Chart\n  // --------------------------------------------------------------------\n  var sessionAreaChartEl = document.querySelector('#sessionsChart'),\n    sessionAreaChartConfig = {\n      chart: {\n        height: 90,\n        type: 'area',\n        toolbar: {\n          show: false\n        },\n        sparkline: {\n          enabled: true\n        }\n      },\n      markers: {\n        size: 6,\n        colors: 'transparent',\n        strokeColors: 'transparent',\n        strokeWidth: 4,\n        discrete: [{\n          fillColor: config.colors.white,\n          seriesIndex: 0,\n          dataPointIndex: 8,\n          strokeColor: config.colors.warning,\n          strokeWidth: 2,\n          size: 6,\n          radius: 8\n        }],\n        hover: {\n          size: 7\n        }\n      },\n      grid: {\n        show: false,\n        padding: {\n          right: 8\n        }\n      },\n      colors: [config.colors.warning],\n      fill: {\n        type: 'gradient',\n        gradient: {\n          shade: shadeColor,\n          shadeIntensity: 0.8,\n          opacityFrom: 0.8,\n          opacityTo: 0.25,\n          stops: [0, 95, 100]\n        }\n      },\n      dataLabels: {\n        enabled: false\n      },\n      stroke: {\n        width: 2,\n        curve: 'straight'\n      },\n      series: [{\n        data: [280, 280, 240, 240, 200, 200, 260, 260, 310]\n      }],\n      xaxis: {\n        show: false,\n        lines: {\n          show: false\n        },\n        labels: {\n          show: false\n        },\n        axisBorder: {\n          show: false\n        }\n      },\n      yaxis: {\n        show: false\n      }\n    };\n  if (_typeof(sessionAreaChartEl) !== undefined && sessionAreaChartEl !== null) {\n    var sessionAreaChart = new ApexCharts(sessionAreaChartEl, sessionAreaChartConfig);\n    sessionAreaChart.render();\n  }\n\n  // Order Statistics Chart\n  // --------------------------------------------------------------------\n  var leadsReportChartEl = document.querySelector('#leadsReportChart'),\n    leadsReportChartConfig = {\n      chart: {\n        height: 157,\n        width: 135,\n        parentHeightOffset: 0,\n        type: 'donut'\n      },\n      labels: ['Electronic', 'Sports', 'Decor', 'Fashion'],\n      series: [45, 58, 30, 50],\n      colors: [chartColors.donut.series1, chartColors.donut.series2, chartColors.donut.series3, chartColors.donut.series4],\n      stroke: {\n        width: 0\n      },\n      dataLabels: {\n        enabled: false,\n        formatter: function formatter(val, opt) {\n          return parseInt(val) + '%';\n        }\n      },\n      legend: {\n        show: false\n      },\n      tooltip: {\n        theme: false\n      },\n      grid: {\n        padding: {\n          top: 5,\n          bottom: 5\n        }\n      },\n      plotOptions: {\n        pie: {\n          donut: {\n            size: '75%',\n            labels: {\n              show: true,\n              value: {\n                fontSize: '1.5rem',\n                fontFamily: 'Public Sans',\n                color: headingColor,\n                fontWeight: 500,\n                offsetY: -15,\n                formatter: function formatter(val) {\n                  return parseInt(val) + '%';\n                }\n              },\n              name: {\n                offsetY: 20,\n                fontFamily: 'Public Sans'\n              },\n              total: {\n                show: true,\n                fontSize: '.7rem',\n                label: '1 Week',\n                color: legendColor,\n                formatter: function formatter(w) {\n                  return '32%';\n                }\n              }\n            }\n          }\n        }\n      }\n    };\n  if (_typeof(leadsReportChartEl) !== undefined && leadsReportChartEl !== null) {\n    var leadsReportChart = new ApexCharts(leadsReportChartEl, leadsReportChartConfig);\n    leadsReportChart.render();\n  }\n\n  // Earning Reports Bar Chart\n  // --------------------------------------------------------------------\n  var reportBarChartEl = document.querySelector('#reportBarChart'),\n    reportBarChartConfig = {\n      chart: {\n        height: 120,\n        type: 'bar',\n        toolbar: {\n          show: false\n        }\n      },\n      plotOptions: {\n        bar: {\n          barHeight: '60%',\n          columnWidth: '50%',\n          startingShape: 'rounded',\n          endingShape: 'rounded',\n          borderRadius: 4,\n          distributed: true\n        }\n      },\n      grid: {\n        show: false,\n        padding: {\n          top: -35,\n          bottom: -10,\n          left: -10,\n          right: -10\n        }\n      },\n      colors: [config.colors_label.primary, config.colors_label.primary, config.colors_label.primary, config.colors_label.primary, config.colors.primary, config.colors_label.primary, config.colors_label.primary],\n      dataLabels: {\n        enabled: false\n      },\n      series: [{\n        data: [40, 95, 60, 45, 90, 50, 75]\n      }],\n      legend: {\n        show: false\n      },\n      xaxis: {\n        categories: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],\n        axisBorder: {\n          show: false\n        },\n        axisTicks: {\n          show: false\n        },\n        labels: {\n          style: {\n            colors: labelColor,\n            fontSize: '13px'\n          }\n        }\n      },\n      yaxis: {\n        labels: {\n          show: false\n        }\n      }\n    };\n  if (_typeof(reportBarChartEl) !== undefined && reportBarChartEl !== null) {\n    var barChart = new ApexCharts(reportBarChartEl, reportBarChartConfig);\n    barChart.render();\n  }\n\n  // Sales Analytics - Heat map chart\n  // --------------------------------------------------------------------\n  var salesAnalyticsChartEl = document.querySelector('#salesAnalyticsChart'),\n    salesAnalyticsChartConfig = {\n      chart: {\n        height: 350,\n        type: 'heatmap',\n        parentHeightOffset: 0,\n        offsetX: -10,\n        toolbar: {\n          show: false\n        }\n      },\n      series: [{\n        name: '1k',\n        data: [{\n          x: 'Jan',\n          y: '250'\n        }, {\n          x: 'Feb',\n          y: '350'\n        }, {\n          x: 'Mar',\n          y: '220'\n        }, {\n          x: 'Apr',\n          y: '290'\n        }, {\n          x: 'May',\n          y: '650'\n        }, {\n          x: 'Jun',\n          y: '260'\n        }, {\n          x: 'Jul',\n          y: '274'\n        }, {\n          x: 'Aug',\n          y: '850'\n        }]\n      }, {\n        name: '2k',\n        data: [{\n          x: 'Jan',\n          y: '750'\n        }, {\n          x: 'Feb',\n          y: '3350'\n        }, {\n          x: 'Mar',\n          y: '1220'\n        }, {\n          x: 'Apr',\n          y: '1290'\n        }, {\n          x: 'May',\n          y: '1650'\n        }, {\n          x: 'Jun',\n          y: '1260'\n        }, {\n          x: 'Jul',\n          y: '1274'\n        }, {\n          x: 'Aug',\n          y: '850'\n        }]\n      }, {\n        name: '3k',\n        data: [{\n          x: 'Jan',\n          y: '375'\n        }, {\n          x: 'Feb',\n          y: '1350'\n        }, {\n          x: 'Mar',\n          y: '3220'\n        }, {\n          x: 'Apr',\n          y: '2290'\n        }, {\n          x: 'May',\n          y: '2650'\n        }, {\n          x: 'Jun',\n          y: '2260'\n        }, {\n          x: 'Jul',\n          y: '1274'\n        }, {\n          x: 'Aug',\n          y: '815'\n        }]\n      }, {\n        name: '4k',\n        data: [{\n          x: 'Jan',\n          y: '575'\n        }, {\n          x: 'Feb',\n          y: '1350'\n        }, {\n          x: 'Mar',\n          y: '2220'\n        }, {\n          x: 'Apr',\n          y: '3290'\n        }, {\n          x: 'May',\n          y: '3650'\n        }, {\n          x: 'Jun',\n          y: '2260'\n        }, {\n          x: 'Jul',\n          y: '1274'\n        }, {\n          x: 'Aug',\n          y: '315'\n        }]\n      }, {\n        name: '5k',\n        data: [{\n          x: 'Jan',\n          y: '875'\n        }, {\n          x: 'Feb',\n          y: '1350'\n        }, {\n          x: 'Mar',\n          y: '2220'\n        }, {\n          x: 'Apr',\n          y: '3290'\n        }, {\n          x: 'May',\n          y: '3650'\n        }, {\n          x: 'Jun',\n          y: '2260'\n        }, {\n          x: 'Jul',\n          y: '1274'\n        }, {\n          x: 'Aug',\n          y: '965'\n        }]\n      }, {\n        name: '6k',\n        data: [{\n          x: 'Jan',\n          y: '575'\n        }, {\n          x: 'Feb',\n          y: '1350'\n        }, {\n          x: 'Mar',\n          y: '2220'\n        }, {\n          x: 'Apr',\n          y: '2290'\n        }, {\n          x: 'May',\n          y: '2650'\n        }, {\n          x: 'Jun',\n          y: '3260'\n        }, {\n          x: 'Jul',\n          y: '1274'\n        }, {\n          x: 'Aug',\n          y: '815'\n        }]\n      }, {\n        name: '7k',\n        data: [{\n          x: 'Jan',\n          y: '575'\n        }, {\n          x: 'Feb',\n          y: '1350'\n        }, {\n          x: 'Mar',\n          y: '1220'\n        }, {\n          x: 'Apr',\n          y: '1290'\n        }, {\n          x: 'May',\n          y: '1650'\n        }, {\n          x: 'Jun',\n          y: '1260'\n        }, {\n          x: 'Jul',\n          y: '3274'\n        }, {\n          x: 'Aug',\n          y: '815'\n        }]\n      }, {\n        name: '8k',\n        data: [{\n          x: 'Jan',\n          y: '575'\n        }, {\n          x: 'Feb',\n          y: '350'\n        }, {\n          x: 'Mar',\n          y: '220'\n        }, {\n          x: 'Apr',\n          y: '290'\n        }, {\n          x: 'May',\n          y: '650'\n        }, {\n          x: 'Jun',\n          y: '260'\n        }, {\n          x: 'Jul',\n          y: '274'\n        }, {\n          x: 'Aug',\n          y: '815'\n        }]\n      }],\n      plotOptions: {\n        heatmap: {\n          enableShades: false,\n          radius: '6px',\n          colorScale: {\n            ranges: [{\n              from: 0,\n              to: 1000,\n              name: '1k',\n              color: heatMap1\n            }, {\n              from: 1001,\n              to: 2000,\n              name: '2k',\n              color: heatMap2\n            }, {\n              from: 2001,\n              to: 3000,\n              name: '3k',\n              color: heatMap3\n            }, {\n              from: 3001,\n              to: 4000,\n              name: '4k',\n              color: heatMap4\n            }]\n          }\n        }\n      },\n      dataLabels: {\n        enabled: false\n      },\n      stroke: {\n        width: 4,\n        colors: [cardColor]\n      },\n      legend: {\n        show: false\n      },\n      grid: {\n        show: false,\n        padding: {\n          top: -10,\n          left: 10,\n          right: -15,\n          bottom: 0\n        }\n      },\n      xaxis: {\n        labels: {\n          show: true,\n          style: {\n            colors: labelColor,\n            fontSize: '13px'\n          }\n        },\n        axisBorder: {\n          show: false\n        },\n        axisTicks: {\n          show: false\n        }\n      },\n      yaxis: {\n        labels: {\n          style: {\n            colors: labelColor,\n            fontSize: '13px'\n          }\n        }\n      },\n      responsive: [{\n        breakpoint: 1441,\n        options: {\n          chart: {\n            height: '325px'\n          },\n          grid: {\n            padding: {\n              right: -15\n            }\n          }\n        }\n      }, {\n        breakpoint: 1045,\n        options: {\n          chart: {\n            height: '300px'\n          },\n          grid: {\n            padding: {\n              right: -50\n            }\n          }\n        }\n      }, {\n        breakpoint: 992,\n        options: {\n          chart: {\n            height: '320px'\n          },\n          grid: {\n            padding: {\n              right: -50\n            }\n          }\n        }\n      }, {\n        breakpoint: 767,\n        options: {\n          chart: {\n            height: '400px'\n          },\n          grid: {\n            padding: {\n              right: 0\n            }\n          }\n        }\n      }, {\n        breakpoint: 568,\n        options: {\n          chart: {\n            height: '330px'\n          },\n          grid: {\n            padding: {\n              right: -20\n            }\n          }\n        }\n      }],\n      states: {\n        hover: {\n          filter: {\n            type: 'none'\n          }\n        },\n        active: {\n          filter: {\n            type: 'none'\n          }\n        }\n      }\n    };\n  if (_typeof(salesAnalyticsChartEl) !== undefined && salesAnalyticsChartEl !== null) {\n    var salesAnalyticsChart = new ApexCharts(salesAnalyticsChartEl, salesAnalyticsChartConfig);\n    salesAnalyticsChart.render();\n  }\n\n  // Sale Stats - Radial Bar Chart\n  // --------------------------------------------------------------------\n  var salesStatsEl = document.querySelector('#salesStats'),\n    salesStatsOptions = {\n      chart: {\n        height: 340,\n        type: 'radialBar'\n      },\n      series: [75],\n      labels: ['Sales'],\n      plotOptions: {\n        radialBar: {\n          startAngle: 0,\n          endAngle: 360,\n          strokeWidth: '70',\n          hollow: {\n            margin: 50,\n            size: '75%',\n            image: assetsPath + 'img/icons/misc/arrow-star.png',\n            imageWidth: 65,\n            imageHeight: 55,\n            imageOffsetY: -35,\n            imageClipped: false\n          },\n          track: {\n            strokeWidth: '50%',\n            background: borderColor\n          },\n          dataLabels: {\n            show: true,\n            name: {\n              offsetY: 60,\n              show: true,\n              color: labelColor,\n              fontSize: '15px'\n            },\n            value: {\n              formatter: function formatter(val) {\n                return parseInt(val) + '%';\n              },\n              offsetY: 20,\n              color: headingColor,\n              fontSize: '32px',\n              show: true\n            }\n          }\n        }\n      },\n      fill: {\n        type: 'solid',\n        colors: config.colors.success\n      },\n      stroke: {\n        lineCap: 'round'\n      },\n      states: {\n        hover: {\n          filter: {\n            type: 'none'\n          }\n        },\n        active: {\n          filter: {\n            type: 'none'\n          }\n        }\n      }\n    };\n  if (_typeof(salesStatsEl) !== undefined && salesStatsEl !== null) {\n    var salesStats = new ApexCharts(salesStatsEl, salesStatsOptions);\n    salesStats.render();\n  }\n})();\n\n//# sourceURL=webpack://Sneat/./static/js/dashboards-crm.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/dashboards-crm.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});