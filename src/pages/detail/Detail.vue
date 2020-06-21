<template>
    <div>
        <detail-banner/>
        <detail-header/>
    </div>
</template>

<script>
import DetailBanner from './components/Banner';
import DetailHeader from './components/Header';
export default {
    name:'Detail',
    components:{
        DetailBanner,
        DetailHeader
    }
}
</script>

<style  lang="stylus" scope >

</style>