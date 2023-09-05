import { createRouter, createWebHistory, type RouteLocation, type RouteRecordRedirectOption } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/trending',
      name: 'trending',
      component: HomeView,
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: (to, from, next) => {
        next({name: 'trending'})
      }
    },
  ]
})

export default router
