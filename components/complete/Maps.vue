<template>
  <gmap-map class="gmap" :center="center" :zoom="zoom">
      <gmap-marker :position="center"></gmap-marker>
  </gmap-map>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 25.6438266, lng: -100.3539838 },
      zoom: 14
    };
  }
};
</script>

<style>
.gmap {
  width: 100%;
  height: 100%;
}
</style>
