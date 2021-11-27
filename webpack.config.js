const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    const mode = env.mode === "production" ? "production" : "development";

    return {
        entry: path.resolve(__dirname, "./src/index.tsx"),
        mode,
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"],
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.md/,
                    type: 'asset/source',
                },
                {
                    test: /\.css$/,
                    use: [ 'style-loader', "css-loader" ]
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i, 
                    type: 'asset/resource'
                },
                {
                    test: /\.mp4$/,
                    type: 'asset/resource',
                }
            ],
        },
        resolve: {
            extensions: ["*", ".js", ".jsx", ".ts", ".tsx", ".css"],
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, './dist'),
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/assets/index.html',
                inject: true,
                filename: 'index.html',
                favicon: "./src/assets/logo.png"
            }),
            new webpack.ProvidePlugin({
                Buffer: ['buffer', 'Buffer'],
                process: require.resolve("process/browser")
            })
        ],
        optimization: {
            runtimeChunk: 'single',
            moduleIds: 'deterministic',
            splitChunks: {
                cacheGroups: {
                  vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                  },
                },
            },
        },
        devServer: {
            port: 3000
        }
    }
};