import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('../views/tabbar/home/Home')
const Category = () => import('../views/tabbar/category/Category')
const ShoppingCart = () => import('../views/tabbar/shoppingcart/ShoppingCart')
const Profile = () => import('../views/tabbar/profile/Profile')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shoppingcart',
    component: ShoppingCart
  },
  {
    path: '/profile',
    component: Profile
  },

  ]

const router = new Router({
  mode: 'history',
  routes
})

export default router
