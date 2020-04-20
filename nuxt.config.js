const pkg = require('./package')
const bodyParser = require('body-parser')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'News App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0,viewport-fit=cover' },
      { name: "HandheldFriendly", content:"true" },
      { hid: 'description', name: 'description', content: 'Here will be content for the the SEO optimization' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Open+Sans" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070', height: '3px', duration: '5000' },
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070'
  },

  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: process.env.BASE_URL || 'https://nuxt-blog-e99f9.firebaseio.com'
    //credentials: false
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
  },
  env: {
    baseUrl : process.env.BASE_URL || 'https://nuxt-blog-e99f9.firebaseio.com',
    fbAPIKey: 'AIzaSyDbDfHeM3RahCeheQk-aS_I7Qsi0bfwuzc'
  },
  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ]
  //router: {
  //  linkActiveClass: 'active'
  //}
  //router: {
  //  extendRoutes(routes, resolve) {
  //    router.push({
  //      path: '*',
  //      component: resolve(__dirname, 'pages/index.vue')
  //    })
  //  }
  //}
  //ransition: {
  //  name: 'fade',
  //  mode: 'in-out'
  //}

  //router: {
  //  middleware: 'log'
  //}
}
