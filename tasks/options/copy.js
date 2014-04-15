//
// Copy files and folders.
//
// https://github.com/gruntjs/grunt-contrib-copy
//
module.exports = {
	"all": {
		"files": [{
				"expand": true,
				"flatten": true,
				"filter": "isFile",
				"cwd": "app/vendor/",
				"dest": ".tmp/styles/fonts/",
				"src": [
					"bootstrap-sass/dist/fonts/**",
					"font-awesome/fonts/**"
				]
			}, {
				"expand": true,
				"dot": true,
				"cwd": ".tmp",
				"dest": "dist",
				"src": [
					"scripts/**/*",
					"styles/**/*",
					"images/**/*",
					"**/*html"
				]
		}]
	},
	"debug": {
		"files": [{
				"expand": true,
				"dot": true,
				"cwd": "app",
				"dest": "dist",
				"src": [
					"vendor/**/*",
					"images/**/*",
				]
		}]
	}
}
