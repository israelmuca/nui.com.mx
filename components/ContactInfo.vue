<template>
  <div class="tile is-ancestor main-contact-info">
    <div class="tile is-4 is-vertical is-parent text-tiles">
      <div class="tile is-child text-tile first-tile">
        <h1 class="sections-title">
          <fa class="icons" :icon="fab.faWhatsapp" />
        </h1>
        <p class="sections-content">+52 1 81 1997 8229</p>
      </div>
      <div class="tile is-child text-tile">
        <h1 class="sections-title">
          <fa class="icons" :icon="fas.faAt" />
        </h1>
        <p class="sections-content">contacto@nui.com.mx</p>
      </div>
      <div class="tile is-child text-tile">
        <h1 class="sections-title">
          <fa class="icons" :icon="fas.faMapMarkerAlt" />
        </h1>
        <p class="sections-content">
          Lago Malar 32, int. 204
          <br />Cuauhtémoc Pensil, Miguel Hidalgo <br />CDMX, CP. 11490
        </p>
      </div>
    </div>
    <div class="tile is-7 is-parent">
      <Maps></Maps>
    </div>
  </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Maps from '~/components/complete/Map.vue'

export default {
  components: {
    Maps
  },
  computed: {
    fas() {
      return fas
    },
    fab() {
      return fab
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/main.scss';

.main-contact-info {
  margin-top: 200px !important;
  margin-bottom: 100px !important;
  margin-right: 0px !important;
  @include main-width('normal');

  @media (max-width: $breakpoint-sm) {
    margin-top: 50px !important;
    margin-bottom: 100px !important;
  }
}

.text-tiles {
  @media (max-width: $breakpoint-sm) {
    margin-bottom: 30px;
  }
}

.text-tile {
  text-align: center;
}

.tile.is-child.first-tile {
  margin-top: 1.5rem !important;
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
</style>
