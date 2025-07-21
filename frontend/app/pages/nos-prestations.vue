<template>
  <section id="prestation">
    <BaseJumbotron src="/hero/hair7.jpg" lead="Nos prestations" subtitle="Découvrez tout ou partie de nos prestations" />

    <div class="px-5 md:px-10">
      <ServicesSection />
      <ServicesSection />
      <ServicesSection />

      <div class="my-10">
        <CardCTA id="tel-services" />
      </div>      
    </div>
  </section>
</template>

<script setup lang="ts">
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
  // title: titles[i18n.locale.value],
  title: titles.fr,
  description: 'Sublime ta singularité',
  titleTemplate: "%s | La beauté d'Inéïah",
  ogImage: 'https://dev-client.gency313.fr/hero/hair1.jpg'
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
