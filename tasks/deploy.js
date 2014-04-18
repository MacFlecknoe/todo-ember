//
// creates a distribution and uploads it to artifact repository (grunt deploy:release || grunt deploy:debug)
//
module.exports = function(grunt) {

	grunt.registerTask('deploy', function (target) {
		if (target === 'release') {
			return grunt.task.run(['test:release', 'maven:release']);
		}
		return grunt.task.run(['test:debug', 'maven:debug']);
	});
};
