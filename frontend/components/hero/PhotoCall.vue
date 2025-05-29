<template>
  <div class="h-auto relative">
    <NuxtImg :src="src" :alt="alt" />
    <h4 class="font-semibold text-white absolute left-0 bottom-1/12 p-2 md:text-2xl md:bottom-2/12">
      {{ title }}
    </h4>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src: string,
  alt: string,
  title: string
}>()
</script>
