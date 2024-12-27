import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import LoginComponent from '@/components/authentication/LoginComponent.vue'
import SignUpComponent from '@/components/authentication/SignUpComponent.vue'
import ProductDetail from '@/components/product/ProductDetail.vue'
import CartComponent from '@/components/cart/CartComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/signup',
      component: SignUpComponent
    },
    {
      path:'/login',
      component: LoginComponent,
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage,
    },
    {
      path:'/product/2',
      component: ProductDetail
    },
    {
      path:'/cart',
      component: CartComponent
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/header',
      name: 'header',
      component: HeaderComponent,
    }
  ],
})

export default router
