const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        watchFiles: ["src/"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Carousel",
            template: "./src/index.html",
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                "test": /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    }
}
