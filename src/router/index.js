import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-s
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // route level code-s
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      // route level code-s
      component: () => import('../views/AdminView.vue')
    },
    {
      path: '/Historique',
      name: 'Historique',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HistoriqueView.vue')
    },
    {
      path: '/Operation',
      name: 'Operation',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/OperationView.vue')
    }
  ]
})

export default router
