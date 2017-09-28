import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import MusicList from '@/components/MusicList'
import Nuxt from '@/components/Nuxt'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'MusicList',
      component: MusicList
    },
    {
      path: '/loupan',
      name: 'Nuxt',
      component: Nuxt
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
