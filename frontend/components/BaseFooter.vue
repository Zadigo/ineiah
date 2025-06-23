<template>
  <footer class="relative bg-brand-pink-800 w-full">
    <div class="w-full px-8 mx-auto max-w-7xl">
      <div class="grid justify-between grid-cols-1 gap-4 p-10 md:grid-cols-2 md:p-20">
        <h5 class="mb-6 text-xl font-semibold text-brand-pink-200 uppercase">
          {{ businessDetails.legalName }}
        </h5>

        <div class="grid justify-between grid-rows-2 grid-cols-none gap-4 md:grid-cols-2 md:grid-rows-none">
          <ul v-for="section in footer.sections" :key="section.title">
            <p class="block mb-1 text-lg font-bold text-brand-pink-200 uppercase">
              {{ section.title }}
            </p>

            <li v-for="link in section.links">
              <NuxtLinkLocale :to="link.to" class="block text-brand-pink-200 py-1 hover:text-brand-pink-300 focus:text-brand-pink-300 text-md">
                {{ link.name }}
              </NuxtLinkLocale>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center w-full py-4 mt-12 border-t border-brand-200 md:flex-row md:justify-between">
        <p class="block mb-4 text-sm text-center text-brand-pink-200 md:mb-0">
          © {{ currentYear }} <NuxtLinkLocale to="/">{{ businessDetails.legalName }}</NuxtLinkLocale>. Réalisé par <a :href="businessDetails.websiteProvider.url">{{ businessDetails.websiteProvider.legalName }}</a>
        </p>

        <div class="flex gap-4 text-brand-pink-200 sm:justify-center">
          <a v-for="social in footer.socials" :id="`social-${social.name.toLowerCase()}`" :key="social.name" :href="social.url" class="block transition-opacity text-inherit hover:opacity-80">
            <Icon :name="`fa-brands:${social.icon}`" :alt="`${businessDetails.name} - ${social.name.toLowerCase()}`" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { footer } from '~/data'
import { businessDetails } from '~/data'

const { $dayjs } = useNuxtApp()

const currentYear = ref($dayjs().year())
</script>
