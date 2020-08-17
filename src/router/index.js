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
      }
      //  	{
      //  		path: '(.*)?',
      // 			name: 'Not-Found',
      // 			component: () => import('@/views/not-found.vue')
      //  	}
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
