import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import Help from '../views/help.vue';
import tableComponent from '../views/tableComponent.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component:AboutView
    },
    {
        path: '/help',
        name: 'help',
        component: Help
      },
      {
        path:'/table',
        name:'table',
        component:tableComponent
  }
]
})

export default router
