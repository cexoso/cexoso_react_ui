var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    /* 输入文件 */
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$|\.tsx$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin()]
}