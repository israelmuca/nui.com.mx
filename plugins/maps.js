import Vue from "vue";
import * as VueGoogleMaps from "~/node_modules/vue2-google-maps/src/main";

require('dotenv').config()

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.GMAPS_API_KEY
  }
});