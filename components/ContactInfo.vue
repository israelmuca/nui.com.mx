<template>
  <div class="tile is-ancestor main-contact-info">
    <div class="tile is-4 is-vertical is-parent text-tiles">
      <div class="tile is-child text-tile-one"></div>
      <div class="tile is-child text-tile">
        <h1 class="sections-title">Contáctanos</h1>
        <p class="sections-content">
          Call 01 (+81) 8000 7159
          <br>Email contacto@nui.com.mx
        </p>
      </div>
      <div class="tile is-child text-tile">
        <h1 class="sections-title">Visítanos</h1>
        <p class="sections-content">
          Ricardo Margain 575
          <br>Edificio C Int. 100
          <br>Col. Santa Engracia
          <br>S.P.G.G., N.L.
          <br>C.P. 66267
        </p>
      </div>
    </div>
    <div class="tile is-8 is-parent">
      <div class="tile is-child map-image">
        <Maps></Maps>
      </div>
    </div>
  </div>
</template>

<script>
import Maps from "~/components/complete/Maps.vue"
export default {
  components: {
    Maps
  }
}
</script>


<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.main-contact-info {
  margin-top: 200px !important;
  margin-bottom: 100px !important;
  margin-right: 0px !important;
  @include main-width("normal");

  @media (max-width: $breakpoint-sm) {
    margin-top: 100px !important;
    margin-bottom: 100px !important;
  }
}

.text-tiles {
  @media (max-width: $breakpoint-sm) {
    margin-bottom: 30px;
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
  min-height: 600px;
}
</style>
