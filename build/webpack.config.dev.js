const webpack = require('webpack')
const baseConfig = require('./webpack.config.base.js')
const merge = require('webpack-merge')

const config = merge(baseConfig, {
  mode: process.env.NOOD_ENV || 'production',
  module: {
    rules: [
      {
        test: /\.styl/,
        use: [
          'style-loader',
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
  devServer: {
    port: 8888,
    host: '0.0.0.0',
    overlay: {
      errors: true
    },
    open: false,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})

module.exports = config