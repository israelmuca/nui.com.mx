<template>
  <section class="columns wide-image">
    <div class="column is-12 has-text-centered image-background">
      <slot></slot>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.wide-image {
  margin: 50px 0px !important;

  // These classes are set in the page.vue that sends them in the slot
  .wide-image-content {
    @include main-width("small");
  }
  // Set the font options for the title and subtitle
  .image-title {
    @include image-title;
  }
  .image-subtitle {
    @include image-subtitle;
  }
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
</style>