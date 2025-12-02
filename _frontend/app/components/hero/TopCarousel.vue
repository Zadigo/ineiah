<template>
  <div class="w-full h-screen bg-center bg-no-repeat bg-cover overflow-hidden">
    <volt-custom-carousel v-slot="{ canScrollNext }" :plugins="[Autoplay({ delay: 10000 })]" class="relative w-full h-full">
      <volt-custom-carousel-content>
        <volt-custom-carousel-item v-for="(item, index) in items" :key="index">
          <div class="relative">
            <img :src="item.image" :alt="item.alt">

            <div id="lead" class="text-brand-brown-50 p-2 absolute top-3/12 left-4/16 z-10 text-left md:max-w-5xl md:p-10 md:text-center">
              <h1 class="text-6xl md:text-7xl font-bold mb-5 animate animate-fade-up">
                {{ item.leadTitle }}
              </h1>

              <p class="text-2xl font-normal">
                {{ item.leadDescription }}
              </p>

              <div class="flex flex-wrap justify-start md:flex-nowrap md:justify-center items-center space-x-5">
                <volt-button id="link-offer-hero"  size="xl" class="rounded-full mt-10 md:mt-5 w-full md:w-auto">
                  <nuxt-link-locale to="/nos-prestations">
                    Prestations
                  </nuxt-link-locale>
                </volt-button>

                <volt-button id="tel-hero" size="xl" class="rounded-full mt-5 w-full md:w-auto">
                  <base-telephone-link with-icon>
                    Nous appeller
                  </base-telephone-link>
                </volt-button>
              </div>
            </div>
          </div>
        </volt-custom-carousel-item>
      </volt-custom-carousel-content>
      <volt-custom-carousel-previous />
      <volt-custom-carousel-next v-if="canScrollNext" />
    </volt-custom-carousel>
  </div>
</template>

<script setup lang="ts">
import Autoplay from 'embla-carousel-autoplay'

const items = [
  {
    leadTitle: 'Sublime ta singularité',
    leadDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, consectetur. Alias saepe assumenda numquam inventore',
    image: '/hero/hair1.jpg',
    alt: ''
  },
  {
    leadTitle: 'Sublime ta singularité 2',
    leadDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, consectetur. Alias saepe assumenda numquam inventore',
    image: '/hero/hair2.jpg',
    alt: ''
  },
  {
    leadTitle: 'Sublime ta singularité 3',
    leadDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, consectetur. Alias saepe assumenda numquam inventore',
    image: '/hero/hair3.jpg',
    alt: ''
  }
]
</script>
