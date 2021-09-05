/*
 * @Author: your name
 * @Date: 2021-01-04 09:50:30
 * @LastEditTime: 2021-09-05 15:23:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yellow-member-admin\src\utils\api.js
 */
import axios from 'axios';
import util from '../utils/util';
import { AXIOZ_URL } from '@/plugin/config';
const axioz = axios.create({
    baseURL: AXIOZ_URL,
    timeout: 10000,
});
//请求拦截器
axioz.interceptors.request.use(
    config => {
        /* if (config.url !== '/login') {
            config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`
            // config.data.append('token', localStorage.getItem('token'))
            // console.log('data :>> ', config.data);
        } */
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axioz.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject()
        }
    },
    error => {
        const { data: { code, msg } } = error.response
        if (code == -2) {
            window.app.$router.push('/login')
            window.app.$message.error("登录失效,重新登录")
        } else {
            window.app.$message.error(msg)
        }
        return Promise.reject(error)
    }
);

const get = (url, params) => {
    return axioz({
        url,
        method: 'get',
        params
    })
}
const post = (url, data, contentType) => {
    return axioz({
        url,
        method: 'post',
        data: contentType ? util.formDataFactory(data) : data
    })
}



export {
    get,
    post
};