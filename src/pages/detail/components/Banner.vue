<template>
  <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
          <div class="banner-title">大连海世界(AAAA级景区)</div>
          <div class="banner-number"><span class="iconfont banner-icon">&#xe64a;</span>39</div>
          <common-gallary 
          :imgs="bannerImgs"  
           v-if="another"
          @myclose="handleGallaryClose"
          ></common-gallary>
      </div>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary';
export default {
    name:"DetailBanner",
    props:{
        sightName:String,
        bannerImg:String,
        bannerImgs:[Array,String]
    },
    data(){
        return {
            showGallary:false,
            another:""
        }
    },
    methods:{
        handleBannerClick(){
            this.another = true
  
        },
        handleGallaryClose(){
            // 有趣了，直接关闭不行
            //  this.another = false
            
            let timer = setTimeout(() => {
                this.another = false
                console.log('关了它')
                clearTimeout(timer)
                console.log(timer)
            }, 10);
        }
    },
    components:{
        CommonGallary
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            display flex
            position absolute
            left 0 
            right 0
            bottom 0
            line-height .6rem
            color #fff
            background-img linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8))
            .banner-title
                flex 1
                font-size .32rem
                padding 0 .2rem 
            .banner-number
                padding .02rem .4rem
                height .4rem
                line-height .4rem  
                border-radius .2rem
                font-size .24rem
                background rgba(0,0,0,.8)
                .banner-icon
                    font-size .24rem
</style>