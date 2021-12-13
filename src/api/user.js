import request from '@/api/request/request';

export default {
    // 用户登录
    login: data => request.post({
        url: '',
        data
    }),
    // 用户信息
    userInfo: params => request.get({
        url: '/user_info',
        params
    }),
    test: params => request.get({
        url: '/teachingSatisfaction/save',
        params
    }),
}