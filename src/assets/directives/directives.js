import Vue from 'vue'
import Loading from './components/loading.vue'
const LoadingEl = Vue.extend(Loading)


/* 切换 Loading 组件 */
const toggleLoading = function(el, binding) {
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
            el.$loadingEl.$el.style.opacity = 0
            el.style.position = el.getAttribute('position')
            el.removeAttribute('position')
            setTimeout(() => {
                el.$loadingEl.$el.parentNode.removeChild(el.$loadingEl.$el)
            }, 500);
        }
    }
}

/**
 * v-loading指令
 * @warn 使用 v-loading 不能是绝对定位元素
 */

export default {
    ['zy-loading']: {
        bind(el, binding) {
            binding.value && toggleLoading(el, binding)
        },

        update(el, binding) {
            binding.value !== binding.oldValue && toggleLoading(el, binding)
        },
    }
}