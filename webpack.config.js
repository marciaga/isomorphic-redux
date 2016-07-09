const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const plugins = [
  new ExtractTextPlugin('[name].css'),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development'),
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
  })
];

module.exports = {
    env: process.env.NODE_ENV,
    entry: [
        './src/js/client'
    ],
    resolve: {
        modulesDirectories: ['node_modules', 'src/js'],
        extensions: ['', '.js', '.jsx', '.scss']
    },
    output: {
        path: path.join(__dirname, '/assets'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/assets'
    },
    module: {
        loaders: [
            {
                test:    /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel']
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader?outputStyle=expanded')
            },
            // Inline base64 URLs for <=8k images, direct URLs for the rest
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                loader: 'url-loader?limit=8192'
            }
        ],
    },
    plugins: plugins,
    postcss: [
        autoprefixer({
          browsers: ['last 2 versions']
        })
    ],
    devtool: 'cheap-module-eval-source-map',
};
