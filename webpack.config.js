const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./index.tsx",
  resolve: {
    extensions: [".js", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true
          }
        }
      }
    ]
  },
  optimization: {
    minimizer: [new UglifyJSPlugin()]
  }
};
