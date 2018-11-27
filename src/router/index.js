import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import WeeklyAdd from '@/components/WeeklyAdd'
import Recipes from '@/components/Recipes'
import Coupons from '@/components/Coupons'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path: '/weeklyAdd',
      name: 'weeklyAdd',
      component: WeeklyAdd
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: Recipes
    },
    {
      path: '/coupons',
      name: 'coupons',
      component: Coupons
    }
  ],
  mode: 'history'
})
