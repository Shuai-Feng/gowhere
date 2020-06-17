<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for=" count in 10" :key='count'>
                        <div class="button">芜湖</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for=" count in 20" :key='count'>
                        <div class="button">芜湖</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-topbottom">阿拉尔</div>
                    <div class="item border-topbottom">阿拉尔</div>
                    <div class="item border-topbottom">阿拉尔</div>
                    <div class="item border-topbottom">阿拉尔</div>
                    <div class="item border-topbottom">阿拉尔</div>
                    <div class="item border-topbottom">阿拉尔</div>
                    <div class="item border-topbottom">阿拉尔</div>
                    <div class="item border-topbottom">阿拉尔</div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-topbottom">阿拉尔</div>
                    <div class="item border-topbottom">阿拉尔</div>
                    <div class="item border-topbottom">阿拉尔</div>
                    <div class="item border-topbottom">阿拉尔</div>
                    <div class="item border-topbottom">阿拉尔</div>
                    <div class="item border-topbottom">阿拉尔</div>
                    <div class="item border-topbottom">阿拉尔</div>
                    <div class="item border-topbottom">阿拉尔</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll';
    export default {
        name:"CityList",
        mounted(){
            this.scroll = new BScroll(this.$refs.wrapper)
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .border-topbottom
     &:before
        border-color #777
     &:after
        border-color #777
    .list
        position absolute
        top 1.48rem
        left 0
        right 0
        bottom 0
        overflow hidden
        .title 
            line-height .4rem
            background #EEE
            padding-left .2rem  
            color #666
            font-size .26rem
        .button-list
            overflow hidden
            padding .1rem
            .button-wrapper
                float left
                width 33.33%
                .button
                    padding .1rem 0
                    margin .1rem
                    text-align center
                    border .02rem solid #ccc
                    border-radius .06rem
        .item-list
            .item
                line-height .54rem
                color #666
                padding .08rem .2rem 
</style>