<template>
    <div id="app">
         <router-view :key="$route.fullpath"></router-view>
    </div>
</template>
<script>

export default {
   
    data() {
        return {};
    }
};
</script>
<style lang="scss">
@import "~@/assets/scss/theme.scss";
@import "~@/assets/scss/custom.scss";
@import "~@/assets/scss/icon.scss";
</style>
