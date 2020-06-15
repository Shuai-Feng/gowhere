<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page,index) of pages" v-bind:key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt=""/>
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name:"HomeIcons",
        data(){
            return {
                iconList:[
                {
                    id:'00001',
                    imgUrl:"https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",
                    desc:"景点门票"
                },{
                    id:'00002',
                    imgUrl:"https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png",
                    desc:"飞机票"
                },{
                    id:'00003',
                    imgUrl:"https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png",
                    desc:"公交车票"
                },{
                    id:'00004',
                    imgUrl:"https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png",
                    desc:"绿色车票"
                },{
                    id:'00005',
                    imgUrl:"https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png",
                    desc:"黄色盒子"
                },{
                    id:'00006',
                    imgUrl:"https://picbed.qunarzz.com/f6bb08a239ce1b038204120a8d1e4669.png",
                    desc:"特湖酒店"
                },{
                    id:'00007',
                    imgUrl:"https://picbed.qunarzz.com/3a08f360e958ccb2b947049387873ace.png",
                    desc:"黄色盒子"
                },{
                    id:'00008',
                    imgUrl:"https://picbed.qunarzz.com/19b4f6d2fabd617789fa5aad65b249da.png",
                    desc:"黄色盒子"
                },{
                    id:'00009',
                    imgUrl:"https://picbed.qunarzz.com/25e3b9f17a21a6e0113c57a23ffccde4.png",
                    desc:"看日落"
                },{
                    id:'00010',
                    imgUrl:"https://picbed.qunarzz.com/1e107321f5396ea4994cd832232ecf8a.png",
                    desc:"垃圾袋"
                },{
                    id:'00011',
                    imgUrl:"https://picbed.qunarzz.com/83af731055e121a3251690b225327b56.png ",
                    desc:"二手车"
                }
                ]
            }
        },
        computed:   {
            pages(){
                const pages = [];
                this.iconList.forEach((item,index)=>{
                    const page = Math.floor(index/8)
                    if(!pages[page]){
                        pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages 
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    @import '~styles/mixins.styl';
    .icons
        overflow hidden
        height 0 
        padding-bottom 50%
        .icon 
            position relative
            overflow hidden
            float left
            width 25%
            height 0
            padding-bottom 25%
            .icon-img
                position absolute
                top 0 
                bottom .44rem
                right 0
                left 0
                padding .1rem
                box-sizing content-box
                .icon-img-content
                    width 50px
                    height  100%
                    display block
                    margin 0 auto
            .icon-desc
                position absolute
                left 0
                right 0
                bottom 0
                height .44rem
                line-height .44rem
                text-align center
                color $darkTextColor
                ellipsis()

</style>