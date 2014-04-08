module.exports = {
  "dist": {
    "files": [
      {
        "expand": true,
        "cwd": "<%= pkg.properties.paths.app %>/images",
        "src": "{,*/}*.{png,jpg,jpeg}",
        "dest": "<%= pkg.properties.paths.dist %>/images"
      }
    ]
  }
}
