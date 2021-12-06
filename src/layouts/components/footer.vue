<template>
    <!-- :class="[isMobile ? 'mob-footer' : 'footer']" -->
    <div class="footer">
        <div class="footer-box">
            <div class="center-main flex-row-c-sb">
                <div class="middle">
                    <ul>
                        <li class="title">友情链接</li>

                        <li><span>樵夫服药后，很快便感觉浑身轻松， 失音不语的症状随即消失。 樵夫向那僧人询问药物的名药，那僧人并不作答，只</span></li>
                    </ul>
                    <ul>
                        <li class="title">联系方式</li>
                        <li><span>电子邮箱：</span></li>
                        <li><span>493117053@qq.com</span></li>
                        <li><span>地址：</span></li>
                        <li><span>樵夫服药后，很快便感觉浑身轻松， 失音不语的症状随即消失。 樵夫向那僧人询问药物的名药，那僧人并不作答，只</span></li>
                    </ul>
                </div>
                <div class="right flex-row-r-c">
                    <div class="code flex-col--c">
                        <img src="/static/qrcode.png" alt="" />
                        <p class="p-1">关注公众号</p>
                        <p class="p-2">(获取更产品功能资料)</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="buttom flex-row-c-c">
            <a class="flex-col-c-c" target="_blank" href="https://beian.miit.gov.cn/">
                <p>Copyright 2021</p>
                <p>粤ICP备号</p>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
};
</script>
<style scoped lang="scss">
.footer {
    background-color: #21263a;
    .footer-box {
        width: 1111px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        .center-main {
            
            padding: 60px 0;
            width: 100%;
            display: flex;
            .middle {
                display: flex;
                // margin-left: 69px;
                ul {
                    width: 350px;
                    margin-right: 50px;
                    li {
                        font-size: 13px;
                        font-weight: 300;
                        line-height: 18px;
                        margin-top: 10px;
                        cursor: pointer;
                        color: #fff;
                        &:hover span {
                            color: #fa6c00;
                        }
                        &.title {
                            opacity: 1;
                            cursor: default;
                            font-size: 15px;
                            font-weight: 400;
                            line-height: 27px;
                            margin-top: 0;
                            margin-bottom: 30px;
                        }
                    }
                }
            }
            .right {
                flex: 1;
                padding-left: 30px;
                .code {
                    margin-left: 36px;
                    img {
                        width: 162px;
                    }
                    p {
                        color: #ffffff;
                        opacity: 0.4;
                        font-size: 12px;
                        line-height: 20px;
                        &.p-1 {
                            margin-top: 38px;
                        }
                        &.p-2 {
                            font-size: 10px;
                        }
                    }
                }
            }
        }
    }
    .buttom {
        background-color: #21263a;
        height: 50px;
        font-size: 13px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 1px solid #fff;
        a {
            p {
                color: #666;
            }
        }
    }
}
</style>
