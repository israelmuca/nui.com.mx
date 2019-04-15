<template>
  <Header>
    <template v-slot:text>
      <h1 class="header-title">Esto es Code Avengers</h1>
      <p class="header-subtitle">Code Avengers es una empresa de la enseñanza del código y la programación enfocada...</p>
    </template>
    <template v-slot:image>
      <img src="~static/svg/people-programming.svg" alt="">
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

