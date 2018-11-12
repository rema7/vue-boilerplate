const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

const repoRoot = __dirname
const appRoot = path.join(repoRoot, 'app')
const distRoot = path.join(repoRoot, 'dist')
const publicRoot = path.join(repoRoot, 'public')

const plugins = [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
        title: 'vue playground',
        template: path.join(publicRoot, 'index.html'),
    }),
    new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
    }),
    new StyleLintPlugin({
        files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
    }),
]


module.exports = {
    mode: 'develop',

    context: appRoot,

    output: {
        path: distRoot,
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js',
        publicPath: '/',
    },

    plugins: plugins,

    entry: [
        path.join(appRoot, 'index.js'),
    ],
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                use: 'eslint-loader',
                enforce: 'pre',
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: (file) => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                ),
            },
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                include: [
                    appRoot,
                    publicRoot,
                ],
                use: [
                    process.env.NODE_ENV !== 'production'
                        ? 'vue-style-loader'
                        : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    devServer: {
        host: '0.0.0.0',
        port: '9010',
        disableHostCheck: true,
        historyApiFallback: true,
        watchOptions: {
            poll: true,
        },
    },
}
