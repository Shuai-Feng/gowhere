<template>
  <div>
      <ul class="list">
          <li class="item">A</li>
          <li class="item">A</li>
          <li class="item">A</li>
          <li class="item">A</li>
          <li class="item">A</li>
      </ul>
  </div>
</template>

<script>
export default {
    name:"CityAlphabet"
}
</script>


<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .list
        display flex
        justify-content center
        flex-direction column

        position absolute
        top 1.58rem
        right 0
        bottom 0
        width .4rem
        .item
            line-height .44rem
            text-align center
            color $bgColor
</style>