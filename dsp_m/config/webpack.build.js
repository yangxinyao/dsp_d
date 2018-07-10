const path = require("path")
const baseWebpack = require("./webpack.base.js")
const merge = require('webpack-merge')
module.exports = merge(baseWebpack, {
    mode: "production",
    externals: {
        "antd": "antd",
        "react": "React",
        "react-dom": "ReactDOM",
        "moment": "moment"
    },
})