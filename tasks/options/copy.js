module.exports = {
	"fonts": {
		"files": [
			{
				"expand": true,
				"flatten": true,
				"filter": "isFile",
				"cwd": "<%= pkg.properties.paths.app %>/vendor/",
				"dest": ".tmp/styles/fonts/",
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
				"cwd": ".tmp",
				"dest": "<%= pkg.properties.paths.dist %>",
				"src": [
					"scripts/**/*",
					"styles/**/*",
					"images/**/*",
					"**/*html"
				]
			}
		]
	},
	"debug": {
		"files": [
			{
				"expand": true,
				"dot": true,
				"cwd": ".tmp",
				"dest": "<%= pkg.properties.paths.dist %>",
				"src": [
					"scripts/**/*",
					"styles/**/*",
					"images/**/*",
					"**/*html"
				]
			},
			{
				"expand": true,
				"dot": true,
				"cwd": "<%= pkg.properties.paths.app %>",
				"dest": "<%= pkg.properties.paths.dist %>",
				"src": [
					"vendor/**/*"
				]
			}
		]
	}
}
