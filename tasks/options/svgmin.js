//
// Minify SVG using SVGO
//
// https://github.com/sindresorhus/grunt-svgmin
//
module.exports = {
	"release": {
		"files": [{
			"expand": true,
			"cwd": "app/images",
			"src": "{,*/}*.svg",
			"dest": ".tmp/images"
		}]
	}
}
