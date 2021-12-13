<template>
    <div class="home" v-zy-loading="loading">
        <van-button type="primary" @click="clickBtn">首页</van-button>
        <el-button type="primary" @click="$router.push({ path: '/login' })">to login</el-button>
        <div class="global" :style="{ color: varCss.red }">saas全局变了</div>
        <img src="/static/cheatLogo.jpg" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            test: 0,
            loading: false
        };
    },
    created() {
       /*  setInterval(() => {
            this.$api.user.test({
                m: "Admin",
                c: "Public",
                a: "dologin"
            });
        },1000); */

        setTimeout(() => {
            this.loading = false;
        }, 1000);
    },
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
