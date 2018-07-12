const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = (file) => path.resolve(__dirname, file)

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: resolve('src/index.js'),
  output: {
    path: resolve('build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: resolve('src'),
        use: 'svelte-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'jtormey/svelte-repo',
      template: resolve('src/index.html')
    })
  ]
}
