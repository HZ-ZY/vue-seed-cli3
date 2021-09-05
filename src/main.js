/*
 * @Author: your name
 * @Date: 2021-01-04 09:50:30
 * @LastEditTime: 2021-09-05 15:39:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yellow-member-admin\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/directives";

import "./utils/util";
import "./assets/filter";
import "./plugin/vant"; //引入vant
import "./plugin/element"; //引入element
// import "./utils/rem.js";

import api from "@/api/index";
Vue.prototype.$api = api;

import Mixin from "./assets/mixin";
Vue.use(Mixin); //注册全局Mixin

Vue.config.productionTip = false;

window.$app = new Vue({
    store,
    router,
    render: h => h(App)
}).$mount("#app");