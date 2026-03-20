<template>
  <section id="prestation">
    <base-jumbotron src="/images/banners/banner1-small.webp" :position-y="55" lead="Mes prestations" subtitle="Découvrez mes prestations de coiffure et de soins capillaires, adaptées à vos besoins et à vos envies." />

    <div class="px-5 md:px-10">
      <services-section v-for="(section, index) in services" :key="section.name" :index="index" :section="section" />

      <div class="my-10">
        <lazy-card-call-to-action id="tel-call-us-services" hydrate-on-idle />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PageTitleOrDescription } from '~/types'

definePageMeta({
  label: 'Services'
})


/**
 * Business details
 */

const { businessDetails, get } = useBusinessDetails()
const { services } = useServices()

/**
 * SEO
 */

const i18n = useI18n()

const titles: PageTitleOrDescription<typeof i18n.locale.value> = {
  fr: 'Nos prestations',
  en: 'Our Services'
}

const descriptions: PageTitleOrDescription<typeof i18n.locale.value> = {
  fr: 'La liste de mes prestations de coiffure et de soins capillaires, adaptées à vos besoins et à vos envies.',
  en: 'The list of my hairdressing and hair care services, tailored to your needs and desires.'
}

const url = useRuntimeConfig().public.siteUrl

useSeoMeta({
  title: titles[i18n.locale.value],
  description: descriptions[i18n.locale.value],
  author: get('legalName'),
  twitterDescription: descriptions[i18n.locale.value],
  twitterCard: 'summary_large_image',
  ogTitle: titles[i18n.locale.value],
  ogDescription: descriptions[i18n.locale.value],
  ogUrl: url + useRoute().path
})

defineOgImage('NuxtSeoTakumi', {
  title: titles[i18n.locale.value] || undefined,
  description: descriptions[i18n.locale.value] || undefined,
  author: get('legalName')
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

useBreadcrumb(titles[i18n.locale.value])
</script>
