<template>
  <div class="columns wide-image">
    <div class="column is-12 has-text-centered image-background">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
}
</script>



<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.wide-image {
  margin: 50px 0px !important;
}

.image-background {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("~~static/images/CodeAvengers.jpg");
  background-position: center;
  background-size: cover;
  height: 500px;
  width: auto;

  display: flex;
  align-items: center;
}

.wide-image-content {
@include main-width("small");
}

.image-title {
  @include image-title;
}

.image-subtitle {
  @include image-subtitle;
}
</style>