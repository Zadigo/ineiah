<template>
  <section id="story">
    <BaseJumbotron src="/hero/hair4.jpg" :lead="$t('Notre histoire')" :subtitle="$t('Découvrez notre histoire et la création de notre salon')" />

    <!-- Quote TODO: Component -->
    <div class="p-10 md:p-20 bg-primary-500 text-primary-700 dark:bg-primary-700 dark:text-primary-200 w-full text-center">
      <h1 class="text-2xl md:text-4xl max-w-4xl md:mx-auto font-bold space-x-2 md:space-x-5">
        <Icon name="fa-solid:quote-left" />
        <span>{{ $t('{businessName}, une vision du cheveu sans compromis', { businessName: businessDetails.legalName }) }}</span>
        <Icon name="fa-solid:quote-right" />
      </h1>
    </div>

    <div class="px-2 md:px-10 my-10">
      <StoryCard class="shadow-none" />
      <StoryCard class="shadow-none my-5" invert />
      <StoryCard class="shadow-none" />

      <div class="mt-10">
        <card-call-to-action id="tel-story" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { businessDetails } from '~/data'

definePageMeta({
  title: 'Our Story'
})


const i18n = useI18n()

const titles: Record<typeof i18n.locale.value, string> = {
  fr: 'Notre histoire',
  en: 'Our Story'
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
