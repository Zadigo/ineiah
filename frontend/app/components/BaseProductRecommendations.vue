<template>
  <section id="recommended-products" class="px-5 py-20 md:p-20">
    <h3 class="text-center text-3xl mb-10 text-primary-500">
      {{ $t("Mes recommendations produits") }}
    </h3>

    <div class="grid grid-rows-1 md:grid-cols-3 xl:grid-cols-5 gap-5">
      <volt-card v-for="recommendation in recommendations" :key="recommendation.name" class="bg-surface-50">
        <template #content>
          <div class="grid grid-cols-2 md:grid-cols-1 md:items-center md:text-center">
            <nuxt-analytics event="view_item_list" :params="{ items: _analyticsItems }">
              <template #default="{ attrs }">
                <a :id="`link-product-recommendation_${recommendation.name.replace(/\s+/g, '-').toLowerCase()}`" :href="recommendation.url" target="_blank" rel="noopener noreferrer" @click="attrs.sendTemplateEvent">
                  <nuxt-img :src="recommendation.image" :alt="`${get('legalName')} recommande ${recommendation.name}`" class="w-full aspect-square object-cover min-h-90" />
                </a>
              </template>
            </nuxt-analytics>

            <div class="flex-row content-center">
              <h4 class="font-semibold truncate" :title="recommendation.name">{{ recommendation.name }}</h4>
              <client-only>
                <p :title="recommendation.description" class="font-light text-sm overflow-hidden text-ellipsis max-h-10">{{ recommendation.description }}</p>
              </client-only>
              <nuxt-analytics event="view_item_list" :params="{ items: _analyticsItems }">
                <template #default="{ attrs }">
                  <a :id="`link-product-recommendation-link-${recommendation.name.replace(/\s+/g, '-').toLowerCase()}`" :href="recommendation.url" target="_blank" rel="noopener noreferrer" class="text-primary-500 underline underline-offset-2 text-sm mt-2 inline-block" @click="attrs.sendTemplateEvent">
                    {{ $t("Voir le produit") }}
                  </a>
                </template>
              </nuxt-analytics>
            </div>
          </div>
        </template>
      </volt-card>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { EventParameters } from 'nuxt-ganalytics'
import { useBusinessDetails } from '~/data'

const { get } = await useBusinessDetails()

interface Recommendation {
  name: string
  brand: 'Olaplex' | 'Végétalement Provence'
  description: string
  image: string
  url: string
}

