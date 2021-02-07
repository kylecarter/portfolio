const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  entry: {
    main: "./src/main.js",
  },
  output: {
    path: path.resolve(__dirname, "public/assets"),
    filename: "[name].bundle.js",
  },
  devtool: isDev ? "inline-source-map" : false,
  module: {
    rules: [
      {
        test: /\.vue$/i,
        exclude: /node_modules/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          isDev ? "vue-style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".vue", ".css"],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      linkType: "text/css",
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};
