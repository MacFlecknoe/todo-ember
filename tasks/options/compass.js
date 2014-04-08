module.exports = {
  options: {
    sassDir: "<%= paths.app %>/styles",
    cssDir: ".tmp/styles",
    generatedImagesDir: ".tmp/images/generated",
    imagesDir: "<%= paths.app %>/images",
    javascriptsDir: "<%= paths.app %>/scripts",
    fontsDir: "<%= paths.app %>/styles/fonts",
    importPath: "<%= paths.app %>/vendor",
    httpImagesPath: "/images",
    httpGeneratedImagesPath: "/images/generated",
    httpFontsPath: "/styles/fonts",
    relativeAssets: false
  },
  dist: {},
  server: {
    options: {
      debugInfo: true
    }
  }
}
