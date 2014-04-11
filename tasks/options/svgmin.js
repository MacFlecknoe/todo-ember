//
// Minify SVG using SVGO
//
// https://github.com/sindresorhus/grunt-svgmin
//
module.exports = {
	"release": {
		"files": [{
			"expand": true,
			"cwd": "<%= pkg.properties.paths.app %>/images",
			"src": "{,*/}*.svg",
			"dest": ".tmp/images"
		}]
	}
}
