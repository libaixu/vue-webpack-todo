const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('./webpack.config.base.js')
const merge = require('webpack-merge')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const config = merge(baseConfig, {
  mode: process.env.NOOD_ENV || 'production',
  entry: {
    app: resolve('src/index.js')
  },
  output: {
    filename: '[name].[chunkhash].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: true
  },
  module: {
    rules: [
      {
        test: /\.styl/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    })
  ]
})

module.exports = config