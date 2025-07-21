<template>
  <section class="font-sans bg-brand-pink-500/20 relative">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </section>
</template>

<script setup lang="ts">
const isMobile = useMediaQuery('(min-width: 320px)')
const isLargeScreen = useMediaQuery('(min-width: 1024px)')

provide('isMobile', isMobile)
provide('isLargeScreen', isLargeScreen)

onMounted(() => {
  document.querySelector('html')?.classList.add('bg-brand-pink-500/20')
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
