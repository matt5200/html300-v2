<template>
  <div>
  <About msg="About page"/>
  <Testimonials msg="Testimonials page"/>
  </div>
</template>

<script>
import Testimonials from './components/Testimonials.vue'
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    Testimonials, 
    About
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
