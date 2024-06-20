import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '/src/views/HomeView.vue'
import CategoryView from '/src/views/CategoryView.vue'
import DashboardView from '/src/views/admin/DashboardView.vue'
import VlogManagementView from '/src/views/admin/VlogManagementView.vue'
import AddVlogView from '/src/views/admin/AddVlogView.vue'
import CategoryManagementView from '/src/views/admin/CategoryManagementView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/category', component: CategoryView },
  { path: '/admin', component: DashboardView },
  { path: '/admin/vlog', component: VlogManagementView },
  { path: '/admin/vlog/add', component: AddVlogView },
  { path: '/admin/category', component: CategoryManagementView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router