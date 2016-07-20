var webpack = require('webpack');
var plugins = [
  new webpack.HotModuleReplacementPlugin()
];

if(process.env.WEBPACK_ENV === 'build') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
}

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080', //FOR HotModuleReplacement
    'webpack/hot/only-dev-server',                     //FOR HotModuleReplacement
    './src/index.jsx'
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
      }
    ]
  },
  devServer: {
    contentBase: './dist',                             //SET content base of webpack-dev-server 
    hot: true                                          //FOR react-hot-loader
  },
  plugins: plugins
};