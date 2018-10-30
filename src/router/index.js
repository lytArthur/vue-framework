import Vue from 'vue'
import Router from 'vue-router'
import setting from '../page/setting/index'
import login from '../page/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting
    }
  ]
})
