module.exports = {
  "dist": {
    "files": {
      "src": [
        "<%= paths.dist %>/scripts/{,*/}*.js",
        "<%= paths.dist %>/styles/{,*/}*.css",
        "<%= paths.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}",
        "<%= paths.dist %>/styles/fonts/*"
      ]
    }
  }
}
