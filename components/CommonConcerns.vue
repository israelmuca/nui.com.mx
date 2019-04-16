<template>
  <section class="columns is-multiline is-centered is-vcentered common-concerns-section">
    <div class="column is-12">
      <h1 class="sections-title has-text-centered">Common Concerns</h1>
      <p
        class="sections-content"
      >Ullamco amet dolore ut dolore eu magna anim excepteur. Elit non sit deserunt mollit magna. Laborum fugiat et fugiat eu Lorem consequat culpa dolore aliquip in occaecat. Minim laboris culpa est aliquip et elit reprehenderit culpa reprehenderit id in. Sunt anim consectetur magna amet aute dolore qui ea non ullamco laborum elit occaecat. Amet veniam duis nostrud dolor reprehenderit cillum adipisicing.</p>
    </div>
    <!-- Ilustration Code -->
    <div class="column is-3 has-text-centered cc-ilustration">
      <img class="no-rotate" src="~static/svg/common-concerns/10planning.svg" alt>
      <div class="columns is-mobile is-multiline is-centered">
          <div class="column is-12 has-text-centered">
              <h1 class="cc-title">Planning</h1>
          </div>
        <div class="column is-5 has-text-centered">
          <img class="no-rotate" src="~static/svg/common-concerns/11planning.svg" alt>
          <p class="cc-subtitle">
              flexible lesson plans
          </p>
        </div>
        <div class="column is-5 has-text-centered">
          <img class="no-rotate" src="~static/svg/common-concerns/12planning.svg" alt>
          <p class="cc-subtitle">
              training resources
          </p>
        </div>
        <div class="column is-5 has-text-centered">
          <img class="no-rotate" src="~static/svg/common-concerns/13planning.svg" alt>
          <p class="cc-subtitle">
              personal consultations
          </p>
        </div>
      </div>
    </div>
    <div class="column is-1 has-text-centered">
      <img class="rotate-45" src="~static/svg/common-concerns/arrow-right.svg" alt>
    </div>
    <div class="column is-3 has-text-centered">
      <img class="no-rotate" src="~static/svg/common-concerns/20teaching.svg" alt>
      <div class="columns is-mobile is-multiline is-centered">
          <div class="column is-12 has-text-centered">
              <h1 class="cc-title">Teaching</h1>
          </div>
        <div class="column is-5 has-text-centered">
          <img class="no-rotate" src="~static/svg/common-concerns/21teaching.svg" alt>
          <p class="cc-subtitle">
              aligned courses
          </p>
        </div>
        <div class="column is-5 has-text-centered">
          <img class="no-rotate" src="~static/svg/common-concerns/22teaching.svg" alt>
          <p class="cc-subtitle">
              premade activities
          </p>
        </div>
        <div class="column is-5 has-text-centered">
          <img class="no-rotate" src="~static/svg/common-concerns/23teaching.svg" alt>
          <p class="cc-subtitle">
              cross curricular activities
          </p>
        </div>
      </div>
    </div>
    <div class="column is-1 has-text-centered">
      <img class="rotate-45" src="~static/svg/common-concerns/arrow-right.svg" alt>
    </div>
    <div class="column is-3 has-text-centered">
      <img class="no-rotate" src="~static/svg/common-concerns/30assessing.svg" alt>
      <div class="columns is-mobile is-multiline is-centered">
          <div class="column is-12 has-text-centered">
              <h1 class="cc-title">Assessing</h1>
          </div>
        <div class="column is-5 has-text-centered">
          <img class="no-rotate" src="~static/svg/common-concerns/31assessing.svg" alt>
          <p class="cc-subtitle">
              real-time feedback
          </p>
        </div>
        <div class="column is-5 has-text-centered">
          <img class="no-rotate" src="~static/svg/common-concerns/32assessing.svg" alt>
          <p class="cc-subtitle">
              student tracking
          </p>
        </div>
        <div class="column is-5 has-text-centered">
          <img class="no-rotate" src="~static/svg/common-concerns/33assessing.svg" alt>
          <p class="cc-subtitle">
              auto-marking
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.common-concerns-section {
  @include main-width("normal");
  margin-top: 50px;
}

.sections-title {
  @include sections-title;
  text-transform: uppercase;
}

.sections-content {
  @include sections-content;
  margin-top: 20px;
}

.cc-ilustration {
    margin-top: 20px;
}

.no-rotate {
    min-height: 80px;
    width: auto;
}

.rotate-45 {
    margin-top: -20px;
}
@media (max-width: $breakpoint-sm) {
  .rotate-45 {
    transform: rotate(90deg);
    margin-top: 20px;
  }
}

.cc-title {
    @include cc-title;
    margin-top: 10px;
}

.cc-subtitle {
    @include cc-subtitle;
    margin-top: 10px;
}
</style>
