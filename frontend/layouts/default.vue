<template>
  <section id="site">
    <ClientOnly>
      <header>
        <BaseNavbar />
      </header>
    </ClientOnly>

    <slot />

    <BaseReassurance />

    <BaseFooter />
  </section>
</template>

<script setup lang="ts">
const { y } = useScroll(window)

provide('scrollLevel', y)
</script>
