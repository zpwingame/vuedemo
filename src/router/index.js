import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import MusicList from '@/components/MusicList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/list',
      name: 'MusicList',
      component: MusicList
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
