'use strict'

const merge = require('deep-assign');
const webpack = require('webpack');

const options = require('./options');
const baseConfig = require('./webpack.base.js');

const config = merge(baseConfig, {
  watch: true,
  devtool: '#eval-source-map',
  entry: options.paths.resolve('docs-src/index.js'),
  output: {
    filename: 'docs.js',
    path: options.paths.output.docs
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(options.version)
    })
  ],
  devServer: {
    contentBase: options.paths.output.docs,
    host: 'localhost',
    historyApiFallback: true,
    noInfo: true
  }
});

module.exports = config;
