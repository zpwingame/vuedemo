<style lang='scss' scoped>
.main {
    .icon-list {
        background: #fff;
        font-size: 0;
        padding: 10px 0;
        .icon {
            font-size: 16px;
            display: inline-block;
            width: 20%;
            border-radius: 10px;
            a {
                text-decoration: none;
            }
            .circle {
                width: 50px;
                height: 50px;
                line-height: 50px;
                display: block;
                border-radius: 25px;
                background: #00ae66;
                color: #fff;
                margin: auto;
            }
            .name {
                color: #333;
            }
        }
    }
    .list-wrapper {
        margin: 10px 0;
        background: #fff;
        min-height: 80vh;
        .list {
            border-top: 1px solid #DDD8CE;
            padding: 20px 0;
            overflow: hidden;
            list-style: none;
            display: flex;

            .dealcard-img {
                width: 100px;
                height: 100px;
                padding: 0 10px;
                flex: 0 1 100px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .item-info {
                flex: 0 1 auto;
                text-align: left;
                font-size: 14px;
            }
        }
        .list:last-of-type {
            border-bottom: 1px solid #DDD8CE;
        }
    }
}
</style>

<template>
    <div class='main'>
        <ul class='icon-list'>
            <li class='icon' v-for='item in sites'>
                <a :href='item.url'>
                    <span class='circle'>☆
                    </span>
                    <span class='name'>{{item.name}}</span>
                </a>
            </li>
        </ul>
        <ul class='list-wrapper'>
            <li class='list' v-for='dish in dishList'>
                <div class='dealcard-img'>
                    <img :src="dish.imgUrl" alt=""></div>
                <div class='item-info'>
                    <div>{{dish.name}}</div>
                    <div>{{dish.detail}}</div>
                    <div>{{dish.price}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            sites: [
                {
                    name: 'vue',
                    url: '/vue',
                },
                {
                    name: 'react',
                    url: '/react',
                },
                {
                    name: '百度',
                    url: 'http://www.baidu.com',
                },
                {
                    name: '百度',
                    url: 'http://www.baidu.com',
                },
                {
                    name: '百度',
                    url: 'http://www.baidu.com',
                },
                {
                    name: '百度',
                    url: 'http://www.baidu.com',
                },
                {
                    name: '百度',
                    url: 'http://www/baidu.com',
                },
                {
                    name: '百度',
                    url: 'http://www/baidu.com',
                },
            ],
            dishList: [
                {
                    imgUrl: 'http://p1.meituan.net/200.0/deal/aa9de12e68c2b663e8a58a177758882b2199839.jpg',
                    name: '和府捞面',
                    detail: '[人民广场/南京路]晚市周末通用自助',
                    price: '58元'
                },
                {
                    imgUrl: 'http://p1.meituan.net/200.0/deal/aa9de12e68c2b663e8a58a177758882b2199839.jpg',
                    name: '和府捞面',
                    detail: '[人民广场/南京路]晚市周末通用自助',
                    price: '58元'
                },
            ]
        }
    }
}
</script>