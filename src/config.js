// 属于哪个环境
const env = process.env.NODE_ENV === "development" ? "develop" : "product";
// 各个环境域名
const baseUrls = {
    // develop: "http://192.168.2.25:8081", // 测试环境 dev
    develop: "http://192.168.2.230:8529", // 测试环境 dev
    product: "https://minapp.yulaisoft.com", // 生产环境 product
};

module.exports = {
    env,
    cdn: "/static/", // 图片静态资源七牛域名 http://cdn.dqqljf.cn/   /static/
    baseURL: baseUrls[env],
};