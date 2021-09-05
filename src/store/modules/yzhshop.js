/*
 * @Author: your name
 * @Date: 2021-05-27 11:37:19
 * @LastEditTime: 2021-08-30 14:58:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \saas\store\modules\yzhshop.js
 */

const state = {
    userInfo: {
        user_info: {}
    }, //用户详情
    isGetPhone: false, //是否弹出手机获取
};

const mutations = {
    //设置state
    SET_STATE(state, data) {
        Object.assign(state, data);
    }
};

const actions = {
    //获取用户信息
    async getUserInfo({ commit, state, dispatch }) {
        const { data, code } = await api.yzhshop.user.getUserInfoAPi();
        if (code == 200) {
            state.userInfo = data;
            uni.setStorageSync('needBindPhone', data.need_bind_phone);
            uni.setStorageSync("userData", data);
            state.isGetPhone = !!state.userInfo.need_bind_phone; //1弹出 0不弹
        }
    },
    //如果用户登录成功 初始化基础配置   暂未调取
    async yzhshopInit({ commit, state, dispatch }) {
        await dispatch("getUserInfo"); //获取登录信息
    },
};
const getters = {};
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};