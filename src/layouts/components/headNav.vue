<template>
    <div class="header-nav">
        <div class="nav flex-row-sb-c">
            <div class="nav-left"></div>
            <div class="nav-middle flex-row-c-c">
                <div class="left flex-row-r-c">
                    <router-link to="/">
                        <img src="/static/logo.png" />
                    </router-link >
                </div>

                <ul class="nav-list flex-row-c-c">
                    <li
                        class="flex-row-c-c"
                        v-for="(item, index) in navList"
                        :key="index"
                        :class="[currentIndex === index ? 'is-select' : '']"
                        @click="clickNav(index)"
                    >
                        <router-link :to="item.to">{{ item.title }}</router-link >
                    </li>
                </ul>

                <div class="right flex-row-l-c">
                    <router-link to="/" class="btn flex-row-c-c">免费试用</router-link >
                </div>
            </div>
            <div class="nav-right"></div>
        </div>

        <!-- 占位 -->
        <div class="placeholder"></div>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    props: {
        invert: {
            type: Boolean,
            default: () => false
        }
    },
    data() {
        return {
            navList: [
                {
                    title: "首页",
                    to: "/"
                },
                {
                    title: "产品&服务",
                    to: "/"
                },
                {
                    title: "行业解决方案",
                    to: "/"
                },
                {
                    title: "招商加盟",
                    to: "/"
                },
                {
                    title: "关于我们",
                    to: "/"
                }
            ],
            currentIndex: 0
        };
    },
    /*  mounted() {
    // 监听鼠标滚动事件
    window.addEventListener('scroll', () => {
      if (
        document.documentElement.scrollTop >= 500 ||
        document.body.scrollTop >= 500
      ) {
        this.navAddClass = true
      } else {
        this.navAddClass = false
      }
    })
  }, */
    methods: {
        clickNav(index) {
            this.currentIndex = index;
        }
    }
};
</script>

<style lang="scss" scoped>
.header-nav {
    .nav {
        z-index: 999;
        position: fixed;
        top: 0;
        // left: 0;
        width: 100%;
        // right: 0;
        background-color: #000;
        height: 78px;
        .nav-left {
            // width: 565px;
            flex: 1;
        }
        .nav-middle {
            width: 1200px;
            .left {
                img {
                    width: 140px;
                }
            }
            .nav-list {
                width: 800px;
                height: 100%;
                li {
                    height: 100%;
                    padding: 0 15px;
                    font-size: 15px;
                    color: #fff;
                    position: relative;

                    font-weight: bold;
                    letter-spacing: 2px;
                    &.is-select {
                        color: red;
                        &::after {
                            content: "";
                            background-color: $color;
                            width: 39px;
                            height: 4px;
                            border-radius: 3px;
                            position: absolute;
                            top: 56px;
                            left: 50%;
                            transform: translateX(-50%);
                        }
                    }
                }
            }
            .right {
                // width: 540px;
                .btn {
                    width: 103px;
                    height: 33px;
                    background: $color;
                    border-radius: 17px;
                    font-size: 15px;
                    color: #fff;
                }
            }
        }
        .nav-right {
            flex: 1;
            // width: 540px;
        }
        .nav-right,
        .nav-middle,
        .nav-left {
            height: 100%;
        }
    }

    .placeholder {
        height: 78px;
    }
}
</style>
