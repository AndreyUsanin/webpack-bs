const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  
  mode: 'development',

  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },

  module: {
    rules: [{
    test: /\.(scss)$/,
    use: [{
      loader: 'style-loader', // inject CSS to page
    }, {
      loader: 'css-loader', // translates CSS into CommonJS modules
    }, {
      loader: 'postcss-loader', // Run post css actions
      options: {
        plugins: function () { // post css plugins, can be exported to postcss.config.js
          return [
            require('precss'),
            require('autoprefixer')
          ];
        }
      }
    }, {
      loader: 'sass-loader' // compiles Sass to CSS
    }]
  }]
},

  plugins: [
    // new ExtractTextPlugin('css/styles.css')
    new HtmlWebpackPlugin({
      title: "Output managment",
      filename: "index.html",
      template: "./src/index.html"
    }),
  ]
};