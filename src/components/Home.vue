<template>
    <div class="main">
        <div class="header">
            <div class="wrap">
                <h1 class="logo">
                    <a hidefocus="true" href="/#">网易云音乐</a>
                </h1>
                <ul class="m-nav j-tflag">
                    <li class="fst">
                        <span>
                            <a hidefocus="true" href="/#" data-module="discover" class="z-slt">
                                <em>发现音乐</em>
                                <sub class="cor">&nbsp;</sub>
                            </a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <a data-action="bilog" data-log-action="page" data-log-json="{&quot;type&quot;:&quot;my&quot;}" hidefocus="true" href="/my/" data-module="my">
                                <em>我的音乐</em>
                                <sub class="cor">&nbsp;</sub>
                            </a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <a hidefocus="true" href="/friend" data-module="friend">
                                <em>朋友</em>
                                <sub class="cor">&nbsp;</sub>
                                <i class="dot j-t" style="display:none;"></i>
                            </a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <a hidefocus="true" href="/store/product" target="_blank" data-module="store">
                                <em>商城</em>
                            </a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <a hidefocus="true" href="/nmusician/web/recruit" target="_blank" data-module="musician">
                                <em>音乐人</em>
                            </a>
                        </span>
                    </li>
                    <li class="lst">
                        <span>
                            <a id="topbar-download-link" data-action="bilog" data-log-action="page" data-log-json="{&quot;type&quot;:&quot;downloadapp&quot;,&quot;source&quot;:&quot;tab&quot;}" hidefocus="true" href="/download" data-module="download">
                                <em>下载客户端</em>
                                <sub class="cor">&nbsp;</sub>
                            </a>
                        </span>
                        <sup class="hot">&nbsp;</sup>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang='scss' scoped>
.header {
    position: relative;
    z-index: 1000;
    height: 70px;
    box-sizing: border-box;
    background: #242424;
    border-bottom: 1px solid #000;
    .wrap {
        width: 1100px;
        margin: 0 auto;
        .logo {
            float: left;
            a {
                float: left;
                width: 157px;
                height: 100%;
                padding-right: 20px;
                text-indent: -9999px;
            }
        }
        .m-nav {
            float: left;
            li {
                position: relative;
                background-position: right -300px;
                float: left;
                height: 70px;
                font-size: 14px;
                span {
                    float: left;
                    height: 70px;
                    font-size: 14px;
                }
            }
            a {
                padding: 0 19px;
                text-align: center;
                line-height: 70px;
                color: #ccc;
            }
        }
    }
}
</style>
