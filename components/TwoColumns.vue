<template>
  <div class="columns is-vcentered two-columns">
    <div class="column is-5">
      <slot name="left"></slot>
    </div>
    <div class="column is-1 mobile-dissapear"></div>
    <div class="column is-6">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.two-columns {
  @include main-width("normal");
}

.title {
  @include sections-title;
}

.content {
  @include sections-content;
  padding-top: 25px;
}

.rotate,
.no-rotate {
  max-height: 500px;
  width: auto;
}

@media (max-width: $breakpoint-sm) {
  .rotate,
  .no-rotate {
    max-height: 400px;
    width: auto;
  }

  .mobile-dissapear {
    display: none;
  }

  .mobile-negative-top-margin {
    margin-top: -85px;
  }

  .mobile-positive-top-margin {
    margin-top: 75px;
  }
}
</style>
