<template>
  <section id="hero" class="has-[p]:space-y-5 has-[p]:leading-8 has-[h2]:leading-15 relative">
    <!-- Hero -->
    <hero-bottom-cta v-if="showImage" :image="`/images/hero/customer18.jpg`" />
    <hero-top-video v-else-if="showVideo" />

    <!-- Intermediate-1 -->
    <hero-section-image />

    <!-- Intermediate-2 -->
    <hero-section-color />

    <!-- Brands -->
    <hero-section-brands />

    <!-- Photocall -->
    <hero-section-photocall />

    <!-- Product Recommendations -->
    <hero-section-products />

    <!-- Reviews -->
    <hero-section-reviews />

    <dev-only>
      <!-- VideoCall -->
      <client-only>
        <hero-section-video-call v-show="showVideoBlock" />
      </client-only>
    </dev-only>

    <dev-only>
      <!-- Template Settings -->
      <div class="fixed p-5 right-0 top-2/12 md:top-6/12 z-50 rounded-md bg-primary-50 dark:bg-primary-500 text-surface-900 dark:text-surface-50 m-3 shadow-md space-y-2">
        <p class="font-bold mb-4">Template settings</p>

        <volt-label label-for="dark-mode" label="Dark mode">
          <client-only>
            <volt-toggle-switch id="dark-mode" v-model="darkMode" />
          </client-only>
        </volt-label>

        <volt-label label-for="show-image" label="Show Image">
          <client-only>
            <volt-toggle-switch id="show-image" v-model="showImage" />
          </client-only>
        </volt-label>

        <volt-label label-for="show-video" label="Show Video">
          <client-only>
            <volt-toggle-switch id="show-video" v-model="showVideo" />
          </client-only>
        </volt-label>

        <volt-label label-for="show-video-call" label="Show video call">
          <client-only>
            <volt-toggle-switch id="show-video-call" v-model="showVideoBlock" />
          </client-only>
        </volt-label>
      </div>
    </dev-only>
  </section>
</template>

<script setup lang="ts">
import type { PageTitleOrDescription } from '~/types'

definePageMeta({
  title: 'Home'
})

/**
 * Socials
 */

const { getSocial, reactiveGet, get } = useBusinessDetails()
const legalName = reactiveGet('legalName')

/**
 * Utils
 */

const { instagram } = useSocialLinks()

/**
 * Template settings
 */

const { showImage, showVideo, showVideoBlock } = useDevComposable()

const i18n = useI18n()

/**
 * Dark mode
 */

const { darkMode } = useDarkModeComposable()

/**
 * SEO
 */   

const titles: PageTitleOrDescription<typeof i18n.locale.value> = {
  fr: 'Coupe et coiffures tout type de cheveux',
  en: 'Haircuts and hairstyles for all hair types'
}

const descriptions: PageTitleOrDescription<typeof i18n.locale.value> = {
  fr: 'Sublime ta singularité',
  en: 'Sublime your singularity'
}

useSeoMeta({
  title: titles[i18n.locale.value],
  description: descriptions[i18n.locale.value],
  titleTemplate: `%s | ${legalName.value}`,
  twitterTitle: titles[i18n.locale.value],
  twitterDescription: descriptions[i18n.locale.value],
  ogImage: '/images/dev/hair10.jpg'
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: useRuntimeConfig().public.siteUrl + useRoute().path
    }
  ]
})

defineOgImageComponent('NuxtSeo', {
  title: titles[i18n.locale.value],
  description: descriptions[i18n.locale.value],
  theme: '#ff0000',
  colorMode: 'dark'
})
</script>
