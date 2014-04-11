//
// Run grunt tasks concurrently
//
// https://github.com/sindresorhus/grunt-concurrent
//
module.exports = {
	// confignured in Grunt file
	'release': [
		'emberTemplates:all',
		'compass:release',
		'imagemin',
		'svgmin'
	],
	'debug': [
		'emberTemplates:all',
		'compass:debug',
	]
}
