const path = require("path");
const HtmlWebpackPlugin = require("Html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./lib/index.tsx",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"], // 指定可以省略的文件扩展名
    // alias: {
    //   src: path.resolve(__dirname, 'src'), // 设置别名，方便引用 src 目录下的模块
    // },
  },
  output: {
    path: path.resolve(__dirname, "dist/lib"),
    library: "FUI",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // title: "forestUI",
      template: "index.html",
    }),
  ],
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
      root: "ReactDom",
    },
  },
};
