<template>
    <div>
        <home-header :city="city"></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekends :list="weekendList"></home-weekends>
    </div>
</template>

<script>
    import axios from 'axios';
    import HomeHeader from './components/Header';
    import HomeSwiper from './components/Swiper';
    import HomeIcons from './components/Icons';
    import HomeRecommend from './components/Recommend';
    import HomeWeekends from './components/Weekends';
    export default {
        name:'Home',
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeRecommend,
            HomeWeekends
        },
        data(){
            return {
                city:"",
                swiperList:[],
                iconList:[],
                recommendList:[],
                weekendList:[]
            }
        },
        methods:{
            getHomeInfo(){
                axios.get('/mock/index.json').then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc(res){
                res = res.data
                if(res.ret && res.data){
                    this.city = res.data.city
                    this.swiperList = res.data.swiperList
                    this.iconList = res.data.iconList
                    this.recommendList = res.data.recommendList
                    this.weekendList = res.data.weekendList
                }
            }
        },
        mounted(){
            this.getHomeInfo();
        }
    }
</script>

<style lang="stylus" scoped>
    
</style>