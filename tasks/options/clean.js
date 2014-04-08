module.exports = {
	dist: {
		files: [{
			dot: true,
			src: [
				'.tmp',
				'<%= pkg.properties.paths.dist %>/*',
				'!<%= pkg.properties.paths.dist %>/.git*'
			]
		}]
	},
	server: '.tmp'
};
