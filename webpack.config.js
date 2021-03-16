const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
  return {
    resolve: {
      symlinks: false,
      alias: {
        vue: path.resolve('./node_modules/vue')
      }
    },
    devtool: 'source-map', // reset it. For development use devtool: 'inline-source-map',
    mode: 'development', // use development, so we have source code as close to original as possible

    optimization: {
      minimizer: [
        new TerserPlugin({
          extractComments: false // disable create LICENCE files
        })
      ]
    },

    plugins: [
      new VueLoaderPlugin()
    ],

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          use: [{
            loader: 'vue-loader'
          }]
        },
        {
          // support SVG embed as HTML code, e.g. <svg>...
          test: /\.html$/,
          loader: 'svg-inline-loader'
        }
      ]
    }
  };
};
