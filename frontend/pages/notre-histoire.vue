<template>
  <section id="story">
    <BaseJumbotron src="/hero/hair4.jpg" lead="Notre histoire" subtitle="Découvrez tout ou partie de notre histoire" />

    <!-- Quote -->
    <div class="p-10 md:p-20 bg-brand text-brand-500/80 w-full text-center">
      <h1 class="text-2xl md:text-4xl max-w-4xl md:mx-auto font-bold space-x-2 md:space-x-5">
        <Icon name="fa-solid:quote-left" />
        <span>Hairstudio by Anissa c'est avant tout une histoire de passion et d'humanité !</span>
        <Icon name="fa-solid:quote-right" />
      </h1>
    </div>

    <div class="px-2 md:px-10 my-10">
      <StoryCard class="shadow-none" />
      <StoryCard class="shadow-none my-5" invert />
      <StoryCard class="shadow-none" />

      <div class="mt-10">
        <CardCTA id="tel-story" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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
</script>
