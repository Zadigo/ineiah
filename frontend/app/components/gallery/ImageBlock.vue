<template>
  <div ref="imageEl" :class="theme" class="group overflow-hidden rounded-xl transition-all duration-300 relative cursor-pointer">
    <!-- Image -->
    <gallery-slider v-if="isSlider" :images="image.image" />
    <nuxt-img v-else :src="typeof image.image === 'string' && image.image" class="hover:scale-105 hover:rotate-2 transition-all ease-in-out aspect-square object-cover w-full" alt="" @click.stop="() => toggleSelected()" />

    <!-- Mask -->
    <!-- <div v-if="isHovered && !isSelected && !isMobile" class="bg-primary-900/10 absolute top-0 left-0 w-full h-full" @click.stop="() => toggleSelected()" /> -->

    <!-- Infos -->
    <div class="absolute left-5 bottom-5 space-y-1">
      <h3 class="text-primary-100 text-xl font-semibold">{{ image.name }}</h3>
      <transition enter-from-class="opacity-0" enter-to-class="opacity-100 animate-fadeindown">
        <p v-if="isHovered && !isMobile" class="text-primary-50 text-sm font-thin">En savoir plus
          <icon name="i-fa6:fullscreen" />
        </p>
      </transition>

      <!-- CTA -->
      <div class="flex gap-2">
        <volt-button v-if="isSelected" rounded>
          <icon name="i-fa6-solid:phone" />
        </volt-button>

        <volt-secondary-button v-if="isSelected" severity="info" rounded @click.stop="share()">
          <icon name="i-fa6-solid:share" />
        </volt-secondary-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Share } from '@capacitor/share'
import type { GalleryImage } from '~/types'

const props = defineProps<{ image: GalleryImage }>()

/**
 * Slider
 */
const isSlider = computed(() => Array.isArray(props.image.image) && props.image.image.length > 1)

/**
 * Media Query
 */

const isMobile = useMediaQuery('(max-width: 768px)')

/**
 * Selection
 */

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

/**
 * Sharing
 */

async function share() {
  await Share.share({
    title: props.image.name,
    text: 'Really awesome thing you need to see right meow',
    url: window.location.href,
    dialogTitle: 'Partagez cette coupe'
  })
}
</script>
