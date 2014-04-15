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

	// creates a release distribution. this is equivelent to a maven release and should be deployed via release or main
	// branches
	grunt.registerTask('release', [
		'clean:all', // clean out working directories
		'jshint:all', // tests grunt files as well as app scripts
		'replace:release', // replace ember data references in app/index.html and creates .tmp/index.html
		'emberTemplates:all', // creates .tmp/scripts/compiled_templates.js
		'neuter:all', // includes files in require statments and creates .tmp/scripts/combined_scripts.js
		'imagemin:release', // creates dist/image
		'svgmin:release',
		'useminPrepare', // configures concat cssmin and uglify based on meta data in index.html file
		'concat', // creates combined css and js files in .tmp
		'cssmin', // creates css files in dist
		'uglify', // creates js files in dist
		'copy:all', // copy fonts from app to dist; copy index.html from .tmp to dist
		'rev', // hash files in dist directory
		'usemin', // update dist/index.html to use hashes
		'htmlmin:release' // minify dist/index.html
	]);

	// creates a debug distribution. this is equivelent to a maven snapshot and should be deployed via  
	// feature and development branches
	grunt.registerTask('debug', [
		'clean:all',
		'jshint:all',
		'replace:debug', // replace ember data references in app/index.html and creates .tmp/index.html
		'emberTemplates:all', 
		'neuter:all', 
		'copy:all', 
		'copy:debug', // copy vendor files and images from app to dist
	]);

	// creates a distribution and opens it up in a web browser (grunt serve:release || grunt serve:debug)
	grunt.registerTask('serve', function (target) {
		if (target === 'release') {
			return grunt.task.run(['release', 'open:all', 'connect:all:keepalive']);
		}
		return grunt.task.run(['debug', 'open:all', 'connect:all', 'watch']);
	});

	// creates a distribution and runs tests against it (grunt test:release || grunt test:debug)
	grunt.registerTask('test', function (target) {
		if (target === 'release') {
			return grunt.task.run(['release', 'connect:test', 'mocha']);
		}
		return grunt.task.run(['debug', 'connect:test', 'mocha']);
	});

	// creates a distribution and uploads it to artifact repository (grunt deploy:release || grunt deploy:debug)
	grunt.registerTask('deploy', function (target) {
		if (target === 'release') {
			return grunt.task.run(['release', 'maven:release']);
		}
		return grunt.task.run(['debug', 'maven:debug']);
	});

	grunt.registerTask('default', [
		'serve:debug',
	]);

	grunt.initConfig(config);
};
