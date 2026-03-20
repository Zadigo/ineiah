<template>
  <div class="grid grid-rows-3 md:grid-cols-3 md:grid-rows-none p-10">
    <div v-for="(item, idx) in reassurance" :key="item.title" class="p-5 md:p-10 flex items-center gap-4 md:mx-auto">
      <icon :name="item.icon" size="50" class="text-primary-600 dark:text-primary-200" />
      <div class="flex-col">
        <p class="font-semibold text-primary-700 dark:text-primary-300">
          {{ $t(item.title) }}
        </p>

        <base-telephone-link :id="`tel-reassurance-${idx}`" :with-icon="false" text="Me contacter" class="text-primary-600 hover:text-primary-700 dark:text-primary-200 underline underline-offset-7" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const reassurance = [
  {
    title: 'Toujours à ton écoute',
    icon: 'i-lucide-heart'
  },
  {
    title: 'Réservation facile et rapide',
    icon: 'i-lucide-phone'
  },
  {
    title: 'Des conseils personnalisés',
    icon: 'i-lucide-shopping-bag'
  }
]
</script>
