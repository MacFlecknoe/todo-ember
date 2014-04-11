//
// Install artifacts locally or deploy and release articats to maven repository
//
// https://github.com/smh/grunt-maven-tasks
//
module.exports = {
	options: { 
		groupId: 'com.jnj.wp'
	},
	debug: {
		options: {
			goal: 'deploy',
			repositoryId: '<%= pkg.properties.repositories.snapshot.id %>',
			url: '<%= pkg.properties.repositories.snapshot.url %>'
		},
		src: [ '<%= pkg.properties.paths.dist %>/**' ]
	},
	release: {
		options: {
			goal: 'release',
			repositoryId: '<%= pkg.properties.repositories.release.id %>',
			url: '<%= pkg.properties.repositories.release.url %>'
		},
		src: [ '<%= pkg.properties.paths.dist %>/**' ]
	}
}
