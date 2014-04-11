'use strict';

module.exports = function (grunt) {

	// show elapsed time at the end
	require('time-grunt')(grunt);

	var path = require('path');
	
	// read the package file to retrieve our build configuration variables
	var pkg = require('./package.json');

	// load the tasks from seperate files located in tasks/options and tasks/custom-options;
	// settings in tasks/custom-options override those in task/options 
	var config = grunt.util._.extend({},
		require('load-grunt-config')(grunt, {
			configPath: path.join(__dirname, 'tasks/options'),
			loadGruntTasks: false,
			init: false
		}),
		// custom options have precedence
		require('load-grunt-config')(grunt, { 
			configPath: path.join(__dirname, 'tasks/custom-options'),
			init: false
		})
	);
	// place package variables into grunt config so that they may be retrieved from tasks 
	// (e.g. <%= pkg.properties.hostname %>)
	config.pkg = pkg;

	// allow env variables to be retrievable
	config.env = process.env;

	// Loads tasks in `tasks/` folder
	grunt.loadTasks('tasks'); 

	grunt.registerTask('release', [
		'clean:all', // clean out working directories
		'replace:release', // replace variables in app/index.html... notably ember data and creates .tmp/index.html
		'useminPrepare', // configures concat cssmin and uglify based on meta data
		'concurrent:release', // creates .tmp/scripts/compiled_templates.js & creates dist/images
		'neuter:all', // creates .tmp/scripts/combined_scripts.js
		'concat', // creates css and js files in .tmp
		'cssmin', // creates dist/styles/main.css, dist/styles/components.css
		'uglify', // creates dist/scripts/components.js, dist/scripts/templates.js, dist/scripts/main.js, dist/scripts/plugins.js
		'copy:all', // copy fonts from app and index.html from .tmp to dist
		'rev', // hash files in dist directory
		'usemin', // update dist/index.html		,
		'htmlmin' // minify dist/index.html
	]);

	grunt.registerTask('debug', [
		'clean:all', // clean out working directories
		'replace:debug', // replace variables in app/index.html... notably ember data and creates .tmp/index.html
		'concurrent:debug', // creates .tmp/scripts/compiled_templates.js & creates dist/images
		'neuter:all', // creates .tmp/scripts/combined_scripts.js
		'copy:all', // copy fonts from app and index.html from .tmp to dist
		'copy:debug', // copy vendor files from app to dist
	]);

	// grunt serve:release || grunt serve
	grunt.registerTask('serve', function (target) {
		if (target === 'release') {
			return grunt.task.run(['release', 'open', 'connect:dist:keepalive']);
		}
		grunt.task.run(['debug', 'open', 'connect:livereload', 'watch']);
	});

	// grunt test:release || grunt test
	grunt.registerTask('test', function (target) {
		if (target === 'release') {
			grunt.task.run(['release', 'connect:test', 'mocha']);
		}
		grunt.task.run(['debug', 'connect:test', 'mocha']);
	});

	grunt.registerTask('default', [
		'serve',
	]);

	grunt.initConfig(config);
};
