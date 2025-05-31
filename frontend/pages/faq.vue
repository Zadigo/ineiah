<template>
  <section id="faq">
    <BaseJumbotron src="/hero/hair4.jpg" lead="FAQ" subtitle="Nous répondons à vos questions" />

    <div class="px-5 md:px-10 my-10">
      <div class="max-w-3xl mx-auto">
        <div class="space-y-5">
          <ShadCard v-for="section in faqList" :key="section.title" class="bg-brand/20 shadow-none">
            <ShadCardContent>
              <h3 class="uppercase text-2xl font-semibold text-brand-500">
                {{ section.title }}
              </h3>

              <ShadAccordion class="w-full mt-5 space-y-3" default-value="Something" collapsible>
                <ShadAccordionItem v-for="item in section.questions" :key="item.question" :value="item.question">
                  <ShadAccordionTrigger class="text-brand-500 bg-brand-400/30 px-3 text-md cursor-pointer">
                    {{ item.question }}
                  </ShadAccordionTrigger>

                  <ShadAccordionContent class="px-3">
                    {{ item.answer }}
                  </ShadAccordionContent>
                </ShadAccordionItem>
              </ShadAccordion>
            </ShadCardContent>
          </ShadCard>
        </div>
      </div>
      
      <CardCTA id="tel-faq-section" class="mt-15">
        <template #title>
          Des questions ?
        </template>

        <template #default>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptatem voluptate beatae rerum quod sed nulla facere ab, mollitia cum voluptatum id expedita ex rem numquam ipsa ad fugiat illum.
        </template>

        <template #action>
          Nous contacter
        </template>
      </CardCTA>
    </div>
  </section>
</template>

<script setup lang="ts">
import { faqList } from '~/data'

const i18n = useI18n()

const titles: Record<string, string> = {
  fr: 'Coupe et coiffures tout type de cheveux'
}

defineOgImageComponent('NuxtSeo', {
  title: 'Hello OG Image 👋',
  description: 'Look at me in dark mode',
  theme: '#ff0000',
  colorMode: 'dark',
})

useSeoMeta({
  title: titles[i18n.locale.value],
  description: 'Some simple decription',
  titleTemplate: "%s | La beauté d'Inéïah",
  ogImage: 'http://example.com/image.jpg'
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://example.com/'
    }
  ]
})

const questionsList = computed(() => {
  return faqList.map(x => [...x.questions]).flat()
})

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
</script>
