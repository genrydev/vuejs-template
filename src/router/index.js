import { createRouter, createWebHistory, RouterView } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Tr from '@/i18n/translation'
import useAuthStore from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/:locale?',
      component: RouterView,
      beforeEnter: Tr.routeMiddleware,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
          meta: { requiresAuth: false }
        },
        {
          path: 'user',
          children: [
            {
              path: '',
              component: () => import('../views/User/LoginView.vue'),
              meta: { requiresAuth: false }
            },
            {
              path: 'login',
              name: 'login',
              component: () => import('../views/User/LoginView.vue'),
              meta: { requiresAuth: false }
            },
            {
              path: 'register',
              name: 'register',
              component: () => import('../views/User/RegisterView.vue'),
              meta: { requiresAuth: false }
            },
            {
              path: 'forgotpassword',
              name: 'forgotpassword',
              component: () => import('../views/User/ForgotPasswordView.vue'),
              meta: { requiresAuth: false }
            }
          ]
        },
        {
          path: 'app',
          name: 'app',
          component: () => import('../views/AppView.vue'),
          meta: { requiresAuth: true }
        }
      ]
    }
  ]
})

router.beforeEach(async (to, from) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isLoggedIn && to.name !== 'login') {
    return { name: 'login' }
  }

  if (authStore.isLoggedIn && to.name === 'login') {
    return { name: 'app' }
  }
})

export default router
