<template>
  <section id="sitemap" class="px-20">
    <div class="grid grid-cols-2 my-20 py-20 gap-4">
      <volt-card v-for="section in footer.sections" :key="section.title">
        <template #content>
          <ul>
            <h2 v-motion-fade class="text-2xl mb-5 text-secondary-700 dark:text-secondary-900">{{ $t(section.title) }}</h2>
            <li v-for="link in section.links" :key="link.name" class="py-1">
              <nuxt-link-locale :to="link.to" class="text-lg text-secondary-500 underline">
                {{ $t(link.name) }}
              </nuxt-link-locale>
            </li>
          </ul>
        </template>
      </volt-card>
    </div>
  </section>
</template>

<script setup lang="ts">
import { footer } from '~/data'
import type { PageTitleOrDescription } from '~/types'

definePageMeta({
  name: 'sitemap'
})

/**
 * SEO
 */

const { get } = useBusinessDetails()
const i18n = useI18n()

const titles: PageTitleOrDescription<typeof i18n.locale.value> = {
  fr: 'Plan du site',
  en: 'Sitemap'
}

const descriptions: PageTitleOrDescription<typeof i18n.locale.value> = {
  fr: 'Découvrez la structure de notre site et accédez facilement à toutes les pages importantes.',
  en: 'Discover the structure of our site and easily access all important pages.'
}

useSeoMeta({
  title: titles[i18n.locale.value],
  description: descriptions[i18n.locale.value],
  titleTemplate: `%s | ${get('legalName')}`,
  twitterTitle: titles[i18n.locale.value],
  twitterDescription: descriptions[i18n.locale.value],
  ogImage: 'https://dev-client.gency313.fr/hero/hair1.jpg'
})

defineOgImageComponent('NuxtSeo', {
  title: titles[i18n.locale.value],
  description: descriptions[i18n.locale.value],
  theme: '#ff0000',
  colorMode: 'dark',
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
