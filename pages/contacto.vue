<template>
  <Header>
    <template v-slot:text>
      <h1 class="header-title">Esto es Nui</h1>
      <p class="header-subtitle">Cualquier duda que tengas estamos para ayudarte, desde implementación en tu colegio, hasta...</p>
    </template>
    <template v-slot:image>
      <img src="~static/svg/people-home-office.svg" alt="">
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
img {
  transform: scaleX(1);
}
</style>

