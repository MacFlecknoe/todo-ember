module.exports = {
  "dist": {
    "files": [
      {
        "expand": true,
        "cwd": "<%= pkg.properties.paths.app %>/images",
        "src": "{,*/}*.svg",
        "dest": "<%= pkg.properties.paths.dist %>/images"
      }
    ]
  }
}
