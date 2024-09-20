import { createWebHistory, createRouter } from 'vue-router'

import HomeView               from '@/views/HomeView.vue'
import VlogView               from '@/views/VlogView.vue'
import CategoryView           from '@/views/CategoryView.vue'
import NotFoundView           from '@/views/NotFoundView.vue'
import DashboardView          from '@/views/admin/DashboardView.vue'
import VlogManagementView     from '@/views/admin/VlogManagementView.vue'
import AuthenticationView     from '@/views/admin/AuthenticationView.vue'
import CategoryManagementView from '@/views/admin/CategoryManagementView.vue'

import { useAuthStore }       from '@/stores/auth.js'

const validateSlug = (to, from, next) => {
  const slug = to.params.slug
  
  // Check if slug exists and matches the required pattern
  if (slug && /^[a-zA-Z0-9-]+$/.test(slug)) {
    next() // Proceed to the route
  } else {
    next({ name: 'Home' }) // Redirect to Home if validation fails
  }
}

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: HomeView },
  { 
    path: '/vlog', 
    redirect: '/' },
  { 
    path: '/vlog/:slug', 
    name: 'Vlog', 
    component: VlogView, 
    beforeEnter: validateSlug },
  { 
    path: '/category/:slug?', 
    name: 'Category',
    component: CategoryView },

  { 
    path: '/login',
    name: 'Authentication',
    component: AuthenticationView },

  
  // refactor by nested
  { 
    path: '/admin',
    name: 'Dashboard',
    component: DashboardView,
    meta: { requiresAuth: true } },
  { 
    path: '/admin/vlog',
    name: 'Vlog Management',
    component: VlogManagementView,
    meta: { requiresAuth: true } },
  { 
    path: '/admin/category',
    name: 'Category Management',
    component: CategoryManagementView,
    meta: { requiresAuth: true } },


  { 
    path: '/:pathName(.*)*', // the second * is for all routes even vlog/{wrong-slug}
    name: 'Not Found',
    component: NotFoundView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to the top of the page when navigating to a new route
    return { top: 0 }
  },
})

router.beforeEach(async (to, from, next) => {
  const auth = useAuthStore()

  if (to.meta.requiresAuth) {
    const isTokenValid = await auth.validateToken()

    if (!isTokenValid) {
      return next({ name: 'Authentication' })
    }
  }

  next()
})

export default router