import Vue from 'vue'
import Router from 'vue-router'
import Friend from '../components/friend/Friend'
import Login from '../components/Login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Friend',
      name: 'Friend',
      component: Friend
    },
  ]
})
