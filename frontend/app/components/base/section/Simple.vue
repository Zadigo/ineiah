<template>
  <div class="grid grid-cols-1 xl:grid-cols-2 gap-10">
    <div class="transition-all ease-in has-[img]:hover:zoom-in-20">
      <client-only>
        <nuxt-img v-motion-slide-visible-left :delay="200" :src="image" :alt="imageAlt" class="rounded-lg aspect-square object-cover" />
      </client-only>
    </div>

    <client-only>
      <div v-motion-slide-visible-right :delay="400" class="flex flex-col justify-center dark:text-primary-200">
        <h2 class="text-5xl font-bold mb-10 text-primary-500 font-title leading-15">
          <slot name="title" />
        </h2>

        <slot />

        <div id="cta-1" class="mt-10">
          <slot name="cta" />
        </div>
      </div>
    </client-only>
  </div>
</template>

<script setup lang="ts">
defineProps<{ image: string, imageAlt: string }>()
</script>
