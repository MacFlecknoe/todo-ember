module.exports = {
	"fonts": {
		"files": [
			{
				"expand": true,
				"flatten": true,
				"filter": "isFile",
				"cwd": "<%= pkg.properties.paths.app %>/vendor/",
				"dest": "<%= pkg.properties.paths.app %>/styles/fonts/",
				"src": [
					"bootstrap-sass/dist/fonts/**",
					"font-awesome/fonts/**"
				]
			}
		]
	},
	"dist": {
		"files": [
			{
				"expand": true,
				"dot": true,
				"cwd": "<%= pkg.properties.paths.app %>",
				"dest": "<%= pkg.properties.paths.dist %>",
				"src": [
					"*.{ico,txt}",
					".htaccess",
					"images/{,*/}*.{webp,gif}",
					"styles/fonts/*"
				]
			}
		]
	}
}
