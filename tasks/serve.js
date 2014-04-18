//
// creates a distribution and opens it up in a web browser (grunt serve:release || grunt serve:debug)
//
module.exports = function(grunt) {

	grunt.registerTask('serve', function (target) {
		if (target === 'release') {
			return grunt.task.run(['release', 'open:all', 'connect:all:keepalive']);
		}
		return grunt.task.run(['debug', 'open:all', 'connect:all', 'watch']);
	});
};
