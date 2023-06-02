const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const config = {
    entry: {
        main: './src/index.js',
        popup: './popup/popup.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'popup'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'BCApp Toolkit',
            myPageHeader: 'Zest',
            template: './popup/index.html',
            filename: './index.html',
            chunks: ['popup'],
            scriptLoading: 'blocking',
        }),
    ],
};

module.exports = (env, argv) => {
    const { mode } = argv;
    config.mode = mode;

    if (argv.mode === 'development') {
        config.devtool = 'source-map';
        config.watch = true;
    }

    return config;
};
