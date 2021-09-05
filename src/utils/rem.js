/*
 * @Author: your name
 * @Date: 2021-01-09 21:28:34
 * @LastEditTime: 2021-01-19 22:21:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \广告H5\src\utils\rem.js
 */
// 设置 rem 函数
function setRem () {
 // 320 默认大小16px; 320px = 20rem ;每个元素px基础上/16
 const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
 //得到html的Dom元素
 const htmlDom = document.getElementsByTagName('html')[0];
 //设置根元素字体大小
 htmlDom.style.fontSize= htmlWidth/10 + 'px';
}
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function () {
 setRem();
};