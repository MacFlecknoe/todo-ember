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
	
	grunt.registerTask('serve', function (target) {
		if (target === 'release') {
			return grunt.task.run(['release', 'open', 'connect:dist:keepalive']);
		}
		grunt.task.run(['debug', 'open', 'connect:livereload', 'watch']);
	});

	grunt.registerTask('test', [
		'clean:all', // clean out working directories
		'replace:dist', // replace variables in app/index.html... notably ember data and creates .tmp/index.html
		'concurrent:debug',
		'neuter:app',
		'copy:debug', // copy fonts from app and index.html from .tmp
		'connect:test',
		'mocha'
	]);

	grunt.registerTask('release', [
		'clean:all', // clean out working directories
		'replace:release', // replace variables in app/index.html... notably ember data and creates .tmp/index.html
		'useminPrepare', // configures concat cssmin and uglify based on meta data
		'concurrent:dist', // creates .tmp/scripts/compiled_templates.js & creates dist/images
		'neuter:app', // creates .tmp/scripts/combined_scripts.js
		'concat', // creates css and js files in .tmp
		'cssmin', // creates dist/styles/main.css, dist/styles/components.css
		'uglify', // creates dist/scripts/components.js, dist/scripts/templates.js, dist/scripts/main.js, dist/scripts/plugins.js
		'copy:dist', // copy fonts from app and index.html from .tmp
		'rev', // hash files in dist directory
		'usemin', // update dist/index.html		,
		'htmlmin'
	]);

	grunt.registerTask('debug', [
		'clean:all', // clean out working directories
		'replace:debug', // replace variables in app/index.html... notably ember data and creates .tmp/index.html
		'concurrent:debug', // creates .tmp/scripts/compiled_templates.js & creates dist/images
		'neuter:app', // creates .tmp/scripts/combined_scripts.js
		'copy:debug', // copy fonts from app and index.html from .tmp
	]);

	grunt.registerTask('default', [
		'jshint',
		'test',
		'build'
	]);

	grunt.initConfig(config);
};
