<template>
    <div class="wrapper">
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name:'HomeSwiper',
        data(){
            return {
                swiperOptions:{
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    loop:true
                },
                swiperList:[
                    {
                        id:"0001",
                        imgUrl:"https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/7d9b233c71cad13ded0013f9c9cec635.jpg"
                    },
                        {
                        id:"0002",
                        imgUrl:"https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/fd16ccffb2e2376ff370bda3bebebd71.jpg"
                    }
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background:#fff
    .wrapper
        overflow hidden
        width 100%
        height 0
        padding-bottom 31.25%
        background #eee
        .swiper-img
            height 120px
            width:100%
</style>