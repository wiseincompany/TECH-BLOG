import { createRouter, createWebHistory } from 'vue-router';
import BlogHome from '../views/BlogHome.vue';
import Post_01 from '../components/2023/Post_01.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: BlogHome,
  },
  {
    path: '/01',
    name: '01',
    component: Post_01,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
