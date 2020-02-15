const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: 'http://localhost:9000',
        chunkFilename: 'js/chunks/[id].[chunkhash].js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        open: true,
        port: 9000,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: [
                    '/node_modules/'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        outputPath: 'dist/assets'
                    }
                }
            }
        ]
    }, 
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Preprocessors',
            template: path.resolve(__dirname, 'public/index.html')
        })
    ],
}
