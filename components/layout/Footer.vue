<template>
  <footer class="footer">
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <nuxt-link to="/">
            <img class="nui-logo" src="~static/logos/nui-logo.svg" />
          </nuxt-link>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <p class="footer-content">
            Lago Malar 32, int. 204
            <br />Cuauhtémoc Pensil, Miguel Hidalgo <br />CDMX, CP. 11490
            <br />
            <br /><fa class="icons" :icon="fab.faWhatsapp" /> +52 1 81 1997 8229
            <br />
            <br />contacto@nui.com.mx
          </p>
        </div>
      </div>
    </nav>
  </footer>
</template>

<script>
import { fab } from '@fortawesome/free-brands-svg-icons'

export default {
  computed: {
    fab() {
      return fab
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/main.scss';

.footer {
  background-color: $dark-blue;
  padding: 60px 0px;
  margin-top: 30px;

  @media (max-width: $breakpoint-sm) {
    padding-bottom: 45px;
  }

  .level {
    @include main-width('normal');

    .nui-logo {
      height: 100px;
      max-height: 200px !important;
      width: auto;

      @include transition(2);

      @media (max-width: $breakpoint-sm) {
        height: 75px;
        width: auto;
        margin-bottom: 20px;
      }
    }

    .footer-content {
      @include footer-content;
    }
  }
}
</style>
