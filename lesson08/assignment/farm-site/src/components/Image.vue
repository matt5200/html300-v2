<template>
  <div class="container">
     <div class="row">
          <!-- Image with text -->
              <div class="row m-3">
                <img v-bind:src="resolve_img_url(source)"  v-bind:alt="desc" v-bind:title="title" class="img-fluid">
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

// Store page content
export default {
    name: 'Image',
    props: {source: String,
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
  //  image: require(this.source)
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

@import "../../scss/_base.normalize.scss";
@import "../../scss/_components.content.scss";
@import "../../scss/_settings.responsive.scss";
@import "../../scss/_settings.variables.scss";
@import "../../scss/style.scss";


</style>
