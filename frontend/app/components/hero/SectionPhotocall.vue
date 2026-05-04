<template>
  <div class="grid grid-rows-2 grid-cols-2 gap-0 auto-rows-min rounded-md md:grid-rows-1 md:grid-cols-4">
    <client-only>
      <motion-group preset="fadeVisibleOnce">
        <article v-for="item in items" :key="item.title" :delay="randomMotionDelays()">
          <hero-photo-call :item="item" :alt="` Service de ${item.subtitle} - ${item.title} de la ${get('legalName')}`" />
        </article>
      </motion-group>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import type { Arrayable, Photocall } from '~/types'

const { get } = useBusinessDetails()
const items: Arrayable<Photocall> = [
  {
    src: "/images/photocall/customer20-small.webp",
    alt: "",
    subtitle: "Coupe",
    title: "Homme"
  },
  {
    src: "/images/photocall/customer22-small.webp",
    alt: "",
    subtitle: "Coupe",
    title: "Cheveux courts"
  },
  {
    src: "/images/photocall/customer23-small.webp",
    alt: "",
    subtitle: "Coupe",
    title: "Cheveux mi-longs"
  },
  {
    src: "/images/photocall/customer24-small.webp",
    alt: "",
    subtitle: "Coupe",
    title: "Cheveux longs"
  },
  {
    src: "/images/photocall/customer25.jpg",
    alt: "",
    subtitle: "Coupe",
    title: "Cheveux XL"
  },
  {
    src: "/images/photocall/customer23-small.webp",
    alt: "",
    subtitle: "Soin",
    title: "Homme"
  },
  {
    src: "/images/photocall/customer23-small.webp ",
    alt: "",
    subtitle: "Soin",
    title: "Femme"
  },
  {
    src: "/images/photocall/customer21-small.webp",
    alt: "",
    subtitle: "Soin",
    title: "Cheveux homme"
  }
]
</script>
