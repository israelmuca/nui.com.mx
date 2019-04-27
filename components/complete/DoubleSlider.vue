<template>
  <section class="hooper-section">
    <div class="columns hoopers">
      <div class="column is-6">
        <hooper :settings="hooperSettings" sync="hooper2">
          <slide class="slide-1">
            <div class="image-slide">
              <h1 class="cc-slide-title">Planeación</h1>
              <h3 class="cc-slide-subtitle">Planes de lección desarrollados y fáciles de seguir</h3>
              <ul>
                <li class="cc-slide-content">Planes de lección flexibles</li>
                <li class="cc-slide-content">Capacitación para los maestros</li>
                <li class="cc-slide-content">Consultas personalizadas</li>
              </ul>
            </div>
          </slide>
          <slide class="slide-2">
            <div class="image-slide">
              <h1 class="cc-slide-title">Enseñanza</h1>
              <h3 class="cc-slide-subtitle">Actividades enfocadas a proyectos multidisciplinarios</h3>
              <ul>
                <li class="cc-slide-content">Cursos alineados a programas oficiales internacionales</li>
                <li class="cc-slide-content">Proyectos basados en competencias</li>
                <li class="cc-slide-content">Multidisciplinar con enfoque transversal</li>
              </ul>
            </div>
          </slide>
          <slide class="slide-3">
            <div class="image-slide">
              <h1 class="cc-slide-title">Evaluación</h1>
              <h3 class="cc-slide-subtitle">Sistemas automatizados de evaluación</h3>
              <ul>
                <li class="cc-slide-content">Retroalimentación en tiempo real</li>
                <li class="cc-slide-content">Seguimiento al trabajo del estudiante</li>
                <li class="cc-slide-content">Visibilidad por grupo o estudiante</li>
              </ul>
            </div>
          </slide>
          <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
      </div>
      <div class="column is-6">
        <hooper :settings="hooperSettings" ref="hooper2">
          <slide class="slide-1">
            <div class="hooper-image-slide1">
              <!-- <img class="hooper-image" src="~static/images/gallery/gallery4.jpg" alt> -->
            </div>
          </slide>
          <slide class="slide-2">
            <div class="hooper-image-slide2">
              <!-- <img class="hooper-image" src="~static/images/gallery/gallery11.jpg" alt> -->
            </div>
          </slide>
          <slide class="slide-3">
            <div class="hooper-image-slide3">
              <!-- <img class="hooper-image" src="~static/images/gallery/gallery2.jpg" alt> -->
            </div>
          </slide>
        </hooper>
      </div>
    </div>
  </section>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper"
import "hooper/dist/hooper.css"

export default {
  name: "App",
  components: {
    Hooper,
    Slide,
    HooperPagination
  },
  data() {
    return {
      hooperSettings: {
        centerMode: true,
        autoPlay: true,
        playSpeed: 7000,
        infiniteScroll: true,
        wheelControl: false
      }
    }
  }
}
</script>

<style lang="scss">
@import "~/assets/css/main.scss";

.hooper-section {
  margin-top: 100px;
  @include main-width("normal");
  @media (max-width: $breakpoint-sm) {
    margin-top: 50px;
  }

  .hoopers {
    margin-left: 0px;
    margin-right: 0px;

    .hooper {
      min-height: 350px;
      max-height: 350px;
      &:focus {
        outline: none;
      }
    }

    .hooper-list:focus,
    .hooper-track:focus {
      outline: none;
    }
  }
}

.hooper-pagination {
  @include sections-subtitle;
  top: 300px;
  &::before {
    content: "01";
    padding-top: 4px;
    padding-right: 10px;
  }
  &::after {
    content: "03";
    padding-top: 4px;
    padding-left: 10px;
  }

  .hooper-indicator {
    width: 60px !important;
    border-radius: 0px !important;
    margin-bottom: 20px !important;
    background-color: $light-grey !important;
    &.is-active,
    &:hover {
      background-color: $blue !important;
    }
    &:focus {
      outline: none;
    }
  }
}

/*
** Content
** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
*/
.cc-slide-title {
  @include cc-slide-title;
  margin-top: 30px;
}

.cc-slide-subtitle {
  @include cc-slide-subtitle;
  padding-top: 10px;
  padding-bottom: 25px;
}

.cc-slide-content {
  @include cc-slide-content;
  margin-bottom: 10px;
  &::before {
    content: url("~static/svg/common-concerns/checkmark.svg");
    padding-right: 15px;
  }
}

@for $i from 1 through 3 {
  .hooper-image-slide#{$i} {
    @include hooper-image-slide;
    background-image: url("~static/images/gallery/gallery#{$i}.jpg");
  }
}
</style>
