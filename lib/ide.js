var fs = require('fs'),
	path = require('path'),
	jshintConfig = require('./jshint-config.js'),
	csslintConfig = require('./csslint-config.js')
    JSHINT = require('../packages/jshint/jshint.js').JSHINT,
    CSSLint = require('../packages/csslint/csslint.js').CSSLint;

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

var file = process.argv[2],
	match = file.match(/\.(js|css)$/i),
	filetype = match && match[1].toLowerCase();

if(filetype !== null){

	try {
		buffer = fs.readFileSync(file, 'utf-8');
	} catch (e) {
		console.log("Error: Cant open: " + file);
		console.log(e);
		process.exit(-1);
	}

	// Remove potential Unicode Byte Order Mark.
	buffer = buffer.replace(/^\uFEFF/, '');

	var hintResults = [];

	process.stdout.write( "HINT : " + file + "\n----------------------------------------\n" );

	switch(filetype){
		case 'js':
			var status = JSHINT(buffer, jshintConfig);
			if(status === false){
				JSHINT.errors.forEach(function (error) {
					if (error) {
						hintResults.push( '[ ' + error.line + ' | ' + error.character + ' ] - ' + error.reason );
					}
				});
			}
			break;
		case 'css':
			var messages = CSSLint(buffer, csslintConfig);
			messages.forEach(function(error){
				hintResults.push( '[ ' + error.line + ' | ' + error.col + ' ] - ' + error.message );
			});
			break;
	}

	if(hintResults.length > 0){
		console.log( "[ line | col ] - error reason\n----------------------------------------" );
		console.log(hintResults.join("\n") + "\n" + "----------------------------------------\n" + hintResults.length + ' error(s)' + "\n----------------------------------------");
	}
	else{
		console.log('Congratulations!! Zero Error.');
	}

}
else{
	console.log('Supported file type: js, css');
}