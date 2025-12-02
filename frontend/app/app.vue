<template>
  <section class="font-sans bg-primary-100 dark:bg-primary-800 relative">
    <nuxt-layout>
      <nuxt-page />

      <dev-only>
        <client-only>
          <cookie-banner />
          <cookie-options :show="showOptions" />
        </client-only>
      </dev-only>
    </nuxt-layout>
  </section>
</template>

<script setup lang="ts">
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
 * SEO
 */

useHead({
  link: [
    {
      rel: 'canonical',
      href: useRuntimeConfig().public.prodDomain
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
