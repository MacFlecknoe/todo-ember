'use strict';

module.exports = function (grunt) {

	// show elapsed time at the end
	require('time-grunt')(grunt);
	
	// Load grunt tasks automatically
    	require('load-grunt-tasks')(grunt);

	// read the package file to retrieve our build configuration variables
	var properties = grunt.file.readJSON('package.json').properties;

	// inject load-grunt-configs configuation into properties object. 
	properties.config = {
		'src' : 'tasks/options/*.js' // defines task configuration directory
	};

	// load task configs from files stored in seperate directory and initialize grunt. allow devs to override settings in properties via environmental variables
	var configs = require('load-grunt-configs')(grunt, grunt.util._.extend({}, properties, process.env));

	grunt.initConfig(configs);
    
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
};
