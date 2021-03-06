// JSHint配置
// 配置解释：http://www.zipeng.info/archives/jshint-intro.html | http://ued.ctrip.com/blog/?p=2733
module.exports = {
    // Settings
    "passfail"      : false,  // Stop on first error.
    "maxerr"        : 10000,    // Maximum error before stopping.
    // Predefined globals whom JSHint will ignore.
    "browser"       : true,   // Standard browser globals e.g. `window`, `document`.
    "node"          : false,
    "rhino"         : false,
    "couch"         : false,
    "wsh"           : true,   // Windows Scripting Host.
    "jquery"        : true,
    "prototypejs"   : false,
    "mootools"      : false,
    "dojo"          : false,
    "predef"        : [  // Custom globals.
        "AE",
		"get",
        "YUE",
        "YUD",
		"YUC",
		"YAHOO",
		"dmtrack",
		"alert",
        "confirm", 
        "prompt",
		"escape"
    ],
    // Development.
    "debug"         : false,  // Allow debugger statements e.g. browser breakpoints.
    "devel"         : false,   // Allow developments statements e.g. `console.log();`.
    // ECMAScript 5.
    "es5"           : false,   // Allow ECMAScript 5 syntax.
    "strict"        : false,  // Require `use strict` pragma  in every file.
    "globalstrict"  : false,  // Allow global "use strict" (also enables 'strict').
    // The Good Parts.
    "asi"           : false,  // Tolerate Automatic Semicolon Insertion (no semicolons). 
    "laxbreak"      : true,   // Tolerate unsafe line breaks e.g. `return [\n] x` without semicolons.
    "bitwise"       : false,   // Prohibit bitwise operators (&, |, ^, etc.).
    "boss"          : true,  // Tolerate assignments inside if, for & while. Usually conditions & loops are for comparison, not assignments.
    "curly"         : false,   // Require {} for every new block or scope.
    "eqeqeq"        : false,   // Require triple equals i.e. `===`.
    "eqnull"        : true,  // Tolerate use of `== null`.
    "evil"          : true,  // Tolerate use of `eval`.
    "expr"          : false,  // Tolerate `ExpressionStatement` as Programs.
    "forin"         : false,  // Tolerate `for in` loops without `hasOwnPrototype`.
    "immed"         : false,   // Require immediate invocations to be wrapped in parens e.g. `( function(){}() );`
    "latedef"       : false,   // Prohibit variable use before definition.
    "loopfunc"      : true,   // Allow functions to be defined within loops.
    "noarg"         : false,   // Prohibit use of `arguments.caller` and `arguments.callee`.
    "regexp"        : false,   // Prohibit `.` and `[^...]` in regular expressions.
    "regexdash"     : true,  // Tolerate unescaped last dash i.e. `[-...]`.
    "scripturl"     : true,   // Tolerate script-targeted URLs.
    "shadow"        : true,  // Allows re-define variables later in code e.g. `var x=1; x=2;`.
    "supernew"      : true,  // Tolerate `new function () { ... };` and `new Object;`.
    "undef"         : false,   // Require all non-global variables be declared before they are used.
    // Personal styling preferences.
    "newcap"        : false,   // Require capitalization of all constructor functions e.g. `new F()`.
    "noempty"       : false,   // Prohibit use of empty blocks.
    "nonew"         : false,   // Prohibit use of constructors for side-effects.
    "nomen"         : false,   // Prohibit use of initial or trailing underbars in names.
    "onevar"        : false,  // Allow only one `var` statement per function.
    "plusplus"      : false,  // Prohibit use of `++` & `--`.
    "sub"           : true,  // Tolerate all forms of subscript notation besides dot notation e.g. `dict['key']` instead of `dict.key`.
    "trailing"      : false,   // Prohibit trailing whitespaces.
    "white"         : false,   // Check against strict whitespace and indentation rules.
    "indent"        : 4,       // Specify indentation spacing
		// f2e cuestom
		"smarttabs"		: true		// 允许 Mixed spaces and tabs.
};