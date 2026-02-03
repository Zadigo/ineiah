<template>
  <section id="sitemap" class="px-20">
    <div class="grid grid-cols-2 my-20 py-20 gap-4">
      <volt-card v-for="section in footer.sections" :key="section.title">
        <template #content>
          <ul>
            <h2 v-motion-fade class="text-2xl mb-5 text-secondary-700 dark:text-secondary-900">{{ $t(section.title) }}</h2>
            <li v-for="link in section.links" :key="link.name" class="py-1">
              <nuxt-link-locale :to="link.to" class="text-lg text-secondary-500 underline">
                {{ $t(link.name) }}
              </nuxt-link-locale>
            </li>
          </ul>
        </template>
      </volt-card>
    </div>
  </section>
</template>

<script setup lang="ts">
import { footer } from '~/data'

definePageMeta({
  name: 'sitemap'
})
</script>
