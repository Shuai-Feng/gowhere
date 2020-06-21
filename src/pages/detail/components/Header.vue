<template>
  <div>
      <router-link
       tag="div" 
       to="/"  
       class="header-abs"
       v-show="showAbs"
       >
        <div class="iconfont header-back">&#xe624;</div>
      </router-link>

      <div class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
      >
          <router-link tag="div" to="/">
           <div class="iconfont header-fixed-back">&#xe624;</div>
          </router-link>
          景点详情
      </div>
  </div>
</template>

<script>
export default {
    name:"DetailBanner",
    data(){
        return {
            showAbs:true,
            opacityStyle:{
                opacity:1
            }
        }
    },
    methods:{
        handleScroll(){
            const top = document.documentElement.scrollTop;
            if(top>100){
                let opacity = top/140
                opacity = opacity >1 ?1:opacity
                this.opacityStyle = { opacity }
                this.showAbs = false
            }else{
   
                this.showAbs = true 
            }
        }
    },
    activated (){
        window.addEventListener('scroll',this.handleScroll)
    },
    deactivated(){
        window.removeEventListener('scroll',this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .header-abs
        position absolute;
        left .2rem
        top .2rem
        width .8rem
        height .8rem
        border-radius  .4rem
        background rgba(0,0,0,.8)
        .header-back
            color:#fff
            position absolute;
            top 50%
            left 50%
            transform translate(-50%,-50%)
    .header-fixed
        position fixed
        top 0
        left 0
        right 0
        // overflow hidden
        height $headerHeight
        line-height $headerHeight
        text-align center
        color #fff
        background $bgColor
        font-size .32rem
        .header-fixed-back
            position absolute
            top 0
            left 0
            width .64rem
            text-align center
            font-size .32rem
            color #fff
        
</style>