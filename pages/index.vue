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
      <h3 class="sections-subtitle has-text-justified">
        A finales del siglo XVII fue la máquina de vapor quien protagonizo la primer revolución industrial, posteriormente con la llegada de la electricidad y las líneas de producción en masa nos levan a una segunda etapa, unos 100 años más tarde y con la llegada de los sistemas computacionales, las líneas de producción automatizadas y las tarjetas lógicas programables es cuando entramos en lo que llamamos la tercera revolución industrial, cada etapa ha representado avances significativos en el cómo hacemos las cosas y los beneficios que esto ha traído a la humanidad. Esta vez, serán los robots integrados a sistemas IoT los responsables de una transformación radical.
        <br>
        <br>Marcada por la convergencia de tecnologías digitales, físicas y biológicas, esta nueva etapa cambiará el mundo tal como lo conocemos, basándose en sistemas ciberfísicos, que combinan infraestructura física con software, sensores, nanotecnología y tecnología digital de comunicaciones. Cambiando las reglas de los empleos y de la economía a nivel global, es la receta perfecta para una cuarta revolución industrial.
        <br>
        <br>Invertir en las competencias acorde a los tiempos en que se vive es un factor clave para el éxito. Las Naciones, empresas, instituciones y personas que enfrenten el reto a tiempo y de forma adecuada, tendrá una mejor posición respecto a otros, logrando así aprovechar los beneficios de la innovación tecnológica.
      </h3>
    </Box>
    <!-- <TwoColumns>
      <template v-slot:left>
        <img class="rotate" src="~static/svg/ca-people-rocket-formal.svg" alt>
      </template>
      <template v-slot:right>
        <h1 class="title">OCDE: Estrategía de competencias, destrezas y habilidades de México</h1>
        <p class="content has-text-justified">
          En el diagnósito realizado por la OCDE para México, dejan muy claro que las competencias se han convertido en el
          <strong>factor clave para lograr el bienestar individual y el éxito económico de una sociedad</strong>.
          <br>
          <br>Entonces, con una inversión adecuada en la educación de vanguardia, el progreso tecnológico
          <strong>se verá transformado en crecimiento.</strong>
          <br>
          <br>
          <strong>El uso eficaz de las competencias en el trabajo es importante para el éxito de México y sus ciudadanos.</strong>
        </p>
      </template>
    </TwoColumns>
    <TwoColumns>
      <template v-slot:left>
        <h1 class="title">Las economías se están digitalizando</h1>
        <p class="content has-text-justified">
          En EUA, el 71% de todos los trabajos requieren de
          <strong>habilidades digitales</strong>. Percibiendo más de un 50% de mayor remuneración promedio los trabajos con enfoque en la computación.
          <br>
          <br>La digitalización está asociada con un aumento de la remuneración y la resiliencia laboral frente a la automatización.
          Un claro ejemplo de esto, es las 5 empresas más valiosas del mundo, Apple, Google, Microsoft y Amazon. Empresas cuyo valor gira alrededor de la tecnología.
          <br>
          <br>
          <strong>Esto nos obliga a voltear a ver a la enseñanza de la tecnología y código como una necesidad educativa para jóvenes y adultos por igual.</strong>
        </p>
      </template>
      <template v-slot:right>
        <img class="no-rotate" src="~static/svg/index-female-male-books.svg" alt>
      </template>
    </TwoColumns>-->
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

