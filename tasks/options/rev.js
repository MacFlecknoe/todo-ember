module.exports = {
  "dist": {
    "files": {
      "src": [
        "<%= pkg.properties.paths.dist %>/scripts/{,*/}*.js",
        "<%= pkg.properties.paths.dist %>/styles/{,*/}*.css",
        "<%= pkg.properties.paths.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}",
        "<%= pkg.properties.paths.dist %>/styles/fonts/*"
      ]
    }
  }
}
