<template>
  <div class="section">
    <div class="columns">
      <div class="column has-text-centered">
        <h1 class="sections-title">Gallery</h1>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-4 is-parent">
        <div class="tile is-child image image1"></div>
      </div>
      <div class="tile is-3 is-vertical is-parent">
        <div class="tile is-child image image2"></div>
        <div class="tile is-child image image3"></div>
      </div>
      <div class="tile is-5 is-vertical is-parent">
        <div class="tile is-child image image4"></div>
        <div class="tile is-child image image5"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.section {
  margin-top: 50px;
}

.sections-title {
  @include sections-title;
}

.tile,
.is-vertical {
  margin: 0px;
  padding: 0px;
}

.image {
  background-position: center;
  background-size: cover;
}

.image1 {
  background-image: url("~~static/images/gallery/gallery11.jpg");
  min-height: 400px;
  max-height: 500px;
}

.image2 {
  background-image: url("~~static/images/gallery/gallery1.jpg");
  background-position: center;
}

.image3 {
  background-image: url("~~static/images/gallery/gallery3.jpg");
  background-position: bottom;
}

.image4 {
  background-image: url("~~static/images/gallery/gallery2.jpg");
  background-position: center;
}

.image5 {
  background-image: url("~~static/images/gallery/gallery4.jpg");
  background-position: center;
}
</style>
