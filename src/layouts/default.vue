<template>
    <div class="home-layout">
        <transition name="el-fade-in-linear">
            <Covering v-if="loading" />
        </transition>

        <head-nav class="head-nav"></head-nav>
        <router-view :key="$route.fullpath"></router-view>
        <Footer />
    </div>
</template>
<script>
import HeadNav from "./components/headNav";
import Footer from "./components/footer";
import ResizeMixin from "./mixin/ResizeHandler";
import Covering from "../components/covering";
export default {
    components: {
        HeadNav,
        Footer,
        Covering
    },
    mounted() {
        setTimeout(() => {
            this.loading = false;
        }, 1000);
    },
    mixins: [ResizeMixin],
    data() {
        return {
            loading: true
        };
    }
};
</script>

<style lang="scss">
.home-layout {
    min-width: 1300px;
}
.mobile {
    .home-layout {
        min-width: auto;
    }
}
</style>
