/*
 * @Author: your name
 * @Date: 2021-08-30 14:32:41
 * @LastEditTime: 2021-08-30 14:35:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-web-seed\src\assets\mixin\index.js
 */
// 使用mixin
import globalMixin from "./global";

export default {
    install(Vue) {
        Vue.mixin(globalMixin);
    }
};