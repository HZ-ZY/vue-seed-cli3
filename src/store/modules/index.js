/*
 * @Author: your name
 * @Date: 2021-05-14 09:20:27
 * @LastEditTime: 2021-08-30 15:00:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \saas\store\modules\index.js
 */

// 工程化导入获取接口数据
// require.context(需要遍历的路径 , 是否遍历子目录 ,正则匹配文件)
const reqBack = require.context("./", false, /\.js$/); // 获取当前目录下所有的.js结尾文件
const modules = {}; // 定义一个导出空对象
// reqBack.keys()获取所有js文件路径,返回一个数组 ['./index.js','./nav-list.js']
reqBack.keys().forEach(name => {
    // 遍历数组，去除./index.js的路径名字
    if (name === "./index.js") return;
    /*  console.log('reqBack(name)',reqBack(name)) //reqBack(name) 获取该路径下js文件exprot导出的对象 返回的是 {导出内容}    例如 export {get_nav}
        console.log('name',name)
        console.log('objName',name.replace(/\.\//,'').replace(/\.js/,''))  */
    const objName = name.replace(/\.\//, "").replace(/\.js/, "");
    modules[objName] = {};
    Object.assign(modules[objName], reqBack(name).default); // 将这些对象的属性一个个拷贝到module空对象中
});

export default modules; // 导出module