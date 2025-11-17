<template>
  <shad-card>
    <shad-card-content>
      <div class="space-y-4">
        <h3 class="font-bold text-3xl">{{ blockTitle }}</h3>

        <slot />
      </div>
    </shad-card-content>
  </shad-card>
</template> 

<script setup lang="ts">
const { blockTitle } = defineProps<{ blockTitle: string }>()
</script>
