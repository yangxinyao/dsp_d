const path = require("path")
module.exports = {
    base: {
        //主入口文件路径
        entryPath: path.resolve(process.cwd(), "src/main.js"),
        //输出文件目录
        outputPath: path.resolve(process.cwd(), "dist"),
        //输出文件名
        outputFilename: "[name].js",
        //按需加载js文件名
        chunkFilename:"[name].js"
    },
    dev: {
        browserOpen: true
    },
    build: {

    }

}