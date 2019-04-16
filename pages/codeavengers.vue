<template>
  <div>
    <Header>
      <template v-slot:text>
        <h1 class="header-title">Esto es Code Avengers</h1>
        <p
          class="header-subtitle"
        >Code Avengers es una empresa de la enseñanza del código y la programación enfocada...</p>
      </template>
      <template v-slot:image>
        <img class="no-rotate" src="~static/svg/ca-people-programming.svg" alt>
      </template>
    </Header>
    <TwoColumns>
      <template v-slot:left>
        <img class="rotate" src="~static/svg/ca-people-hands-phone.svg" alt>
      </template>
      <template v-slot:right>
        <h1 class="title">Quién es Code Avengers?</h1>
        <p
          class="content"
        >Una empresa de tecnología de Nueva Zelanda que está construyendo el futuro de la educación digital del código y la programación.</p>
      </template>
    </TwoColumns>
    <WideImage imageURL="images/girl-teacher.jpeg">
      <h1
        class="image-title"
      >“Our mission is to make teaming fun, engaging & prepare your students for the opportunities of tomorrow"</h1>
    </WideImage>
    <TwoColumns>
      <template v-slot:left>
        <h1 class="title">
          COMPULSORY DIGITECH
          The problem we are solving
        </h1>
        <p class="content">
          By 2020, there will be an estimated shortage of 2 million skilled IT professionals in the USA and Europe alone.
          "90% of jobs will require at least basic ICT skills."
          - Marianne Thyssen, EU commissioner
        </p>
      </template>
      <template v-slot:right>
        <img class="no-rotate" src="~static/svg/ca-people-rocket-formal.svg" alt>
      </template>
    </TwoColumns>
  </div>
</template>

<script>
import Header from "~/components/Header.vue"
import TwoColumns from "~/components/TwoColumns.vue"
import WideImage from "~/components/WideImage.vue"

export default {
  components: {
    Header,
    TwoColumns,
    WideImage
  }
}
</script>

<style lang="scss" scoped>
.no-rotate {
  transform: scaleX(1);
}
</style>

