
require('babel-register')

const path = require('path');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const data = require('./src/data')

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader' }
    ]
  },
  plugins: [
    new StaticSiteGeneratorPlugin('bundle.js', data.routes, data)
    // new BrowserSyncPlugin({
    //   host: 'localhost',
    //   port: 8080,
    //   server: { baseDir: ['dist'] }
    // })
  ],
  node: {
    fs: 'empty'
  }
  // target: 'node'
};

module.exports = config;
