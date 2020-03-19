const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'production',
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
        chunkFilename: "[name].bundle.js"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            parallel: true,
            terserOptions: {
                compress: {
                    unsafe: true,
                    inline: true,
                    passes: 3,
                    keep_fargs: false,
                    booleans_as_integers: true,
                    warnings: false
                },
                output: {
                    comments: false,
                    beautify: false
                },
            },
            extractComments: false,
        })],
        runtimeChunk: "single",
        splitChunks: {
            chunks: "all"
        }
    },
    module: {
        rules: [{
            // Include ts, tsx, js, and jsx files.
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        {
            test: /\.s[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
            ],
        },
        {
            loader: require.resolve('file-loader'),
            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/, /\.s[ac]ss$/],
            options: {
                name: 'static/media/[name].[hash:8].[ext]',
                esModule: false,
                //   fix problem with img [object Module] in browser
            },
        }],
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'assets', 'index.html'),
        title: "Coron site"
    }),
    new CompressionPlugin({
        algorithm: "gzip"
    }),
    new MiniCssExtractPlugin()]
};