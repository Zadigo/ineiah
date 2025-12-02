<template>
  <div class="h-auto relative transition ease-in-out">
    <img :src="src" :alt="alt" class="aspect-square object-cover hover:opacity-80 has-[h4]:hover:underline" >

    <div class="absolute text-primary-100 dark:text-primary-200 left-0 bottom-1/12 p-2 md:text-2xl md:left-1/12 md:bottom-1/12">
      <p class="font-light text-sm">Coupe</p>
      <h4 class="font-semibold">
        {{ title }}
      </h4>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src: string,
  alt: string,
  title: string
}>()
</script>
