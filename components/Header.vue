<template>
  <div>
    <vue-particles
      color="#fafafa"
      :particleOpacity="0.5"
      linesColor="#fafafa"
      :particlesNumber="100"
      shapeType="circle"
      :particleSize="3"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.2"
      :linesDistance="200"
      :moveSpeed="1"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
    <section class="hero is-medium header-nav">
      <div class="hero-head">
        <nav class="navbar">
          <div class="navbar-brand">
            <nuxt-link
              class="navbar-item"
              to="/"
              @click.native="(showNav) ? showNav = false : showNav = false"
            >
              <img class="nui-logo" src="~static/svg/nui-logo.svg">
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
                to="#"
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
  components: {},
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

#particles-js {
  background-color: $dark-blue;
  max-height: 200px;
}

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

/* .hero-head {
  margin-top: -750px;
} */

.nui-logo {
  height: 100px;
  max-height: 200px !important;
  width: auto;
}

.navbar {
  @include main-width;
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

.is-active {
  background-color: rgba(0, 0, 0, 0) !important;
  box-shadow: none;
}

.hero-body {
  padding-left: 0px;
}

.hero-content {
  @include main-width;
}

.header-content {
  @include main-width;
  z-index: 100;
  margin-top: -500px;
}

.header-column {
  margin-top: 50px;
}

.header-title {
  @include header-title;
}

.header-subtitle {
  @include header-subtitle;
}

@media (max-width: $breakpoint-sm) {
  .header-content {
    margin-top: -300px;
  }
}
</style>
