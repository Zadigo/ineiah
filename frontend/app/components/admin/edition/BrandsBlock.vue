<template>
  <shad-card>
    <shad-card-content>
      <h3 class="font-bold text-3xl">{{ blockTitle }}</h3>

      <div class="flex justify-between gap-2">
        <shad-input placeholder="Brand Name" />
        <shad-input type="file" placeholder="Brand Logo" />
      </div>

      <shad-button>
        <icon name="i-fa7-solid:plus" />
        Add Brand
      </shad-button>
    </shad-card-content>
  </shad-card>
</template>

<script setup lang="ts">
const { blockTitle } = defineProps<{ blockTitle: string }>()
</script>
