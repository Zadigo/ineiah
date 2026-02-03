<template>
  <section id="recommended-products" class="px-5 py-20 md:p-20">
    <h3 class="text-center text-3xl mb-10 text-primary-500">
      {{ $t("Mes recommendations produits") }}
    </h3>

    <div class="grid grid-rows-1 md:grid-cols-3 xl:grid-cols-5 gap-5">
      <volt-card v-for="recommendation in recommendations" :key="recommendation.name" class="bg-surface-50">
        <template #content>
          <div class="grid grid-cols-2 md:grid-cols-1 md:items-center md:text-center">
            <a :href="recommendation.url" target="_blank" rel="noopener noreferrer">
              <nuxt-img :src="recommendation.image" :alt="`${businessDetails.legalName} recommande ${recommendation.name}`" />
            </a>

            <div class="flex-row content-center">
              <h4 class="font-semibold truncate" :title="recommendation.name">{{ recommendation.name }}</h4>
              <p class="font-light text-sm">{{ recommendation.description }}</p>
              <a :href="recommendation.url" target="_blank" rel="noopener noreferrer" class="text-primary-500 underline underline-offset-2 text-sm mt-2 inline-block">
                {{ $t("Voir le produit") }}
              </a>
            </div>
          </div>
        </template>
      </volt-card>
    </div>
  </section>
</template>

<script setup lang="ts">
import { businessDetails } from '~/data'

interface Recommendation {
  name: string
  description: string
  image: string
  url: string
}

const recommendations: Recommendation[] = [
  {
    name: 'Olaplex Rich Hydration Mask',
    description: 'Masque hydratant profond pour tous types de cheveux.',
    image: '/products/product1.webp',
    url: 'https://fr.olaplex.com/collections/all-products-fr/products/rich-hydration-mask-eu'
  },
  {
    name: 'Shea Moisture Curl Enhancing Smoothie',
    description: 'Crème coiffante pour définir les boucles et réduire les frisottis.',
    image: '/products/product2.webp',
    url: 'https://www.sheamoisture.com/curl-enhancing-smoothie.html'
  },
  {
    name: 'DevaCurl No-Poo Original',
    description: 'Nettoyant sans mousse pour cheveux bouclés.',
    image: '/products/product3.webp',
    url: 'https://www.devacurl.com/products/no-poo-original'
  },
  {
    name: 'Cantu Shea Butter Leave-In Conditioning Repair Cream',
    description: 'Crème réparatrice sans rinçage pour cheveux abîmés.',
    image: '/products/product4.webp',
    url: 'https://www.cantubeauty.com/products/shea-butter-leave-in-conditioning-repair-cream'
  },
  {
    name: "Briogeo Don't Despair, Repair! Deep Conditioning Mask",
    description: "Masque revitalisant intensif pour restaurer l'hydratation des cheveux.",
    image: '/products/product5.webp',
    url: 'https://briogeohair.com/products/dont-despair-repair-deep-conditioning-mask'
  }
]
</script>
