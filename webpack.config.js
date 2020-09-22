const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './src'),
  devtool: 'source-map',
  mode: 'production',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'umd',
    library: 'Codv',
    sourceMapFilename: 'bundle.map'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  node: {
    process: false
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
}