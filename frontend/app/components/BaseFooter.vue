<template>
  <footer class="relative bg-primary-800 dark:bg-primary-900 w-full">
    <div class="w-full px-8 mx-auto max-w-7xl">
      <div class="grid justify-between grid-cols-1 gap-4 p-10 md:grid-cols-2 md:p-20">
        <div class="mb-5 md:mb-0">
          <nuxt-link-locale to="/">
            <h5 class="text-xl font-semibold text-primary-100 dark:text-primary-200 uppercase">
              {{ businessDetails.legalName }}
            </h5>
            <a href="https://www.seventiescoiffurelille.fr/services" target="_blank" class="text-sm text-primary-100 dark:text-primary-200 underline">
              chez 70's coiffure
            </a>
          </nuxt-link-locale>
          
          <div class="flex gap-2 mt-5">
            <nuxt-link-locale to="/" locale="fr" aria-label="Français">
              <volt-secondary-button>
                <icon name="i-circle-flags:fr" />
              </volt-secondary-button>
            </nuxt-link-locale>
  
            <nuxt-link-locale to="/" locale="en" aria-label="English">
              <volt-secondary-button>
                <icon name="i-circle-flags:uk" />
              </volt-secondary-button>
            </nuxt-link-locale>
          </div>
        </div>

        <div class="grid justify-between grid-rows-2 grid-cols-none gap-4 md:grid-cols-2 md:grid-rows-none">
          <ul v-for="(section, idx) in footer.sections" :id="`footer-section-${idx + 1}`" :key="section.title">
            <p class="block mb-1 text-lg font-bold text-primary-100 dark:text-primary-300 uppercase">
              {{ $t(section.title) }}
            </p>

            <li v-for="(link, linkIdx) in section.links" :key="linkIdx">
              <nuxt-link-locale :id="`footer-link-${linkIdx + 1}-section-${idx + 1}`" :to="link.to" class="block text-primary-100 dark:text-primary-200 py-1 hover:text-primary-300 focus:text-primary-300 text-md">
                {{ $t(link.name) }}
              </nuxt-link-locale>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center w-full py-4 mt-12 border-t border-brand-200 md:flex-row md:justify-between">
        <client-only>
          <p class="block mb-4 text-sm text-center text-primary-200 dark:text-primary-300 md:mb-0">
            © {{ currentYear }} <nuxt-link-locale to="/">{{ get('legalName') }}</nuxt-link-locale>. {{ $t('Réalisé par') }} <a :href="get('websiteProvider').url">{{ get('websiteProvider').legalName }}</a>
          </p>
        </client-only>

        <div class="flex gap-4 text-primary-200 sm:justify-center">
          <a v-for="social in activeSocials" :id="`footer-social-${social}`" :key="social" :href="getSocial(social)?.url" class="block transition-opacity text-inherit hover:opacity-80">
            <icon :name="getSocialIcon(social)" :alt="`${businessDetails.name} - ${social}`" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { businessDetails, footer, useBusinessDetails } from '~/data'

const { $dayjs } = useNuxtApp()
const currentYear = ref($dayjs().year())

const { getSocial, getSocialIcon, activeSocials, get } = await useBusinessDetails()
</script>
