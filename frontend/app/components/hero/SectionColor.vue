<template>
  <div class="grid grid-cols-1 md:grid-cols-2 auto-rows-min mt-10 bg-primary-500 dark:bg-primary-700 dark:text-primary-200 overflow-hidden">
    <div class="items-center md:flex md:p-10">
      <div class="p-10 text-center md:text-left md:max-w-lg">
        <client-only>
          <h2 v-motion-slide-visible-once-bottom :delay="600" :enter="{ transition: { type: 'spring', stiffness: 20 } }" class="text-3xl font-bold mb-4 md:text-5xl text-primary-800 dark:text-primary-400 font-title leading-10 md:leading-15">
            L'histoire de <span class="italic">{{ get('legalName') }}</span>
          </h2>

          <template #fallback>
            <h2 class="text-3xl font-bold mb-4 md:text-5xl text-primary-800 font-title leading-10 md:leading-15">
              L'histoire de <span class="italic">{{ get('legalName') }}</span>
            </h2>
          </template>
        </client-only>

        <div class="space-y-3">
          <p class="font-light">
            Notre histoire, c'est avant tout une histoire humaine. Une histoire de passion, de transmission et 
            d'amour du cheveu sous toutes ses formes. Née d'un désir profond de rendre la coiffure professionnelle accessible 
            à toutes les textures — cheveux afros, bouclés, ondulés, caucasiens — La Beauté D'Inéïah s'est imposée comme la référence 
            de la coiffure multiculturelle à Lille et dans le Nord.
          </p>
  
          <p>
            Derrière chaque coupe, chaque soin, chaque séance de kératine végétale ou chaque balayage se cache un parcours exigeant 
            et passionné. Formée auprès des plus grands noms de la coiffure professionnelle, Inéïah met plus de 25 ans d'expertise au 
            service de ta chevelure, avec une attention particulière portée aux cheveux texturés si souvent mal compris. Découvre l'histoire 
            de cette aventure et la vision qui anime chaque rendez-vous.
          </p>
        </div>

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
        <nuxt-img v-motion-fade-visible-once :delay="600" :alt="`Hair Artist - ${get('founder')}`" src="/images/kira/photoshoot40-small.webp" class="aspect-square object-cover h-full xl:w-full" />
      </client-only>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Business details
 */

const { get } = useBusinessDetails()
</script>
