const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const htmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NOOD_ENV === 'development'

const config = {
  target: 'web',
  mode: process.env.NOOD_ENV || 'production',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.styl/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(jpg|gif|png|svg|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NOOD_ENV': isDev ? '"development"' : '"production"'
      }
    }),
    new VueLoaderPlugin(),
    new htmlPlugin()
  ]
}

if (isDev) {
  config.devServer = {
    port: 8888,
    host: '0.0.0.0',
    overlay: {
      errors: true
    },
    open: false,
    hot: true
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )
} else {
  config.entry = {
    app: path.join(__dirname, 'src/index.js')
  }
  config.output.filename = '[name].[chunkhash].js'
  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: 'styles.[hash].css'
    })
  )
}

module.exports = config