'use strict'

const options = require('./options');
const autoprefixer = require('autoprefixer');

module.exports = {
  resolve: {
    modules: [
      options.paths.root,
      options.paths.resolve('node_modules')
    ],

    alias: {
      src: 'src',
      vue$: 'vue/dist/vue.common.js'
    },

    extensions: ['.js', '.json', '.vue', '.less']
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            less: 'vue-style-loader!css-loader!less-loader' // <style lang="less">
          },
          postcss: [
            autoprefixer({
              browsers: ['last 2 versions', 'ie > 9', 'Firefox ESR']
            })
          ]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
