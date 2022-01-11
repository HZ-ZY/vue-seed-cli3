const isDev = process.env.NODE_ENV === 'development'
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path");
module.exports = {
    // 部署应用包时的基本 URL,用法和 webpack 本身的 output.publicPath 一致
    publicPath: "./",
    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    indexPath: path.resolve(__dirname, "./dist/index.html"),
    // Paths
    //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: "static",
    // 输出文件目录
    outputDir: "dist",

    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    // 是否使用包含运行时编译器的 Vue 构建版本
    runtimeCompiler: false,
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // devtool: "source-map", //cheap-module-eval-source-map  source-map
    // 生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)
    integrity: false,
    // webpack相关配置
    chainWebpack: config => {
        config.plugin("define").tap(args => {
            // console.log("args :>> ", args);
            // console.log('args[0]["process.env"] :>> ', args[0]["process.env"]);
            return args;
        });
        config.resolve.alias.set("vue$", "vue/dist/vue.esm.js").set("@", path.resolve(__dirname, "./src"));
    },
    configureWebpack: config => {

        return {
            devtool: isDev ? "source-map" : '',
            plugins: [new CopyWebpackPlugin([{ //使用static文件夹
                from: './static',
                to: 'static'
            }])]
        }
    },
    // css相关配置
    css: {

        // css预设器配置项
        loaderOptions: {
            sass: {
                data: `
              @import "@/assets/scss/var.scss";
              `
            }
        },

    },
    // 是否使用 thread-loader
    parallel: require("os").cpus().length > 1,
    // PWA 插件相关配置
    pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
        disableHostCheck: true,
        open: true,
        host: "localhost",
        port: 8080,
        https: false,
        hotOnly: false,
        // http 代理配置
        proxy: {
            "/api": {
                target: "http://test-admin.hhdianti.cn/index.php", //这里后台的地址模拟的;应该填写你们真实的后台接口
                changOrigin: true, //允许跨域
                pathRewrite: {
                    /* 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/core/getData/userInfo 时
                      实际上访问的地址是：http://121.121.67.254:8185/core/getData/userInfo,因为重写了 /api
                     */
                    "^/api": ""
                }
            }
        },
        before: app => {}
    },
    // 第三方插件配置
    pluginOptions: {}
};