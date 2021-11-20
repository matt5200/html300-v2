<template>
  <div class="container">
    <div class="m-3">
    <!-- Create two accordions each with a user story -->
    <div class="accordion" id="userStory">
        <div class="accordion-item"  v-for="content in user" v-bind:key="content">
          <h2 class="accordion-header" id="headingOne" >
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
        <div class="accordion-item" v-for="content in userTwo" v-bind:key="content">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              {{content.name}}
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#userStory">
            <div class="accordion-body">
                <strong>{{content.text}}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Button that when pressed displays an input text for -->
    <div class="m-3" v-if="show">
    <button type="button" name="button" v-on:click="show = !show"> Add Your Story</button>
    </div>
    <div class="accordion-item" v-else>
      <button type="button" name="button" v-on:click="show = !show"> Submit </button>
      <input type="text" id="lname" name="lname"><br><br>
      </div>
  </div>
</template>

<script>
// Store page content
export default {
    name: 'pageData',
    data () {
        return {
            user:[
              { name: 'Steve\'s story' , text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
              ],

              userTwo: [
              { name: 'Madison\'s story' , text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
              ],
              show: true,
        }
    }
}
</script>

<style lang="scss">

// Formatting for page content

button {
  text-align: center;
}

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
