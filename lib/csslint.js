var fs = require('fs'),
	path = require('path'),
    csslintConfig = require('./csslint-config.js')
    CSSLint = require('../packages/csslint/csslint.js').CSSLint;

function _lint(file, results, config) {
    var buffer;

    try {
        buffer = fs.readFileSync(file, 'utf-8');
    } catch (e) {
        process.stderr.write("Error: Cant open: " + file);
        process.stderr.write(e + '\n');
    }

    // Remove potential Unicode Byte Order Mark.
    buffer = buffer.replace(/^\uFEFF/, '');

    var messages = CSSLint(buffer, config);

    messages.forEach(function (error) {
        if (error) {
            results.push({file: file, error: error});
        }
    });
}


module.exports = {
    lint: function ( targets, customConfig ) {
        var files = [],
            results = [];
				
        targets.forEach(function (file) {
        	_lint(file, results, customConfig?customConfig:csslintConfig);
        });

        return results;
    }
};
