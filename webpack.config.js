const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const srcPath = `${__dirname}/src/`;
const bldPath = `${__dirname}/build/`;

module.exports = {
  entry: path.resolve(srcPath, './vue-component-seed.vue'),
  output: {
    path: path.resolve(bldPath),
    filename: 'vue-component-seed.js',
    libraryTarget: 'umd',
    library: 'vue-component-seed',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: path.resolve(srcPath)
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
        include: path.resolve(srcPath)
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
        include: path.resolve(srcPath)
      },
      {
        test: /\.(svg|png|jpg|jpeg|ico)$/,
        include: path.resolve(srcPath),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
              publicPath: '~assets/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true,
      uglifyOptions: {
        compress: {
          warnings: false
        },
        mangle: true
      }
    })
  ]
};
