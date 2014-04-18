//
// default task to run if grunt is not supplied with any arguments
//
module.exports = function(grunt) {

	grunt.registerTask('default', [
		'serve:debug',
	]);
};
