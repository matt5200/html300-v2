<template>
  <div class="container">
     <div class="row">
          <!-- Image with text -->
              <div class="padding row">
                <img v-bind:src="resolve_img_url(source)" v-bind:alt="desc" v-bind:title="title"     v-bind:class="toggle()" @click="toggle()">
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

// Store page content
export default {
    mixins: [clickToggle],
    test: 'border border-danger border-5',
    name: 'Image',
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
