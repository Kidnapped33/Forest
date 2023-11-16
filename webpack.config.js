const path = require('path');

module.exports = {
  mode: "production",
  entry: {
    index: "./lib/index.tsx",
  },
  output: {
    filename:"dist",
    path: path.resolve(__dirname + "dist/lib"),
    library: "aui",
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
