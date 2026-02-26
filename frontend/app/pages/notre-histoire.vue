<template>
  <section id="story">
    <BaseJumbotron src="/hero/hair4.jpg" :lead="$t('Notre histoire')" :subtitle="$t('Découvrez notre histoire et la création de notre salon')" />

    <!-- Quote TODO: Component -->
    <div class="p-10 md:p-20 bg-primary-500 text-primary-700 dark:bg-primary-700 dark:text-primary-200 w-full text-center">
      <h1 class="text-2xl md:text-4xl max-w-4xl md:mx-auto font-bold space-x-2 md:space-x-5">
        <Icon name="fa-solid:quote-left" />
        <span>{{ $t('{businessName}, une vision du cheveu sans compromis', { businessName: businessDetails.legalName }) }}</span>
        <Icon name="fa-solid:quote-right" />
      </h1>
    </div>

    <div class="px-2 md:px-10 my-10">
      <story-card :image="'/hero/hair10.jpg'" class="shadow-none">
        <template #title>
          Une <span class="italic text-primary-700 dark:text-primary-300">expertise</span> façonnée par l'experience
        </template>

        <p>
          Coiffeuse dans l’âme depuis l’âge de 3 ans — c’est du moins ce que me rappelaient mes parents avec tendresse —
          je n’ai jamais imaginé faire autre chose. Mes premiers pas dans le métier, je les ai faits à Annecy, au sein d’un salon
          atypique tenu par une famille italienne de passionnés qui avaient coiffé les plus grandes stars des années 60 et 70.
        </p>

        <p>
          Une école de vie autant qu’une école de style, qui a forgé en moi l’exigence et l’amour du beau geste. Depuis, plus de 25 ans
          se sont écoulés, et la flamme est intacte. Ce qui me guide chaque jour, c’est une vision holistique de mon métier : je ne coiffe
          pas seulement des cheveux, j’accompagne des personnes, avec leur histoire, leur énergie, leur unicité. Les cheveux texturés
          ont toujours occupé une place à part dans mon cœur — d’abord par passion pour ce que peu osaient maîtriser, puis par amour
          profond lorsque mes enfants métis sont nés. C’est d’ailleurs de leurs prénoms — Keziah, Isaac et Neïa — qu’est née La Beauté D’Ineïah,
          un nom qui porte toute ma raison d’être. Sensible aux produits naturels et engagée pour la santé du cheveu, je veux que chaque personne qui
          s’installe dans mon fauteuil reparte embellie, apaisée, et avec le sourire.
        </p>
      </story-card>


      <story-card :invert="true" :image="'/hero/hair10.jpg'" class="shadow-none my-5">
        <template #title>
          Une <span class="italic text-primary-700 dark:text-primary-300">expertise</span> façonnée par l'expérience
        </template>

        <p>
          Coiffeuse dans l’âme depuis l’âge de 3 ans — c’est du moins ce que me rappelaient mes parents avec tendresse —
          je n’ai jamais imaginé faire autre chose. Mes premiers pas dans le métier, je les ai faits à Annecy, au sein d’un salon
          atypique tenu par une famille italienne de passionnés qui avaient coiffé les plus grandes stars des années 60 et 70.
        </p>

        <p>
          Une école de vie autant qu’une école de style, qui a forgé en moi l’exigence et l’amour du beau geste. Depuis, plus de 25 ans
          se sont écoulés, et la flamme est intacte. Ce qui me guide chaque jour, c’est une vision holistique de mon métier : je ne coiffe
          pas seulement des cheveux, j’accompagne des personnes, avec leur histoire, leur énergie, leur unicité. Les cheveux texturés
          ont toujours occupé une place à part dans mon cœur — d’abord par passion pour ce que peu osaient maîtriser, puis par amour
          profond lorsque mes enfants métis sont nés. C’est d’ailleurs de leurs prénoms — Keziah, Isaac et Neïa — qu’est née La Beauté D’Ineïah,
          un nom qui porte toute ma raison d’être. Sensible aux produits naturels et engagée pour la santé du cheveu, je veux que chaque personne qui
          s’installe dans mon fauteuil reparte embellie, apaisée, et avec le sourire.
        </p>
      </story-card>

      <story-card :image="'/hero/hair10.jpg'" class="shadow-none">
        <template #title>
          Une <span class="italic text-primary-700 dark:text-primary-300">expertise</span> façonnée par l'experience
        </template>

        <p>
          Coiffeuse dans l’âme depuis l’âge de 3 ans — c’est du moins ce que me rappelaient mes parents avec tendresse —
          je n’ai jamais imaginé faire autre chose. Mes premiers pas dans le métier, je les ai faits à Annecy, au sein d’un salon
          atypique tenu par une famille italienne de passionnés qui avaient coiffé les plus grandes stars des années 60 et 70.
        </p>

        <p>
          Une école de vie autant qu’une école de style, qui a forgé en moi l’exigence et l’amour du beau geste. Depuis, plus de 25 ans
          se sont écoulés, et la flamme est intacte. Ce qui me guide chaque jour, c’est une vision holistique de mon métier : je ne coiffe
          pas seulement des cheveux, j’accompagne des personnes, avec leur histoire, leur énergie, leur unicité. Les cheveux texturés
          ont toujours occupé une place à part dans mon cœur — d’abord par passion pour ce que peu osaient maîtriser, puis par amour
          profond lorsque mes enfants métis sont nés. C’est d’ailleurs de leurs prénoms — Keziah, Isaac et Neïa — qu’est née La Beauté D’Ineïah,
          un nom qui porte toute ma raison d’être. Sensible aux produits naturels et engagée pour la santé du cheveu, je veux que chaque personne qui
          s’installe dans mon fauteuil reparte embellie, apaisée, et avec le sourire.
        </p>
      </story-card>

      <div class="mt-10">
        <card-call-to-action id="tel-call-us-story" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { businessDetails } from '~/data'
import type { PageTitleOrDescription } from '~/types'

definePageMeta({
  title: 'Our Story'
})

/**
 * SEO
 */

const i18n = useI18n()

const titles: PageTitleOrDescription<typeof i18n.locale.value> = {
  fr: 'Notre histoire',
  en: 'Our Story'
}

const descriptions: PageTitleOrDescription<typeof i18n.locale.value> = {
  fr: 'Découvrez notre histoire et la création de notre salon.',
  en: 'Discover our story and the creation of our salon.'
}

useSeoMeta({
  title: titles[i18n.locale.value],
  description: descriptions[i18n.locale.value],
  titleTemplate: `%s | ${businessDetails.legalName}`,
  twitterTitle: titles[i18n.locale.value],
  twitterDescription: descriptions[i18n.locale.value],
  ogImage: 'https://dev-client.gency313.fr/hero/hair1.jpg'
})

defineOgImageComponent('NuxtSeo', {
  title: titles[i18n.locale.value],
  description: descriptions[i18n.locale.value],
  theme: '#ff0000',
  colorMode: 'dark',
})

useSchemaOrg(
  [
    defineBreadcrumb({
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 2,
          name: titles[i18n.locale.value],
          item: `${useBrowserLocation().value.origin}${useRoute().fullPath}`
        }
      ]
    })
  ]
)
</script>
