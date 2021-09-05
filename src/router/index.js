/*
 * @Author: your name
 * @Date: 2021-01-04 09:50:30
 * @LastEditTime: 2021-01-08 22:02:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yellow-member-admin\src\router\index.js
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    routes: [{
        path: '/',
        component: () =>
            import( /* webpackChunkName: "home" */ '@/page/home'),
        meta: { title: '首页' },
    },
    {
        path: '/login',
        component: () =>
            import( /* webpackChunkName: "login" */ '@/page/login'),
        meta: { title: '登录' }
    },
    {
        path: '*',
        redirect: '@/page/404.vue'
    }
    ]
});

// 导航守卫
/* // 判断用户是否登录，添加前置导航守卫
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    const sign = localStorage.getItem('sign');
    if (sign) {
        next()
    } else {
        if (to.path === '/login') { // 如果是登录页
            next();
        } else {
            next({ path: '/login' })
        }
    }
}) */
export default router