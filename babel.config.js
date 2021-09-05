/*
 * @Author: your name
 * @Date: 2021-09-05 10:31:03
 * @LastEditTime: 2021-09-05 13:23:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \aa\babel.config.js
 */
module.exports = {
    presets: ["@vue/cli-plugin-babel/preset"],
    plugins: [
        [
            "import",
            {
                libraryName: "vant",
                libraryDirectory: "es",
                style: true
            }
        ],
        [
            "component",
            {
                libraryName: "element-ui",
                styleLibraryName: "theme-chalk"
            }
        ]
    ]
};