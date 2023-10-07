import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Repository from '../views/Repository.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/repository',
    name: 'repository',
    component: Repository
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
