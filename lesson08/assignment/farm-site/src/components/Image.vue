<template>
  <div class="container">
     <div class="row">
          <!-- Image with text -->
              <div class="row m-3">
                <img v-bind:alt="desc" v-bind:title="title" v-bind:src="source" class="img-fluid">
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
