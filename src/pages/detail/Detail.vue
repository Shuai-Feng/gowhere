<template>
    <div>
        <detail-banner/>
        <detail-header/>
        <div class="cotent">
            <detail-list  :list="list"/>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner';
import DetailHeader from './components/Header';
import DetailList from './components/List';
export default {
    name:'Detail',
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data(){
        return {
            list:[{
                title:'成人票',
                children:[{
                    title:"成人三馆连票"
                },{
                    title:"成人五馆连票",
                    children:[{
                        title:"五连体育馆"
                    },{
                        title:"五连美术馆"
                    },{
                        title:"五连音乐馆"
                    }]
                }]
            },{
                title:'儿童票'
            },{
                title:'学生票'
            },{
                title:'特惠票'
            }]
        }
    }
}
</script>

<style  lang="stylus" scoped >

</style>