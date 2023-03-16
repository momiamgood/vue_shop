import { createRouter, createWebHistory } from 'vue-router'
import AppRegister from '../views/Register.vue'
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: AppRegister
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
