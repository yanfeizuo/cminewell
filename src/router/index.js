import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('@/views/products/index.vue')
      },
      {
        path: 'brands',
        name: 'brands',
        component: () => import('@/views/brands/index.vue')
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('@/views/news/index.vue')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/about/index.vue')
      },
      {
        path: 'join',
        name: 'join',
        component: () => import('@/views/join/index.vue')
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
