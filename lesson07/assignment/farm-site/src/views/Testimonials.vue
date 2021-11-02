<template>
  <div class="container">
    <div class="m-3">
    <!-- Create two accordions each with a user story -->
    <div class="accordion" id="userStory">
        <div class="accordion-item"  v-for="content in items" v-bind:key="content">
          <h2 class="accordion-header" :id="content.heading" >
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" data-toggle="tooltip" data-placement="top" title="Click to view">
              {{content.name}}
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" :aria-labelledby="content.heading" data-bs-parent="#userStory">
            <div class="accordion-body">
              <strong>{{content.text}}}</strong>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              Madison's story
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#userStory">
            <div class="accordion-body">
                <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</strong>
            </div>
          </div>
        </div>
    </div>
    </div>
        <!-- Footer -->
        <div class="row bg-light text-center">
        © 2018 Blissful Farms, LLC | Seattle, WA
    </div>
  </div>
</template>

<script>

export default {
    name: 'pageData',
    data () {
        return {
            items:[
              { name: 'Steve\'s story' , text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', heading: 'headingOne'},
              { name: 'Madison\'s story' , text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', heading: 'headingTwo'}
              ],
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
