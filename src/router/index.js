import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import TaskView from '../views/TaskView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/task',
      name: 'task',
      component: TaskView
    },
  ]
})

export default router
