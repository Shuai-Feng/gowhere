import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import fastClick from 'fastclick';
import 'styles/iconfont.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
fastClick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
