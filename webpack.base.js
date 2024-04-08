module.exports={
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