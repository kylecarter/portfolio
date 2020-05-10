const path = require("path");

module.exports = {
  entry: {
    main: "./bin/client.js",
  },
  output: {
    path: path.resolve(__dirname, "public/static"),
    filename: "[name].scripts.js",
  },
  devtool:
    process.env.NODE_ENV === "development" ? "inline-source-map" : "none",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".css", ".es6"],
  },
};
