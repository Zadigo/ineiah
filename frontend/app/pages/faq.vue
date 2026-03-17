<template>
  <section id="faq">
    <base-jumbotron src="/images/banners/banner1-small.webp" lead="FAQ" subtitle="Nous répondons à vos questions" />

    <div class="px-5 md:px-10 my-10">
      <div class="max-w-3xl mx-auto">
        <div class="space-y-5">
          <volt-card v-for="section in faqList" :key="section.title" class="bg-surface-50 shadow-none">
            <template #content>
              <h3 :id="`faq-${section.id}`" class="uppercase text-3xl font-semibold text-primary-500 dark:text-primary-100">
                {{ $t(section.title) }}
              </h3>

              <volt-accordion class="w-full mt-5" default-value="0" collapsible>
                <volt-accordion-panel v-for="(item, i) in section.questions" :key="item.question" :value="item.question">
                  <volt-accordion-header :id="`faq-${section.id}-${i}`" class="text-primary-800 bg-surface-200 text-md cursor-pointer">
                    {{ $t(item.question) }}
                  </volt-accordion-header>

                  <volt-accordion-content :pt="{ root: 'bg-surface-100 dark:bg-surface-900 text-surface-700 dark:text-surface-0 pt-0 px-[1.125rem] pb-[1.125rem]' }">
                    <div class="p-5">
                      {{ $t(item.answer) }}
                    </div>
                  </volt-accordion-content>
                </volt-accordion-panel>
              </volt-accordion>
            </template>
          </volt-card>
        </div>
      </div>

      <!-- CTA -->
      <lazy-card-call-to-action id="tel-call-us-faq" class="mt-15" hydrate-on-idle>
        <template #title>
          {{ $t('Des questions ?') }}
        </template>

        <template #default>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptatem voluptate beatae rerum quod sed nulla facere ab, mollitia cum voluptatum id expedita ex rem numquam ipsa ad fugiat illum.
        </template>

        <template #action>
          Nous contacter
        </template>
      </lazy-card-call-to-action>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PageTitleOrDescription } from '~/types'

definePageMeta({
  name: 'FAQ'
})

/**
 * Business details
 */

const { businessDetails, get } = useBusinessDetails()
const { faqList } = useFaq()

/**
 * SEO
 */

const i18n = useI18n()

const titles: PageTitleOrDescription<typeof i18n.locale.value> = {
  fr: 'FAQ',
  en: 'FAQ'
}

const descriptions: PageTitleOrDescription<typeof i18n.locale.value> = {
  fr: 'Trouvez les réponses à vos questions les plus fréquentes',
  en: 'Find answers to your most frequently asked questions'
}

const url = useRuntimeConfig().public.siteUrl
const shareImage = getOgImageImageUrl('/images/hero/customer18-small.webp')

useSeoMeta({
  title: titles[i18n.locale.value],
  description: descriptions[i18n.locale.value],
  titleTemplate: `%s | ${businessDetails.legalName}`,
  twitterTitle: titles[i18n.locale.value],
  twitterDescription: descriptions[i18n.locale.value],
  twitterImage: shareImage,
  twitterCard: 'summary_large_image',
  ogImage: shareImage,
  ogTitle: titles[i18n.locale.value],
  ogDescription: descriptions[i18n.locale.value],
  ogUrl: url + useRoute().path
})

const questionsList = computed(() => faqList.flatMap(x => [...x.questions]))

useSchemaOrg([
  {
    '@type': 'FAQPage',
    mainEntity: questionsList.value.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  },
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
])

defineOgImage('NuxtSeoTakumi', {
  title: titles[i18n.locale.value] || undefined,
  description: descriptions[i18n.locale.value] || undefined,
  author: get('legalName')
})
</script>
