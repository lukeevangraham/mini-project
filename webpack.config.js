const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
var path = require("path");

module.exports = {
//   mode: "development",
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "miniProject.bundle.js",
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};
