const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3000,
    },
    devtool: "source-map",
    mode: "development",
};
// Webpack is the bundler for bundle our Javascript code in one file an then link with our Browser
