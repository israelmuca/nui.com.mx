<template>
  <no-ssr>
    <vue-particles
      id="particles-js"
      color="#fafafa"
      :particleOpacity="0.5"
      linesColor="#fafafa"
      :particlesNumber="100"
      shapeType="circle"
      :particleSize="3"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.2"
      :linesDistance="200"
      :moveSpeed="1"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
  </no-ssr>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

#particles-js {
  @include transition(1);
  background-color: $dark-blue;
  height: 100px;

  & {
    @media (max-width: $breakpoint-sm) {
        height: 75px;
    }
  }
}
</style>
