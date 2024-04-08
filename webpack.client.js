const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require("./webpack.base.js");
const config = {

    // Tell webpack the rootfile of server application
    entry : "./src/client/client.js",

    // tell webpack where to put the outpul file that is generated
    output: {
       filename: "bundle.js",
       path: path.resolve(__dirname, "public")
    },


    // tell webpack to run babel in order to convert all JSX to ES5 code
    module: {

        rules: [
            {
                test: /\.js?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: [

                    'react',
                    'stage-0',
                    ['env', {target: { browsers: ['last two versions']}}]
                    ]
                }

            }

        ]
    }

}

module.exports = merge(baseConfig, config)