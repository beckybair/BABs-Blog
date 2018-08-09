const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Modern+Antiqua|Open+Sans'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#0078B2', height: '4px', duration: 5000 },

  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~plugins/core-components.js', '~plugins/date-filter.js'],

  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxtjs/axios'],

  axios: {
    baseURL: process.env.BASE_URL || 'https://babs-blog-521f7.firebaseio.com',
    credentials: false
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  },
  env: {
    baseUrl: process.env.BASE_URL ||  'https://nuxt-blog.firebaseio.com'
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
