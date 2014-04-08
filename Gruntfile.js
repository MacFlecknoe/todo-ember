'use strict';

module.exports = function (grunt) {

	// show elapsed time at the end
	require('time-grunt')(grunt);
	
	// Load grunt tasks automatically
    	require('load-grunt-tasks')(grunt);

	// configuration variables used within task definitions
	var options = {
		config : {
			// location of task configuration files
			src: 'tasks/options/*.js'
		},
		paths: {
			// Configurable paths
			app: 'app',
			dist: 'dist'
		},
		ports : {
			app : '9000',
			test : '9001',
			livereload : '35729'
		},
		hostname : 'localhost' // change this to '0.0.0.0' to access the server from outside
	};

	// load task configs from files stored in seperate directory and initialize grunt
	var configs = require('load-grunt-configs')(grunt, options);

	grunt.initConfig(configs);

	// Parallelize most of the build process
	grunt.util._.merge(configs, {
		concurrent: {
			'server': [
				'emberTemplates',
				'compass:server'
			],
			'test': [
				'emberTemplates',
				'compass'
			],
			'dist': [
				'emberTemplates',
				'compass:dist',
				'imagemin',
				'svgmin',
				'htmlmin'
			]
		}
	});
    
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
