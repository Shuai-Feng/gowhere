<template>
    <div class="header">
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
        <city-alpabate></city-alpabate>
    </div>
</template>

<script>
import CityHeader from './components/Header';
import CitySearch from './components/Search';
import CityList from './components/List';
import CityAlpabate from './components/Alpabate';
export default {
    name:'City',
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlpabate
    }
}
</script>

<style lang='stylus' scoped>

</style>