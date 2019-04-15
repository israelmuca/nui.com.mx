<template>
  <div>
    <h1 class="contact-title">Contáctanos</h1>
    <div v-if="!sent">
      <form name="contact" @submit.prevent="processForm" action="/.netlify/functions/sendGrid">
        <div class="field">
          <label class="label">Nombre</label>
          <div class="control">
            <input v-model="emaildata.name" class="input" type="text" name="name">
          </div>
        </div>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input v-model="emaildata.email" class="input" type="email" name="email">
          </div>
        </div>
        <div class="field">
          <label class="label">Teléfono</label>
          <div class="control">
            <input v-model="emaildata.phone" class="input" type="tel" name="phone">
          </div>
        </div>
        <div class="field">
          <label class="label">Ciudad</label>
          <div class="control">
            <input v-model="emaildata.ciudad" class="input" type="text" name="city">
          </div>
        </div>
        <div class="field">
          <label class="label">Mensaje</label>
          <div class="control">
            <textarea
              v-model="emaildata.message"
              class="textarea"
              placeholder="Favor de escribir su mensaje aquí"
              name="message"
            ></textarea>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button type="submit" class="button send-contact">
              <span class="button-text">Enviar</span>
            </button>
          </div>
        </div>
      </form>
    </div>
    <div v-else class="columns is-centered thank-message">
      <div class="column has-text-centered">
        <h3>Gracias, nos pondremos en contacto pronto!</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emaildata: {
        name: "",
        email: "",
        phone: "",
        city: "",
        message: ""
      },
      sent: false
    }
  },
  methods: {
    async processForm() {
      // NO validation :(
      try {
        const sendgrid = await this.$axios.post(
          `/.netlify/functions/sendGrid`,
          this.emaildata
        )
        this.sent = true
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
