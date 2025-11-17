<template>
  <section class="font-sans bg-primary-100 dark:bg-primary-800 relative">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </section>
</template>

<script setup lang="ts">
import { isLargeScreenKey, isMobileKey } from './data'

const isMobile = useMediaQuery('(min-width: 320px)')
const isLargeScreen = useMediaQuery('(min-width: 1024px)')

provide(isMobileKey, isMobile)
provide(isLargeScreenKey, isLargeScreen)

onMounted(() => {
  document.querySelector('html')?.classList.add('bg-primary-500/20', 'dark:bg-primary-800')
})

onUnmounted(() => {
  document.querySelector('html')?.classList.remove('bg-primary-500/20', 'dark:bg-primary-800')
})

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
