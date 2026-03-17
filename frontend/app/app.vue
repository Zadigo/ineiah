<template>
  <section class="font-sans bg-primary-100 dark:bg-primary-800 relative">
    <nuxt-layout>
      <analytics />
      <speed-insights />
      
      <nuxt-page />

      <dev-only>
        <cookie-banner />
        <lazy-cookie-options :show="showOptions" :hydrate-when="showOptions" />
      </dev-only>
    </nuxt-layout>
  </section>
</template>

<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
import { provideSSRWidth } from '@vueuse/core'

const nuxtApp = useNuxtApp()
provideSSRWidth(1024, nuxtApp.vueApp)

const isMobile = useMediaQuery('(min-width: 320px)')
const isLargeScreen = useMediaQuery('(min-width: 1024px)')

useState('isMobile', () => isMobile)
useState('isLargeScreen', () => isLargeScreen)

/**
 * Cookie
 */

const { showOptions } = useCookieComposable()

/**
 * Background theme
 */

const tokens = ['bg-primary-500/20', 'dark:bg-primary-800']

onMounted(() => {
  document.querySelector('html')?.classList.add(...tokens)
})

onUnmounted(() => {
  document.querySelector('html')?.classList.remove(...tokens)
})

/**
 * General SEO Tags
 */

const { get } = useBusinessDetails()

useHead({
  meta: [
    {
      name: 'geo.region',
      content: 'FR-HDF'
    },
    {
      name: 'geo.placename',
      content: get('address').city
    },
    {
      name: 'geo.position',
      content: `${get('address').lat},${get('address').lng}`
    },
    {
      name: 'ICBM',
      content: `${get('address').lat},${get('address').lng}`
    }
  ]
})
</script>

<style lang="scss">
.page {

  &-enter-active,
  &-leave-active {
    transition: all 0.4s;
  }

  &-enter-from,
  &-leave-active {
    filter: blur(1rem);
  }
}
</style>
