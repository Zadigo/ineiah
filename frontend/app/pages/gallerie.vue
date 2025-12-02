<template>
  <section id="gallery" class="mb-5">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto my-20">
      <div v-for="(imageBlock, i) in imageBlocks" :key="i" class="grid gap-4">
        <div v-for="(image, x) in imageBlock" :key="x" class="relative">
          <img class="h-auto max-w-full rounded-lg cursor-pointer hover:opacity-80" :src="image.image" :alt="image.name">

          <div id="infos" class="absolute left-2 bottom-2">
            <p class="mt-2 text-md mb-3 uppercase font-bold text-brand-brown-900 dark:text-brand-brown-100">{{ image.name }}</p>
            <base-telephone-button size="small">
              Je veux cette coupe
            </base-telephone-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ImageBlock {
  name: string
  image: string
}

definePageMeta({
  name: 'gallery'
})

const imageBlocks: ImageBlock[][] = [
  [
    {
      name: 'Nom de la coupe',
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
    },
    {
      name: ' Nom de la coupe',
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg'
    },
    {
      name: 'Nom de la coupe',
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg'
    }
  ],
  [
    {
      name: 'Nom de la coupe',
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg'
    },
    {
      name: 'Nom de la coupe',
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg'
    },
    {
      name: 'Nom de la coupe',
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg'
    }
  ],
  [
    {
      name: 'Nom de la coupe',
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg'
    },
    {
      name: 'Nom de la coupe',
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg'
    },
    {
      name: 'Nom de la coupe',
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg'
    }
  ],
  [
    {
      name: 'Nom de la coupe',
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg'
    },
    {
      name: 'Nom de la coupe',
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg'
    },
    {
      name: 'Nom de la coupe',
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg'
    }
  ]
]
</script>
