<template>
  <section id="hero" class="has-[p]:space-y-5 has-[p]:leading-8 has-[h2]:leading-15 relative">
    <!-- Hero -->
    <hero-top-image v-if="showImage" />
    <hero-top-video v-else-if="showVideo" />
    <hero-top-carousel v-else-if="showCarousel" />

    <!-- Intermediate-1 -->
    <div class="p-5 md:p-15 overflow-hidden">
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div class="transition-all ease-in has-[img]:hover:zoom-in-20">
          <client-only>
            <nuxt-img v-motion-slide-visible-left :delay="200" src="/kira/DSC05656.jpg" class="rounded-lg aspect-square object-cover w-full" alt="" />
          </client-only>
        </div>

        <client-only>
          <div v-motion-slide-visible-right :delay="400" class="flex flex-col justify-center dark:text-primary-200">
            <h2 class="text-5xl font-bold mb-10 text-primary-500 font-title leading-15">
              <!-- Plus q'un salon, une <span class="text-primary-800 dark:text-primary-400">expérience</span> de vie -->
               La coiffure pensée pour <span class="text-primary-800 dark:text-primary-400">tous</span> les types de cheveux
            </h2>

            <p>
              Bien plus qu'un salon chez Inéïah la beauté est révélée. Le cheveux est respescté,
              son passé est écouté, son présent est choyé et son futur est sublimé.
            </p>

            <!-- <p>
              Ici, chaque rendez-vous est un moment pour soi. On prend le temps de t’écouter, de 
              comprendre tes cheveux, ton style et ton histoire. Que tes cheveux soient crépus, bouclés ou lisses, 
              tu repars avec bien plus qu’une coiffure : confiance, bien-être et une vraie reconnexion à toi-même.
            </p> -->

            <p>
              Au-delà du résultat, c’est l’expérience qui compte : un espace bienveillant, sans jugement, où chaque 
              texture est respectée et chaque personne valorisée. Un lieu où tu peux enfin te sentir comprise, libre d’être toi, 
              et pleinement mise en lumière.
            </p>

            <div id="cta-1" class="mt-10">
              <base-telephone-button id="tel-intermadiate-1" :with-icon="true" size="large" text="Je veux me faire belle" />
            </div>
          </div>
        </client-only>
      </div>
    </div>

    <!-- Intermediate-2 -->
    <div class="grid grid-cols-1 xl:grid-cols-2 auto-rows-min mt-10 bg-primary-500 dark:bg-primary-700 dark:text-primary-200 overflow-hidden">
      <div class="items-center md:flex md:p-10">
        <div class="p-10 text-center md:text-left md:max-w-lg">
          <client-only>
            <h2 v-motion-slide-visible-right :delay="400" class="text-3xl font-bold mb-4 md:text-5xl text-primary-800 dark:text-primary-400 font-title leading-10 md:leading-15">
              L'histoire de <span class="italic">{{ businessDetails.legalName }}</span>
            </h2>
          </client-only>

          <p class="font-light">
            Notre histoire, c’est avant tout une histoire humaine. Une histoire de passion, de transmission et 
            d’amour du cheveu sous toutes ses formes. Derrière chaque geste se cache un parcours, une vision et l’envie 
            profonde de créer un lieu où chacun peut se sentir reconnu, respecté et valorisé. Découvre comment cette aventure 
            est née et ce qui l’anime au quotidien.
          </p>

          <nuxt-link-locale to="/notre-histoire">
            <volt-button size="large" class="mt-10" rounded>
              {{ $t("Découvrir") }}
              <icon name="fa7-solid:arrow-right" />
            </volt-button>
          </nuxt-link-locale>
        </div>
      </div>

      <div class="h-auto">
        <client-only>
          <nuxt-img v-motion-fade-visible :delay="600" src="/kira/DSC05626.jpg" class="aspect-square object-cover w-full" alt="" />
        </client-only>
      </div>
    </div>

    <!-- Brands -->
    <div class="my-5 md:p-10">
      <h3 class="text-center text-3xl font-bold text-primary-500 mb-5 md:mb-0">
        {{ $t('Nos marques partenaires') }}
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
      <hero-photo-call src="/testimages/jpeg/customer6.jpg" alt="Some alt" title="Cheveux longs" />
      <hero-photo-call src="/hero/hair12.jpg" alt="Some alt" title="Cheveux réactivés" />
      <hero-photo-call src="/testimages/jpeg/customer18.jpg" alt="Some alt" title="Cheveux afro" />
    </div>

    <!-- Product Recommendations -->
    <base-product-recommendations />

    <dev-only>
      <!-- VideoCall -->
      <client-only>
        <div v-show="showVideoBlock" id="video-call-hero" class="max-w-8xl mx-auto pt-20 px-5 md:px-20">
          <div class="grid grid-cols-1 md:grid-cols-2 bg-primary-200 dark:bg-primary-700 dark:text-primary-200 rounded-lg md:rounded-none md:rounded-tl-lg md:rounded-bl-lg md:rounded-tr-lg md:rounded-br-lg overflow-hidden">
            <video class="aspect-video object-fill h-full w-full lg:object-fill" autoplay muted loop playsinline>
              <source src="https://freelance-data-storage.s3.us-east-1.amazonaws.com/hair.mp4" type="video/mp4">
            </video>

            <!-- Info -->
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
        </div>
      </client-only>
    </dev-only>

    <dev-only>
      <!-- Template Settings -->
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
          <client-only>
            <volt-toggle-switch id="dark-mode" v-model="darkMode" />
          </client-only>
        </volt-label>

        <volt-label label-for="show-image" label="Show Image">
          <client-only>
            <volt-toggle-switch id="show-image" v-model="showImage" />
          </client-only>
        </volt-label>

        <volt-label label-for="show-video" label="Show Video">
          <client-only>
            <volt-toggle-switch id="show-video" v-model="showVideo" />
          </client-only>
        </volt-label>

        <volt-label label-for="show-carousel" label="Show Carousel">
          <client-only>
            <volt-toggle-switch id="show-carousel" v-model="showCarousel" />
          </client-only>
        </volt-label>

        <volt-label label-for="show-carousel" label="Show video call">
          <client-only>
            <volt-toggle-switch id="show-video-call" v-model="showVideoBlock" />
          </client-only>
        </volt-label>
      </div>
    </dev-only>
  </section>
</template>

<script setup lang="ts">
import { businessDetails } from '~/data'

definePageMeta({
  title: 'Home'
})

/**
 * Template settings
 */

const { showImage, showCarousel, showVideo, showVideoBlock } = useDevComposable()

const i18n = useI18n()

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
  ogImage: '/hero/hair10.jpg'
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
