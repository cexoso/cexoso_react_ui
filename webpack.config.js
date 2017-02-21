var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var program = require('commander');
program
  .version('0.0.1')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .parse(process.argv);

console.log('you ordered a pizza with:');
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbqSauce) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);
module.exports = {
    entry: {
        index: './example/main.tsx',
        vendor: ['react', 'react-dom',"lodash"]
    },
    output: {
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
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({template: "./index.html"}),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor','manifest']
        }),
    ]
}