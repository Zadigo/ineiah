<template>
  <volt-card>
    <template #content>
      <div class="space-y-4">
        <h3 class="font-bold text-3xl">{{ blockTitle }}</h3>
        <slot />
      </div>
    </template>
  </volt-card>
</template>

<script setup lang="ts">
const { blockTitle } = defineProps<{ blockTitle: string }>()
</script>
