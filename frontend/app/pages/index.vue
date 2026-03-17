<template>
  <section id="hero" class="has-[p]:space-y-5 has-[p]:leading-8 has-[h2]:leading-15 relative">
    <!-- Hero -->
    <hero-bottom-cta v-if="showImage" :image="`/images/hero/customer18-small.webp`" />
    <lazy-hero-top-video v-else-if="showVideo" hydrate-on-visible />

    <!-- Intermediate-1 -->
    <hero-section-image />

    <!-- Intermediate-2 -->
    <hero-section-color />

    <!-- Brands -->
    <lazy-hero-section-brands hydrate-on-idle />

    <!-- Photocall -->
    <lazy-hero-section-photocall hydrate-on-idle />

    <!-- Product Recommendations -->
    <lazy-hero-section-products hydrate-on-visible />

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
  label: 'Home'
})

/**
 * Socials
 */

const { get } = useBusinessDetails()

/**
 * Utils
 */

// const { instagram } = useSocialLinks()

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
  fr: "L'art de coiffer toutes les textures",
  en: "The art of styling all textures"
}

const url = useRuntimeConfig().public.siteUrl
const shareImage = getOgImageImageUrl('/images/hero/customer18-small.webp')

useSeoMeta({
  title: titles[i18n.locale.value],
  description: descriptions[i18n.locale.value],
  author: get('legalName'),
  titleTemplate: `%s | ${get('legalName')}`,
  twitterTitle: titles[i18n.locale.value],
  twitterDescription: descriptions[i18n.locale.value],
  twitterImage: shareImage,
  twitterCard: 'summary_large_image',
  ogImage: shareImage,
  ogTitle: titles[i18n.locale.value],
  ogDescription: descriptions[i18n.locale.value],
  ogUrl: url + useRoute().path
})

defineOgImage('NuxtSeoTakumi', {
  title: titles[i18n.locale.value],
  description: descriptions[i18n.locale.value],
  author: get('legalName')
})
</script>
