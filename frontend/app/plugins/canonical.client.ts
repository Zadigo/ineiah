export default defineNuxtPlugin({
  parallel: true,
  name: 'canonical',
  setup() {
    useHead(() => ({
      link: [
        {
          rel: 'canonical',
          href: computed(() => useRuntimeConfig().public.siteUrl + useRoute().path)
        }
      ]
    }))
  }
})
