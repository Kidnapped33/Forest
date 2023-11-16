const path = require('path');
const HtmlWebpackPlugin = require('Html-webpack-plugin')

module.exports = {
  mode: "production",
  entry: {
    index: "./lib/index.tsx",   
  },
  output: {
    path: path.resolve(__dirname, "dist/lib"),
    library: "aui",
    libraryTarget: "umd",
  },
  plugins: [new HtmlWebpackPlugin({
    title:'forestUI',
    // template:'index.html'
  })],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
    ],
  },
};
