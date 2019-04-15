<template>
  <div>
    <Header>
      <template v-slot:text>
        <h1 class="header-title">Esto es Nui</h1>
        <p class="header-subtitle">Nui es una empresa de tecnologías educativas...</p>
      </template>
      <template v-slot:image>
        <img src="~static/svg/people-crane.svg" alt>
      </template>
    </Header>
    <Box></Box>
  </div>
</template>

<script>
import Header from "~/components/Header.vue"
import Box from "~/components/index/Box.vue"

export default {
  components: {
    Header,
    Box
  }
}
</script>

<style lang="scss" scoped>
img {
  transform: scaleX(-1);
}
</style>

