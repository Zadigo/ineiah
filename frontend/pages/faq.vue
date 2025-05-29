<template>
  <div>
    Nuxt
  </div>
</template>

<script setup lang="ts">
const faqs = [
  {
    question: 'What is Nuxt?',
    answer: 'Nuxt is a Vue.js framework for building universal applications.'
  },
  {
    question: 'How does Schema.org help SEO?',
    answer: 'Schema.org provides structured data that helps search engines understand your content.'
  }
]

const i18n = useI18n()

const titles: Record<string, string> = {
  fr: 'Coupe et coiffures tout type de cheveux'
}

defineOgImageComponent('NuxtSeo', {
  title: 'Hello OG Image 👋',
  description: 'Look at me in dark mode',
  theme: '#ff0000',
  colorMode: 'dark',
})

useSeoMeta({
  title: titles[i18n.locale.value],
  description: 'Some simple decription',
  titleTemplate: "%s | La beauté d'Inéïah",
  ogImage: 'http://example.com/image.jpg'
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://example.com/'
    }
  ]
})

useSchemaOrg([
  {
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
])
</script>
