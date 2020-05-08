const path = require('path')
const nodeExternals = require('webpack-node-externals')

const entry = path.resolve(__dirname, '../src/index.js')
const dist = path.resolve(__dirname, '../dist')

const server = {
  entry,
  target: 'node',
  node: {
    __filename: true,
    __dirname: true
  },
  externals: [nodeExternals()],
  output: {
    path: dist,
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'src/client')
        ],
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}

module.exports = server
