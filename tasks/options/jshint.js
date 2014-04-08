module.exports = {
    options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
    },
    all: [
        'Gruntfile.js',
        '<%= paths.app %>/scripts/{,*/}*.js',
        '!<%= paths.app %>/scripts/vendor/*',
        'test/spec/{,*/}*.js'
    ]
};
