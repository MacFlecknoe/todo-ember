//
// creates a distribution and runs tests against it (grunt test:release || grunt test:debug)
//
module.exports = function(grunt) {

	
	grunt.registerTask('test', function (target) {
		if (target === 'release') {
			return grunt.task.run(['release', 'connect:test', 'mocha']);
		}
		return grunt.task.run(['debug', 'connect:test', 'mocha']);
	});
};
