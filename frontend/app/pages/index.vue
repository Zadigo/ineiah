<template>
  <section id="hero" class="has-[p]:space-y-5 has-[p]:leading-8 has-[h2]:leading-15 relative">
    <!-- Hero -->
    <hero-top-image v-if="showImage" />
    <hero-top-video v-else-if="showVideo" />
    <hero-top-carousel v-else-if="showCarousel" />

    <!-- Intermediate-1 -->
    <div class="p-5 md:p-15">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div class="transition-all ease-in has-[img]:hover:zoom-in-20">
          <img ref="imageFirstEl" src="/hero/hair10.jpg" class="rounded-lg aspect-square object-cover" alt="">
        </div>

        <div class="flex flex-col justify-center dark:text-primary-200">
          <h2 ref="intermediateOneEl" class="text-5xl font-bold mb-10 text-primary-500 font-title leading-15">
            Plus q'un salon, une <span class="text-primary-800 dark:text-primary-400">expérience</span> de vie
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

          <div id="cta-1" class="mt-10">
            <base-telephone-button id="tel-intermadiate-1" :with-icon="true" size="large" text="Je veux me faire belle" />
          </div>
        </div>
      </div>
    </div>

    <!-- Intermediate-2 -->
    <div class="grid grid-cols-1 md:grid-cols-2 auto-rows-min mt-10 bg-primary-500 dark:bg-primary-700 dark:text-primary-200">
      <div class="items-center md:flex md:p-10">
        <div class="p-10 text-center md:text-left md:max-w-lg">
          <h2 ref="intermediateTwoEl" class="text-3xl font-bold mb-4 md:text-5xl text-primary-800 dark:text-primary-400 font-title leading-10 md:leading-15">
            L'histoire de <span class="italic">{{ businessDetails.legalName }}</span>
          </h2>

          <p class="font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Omnis obcaecati beatae velit ipsa quos sapiente at sunt. Ut blanditiis
            dolorem, magnam animi, doloribus error dolores possimus quia eos voluptatum in!
          </p>

          <volt-button size="large" class="mt-10" rounded>
            <nuxt-link-locale to="/notre-histoire">
              Découvrir
            </nuxt-link-locale>
          </volt-button>
        </div>
      </div>

      <div class="h-auto">
        <img src="/hero/hair10.jpg" class="aspect-square object-cover" alt="">
      </div>
    </div>

    <!-- Brands -->
    <div class="my-5 md:p-10">
      <h3 class="text-center text-3xl font-bold text-primary-500 mb-5 md:mb-0">
        Nos marques
      </h3>

      <div class="grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-4 md:grid-rows-none md:p-10">
        <hero-brand src="/brands/Bouclème.png" alt="Logo de la marque Bouclème" />
        <hero-brand src="/brands/Bouclème.png" alt="Logo de la marque Bouclème" />
        <hero-brand src="/brands/Bouclème.png" alt="Logo de la marque Bouclème" />
        <hero-brand src="/brands/Bouclème.png" alt="Logo de la marque Bouclème" />
      </div>
    </div>

    <!-- Photocall -->
    <div class="grid grid-rows-2 grid-cols-2 gap-0 auto-rows-min rounded-md md:grid-rows-1 md:grid-cols-4">
      <hero-photo-call src="/hero/hair10.jpg" alt="Some alt" title="Cheveux fins" />
      <hero-photo-call src="/hero/hair3.jpg" alt="Some alt" title="Cheveux longs" />
      <hero-photo-call src="/hero/hair12.jpg" alt="Some alt" title="Cheveux réactivés" />
      <hero-photo-call src="/hero/hair4.jpg" alt="Some alt" title="Cheveux afro" />
    </div>

    <dev-only>
      <base-product-recommendations />
    </dev-only>

    <dev-only>
      <!-- VideoCall -->
      <!-- <div id="video-call-hero" class="max-w-8xl mx-auto pt-20 px-20">
        <div class="grid grid-cols-2 bg-primary-200 dark:bg-primary-700 dark:text-primary-200 rounded-tr-lg rounded-br-lg">
          <video class="aspect-video object-fill rounded-tl-lg rounded-bl-lg" autoplay muted loop playsinline>
            <source src="https://freelance-data-storage.s3.us-east-1.amazonaws.com/hair.mp4" type="video/mp4">
          </video>

          <div class="p-10 rounded-tr-md rounded-br-md flex-col justify-center content-center text-center max-w-3xl">
            <h2 class="font-semibold uppercase text-primary-800 dark:text-primary-400 text-4xl">
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

        <div role="contentinfo">
          <div class="p-20 text-center text-primary-500 dark:text-primary-200">
            <p class="font-bold mb-3 text-4xl">Rejoint le <span class="text-primary-800 dark:text-primary-400">#curlymouvement</span></p>
            <p class="text-md">Retrouvez-nous sur instagram <a :href="businessDetails.socials.instagram.url" :title="businessDetails.socials.instagram.url">{{ businessDetails.socials.instagram.handle }}</a></p>
          </div>
        </div>
      </div> -->
    </dev-only>

    <dev-only>
      <!-- Template Settings -->
      <client-only>
        <div class="fixed p-5 right-0 top-2/12 md:top-6/12 z-50 rounded-md bg-primary-50 dark:bg-primary-500 text-surface-900 dark:text-surface-50 m-3 shadow-md space-y-2">
          <p class="font-bold mb-4">Template settings</p>

          <div class="space-x-2">
            <nuxt-link-locale to="/" locale="fr">
              <volt-secondary-button>
                <icon name="i-circle-flags:fr" />
              </volt-secondary-button>
            </nuxt-link-locale>

            <nuxt-link-locale to="/" locale="en">
              <volt-secondary-button>
                <icon name="i-circle-flags:uk" />
              </volt-secondary-button>
            </nuxt-link-locale>
          </div>

          <volt-label label-for="dark-mode" label="Dark mode">
            <volt-toggle-switch id="dark-mode" v-model="darkMode" />
          </volt-label>

          <volt-label label-for="show-image" label="Show Image">
            <volt-toggle-switch id="show-image" v-model="showImage" />
          </volt-label>

          <volt-label label-for="show-video" label="Show Video">
            <volt-toggle-switch id="show-video" v-model="showVideo" />
          </volt-label>

          <volt-label label-for="show-carousel" label="Show Carousel">
            <volt-toggle-switch id="show-carousel" v-model="showCarousel" />
          </volt-label>
        </div>
      </client-only>
    </dev-only>
  </section>
</template>

<script setup lang="ts">
import { businessDetails } from '~/data'

const { showImage, showCarousel, showVideo } = useDevComposable()

definePageMeta({
  name: 'home'
})

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

/**
 * Dark mode
 */

const { darkMode } = useDarkModeComposable()

/**
 * SEO
 */

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
