import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router'

createApp(App).use(router).mount('#app')

// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Home from 'components/Home.vue'
// import Blog from 'components/Blog.vue'
// import Testimonials from 'components/Testimonials.vue'
// import About from 'components/About.vue'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/Blog',
//     name: 'Blog',
//     component: Blog
//   },
//   {
//     path: '/Testimoials',
//     name: 'Testimoials',
//     component: Testimonials
//   },
//   {
//     path: '/About',
//     name: 'About',
//     component: About
//   },
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router