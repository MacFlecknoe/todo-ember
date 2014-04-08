module.exports = {
    options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
    },
    all: [
        'Gruntfile.js',
        '<%= pkg.properties.paths.app %>/scripts/{,*/}*.js',
        '!<%= pkg.properties.paths.app %>/scripts/vendor/*',
        'test/spec/{,*/}*.js'
    ]
};
