import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City';
import Detail from '@/pages/detail/Detail';
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: City
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },{
    scrollBehavior(to,from,savedPosition){
      console.log(to,from,savedPosition)
      return {x:0,y:0}
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
