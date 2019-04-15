<template>
  <Header>
    <template v-slot:text>
      <h1 class="header-title">Here might be a page title</h1>
      <p class="header-subtitle">Here might be a page subtitle with double the amount of text</p>
    </template>
    <template v-slot:image>
      <img src="~static/svg/people-crane.svg" alt="">
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
  transform: scaleX(-1);
}
</style>

