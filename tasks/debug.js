//
// creates a debug distribution. this is equivelent to a maven snapshot and should be deployed via  
// feature and development branches
//
module.exports = function(grunt) {

	grunt.registerTask('debug', [
		'clean:all',
		'jshint:all',
		'replace:debug', // replace ember data references in app/index.html and creates .tmp/index.html
		'emberTemplates:all', 
		'neuter:all', 
		'copy:all', 
		'copy:debug' // copy vendor files and images from app to dist
	]);
};
