const path = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const appDir = path.resolve(__dirname, 'assets')
const buildDir = path.resolve(__dirname, 'public')
const nextcssToCss = new ExtractTextPlugin({ filename: './css/[name].css' })

module.exports = {
  entry: `${appDir}/app.js`,
  output: {
    path: buildDir,
    filename: '[name].js'
  },
  watch: true,
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: nextcssToCss.extract({
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            { loader: 'postcss-loader' }
          ]
        })
      }
    ]
  },
  plugins: [
    nextcssToCss
  ]
}
