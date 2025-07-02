<template>
  <section id="hero" class="has-[p]:space-y-5 has-[p]:leading-8 has-[h2]:leading-15">
    <!-- Hero -->
    <div ref="heroEl" class="w-full h-[98vh] bg-center bg-no-repeat bg-cover flex items-center">
      <div id="lead" class="md:max-w-5xl md:mx-auto text-left md:text-center text-white p-5 md:p-10">
        <h1 class="text-6xl md:text-7xl font-bold mb-5 animate animate-fade-up">Sublime ta singularité</h1>
        <p class="text-2xl font-normal">This is a sublead that we should be using</p>

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

    <!-- Intermediate-1 -->
    <div class="p-5 md:p-15">
      <div class="grid grid-rows-2 auto-rows-min md:grid-cols-2 md:grid-rows-none gap-10">
        <div class="transition-all ease-in has-[img]:hover:zoom-in-20">
          <img src="/hero/hair8.jpg" class="rounded-lg aspect-square object-cover" alt="" />
        </div>
        
        <div class="flex flex-col justify-center">
          <h2 ref="intermediateOneEl" class="text-5xl font-bold brand-500 mb-10 text-brand-pink-500 font-title leading-15">
            Plus q'un salon, une <span class="text-brand-pink-600">expérience</span> de vie
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Perspiciatis accusamus possimus, consequuntur totam minus et, eaque placeat quo 
            tempora voluptatem saepe praesentium animi, asperiores exercitationem commodi! 
            Facere maiores quidem minima.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Perspiciatis accusamus possimus, consequuntur totam minus et, eaque placeat quo 
            tempora voluptatem saepe praesentium animi, asperiores exercitationem commodi! 
            Facere maiores quidem minima.
          </p>

          <div>
            <ShadButton id="tel-intermadiate-1" size="xl" class="rounded-full mt-5 bg-brand-pink-800" as-child>
              <a href="tel:+33">
                <Icon name="fa-solid:phone" />
                Je veux me faire belle
              </a>
            </ShadButton>
          </div>
        </div>
      </div>
    </div>

    <!-- Intermediate-2 -->
    <div class="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 auto-rows-min brand-500 mt-10 bg-brand-pink-500">
      <div class="items-center md:flex md:p-10">
        <div class="p-10 text-center md:text-left md:max-w-lg">
          <h2 ref="intermediateTwoEl" class="text-3xl font-bold mb-4 md:text-5xl text-brand-pink-800 font-title leading-10 md:leading-15">
            L'histoire de <span class="italic">{{ businessDetails.legalName }}</span>
          </h2>
          
          <p class="font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Omnis obcaecati beatae velit ipsa quos sapiente at sunt. Ut blanditiis 
            dolorem, magnam animi, doloribus error dolores possimus quia eos voluptatum in!
          </p>
          
          <ShadButton size="xl" class="rounded-full mt-10" as-child>
            <NuxtLinkLocale to="/notre-histoire">
              Découvrir
            </NuxtLinkLocale>
          </ShadButton>
        </div>
      </div>
      
      <div class="h-auto">
        <img src="/hero/vert1.jpeg" class="aspect-square object-cover" alt="" />
      </div>
    </div>

    <!-- Brands -->
    <div class="my-5 md:p-10">
      <h3 class="text-center text-2xl font-bold text-brand-pink-500 mb-5 md:mb-0" >
        Nos marques
      </h3>

      <div class="grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-4 md:grid-rows-none md:p-10">
        <HeroBrand />
        <HeroBrand />
        <HeroBrand />
        <HeroBrand />
      </div>
    </div>

    <!-- Photocall -->
    <div class="grid grid-rows-2 grid-cols-2 gap-0 auto-rows-min md:grid-rows-1 md:grid-cols-4">
      <HeroPhotoCall src="/hero/hair2.jpg" alt="Some alt" title="Cheveux fins" />
      <HeroPhotoCall src="/hero/hair3.jpg" alt="Some alt" title="Cheveux fins" />
      <HeroPhotoCall src="/hero/hair4.jpg" alt="Some alt" title="Cheveux fins" />
      <HeroPhotoCall src="/hero/hair5.jpg" alt="Some alt" title="Cheveux fins" />
    </div>
  </section>
</template>

<script lang="ts">
const titles: Record<string, string> = {
  fr: 'Coupe et coiffures tout type de cheveux'
}

useSeoMeta({
  // title: titles[i18n.locale.value],
  title: titles.fr,
  description: 'Sublime ta singularité',
  titleTemplate: "%s | La beauté d'Inéïah",
  ogImage: 'https://dev-client.gency313.fr/hero/hair1.jpg'
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://example.com/'
    }
  ]
})

// defineOgImageComponent('NuxtSeo', {
//   title: 'Hello OG Image 👋',
//   description: 'Look at me in dark mode',
//   theme: '#ff0000',
//   colorMode: 'dark',
// })
</script>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'
import { businessDetails } from '~/data'

// const i18n = useI18n()

const heroEl = useTemplateRef<HTMLElement>('heroEl')
const intermediateOneEl = useTemplateRef<HTMLElement>('intermediateOneEl')
const intermediateTwoEl = useTemplateRef<HTMLElement>('intermediateTwoEl')

if (import.meta.client) {
  onMounted(() => {
    const textClasses = ['animate-in', 'fade-in-50', 'slide-in-from-left-5', 'duration-500']

    /**
     * Animates an element in the document given the provided classes
     * @param el The element to animate
     * @param classes The classes to use for the animation
     */
    function observe(el: typeof intermediateOneEl, classes: string[]) {
        useIntersectionObserver(el, ([entry]) => {
          if (entry?.isIntersecting) {
            el.value?.classList.add(...classes)
          } else {
            el.value?.classList.remove(...classes)
          }
        }
      )
    }

    observe(intermediateOneEl, textClasses)
    observe(intermediateTwoEl,textClasses)
  })
}

onMounted(() => {
  if (heroEl.value) {
    heroEl.value.style.backgroundImage = "url('/hero/hair1.jpg')"
  }
})
</script>
