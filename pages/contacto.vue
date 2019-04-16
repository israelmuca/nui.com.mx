<template>
  <div>
    <Header>
      <template v-slot:text>
        <h1 class="header-title">Nuestro servicio</h1>
        <p
          class="header-subtitle"
        >Desde escuelas en crecimiento hasta organizaciones internacionales se pueden ver beneficiados a través de la innovación tecnológica.
        <br>Permítenos ayudarte en este proceso.</p>
      </template>
      <template v-slot:image>
        <img class="no-rotate" src="~static/svg/contacto-people-home-office.svg" alt>
      </template>
    </Header>
    <ContactInfo></ContactInfo>
    <TwoColumns>
      <template v-slot:left>
        <img class="no-rotate" src="~static/svg/contacto-people-rating.svg" alt>
      </template>
      <template v-slot:right>
        <h1 class="title">Supercharge your classroom with us!</h1>
        <p
          class="content"
        >Aliqua elit deserunt qui consequat occaecat labore veniam Lorem tempor eu minim cupidatat duis. Exercitation laborum aliqua veniam exercitation tempor minim aute duis dolor. Cillum ullamco quis nulla deserunt tempor. Occaecat cillum enim id mollit magna culpa. Ex laboris laborum ullamco officia nisi.</p>
      </template>
    </TwoColumns>
    <Box>
      <ContactForm></ContactForm>
    </Box>
  </div>
</template>

<script>
import Header from "~/components/Header.vue"
import ContactInfo from "~/components/ContactInfo.vue"
import TwoColumns from "~/components/TwoColumns.vue"
import Box from "~/components/Box.vue"
import ContactForm from "~/components/ContactForm.vue"

export default {
  components: {
    Header,
    ContactInfo,
    TwoColumns,
    Box,
    ContactForm
  }
}
</script>

<style lang="scss" scoped>
.no-rotate {
  transform: scaleX(1);
}
</style>

