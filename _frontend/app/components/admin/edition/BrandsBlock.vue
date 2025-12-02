<template>
  <volt-card>
    <template #content>
      <h3 class="font-bold text-3xl">{{ blockTitle }}</h3>

      <div class="flex justify-start space-y-2 gap-2">
        <volt-input-text placeholder="Brand Name" />
        <volt-input-text type="file" placeholder="Brand Logo" />
      </div>

      <volt-button class="mt-4">
        <icon name="i-lucide:plus" />
        Add Brand
      </volt-button>
    </template>
  </volt-card>
</template>

<script setup lang="ts">
const { blockTitle } = defineProps<{ blockTitle: string }>()
</script>
