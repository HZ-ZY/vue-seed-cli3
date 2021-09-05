/*
 * @Author: your name
 * @Date: 2021-01-08 21:14:41
 * @LastEditTime: 2021-01-08 22:21:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-web-seed\src\api\index.js
 */
import { get, post } from '../plugin/axioz';

export default {
    // 用户登录
    login: params => post('/login', params),
    //添加轮播图
    addSwiper: params => post('/admin/car_update', params),
    //轮播图列表
    swiperList: params => post('/web/carouels', params),
    // 前端标签列表
    labelList: params => post('/web/tags', params),
    //上传视频
    uploadVideo: (params, paramsUrl) => {
        return post('/admin/video/upload' + paramsUrl, params)
    },
    //视频列表
    videoList: params => post('/admin/video/index', params),
    // 删除视频
    deleteVideo: params => post('/admin/video/del', params),
    // 获取vip金额
    getShowAmount: params => post('/web/sys', params),
    //更新显示金额
    updataShowAmount: params => post('/admin/sys/update', params),
    //订单列表
    getOrderList: params => post('/admin/order/index', params),
    //统计接口
    getTotalOrder: params => post('/admin/sys/index', params),
}


