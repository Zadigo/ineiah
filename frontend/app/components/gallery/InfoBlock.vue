<template>
  <transition enter-from-class="opacity-0" enter-to-class="opacity-100 animate-fadeindown">
    <div v-if="isHovered" class="text-primary-50 text-sm font-thin">
      <p v-if="!isSelected" class="flex items-center gap-2">{{ $t("En savoir plus") }}
        <icon name="lucide:fullscreen" />
      </p>

      <div id="partners">
        <a v-if="image.model.instagram" :href="instagram(image.model.instagram)" target="_blank" class="underline underline-offset-3 font-semibold">
          @{{ image.model.instagram }}
        </a>

        <p v-if="image.author.instagram">
          Réalisée par
          <a :href="instagram(image.author.instagram)" target="_blank" class="underline underline-offset-3 font-semibold">
            @{{ image.author.instagram }}
          </a>
        </p>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import type { GalleryImage } from '~/types'

defineProps<{
  isHovered: boolean
  isSelected: boolean
  image: GalleryImage
}>()

/**
 * Utils
 */

const { instagram } = useSocialLinks()

</script>
