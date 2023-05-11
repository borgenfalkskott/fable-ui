let mix = require("laravel-mix");

mix
  .sourceMaps()
  .js("src/js/fable-ui.js", "js/fable-ui.js")
  .sass("src/sass/fable-ui.scss", "css/fable-ui.css")
  .options({
    manifest: false,
    processCssUrls: false,
  })
  .setPublicPath("dist");
