<template>
  <div>
    <section class="hero is-medium">
      <div class="hero-head">
        <nav class="navbar">
          <div class="navbar-brand">
            <nuxt-link class="navbar-item" to="#">
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
              <nuxt-link class="navbar-item nav-links is-clearfix" to="#">
                <span class="is-pulled-right">Productos</span>
              </nuxt-link>
              <nuxt-link class="navbar-item nav-links is-clearfix" to="#">
                <span class="is-pulled-right">Acerca de Nui</span>
              </nuxt-link>
              <nuxt-link class="navbar-item nav-links is-clearfix" to="#">
                <span class="is-pulled-right">Contacto</span>
              </nuxt-link>
            </div>
          </div>
        </nav>
      </div>
    </section>
    <div class="columns header-content">
      <div class="column is-6 header-column">
        <slot name="text"></slot>
      </div>
      <div class="column is-1"></div>
      <div class="column is-5">
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
  z-index: -1;
  height: 700px;
  background-color: $dark-blue;
  @include angle-edge(
    $angle: 4,
    $angle-position-y: "bottom",
    $angle-position-x: "right"
  );
}

.nui-logo {
  height: 100px;
  max-height: 200px !important;
  width: auto;
}

.navbar {
  margin-top: 50px;
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

.header-content {
  @include main-width;
  z-index: 1;
  margin-top: -450px;
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
</style>
