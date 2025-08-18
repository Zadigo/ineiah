<template>
  <div ref="heroEl" class="w-full h-[98vh] bg-center bg-no-repeat bg-cover flex items-center relative">
    <div id="lead" class="text-brand-brown-50 p-2 absolute top-3/12 left-2/14 right-2/14 z-10 text-left md:max-w-5xl md:p-10 md:text-center">
      <h1 class="text-6xl md:text-7xl font-bold mb-5 animate animate-fade-up">
        Sublime ta singularité
      </h1>
      
      <p class="text-2xl font-normal">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, consectetur. Alias saepe assumenda numquam inventore
      </p>

      <div class="flex flex-wrap justify-start md:flex-nowrap md:justify-center items-center space-x-5">
        <ShadButton id="link-offer-hero" variant="outline" size="xl" class="rounded-full mt-10 md:mt-5 w-full md:w-auto" as-child>
          <NuxtLinkLocale to="/nos-prestations">
            Prestations
          </NuxtLinkLocale>
        </ShadButton>

        <ShadButton id="tel-hero" size="xl" class="rounded-full mt-5 w-full md:w-auto" as-child>
          <a href="tel:+33">
            <Icon name="fa-solid:phone" />
            Nous appeller
          </a>
        </ShadButton>
      </div>
    </div>

    <div class="absolute inset-0 z-5">
      <video ref="videoEl" class="w-full h-full object-cover" autoplay loop muted playsinline>
        <source src="/vid1.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script setup lang="ts">
const heroEl = useTemplateRef<HTMLElement>('heroEl')
</script>
