<template>
  <div class="grid grid-rows-3 md:grid-cols-3 md:grid-rows-none p-10">
    <div v-for="i in 3" :key="i" class="p-5 md:p-10 flex items-center gap-4 md:mx-auto">
      <Icon name="fa-solid:heart" size="50" class="text-brand-300" />
      <div class="flex-col">
        <p class="font-semibold text-brand-500">
          Une équipe à ton écoute
        </p>

        <a href="tel:" class="text-brand-300">
          Contactez-nous
        </a>
      </div>
    </div>
  </div>
</template>
