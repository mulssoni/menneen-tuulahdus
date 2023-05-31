// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/styles/main.scss'],
  modules: ['nuxt-simple-sitemap'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/styles/_variables.scss"; @import "@/assets/styles/_mixins.scss"; @import "@/assets/styles/_fonts.scss"; @import "@/assets/styles/_buttons.scss";',
        },
      },
    },
  },
  sitemap: {
    siteUrl: 'https://menneentuulahdus.fi',
  },
})
