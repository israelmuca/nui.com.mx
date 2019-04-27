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
      // SEO meta
      {
        hid: "description",
        name: "description",
        content:
          "Nui - Tecnologías Educativas - - Desarrollo y comercialización de sistemas informáticos, plataformas basadas en la nube e infraestructura tecnológica con enfoque en el sector educativo."
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "educación tecnología programación plan estudio código primaria secundaria preparatoria"
      },
      // Facebook's Open Graph Markup
      {
        hid: "og:url",
        property: "og:url",
        content: "https://nui.com.mx"
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Nui - Tecnologías Educativas."
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Nui - Tecnologías Educativas - - Desarrollo y comercialización de sistemas informáticos, plataformas basadas en la nube e infraestructura tecnológica con enfoque en el sector educativo."
      },
      {
        hid: "og:image",
        property: "og:image",
        content:
          "http://nui.com.mx/_nuxt/img/7c38d21.svg"
      },
      // Twitter's Card Markup
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content:
          "Nui - Tecnologías Educativas."
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "Nui - Tecnologías Educativas - - Desarrollo y comercialización de sistemas informáticos, plataformas basadas en la nube e infraestructura tecnológica con enfoque en el sector educativo."
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content:
          "http://nui.com.mx/_nuxt/img/7c38d21.svg"
      }
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
    { src: '~/plugins/vue-particles', ssr: false },
    { src: "~/plugins/maps.js" }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        }
      ]
    }],
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
