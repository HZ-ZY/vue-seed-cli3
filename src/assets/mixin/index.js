// 全局混入
import varScss from "@/assets/scss/var.scss"; //scss全局变量
import {
    mapState
} from 'vuex';
export default {
    data() {
        return {
            varCss: varScss
        };
    },
    computed: {
        ...mapState('layout', {
            isMob: (state) => {
                return state.device === 'mobile'
            }
        })
    },
    methods: {}
};