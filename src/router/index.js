import { createRouter, createWebHistory } from 'vue-router'
import AppRegister from '../views/Register.vue'
import HomeView from "@/views/HomeView.vue";
import AppLogin from "@/views/Login.vue";
import CatalogView from "@/views/CatalogView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'app-register',
    component: AppRegister
  },
  {
    path: '/login',
    name: 'app-login',
    component: AppLogin
  },
  {
    path: '/catalog',
    name: 'app-catalog',
    component: CatalogView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
