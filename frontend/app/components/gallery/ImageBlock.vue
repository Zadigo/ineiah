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
