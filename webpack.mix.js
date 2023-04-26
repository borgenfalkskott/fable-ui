let mix = require("laravel-mix");

mix
  .sourceMaps()
  .js("src/js/app.js", "js/fable-ui.js")
  .sass("src/sass/style.scss", "css/fable-ui.css")
  .options({
    manifest: false,
    processCssUrls: false,
  })
  .setPublicPath("dist");
