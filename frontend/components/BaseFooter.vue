<template>
  <footer class="relative bg-brand-500 w-full">
    <div class="w-full px-8 mx-auto max-w-7xl">
      <div class="grid justify-between grid-cols-1 gap-4 md:grid-cols-2 p-20">
        <h5 class="mb-6 text-xl font-semibold text-brand uppercase">
          {{ businessDetails.legalName }}
        </h5>

        <div class="grid justify-between grid-cols-2 gap-4">
          <ul v-for="section in footer.sections" :key="section.title">
            <p class="block mb-1 text-lg font-bold text-brand uppercase">
              {{ section.title }}
            </p>

            <li v-for="link in section.links">
              <NuxtLinkLocale :to="link.to" class="block text-brand py-1 hover:text-brand-300 focus:text-brand-300 text-md">
                {{ link.name }}
              </NuxtLinkLocale>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center w-full py-4 mt-12 border-t border-brand-200 md:flex-row md:justify-between">
        <p class="block mb-4 text-sm text-center text-brand md:mb-0">
          Copyright © 2024 <NuxtLinkLocale to="/">{{ businessDetails.legalName }}</NuxtLinkLocale>. All Rights Reserved.
        </p>

        <div class="flex gap-4 text-brand sm:justify-center">
          <a v-for="social in footer.socials" :key="social.name" :href="social.url" class="block transition-opacity text-inherit hover:opacity-80">
            <Icon :name="`fa-brands:${social.icon}`" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { footer } from '~/data'
import { businessDetails } from '~/data'
</script>
