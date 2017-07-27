process.env.NODE_ENV = 'development'

const path = require('path')
const webpack = require('webpack')

module.exports = {
  resolve: {
    modules: [
      path.resolve('./app'),
      'node_modules'
    ]
  },
  entry: {
    app: [
      'babel-polyfill',

      `webpack-dev-server/client?http://localhost:8085`,
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint

      path.resolve(__dirname, 'app/index.jsx')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  plugins: [
  ],
  module: {
    rules: [
      { test: /\.(js|jsx?)$/, loader: 'babel-loader', include: path.join(__dirname, 'app') },
    ]
  },
  stats: { colors: true },
  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    stats: {
      chunkModules: false, // do not show the full list of files included in the module
      colors: true
    }
  }
}
