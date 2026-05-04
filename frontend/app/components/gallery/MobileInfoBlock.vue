<template>
  <div id="partners" class="text-sm text-primary-50 font-thin">
    <p class="flex items-center gap-2">{{ $t("En savoir plus") }}
      <icon name="lucide:fullscreen" />
    </p>

    <a v-if="image.model.instagram" :href="instagram(image.model.instagram)" target="_blank" class="underline underline-offset-3 font-semibold italic">
      @{{ image.model.instagram }}
    </a>

    <p v-if="image.author.instagram">
      par
      <a :href="instagram(image.author.instagram)" target="_blank" class="underline underline-offset-3 font-semibold">
        @{{ image.author.instagram }}
      </a>
    </p>
  </div>
</template>

<script lang="ts" setup>
import type { GalleryImage } from '~/types'

defineProps<{
  image: GalleryImage
}>()

/**
 * Utils
 */

const { instagram } = useSocialLinks()
</script>
