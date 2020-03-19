const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const myLocalHost = require('./host')

module.exports = {
    // Change to your "entry-point".
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    devServer: {
        host: myLocalHost.host,
        port: 8081,
        open: true,
        hot: true,
        watchContentBase: true,
        progress: true,
        contentBase: path.join(__dirname, 'dist'),
        // historyApiFallback: true, // on 404 load publicPath => for BrowserRouter on refresh
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
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
    new MiniCssExtractPlugin()]
};