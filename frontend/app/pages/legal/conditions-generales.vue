<template>
  <div>
    Nuxt
  </div>
</template>

<script setup lang="ts">
import type { PageTitleOrDescription } from '~/types'

/**
 * Business details
 */

const { get } = useBusinessDetails()

const i18n = useI18n()

const titles: PageTitleOrDescription<typeof i18n.locale.value> = {
  fr: 'Conditions Générales',
  en: 'Terms and Conditions'
}

const descriptions: PageTitleOrDescription<typeof i18n.locale.value> = {
  fr: "Découvrez les conditions générales de notre salon de coiffure, qui régissent l'utilisation de nos services et les relations entre notre entreprise et nos clients.",
  en: 'Discover the terms and conditions of our hair salon, which govern the use of our services and the relationship between our business and our clients.'
}

useSeoMeta({
  title: titles[i18n.locale.value],
  description: descriptions[i18n.locale.value],
  titleTemplate: `%s | ${get('legalName')}`,
  twitterTitle: titles[i18n.locale.value],
  twitterDescription: descriptions[i18n.locale.value],
  ogImage: 'https://dev-client.gency313.fr/hero/hair1.jpg'
})

defineOgImageComponent('NuxtSeo', {
  title: titles[i18n.locale.value],
  description: descriptions[i18n.locale.value],
  theme: '#ff0000',
  colorMode: 'dark',
})

useSchemaOrg(
  [
    defineBreadcrumb({
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 2,
          name: titles[i18n.locale.value],
          item: `${useBrowserLocation().value.origin}${useRoute().fullPath}`
        }
      ]
    })
  ]
)
</script>
