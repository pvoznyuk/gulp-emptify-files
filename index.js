'use strict';
var gutil = require('gulp-util');
var through = require('through2');

module.exports = function (opts) {
	opts = opts || {};

	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-emptify-files', 'Streaming not supported'));
			return;
		}

		try {
			file.contents = new Buffer('', opts));
			this.push(file);
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-emptify-files', err));
		}

		cb();
	});
};
