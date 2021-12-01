import directives from './directives'
import Vue from 'vue';
// 注册指令
const drs = (Vue) => {
    for (const i in directives) {
        Vue.directive(i, directives[i])
    }
}
drs(Vue)