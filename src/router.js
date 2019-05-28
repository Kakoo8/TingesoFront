import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Delete from './views/Delete.vue'
import Manual from './views/Manual.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/delete',
      name: 'delete',
      component: Delete
    },
    {
      path: '/manual',
      name: 'manual',
      component: Manual
    },
  ]
})