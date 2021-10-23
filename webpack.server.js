const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        server: './examples/dev-server.js',
    },
    output: {
        filename: 'dev-server.bundle.js',
        path: path.resolve(__dirname, 'examples'),
    },
    module: {
        rules: [
            // 不建议加载测试css(index.css), 体验不好
            // {
            //     test: /\.css$/i,
            //     use: ['style-loader', 'css-loader'],
            // },
            {
                test: /\.s[ac]ss$/i,
                use: [
                // 将 JS 字符串生成为 style 节点
                'style-loader',
                // 将 CSS 转化成 CommonJS 模块
                'css-loader',
                // 将 Sass 编译成 CSS
                'sass-loader',
                ],
            },
        ],
    },
    devServer: {
        static: [
            {
                directory: path.join(__dirname, './examples'),
                publicPath: '/',
            },
            // {
            //     directory: path.join(__dirname, './dist/ohoTips/css'),
            //     publicPath: '/dist/ohoTips/css',
            // },
        ],
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Tips 插件 热启动',
            template: 'examples/index.html'
        }),
    ],
};