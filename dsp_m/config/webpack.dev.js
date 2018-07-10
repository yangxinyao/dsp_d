const path = require("path")
const baseWebpack = require("./webpack.base.js")
const merge = require('webpack-merge')
module.exports = merge(baseWebpack, {
    mode: "development",
    devServer: {
        port: 8099,
        hot: true,
        open: true,
        // host:,
        historyApiFallback: true,
        //关闭webpack打印出来的一些信息
        quiet: true,
        publicPath: '/'
    },
    devtool:"cheap-module-source-map"

})
