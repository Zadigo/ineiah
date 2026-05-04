<template>
  <section id="index" class="space-y-2">
    <admin-edition-cta-block id="hero" block-title="hero" />
    <admin-edition-cta-block id="block-1" block-title="Block #1" />
    <admin-edition-cta-block id="block-2" block-title="Block #2" />
    <admin-edition-brands-block id="brands" block-title="Brands" />
    <admin-edition-home-photocall id="photocall" block-title="Photocall" />
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Admin Home',
  layout: 'admin'
})
</script>
