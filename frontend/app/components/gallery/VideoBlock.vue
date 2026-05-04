<template>
  <div class="overflow-hidden rounded-xl transition-all duration-300 relative cursor-pointer">
    <video ref="videoEl" :controls="false" muted class="w-full h-auto aspect-video object-cover rounded-xl" @click.stop="playVideo()">
      <source :src="image.image || ''" type="video/mp4">
      <source :src="image.image || ''" type="video/webm">
      <source :src="image.image || ''" type="video/ogg">
      <source :src="image.image || ''" type="video/mov">
      {{ $t("Votre navigateur ne supporte pas la lecture de cette vidéo.") }} 
    </video>
  </div>
</template>

<script setup lang="ts">
import type { GalleryImage } from '~/types'

defineProps<{ image: GalleryImage }>()

const videoEl = useTemplateRef<HTMLVideoElement>('videoEl')

const isPlaying = ref(false)
  
function playVideo() {
  if (isDefined(videoEl)) {
    if (isPlaying.value) {
      videoEl.value.pause()
    } else {
      videoEl.value.play()
    }
    isPlaying.value = !isPlaying.value
  }
}
</script>
