// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: 
  [
    'nuxt-headlessui',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-icon',
    '@nuxt/image',
    '@nuxtjs/google-fonts', 
  ],
  googleFonts: {
    families: {
      'Poppins' : true,
      'Roboto' : true,
      'Inter' : true,
    }
  },
});
