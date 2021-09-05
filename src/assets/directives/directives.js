/*
 * @Author: your name
 * @Date: 2020-10-30 10:42:27
 * @LastEditTime: 2020-12-07 13:48:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ny-blockchain-web\assets\directive\directives.js
 */
import Vue from 'vue'
import Loading from './components/Loading.vue'
import Login from './components/login.vue';
const LoadingEl = Vue.extend(Loading)
const LoginE1 = Vue.extend(Login)
const directives = {}

/* 切换 Loading 组件 */
const toggleLoading = function (el, binding) {
  if (binding.value) {
    const loadingEl = new LoadingEl().$mount()
    loadingEl.indeterminate = true
    // 保存元素上 style.position，关闭时复原
    el.$loadingEl = loadingEl
    el.style.position = 'relative'
    el.setAttribute('position', el.style.position)
    el.appendChild(loadingEl.$el)
  } else if (binding.value !== binding.oldValue) {
    if (el.$loadingEl) {
      el.$loadingEl.$el.remove()
      el.style.position = el.getAttribute('position')
      el.removeAttribute('position')
    }
  }
}

/**
 * v-loading指令
 * @warn 使用 v-loading 不能是绝对定位元素
 */
directives.self_loading = {
  bind(el, binding) {
    binding.value && toggleLoading(el, binding)
  },

  update(el, binding) {
    binding.value !== binding.oldValue && toggleLoading(el, binding)
  },
}





const toggleLogin = function (el, binding) {
  if (binding.value) {
    const loginE1 = new LoginE1().$mount()
    loginE1.indeterminate = true
    // 保存元素上 style.position，关闭时复原
    el.$loginE1 = loginE1
    el.style.position = 'relative'
    el.setAttribute('position', el.style.position)
    el.appendChild(loginE1.$el)
  } else if (binding.value !== binding.oldValue) {
    if (el.$loginE1) {
      el.$loginE1.$el.remove()
      el.style.position = el.getAttribute('position')
      el.removeAttribute('position')
    }
  }
}
/**
 * @description:  判断是否登录添加蒙层
 * @param {*}
 * @return {*}
 */
directives.login = {
  bind(el, binding) {
    binding.value && toggleLogin(el, binding)
  },

  update(el, binding) {
    binding.value !== binding.oldValue && toggleLogin(el, binding)
  },
}


export default directives
