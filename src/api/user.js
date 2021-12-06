import request from '@/api/request/request';

export default {
    // 用户登录
    login: params => request.post({
        url: '',
        params
    }),
    // 用户信息
    userInfo: params => request.get({
        url: '/user_info',
        params
    }),
}