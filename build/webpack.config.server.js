const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueServerPlugin = require('vue-server-renderer/server-plugin')

const config = {
  target: 'node',
  entry: path.join(__dirname, '../src/server-entry.js'),
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '../server-build'),
    filename: 'server-entry.js'
  },
  externals: Object.keys(requier('../package.json').dependencies),
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
      filename: '[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      'process.env.NOOD_ENV': JSON.stringify(process.env.NOOD_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    }),
    new VueServerPlugin()
  ]
}

module.exports = config
