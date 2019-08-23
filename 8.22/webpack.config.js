
const path = require('path');

module.exports = {
    //在配置文件中，需要手动指定入口和出口
    entry: path.join(__dirname,'./src/main.js'),
    output:{
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js',
    }
};

//使用 webpack-dev-server 这个工具，来实现自动打包编译的功能
//1.  运行npm i webpack-dev-server -D 把这个工具安装到项目的本地开发环境
