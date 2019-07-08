import pkg from './package'

export default {
  mode: 'spa',

  // headers
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // root id
  globalName: 'black',

  // loaders
  loading: false,

  // global styles
  css: [
    '@/assets/style/util.scss',
    '@/assets/style/type.scss',
  ],

  // plugins
  plugins: [
  ],

  // nuxt modules
  modules: [
    '@nuxtjs/pwa',
  ],

  // build
  build: {
    extend(config, ctx) {
    }
  }
}