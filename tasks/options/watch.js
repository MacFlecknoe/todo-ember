//
// Run predefined tasks whenever watched file patterns are added, changed or deleted.
// https://github.com/gruntjs/grunt-contrib-watch
//
module.exports = {
	"emberTemplates": {
		// this defines what file patterns this task will watch.
		"files": "app/templates/**/*.hbs",
		"tasks": [
			"emberTemplates",
			"copy:dist"
		]
	},
	"compass": {
		"files": [
			"app/styles/{,*/}*.{scss,sass}"
		],
		"tasks": [
			"compass:server",
			"copy:dist"
		]
	},
	"neuter": {
		"files": [
			"app/scripts/{,*/}*.js"
		],
		"tasks": [
			"jshint",
			"neuter",
			"copy:dist"
		]
	},
	"livereload": {
		"options": {
			"livereload": '<%= pkg.config.servers.livereload.port %>'
		},
		"files": [
			"dist/scripts/*.js",
			"dist/*.html",
			"dist/styles/{,*/}*.css",
			"dist/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}"
		]
	}
}
