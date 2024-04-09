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

/***/ "./static/js/forms-typeahead.js":
/*!**************************************!*\
  !*** ./static/js/forms-typeahead.js ***!
  \**************************************/
/***/ (function() {

eval("/**\n * Typeahead (jquery)\n */\n\n\n\n$(function () {\n  // String Matcher function\n  var substringMatcher = function substringMatcher(strs) {\n    return function findMatches(q, cb) {\n      var matches, substrRegex;\n      matches = [];\n      substrRegex = new RegExp(q, 'i');\n      $.each(strs, function (i, str) {\n        if (substrRegex.test(str)) {\n          matches.push(str);\n        }\n      });\n      cb(matches);\n    };\n  };\n  var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];\n  if (isRtl) {\n    $('.typeahead').attr('dir', 'rtl');\n  }\n\n  // Basic\n  // --------------------------------------------------------------------\n  $('.typeahead').typeahead({\n    hint: !isRtl,\n    highlight: true,\n    minLength: 1\n  }, {\n    name: 'states',\n    source: substringMatcher(states)\n  });\n  var bloodhoundBasicExample = new Bloodhound({\n    datumTokenizer: Bloodhound.tokenizers.whitespace,\n    queryTokenizer: Bloodhound.tokenizers.whitespace,\n    local: states\n  });\n\n  // Bloodhound Example\n  // --------------------------------------------------------------------\n  $('.typeahead-bloodhound').typeahead({\n    hint: !isRtl,\n    highlight: true,\n    minLength: 1\n  }, {\n    name: 'states',\n    source: bloodhoundBasicExample\n  });\n  var prefetchExample = new Bloodhound({\n    datumTokenizer: Bloodhound.tokenizers.whitespace,\n    queryTokenizer: Bloodhound.tokenizers.whitespace,\n    prefetch: assetsPath + 'json/typeahead.json'\n  });\n\n  // Prefetch Example\n  // --------------------------------------------------------------------\n  $('.typeahead-prefetch').typeahead({\n    hint: !isRtl,\n    highlight: true,\n    minLength: 1\n  }, {\n    name: 'states',\n    source: prefetchExample\n  });\n\n  // Render default Suggestions\n  function renderDefaults(q, sync) {\n    if (q === '') {\n      sync(prefetchExample.get('Alaska', 'New York', 'Washington'));\n    } else {\n      prefetchExample.search(q, sync);\n    }\n  }\n  // Default Suggestions\n  // --------------------------------------------------------------------\n  $('.typeahead-default-suggestions').typeahead({\n    hint: !isRtl,\n    highlight: true,\n    minLength: 0\n  }, {\n    name: 'states',\n    source: renderDefaults\n  });\n  var customTemplate = new Bloodhound({\n    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),\n    queryTokenizer: Bloodhound.tokenizers.whitespace,\n    prefetch: assetsPath + 'json/typeahead-data-2.json'\n  });\n\n  // Custom Template\n  // --------------------------------------------------------------------\n  $('.typeahead-custom-template').typeahead(null, {\n    name: 'best-movies',\n    display: 'value',\n    source: customTemplate,\n    highlight: true,\n    hint: !isRtl,\n    templates: {\n      empty: ['<div class=\"empty-message p-2\">', 'unable to find any Best Picture winners that match the current query', '</div>'].join('\\n'),\n      suggestion: function suggestion(data) {\n        return '<div><span class=\"fw-medium\">' + data.value + '</span> – ' + data.year + '</div>';\n      }\n    }\n  });\n  var nbaTeams = [{\n    team: 'Boston Celtics'\n  }, {\n    team: 'Dallas Mavericks'\n  }, {\n    team: 'Brooklyn Nets'\n  }, {\n    team: 'Houston Rockets'\n  }, {\n    team: 'New York Knicks'\n  }, {\n    team: 'Memphis Grizzlies'\n  }, {\n    team: 'Philadelphia 76ers'\n  }, {\n    team: 'New Orleans Hornets'\n  }, {\n    team: 'Toronto Raptors'\n  }, {\n    team: 'San Antonio Spurs'\n  }, {\n    team: 'Chicago Bulls'\n  }, {\n    team: 'Denver Nuggets'\n  }, {\n    team: 'Cleveland Cavaliers'\n  }, {\n    team: 'Minnesota Timberwolves'\n  }, {\n    team: 'Detroit Pistons'\n  }, {\n    team: 'Portland Trail Blazers'\n  }, {\n    team: 'Indiana Pacers'\n  }, {\n    team: 'Oklahoma City Thunder'\n  }, {\n    team: 'Milwaukee Bucks'\n  }, {\n    team: 'Utah Jazz'\n  }, {\n    team: 'Atlanta Hawks'\n  }, {\n    team: 'Golden State Warriors'\n  }, {\n    team: 'Charlotte Bobcats'\n  }, {\n    team: 'Los Angeles Clippers'\n  }, {\n    team: 'Miami Heat'\n  }, {\n    team: 'Los Angeles Lakers'\n  }, {\n    team: 'Orlando Magic'\n  }, {\n    team: 'Phoenix Suns'\n  }, {\n    team: 'Washington Wizards'\n  }, {\n    team: 'Sacramento Kings'\n  }];\n  var nhlTeams = [{\n    team: 'New Jersey Devils'\n  }, {\n    team: 'New York Islanders'\n  }, {\n    team: 'New York Rangers'\n  }, {\n    team: 'Philadelphia Flyers'\n  }, {\n    team: 'Pittsburgh Penguins'\n  }, {\n    team: 'Chicago Blackhawks'\n  }, {\n    team: 'Columbus Blue Jackets'\n  }, {\n    team: 'Detroit Red Wings'\n  }, {\n    team: 'Nashville Predators'\n  }, {\n    team: 'St. Louis Blues'\n  }, {\n    team: 'Boston Bruins'\n  }, {\n    team: 'Buffalo Sabres'\n  }, {\n    team: 'Montreal Canadiens'\n  }, {\n    team: 'Ottawa Senators'\n  }, {\n    team: 'Toronto Maple Leafs'\n  }, {\n    team: 'Calgary Flames'\n  }, {\n    team: 'Colorado Avalanche'\n  }, {\n    team: 'Edmonton Oilers'\n  }, {\n    team: 'Minnesota Wild'\n  }, {\n    team: 'Vancouver Canucks'\n  }, {\n    team: 'Carolina Hurricanes'\n  }, {\n    team: 'Florida Panthers'\n  }, {\n    team: 'Tampa Bay Lightning'\n  }, {\n    team: 'Washington Capitals'\n  }, {\n    team: 'Winnipeg Jets'\n  }, {\n    team: 'Anaheim Ducks'\n  }, {\n    team: 'Dallas Stars'\n  }, {\n    team: 'Los Angeles Kings'\n  }, {\n    team: 'Phoenix Coyotes'\n  }, {\n    team: 'San Jose Sharks'\n  }];\n  var nbaExample = new Bloodhound({\n    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),\n    queryTokenizer: Bloodhound.tokenizers.whitespace,\n    local: nbaTeams\n  });\n  var nhlExample = new Bloodhound({\n    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),\n    queryTokenizer: Bloodhound.tokenizers.whitespace,\n    local: nhlTeams\n  });\n\n  // Multiple\n  // --------------------------------------------------------------------\n  $('.typeahead-multi-datasets').typeahead({\n    hint: !isRtl,\n    highlight: true,\n    minLength: 0\n  }, {\n    name: 'nba-teams',\n    source: nbaExample,\n    display: 'team',\n    templates: {\n      header: '<h4 class=\"league-name border-bottom mb-0 mx-3 mt-3 pb-2\">NBA Teams</h4>'\n    }\n  }, {\n    name: 'nhl-teams',\n    source: nhlExample,\n    display: 'team',\n    templates: {\n      header: '<h4 class=\"league-name border-bottom mb-0 mx-3 mt-3 pb-2\">NHL Teams</h4>'\n    }\n  });\n});\n\n//# sourceURL=webpack://Sneat/./static/js/forms-typeahead.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/js/forms-typeahead.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});