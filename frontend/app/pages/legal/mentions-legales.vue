<template>
  <section id="mentions-legales" class="mt-30">
    <div class="px-5 md:px-10 md:max-w-4xl mx-auto">
      <volt-card class="bg-primary-500/0 shadow-none">
        <template #content>
          <div class="has-[p]:leading-8">
            <h1 class="uppercase text-primary-500 text-3xl font-bold mb-2">
              Mentions légales
            </h1>

            <p class="font-bold uppercase text-2xl text-primary-500 mb-10">
              Mentions légales concernant <span class="text-primary-600">l'éditeur du site internet</span>
            </p>

            <div class="my-2 has-[p]:mb-5">
              <p class="uppercase mt-3 mb-1 font-bold">Personne morale</p>

              <p>Dénomination ou raison sociale: {{ businessDetails.legalName }}</p>
              <p>Adresse du siège social: {{ businessDetails.address }}</p>
              <p>Capital social : {{ businessDetails.shareCapital || '-' }}</p>
              <p>Numéro d'identification au Registre du Commerce et des Sociétés (RCS) : {{ businessDetails.rcs }}</p>
            </div>

            <div class="my-2 has-[p]:mb-5">
              <p class="font-bold uppercase text-1xl">
                Mentions légales concernant <span class="text-primary-600">le responsable éditorial du site internet</span>
              </p>

              <p>Nom du directeur de la publication: {{ businessDetails.publishingDirector }}</p>
              <p>Nom du responsable de la rédaction: {{ businessDetails.editorInChief }}</p>
            </div>

            <div class="my-2 has-[p]:mb-5">
              <p class="font-bold uppercase text-1xl">
                Mentions légales concernant <span class="text-primary-600">l'hébergeur du site internet</span>
              </p>

              <p>{{ businessDetails.cloudProvider.description }}</p>
              <p>No. d'enregistrement : {{ businessDetails.cloudProvider.rcs }}</p>
              <p>Coordonnées : {{ businessDetails.cloudProvider.address }}</p>
            </div>

            <div class="my-2 has-[p]:mb-5">
              <p class="font-bold uppercase text-1xl">
                Mentions légales concernant <span class="text-primary-600">la creation du site internet</span>
              </p>

              <p>
                Le site internet {{ businessDetails.legalName }} a été réalisé par l'agence <a :href="businessDetails.websiteProvider.url" target="_blank" class="underline text-secondary underline-offset-4">{{ businessDetails.websiteProvider.legalName }}</a>.
              </p>
            </div>

            <div class="my-2 has-[p]:mb-5">
              <p class="font-bold uppercase text-1xl">
                Contenu multimédia du site
              </p>

              <p>
                Le contenu multimédia du site Internet est la propriété exclusive de la
                société {{ businessDetails.legalName }}. Ainsi, pour toute utilisation de
                ce contenu une autorisation expresse doit être formulée par mail ou par
                courrier postal.
              </p>

              <p>
                Les informations, pictogrammes, photographies, images, textes,
                séquences vidéo, animations et autres documents présents sur le site
                Internet sont protégés par le droit de la propriété intellectuelle. En ces termes,
                l'article L 122-4 du Code de la propriété intellectuelle indique :
              </p>

              <p>
                « Toute représentation ou reproduction intégrale ou partielle
                faite sans le consentement de l'auteur ou de ses ayants droit ou ayants
                cause est illicite. Il en est de même pour la traduction, l'adaptation ou la
                transformation, l'arrangement ou la reproduction par un art ou un procédé
                quelconque. »
              </p>

              <p>
                Ainsi, toute copie illicite du site peut faire l'objet de poursuites sur
                le terrain de la contrefaçon sanctionnée par les articles L 335-2 et suivants du
                Code de la propriété intellectuelle.
              </p>
            </div>

            <div class="my-2 has-[p]:mb-5">
              <p class="font-bold uppercase text-1xl">
                Copywright photos
              </p>

              <p>
                Les copyright des photos présents sur le site sont la propriété
                exclusive de la société {{ businessDetails.legalName }}
              </p>
            </div>

            <div class="my-2 has-[p]:mb-5">
              <p class="font-bold uppercase text-1xl">
                Mis à jour
              </p>

              <p>
                Cette politique de confidentialité a été mise à jour pour la dernière
                fois le 7 novembre 2021. En cas de mise à jour ou de modification des mentions
                légales, celles-ci seront publiées sur cette page.
              </p>
            </div>
          </div>
        </template>
      </volt-card>
    </div>
  </section>
</template>

<script setup lang="ts">
import { businessDetails } from '~/data/constants/business'

definePageMeta({
  name: 'privacy'
})

/**
 * SEO
 */

const i18n = useI18n()

const titles: Record<typeof i18n.locale.value, string> = {
  fr: 'Mentions légales',
  en: 'Legal Notice'
}

const descriptions: Record<typeof i18n.locale.value, string> = {
  fr: 'Sublime ta singularité',
  en: 'Sublime your uniqueness'
}

useSeoMeta({
  title: titles[i18n.locale.value],
  description: descriptions[i18n.locale.value],
  titleTemplate: `%s | ${businessDetails.legalName}`,
  ogImage: 'https://dev-client.gency313.fr/hero/hair1.jpg'
})

defineOgImageComponent('NuxtSeo', {
  title: titles[i18n.locale.value],
  description: descriptions[i18n.locale.value],
  theme: '#ff0000',
  colorMode: 'dark',
})
</script>
