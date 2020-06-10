const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const public = path.resolve(__dirname, '../public')
const entry = path.resolve(__dirname, '../src/client/index.jsx')
const template = path.resolve(__dirname, '../src/client/index.html')

const analyze = process.env.ANALYZE === 'true'
const plugins = [new HtmlWebpackPlugin({ template })]
if (analyze) plugins.push(new BundleAnalyzerPlugin())

const client = {
  entry,
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.chunk.js',
    path: public,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src/client')
    }
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins
}

module.exports = client
