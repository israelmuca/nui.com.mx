<template>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          alt="Bulma: a modern CSS framework based on Flexbox"
          width="112"
          height="28"
        >
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

    <div class="navbar-menu">
      <div class="navbar-end">
        <nuxt-link class="navbar-item nav-links" to="#">Productos</nuxt-link>
        <nuxt-link class="navbar-item nav-links" to="#">Acerca de Nui</nuxt-link>
        <nuxt-link class="navbar-item nav-links" to="#">Contacto</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: function() {
    return {
      showNav: false
    }
  }
}
</script>

<style lang="scss" scoped>

@import "~/assets/css/main.scss";

.nav-links {
  @include nav-links;
}
</style>

