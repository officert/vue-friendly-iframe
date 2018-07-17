'use strict'

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const merge = require('deep-assign');
const webpack = require('webpack');

const options = require('./options');
const baseConfig = require('./webpack.base.js');

const config = merge(baseConfig, {
  // without this, webpack throws in a polyfill for node.js's Buffer class
  node: {
    Buffer: false,
    process: false
  },
  entry: options.paths.resolve('src/index.js'),
  output: {
    filename: options.isProduction ? 'vue-friendly-iframe.min.js' : 'vue-friendly-iframe.js',
    path: options.paths.output.main,
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: options.banner,
      raw: true,
      entryOnly: true
    }),

    new ExtractTextPlugin({
      filename: options.isProduction ? 'vue-friendly-iframe.min.css' : 'vue-friendly-iframe.css'
    })
  ]
});

// debug and production
config.plugins = config.plugins.concat([
  new webpack.LoaderOptionsPlugin({
    minimize: true
  }),
  new webpack.DefinePlugin({
    VERSION: JSON.stringify(options.version)
  })
])

if (options.isProduction) {
  config.plugins = config.plugins.concat([
    // Set the production environment
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    // Minify with dead-code elimination
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]);
}

module.exports = config;
