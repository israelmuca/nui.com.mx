import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "Nui - Tecnologías Educativas",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Página web de Nui" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src:'~/plugins/vue-particles', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios'
  ],
  // Axios config
  axios: {
    proxy: true
  },
  // Proxy to fix CORS problems
  proxy: {
    '/.netlify': {
      target: 'http://localhost:9000',
      pathRewrite: { '^/.netlify/functions': '' },
    },
  },
  //ENV variables for usage inside Nuxt, will pull from .env in local, and from netlify.toml in production
  env: {
    API_URL: process.env.API_URL,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    BASE_URL: process.env.BASE_URL,
    MAIL_TO: process.env.MAIL_TO
  },
  
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
