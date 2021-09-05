/*
 * @Author: your name
 * @Date: 2021-02-06 19:40:33
 * @LastEditTime: 2021-08-30 15:00:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sass\store\index.js
 */
// store/index.js
import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";
Vue.use(Vuex);

const globalStore = {
    state: {
        token: "", // 用户凭证 Token
        indexNav: 0 // 菜单栏索引
    },
    mutations: {
        //统一设置state
        SET_STATE(state, data) {
            Object.assign(state, data);
        }
    },
    actions: {
        //获取视频配置信息
        async getVideoConfig({ commit, state, dispatch }) {
            console.log("判断环境", Vue.prototype.environment);
            if (Vue.prototype.environment == "wxwork") {
                return await new Promise((resolve, reject) => {
                    wx.qy.login({
                        success: async res => {
                            if (res.code) {
                                commit("SET_WxworkCode", res.code);
                                resolve(await dispatch("getVideoConfigData"));
                            }
                        }
                    });
                });
            } else {
                return await dispatch("getVideoConfigData");
            }
        }
    },
    getters: {
        teamConfig: state => state.teamConfig
    }
};

const store = new Vuex.Store({
    modules,
    ...globalStore
});

export default store;