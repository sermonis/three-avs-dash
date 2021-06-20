const path = require('path');
const webpack = require('webpack');
const WrapperPlugin = require('wrapper-webpack-plugin');

module.exports = {
  entry: {
    PathPlannerWorker: './workers/PathPlannerWorker.js',
    Dash: './js/Dash.js'
  },
  devtool: 'eval-source-map',
  plugins: [
    new WrapperPlugin({
      test: /PathPlannerWorker.js/,
      header: 'function dash_initPathPlannerWorker() {',
      footer: '} if (typeof(window) === undefined) dash_initPathPlannerWorker();'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // contentBase: path.resolve(__dirname),
	watchContentBase: true,
    compress: true,
    port: 9090	
  },
};
