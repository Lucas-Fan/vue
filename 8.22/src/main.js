//'项目的js入口文件

//导入 Jquery

//import *** from *** 是ES6导入模块的方式
//由于ES6的代码，太高级了，浏览器解析不了，所以这一行的代码会有问题
import $ from 'jquery'

$(function () {
    $('li:odd').css('backgroundColor','yellow');
    $('li:even').css('backgroundColor',function () {
        return '#' + 'D97634'
    })
});

// webpack  要打包的文件的路径  打包好的输出文件的路径
