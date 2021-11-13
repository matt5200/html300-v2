<template class="container">
  <div class="row">
      <!-- Create two rows in column -->
      <div class="col mt-3">
          <div class="row box-1 bg-light m-3" v-for="msg in text" v-bind:key="msg">
              <p>
                  {{msg}}
              </p>
          </div>
      </div>
      <div class="col">
          <!-- Create one row -->
          <div class="row m-3">
              <div class="row box-1 bg-light m-3">
                  <p  v-for="msg in text" v-bind:key="msg">
                     {{msg}}
                  </p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
// Store page content
export default {
    name: 'pageData',
    data () {
        return {
            text: [ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

             'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.']
        }
    }
}
</script>
