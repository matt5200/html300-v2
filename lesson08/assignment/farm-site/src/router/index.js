import { createRouter, createWebHistory } from 'vue-router'


import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Testimonials from '../views/Testimonials.vue'
import About from '../views/About.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/Testimonials',
    name: 'Testimonials',
    component: Testimonials
  },
  {
    path: '/About',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

