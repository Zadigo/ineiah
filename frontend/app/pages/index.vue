<template>
  <section id="hero" class="has-[p]:space-y-5 has-[p]:leading-8 has-[h2]:leading-15 relative">
    <!-- Hero -->
    <hero-top-image v-if="showImage" />
    <hero-top-video v-else-if="showVideo" />
    <hero-top-carousel v-else-if="showCarousel" />

    <!-- Intermediate-1 -->
    <base-section-container>
      <base-section-simple image="/hero/hair10.jpg" image-alt="Salon de coiffure">
        <template #title>
          Découvrez un salon de coiffure <span class="text-primary-800 dark:text-primary-400">pas comme les autres</span>
        </template>

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

        <template #cta>
          <base-telephone-button id="tel-intermadiate-0" :with-icon="true" size="large" text="Prendre rendez-vous" />
        </template>
      </base-section-simple>
    </base-section-container>

    <!-- Intermediate-2 -->
    <base-section-wide image="/hero/hair10.jpg" image-alt="Salon de coiffure">
      <template #title>
        L'histoire de <span class="italic">{{ businessDetails.legalName }}</span>
      </template>

      <template #description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Omnis obcaecati beatae velit ipsa quos sapiente at sunt. Ut blanditiis
        dolorem, magnam animi, doloribus error dolores possimus quia eos voluptatum in!
      </template>

      <template #cta>
        <nuxt-link-locale to="/notre-histoire">
          <volt-button size="large" class="mt-10" rounded>
            Découvrir
            <icon name="fa7-solid:arrow-right" />
          </volt-button>
        </nuxt-link-locale>
      </template>
    </base-section-wide>

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
