const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './index.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude : /node_modules/,
            }
        ],
    },
    externals:{},
    plugins: [
        new CopyWebpackPlugin({
            patterns : [{
                from: path.resolve(__dirname, 'public'),
                to  : path.resolve(__dirname, 'dist')
            }],
            options : {}
        })
    ],
    // 出口
    output: {
        filename: 'com.diff.js',
        path: path.resolve(__dirname, 'dist'),
        library : 'diff',
        libraryTarget: "umd"
    },
};
