<template>
  <div class="w-full h-[100vh] bg-center bg-no-repeat bg-cover overflow-hidden">
    <ShadCarousel :plugins="[Autoplay({ delay: 10000 })]" v-slot="{ canScrollNext }" class="relative w-full h-full">
      <ShadCarouselContent>
        <ShadCarouselItem v-for="(item, index) in items" :key="index">
          <div class="relative">
            <img :src="item.image" :alt="item.alt" />

            <div id="lead" class="text-brand-brown-50 p-2 absolute top-3/12 left-4/16 z-10 text-left md:max-w-5xl md:p-10 md:text-center">
              <h1 class="text-6xl md:text-7xl font-bold mb-5 animate animate-fade-up">
                {{ item.leadTitle }}
              </h1>
              
              <p class="text-2xl font-normal">
                {{ item.leadDescription }}
              </p>

              <div class="flex flex-wrap justify-start md:flex-nowrap md:justify-center items-center space-x-5">
                <ShadButton id="link-offer-hero" variant="outline" size="xl" class="rounded-full mt-10 md:mt-5 w-full md:w-auto" as-child>
                  <NuxtLinkLocale to="/nos-prestations">
                    Prestations
                  </NuxtLinkLocale>
                </ShadButton>

                <ShadButton id="tel-hero" size="xl" class="rounded-full mt-5 w-full md:w-auto" as-child>
                  <a href="tel:+33">
                    <Icon name="fa-solid:phone" />
                    Nous appeller
                  </a>
                </ShadButton>
              </div>
            </div>
          </div>
        </ShadCarouselItem>
      </ShadCarouselContent>
      <ShadCarouselPrevious />
      <ShadCarouselNext v-if="canScrollNext" />
    </ShadCarousel>
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
