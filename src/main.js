/*
入口JS文件
*/

import Vue from 'vue'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
// import ElementUI from 'element-ui'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import animate from 'animate.css'
import {WOW} from 'wowjs'
import axios from 'axios'
import Icon from 'vue2-svg-icon/Icon.vue'
import 'babel-polyfill'
import 'es6-promise/auto'


import jquery from 'jquery'
Vue.component('icon', Icon);

new WOW({live:false}).init()
Vue.use(animate)
Vue.use(ElementUI)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
  router
})
