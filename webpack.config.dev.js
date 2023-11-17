const base = require("./webpack.config");
const HtmlWebpackPlugin = require("Html-webpack-plugin");

module.exports = Object.assign({}, base, {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
});
