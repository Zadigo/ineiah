<template>
  <section id="faq">
    <base-jumbotron src="/hero/hair4.jpg" lead="FAQ" subtitle="Nous répondons à vos questions" />

    <div class="px-5 md:px-10 my-10">
      <div class="max-w-3xl mx-auto">
        <div class="space-y-5">
          <volt-card v-for="section in faqList" :key="section.title" class="bg-surface-50 shadow-none">
            <template #content>
              <h3 :id="`faq-${section.id}`" class="uppercase text-3xl font-semibold text-primary-500 dark:text-primary-100">
                {{ section.title }}
              </h3>

              <volt-accordion class="w-full mt-5" default-value="0" collapsible>
                <volt-accordion-panel v-for="(item, i) in section.questions" :key="item.question" :value="item.question">
                  <volt-accordion-header :id="`faq-${section.id}-${i}`" class="text-primary-800 bg-surface-200 text-md cursor-pointer">
                    {{ item.question }}
                  </volt-accordion-header>

                  <volt-accordion-content :pt="{ root: 'bg-surface-100 dark:bg-surface-900 text-surface-700 dark:text-surface-0 pt-0 px-[1.125rem] pb-[1.125rem]' }">
                    <div class="p-5">
                      {{ item.answer }}
                    </div>
                  </volt-accordion-content>
                </volt-accordion-panel>
              </volt-accordion>
            </template>
          </volt-card>
        </div>
      </div>

      <card-call-to-action id="tel-faq-section" class="mt-15">
        <template #title>
          Des questions ?
        </template>

        <template #default>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptatem voluptate beatae rerum quod sed nulla facere ab, mollitia cum voluptatum id expedita ex rem numquam ipsa ad fugiat illum.
        </template>

        <template #action>
          Nous contacter
        </template>
      </card-call-to-action>
    </div>
  </section>
</template>

<script setup lang="ts">
import { businessDetails, faqList } from '~/data'

definePageMeta({
  name: 'faq'
})


const i18n = useI18n()

const titles: Record<typeof i18n.locale.value, string> = {
  fr: 'FAQ',
  en: 'FAQ'
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
  }
])

defineOgImageComponent('NuxtSeo', {
  title: titles[i18n.locale.value],
  description: descriptions[i18n.locale.value],
  theme: '#ff0000',
  colorMode: 'dark'
})
</script>
