'use strict';

const webpack = require('webpack'); //to access webpack runtime
const configuration = require('./webpack.config.js');

let compiler = webpack(configuration);
compiler.apply(new webpack.ProgressPlugin());

compiler.run((err, stats) => {
  if (err || stats.hasErrors()) {
    // Handle errors here
    console.log('err', err)
 }
 console.log(stats.toString({
   chunks: false,  // Makes the build much quieter
   colors: true    // Shows colors in the console
 }));
});
