<template>
    <div class="header">
        <city-header></city-header>
        <city-search   :cities="city"></city-search>
        <city-list
        :cities="city"
        :hot="hotCities"
        :letter="letter"
        ></city-list>
        <city-alpabate
        @change="handleLetterChange"
        :cities="city"></city-alpabate>
    </div>
</template>

<script>
import axios from 'axios';
import CityHeader from './components/Header';
import CitySearch from './components/Search';
import CityList from './components/List';
import CityAlpabate from './components/Alpabate';
export default {
    name:'City',
    data(){
        return {
            city:{},
            hotCities:{},
            letter:''
        }
    },
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlpabate
    },
    methods:{
        getCityInfo(){
            axios.get('/mock/city.json').then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc(res){
            res = res.data;
            if(res.ret && res.data){
                const data = res.data
                this.city = data.cities
                this.hotCities = data.hotCities
            }
        },
        handleLetterChange(letter){
             this.letter = letter;
        }
    },
    mounted(){
        this.getCityInfo();
    }
}
</script>

<style lang='stylus' scoped>

</style>