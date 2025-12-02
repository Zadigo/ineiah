import tailwind from '@tailwindcss/vite'
import { defineOrganization } from 'nuxt-schema-org/schema'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    plugins: [tailwind()]
  },
  modules: [
    // 'nuxt-og-image',
    'nuxt-schema-org',
    '@nuxtjs/i18n'
  ],
  schemaOrg: {
    identity: defineOrganization({
      '@type': 'HairSalon',
      name: "La beauté d'Inéïah",
    })
  },
  i18n: {
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL,
    langDir: './locales',
    defaultLocale: 'fr',
    vueI18n: './i18n.config.ts',
    customRoutes: 'config',
    pages: {
      'nos-prestations': { fr: '/nos-prestations', en: '/our-services' },
      'notre-histoire': { fr: '/notre-histoire', en: '/our-story' },
      'contact': { fr: '/contact', en: '/contact' }
    },
    locales: []
  }
})
