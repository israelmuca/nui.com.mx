<template>
  <div>
    <Particles></Particles>
    <nuxt/>
    <Footer></Footer>
  </div>
</template>

<script>
import Particles from "~/components/layout/Particles.vue"
import Footer from "~/components/layout/Footer.vue"

export default {
  components: {
    Particles,
    Footer
  }
}
</script>


<style lang="scss" scoped>

</style>
