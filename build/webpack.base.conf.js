var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')

var env = process.env.NODE_ENV

module.exports = {
  entry: {
    app: [
      './src/client.jsx'
    ]
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].[hash:7].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    // fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      '@src': path.resolve(__dirname, '../src'),
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@less': path.resolve(__dirname, '../src/less')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        loader: "eslint-loader",
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'stage-0', 'react']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(swf|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.css$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        },
        {
          loader: "css-loader", // translates CSS into CommonJS
          query: { 
            modules: true,
            localIdentName: '[name]___[hash:base64:7]'
          }
        },
        {
          loader: 'lmw-px2rem-loader',
          options: {
            remUnit:100
          }
        },
        {
          loader: 'postcss-loader'
        }]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        },
        {
          loader: "css-loader", // translates CSS into CommonJS
          query: { 
            modules: true,
            localIdentName: '[name]___[hash:base64:7]'
          }
        },
        {
          loader: 'lmw-px2rem-loader',
          options: {
            remUnit:100
          }
        },
        {
          loader: 'postcss-loader'
        },
        {
          loader: "less-loader" // compiles Less to CSS
        }]
      }
    ]
  }
}
