module.exports = {
  "fonts": {
    "files": [
      {
        "expand": true,
        "flatten": true,
        "filter": "isFile",
        "cwd": "<%= paths.app %>/vendor/",
        "dest": "<%= paths.app %>/styles/fonts/",
        "src": [
          "bootstrap-sass/dist/fonts/**",
          "font-awesome/fonts/**"
        ]
      }
    ]
  },
  "dist": {
    "files": [
      {
        "expand": true,
        "dot": true,
        "cwd": "<%= paths.app %>",
        "dest": "<%= paths.dist %>",
        "src": [
          "*.{ico,txt}",
          ".htaccess",
          "images/{,*/}*.{webp,gif}",
          "styles/fonts/*"
        ]
      }
    ]
  }
}
