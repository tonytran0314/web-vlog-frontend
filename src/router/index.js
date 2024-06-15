import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '/src/views/HomeView.vue'
import CategoryView from '/src/views/CategoryView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/category', component: CategoryView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router