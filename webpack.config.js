/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "build"),
        },
        port: 3000,
    },
    module: {
        // exclude node_modules
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
        ],
    },
    // pass all js files through Babel
    resolve: {
        extensions: ["*", ".js", ".jsx", "", ".tsx", ".ts"],
    },
    stats: {
        children: true
    },
};