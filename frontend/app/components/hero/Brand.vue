<template>
  <div class="p-3 flex justify-center">
    <nuxt-img :alt="alt" :src="src" width="100px" height="100%" />
  </div>
</template>

<script setup lang="ts">
const { alt = `Logo de la marque Bouclème`, src } = defineProps<{
  src: string,
  alt: string
}>()
</script>
