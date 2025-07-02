<template>
  <section id="site">
    <ClientOnly>
      <BaseNavbar @mobile-menu="() => showMobileMenu = true" />
    </ClientOnly>

    <div id="main">
      <slot />
    </div>

    <!-- Modals -->
    <ClientOnly>
      <ModalsMobile v-model="showMobileMenu" />
    </ClientOnly>

    <BaseReassurance />
    <BaseFooter />
  </section>
</template>

<script setup lang="ts">
import { useScroll } from '@vueuse/core'

const scrollLevel = ref<number>(0)
provide('scrollLevel', scrollLevel)

const showMobileMenu = ref<boolean>(false)

if (import.meta.client) {
  onMounted(() => {
    const { y } = useScroll(window)
    
    watch(y, (value) => {
      scrollLevel.value = value
    }, { 
      immediate: true
    })
  })
}
</script>
