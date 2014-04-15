//
// Minify images using OptiPNG, pngquant, jpegtran and gifsicle. Performs progressive 
// and interlaced compression by default.
//
// https://github.com/gruntjs/grunt-contrib-imagemin
//
module.exports = {
	"release": {
		// dynamically map files
		"files": [{
				// enable dynamic expansion
				"expand": true,
				// src matches are relative to this path
				"cwd": "app/images",
				// actual patterns to match
				"src": "{,*/}*.{png,jpg,jpeg}",
				// destination path prefix
				"dest": ".tmp/images"
		}]
	}
}
