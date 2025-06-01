<template>
  <div v-if="scrollLevel<=100" class="bg-brand-500 text-center w-full p-2 text-brand flex items-center gap-2 justify-center">
    15% de remise pour la Noël <Icon name="fa-solid:star" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  scrollLevel: number
}>()
</script>
