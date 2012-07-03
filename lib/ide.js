var fs = require('fs'),
		path = require('path'),
		config = require('./jshint-config.js'),
    jshint = require('../packages/jshint/jshint.js');

/*
nodeChildProcess = this.nodeChildProcess = require('child_process');

var cmd = "node ../../node.f2ehint-update.js";
var run = nodeChildProcess.exec(cmd);

// ´´½¨¼àÌý
run.stdout.on('data', function (data){
    console.log(data);
});
// ´íÎó
run.stderr.on('data', function (err) {
    console.log(err);
});
*/



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
	
if (!jshint.JSHINT(buffer, config)) {
	jshint.JSHINT.errors.forEach(function (error) {
		if (error) {
			hintResults.push( '[LINE-' + error.line + '] - ' + error.reason );
		}
		
	});
	if(hintResults.length > 0){
		process.stdout.write(hintResults.join("\n") + "\n" + "------------------------\n" + hintResults.length + ' error(s)' + "\n");
	}else{
		process.stdout.write("Congratulations!! Zero Error.\n");
	}
}else{
	process.stdout.write("Congratulations!! Zero Error.\n");
}