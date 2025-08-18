<template>
  <section id="sitemap" class="px-20">
    <div class="grid grid-cols-2 my-20 py-20 gap-4">
      <ShadCard v-for="section in footer.sections" :key="section.title" class="shadow-none bg-brand-brown-secondary-50">
        <ShadCardContent>
          <ul>
            <h2 class="text-2xl mb-5 text-brand-brown-secondary-700">{{ section.title }}</h2>
            <li v-for="link in section.links" :key="link.name" class="py-1">
              <NuxtLinkLocale :to="link.to" class="text-lg text-secondary underline">
                {{ link.name }}
              </NuxtLinkLocale>
            </li>
          </ul>
        </ShadCardContent>
      </ShadCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import { footer } from '~/data'
  
</script>
