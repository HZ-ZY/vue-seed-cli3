//工程化导入获取接口数据
// require.context(需要遍历的路径 , 是否遍历子目录 ,正则匹配文件)   
const reqBack = require.context('./', false, /\.js$/) //获取当前目录下所有的.js结尾文件

let module = {} //定义一个导出空对象
    // reqBack.keys()获取所有js文件路径,返回一个数组 ['./index.js','./nav-list.js']
reqBack.keys().forEach((name) => { //遍历数组，去除./index.js的路径名字
    if (name === './index.js') return
        // console.log(reqBack(name)) //reqBack(name) 获取该路径下js文件exprot导出的对象 返回的是 {导出内容}    例如 export {get_nav}
    Object.assign(module, reqBack(name)) //将这些对象的属性一个个拷贝到module空对象中
})

// console.log('module', module)

export default module //导出module