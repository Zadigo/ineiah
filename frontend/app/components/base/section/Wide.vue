<template>
  <div class="grid grid-cols-1 xl:grid-cols-2 auto-rows-min mt-10 bg-primary-500 dark:bg-primary-700 dark:text-primary-200 overflow-hidden">
    <div class="items-center md:flex md:p-10">
      <div class="p-10 text-center md:text-left md:max-w-lg">
        <client-only>
          <h2 v-motion-slide-visible-right :delay="400" class="text-3xl font-bold mb-4 md:text-5xl text-primary-800 dark:text-primary-400 font-title leading-10 md:leading-15">
            <slot name="title" />
          </h2>
        </client-only>

        <p class="font-light">
          <slot name="description" />
        </p>

        <slot name="cta" />
      </div>
    </div>

    <div class="h-auto">
      <client-only>
        <nuxt-img v-motion-fade-visible :delay="600" :src="image" class="aspect-square object-cover w-full" :alt="imageAlt" />
      </client-only>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ image: string, imageAlt: string }>()
</script>
