<template>
  <div class="p-3 flex justify-center">
    <nuxt-img :alt="alt" :src="src" width="100px" height="100%" />
  </div>
</template>

<script setup lang="ts">
const { alt, src } = defineProps<{
  src: string
  alt: string
}>()
</script>
