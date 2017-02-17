var path = require('path');
var webpack = require('webpack');
module.exports = {
    /* 输入文件 */
    entry: './src/main.ts',
    output: {
        /* 输出目录，没有则新建 */
        path: path.resolve(__dirname, './dist'),
        /* 静态目录，可以直接从这里取文件 */
        publicPath: '/dist/',
        /* 文件名 */
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
    }
}