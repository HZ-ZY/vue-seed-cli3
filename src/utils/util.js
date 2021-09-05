/*
 * @Author: your name
 * @Date: 2021-01-04 11:19:29
 * @LastEditTime: 2021-01-04 11:23:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yellow-member-admin\src\utils\util.js
 */
import Vue from 'vue'
const util = {

    /**
     * 传入一个对象，对象的属性作为参数键，对象属性的值作为参数值，返回对应FormData
     * @param paramObj
     */
    formDataFactory(paramObj) {
        if (!paramObj) {
            paramObj = {}
        }
        let data = new FormData()
        Object.keys(paramObj).forEach(key => data.append(key, paramObj[key]))
        return data
    }
}
export default util
Vue.prototype.$util = util