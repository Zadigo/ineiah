<template>
  <section id="site">
    <ClientOnly>
      <BaseNavbar />
    </ClientOnly>

    <div id="main">
      <slot />
    </div>

    <BaseReassurance />
    <BaseFooter />
  </section>
</template>

<script setup lang="ts">
const { y } = useScroll(window)

provide('scrollLevel', y)
</script>
