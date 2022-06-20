const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: "9500",

    static: ["./public"],

    historyApiFallback: true,

    open: true,

    hot: true,

    liveReload: true,
  },
});
