import PrimeVue from 'primevue/config'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  nuxtApp.vueApp.use(PrimeVue, {
    unstyled: true,
    license: config.public.primeVueLicenseKey
  })
})
