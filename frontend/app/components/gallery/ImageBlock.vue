<template>
  <article ref="imageEl" :id="createElementId('gallery-image', null, image.name)" :class ="theme" class="group overflow-hidden rounded-xl transition-all duration-300 relative cursor-pointer">
    <!-- Image -->
    <gallery-slider v-if="isSlider" :alt="suffixLegalName(image.alt)" :images="image.image" />
    <!-- <lazy-gallery-video-block v-else-if="image.category === 'video'" :image="image" hydrate-on-idle /> -->
    <nuxt-img v-else :src="typeof image.image === 'string' ? image.image : ''" :alt="suffixLegalName(image.alt)" class="hover:scale-105 hover:rotate-2 transition-all ease-in-out aspect-square object-cover w-full" @click.stop="() => toggleSelected()" />

    <!-- Infos -->
    <div class="absolute left-5 bottom-5 space-y-1">
      <h3 class="text-primary-100 text-xl font-semibold">{{ image.name }}</h3>
      <lazy-gallery-info-block v-if="!isMobile" :is-hovered="isHovered" :is-selected="isSelected" :image="image" hydrate-on-idle />
      <gallery-mobile-info-block v-else :image="image" />

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
import type { GalleryImage, Nullable } from '~/types'

const props = defineProps<{ image: GalleryImage }>()

/**
 * Utils
 */

const { instagram } = useSocialLinks()

const { get, suffixLegalName } = useBusinessDetails()

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
