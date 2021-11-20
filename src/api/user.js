import axioz from '../plugin/axioz';

export default {
    // 用户登录
    login: data => axioz.post({
        url: '/login',
        data
    }),
    // 用户信息
    userInfo: params => axioz.get({
        url: '/user_info',
        params
    }),
}


