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
        if (code === -2) {
            window.app.$router.push('/login')
            window.app.$message.error("登录失效,重新登录")
        } else {
            window.app.$message.error(msg)
        }
        return Promise.reject(error)
    }
);

axioz.get = (options) => axioz({
    method: 'get',
    ...options
})
axioz.post = (options) => axioz({
    method: 'post',
    ...options,
})
axioz.del = (options) => axioz({
    method: 'del',
    ...options
})
axioz.put = (options) => axioz({
    method: 'put',
    ...options
})


export default axioz