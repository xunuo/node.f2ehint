var fs = require('fs'),
		path = require('path'),
		config = require('./config.js'),
    jshit = require('../packages/jshit.js');

var file = process.argv[2];

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