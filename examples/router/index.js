import VueRouter from 'vue-router'
import Vue from 'vue'
import MenuRoutes from './loadRoutes'

Vue.use(VueRouter)
const routes = [{
  path: '/',
  name: 'Home',
  component: () => import('@/views/layout/index.vue'),
  redirect: MenuRoutes.length ? MenuRoutes[0].path : '/404'
},
{
  path: '/404',
  name: 'NotFound',
  component: () => import('@/views/notFound/NotFound.vue')
},
{
  path: '*',
  redirect: '/404'
}

]
const router = new VueRouter({
  routes
})

MenuRoutes.forEach(route => {
  router.addRoute('Home', route)
})

export default router
