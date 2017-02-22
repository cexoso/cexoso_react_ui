var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var program = require('commander');
program
  .version('0.0.1')
  .option('-m, --make')  
  .parse(process.argv);

const isMake = program.make;
module.exports = {
    entry: isMake ? {
        index: './example/main.tsx'        
    } : {
        index: './src/index.tx',
        vendor: ['react', 'react-dom',"lodash"]
    },
    output: isMake ? {
        path: path.resolve(__dirname, './dist'),
        filename:  "index.js",
    } : {
        path: path.resolve(__dirname, './dist'),
        filename:  "[name].[chunkHash:8].js",
        chunkFilename: "[name].[chunkHash:8].js",
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
    devtool: isMake ? 'source-map' : "",
    plugins: isMake ? [] : [
        new HtmlWebpackPlugin({template: "./index.html"}),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor','manifest']
        })
    ]
}