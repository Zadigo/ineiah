<template>
  <section id="prestation">
    <base-jumbotron src="/hero/hair7.jpg" lead="Nos prestations" subtitle="Découvrez nos prestations de coiffure et de soins capillaires, adaptées à vos besoins et à vos envies." />

    <div class="px-5 md:px-10">
      <services-section v-for="(section, index) in defaultServices" :key="section.name" :index="index" :section="section" />

      <div class="my-10">
        <card-call-to-action id="tel-services" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// import { serviceSectionFixtures } from '~/data/fixtures/services'
import { businessDetails, defaultServices } from '~/data'

definePageMeta({
  title: 'Services'
})

/**
 * SEO
 */

const i18n = useI18n()

const titles: Record<typeof i18n.locale.value, string> = {
  fr: 'Nos prestations',
  en: 'Our Services'
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
  colorMode: 'dark'
})
</script>
