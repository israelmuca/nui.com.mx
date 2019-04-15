<template>
  <div class="main-container">
    <Nav></Nav>
    <nuxt/>
  </div>
</template>

<script>
import Nav from "~/components/Nav.vue"

export default {
  components: {
    Nav
  }
}
</script>

<style>
.main-container {
  margin-top: 50px;
  margin-right: 5%;
  margin-left: 5%;
}
</style>
