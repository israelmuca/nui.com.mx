<template>
  <section class="columns is-multiline is-centered is-vcentered common-concerns-section">
    <!-- Title & Subtitle code -->
    <div class="column is-12">
      <h1 class="sections-title has-text-centered">Solución Integral</h1>
      <p
        class="sections-content has-text-justified"
      >La enseñanza de ciencias de la computación y código traen consigo una serie de retos a superar, Code Avengers se desarrolló como una solución integral para las instituciones.</p>
    </div>
    <!-- Ilustration code -->
    <div class="column is-3 has-text-centered">
      <img class="icons" src="~static/svg/common-concerns/10planning.svg" alt>
      <div class="columns is-mobile is-multiline is-centered">
        <div class="column is-12 has-text-centered">
          <h1 class="cc-title">Planeación</h1>
        </div>
        <div class="column is-6 has-text-centered">
          <img class="icons" src="~static/svg/common-concerns/11planning.svg" alt>
          <p class="cc-subtitle has-text-centered">lecciones flexibles</p>
        </div>
        <div class="column is-6 has-text-centered">
          <img class="icons" src="~static/svg/common-concerns/12planning.svg" alt>
          <p class="cc-subtitle has-text-centered">capacitación constante</p>
        </div>
        <div class="column is-6 has-text-centered">
          <img class="icons" src="~static/svg/common-concerns/13planning.svg" alt>
          <p class="cc-subtitle has-text-centered">soporte permanente</p>
        </div>
      </div>
    </div>
    <div class="column is-1 has-text-centered">
      <img class="arrow" src="~static/svg/common-concerns/arrow-right.svg" alt>
    </div>
    <div class="column is-3 has-text-centered">
      <img class="icons" src="~static/svg/common-concerns/20teaching.svg" alt>
      <div class="columns is-mobile is-multiline is-centered">
        <div class="column is-12 has-text-centered">
          <h1 class="cc-title">Enseñanza</h1>
        </div>
        <div class="column is-6 has-text-centered">
          <img class="icons" src="~static/svg/common-concerns/21teaching.svg" alt>
          <p class="cc-subtitle has-text-centered">currícula oficial</p>
        </div>
        <div class="column is-6 has-text-centered">
          <img class="icons" src="~static/svg/common-concerns/22teaching.svg" alt>
          <p class="cc-subtitle has-text-centered">proyectos interactivos</p>
        </div>
        <div class="column is-6 has-text-centered">
          <img class="icons" src="~static/svg/common-concerns/23teaching.svg" alt>
          <p class="cc-subtitle has-text-centered">enfoque multidisciplinar</p>
        </div>
      </div>
    </div>
    <div class="column is-1 has-text-centered">
      <img class="arrow" src="~static/svg/common-concerns/arrow-right.svg" alt>
    </div>
    <div class="column is-3 has-text-centered">
      <img class="icons" src="~static/svg/common-concerns/30assessing.svg" alt>
      <div class="columns is-mobile is-multiline is-centered">
        <div class="column is-12 has-text-centered">
          <h1 class="cc-title">Evaluación</h1>
        </div>
        <div class="column is-6 has-text-centered">
          <img class="icons" src="~static/svg/common-concerns/31assessing.svg" alt>
          <p class="cc-subtitle has-text-centered">visibilidad grupal</p>
        </div>
        <div class="column is-6 has-text-centered">
          <img class="icons" src="~static/svg/common-concerns/32assessing.svg" alt>
          <p class="cc-subtitle has-text-centered">enfoque personalizado</p>
        </div>
        <div class="column is-6 has-text-centered">
          <img class="icons" src="~static/svg/common-concerns/33assessing.svg" alt>
          <p class="cc-subtitle has-text-centered">evaluación automática</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.common-concerns-section {
  @include main-width("normal");
  margin-top: 50px;

  // Fonts
  .sections-title {
    @include sections-title;
    text-transform: uppercase;
  }
  .sections-content {
    @include sections-content;
    @include main-width("small");
    margin-top: 20px;
  }
  .cc-title {
    @include cc-title;
    margin-top: 10px;
  }
  .cc-subtitle {
    @include cc-subtitle;
    margin-top: 10px;
  }


  .icons {
    min-height: 80px;
    width: auto;
  }

  .arrow {
    margin-top: -20px;
    @media (max-width: $breakpoint-sm) {
      transform: rotate(90deg);
      margin-top: 20px;
    }
  }
}
</style>
