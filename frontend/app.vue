<template>
  <section class="font-sans bg-brand/20">
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
</script>
