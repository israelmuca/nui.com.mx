<template>
  <Header>
    <template v-slot:text>
      <h1 class="header-title">Esto es Nui</h1>
      <p class="header-subtitle">Cualquier duda que tengas estamos para ayudarte, desde implementación en tu colegio, hasta...</p>
    </template>
    <template v-slot:image>
      <img class="no-rotate" src="~static/svg/contacto-people-home-office.svg" alt="">
    </template>
  </Header>
</template>

<script>
import Header from "~/components/Header.vue"
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
.no-rotate {
  transform: scaleX(1);
}
</style>

