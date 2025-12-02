<template>
  <section id="site">
    <base-navbar @mobile-menu="() => toggleMobileMenu(true)" />

    <div id="main">
      <slot />
    </div>

    <!-- Modals -->
    <client-only>
      <modals-mobile v-model:show="showMobileMenu" />
    </client-only>

    <!-- Reassurance -->
    <base-reassurance />

    <!-- Footer -->
    <base-footer />
  </section>
</template>

<script setup lang="ts">
import { scrollLevelKey } from '~/data'

const scrollLevel = ref<number>(0)
provide(scrollLevelKey, scrollLevel)

const [showMobileMenu, toggleMobileMenu] = useToggle<boolean>(false)

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
