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
@import "~@/assets/scss/theme";
@import "~@/assets/scss/custom";
</style>
