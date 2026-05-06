<template>
  <div id="image" class="grid grid-cols-1 md:grid-cols-3 auto-rows-max grid-flow-row-dense gap-2 transition-all duration-300">
    <motion-group preset="fadeVisibleOnce">
      <gallery-image-block v-for="(image, idx) in visibleImages" :key="idx" :image="image" :delay="randomMotionDelays()" />
    </motion-group>
  </div>
</template>

<script setup lang="ts">
import type { GalleryImage, Arrayable } from '~/types'

const props = defineProps<{ images: Arrayable<GalleryImage> }>()

/**
 * Images
 */

const visibleImages = computed(() => props.images.filter(image => image.isVisible))
</script>
