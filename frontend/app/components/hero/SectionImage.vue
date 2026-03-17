<template>
  <div class="p-5 md:p-15 overflow-hidden">
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-10">
      <client-only>
        <div class="transition-all ease-in has-[img]:hover:zoom-in-20">
          <nuxt-img v-motion-slide-visible-once-left :delay="200" :alt="`Coiffure femme cheveux bouclés par ${get('legalName')}`" src="/images/kira/photoshoot46-small.webp" class="rounded-lg aspect-square object-cover w-full" />
        </div>

        <template #fallback>
          Loading image...
        </template>
      </client-only>

      <div class="flex flex-col justify-center dark:text-primary-200">
        <client-only>
          <h2 v-motion-slide-visible-once-bottom :delay="600" :enter="{ transition: { type: 'spring', stiffness: 20 }}" class="text-5xl font-bold mb-10 text-primary-500 font-title leading-15">
            La coiffure pensée pour <span class="text-primary-800 dark:text-primary-400">tous</span> les types de cheveux
          </h2>
        </client-only>

        <div class="space-y-3">
          <p>
            Bien plus qu'une coiffeuse, Inéïah révèle la beauté qui sommeille en 
            chaque chevelure. Ici, à Lille, chaque rendez-vous est bien plus qu'une coupe ou un soin — 
            c'est un moment suspendu, pensé pour toi, rien que pour toi.
          </p>
  
          <p>
            Tes cheveux bouclés, crépus, frisés ou lisses ont une histoire. Ils ont traversé des saisons, subi 
            les aléas du quotidien, parfois été incompris. Chez Inéïah, cette histoire est écoutée avec attention, dès le premier 
            diagnostic capillaire. Ton passé est entendu, ton présent est choyé, et ton futur est sublimé.
          </p>
  
          <p>
            Avec plus de 25 ans d'expérience sur tous types de cheveux — cheveux afros, bouclés, ondulés ou caucasiens — 
            et des soins haut de gamme comme l'Olaplex, la kératine végétale ou les produits Les Secrets de Loly, chaque prestation est 
            pensée sur-mesure. Que tu rêves d'une coupe structurante, d'un balayage lumineux sur cheveux bouclés, d'une coloration 
            respectueuse sur cheveux crépus, ou simplement d'un soin réparateur profond, Inéïah a les mains et l'expertise qu'il te faut.
          </p>
        </div>

        <div id="cta-1" class="mt-10">
          <base-telephone-button id="tel-call-us-intermediate-1" :with-icon="true" size="large" text="Je veux me faire belle" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Business details
 */

const { get } = useBusinessDetails()
</script>
