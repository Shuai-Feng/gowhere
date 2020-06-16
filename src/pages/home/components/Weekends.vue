<template>
  <div>
      <div class="title">
          周末去哪?  
      </div>
      <ul>
          <li class="item border-bottom" v-for="(item,index) of list" :key="index">
              <div class="item-img-wrapper">
                  <img class="item-img" :src="item.imgUrl">
              </div> 
              <div class="item-info">
                  <p class="item-title">{{item.title}}</p>
                  <p class="item-desc">{{item.desc}}</p> 
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:"Weekends",
    props:{
        list:Array
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl';
    .title
        margin-top .2rem
        line-height .8rem
        background #ccc
        text-indent .2rem
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 33.9%
        .item-img
            width 100%
    .item-info
        padding .1em
        .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            ellipsis()
            color #ccc  
            
</style>