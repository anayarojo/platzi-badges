const path = require('path');
const TerserJsPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const Webpack = require('webpack');

module.exports = {
    entry: {
        modules: [
            'react',
            'react-dom',
            'react-router-dom'
        ]
    },
    optimization: {
        minimizer: [
            new TerserJsPlugin(),
            new OptimizeCssAssetsPlugin()
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[hash].dll.js',
        publicPath: 'dist/',
        library: '[name]'
    }, 
    devServer: {
        hot: true,
        open: true,
        port: 10000
    },
    plugins: [
        new Webpack.DllPlugin({
            name: '[name]',
            path: path.join(__dirname, '[name]-manifest.json')
        })
    ],
}
