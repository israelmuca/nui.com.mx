<template>
  <div>
    <h1 class="sections-title has-text-centered">Contáctanos</h1>
    <transition name="submit" mode="out-in">
      <div v-if="!sent" key="fillForm">
        <form name="contact" @submit.prevent="processForm" action="/.netlify/functions/sendGrid">
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">Nombre</label>
                <div class="control">
                  <input
                    v-model="emaildata.name"
                    :class="{ 'is-danger': $v.emaildata.name.$error }"
                    class="input"
                    type="text"
                    name="name"
                  >
                </div>
                <p v-if="$v.emaildata.name.$error" class="help is-danger">Escribe tu nombre</p>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input
                    v-model="emaildata.email"
                    :class="{ 'is-danger': $v.emaildata.email.$error }"
                    class="input"
                    type="email"
                    name="email"
                  >
                </div>
                <p
                  v-if="$v.emaildata.email.$error"
                  class="help is-danger"
                >Este no es un correo válido</p>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">Teléfono</label>
                <div class="control">
                  <input
                    v-model="emaildata.phone"
                    :class="{ 'is-danger': $v.emaildata.phone.$error }"
                    class="input"
                    type="tel"
                    name="phone"
                  >
                </div>
                <p v-if="$v.emaildata.phone.$error" class="help is-danger">Escribe tu teléfono</p>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label">Ciudad</label>
                <div class="control">
                  <input
                    v-model="emaildata.city"
                    :class="{ 'is-danger': $v.emaildata.city.$error }"
                    class="input"
                    type="text"
                    name="city"
                  >
                </div>
                <p v-if="$v.emaildata.city.$error" class="help is-danger">Escribe tu ciudad</p>
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">Mensaje</label>
                <div class="control">
                  <textarea
                    v-model="emaildata.message"
                    :class="{ 'is-danger': $v.emaildata.message.$error }"
                    class="textarea"
                    name="message"
                  ></textarea>
                </div>
                <p v-if="$v.emaildata.message.$error" class="help is-danger">Tu mensaje es muy corto</p>
              </div>
            </div>
          </div>

          <div class="columns is-centered">
            <div class="column is-2 has-text-centered">
              <div class="field">
                <div class="control has-text-centered">
                  <button
                    type="submit"
                    :class="{ 'is-loading': this.processing == true }"
                    :style="buttonSize"
                    class="button"
                  >
                    <span v-if="!this.processed" class="button-text">Enviar</span>
                    <span v-if="this.processed" class="button-text">
                      <img src="~static/svg/common-concerns/checkmark.svg">
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div v-else class="columns is-centered thank-message" key="submitForm">
        <div class="column has-text-centered">
          <h3>Gracias, nos pondremos en contacto pronto!</h3>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate"
import { required, email, minLength } from "vuelidate/lib/validators"
import { setTimeout } from "timers"

export default {
  mixins: [validationMixin],

  data() {
    return {
      emaildata: {
        name: "",
        email: "",
        phone: "",
        city: "",
        message: ""
      },
      processDelayMs: 2000,
      processing: false,
      processed: false,
      sent: false,
      buttonSize: {}
    }
  },

  validations: {
    emaildata: {
      name: { required },
      email: { required, email },
      phone: { required },
      city: { required },
      message: { required, min: minLength(10) }
    }
  },

  methods: {
    async processForm() {
      try {
        // Validate the data, return if there are errors
        this.$v.emaildata.$touch()
        if (this.$v.emaildata.$error) {
          return
        }

        // If all validations pass, send the data to the function to be processed
        this.processing = true // Adds spinning icon to button
        // Set a 1s delay to animate the button better
        await new Promise(resolve => setTimeout(resolve, this.processDelayMs))

        const sendgrid = await this.$axios.post(
          `/.netlify/functions/sendGrid`,
          this.emaildata
        )

        // Change the animate to a checkmark
        this.processing = false
        this.processed = true
        this.buttonSize = {
          transition: ".5s all cubic-bezier(0.785, 0.135, 0.15, 0.86)",
          width: "50px",
          "padding-top": "12px",
          "padding-bottom": "12px",
          height: "50px"
        }
        // Set a 1s delay to animate the button better
        await new Promise(resolve => setTimeout(resolve, this.processDelayMs))

        // Change the whole form to a success message
        this.sent = true
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.sections-title {
  @include sections-title;
  margin-bottom: 40px;
}

.label {
  @include sections-content;
}

.help {
  @include footer-content;
  line-height: 14px;
}

.button {
  @include sections-content;
  background-color: $dark-blue;
  color: $white;
  width: 150px;

  &:hover,
  &:active,
  &:focus {
    background-color: $dark-blue;
    color: $white;
  }
}

.submit-enter,
.submit-leave {
  @include transition(1);
}
</style>
