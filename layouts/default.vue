<template>
  <div>
    <Particles></Particles>
    <nuxt/>
    <Footer></Footer>
  </div>
</template>

<script>
import Particles from "~/components/Particles.vue"
import Footer from "~/components/Footer.vue"

export default {
  components: {
    Particles,
    Footer
  }
}
</script>


<style lang="scss" scoped>

</style>
