const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require("./webpack.base.js")
const webpackNodeExternals = require("webpack-node-externals");



const config = {

    // Inform webpack that we are building a bundle for node js, rather than for the browser

    target: "node",

    // Tell webpack the rootfile of server application
    entry : "./src/index.js",

    // tell webpack where to put the outpul file that is generated
    output: {
       filename: "bundle.js",
       path: path.resolve(__dirname, "build")
    },

    externals: [webpackNodeExternals()]

}

module.exports = merge(baseConfig, config);