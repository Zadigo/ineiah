<template>
  <div ref="heroEl" class="w-full h-[98vh] bg-center bg-no-repeat bg-cover flex items-center" :style="{ backgroundImage: `url(${image})` }">
    <div id="lead" class="md:max-w-5xl md:mx-auto text-left md:text-center text-primary-50 dark:text-primary-200 p-5 md:p-10">
      <h1 class="text-6xl md:text-7xl dark:text-primary-200 font-bold mb-5 animate animate-fade-up">
        {{ $t("L'art de coiffer toutes les textures") }}
      </h1>

      <p class="text-2xl font-normal dark:text-primary-200">
        {{ $t("Cheveux crépus, bouclés, lisses ou texturés ? Chaque chevelure est célébrée") }}
      </p>

      <div class="flex flex-wrap justify-start md:flex-nowrap md:justify-center items-center md:space-x-5">
        <nuxt-link-locale id="link-offer-hero" to="/nos-prestations">
          <volt-button size="large" class="mt-10 md:mt-5 w-full md:w-auto" rounded>
            {{ $t("Prestations") }}
          </volt-button>
        </nuxt-link-locale>

        <base-telephone-button id="tel-call-us-hero" button-class="mt-5 w-full md:w-auto" size="large" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ image: string }>()
</script>
