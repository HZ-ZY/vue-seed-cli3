/*
 * @Author: your name
 * @Date: 2021-01-26 19:40:56
 * @LastEditTime: 2021-03-21 09:52:04
 * @LastEditors: Please set LastEditors
 * @Description: 全局配置
 * @FilePath: \vue-admin-seed\src\plugin\config.js
 */
import Vue from 'vue';
let AXIOZ_URL = '' //接口axioz请求baseUrl
let IMG_PATH = '' //图片请求地址
if (process.env.NODE_ENV === 'dev') {
    /* AXIOZ_URL = 'http://localhost:3000/api/web' // http://localhost:3000/api/web
    IMG_PATH = 'http://localhost:3000/api/' */

    AXIOZ_URL = 'http://dqqljf.cn/api/web'
    IMG_PATH = 'http://dqqljf.cn/api/'
} else {
    AXIOZ_URL = 'http://dqqljf.cn/api/web' //http://118.31.106.170:3888/api
    IMG_PATH = 'http://dqqljf.cn/api/'
}
Vue.prototype.IMGPATH = IMG_PATH
export {
    AXIOZ_URL,
    IMG_PATH
}