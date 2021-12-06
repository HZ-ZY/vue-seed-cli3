module.exports = {
    state: {
        device: 'desktop',
        title: '',
    },
    mutations: {
        SET_DEVICE: (state, value) => {
            state.device = value
        },
        SET_TITLE: (state, value) => {
            state.title = value
        },
    },
    getters: {
        device: (state) => state.device,
        title: (state) => state.title,
        isMobile: (state) => state.device === 'mobile',
    },
    namespaced: true,
}