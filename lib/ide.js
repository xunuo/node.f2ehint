var fs = require('fs'),
    jshit = require('./jshit.js'),
    path = require('path');
	

var file = process.argv[2];

var config = {
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
        //"exampleVar",
        //"anotherCoolGlobal",
        //"iLoveDouglas"
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


try {
	buffer = fs.readFileSync(file, 'utf-8');
} catch (e) {
	process.stdout.write("Error: Cant open: " + file);
	process.stdout.write(e + '\n');
}

// Remove potential Unicode Byte Order Mark.
buffer = buffer.replace(/^\uFEFF/, '');

var hintResults = [];

process.stdout.write( "HIT : " + file + "\n------------------------\n" );
	
if (!jshit.JSHINT(buffer, {})) {
	
	jshit.JSHINT.errors.forEach(function (error) {
		
		if (error) {
			hintResults.push( '[LINE-' + error.line + '] - ' + error.reason );
		}
		
	});
	
	if(hintResults.length > 0){
		process.stdout.write(hintResults.join("\n") + "\n" + "------------------------\n" + hintResults.length + ' warning(s)' + "\n");
	}else{
		process.stdout.write("Congratulations!\n------------------------\nYou through the JsHit checks.\n");
	}
	
}else{
	process.stdout.write("Congratulations!! You've through the the JsHit.\n");
}


	
//var buffer = fs.readFileSync(file, 'utf-8');