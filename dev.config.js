const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const path = require('path');


module.exports = merge(baseConfig, {
  devtool: 'eval-source-map',
  mode:"production",
  performance: { hints: false },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  }

});