<template>
  <div ref="imageEl" :class="theme" class="overflow-hidden rounded-xl transition-all duration-300 relative cursor-pointer">
    <!-- Image -->
    <nuxt-img :src="image.image" class="aspect-square object-cover w-full" @click.stop="() => toggleSelected()" />

    <!-- Mask -->
    <div v-if="isHovered && !isSelected && !isMobile" class="bg-primary-900/40 absolute top-0 left-0 w-full h-full" @click.stop="() => toggleSelected()" />

    <!-- Infos -->
    <div class="absolute left-5 bottom-5 space-y-2">
      <h3 class="text-primary-100 text-xl font-semibold">{{ image.name }}</h3>
      <p class="text-primary-50 text-sm">En savoir plus
        <icon name="i-fa6:fullscreen" />
      </p>

      <!-- CTA -->
      <volt-button v-if="isSelected" rounded>
        Je réserve cette coupe
      </volt-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GalleryImage } from '~/types'

defineProps<{ image: GalleryImage }>()

/**
 * Media Query
 */

const isMobile = useMediaQuery('(max-width: 768px)')

const [isSelected, toggleSelected] = useToggle()

const imageEl = useTemplateRef('imageEl')
onClickOutside(imageEl, () => isSelected.value = false)

/**
 * Themes
 */

const isHovered = useElementHover(imageEl)

const theme = computed(() => {
  return [
    {
      'row-span-2 md:col-span-2 md:row-span-2': isSelected.value
    }
  ]
})
</script>
