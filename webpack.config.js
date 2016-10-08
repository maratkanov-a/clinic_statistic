'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './static/js/index',

    output: {
        filename: "./build/js/build.js",
        library: "home"
    },

    watch: "development",

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: "cheap-source-map",

    module: {
        loaders: [
            {
                test: "/\.js$",
                loader: "babel"
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./build/css/bundle.css')
    ]


};