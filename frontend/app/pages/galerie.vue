<template>
  <section id="gallery">
    <div class="max-w-7xl mx-auto mb-5 px-5 md:px-10 xl:px-0">
      <div class="mb-5 bg-secondary-100 dark:bg-secondary-800 p-20 py-40 rounded-xl shadow-md bg-center bg-cover" :style="{ backgroundImage: 'url(/hero/hair11.jpg)' }">
        <div>
          <h2 class="text-3xl font-extrabold text-primary-50 dark:text-primary-100">
            {{ $t('Galerie') }}
          </h2>
          <p class="text-lg text-primary-50 dark:text-primary-100">
            {{ $t('Découvrez notre collection de coupes et styles réalisés par nos experts.') }}
          </p>

          <div class="mt-5 flex justify-start gap-5 flex-wrap md:flex-nowrap">
            <volt-input-text v-model="search" :placeholder="$t('Rechercher une coupe ou un style')" class="w-full md:w-100" />
            
            <div class="hidden justify-start gap-2 xl:flex">
              <volt-tag v-for="idx in 5" :key="idx" value="Cheveux italiens" class="cursor-pointer" severity="contrast" />
            </div>
          </div>
        </div>
      </div>
      
      <!-- Images -->
      <gallery-base :images="filteredImages" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Arrayable, GalleryImage } from '~/types'

definePageMeta({
  title: 'Gallery'
})

const testImages: Arrayable<GalleryImage> = [
  {
    name: 'Lissage brésilien',
    image: '/hero/hair6.jpg'
  },
  {
    name: 'Boucles naturelles',
    image: '/testimages/jpeg/customer10.jpg'
  },
  {
    name: 'Coupe pixie moderne',
    image: '/hero/hair10.jpg'
  },
  {
    name: 'Brushing volumineux',
    image: '/testimages/jpeg/customer18.jpg'
  },
  {
    name: 'Coupe dégradée',
    image: '/testimages/jpeg/customer6.jpg'
  },
  {
    name: 'Chignon élégant',
    image: '/hero/hair12.jpg'
  },
  {
    name: 'Nom de la coupe',
    image: '/hero/hair6.jpg'
  },
  {
    name: 'Coupe chignon',
    image: '/testimages/jpeg/customer15.jpg'
  },
  {
    name: 'Coupe afro',
    image: '/testimages/jpeg/customer11.jpg'
  },
  {
    name: 'Coupe undercut',
    image: [
      '/testimages/jpeg/customer13.jpg',
      '/testimages/jpeg/customer14.jpg',
      '/testimages/jpeg/customer17.jpg'
    ]
  },
  {
    name: 'Coupe bob asymétrique',
    image: '/hero/hair10.jpg'
  },
  {
    name: 'Coupe tresse',
    image: [
      '/testimages/jpeg/customer4.jpg',
      '/testimages/jpeg/customer5.jpg'
    ]
  }
]

const search = ref('')

const filteredImages = computed(() => {
  return testImages.filter(img => img.name.toLowerCase().includes(search.value.toLowerCase())) // Currently returns all images
})

// const imagesNames = computed(() => new Set(testImages.map(img => img.name)))

// function setSearch(name: string) {
//   search.value = name
// }
</script>
