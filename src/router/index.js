// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import DashBoard from '@/components/OpeningPage.vue';

const routes = [
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: DashBoard
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
