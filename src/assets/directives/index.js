/*
 * @Author: your name
 * @Date: 2020-12-06 12:18:37
 * @LastEditTime: 2020-12-06 12:24:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \microtransaction-frontend\user\src\assets\directive\index.js
 */
import directives from './directives'
import Vue from 'vue';
// 注册指令
const drs =  (Vue) => {
  for (const i in directives) {
    Vue.directive(i, directives[i])
  }
}
drs(Vue)

