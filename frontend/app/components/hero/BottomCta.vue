<template>
  <div ref="heroEl" class="w-full h-[98vh] bg-center bg-no-repeat bg-cover flex items-end" :style="{ backgroundImage: `url(${image})` }">
    <div id="lead" class="md:max-w-7xl md:mx-auto text-center text-primary-50 dark:text-primary-200 p-5 md:p-10">
      <h1 class="text-6xl md:text-7xl dark:text-primary-200 font-bold mb-2 animate animate-fade-up">
        {{ $t("L'art de coiffer toutes les textures") }}
      </h1>

      <p class="text-2xl font-normal dark:text-primary-200 mb-10">
        {{ $t("Cheveux crépus, bouclés, lisses ou texturés ? Chaque chevelure est célébrée") }}
      </p>

      <div class="flex flex-wrap space-y-2 w-full md:space-y-0 md:flex-nowrap justify-center md:items-center sm:space-x-2 md:space-x-5">
        <nuxt-link-locale nuxt-link-locale id="link-offer-hero" class="block cursor-pointer" to="/nos-prestations">
          <hero-buttons-glass text="Prestations" icon-name="lucide:arrow-up-right" />
        </nuxt-link-locale>

        <a id="tel-call-us-hero" :href="`tel:${fallbackTelephone}`" class="block cursor-pointer">
          <hero-buttons-glass text="Nous appeler" icon-name="lucide:phone" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ image: string }>()

/**
 * Business details
 */
const { businessDetails } = useBusinessDetails()

const fallbackTelephone = businessDetails.contact.telephone
</script>
