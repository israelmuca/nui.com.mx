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
                <span class="is-pulled-right">Acerca de Nui</span>
              </nuxt-link>
              <nuxt-link
                class="navbar-item nav-links is-clearfix"
                to="/codeavengers"
                @click.native="showNav = !showNav"
              >
                <span class="is-pulled-right">Code Avengers</span>
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
          <div class="column is-6 header-column">
            <slot name="text"></slot>
          </div>
        </div>
      </div>
    </section>
    <div class="columns header-content">
      <div class="column is-6 header-column">
        <!-- Remains empty to fix z-index bug -->
      </div>
      <div class="column is-6">
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

// Give the whole hero a max height, apply the angle and set the z-index to apply content on top
.hero {
  z-index: 0;
  height: 700px;
  background-color: $dark-blue;
  @include angle-edge(
    $angle: 4,
    $angle-position-y: "bottom",
    $angle-position-x: "right"
  );
}

// Set the Navbar CSS
.nui-logo {
  height: 100px;
  max-height: 200px !important;
  width: auto;
}
@media (max-width: $breakpoint-sm) {
  .nui-logo {
    height: 75px;
    width: auto;
  }
}

.navbar {
  @include main-width("normal");
}

.nav-links {
  @include nav-links;
}

.navbar-burger {
  margin-top: 33px;
  color: $white;
  &:hover {
    background-color: transparent;
  }
}
@media (max-width: $breakpoint-sm) {
  .navbar-burger {
  margin-top: 18px;
}
}

.is-active {
  background-color: rgba(0, 0, 0, 0) !important;
  box-shadow: none;
}

// Make sure the content is at the edge of the left and right and properly set on the height
.hero-body {
  padding-left: 0px;
}

.hero-content {
  @include main-width("normal");
}

.header-content {
  @include main-width("normal");
  z-index: 100;
  margin-top: -500px;
  padding-right: 0px;
  margin-bottom: 50px !important;
}

.header-column {
  margin-top: 50px;
}

// Set the font options for the title and subtitle
.header-title {
  @include header-title;
}

.header-subtitle {
  @include header-subtitle;
}

// Media query for when the columns are stacked on top of each other
@media (max-width: $breakpoint-sm) {
  .header-content {
    margin-top: -300px;
  }
}

@media (min-width: $breakpoint-sm) and (max-width: $breakpoint-md) {
  .header-content {
    margin-bottom: 150px !important;
  }
}
</style>
