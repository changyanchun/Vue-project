import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './vuex/store'

import Header from './components/Header/Header.vue'
//注册全局组件
Vue.component('Header', Header)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  //注册路由器
  router,
  //注册Vuex
  store
})
