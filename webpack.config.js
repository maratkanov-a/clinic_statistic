'use strict';

module.exports = {
    entry: './js/index',

    output: {
        filename: "./build.js",
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
                loader: 'babel'
            }
        ]
    }

};