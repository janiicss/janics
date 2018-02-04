const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    vendor: './src/vendor.ts',    
    main: './src/main.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.css$/,
        exclude: path.resolve(__dirname, 'src/app'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src/app'),
        use: ['to-string-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|otf|eot|ico)$/,
        use: ['file-loader?name=assets/[name].[hash].[ext]']
      },
      {
        test: /\.scss$/,
        exclude: path.resolve(__dirname, 'src/app'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/app'),
        use: ['to-string-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['vendor', 'main'],
      chunksSortMode: 'manual',
      template: './src/index.html'
    }),
    new ExtractTextPlugin('[name].css')
  ]
};