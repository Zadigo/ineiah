<template>
  <section id="hero">
    <!-- Hero -->
    <div ref="heroEl" class="w-full h-[90vh] bg-center bg-no-repeat bg-cover flex items-center">
      <div id="lead" class="md:max-w-5xl md:mx-auto text-left md:text-center text-white p-5 md:p-10">
        <h1 class="text-6xl md:text-7xl font-bold mb-5">Sublime ta singularité</h1>
        <p class="text-2xl font-normal">This is a sublead that we should be using</p>
      </div>
    </div>

    <!-- Intermediate-1 -->
    <div class="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 auto-rows-min bg-slate-500">
      <div class="items-center md:flex md:p-10">
        <div class="p-10 text-center md:text-left md:max-w-lg">
          <h1 class="text-3xl font-bold mb-4 md:text-4xl">
            L'histoire de la beauté d'Inéaïah
          </h1>
          
          <p class="font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Omnis obcaecati beatae velit ipsa quos sapiente at sunt. Ut blanditiis 
            dolorem, magnam animi, doloribus error dolores possimus quia eos voluptatum in!
          </p>
        </div>
      </div>
      
      <div class="h-auto">
        <NuxtImg src="/hero/hair1.jpg" height="700" />
      </div>
    </div>

    <!-- Brands -->
    <div class="my-5 md:p-10">
      <h3 class="text-center text-2xl font-bold mb-5 md:mb-0" >Nos marques</h3>

      <div class="grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-4 md:grid-rows-none md:p-10">
        <div class="p-3 flex justify-center">
          <NuxtImg src="/brands/Bouclème.png" width="100px" />
        </div>

        <div class="p-3 flex justify-center">
          <NuxtImg src="/brands/Bouclème.png" width="100px" />
        </div>

        <div class="p-3 flex justify-center">
          <NuxtImg src="/brands/Bouclème.png" width="100px" />
        </div>

        <div class="p-3 flex justify-center">
          <NuxtImg src="/brands/Bouclème.png" width="100px" />
        </div>
      </div>
    </div>

    <!-- Photocall -->
    <div class="grid grid-rows-2 grid-cols-2 gap-0 auto-rows-min md:grid-rows-1 md:grid-cols-4">
      <HeroPhotoCall src="/hero/hair2.jpg" alt="Some alt" title="Cheveux fins" />
      <HeroPhotoCall src="/hero/hair3.jpg" alt="Some alt" title="Cheveux fins" />
      <HeroPhotoCall src="/hero/hair4.jpg" alt="Some alt" title="Cheveux fins" />
      <HeroPhotoCall src="/hero/hair5.jpg" alt="Some alt" title="Cheveux fins" />
    </div>
  </section>
</template>

<script setup lang="ts">
const i18n = useI18n()

const titles: Record<string, string> = {
  fr: 'Coupe et coiffures tout type de cheveux'
}

const heroEl = useTemplateRef('heroEl')

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

onMounted(() => {
  if (heroEl.value) {
    heroEl.value.style.backgroundImage = "url('/hero/hair1.jpg')"
  }
})
</script>
