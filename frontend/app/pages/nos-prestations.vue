<template>
  <section id="prestation">
    <base-jumbotron src="/images/banners/banner1-small.webp" :position-y="55" lead="Nos prestations" subtitle="Découvrez nos prestations de coiffure et de soins capillaires, adaptées à vos besoins et à vos envies." />

    <div class="px-5 md:px-10">
      <services-section v-for="(section, index) in services" :key="section.name" :index="index" :section="section" />

      <div class="my-10">
        <card-call-to-action id="tel-call-us-services" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Services'
})

/**
 * Business details
 */

const { businessDetails } = useBusinessDetails()
const { services } = useServices()

/**
 * SEO
 */

const i18n = useI18n()

const titles: Record<typeof i18n.locale.value, string> = {
  fr: 'Nos prestations',
  en: 'Our Services'
}

const descriptions: Record<typeof i18n.locale.value, string> = {
  fr: 'La liste de nos prestations de coiffure et de soins capillaires, adaptées à vos besoins et à vos envies.',
  en: 'The list of our hairdressing and hair care services, tailored to your needs and desires.'
}

useSeoMeta({
  title: titles[i18n.locale.value],
  description: descriptions[i18n.locale.value],
  titleTemplate: `%s | ${businessDetails.legalName}`,
  twitterTitle: titles[i18n.locale.value],
  twitterDescription: descriptions[i18n.locale.value],
  ogImage: 'https://dev-client.gency313.fr/hero/hair1.jpg'
})

defineOgImageComponent('NuxtSeo', {
  title: titles[i18n.locale.value],
  description: descriptions[i18n.locale.value],
  theme: '#ff0000',
  colorMode: 'dark'
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
