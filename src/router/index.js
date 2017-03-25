import Vue from 'vue'
import Router from 'vue-router'
// import routes from './route.json'
import home from '../page/home'
// import home1 from '../page/home1'

Vue.use(Router)

const routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  component: home
}, {
  path: '/home1',
  component: resolve => require(['../page/home1.vue'], resolve)
}]

routes.push({path: '*', redirect: '/home'})

export default new Router({
  linkAcitveClass: 'active',
  mode: 'history',
  routes
})
