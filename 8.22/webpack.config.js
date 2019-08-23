
const path = require('path');

module.exports = {
    //在配置文件中，需要手动指定入口和出口
    entry: path.join(__dirname,'./src/main.js'),
    output:{
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js',
    }
};
