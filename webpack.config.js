var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/main.tsx',
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
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },    
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.LoaderOptionsPlugin({debug: true})
    ]
}