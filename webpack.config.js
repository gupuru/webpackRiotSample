var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/src',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ],
  module: {
    preLoaders: [
      { test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader', query: { type: 'none' } }
    ],
    loaders: [
      { test: /\.js$|\.tag$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  resolve: {
      extensions: ['', '.js', '.tag', '.html']
  },
  devServer: {
    cache: false,
    hot: true,
    colors: true,
    port: 8000
  }
};
