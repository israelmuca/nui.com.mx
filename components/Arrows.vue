<template>
  <div class="columns is-vcentered is-centered">
    <div class="column is-4">
      <div v-if="data.left" class="column-text">
        <nuxt-link :to="data.left.url">
          <p class="text">
            <span>
              <fa class="icon" :icon="fas.faAngleDoubleLeft"/>
            </span>
            &nbsp;&nbsp;&nbsp;{{ data.left.text }}
          </p>
        </nuxt-link>
      </div>
    </div>
    <div class="is-2">
      <!-- SPACER -->
    </div>
    <div class="column is-4">
      <div v-if="data.right" class="column-text">
        <nuxt-link :to="data.right.url">
          <p class="text">
            {{ data.right.text }}&nbsp;&nbsp;&nbsp;
            <span>
              <fa class="icon" :icon="fas.faAngleDoubleRight"/>
            </span>
          </p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { fas } from "@fortawesome/free-solid-svg-icons"

export default {
  props: ["data"],
  computed: {
    fas() {
      return fas
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.columns {
  @include main-width("normal");
  margin-top: 70px;

  .column-text {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: $dark-blue;
    border-radius: 5px;
    
    &:hover {
      @include transition(.5);
      background-color: $black;
    }
    .text {
      @include arrows-text;
    }
  }
}
</style>