const recommendations: Recommendation[] = [
  {
    name: 'Shampooing Cheveux Abimes',
    brand: 'Olaplex',
    description: 'Ce shampooing à la kératine végétale est un soin traitant qui répare les cheveux très secs et abimés. Il permet de laver et de libérer les impuretés en douceur en créant une barrière contre les agressions extérieures. Riche, il redonne vie à la chevelure en la sublimant. Les cheveux gagnent en souplesse et en brillance.',
    image: '/products/product1.webp',
    url: 'https://vegetalement.com/fr/keratine-rituals/243-shampooing-cheveux-abimes.html'
  },
  {
    name: 'Shampooing Purifiant Intense',
    brand: 'Végétalement Provence',
    description: 'Ce shampooing purifiant est destiné aux cheveux épais difficile à nettoyer et aux cuirs chevelus gras. Grâce à un complexe végétal purifiant, les cheveux sont nettoyés, protégés et retrouvent leur brillance et leur souplesse.',
    image: '/products/product2.webp',
    url: 'https://vegetalement.com/fr/shampooings/179-shampooing-purifiant-intense.html'
  },
  {
    name: 'Shampooing Illuminer',
    brand: 'Végétalement Provence',
    description: 'Le shampooing Illuminer est un concentré de protection pour les cheveux colorés.Il nettoie en douceur, sans agresser la fibre capillaire, tout en préservant l’éclat et la tenue de la couleur.Sa formule innovante est enrichie en Kerarice™, un actif objectivé issu du riz, reconnu pour ses puissantes propriétés protectrices et fortifiantes.Véritable bouclier antioxydant, le Kerarice™ agit sur plusieurs niveaux : il limite la dégradation des pigments de la couleur, préserve les lipides et protéines essentiels du cheveu, tout en renforçant sa résistance face aux agressions extérieures(UV, lavages répétés…).Dès la première application, la fibre est plus résistante, la couleur est ravivée, les cheveux sont visiblement plus brillants, doux et lumineux.',
    image: '/products/product3.webp',
    url: 'https://vegetalement.com/fr/expert-soin/1367-shampooing-illuminer-3760205288777.html'
  },
  {
    name: 'Kit Intro Salon',
    brand: 'Olaplex',
    description: 'Le Kit Intro Salon OLAPLEX est un traitement professionnel pour cheveux abîmés et poreux.',
    image: '/products/product5.webp',
    url: 'https://bonosante.fr/olaplex-salon-intro-kit'
  },
  {
    name: "Bond Maintenance No.4C Bond Maintenance™ Clarifying Shampoo",
    brand: 'Olaplex',
    description: "Formule nettoyante clarifiante pour des cheveux parfaitement soignés. Élimine la saleté, l'excès de graisse, les dépôts de produits & les résidus minéraux. Prépare parfaitement les cheveux à l'étape suivante Pflege",
    image: '/products/product7.webp',
    url: 'https://www.nocibe.fr/fr/p/5010837003'
  },
  {
    name: "Bond Maintenance No. 7 Bonding Oil",
    brand: 'Olaplex',
    description: "Donne de la brillance, de la souplesse et de l'éclat aux couleurs. Maîtrise les frisottis et les cheveux rebelles. Protection contre les UV et la chaleur jusqu'à 232 °C. Styling et protection en un",
    image: '/products/product4.webp',
    url: 'https://briogeohair.com/products/dont-despair-repair-deep-conditioning-mask'
  },
  {
    name: "Olaplex - No. 6 Bond - Lissant",
    brand: 'Olaplex',
    description: "Crème capillaire par OLAPLEX. Prenez soin de vos boucles. Soin sans rinçage. Conçu pour renforcer, hydrater et minimiser les frisottis jusqu'à 72 heures.",
    image: '/products/product8.webp',
    url: 'https://fr.olaplex.com/products/olaplex-n-6-bond-smoother-eu'
  },
  {
    name: "Duo Blonde Enhancer Olaplex",
    brand: 'Olaplex',
    description: "Ce pack fera briller vos cheveux blonds, gris, éclaircis ou méchés. Lavez et hydratez vos cheveux avec le shampooing et l'après-shampooing revitalisants mauves pour obtenir un ton uniforme, neutraliser les tons cuivrés et jaunes, et laisser les cheveux forts, hydratés et sains.",
    image: '/products/product6.webp',
    url: 'https://www.beautycoiffure.com/olaplex/127534-duo-blonde-enhancer-olaplex.html'
  },
  {
    name: "Duo Blonde Enhancer Olaplex",
    brand: 'Olaplex',
    description: "Ce pack fera briller vos cheveux blonds, gris, éclaircis ou méchés. Lavez et hydratez vos cheveux avec le shampooing et l'après-shampooing revitalisants mauves pour obtenir un ton uniforme, neutraliser les tons cuivrés et jaunes, et laisser les cheveux forts, hydratés et sains.",
    image: '/products/product6.webp',
    url: 'https://www.beautycoiffure.com/olaplex/127534-duo-blonde-enhancer-olaplex.html'
  },
  {
    name: "Duo Blonde Enhancer Olaplex",
    brand: 'Olaplex',
    description: "Ce pack fera briller vos cheveux blonds, gris, éclaircis ou méchés. Lavez et hydratez vos cheveux avec le shampooing et l'après-shampooing revitalisants mauves pour obtenir un ton uniforme, neutraliser les tons cuivrés et jaunes, et laisser les cheveux forts, hydratés et sains.",
    image: '/products/product6.webp',
    url: 'https://www.beautycoiffure.com/olaplex/127534-duo-blonde-enhancer-olaplex.html'
  }
]

const _analyticsItems: EventParameters['items'] = recommendations.map(item => ({
  index: recommendations.indexOf(item) + 1,
  item_list_id: 'recommended-products',
  item_list_name: 'Recommended Products',
  item_brand: item.brand,
  item_name: item.name,
  item_id: item.url
}))
</script>
