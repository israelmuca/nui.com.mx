<template>
  <section class="columns is-vcentered two-columns">
    <div class="column is-6 left-column">
      <slot name="left"></slot>
    </div>
    <div class="column is-6 right-column">
      <slot name="right"></slot>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.two-columns {
  @include main-width("normal");

  @media (max-width: $breakpoint-md) {
    margin-bottom: 50px !important;
  }

  .left-column {
    padding-right: 25px;
    & {
      @media (max-width: $breakpoint-sm) {
        padding-right: 12px;
      }
    }
  }
  .right-column {
    padding-left: 25px;
    & {
      @media (max-width: $breakpoint-sm) {
        padding-left: 12px;
      }
    }
  }

  // Set the font options for the title and content
  // These are set in the page.vue that sends them in the left or right slot
  .title {
    @include sections-title;
  }
  .content {
    @include sections-content;
    padding-top: 25px;
  }
  // Set the height and width options for the SVGs
  // These are set in the page.vue that sends them in the left or right slot
  .rotate,
  .no-rotate {
    max-height: 500px;
    width: auto;

    & {
      @media (max-width: $breakpoint-sm) {
        max-height: 400px;
        width: auto;
      }
    }
  }
}

// These classes are only modified on this breakpoint
@media (max-width: $breakpoint-sm) {
  .mobile-negative-top-margin {
    margin-top: -85px;
  }

  .mobile-positive-top-margin {
    margin-top: 75px;
  }
}
</style>
