const path = require("path")
const webpack = require("webpack")
const config = require("./config.js")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    mode: config.base.mode,
    entry: {
        //主入口文件路径
        bundle: config.base.entryPath
    },
    output: {//输出
        //输出文件目录
        path: config.base.outputPath,
        //输出文件名
        filename: config.base.outputFilename,
        //按需加载js文件名
        chunkFilename: config.base.chunkFilename,
        //按需加载路径报错是配置公共根路径
        publicPath:'/'
    },
    module: {
        rules: [
            {
                test: /\.js|.jsx$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        // you can specify a publicPath here
                        // by default it use publicPath in webpackOptions.output
                        // publicPath: '../'
                    }
                }, "css-loader"],
            },
            // {
            //     test: /\.css$/,
            //     use:["style-loader","css-loader"]
            // },
            {
                test: /\.(jpg|png|gif|ttf|woff|eot|svg)$/,
                use: ["url-loader"]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },]
    },
    resolve: {
        extensions: [".js", ".vue", ".jsx"],
        alias: {
            "vue": "vue/dist/vue.js"
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
   
} 