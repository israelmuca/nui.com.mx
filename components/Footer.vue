<template>
  <footer class="footer">
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <nuxt-link to="/">
            <img class="nui-logo" src="~static/svg/nui-logo.svg">
          </nuxt-link>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <p class="footer-content">
            Ricardo Margain 575
            <br>Edificio C Int. 100
            <br>Col. Santa Engracia
            <br>S.P.G.G., N.L.
            <br>C.P. 66267
            <br><br>01 (+81) 8000 7159
            <br><br>contacto@nui.com.mx
          </p>
        </div>
      </div>
    </nav>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.footer {
  background-color: $dark-blue;
  padding: 60px 0px;
  margin-top: 30px;
}

.level {
  @include main-width("normal");
}

.nui-logo {
  height: 100px;
  max-height: 200px !important;
  width: auto;
}
@media (max-width: $breakpoint-sm) {
  .nui-logo {
    height: 75px;
    width: auto;
    margin-bottom: 20px;
  }
}

.footer-content {
  @include footer-content;
}
</style>
