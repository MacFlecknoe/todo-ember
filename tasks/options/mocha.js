//
// Automatically run client-side mocha specs via grunt/mocha/PhantomJS.
//
// https://github.com/kmiyashiro/grunt-mocha
//
module.exports = {
	"all": {
		"options": {
			"run": true,
			// instead of files, hit these URLs; used in conjunction with the connect task to spin up a server for testing.
			"urls": [
				"http://<%= pkg.properties.servers.app.hostname %>:<%= pkg.properties.servers.app.port %>/index.html" // TODO this isnt a test file!
			]
		}
	}
}
