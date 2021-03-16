const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
  resolve: {
    symlinks: false,
    alias: {
      vue: path.resolve('./node_modules/vue')
    }
  },
  devtool: 'source-map', // reset it. For development use devtool: 'inline-source-map',
  mode: 'development', // use development, so we have source code as close to original as possible

  plugins: [
    new VueLoaderPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader'
        }]
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
  }
};
