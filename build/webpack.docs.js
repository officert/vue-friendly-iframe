'use strict'

const merge = require('deep-assign');
const webpack = require('webpack');

const options = require('./options');
const baseConfig = require('./webpack.base.js');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = merge(baseConfig, {
  entry: options.paths.resolve('docs-src/index.js'),

  output: {
    filename: 'docs.js',
    path: options.paths.output.docs
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'docs.css'
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),

    // Set the production environment
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      VERSION: JSON.stringify(options.version)
    }),

    // Minify with dead-code elimination
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
});


// First item in module.rules array is Vue
config.module.rules[0].options.loaders = {
  less: 'vue-style-loader!css-loader!less-loader'
};

module.exports = config;
