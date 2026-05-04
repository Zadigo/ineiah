<template>
  <section id="site">
    <base-navbar @mobile-menu="() => toggleMobileMenu(true)" />

    <main>
      <slot />
    </main>

    <!-- Modals -->
    <client-only>
      <lazy-modals-mobile v-model:show="showMobileMenu" hydrate-on-visible />
    </client-only>

    <!-- Reassurance -->
    <lazy-base-reassurance hydrate-on-idle />

    <!-- Footer -->
    <lazy-base-footer hydrate-on-idle />
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
