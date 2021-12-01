<template>
    <transition name="el-fade-in-linear">
        <div id="preloader">
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {};
    },

    methods: {},
};
</script>
<style lang="scss" scoped>
#preloader {
    transition: all 0.6s;
    display: table;
    position: absolute;
    z-index: 99999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.9);

    .spinner {
        display: table-cell;
        vertical-align: middle;
        margin: 100px auto 0;
        width: 70px;
        text-align: center;
    }

    .spinner > div {
        width: 15px;
        height: 15px;
        background-color: #fff;

        border-radius: 100%;
        display: inline-block;
        -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
        animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    }

    .spinner .bounce1 {
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
    }

    .spinner .bounce2 {
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
    }

    .spinner > div {
        background: $color;
    }

    @-webkit-keyframes sk-bouncedelay {
        0%,
        80%,
        100% {
            -webkit-transform: scale(0);
        }
        40% {
            -webkit-transform: scale(1);
        }
    }

    @keyframes sk-bouncedelay {
        0%,
        80%,
        100% {
            -webkit-transform: scale(0);
            transform: scale(0);
        }
        40% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }
}
</style>