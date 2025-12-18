<template>
  <section id="mentions-legales" class="mb-30">
    <div class="px-5 md:px-10 md:max-w-4xl mx-auto space-y-2">
      <volt-card v-for="policy in policies" :key="policy.title">
        <template #content>
          <div class="has-[p]:leading-8">
            <h1 class="uppercase text-primary-500 text-3xl font-bold mb-2">
              <span>{{ $i18n.locale === 'en' ? policy.titleEn || policy.title : policy.title }}</span>
            </h1>

            <template v-for="(item, idx) in policy.content" :key="idx">
              <p v-if="item.type === 'paragraph'">
                {{  $i18n.locale === 'en' ? item.textEn || item.text : item.text }}
              </p>

              <ul v-else-if="item.type === 'list'" class="list-disc list-inside my-4 leading-7">
                <li v-for="(listItem, itemIdx) in item.items" :key="itemIdx">
                  {{ $i18n.locale === 'en' ? listItem.textEn || listItem.text : listItem.text }}
                </li>
              </ul>
            </template>
          </div>
        </template>
      </volt-card>

      <volt-card>
        <template #content>
          <div class="rounded-md bg-secondary-100 p-10 space-y-3">
            <p class="font-bold text-lg">Formulaire de rétractation</p>

            <p>A l'attention de : {{ businessDetails.legalName }}</p>
            <p>situé au : {{ businessDetails.address }},</p>
            <p>n° de téléphone : -</p>
            <p>adresse mél : -</p>
            <p>Je vous notifie, par la présente, ma rétractation du contrat portant sur la prestation de service, commandée le : -</p>
            <p>Prénom et nom du consommateur : -</p>
            <p>Adresse du consommateur : -</p>
            <client-only>
              <p>Le {{ $dayjs().format('DD/MM/YYYY') }}</p>
            </client-only>
            <p class="italic">Signature du consommateur</p>
          </div>
        </template>
      </volt-card>
    </div>
  </section>
</template>

<script setup lang="ts">
import { businessDetails, loadPolicies } from '~/data'

const policies = await loadPolicies()

/**
 * SEO Meta
 */

const i18n = useI18n()

const titles: Record<typeof i18n.locale.value, string> = {
  fr: 'Confidentialité',
  en: 'Privacy Policy'
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
