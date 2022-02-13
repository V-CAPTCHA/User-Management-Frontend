import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/guide',
    name: 'Guide',
    component: () => import('../views/Guide.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register')
  },
  {
    path: '/recoverpassword',
    name: 'RecoverPassword',
    component: () => import('../views/RecoverPassword.vue')
  },
  {
    path: '/resetpassword/:token',
    name: 'ResetPassword',
    component: () => import('../views/ResetPassword.vue')
  },
  {
    path: '/dashboard',
    name: 'UserManagement',
    component: () => import('../views/UserManagement.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../views/Dashboard.vue')
      },
      {
        path: '/keymanagement',
        name: 'KeyManagement',
        component: () => import('../views/KeyManagement.vue')
      }
    ]
  },
  {
    path: '/editprofile',
    name: 'EditProfile',
    component: () => import('../views/EditProfile')
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: () => import('../views/PageNotFound')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
