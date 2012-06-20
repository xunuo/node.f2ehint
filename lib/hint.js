var fs = require('fs'),
		path = require('path'),
		config = require('./config.js'),
    jshint = require('../packages/jshint/jshint.js');

function _lint(file, results, config, data) {
    var buffer,
        lintdata;

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
		
    lintdata = jshint.JSHINT.data();

    if (lintdata) {
        lintdata.file = file;
        data.push(lintdata);
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
