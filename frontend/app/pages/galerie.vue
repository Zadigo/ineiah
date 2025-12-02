<template>
  <section id="gallery">
    <div class="max-w-7xl mx-auto mb-5 px-5 md:px-10 xl:px-0">
      <div class="mb-5 bg-secondary-100 dark:bg-secondary-800 p-20 py-40 rounded-xl shadow-md bg-center bg-cover" :style="{ backgroundImage: 'url(/hero/hair11.jpg)' }">
        <div>
          <h2 class="text-3xl font-extrabold text-primary-50 dark:text-primary-100">Galerie</h2>
          <p class="text-lg text-primary-50 dark:text-primary-100">Découvrez notre collection de coupes et styles réalisés par nos experts.</p>

          <div class="mt-5 flex justify-start gap-5 flex-wrap md:flex-nowrap">
            <volt-input-text v-model="search" placeholder="Rechercher une coupe ou un style" class="md:w-100" />
            
            <div class="flex justify-start gap-2">
              <volt-tag v-for="idx in 5" :key="idx" value="Cheveux italiens" class="cursor-pointer" severity="contrast" />
            </div>
          </div>
        </div>
      </div>
  
      <gallery-base :images="filteredImages" />
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

const testImages = [
  {
    name: 'Lissage brésilien',
    image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
  },
  {
    name: 'Boucles naturelles',
    image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg'
  },
  {
    name: 'Coupe pixie moderne',
    image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg'
  },
  {
    name: 'Brushing volumineux',
    image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg'
  },
  {
    name: 'Coupe dégradée',
    image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg'
  },
  {
    name: 'Chignon élégant',
    image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg'
  },
  {
    name: 'Nom de la coupe',
    image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg'
  },
  {
    name: 'Coupe afro',
    image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg'
  },
  {
    name: 'Coupe undercut',
    image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg'
  },
  {
    name: 'Coupe bob asymétrique',
    image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg'
  },
  {
    name: 'Coupe chignon',
    image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg'
  },
  {
    name: 'Coupe tresse',
    image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg'
  }
]

const search = ref('')

const filteredImages = computed(() => {
  return testImages.filter(img => img.name.toLowerCase().includes(search.value.toLowerCase())) // Currently returns all images
})
</script>
