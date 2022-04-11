import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    props: true
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    props: true
  },
  {
    path: '/more',
    name: 'more',
   // meta: {layout: 'mainl'},
    component: () => import(/* webpackChunkName: "about" */'../views/More.vue'),
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
