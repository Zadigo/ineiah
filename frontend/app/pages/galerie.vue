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

const testImages = [
  {
    name: 'Lissage brésilien',
    image: '/hero/hair6.jpg'
  },
  {
    name: 'Boucles naturelles',
    image: '/hero/hair7.jpg'
  },
  {
    name: 'Coupe pixie moderne',
    image: '/hero/hair10.jpg'
  },
  {
    name: 'Brushing volumineux',
    image: '/hero/hair9.jpg'
  },
  {
    name: 'Coupe dégradée',
    image: '/hero/hair11.jpg'
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
    name: 'Coupe afro',
    image: '/hero/hair7.jpg'
  },
  {
    name: 'Coupe undercut',
    image: '/hero/hair9.jpg'
  },
  {
    name: 'Coupe bob asymétrique',
    image: '/hero/hair10.jpg'
  },
  {
    name: 'Coupe chignon',
    image: '/hero/hair11.jpg'
  },
  {
    name: 'Coupe tresse',
    image: '/hero/hair12.jpg'
  }
]

const search = ref('')

const filteredImages = computed(() => {
  return testImages.filter(img => img.name.toLowerCase().includes(search.value.toLowerCase())) // Currently returns all images
})
</script>
