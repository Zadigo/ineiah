<template>
  <section id="gallery">
    <div class="max-w-7xl mx-auto mb-5 px-5 md:px-10 xl:px-0">
      <div class="mb-5 bg-secondary-100 dark:bg-secondary-800 p-20 py-40 rounded-xl shadow-md bg-center bg-cover" :style="{ backgroundImage: 'url(/images/dev/hair11.jpg)' }">
        <div>
          <h2 class="text-3xl font-extrabold text-primary-50 dark:text-primary-100">
            {{ $t('Galerie') }}
          </h2>
          <p class="text-lg text-primary-50 dark:text-primary-100">
            {{ $t('Découvrez notre collection de coupes et styles réalisés par nos experts.') }}
          </p>

          <div class="mt-5 flex justify-start gap-5 flex-wrap md:flex-nowrap">
            <volt-input-text v-model="search" :placeholder="$t('Rechercher une coupe ou un style')" class="w-full md:w-100" />
            
            <div class="hidden justify-start gap-2 xl:flex">
              <volt-tag v-for="keyword in keywords.slice(0, 4)" :key="keyword" :value="keyword" class="cursor-pointer" severity="contrast" @click="() => search = keyword" />
            </div>
          </div>
        </div>
      </div>
      
      <!-- Images -->
      <gallery-base :images="filteredImages" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PageTitleOrDescription } from '~/types'

definePageMeta({
  title: 'Gallery'
})

/**
 * Images
 */

const { images, search, filteredImages, keywords } = useImageGallery()

/**
 * SEO
 */

const { get } = useBusinessDetails()
const i18n = useI18n()

const titles: PageTitleOrDescription<typeof i18n.locale.value> = {
  fr: 'Galerie de coupes et styles',
  en: 'Gallery of cuts and styles'
}

const descriptions: PageTitleOrDescription<typeof i18n.locale.value> = {
  fr: 'Découvrez notre collection de coupes et styles réalisés par nos experts.',
  en: 'Discover our collection of cuts and styles created by our experts.'
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
  colorMode: 'dark'
})

useSchemaOrg(
  [
    {
      '@type': 'ImageGallery',
      name: titles[i18n.locale.value],
      description: descriptions[i18n.locale.value],
      image: images.value.map(img => ({
        '@type': 'ImageObject',
        url: img.image,
        name: img.name
      }))
    },
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
