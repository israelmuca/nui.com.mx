<template>
  <div class="columns wide-image">
    <div class="column is-12 has-text-centered image-background" :style="backgroundImage">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["imageURL"],
  computed: {
    backgroundImage: function() {
      return `background-image: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url("${
        this.imageURL
      }");`
    }
  }
}
</script>



<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.wide-image {
  margin: 50px 0px !important;
}

.image-background {
  background-position: center;
  background-size: cover;
  height: 600px;
  width: auto;

  display: flex;
  align-items: center;
}

.image-title {
  @include image-title;
  @include main-width("small");
}
</style>