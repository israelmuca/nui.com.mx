<template>
  <section>
    <div class="box">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.box {
  @include main-width("small");
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
