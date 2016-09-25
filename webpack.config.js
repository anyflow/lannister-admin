var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

var port = 8080;

var plugins = [
  new webpack.HotModuleReplacementPlugin()
];

if (process.env.WEBPACK_ENV === 'dist') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
  plugins.push(new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }));
}

module.exports = {
  port: port,
  entry: [
    'webpack-dev-server/client?http://localhost:' + port, //FOR HotModuleReplacement
    'webpack/hot/only-dev-server',                     //FOR HotModuleReplacement
    './src/index'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/admin/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']                    //FOR omiting extension in import statement.
  },
  module: {
    loaders: [
      { test: /(\.jsx|.js)$/, loader: 'react-hot!babel', exclude: /node_modules/ },
      { test: /(\.jsx|.js)$/, loader: 'eslint', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style!css!postcss' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff2" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  },
  postcss: function () {
    return [precss, autoprefixer];
  },
  devServer: {
    contentBase: './dist',                             //SET content base of webpack-dev-server 
    hot: true,                                         //FOR react-hot-loader
    historyApiFallback: true
  },
  plugins: plugins
};