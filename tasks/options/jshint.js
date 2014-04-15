//
// Validate files with JSHint.
//
// https://github.com/gruntjs/grunt-contrib-jshint
//
module.exports = {
		options: {
				jshintrc: '.jshintrc',
				// use an external reporter
				reporter: require('jshint-stylish')
		},
		all: [
				'Gruntfile.js',
				'app/tasks/{,*/}*.js',
				'app/scripts/{,*/}*.js',
				'!app/vendor/*',
				'test/spec/{,*/}*.js'
		]
};
