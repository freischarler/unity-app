import { createRouter, createWebHistory } from 'vue-router'
import NoPageFound from '../modules/shared/views/NoPageFound.vue'

import unityRouter from '../modules/unity/router'

const routes = [
  {
    path: '/unity',
    ...unityRouter
  },
  {
    path: '/:pathMatch(.*)*',
    component:NoPageFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
