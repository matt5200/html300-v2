<template>
  <div class="container">
     <div class="row">
          <!-- Image with text -->
          <div class="col">
            <Image :source="'sky.jpg'" :message="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'" :title="'Beauty'" :desc="'Image of sky'"/>
            <Image :source="'sky.jpg'" :message="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'" :title="'Beauty'" :desc="'Image of sky'"/>
          </div>
      </div>
  </div>
</template>

<script>

import Image from '../components/Image.vue'

export default {
  name: 'App',
  components: {
    Image
  },
  paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
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
