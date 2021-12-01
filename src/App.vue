<template>
    <div id="app">
        <router-view :key="$route.fullpath"></router-view>
    </div>
</template>
<style lang="scss">
@import '~@/assets/scss/theme'
</style>