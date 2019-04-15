<template>
  <div>
    <Header>
      <template v-slot:text>
        <h1 class="header-title">Esto es Nui</h1>
        <p class="header-subtitle">Nui es una empresa de tecnologías educativas...</p>
      </template>
      <template v-slot:image>
        <img class="rotate" src="~static/svg/index-people-crane.svg" alt>
      </template>
    </Header>
    <Box></Box>
    <TwoColumns>
      <template v-slot:left>
        <img class="rotate" src="~static/svg/index-people-rocket-informal.svg" alt>
      </template>
      <template v-slot:right>
        <h1 class="title">Título de información</h1>
        <p
          class="content"
        >Aliqua elit deserunt qui consequat occaecat labore veniam Lorem tempor eu minim cupidatat duis. Exercitation laborum aliqua veniam exercitation tempor minim aute duis dolor. Cillum ullamco quis nulla deserunt tempor. Occaecat cillum enim id mollit magna culpa. Ex laboris laborum ullamco officia nisi.</p>
      </template>
    </TwoColumns>
    <TwoColumns>
      <template v-slot:left>
        <h1 class="title">Otro título de información</h1>
        <p
          class="content"
        >Quis Lorem quis aute cillum ex. Officia pariatur sint irure enim eu fugiat voluptate fugiat sint anim sint exercitation nulla occaecat. Ad deserunt laborum amet sint fugiat. Voluptate aliquip qui deserunt laboris. Eiusmod irure consectetur ipsum voluptate tempor Lorem nulla tempor ipsum in occaecat dolore. Ex amet ut officia aute anim.</p>
      </template>
      <template v-slot:right>
        <img class="no-rotate" src="~static/svg/index-female-male-books.svg" alt>
      </template>
    </TwoColumns>
  </div>
</template>

<script>
import Header from "~/components/Header.vue"
import Box from "~/components/index/Box.vue"
import TwoColumns from "~/components/TwoColumns.vue"

export default {
  components: {
    Header,
    Box,
    TwoColumns
  }
}
</script>

<style lang="scss" scoped>
.rotate {
  transform: scaleX(-1);
}

.no-rotate {
  transform: scaleX(1);
}
</style>

