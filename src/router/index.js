/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home'
import Coop from '../pages/Coop/Coop'
import About from '../pages/About/About'
import News from '../pages/News/News'
import Recruit from '../pages/Recruit/Recruit'
import shownews from '../pages/shownews/shownews'

//使用插件
Vue.use(VueRouter)
export default new VueRouter({
  //所有路由
  // mode:'history',
  routes:[
    {
      path: '/home',
      component:Home,
    },
    {
      path:'/coop',
      component:Coop,
    },
    {
      path:'/about',
      component:About,
    },
    {
      path:'/news',
      name:'news',
      component:News,
    },
    {
      path:'/recruit',
      component:Recruit,
    },
    {
      path:'/',
      component:Home,
    },
    {
      path:'/newsinfo/:id',
      name:'shownews',
      component:shownews,
    },
  ]
})
