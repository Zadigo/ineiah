<template>
  <div ref="heroEl" class="w-full h-[98vh] bg-center bg-no-repeat bg-cover flex items-center">
    <div id="lead" class="md:max-w-5xl md:mx-auto text-left md:text-center text-brand-brown-50 p-5 md:p-10">
      <h1 class="text-6xl md:text-7xl font-bold mb-5 animate animate-fade-up">
        Sublime ta singularité
      </h1>
      
      <p class="text-2xl font-normal">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, consectetur. Alias saepe assumenda numquam inventore vel
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
  </div>
</template>

<script setup lang="ts">
const heroEl = useTemplateRef<HTMLElement>('heroEl')

onMounted(() => {
  if (heroEl.value) {
    heroEl.value.style.backgroundImage = "url('/hero/hair1.jpg')"
  }
})
</script>
