<template>
  <div ref="sliderEl" id="slider" class="relative w-full min-h-[223px] xl:min-h-[420px] overflow-hidden rounded-xl">
    <nuxt-img :src="images[index]" :class="{ 'zoom-in-10': isHovered }" class="aspect-square object-cover w-full transition-all duration-300" alt="" />

    <transition mode="out-in" enter-active-class="transition-all animate-ease-in-out duration-500" enter-from-class="opacity-0" enter-to-class="opacity-100 animate-fadeindown" leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div v-if="isHovered && !isMobile" class="absolute top-0 left-0 w-full h-full flex items-center justify-between p-5">
        <volt-button variant="link" severity="info" rounded @click="() => prev()">
          <icon name="i-fa6-solid:arrow-left" />
        </volt-button>

        <volt-button variant="link" severity="info" rounded @click="() => next()">
          <icon name="i-fa6-solid:arrow-right" />
        </volt-button>
      </div>
    </transition>

    <!-- Indicators -->
    <div v-if="images.length > 1" class="absolute top-5 left-1/2 -translate-x-1/2 flex gap-2">
      <span v-for="(image, i) in images" :key="i" :class="['w-3 h-3 rounded-full transition-all duration-300', i === index ? 'bg-primary-100' : 'bg-primary-50/50']" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GalleryImage } from '~/types';

const props = defineProps<{ images: GalleryImage['image'] }>()
const sliderEl = useTemplateRef('sliderEl')

/**
 * Cycle
 */

const { index, next, prev } = useCycleList(props.images)

/**
 * Mobile
 */

const isMobile = useMediaQuery('(max-width: 768px)')

/**
 * Swiping
 */

const { isSwiping, direction } = useSwipe(sliderEl)

watch(isSwiping, (newValue) => {
  if (newValue === false) {
    if (direction.value === 'left') {
      next()
    } else if (direction.value === 'right') {
      prev()
    }
  }
})

/**
 * Hovered
 */

const isHovered = useElementHover(sliderEl)

</script>
