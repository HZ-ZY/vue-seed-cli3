<!--
 * @Author: your name
 * @Date: 2021-01-08 21:14:41
 * @LastEditTime: 2021-09-05 15:30:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-web-seed\src\page\home\index.vue
-->
<template>
    <div class="home">
        <van-button type="primary" @click="clickBtn">首页</van-button>
        <el-button type="primary" @click="$router.push({ path: '/login' })">to login</el-button>
        <div class="global" :style="{ color: varCss.red }">saas全局变了</div>
        <img src="/static/cheatLogo.jpg">
    </div>
</template>

<script>
export default {
    data() {
        return {
            test: 0
        };
    },
    created() {},
    methods: {
        clickBtn() {
            console.log("1 :>> ", 1);
            console.log("this.test :>> ", this.test);
            this.test++;
            console.log("this.test :>> ", this.test);
        }
    }
};
</script>

<style lang="scss" scoped>
.global {
    // color: $red;
    font-size: 11px;
}
</style>
