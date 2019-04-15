<template>
  <section>
    <div class="box">
      <h1 class="sections-title has-text-centered">Section Title</h1>
      <h3
        class="sections-subtitle has-text-centered"
      >Proident commodo voluptate duis proident cupidatat sit esse commodo eu eu cupidatat. Velit sunt commodo mollit aliqua veniam ad reprehenderit fugiat eiusmod nostrud. Duis culpa dolore in ea. Sit ex occaecat incididunt laborum sit cupidatat laboris commodo do exercitation voluptate culpa ipsum. Enim aliqua pariatur aliquip fugiat Lorem elit esse tempor. Cillum id do eiusmod adipisicing nulla voluptate aute Lorem elit nulla. In non ex nulla laboris aliquip veniam voluptate amet qui dolor eu duis exercitation reprehenderit.</h3>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.box {
  @include main-width('small');
  border-radius: 6px;
  box-shadow: 5px 10px 30px 0 rgba(41, 26, 204, 0.12);
  background-color: $white;

  margin: 100px;

  padding: 40px 80px;
}

.sections-title {
  @include sections-title;
}

.sections-subtitle {
    @include sections-subtitle;
}
</style>
