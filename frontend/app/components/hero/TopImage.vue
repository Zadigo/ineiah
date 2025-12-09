<template>
  <div ref="heroEl" class="w-full h-[98vh] bg-center bg-no-repeat bg-cover flex items-center" :style="{ backgroundImage: backgroundImage }">
    <div id="lead" class="md:max-w-5xl md:mx-auto text-left md:text-center text-primary-50 dark:text-primary-200 p-5 md:p-10">
      <h1 class="text-6xl md:text-7xl dark:text-primary-200 font-bold mb-5 animate animate-fade-up">
        <slot name="lead">
          Sublime ta singularité
        </slot>
      </h1>

      <p class="text-2xl font-normal dark:text-primary-200">
        <slot name="leadDescription">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, consectetur. Alias saepe assumenda numquam inventore vel
        </slot>
      </p>

      <slot name="cta">
        <div class="flex flex-wrap justify-start md:flex-nowrap md:justify-center items-center md:space-x-5">
          <volt-button id="link-offer-hero" size="large" class="mt-10 md:mt-5 w-full md:w-auto" rounded>
            <nuxt-link-locale to="/nos-prestations">
              Prestations
            </nuxt-link-locale>
          </volt-button>
  
          <base-telephone-button class="mt-5 w-full md:w-auto" size="large" />
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Mobile
 */

const isMobile = useMediaQuery('(max-width: 768px)')

const backgroundImage = computed(() => {
  return isMobile.value
    ? 'url(/testimages/jpeg/customer18.jpg)'
    : 'url(/testimages/jpeg/customer18.jpg)'
})
</script>
