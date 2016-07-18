var webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|.js)$/,
        loader: 'react-hot-loader!babel',
        exclude: /node_modules/
      }
    ]
  }
};
