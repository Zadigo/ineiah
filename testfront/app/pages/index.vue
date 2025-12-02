<template>
  <div>
    <h1>Welcome to the Test Frontend Application</h1>
    <p>This is the main page of the application.</p>
  </div>
</template>

<script setup lang="ts">
const i18n = useI18n()

const titles: Record<string, string> = {
  fr: 'Coupe et coiffures tout type de cheveux'
}

useSeoMeta({
  title: titles[i18n.locale.value],
  description: 'Sublime ta singularité',
  titleTemplate: `%s | Business`,
  ogImage: 'https://dev-client.gency313.fr/hero/hair1.jpg'
})

useHead({
  title: 'Test Frontend Application',
  meta: [
    {
      name: 'description',
      content: 'This is a test frontend application built with Nuxt.js'
    }
  ]
})
</script>
