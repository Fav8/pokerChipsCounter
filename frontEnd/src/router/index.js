import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Game from '../views/Game.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/game',
    name: 'game',
    component: Game
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
