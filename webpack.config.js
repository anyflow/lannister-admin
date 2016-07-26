var webpack = require('webpack');
var precss       = require('precss');
var autoprefixer = require('autoprefixer');

var plugins = [
  new webpack.HotModuleReplacementPlugin()
];

if(process.env.WEBPACK_ENV === 'dist') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
  plugins.push(new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }));
}

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080', //FOR HotModuleReplacement
    'webpack/hot/only-dev-server',                     //FOR HotModuleReplacement
    './src/index'
  ], 
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']                    //FOR omiting extension in import statement.
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|.js)$/,
        loader: 'react-hot!babel',                     //FOR ES6(babel) and react(react-hot) reloading
        exclude: /node_modules/
      },
      { 
        test: /(\.jsx|.js)$/,
        loader: 'eslint',
        exclude: /node_modules/ 
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      }
    ]
  },
  postcss: function () {
        return [precss, autoprefixer];
  },
  devServer: {
    contentBase: './dist',                             //SET content base of webpack-dev-server 
    hot: true                                          //FOR react-hot-loader
  },
  plugins: plugins
};