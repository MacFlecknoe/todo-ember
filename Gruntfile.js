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
		if (target === 'dist') {
			return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
		}
		grunt.task.run([
			'jshint',
			'clean:server',
			'replace:app',
			'concurrent:server',
			'neuter:app',
			'copy:fonts',
			'connect:livereload',
			'open',
			'watch'
		]);
	});

	grunt.registerTask('test', [
		'clean:server',
		'replace:app',
		'concurrent:test',
		'connect:test',
		'neuter:app',
		'mocha'
	]);

	grunt.registerTask('build', [
		'clean:dist',
		'replace:dist',
		'useminPrepare',
		'concurrent:dist',
		'neuter:app',
		'concat',
		'cssmin',
		'uglify',
		'copy',
		'rev',
		'usemin'
	]);

	grunt.registerTask('buildwidget', [
		'clean:dist',
		'replace:dist',
		'useminPrepare',
		'concurrent:dist',
		'neuter:app',
		'concat',
		'cssmin',
		'uglify',
		'copy',
		'usemin'
	]);

	grunt.registerTask('default', [
		'jshint',
		'test',
		'build'
	]);

	grunt.initConfig(config);
};
