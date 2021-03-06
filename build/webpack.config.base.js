const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
// const vueLoaderOptions = require('./vue-loader.config')

// const isDev = process.env.NOOD_ENV === 'development'

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
        test: /\.(vue|js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
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
    new htmlWebpackPlugin({
      injuct: true,
      filename: 'index.html',
      template: 'index.html'
    })
  ]
}

module.exports = config