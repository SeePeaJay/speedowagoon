import Vue from 'vue'
import Router from 'vue-router'
import AuthLayout from '../components/auth/AuthLayout'
import AppLayout from '../components/admin/AppLayout'

Vue.use(Router)

const demoRoutes = []

export default new Router({
  mode: process.env.VUE_APP_ROUTER_MODE_HISTORY === 'true' ? 'history' : 'hash',
  routes: [
    ...demoRoutes,
    {
      path: '*',
      redirect: { name: 'dashboard' },
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          name: 'login',
          path: 'login',
          component: () => import('../components/auth/login/Login.vue'),
        },
        {
          path: '*',
          redirect: { name: 'login' },
        },
      ],
    },
    {
      name: 'Admin',
      path: '/admin',
      component: AppLayout,
      children: [
        {
          name: 'dashboard',
          path: 'dashboard',
          component: () => import('../components/dashboard/Dashboard.vue'),
          default: true,
        },
        {
          name: 'branches',
          path: 'branches',
          component: () => import('../components/Branches.vue'),
        },
        {
          name: 'vehicles',
          path: 'vehicles',
          component: () => import('../components/Vehicles.vue'),
        },
        {
          name: 'operators',
          path: 'operators',
          component: () => import('../components/Operators.vue'),
        },
        {
          name: 'reserved',
          path: 'reserved',
          component: () => import('../components/Reserved.vue'),
        },
        {
          name: 'deployed',
          path: 'deployed',
          component: () => import('../components/Deployed.vue'),
        },
        {
          name: 'returned',
          path: 'returned',
          component: () => import('../components/Returned.vue'),
        },
        {
          name: 'inoperable',
          path: 'inoperable',
          component: () => import('../components/Inoperable.vue'),
        },
      ],
    },
  ],
})
