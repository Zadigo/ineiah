<template>
  <section class="font-sans bg-brand-brown-500/20 relative">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <!-- <div class="fixed bottom-1/12 left-11/12">
      <ShadButton size="lg" class="rounded-full">
        <a href="tel:+">
          <Icon name="fa-solid:phone" />
        </a>
      </ShadButton>
    </div> -->
  </section>
</template>

<script setup lang="ts">
const isMobile = useMediaQuery('(min-width: 320px)')
const isLargeScreen = useMediaQuery('(min-width: 1024px)')

provide('isMobile', isMobile)
provide('isLargeScreen', isLargeScreen)

onMounted(() => {
  document.querySelector('html')?.classList.add('bg-brand-brown-500/20')
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
