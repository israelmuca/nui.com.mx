<template>
  <section class="hooper-section">
    <div class="columns">
      <div class="column is-6">
        <hooper :settings="hooperSettings" sync="hooper2">
          <slide class="slide-1">
            <div class="image-slide">
              <h1 class="cc-slide-title">Planning</h1>
              <h3 class="cc-slide-subtitle">Easy to follow custom lesson plans</h3>
              <ul>
                <li class="cc-slide-content">Flexible lesson plans</li>
                <li class="cc-slide-content">Resources to train and up-skill teachers</li>
                <li class="cc-slide-content">Personalized consultations available</li>
              </ul>
            </div>
          </slide>
          <slide class="slide-2">
            <div class="image-slide">
              <h1 class="cc-slide-title">Teaching</h1>
              <h3 class="cc-slide-subtitle">Ready-made activities</h3>
              <ul>
                <li class="cc-slide-content">Teacher training</li>
                <li class="cc-slide-content">Lesson plans</li>
                <li class="cc-slide-content">Online assistance</li>
              </ul>
            </div>
          </slide>
          <slide class="slide-3">
            <div class="image-slide">
              <h1 class="cc-slide-title">Assessing</h1>
              <h3 class="cc-slide-subtitle">Easy to follow custom lesson plans</h3>
              <ul>
                <li class="cc-slide-content">See students' work in realtime</li>
                <li class="cc-slide-content">Auto marking exams</li>
                <li class="cc-slide-content">Download lesson reports</li>
              </ul>
            </div>
          </slide>
          <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
      </div>
      <div class="column is-6">
        <hooper :settings="hooperSettings" ref="hooper2">
          <slide class="slide-1">
            <div class="hooper-image-slide1">
              <!-- <img class="hooper-image" src="~static/images/gallery/gallery4.jpg" alt> -->
            </div>
          </slide>
          <slide class="slide-2">
            <div class="hooper-image-slide2">
              <!-- <img class="hooper-image" src="~static/images/gallery/gallery11.jpg" alt> -->
            </div>
          </slide>
          <slide class="slide-3">
            <div class="hooper-image-slide3">
              <!-- <img class="hooper-image" src="~static/images/gallery/gallery2.jpg" alt> -->
            </div>
          </slide>
        </hooper>
      </div>
    </div>
  </section>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper"
import "hooper/dist/hooper.css"

export default {
  name: "App",
  components: {
    Hooper,
    Slide,
    HooperPagination
  },
  data() {
    return {
      hooperSettings: {
        centerMode: true,
        /* autoPlay: true,
        playSpeed: 7000, */
        infiniteScroll: true,
        wheelControl: false
      }
    }
  }
}
</script>

<style lang="scss">
@import "~/assets/css/main.scss";

.hooper-section {
  margin-top: 100px;
  @include main-width("normal");
}
@media (max-width: $breakpoint-sm) {
  .hooper-section {
    margin-top: 50px;
  }
}

.hooper {
  min-height: 350px;
  max-height: 350px;
}

.hooper-image-slide1 {
  @include hooper-image-slide;
  background-image: url("~static/images/gallery/gallery4.jpg");
}
.hooper-image-slide2 {
  @include hooper-image-slide;
  background-image: url("~static/images/gallery/gallery11.jpg");
}
.hooper-image-slide3 {
  @include hooper-image-slide;
  background-image: url("~static/images/gallery/gallery2.jpg");
}

.hooper-indicator {
  width: 60px;
  border-radius: 0px;
  margin-bottom: 20px !important;
  background-color: $light-grey;
}

.hooper-pagination {
  @include sections-subtitle;
  top: 300px;
  &::before {
    content: "01";
    padding-top: 4px;
    padding-right: 10px;
  }
  &::after {
    content: "03";
    padding-top: 4px;
    padding-left: 10px;
  }
}
@media (max-width: $breakpoint-sm) {
  .hooper-pagination {
    top: 300px;
  }
}

// Content
.cc-slide-title {
  @include cc-slide-title;
  margin-top: 30px;
}

.cc-slide-subtitle {
  @include cc-slide-subtitle;
  padding-top: 10px;
  padding-bottom: 25px;
}

.cc-slide-content {
  @include cc-slide-content;
  &::before {
    content: url("~static/svg/common-concerns/checkmark.svg");
    padding-right: 15px;
  }
}
</style>
