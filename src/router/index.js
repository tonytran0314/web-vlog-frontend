import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import VlogView from '@/views/VlogView.vue'
import CategoryView from '@/views/CategoryView.vue'

import DashboardView from '@/views/admin/DashboardView.vue'
import VlogManagementView from '@/views/admin/VlogManagementView.vue'
import AddVlogView from '@/views/admin/AddVlogView.vue'
import CategoryManagementView from '@/views/admin/CategoryManagementView.vue'

import NotFoundView from '@/views/NotFoundView.vue'

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
    component: HomeView 
  },
  { 
    path: '/vlog', 
    redirect: '/' 
  },
  { 
    path: '/vlog/:slug', 
    name: 'Vlog', 
    component: VlogView, 
    beforeEnter: validateSlug 
  },
  { 
    path: '/category/:slug?', 
    name: 'Category',
    component: CategoryView 
  },

  // refactor by nested
  { 
    path: '/admin',
    name: 'Dashboard',
    component: DashboardView 
  },
  { 
    path: '/admin/vlog',
    name: 'Vlog Management',
    component: VlogManagementView },
  { 
    path: '/admin/vlog/add',
    name: 'New Vlog',
    component: AddVlogView },
  { 
    path: '/admin/category',
    name: 'Category Management',
    component: CategoryManagementView },
  { 
    path: '/:pathName(.*)*', // the second * is for all routes even vlog/{wrong-slug}
    name: 'Not Found',
    component: NotFoundView 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to the top of the page when navigating to a new route
    return { top: 0 };
  },
})

export default router