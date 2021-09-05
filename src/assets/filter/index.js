/*
 * @Author: your name
 * @Date: 2020-12-05 11:51:22
 * @LastEditTime: 2021-01-05 14:47:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \microtransaction-frontend\user\src\filter\index.js
 */
import Vue from 'vue'
const filters = {}

/* 交易类型 */
filters.isVip = function (value) {
    return ({
        1: '是',
        0: '否',
    }[value] || '其他')
}
// 订单状态
filters.orderStatus = function (value) {
    return ({
        1: '支付成功',
        0: '待支付',
        2: '支付失败'
    }[value] || '其他')
}

/* 支付状态 */
filters.filtrColor = function (value) {
    return ({
        0: "color:#5696F6",
        1: "color:#1ECCA9",
        2: 'color:red',
    }[value] || '其他')
}
const filtersFun = function (Vue) {
    for (const i in filters) {
        Vue.filter(i, filters[i])
    }
}

filtersFun(Vue)