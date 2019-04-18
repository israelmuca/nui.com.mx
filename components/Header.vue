<template>
  <div>
    <section class="hero is-medium header-nav">
      <div class="hero-head">
        <nav class="navbar">
          <div class="navbar-brand">
            <nuxt-link
              class="navbar-item"
              to="/"
              @click.native="(showNav) ? showNav = false : showNav = false"
            >
              <img class="nui-logo" src="~static/logos/nui-logo.svg">
            </nuxt-link>
            <div
              class="navbar-burger burguer"
              @click="showNav = !showNav"
              :class="{ 'is-active': showNav }"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div class="navbar-menu" :class="{ 'is-active': showNav }">
            <div class="navbar-end">
              <nuxt-link
                class="navbar-item nav-links is-clearfix"
                to="/"
                @click.native="showNav = !showNav"
                exact
              >
                <span class="is-pulled-right">Nosotros</span>
              </nuxt-link>
              <nuxt-link
                class="navbar-item nav-links is-clearfix"
                to="/nuestraoferta"
                @click.native="showNav = !showNav"
              >
                <span class="is-pulled-right">Nuestra Oferta</span>
              </nuxt-link>
              <nuxt-link
                class="navbar-item nav-links is-clearfix"
                to="/contacto"
                @click.native="showNav = !showNav"
              >
                <span class="is-pulled-right">Contacto</span>
              </nuxt-link>
            </div>
          </div>
        </nav>
      </div>
      <div class="hero-body">
        <div class="columns hero-content">
          <div class="column is-6 header-column has-text-justified">
            <slot name="text"></slot>
          </div>
        </div>
      </div>
    </section>
    <div class="columns header-content">
      <div class="column is-6 header-column">
        <!-- Remains empty to fix z-index bug -->
      </div>
      <div class="column is-6 image-column">
        <slot name="image"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNav: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/angled-edges.scss";
@import "~/assets/css/main.scss";

.hero {
  z-index: 0;
  height: 800px;
  background-color: $dark-blue;
  @include angle-edge(
    $angle: 4,
    $angle-position-y: "bottom",
    $angle-position-x: "right"
  );

  /*
  ** Head
  ** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  */
  .navbar {
    @include main-width("normal");

    .nui-logo {
      @include transition(2);
      height: 100px;
      max-height: 200px !important;
      width: auto;

      & {
        @media (max-width: $breakpoint-sm) {
          height: 75px;
          width: auto;
        }
      }
    }

    .navbar-burger {
      @include transition(2);
      margin-top: 33px;
      color: $white;
      & {
        &:hover {
          background-color: rgba(0, 0, 0, 0) !important;
        }
        @media (max-width: $breakpoint-sm) {
          margin-top: 18px;
        }
      }
    }

    .nav-links {
      @include nav-links;
      @include transition(0.5);
    }

    .is-active {
      background-color: rgba(0, 0, 0, 0) !important;
      box-shadow: none;
    }

    .nuxt-link-active {
      background-color: transparent !important;
      color: $black !important;
      cursor: pointer;
    }
  }

  /*
  ** Body
  ** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  */
  .hero-body {
    padding-left: 0px;
    padding-right: 0px;

    .hero-content {
      @include main-width("normal");

      // Set the font options for the title and subtitle
      // These classes are set in the page.vue that sends them in the text slot
      .header-title {
        @include header-title;
      }
      .header-subtitle {
        @include header-subtitle;
      }
    }
  }
}

.header-content {
  @include main-width("normal");
  @include transition(2);
  z-index: 100;
  margin-top: -500px;
  padding-right: 0px;
  margin-bottom: 0px !important;

  & {
    @media (min-width: 900px) and (max-width: $breakpoint-md) {
      margin-bottom: 50px !important;
    }
    @media (min-width: $breakpoint-sm) and (max-width: 900px) {
      margin-bottom: 100px !important;
    }
    @media (max-width: $breakpoint-sm) {
      margin-top: -400px;
    }
    @media (max-width: 400px) {
      margin-top: -320px;
    }
  }

  .header-column {
    margin-top: 50px;
  }
  .image-column {
    @include transition(2);
    & {
      @media (max-width: 450px) {
        margin-top: 130px;
      }
      @media (min-width: 450px) and (max-width: 600px) {
        margin-top: 80px;
      }
      @media (min-width: 600px) and (max-width: $breakpoint-sm) {
        margin-top: 0px;
      }
    }
  }
}
</style>
