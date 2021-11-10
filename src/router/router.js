import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import HelloWord from '../components/HelloWorld.vue'
import homepage from '../components/homepage.vue'
import myRoom from '../components/homepage/myRoom.vue'
import news from '../components/homepage/news.vue'
import personData from '../components/homepage/personData.vue'
import personIndividuation from '../components/homepage/personIndividuation.vue'
import privacySetting from '../components/homepage/privacySetting.vue'
import loginPersonData from '../components/loginPersonData.vue'
import loginend from '../components/loginend.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/', name: 'login',
    component: login,
  },
  {
    path: '/loginend', name: 'loginend',
    component: loginend,
  },
  {
    path: '/loginPersonData', name: 'loginPersonData',
    component: loginPersonData,
  },
  {
    path: '/HelloWord',
    name: 'HelloWord',
    component: HelloWord,
    // redirect:'/HelloWord',
    // children:[
    //   {
    //     path:'/homepage',
    //     component:homepage
    //   },
    //   {
    //    path:'/homepage/myRoom',
    //    component:myRoom,
    //   },
    //   {
    //     path:'/homepage/news',
    //     component:news,
    //   },
    //   {
    //     path:'/homepage/personData',
    //     component:personData,
    //   },
    //   {
    //     path:'/homepage/personIndividuation',
    //     component:personIndividuation,
    //   },
    //   {
    //     path:'/homepage/privacySetting',
    //     component:privacySetting,
    //   },
    // ]
  }
]

const router = new VueRouter({
  routes
})

export default router
