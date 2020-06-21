<template>
  <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="https://img1.qunarzz.com/vs_ceph_vs_tts/e99dea65-0358-40a1-a5d5-b1b3adcad346.jpg_r_640x420x95_7de8778d.jpg" alt="">
      <div class="banner-info">
          <div class="banner-title">大连海世界(AAAA级景区)</div>
          <div class="banner-number"><span class="iconfont banner-icon">&#xe64a;</span>39</div>
          <common-gallary 
          :imgs="imgs"  
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
    data(){
        return {
            another:false,
            showGallary:false,
            imgs:[
                    "https://img1.qunarzz.com/vs_ceph_vs_tts/bbf53689-e13b-47b8-908a-e0a2b920c08e.jpg_r_1280x840x95_b52da99c.jpg",
                    "https://img1.qunarzz.com/p/tts0/1502/e0/cdd7caa2acba45.jpg_r_1280x840x95_06fa43f9.jpg" 
            ]
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