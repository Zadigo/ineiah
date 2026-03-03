<template>
  <section id="story">
    <base-jumbotron src="/images/banners/img1.jpg" :lead="$t('Notre histoire')" :subtitle="$t('Découvrez notre histoire et la création de notre salon')" :position-y="30" />

    <!-- Quote TODO: Component -->
    <div class="p-10 md:p-20 bg-primary-500 text-primary-700 dark:bg-primary-700 dark:text-primary-200 w-full text-center">
      <h1 class="text-2xl md:text-4xl max-w-4xl md:mx-auto font-bold space-x-2 md:space-x-5">
        <Icon name="fa-solid:quote-left" />
        <span>{{ $t('{businessName}, une vision du cheveu sans compromis', { businessName: businessDetails.legalName }) }}</span>
        <Icon name="fa-solid:quote-right" />
      </h1>
    </div>

    <div class="px-2 md:px-10 my-10 space-y-5">
      <story-card :invert="true" :image="'/images/natacha-morel/img1.jpg'" class="shadow-none">
        <template #title>
          <span class="italic text-primary-700 dark:text-primary-300">Qui</span> suis-je ?
        </template>

        <p>
          Je suis Ineïah, coiffeuse dans l’âme depuis l’âge de 3 ans — c’est du moins ce que me rappelaient mes 
          parents avec tendresse. Née de racines polonaises et yougoslaves, j’ai grandi bercée par la richesse des cultures, la musique et le mouvement. 
          La danse a été ma première passion : le folklore dès l’âge de 5 ans, puis le modern jazz, le contemporain, et aujourd’hui la 
          sensualité de la kizomba et de la salsa. Ce goût du rythme, de la précision et de la grâce, je le retrouve chaque jour dans mon travail. 
          J’ai aussi un amour profond pour la nature et la permaculture, que je pratique avec bonheur chez ma plus fidèle cliente, qui a 86 ans. 
          Cette connexion au vivant nourrit mon approche holistique du soin capillaire, ma sensibilité aux produits naturels et mon désir de prendre 
          soin des personnes autant que des cheveux.
        </p>
      </story-card>

      <story-card :image="'/images/natacha-morel/img2.jpg'" class="shadow-none">
        <template #title>
          Parcours <span class="italic text-primary-700 dark:text-primary-300">professionnelle</span>
        </template>

        <p>
          Mes premiers pas dans le métier, je les ai faits à Annecy, dans un salon atypique tenu par une 
          famille italienne de passionnés qui avaient coiffé les plus grandes stars des années 60 et 70 — une école 
          de vie qui a forgé en moi l’exigence et l’amour du beau geste. Depuis, plus de 25 ans se sont écoulés et la flamme 
          est intacte. Je me suis formée auprès des plus grands : Toni & Guy pour l’art de la coupe sur cheveux secs, Curl Life Matters 
          pour les cheveux bouclés et texturés, Connivence — centre de formation haut de gamme à Bordeaux — et Végétalement Provence 
          pour des soins naturels d’exception. Car pour moi, coiffer est un art qui se perfectionne sans cesse, au service de chaque 
          chevelure, dans le respect de sa nature profonde.
        </p>
      </story-card>

      <story-card :image="'/images/natacha-morel/img3.jpg'" class="shadow-none">
        <template #title>
          Mon <span class="italic text-primary-700 dark:text-primary-300">expertise</span>
        </template>

        <p>
          Aujourd’hui, transmettre est devenu une évidence. Mon désir est de partager les belles 
          valeurs de ce métier avec les coiffeurs de demain — leur apprendre non seulement la technique, mais aussi 
          et surtout l’amour de toutes les textures de cheveux, qu’elles soient texturées ou caucasiennes. Parce qu’une 
          coiffeuse accomplie est celle qui sait sublimer chaque cheveu, sans exception, avec le même soin et la même passion.
        </p>
      </story-card>

      <div class="mt-10">
        <card-call-to-action id="tel-call-us-story" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PageTitleOrDescription } from '~/types'

definePageMeta({
  title: 'Our Story'
})

/**
 * Business details
 */

const { businessDetails } = useBusinessDetails()

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
