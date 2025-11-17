<template>
  <footer class="relative bg-primary-800 dark:bg-primary-900 w-full">
    <div class="w-full px-8 mx-auto max-w-7xl">
      <div class="grid justify-between grid-cols-1 gap-4 p-10 md:grid-cols-2 md:p-20">
        <h5 class="mb-6 text-xl font-semibold text-primary-100 dark:text-primary-200 uppercase">
          {{ businessDetails.legalName }}
        </h5>

        <div class="grid justify-between grid-rows-2 grid-cols-none gap-4 md:grid-cols-2 md:grid-rows-none">
          <ul v-for="(section, idx) in footer.sections" :id="`footer-section-${idx + 1}`" :key="section.title">
            <p class="block mb-1 text-lg font-bold text-primary-100 dark:text-primary-300 uppercase">
              {{ section.title }}
            </p>

            <li v-for="(link, linkIdx) in section.links" :key="linkIdx">
              <nuxt-link-locale :id="`footer-link-${linkIdx + 1}-section-${idx + 1}`" :to="link.to" class="block text-primary-100 dark:text-primary-200 py-1 hover:text-primary-300 focus:text-primary-300 text-md">
                {{ link.name }}
              </nuxt-link-locale>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center w-full py-4 mt-12 border-t border-brand-200 md:flex-row md:justify-between">
        <p class="block mb-4 text-sm text-center text-primary-200 dark:text-primary-300 md:mb-0">
          © {{ currentYear }} <nuxt-link-locale to="/">{{ businessDetails.legalName }}</nuxt-link-locale>. Réalisé par <a :href="businessDetails.websiteProvider.url">{{ businessDetails.websiteProvider.legalName }}</a>
        </p>

        <div class="flex gap-4 text-primary-200 sm:justify-center">
          <a v-for="social in footer.socials" :id="`footer-social-${social.name.toLowerCase()}`" :key="social.name" :href="social.url" class="block transition-opacity text-inherit hover:opacity-80">
            <Icon :name="`fa-brands:${social.icon}`" :alt="`${businessDetails.name} - ${social.name.toLowerCase()}`" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { businessDetails, footer } from '~/data'

const { $dayjs } = useNuxtApp()

const currentYear = ref($dayjs().year())
</script>
