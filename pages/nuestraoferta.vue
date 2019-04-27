<template>
  <div>
    <Header>
      <template v-slot:text>
        <h1 class="header-title">Innovación Tecnológica</h1>
        <p
          class="header-subtitle"
        >La informática abre más puertas que cualquier otra disciplina. Hoy el 71% de todos los trabajos en los Estados Unidos requieren habilidades digitales, siendo estas las mejor pagadas. Aprender desde los conceptos básicos, ayudará a los estudiantes en cualquier carrera o profesión que elijan para su futuro.</p>
      </template>
      <template v-slot:image>
        <img class="no-rotate" src="~static/svg/ca-people-programming.svg" alt>
      </template>
    </Header>
    <TwoColumns>
      <template v-slot:left>
        <div class="columns">
          <div class="column has-text-centered">
            <img class="rotate" src="~static/logos/CA-Logo_Black.png" alt>
          </div>
        </div>
      </template>
      <template v-slot:right>
        <p class="content has-text-justified mobile-negative-top-margin">
          Originaria de Nueva Zelanda, cuenta con tecnología basada en la nube y se enfoca en la enseñanza de las Ciencias de la Computación y el Código.
          Creada en el 2012 por Michael Walsmley, Ph.D; Está diseñada para ser el principal apoyo para el profesor para su clases frente al grupo, pero también puede ser usada de forma individual para el autoaprendizaje.
          <br>
          <br>Nui Tecnologías Educativas cuenta con la comercialización exclusiva para México de Code Avengers.
        </p>
      </template>
    </TwoColumns>
    <TwoColumns>
      <template v-slot:left>
        <h1 class="title mobile-positive-top-margin">
          Éxito global
        </h1>
        <p class="content has-text-justified">
          Al dia de hoy más de 15 mil instituciones en el mundo han incorporado a Code Avengers como un aliado en su proceso de enseñanza.
          La plataforma contempla un programa académico de vanguardia global, con la oferta más amplia de contenidos, el cual se adapta a cada institución y a sus objetivos particulares.
        </p>
      </template>
      <template v-slot:right>
        <img class="no-rotate" src="~static/svg/index-people-rocket-informal.svg" alt>
      </template>
    </TwoColumns>
    <WideImage>
      <p class="wide-image-content"><span class="image-title">Nui + Code Avengers</span>
      <br><span class="image-subtitle">Nuestro equipo está compuesto de académicos e investigadores, desarrolladores de software, así como profesionales de servicio y atención al cliente.</span></p>
    </WideImage>
    <CommonConcerns></CommonConcerns>
    <DoubleSlider></DoubleSlider>
    <Arrows :data="data"></Arrows>
    <Box>
      <ContactForm></ContactForm>
    </Box>
  </div>
</template>

<script>
import Header from "~/components/layout/Header.vue"
import TwoColumns from "~/components/TwoColumns.vue"
import WideImage from "~/components/WideImage.vue"
import CommonConcerns from "~/components/complete/CommonConcerns.vue"
import DoubleSlider from "~/components/complete/DoubleSlider.vue"
import Box from "~/components/Box.vue"
import ContactForm from "~/components/ContactForm.vue"
import Arrows from "~/components/Arrows.vue"

export default {
  components: {
    Header,
    TwoColumns,
    WideImage,
    CommonConcerns,
    DoubleSlider,
    Box,
    ContactForm,
    Arrows
  },
  data() {
    return {
      data: {
        left: {
          url: "/",
          text: "nosotros"
        },
        right: {
          url: "/contacto",
          text: "contácto"
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.no-rotate {
  transform: scaleX(1);
}
</style>

