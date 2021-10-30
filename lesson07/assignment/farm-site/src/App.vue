<template>
<div>
  <div class="container">
    <!-- Header -->
    <div class="row header">
        <div class="col">
         <i class="fa fa-tractor"></i>
        </div>
        Blissful Farms
        <div class="col text-end">
            <i class="fa fa-tractor"></i>
        </div>
    </div>
  </div>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="navbar">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
          <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
          <router-link to="/Blog">Blog</router-link>
          </li>
          <li class="nav-item">
          <router-link to="/Testimonials">Testimonials</router-link>
          </li>
          <li class="nav-item">
          <router-link to="/About">About</router-link>
          </li>
        </ul>
      </div>
  </nav>
  <router-view/>
</div>
</template>

<script>

</script>

<style lang="scss">

$fa-font-path: "~@fortawesome/fontawesome-free/webfonts";
@import "~@fortawesome/fontawesome-free/scss/fontawesome";
@import "~@fortawesome/fontawesome-free/scss/solid"; // fas
@import "~@fortawesome/fontawesome-free/scss/regular"; // far
@import "~@fortawesome/fontawesome-free/scss/brands"; // fab

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
