// import type { ResolvableLink } from '@unhead/vue'

export default defineNuxtPlugin({
  parallel: true,
  name: 'canonical',
  setup() {
    // const locales = useNuxtApp().$i18n.locales
    // const route = useRoute()
    // const siteUrl = useRuntimeConfig().public.siteUrl
    // const localePath = useLocalePath()

    // useHead(() => {
    //   // Generate hreflang for each locale
    //   const hreflangLinks = (locales.value).map(locale => ({
    //     rel: 'alternate',
    //     hreflang: locale.language, // ex: 'fr-FR', 'en-US'
    //     href: siteUrl + localePath(route.name as string, locale.code)
    //   }))

    //   // Add x-default pointing to the FR version (default)
    //   const xDefault: ResolvableLink = {
    //     rel: 'alternate',
    //     hreflang: 'x-default',
    //     href: siteUrl + localePath(route.name as string, 'fr')
    //   }

    //   const canonicalHref = siteUrl + route.path

    //   return {
    //     link: [
    //       { rel: 'canonical', href: canonicalHref },
    //       ...hreflangLinks,
    //       xDefault
    //     ]
    //   }
    // })
  }
})
