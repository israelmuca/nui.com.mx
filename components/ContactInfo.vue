<template>
  <div class="tile is-ancestor main-contact-info">
    <div class="tile is-4 is-vertical is-parent">
      <div class="tile is-child text-tile-one"></div>
      <div class="tile is-child text-tile">
        <h1 class="sections-title">Contact Us</h1>
        <p class="sections-content">
          Call 8333 3333
          <br>Email contacto@nui.com.mx
        </p>
      </div>
      <div class="tile is-child text-tile">
        <h1 class="sections-title">Visit Us</h1>
        <p class="sections-content">
          Av. Ricardo Margain Zozaya 575
          <br>SPGG, N.L.
          <br>C.P. 66273, México
        </p>
      </div>
    </div>
    <div class="tile is-8 is-parent">
      <div class="tile is-child map-image"></div>
    </div>
  </div>
</template>


<script>
export default {}
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.main-contact-info {
  margin-top: 200px !important;
  margin-bottom: 100px !important;
  margin-right: 0px !important;
  @include main-width("normal");
}
@media (max-width: $breakpoint-sm) {
  .main-contact-info {
    margin-top: 100px !important;
    margin-bottom: 100px !important;
  }
}

.text-tile-one {
    max-height: 100px;
}

.sections-title {
  @include sections-title;
  text-transform: uppercase;
}

.sections-content {
  @include sections-content;
}

.map-image {
  background-image: url("~~static/images/map.png");
  background-position: center;
  min-height: 600px;
  background-repeat-x: no-repeat;
  background-repeat-y: no-repeat;
}
</style>
