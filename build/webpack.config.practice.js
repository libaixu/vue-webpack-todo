const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const htmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')


const config = {
  target: 'web',
  mode: 'development',
  entry: path.join(__dirname, '../practice/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[hash:8].js'
  },
  resolve: {
    alias: {
      'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
    }
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
  devServer: {
    port: 9999,
    host: '0.0.0.0',
    overlay: {
      errors: true
    },
    open: false,
    hot: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NOOD_ENV': '"development"'
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new htmlPlugin({
      inject: true,
      template: path.join(__dirname, 'template.html'),
      // filename: path.join(__dirname, 'template.html')
    })
  ]
}

module.exports = config
