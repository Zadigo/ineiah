<template>
  <div ref="heroEl" class="w-full h-[98vh] bg-center bg-no-repeat bg-cover flex items-center relative">
    <div id="lead" class="text-primary-50 dark:text-primary-200 p-2 absolute top-3/12 left-4/16 right-2/14 z-10 text-left md:max-w-5xl md:p-10 md:text-center">
      <h1 class="text-6xl md:text-7xl font-bold mb-5 animate animate-fade-up">
        Ici, on coiffe tous les cheveux
      </h1>

      <p class="text-2xl font-normal">
        Cheveux crépus, bouclés, lisses ou texturés ? Chaque chevelure est célébrée
      </p>

      <div class="flex flex-wrap justify-start md:flex-nowrap md:justify-center items-center space-x-5">
        <volt-button id="link-offer-hero"  size="xl" class=" mt-10 md:mt-5 w-full md:w-auto" rounded>
          <nuxt-link-locale to="/nos-prestations">
            Prestations
          </nuxt-link-locale>
        </volt-button>

        <volt-button id="tel-hero" size="xl" class="mt-5 w-full md:w-auto" rounded>
          <base-telephone-link with-icon>
            Nous appeller
          </base-telephone-link>
        </volt-button>
      </div>
    </div>

    <div class="absolute inset-0 z-5">
      <video ref="videoEl" class="w-full h-full object-cover" autoplay loop muted playsinline>
        <source src="https://freelance-data-storage.s3.us-east-1.amazonaws.com/hair.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script setup lang="ts">
const heroEl = useTemplateRef<HTMLElement>('heroEl')
</script>
