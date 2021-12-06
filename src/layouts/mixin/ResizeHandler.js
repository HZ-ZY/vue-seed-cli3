const WIDTH = 750 // refer to Bootstrap's responsive design

export default {
    watch: {
        $route(route) {
            if (this.device === 'mobile') {
                // TODO: 设置移动端样式
            }
        },
    },
    beforeMount() {
        if (process.browser) {
            window.addEventListener('resize', this.$_resizeHandler)
        }
    },
    beforeDestroy() {
        if (process.browser) {
            window.removeEventListener('resize', this.$_resizeHandler)
        }
    },
    mounted() {
        this.$_isMobile() // TODO: 设置移动端样式
    },
    methods: {
        $_isMobile() {
            if (process.browser) {
                const { body } = document
                const rect = body.getBoundingClientRect()
                if (rect.width - 1 < WIDTH) {
                    // TODO: 设置移动端样式
                    this.choseWidth()
                }
            }
        },
        $_resizeHandler() {
            // TODO: 设置移动端样式
            this.choseWidth()
        },
        choseWidth() {
            if (process.browser) {
                if (document.body.clientWidth <= WIDTH) {
                    document.getElementsByTagName('body')[0].classList.add('mobile')
                    this.$store.commit('layout/SET_DEVICE', 'mobile')
                } else {
                    document.getElementsByTagName('body')[0].classList.remove('mobile')
                    this.$store.commit('layout/SET_DEVICE', 'desktop')
                }
            }
        },
    },
}