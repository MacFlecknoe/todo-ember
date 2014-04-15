//
// Run predefined tasks whenever watched file patterns are added, changed or deleted.
// https://github.com/gruntjs/grunt-contrib-watch
//
module.exports = {
	"emberTemplates": {
		// this defines what file patterns this task will watch.
		"files": "<%= pkg.properties.paths.app %>/templates/**/*.hbs",
		"tasks": [
			"emberTemplates",
			"copy:dist"
		]
	},
	"compass": {
		"files": [
			"<%= pkg.properties.paths.app %>/styles/{,*/}*.{scss,sass}"
		],
		"tasks": [
			"compass:server",
			"copy:dist"
		]
	},
	"neuter": {
		"files": [
			"<%= pkg.properties.paths.app %>/scripts/{,*/}*.js"
		],
		"tasks": [
			"jshint",
			"neuter",
			"copy:dist"
		]
	},
	"livereload": {
		"options": {
			"livereload": '<%= pkg.properties.servers.livereload.port %>'
		},
		"files": [
			"<%= pkg.properties.paths.dist %>/scripts/*.js",
			"<%= pkg.properties.paths.dist %>/*.html",
			"<%= pkg.properties.paths.dist %>/styles/{,*/}*.css",
			"<%= pkg.properties.paths.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}"
		]
	}
}
