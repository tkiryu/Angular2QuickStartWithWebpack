var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: {
        // the standard polyfills we require to run Angular applications in most modern browsers
        'polyfills': './src/polyfills.ts',
        // the vendor files we need: Angular, lodash, bootstrap.css...
        'vendor': './src/vendor.ts',
        // our application code.
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['', '.ts', '.js']
    },

    module: {
        loaders: [
          {
              test: /\.ts$/,
              loaders: [
                  // a loader to transpile our Typescript code to ES5, guided by the tsconfig.json file
                  'awesome-typescript-loader',
                  // loads angular components' template and styles
                  'angular2-template-loader'
              ]
          },
          // 
          {
              test: /\.html$/,
              // for component templates
              loader: 'html'
          },
          {
              test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
              // Images and fonts are bundled as well.
              loader: 'file?name=assets/[name].[hash].[ext]'
          },
          {
              test: /\.css$/,
              exclude: helpers.root('src', 'app'),
              loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
          },
          {
              test: /\.css$/,
              include: helpers.root('src', 'app'),
              loader: 'raw'
          }
        ]
    },

    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
          name: ['app', 'vendor', 'polyfills']
      }),

      new HtmlWebpackPlugin({
          template: 'src/index.html'
      })
    ]
};
