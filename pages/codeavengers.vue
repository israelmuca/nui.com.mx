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
        <img class="rotate" src="~static/logos/CA-Logo_Black.png" alt>
      </template>
      <template v-slot:right>
        <!-- <h1 class="title">Quién es Code Avengers?</h1> -->
        <p
          class="content has-text-justified"
        >Plataforma educativa originaria de Nueva Zelanda, cuenta con tecnología basada en la nube y se enfoca en la enseñanza de las Ciencias de la Computación y el Código.
        Creada en el 2012 por Michael Walsmley, Ph.D; Code Avengers está diseñada para ser el principal apoyo para el profesor para su clases frente al grupo, pero también puede ser usada de forma individual para el autoaprendizaje.
        <br><br>Al dia de hoy más de 15 mil instituciones en el mundo han incorporado a Code Avengers como un aliado en su proceso de enseñanza. 
        La plataforma contempla un programa académico de vanguardia global, con la oferta más amplia de contenidos, el cual se adapta a cada institución y a sus objetivos particulares.  </p>
      </template>
    </TwoColumns>
    <WideImage>
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
    <CommonConcerns></CommonConcerns>
    <DoubleSlider></DoubleSlider>
    <Box>
      <ContactForm></ContactForm>
    </Box>
  </div>
</template>

<script>
import Header from "~/components/Header.vue"
import TwoColumns from "~/components/TwoColumns.vue"
import WideImage from "~/components/WideImage.vue"
import CommonConcerns from "~/components/CommonConcerns.vue"
import DoubleSlider from "~/components/DoubleSlider.vue"
import Box from "~/components/Box.vue"
import ContactForm from "~/components/ContactForm.vue"

export default {
  components: {
    Header,
    TwoColumns,
    WideImage,
    CommonConcerns,
    DoubleSlider,
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

