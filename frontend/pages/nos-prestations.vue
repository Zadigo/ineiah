<template>
  <section id="prestation">
    <BaseJumbotron src="/hero/hair7.jpg" lead="Nos prestations" subtitle="Découvrez tout ou partie de nos prestations" />

    <div class="px-10">
      <ServicesSection />
      <ServicesSection />
      <ServicesSection />

      <div class="my-10">
        <ShadCard class="text-white bg-cover" style="background-image:url('/hero/hair7.jpg')">
          <ShadCardContent class="p-20">
            <div class="flex-col justify-center mx-auto text-center max-w-7xl">
              <h2 class="text-7xl text-shadow-brand-500 font-bold mb-5">
                Prête à se sublimer
              </h2>

              <p class="text-light max-w-lg mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Ducimus nisi accusamus necessitatibus veritatis, nulla quia unde nesciunt nihil rerum
                Ducimus nisi accusamus necessitatibus veritatis, nulla quia unde nesciunt nihil rerum
                Ducimus nisi accusamus necessitatibus veritatis, nulla quia unde nesciunt nihil rerum
              </p>

              <ShadButton id="tel-offer-section" size="xl" class="rounded-full mt-10" as-child>
                <a href="tel:+33">
                  Obtenir mon moment plaisir
                </a>
              </ShadButton>
            </div>
          </ShadCardContent>
        </ShadCard>
      </div>      
    </div>
  </section>
</template>

<script setup lang="ts">
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
</script>
