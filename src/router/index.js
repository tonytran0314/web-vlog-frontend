import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '/src/views/HomeView.vue'
import VlogView from '/src/views/VlogView.vue'
import CategoryView from '/src/views/CategoryView.vue'

import DashboardView from '/src/views/admin/DashboardView.vue'
import VlogManagementView from '/src/views/admin/VlogManagementView.vue'
import AddVlogView from '/src/views/admin/AddVlogView.vue'
import CategoryManagementView from '/src/views/admin/CategoryManagementView.vue'

import NotFoundView from '/src/views/NotFoundView.vue'

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
    path: '/:pathName(.*)',
    name: '404 Page',
    component: NotFoundView 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router