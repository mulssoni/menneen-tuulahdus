// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/styles/_variables.scss"; @import "@/assets/styles/_mixins.scss";',
        },
      },
    },
  },
  modules: ['@nuxt/image-edge'],
  image: {
    dir: 'assets/images',
    provider: 'netlify',
  },
})
