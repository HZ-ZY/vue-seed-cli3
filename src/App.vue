<!--
 * @Author: your name
 * @Date: 2021-01-04 09:50:30
 * @LastEditTime: 2021-01-05 14:57:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yellow-member-admin\src\App.vue
-->
<template>
    <div id="app">
        <router-view :key="$route.fullpath"></router-view>
    </div>
</template>
<style lang="scss">
@import '~@/assets/scss/theme'
</style>