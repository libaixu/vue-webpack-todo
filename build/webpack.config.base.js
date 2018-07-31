const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const htmlPlugin = require('html-webpack-plugin')
const vueLoaderOptions = require('./vue-loader.config')

const isDev = process.env.NOOD_ENV === 'development'

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const config = {
  target: 'web',
  entry: resolve('src/index.js'),
  output: {
    path: resolve('dist'),
    filename: 'bundle.[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderOptions(isDev)
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|gif|png|svg|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: 'resources/[path][name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new htmlPlugin()
  ]
}

module.exports = config