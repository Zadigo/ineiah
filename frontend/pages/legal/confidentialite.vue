<template>
  <div>
    Nuxt
  </div>
</template>

<script setup lang="ts">
const titles: Record<string, string> = {
  fr: 'Confidentialité'
}

useSeoMeta({
  // title: titles[i18n.locale.value],
  title: titles.fr,
  description: 'Sublime ta singularité',
  titleTemplate: "%s | La beauté d'Inéïah",
  ogImage: 'http://example.com/image.jpg'
})
</script>
