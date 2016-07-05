const path = require('path');
const webpack = require('webpack');

const sassLoaders = [
  'style-loader',
  'css-loader?sourceMap',
  'postcss-loader',
  'sass-loader?outputStyle=expanded'
];
const plugins = [
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
        path: path.join(__dirname, '/js'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/js'
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
                loader: sassLoaders.join('!')
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            },
            // Inline base64 URLs for <=8k images, direct URLs for the rest
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                loader: 'url-loader?limit=8192'
            }
        ],
    },
    plugins: plugins,
    postcss: function () {
        return [autoprefixer({
          browsers: ['last 2 versions']
        })];
    },
    devtool: 'cheap-module-eval-source-map',
};
