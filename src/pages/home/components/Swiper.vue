<template>
    <div class="wrapper">
        <swiper ref="mySwiper" :options="swiperOptions" v-if="showSwiper">  
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name:'HomeSwiper',
        props:{
            list:Array
        },
        data(){
            return {
                swiperOptions:{
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    loop:true
                }
                // swiperList:[
                //     {
                //         id:"0001",
                //         imgUrl:"https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/7d9b233c71cad13ded0013f9c9cec635.jpg"
                //     },
                //         {
                //         id:"0002",
                //         imgUrl:"https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/fd16ccffb2e2376ff370bda3bebebd71.jpg"
                //     }
                // ]
            }
        },
        computed:{
            showSwiper(){
                return this.list.length
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
        padding-bottom 29.25%
        background #eee
        .swiper-img
            height 120px
            width:100%
</style>