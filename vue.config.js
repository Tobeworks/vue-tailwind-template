const { defineConfig } = require('@vue/cli-service')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    plugins: [
      new FaviconsWebpackPlugin(`./src/assets/logo.png`)
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          loader: "postcss-loader",
        },
      ],
    },
  }
})


