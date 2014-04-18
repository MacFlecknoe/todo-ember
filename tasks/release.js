//
// creates a release distribution. this is equivelent to a maven release and should be deployed via release or main
// branches
//
module.exports = function(grunt) {

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
};
