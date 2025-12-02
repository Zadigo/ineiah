<template>
  <div class="grid grid-rows-3 md:grid-cols-3 md:grid-rows-none p-10">
    <div v-for="item in reassurance" :key="item.title" class="p-5 md:p-10 flex items-center gap-4 md:mx-auto">
      <icon :name="item.icon" size="50" class="text-primary-600 dark:text-primary-200" />
      <div class="flex-col">
        <p class="font-semibold text-primary-700 dark:text-primary-300">
          {{ item.title }}
        </p>

        <base-telephone-link :with-icon="false" text="Nous contacter" class="text-primary-600 dark:text-primary-200 underline underline-offset-7" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseTelephoneLink from './BaseTelephoneLink.vue';

const { title = 'Une équipe à ton écoute' } = defineProps<{ title?: string }>()

const reassurance = [
  {
    title: 'Une équipe à ton écoute',
    icon: 'i-lucide-heart',
    link: 'tel:+123456789'
  },
  {
    title: 'Un service client réactif',
    icon: 'i-lucide-shopping-bag',
    link: 'tel:+123456789'
  },
  {
    title: 'Des conseils personnalisés',
    icon: 'i-lucide-table',
    link: 'tel:+123456789'
  }
]
</script>
