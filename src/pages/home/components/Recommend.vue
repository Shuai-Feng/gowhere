<template>
  <div>
      <div class="title">
          热销推荐
      </div>
      <ul>
          <li class="item border-bottom" v-for="(item,index) of recommendList" :key="index">
              <div class="item-img-wrapper">
                  <img class="item-img" :src="item.imgUrl">
              </div> 
              <div class="item-info">
                  <p class="item-title">{{item.title}}</p>
                  <p class="item-desc">{{item.desc}}</p>
                  <button class="item-button">查看详情</button>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:"HomeRecommend",
    data(){
        return {
            recommendList:[
                {
                id:'0001',
                imgUrl:'https://img1.qunarzz.com/travel/d0/1807/8c/41d39769a11258b5.jpg_r_216x216x70_48c5d7b7.jpg',
                title:'泸沽湖',
                desc:"东方女儿国，高原上青山环绕的蔚蓝湖泊，景色瑰丽质朴。"
                },{
                id:'0002',
                imgUrl:'https://img1.qunarzz.com/travel/d0/1807/8c/41d39769a11258b5.jpg_r_216x216x70_48c5d7b7.jpg',
                title:'泸沽湖',
                desc:"东方女儿国，高原上青山环绕的蔚蓝湖泊，景色瑰丽质朴。"
                },{
                id:'0003',
                imgUrl:'https://img1.qunarzz.com/travel/d0/1807/8c/41d39769a11258b5.jpg_r_216x216x70_48c5d7b7.jpg',
                title:'泸沽湖',
                desc:"东方女儿国，高原上青山环绕的蔚蓝湖泊，景色瑰丽质朴。"
                },
            ]
        }
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
    .item
        overflow hidden
        display flex
        height 1.9rem
     
        .item-img
            width:1.7rem
            height:1.7rem
            padding .1rem
        .item-info
            flex:1
            padding .1em
            min-width 0
            .item-title
                line-height .54rem
                font-size .32rem
                ellipsis()
            .item-desc
                line-height .4rem
                ellipsis()
                color #ccc  
            .item-button
                margin-top .2rem
                background #ff9300
                padding 0 .1rem
                border-radius .06rem
                color #fff
                
</style>