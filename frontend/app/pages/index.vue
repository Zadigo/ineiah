<template>
  <section id="hero" class="has-[p]:space-y-5 has-[p]:leading-8 has-[h2]:leading-15 relative">
    <!-- Hero -->
    <hero-top-image v-if="showImage" />
    <hero-top-video v-else-if="showVideo" />
    <hero-top-carousel v-else-if="showCarousel" />

    <!-- Intermediate-1 -->
    <div class="p-5 md:p-15">
      <div class="grid grid-rows-2 auto-rows-min md:grid-cols-2 md:grid-rows-none gap-10">
        <div class="transition-all ease-in has-[img]:hover:zoom-in-20">
          <img ref="imageFirstEl" src="/hero/hair8.jpg" class="rounded-lg aspect-square object-cover" alt="" />
        </div>

        <div class="flex flex-col justify-center">
          <h2 ref="intermediateOneEl" class="text-5xl font-bold mb-10 text-brand-brown-500 font-title leading-15">
            Plus q'un salon, une <span class="text-brand-brown-800">expérience</span> de vie
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
            <ShadButton id="tel-intermadiate-1" size="xl" class="rounded-full mt-5" as-child>
              <BaseTelephoneLink :with-icon="true" text="Je veux me faire belle" />
            </ShadButton>
          </div>
        </div>
      </div>
    </div>

    <!-- Intermediate-2 -->
    <div class="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 auto-rows-min brand-500 mt-10 bg-brand-brown-500">
      <div class="items-center md:flex md:p-10">
        <div class="p-10 text-center md:text-left md:max-w-lg">
          <h2 ref="intermediateTwoEl" class="text-3xl font-bold mb-4 md:text-5xl text-brand-brown-800 font-title leading-10 md:leading-15">
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
        <img src="/hero/hair2.jpg" class="aspect-square object-cover" alt="" />
      </div>
    </div>

    <!-- Brands -->
    <div class="my-5 md:p-10">
      <h3 class="text-center text-2xl font-bold text-brand-brown-500 mb-5 md:mb-0">
        Nos marques
      </h3>

      <div class="grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-4 md:grid-rows-none md:p-10">
        <HeroBrand src="/brands/Bouclème.png" alt="Logo de la marque Bouclème" />
        <HeroBrand src="/brands/Bouclème.png" alt="Logo de la marque Bouclème" />
        <HeroBrand src="/brands/Bouclème.png" alt="Logo de la marque Bouclème" />
        <HeroBrand src="/brands/Bouclème.png" alt="Logo de la marque Bouclème" />
      </div>
    </div>

    <!-- Photocall -->
    <div class="grid grid-rows-2 grid-cols-2 gap-0 auto-rows-min rounded-md md:grid-rows-1 md:grid-cols-4">
      <HeroPhotoCall src="/hero/hair2.jpg" alt="Some alt" title="Cheveux fins" />
      <HeroPhotoCall src="/hero/hair3.jpg" alt="Some alt" title="Cheveux fins" />
      <HeroPhotoCall src="/hero/hair4.jpg" alt="Some alt" title="Cheveux fins" />
      <HeroPhotoCall src="/hero/hair5.jpg" alt="Some alt" title="Cheveux fins" />
    </div>

    <dev-only>
      <!-- VideoCall -->
      <div class="max-w-8xl mx-auto pt-20 px-20">
        <div class="grid grid-cols-2 bg-brand-brown-200 rounded-md">
          <video class="aspect-video object-fill rounded-lg" autoplay muted loop playsinline>
            <source src="https://freelance-data-storage.s3.us-east-1.amazonaws.com/hair.mp4" type="video/mp4">
          </video>

          <div class="p-10 rounded-tr-md rounded-br-md flex-col justify-center content-center text-center max-w-3xl">
            <h2 class="font-semibold uppercase text-brand-brown-800 text-4xl">
              Une sublime restructuration de la coupe
            </h2>

            <p class="text-2xl font-light mt-10 mb-3">
              Des boucles souples et en bonne santé sans perdre de longueur, c'est tout ce qu'on aime 🤭
            </p>

            <p class="text-2xl font-light">
              Alors ça vous plaît ?
            </p>
          </div>
        </div>

        <div>
          <div class="p-20 text-center text-brand-brown-500">
            <p class="font-bold mb-3 text-4xl">Rejoint le <span class="text-brand-brown-800">#curlymouvement</span></p>
            <p class="text-md">Retrouvez-nous sur instagram <a href="http://example.com" title="http://example.com">@hairstudiobyanissa</a></p>
          </div>
        </div>
      </div>
    </dev-only>

    <dev-only>
      <!-- Template Settings -->
      <client-only>
        <div class="fixed p-5 right-0 top-6/12 z-50 rounded-md bg-white m-3 shadow-md space-y-2">
          <p class="text-bold mb-4">Template settings</p>

          <div class="flex items-center space-x-2">
            <shad-switch v-model="showImage" />
            <label for="">Image</label>
          </div>

          <div class="flex items-center space-x-2">
            <shad-switch v-model="showVideo" />
            <label for="">Video</label>
          </div>

          <div class="flex items-center space-x-2">
            <shad-switch v-model="showCarousel" />
            <label for="">Carousel</label>
          </div>
        </div>
      </client-only>
    </dev-only>
  </section>
</template>

<script setup lang="ts">
/**
 * NOTE: The Hero is in client-only only for dev purposes to be able to
 * switch between different hero types. In the final proposition, remove the
 * client-only
 */

import { businessDetails } from '~/data'

const { showImage, showCarousel, showVideo } = useDevComposable()

const i18n = useI18n()

/**
 * Animations
 */

const intermediateOneEl = useTemplateRef<HTMLElement>('intermediateOneEl')
const intermediateTwoEl = useTemplateRef<HTMLElement>('intermediateTwoEl')
const imageFirstEl = useTemplateRef<HTMLElement>('imageFirstEl')

if (import.meta.client) {
  onMounted(() => {
    const textClasses = ['animate-in', 'fade-in-50', 'slide-in-from-right-5', 'duration-500']

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
    observe(imageFirstEl, ['animate-in', 'zoom-in-90', 'duration-800'])
  })
}

const titles: Record<string, string> = {
  fr: 'Coupe et coiffures tout type de cheveux'
}

useSeoMeta({
  title: titles[i18n.locale.value],
  description: 'Sublime ta singularité',
  titleTemplate: `%s | ${businessDetails.legalName}`,
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

defineOgImageComponent('NuxtSeo', {
  title: titles[i18n.locale.value],
  description: 'Sublime ta singularité',
  theme: '#ff0000',
  colorMode: 'dark'
})
</script>
