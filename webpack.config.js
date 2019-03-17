let webpack = require("webpack");

module.exports = {
    mode: "production",
    entry: "./DonationPopup.js",
    devtool: "source-map",
    output: {
        path: __dirname,
        filename: "DonationPopup.min.js"
    },
    optimization: {
        minimize: true
    }
};