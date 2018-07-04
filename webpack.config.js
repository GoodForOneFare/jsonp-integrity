// For details of script/link element creation/insertion, see https://github.com/webpack/webpack/blob/master/lib/web/JsonpMainTemplatePlugin.js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  devtool: 'hidden-source-map',
  entry: {
    app1: './app',
  },
  output: {
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[name]-[chunkhash].js'
  },
  resolve: {
    mainFields: ['browser', 'jsnext:main', 'module', 'main'],
  },
  optimization: {
    concatenateModules: false,
    minimize: false,
    minimizer: [],
    runtimeChunk: 'single',
    splitChunks: {
      minSize: 1,
      chunks: 'all',
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name]-[sha256:contenthash:hex:64].css",
      chunkFilename: "[name]-[contenthash].css"
    }),
    new class X {
      apply(compiler) {
        compiler.hooks.thisCompilation.tap("arbuckle", compilation => {
          compilation.mainTemplate.plugin('require-ensure', function(source, chunk, hash) {
            // Whatever you return here will be the body of the `requireEnsure` function
            return 'console.log("yoyo");';
          });

          // compilation.mainTemplate.hooks.requireExtensions.tap("JsonpMainTemplatePlugin",
          // (_, chunk, hash) => {
          //   console.log("@@yoyo requireExtensions", _, hash);
          // });

          // compilation.mainTemplate.hooks.jsonpScript.tap("JsonpMainTemplatePlugin",
          // (_, chunk, hash) => {
          //   console.log("@@yoyo jsonpScript", _, hash);
          //   return 'console.log("lol");';
          // });

          // compilation.mainTemplate.hooks.linkPreload.tap("JsonpMainTemplatePlugin",
          // (_, chunk, hash) => {
          //   console.log("@@yoyo linkPreload", _, hash);
          // });
          // compilation.mainTemplate.hooks.linkPrefetch.tap("JsonpMainTemplatePlugin",
          // (_, chunk, hash) => {
          //   console.log("@@yoyo linkPrefetch", _, hash);
          // });

          // compilation.mainTemplate.hooks.renderManifest.tap("JsonpMainTemplatePlugin",
          // (_, chunk, hash) => {
          //   console.log("@@yoyo renderManifest", _, hash);
          // });

          // compilation.mainTemplate.hooks.assetPath.tap("JsonpMainTemplatePlugin",
          // (_, chunk, hash) => {
          //   console.log("@@yoyo assetPath", _, hash);
          // });

          // compilation.mainTemplate.hooks.beforeStartup.tap("JsonpMainTemplatePlugin",
          // (_, chunk, hash) => {
          //   console.log("@@yoyo beforeStartup", _, hash);
          // });

          // compilation.mainTemplate.hooks.globalHashPaths.tap("JsonpMainTemplatePlugin",
          // (_, chunk, hash) => {
          //   console.log("@@yoyo globalHashPaths", _, hash);
          // });

          // compilation.mainTemplate.hooks.hashForChunk.tap("JsonpMainTemplatePlugin",
          // (_, chunk, hash) => {
          //   console.log("@@yoyo hashForChunk", _, hash);
          //   return 'lolzors';
          // });

          // compilation.mainTemplate.hooks.localVars.tap("JsonpMainTemplatePlugin",
          // (_, chunk, hash) => {
          //   console.log("@@yoyo localVars", _, hash);
          // });

          // compilation.mainTemplate.hooks.moduleObj.tap("JsonpMainTemplatePlugin",
          // (_, chunk, hash) => {
          //   console.log("@@yoyo moduleObj", _, hash);
          // });

          // compilation.mainTemplate.hooks.modules.tap("JsonpMainTemplatePlugin",
          // (_, chunk, hash) => {
          //   console.log("@@yoyo modules", _, hash);
          // });

          // compilation.mainTemplate.hooks.render.tap("JsonpMainTemplatePlugin",
          // (_, chunk, hash) => {
          //   console.log("@@yoyo render", _, hash);
          // });

          // compilation.mainTemplate.hooks.bootstrap.tap("JsonpMainTemplatePlugin",
          // (_, chunk, hash) => {
          //   console.log("@@yoyo2 bootstrap", _, hash);
          // });

          // compilation.mainTemplate.hooks.hotBootstrap.tap("JsonpMainTemplatePlugin",
          // (_, chunk, hash) => {
          //   console.log("@@yoyo3", _, hash);
          // });

          // compilation.mainTemplate.hooks.currentHash.tap("JsonpMainTemplatePlugin",
          // (_, chunk, hash) => {
          //   debugger;
          //   console.log("@@yoyo4", 'currentHash', _, hash);
          //   return 'lolol';
          // });

          // compilation.mainTemplate.hooks.globalHash.tap("JsonpMainTemplatePlugin",
          // (_, chunk, hash) => {
          //   console.log("@@yoyo5 globalHash", _, hash);
          // });

          // compilation.mainTemplate.hooks.hash.tap("JsonpMainTemplatePlugin",
          // (_, chunk, hash) => {
          //   console.log("@@yoyo hash", _, hash);
          // });

          // compilation.mainTemplate.hooks.moduleRequire.tap("JsonpMainTemplatePlugin",
          // (_, chunk, hash) => {
          //   console.log("@@yoyo7 moduleRequire", _, hash);
          // });

          // compilation.mainTemplate.hooks.require.tap("JsonpMainTemplatePlugin",
          // (_, chunk, hash) => {
          //   console.log("@@yoyo8 require", _, hash);
          // });

          // compilation.mainTemplate.hooks.startup.tap("JsonpMainTemplatePlugin",
          // (_, chunk, hash) => {
          //   console.log("@@yoyo9 startup", _, hash);
          // });
        });
      }
    }
  ]
}

