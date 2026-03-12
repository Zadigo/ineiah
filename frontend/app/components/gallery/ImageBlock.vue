<template>
  <article ref="imageEl" :id="createElementId('gallery-image', null, image.name)" :class ="theme" class="group overflow-hidden rounded-xl transition-all duration-300 relative cursor-pointer">
    <!-- Image -->
    <gallery-slider v-if="isSlider" :images="image.image" />
    <nuxt-img v-else :src="typeof image.image === 'string' ? image.image : ''" :alt="`Cliente de ${get('legalName')}`" class="hover:scale-105 hover:rotate-2 transition-all ease-in-out aspect-square object-cover w-full" @click.stop="() => toggleSelected()" />

    <!-- Infos -->
    <div class="absolute left-5 bottom-5 space-y-1">
      <h3 class="text-primary-100 text-xl font-semibold">{{ image.name }}</h3>
      <transition 
        enter-from-class="opacity-0" 
        enter-to-class="opacity-100 animate-fadeindown"
      >
        <div v-if="isHovered && !isMobile" class="text-primary-50 text-sm font-thin">
          <p v-if="!isSelected" class="flex items-center gap-2">{{ $t("En savoir plus") }} <icon name="lucide:fullscreen" /></p>
          <p v-if="image.author.instagram">Réalisée par <a :href="`https://www.instagram.com/${image.author.instagram}`" target="_blank" class="underline underline-offset-3 font-semibold">@{{ image.author.instagram }}</a></p>
        </div>
      </transition>

      <!-- CTA -->
      <div class="flex gap-2">
        <lazy-base-telephone-button v-if="isSelected" :id="createElementId('tel-service-gallery', null, image.name)" text="Choisir cette coupe" />

        <volt-secondary-button v-if="isSelected" :id="createElementId('link-share', null, image.name)" severity="info" rounded @click.stop="share()">
          <icon name="i-fa6-solid:share" />
        </volt-secondary-button>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { Share } from '@capacitor/share'
import type { GalleryImage } from '~/types'

const props = defineProps<{ image: GalleryImage }>()

const { get } = useBusinessDetails()

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

/**
 * Analytics
 */

const { sendEvent } = useAnalyticsEvent()

async function share() {
  await Share.share({
    title: props.image.name,
    text: `Découvrez cette création de ${get('legalName')}`,
    url: window.location.href,
    dialogTitle: 'Partagez cette coupe'
  })

  sendEvent(
    defineAnalyticsEvent('share', {
      imageName: props.image.name,
      imageUrl: props.image.url || ''
    })
  )
}
</script>
