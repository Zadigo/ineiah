<template>
  <section id="site">
    <ClientOnly>
      <BaseNavbar />
    </ClientOnly>
    <slot />

    <BaseReassurance />
  </section>
</template>

<script setup lang="ts">
</script>
