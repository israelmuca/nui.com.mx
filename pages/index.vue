<template>
  <div>
    <Header>
      <template v-slot:text>
        <h1 class="header-title">Esto es Nui</h1>
        <p class="header-subtitle">
          Somos una empresa mexicana, con origen en la Ciudad de México y ahora con una nueva sede en la Ciudad de Monterrey, dedicada al desarrollo y comercialización de sistemas informáticos, plataformas basadas en la nube e infraestructura tecnológica.
          <br>Nuestro objetivo es apoyar a las instituciones y organizaciones que tengan enfoque educativo, en la adopción de soluciones tecnológicas de vanguardia, que abonen y aporten valor al sector, pero sobre todo al proceso de enseñanza.
        </p>
      </template>
      <template v-slot:image>
        <img class="rotate" src="~static/svg/index-people-crane.svg" alt>
      </template>
    </Header>
    <Box>
      <h1 class="sections-title has-text-centered">Revolución Industrial 4.0</h1>
      <h3
        class="sections-subtitle has-text-justified"
      >A finales del siglo XVII fue la máquina de vapor quien protagonizo la primer revolución industrial, posteriormente con la llegada de la electricidad y las líneas de producción en masa nos levan a una segunda etapa, unos 100 años más tarde y con la llegada de los sistemas computacionales, las líneas de producción automatizadas y las tarjetas lógicas programables es cuando entramos en lo que llamamos la tercera revolución industrial, cada etapa ha representado avances significativos en el cómo hacemos las cosas y los beneficios que esto ha traído a la humanidad. Esta vez, serán los robots integrados a sistemas IoT los responsables de una transformación radical.</h3>
    </Box>
    <TwoColumns>
      <template v-slot:left>
        <img class="rotate" src="~static/svg/ca-people-rocket-formal.svg" alt>
      </template>
      <template v-slot:right>
        <h1 class="title">Cambios en el mundo</h1>
        <p
          class="content has-text-justified"
        >Marcada por la convergencia de tecnologías digitales, físicas y biológicas, esta nueva etapa cambiará el mundo tal como lo conocemos, basándose en sistemas ciberfísicos, que combinan infraestructura física con software, sensores, nanotecnología y tecnología digital de comunicaciones. Cambiando las reglas de los empleos y de la economía a nivel global, es la receta perfecta para una cuarta revolución industrial.</p>
      </template>
    </TwoColumns>
    <TwoColumns>
      <template v-slot:left>
        <h1 class="title">Mantenernos actualizados</h1>
        <p
          class="content has-text-justified"
        >Invertir en las competencias acorde a los tiempos en que se vive es un factor clave para el éxito. Las Naciones, empresas, instituciones y personas que enfrenten el reto a tiempo y de forma adecuada, tendrá una mejor posición respecto a otros, logrando así aprovechar los beneficios de la innovación tecnológica.</p>
      </template>
      <template v-slot:right>
        <img class="no-rotate" src="~static/svg/index-female-male-books.svg" alt>
      </template>
    </TwoColumns>
    <!-- <WideGallery></WideGallery> -->
    <Arrows :data="data"></Arrows>
    <Box>
      <ContactForm></ContactForm>
    </Box>
  </div>
</template>

<script>
import Header from "~/components/layout/Header.vue"
import Box from "~/components/Box.vue"
import TwoColumns from "~/components/TwoColumns.vue"
/* import WideGallery from "~/components/WideGallery.vue" */
import ContactForm from "~/components/ContactForm.vue"
import Arrows from "~/components/Arrows.vue"

export default {
  components: {
    Header,
    Box,
    TwoColumns,
    /* WideGallery, */
    ContactForm,
    Arrows
  },
  data() {
    return {
      data: {
        left: null,
        right: {
          url: "/nuestraoferta",
          text: "nuestra oferta"
        }
      }
    }
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

