<template>
  <div>
    Nuxt
  </div>
</template>

<script setup lang="ts">
import { businessDetails } from '~/data'

const i18n = useI18n()

const titles: Record<typeof i18n.locale.value, string> = {
  fr: 'Confidentialité',
  en: 'Privacy Policy'
}

const descriptions: Record<typeof i18n.locale.value, string> = {
  fr: 'Sublime ta singularité',
  en: 'Sublime your uniqueness'
}

useSeoMeta({
  title: titles[i18n.locale.value],
  description: descriptions[i18n.locale.value],
  titleTemplate: `%s | ${businessDetails.legalName}`,
  ogImage: 'https://dev-client.gency313.fr/hero/hair1.jpg'
})

defineOgImageComponent('NuxtSeo', {
  title: titles[i18n.locale.value],
  description: descriptions[i18n.locale.value],
  theme: '#ff0000',
  colorMode: 'dark',
})
</script>
