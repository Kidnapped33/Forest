const path = require("path");

module.exports = {
  entry: {
    index: "./lib/index.tsx",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"], // 指定可以省略的文件扩展名
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
};
