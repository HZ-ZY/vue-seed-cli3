import axios from 'axios';
import { baseURL } from '@/config';
const request = axios.create({
    baseURL,
    timeout: 10000,
});
//请求拦截器
request.interceptors.request.use(
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

request.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject()
        }
    },
    error => {
        const { data: { code, msg } } = error.response
        if (code === -2) {
            window.app.$router.push('/login')
            window.app.$message.error("登录失效,重新登录")
        } else {
            window.app.$message.error(msg)
        }
        return Promise.reject(error)
    }
);

request.get = (options) => request({
    method: 'get',
    ...options
})
request.post = (options) => request({
    method: 'post',
    ...options,
})
request.del = (options) => request({
    method: 'del',
    ...options
})
request.put = (options) => request({
    method: 'put',
    ...options
})


export default request