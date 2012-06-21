var fs = require('fs'),
		path = require('path'),
		config = require('./jshint-config.js'),
    jshint = require('../packages/jshint/jshint.js');

function _lint(file, results, config, data) {
    var buffer,
        hintdata;

    try {
        buffer = fs.readFileSync(file, 'utf-8');
    } catch (e) {
        process.stderr.write("Error: Cant open: " + file);
        process.stderr.write(e + '\n');
    }

    // Remove potential Unicode Byte Order Mark.
    buffer = buffer.replace(/^\uFEFF/, '');

    if (!jshint.JSHINT(buffer, config)) {
        jshint.JSHINT.errors.forEach(function (error) {
            if (error) {
                results.push({file: file, error: error});
            }
        });
    }
		
    hintdata = jshint.JSHINT.data();

    if (hintdata) {
        hintdata.file = file;
        data.push(hintdata);
    }
}


module.exports = {
    hint: function ( targets, customConfig ) {
        var files = [],
            results = [],
            data = [];

				if(customConfig){
					config = customConfig;
				}
				
        targets.forEach(function (file) {
        	_lint(file, results, config, data);
        });

        return results;
    }
};
