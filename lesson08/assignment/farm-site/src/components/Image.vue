<template>
  <div class="container">
     <div class="row">
          <!-- Image with text -->
              <div class="padding row">
                <img v-bind:src="resolve_img_url(source)" v-bind:alt="desc" v-bind:title="title" 
                     v-bind:class="{ 'border border-5' : bool}" v-on:click="toggle(this.bool)">
                    <div class="row box-1 bg-light">
                    <p class="font-italic">
                        {{message}}
                    </p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>

import clickToggle from '../mixins/clickToggle'

let test = "border border-5"
let bool = true

// Store page content
export default {
    mixins: [clickToggle],
    name: 'Image',
    data() {
      return {
        bool,
        test
      }
    },
    props: {
      source: {
        type: String,
        required: true, 
     },
        message: String,
        title: String,
        desc: String,
    },
    methods: {
      resolve_img_url: function (path) {
        let images = require.context('../assets/', false, /\.png$|\.jpg$/)
        return images("./"+path)
      },
      toggle2() {
        this.bool = !this.bool
        alert('Val of bool is ' + this.bool)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.padding {
  padding: 0px;
}

@import "../../scss/_base.normalize.scss";
@import "../../scss/_components.content.scss";
@import "../../scss/_settings.responsive.scss";
@import "../../scss/_settings.variables.scss";
@import "../../scss/style.scss";


</style>
