<template>
  <div class="w-full h-full flex flex-col p-15 justify-between bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-white bg-center bg-no-repeat" :style="backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined">
    <div class="flex items-center gap-6">
      <div class="flex flex-col">
        <h2 class="text-8xl font-title font-semibold text-primary-100">{{ author }}</h2>
        <span class="text-4xl text-primary-100 mt-5">{{ description }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  title = 'Blog Post Title',
  description = 'A brief description of the blog post goes here.',
  date = 'January 1, 2024',
  backgroundImage = '/images/hero/customer18-small.webp',
  author = 'Author Name'
} = defineProps<{
  title?: string
  description?: string
  date?: string
  backgroundImage?: string
  author?: string
}>()
</script>
