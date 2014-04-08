module.exports = {
  "dist": {
    "files": [
      {
        "expand": true,
        "cwd": "<%= paths.app %>/images",
        "src": "{,*/}*.svg",
        "dest": "<%= paths.dist %>/images"
      }
    ]
  }
}
