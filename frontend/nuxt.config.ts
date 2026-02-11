import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/test-utils/module',
    '@nuxtjs/seo',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    'nuxt-vuefire',
    'nuxt-schema-org',
    'nuxt-og-image',
    'nuxt-vuefire',
    // 'nuxt-gtag',
    'nuxt-ganalytics',
    'nuxt-link-checker'
  ],

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    name: process.env.NUXT_PUBLIC_SITE_NAME || "La Beauté D'Inéïah"
  },

  seo: {
    fallbackTitle: true
  },

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },

  routeRules: {
    '/': { swr: 16*60 },
    '/faq': { swr: 30*60 },
    '/nos-prestations': { swr: 15*60 },
    '/notre-histoire': { prerender: true },
    '/legal/**': { prerender: true },
    '/contact': { swr: true },
    '/galerie': { ssr: false },
    '/sitemap': { prerender: true },
    '/admin/**': { ssr: false }
  },

  css: [
    '~/assets/css/tailwind.css'
  ],

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  vuefire: {
    config: {
      apiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      dbUrl: process.env.NUXT_PUBLIC_FIREBASE_DB_URL,
      storageBucket: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      appId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID,
      measurementId: process.env.NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
      messageSenderId: process.env.NUXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
      projectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID
    }
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      siteName: process.env.NUXT_PUBLIC_SITE_NAME || "La Beauté D'Inéïah",

      // Stripe
      stripeTestSecretKey: process.env.NUXT_PUBLIC_STRIPE_TEST_SECRET_KEY,
      stripeTestPublishableKey: process.env.NUXT_PUBLIC_STRIPE_TEST_PUBLISHABLE_KEY,
      stripeApiVersion: '2024-06-20',
      stripeLocale: 'fr',

      // What's App
      whatsAppUrl: process.env.NUXT_PUBLIC_WHATS_APP_URL,

      // Cloudfront
      cdnBaseUrl: process.env.NUXT_PUBLIC_CLOUDFRONT_URL || '',

      // Twilio
      twilioAccountSid: process.env.NUXT_PUBLIC_TWILIO_ACCOUNT_SID,
      twilioAuthToken: process.env.NUXT_PUBLIC_TWILIO_AUTH_TOKEN,
      twilioPhoneNumber: process.env.NUXT_PUBLIC_TWILIO_PHONE_NUMBER,
      twilioToPhoneNumber: process.env.NUXT_PUBLIC_TWILIO_TO_PHONE_NUMBER
    }
  },

  fonts: {
    provider: 'google',
    families: [
      {
        name: 'Ubuntu',
        weight: '300..700'
      },
      {
        name: 'Roboto',
        weight: '200..700'
      },
      {
        name: 'Kreon',
        weight: '300..700'
      }
    ]
  },

  ganalytics: {
    ga4: {
      id: 'G-LK89FQLZWP',
      enableDebug: true
    },
    gtm: {
      id: 'GTM-KDXJQZCF'
    }
  },

  i18n: {
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL,
    langDir: './locales',
    defaultLocale: 'fr',
    vueI18n: './i18n.config.ts',
    customRoutes: 'config',
    pages: {
      'faq': { fr: '/faq', en: '/faq' },
      'galerie': { fr: '/galerie', en: '/gallery' },
      'contact': { fr: '/contact', en: '/contact' },
      'nos-prestations': { fr: '/nos-prestations', en: '/our-services' },
      'notre-histoire': { fr: '/notre-histoire', en: '/our-story' },
      'legal/confidentialite': { fr: '/legal/confidentialite', en: '/legal/privacy-policy' },
      'legal/mentions-legales': { fr: '/legal/mentions-legales', en: '/legal/legal-notices' },
    },
    locales: [
      {
        code: 'fr',
        language: 'fr-FR',
        file: 'fr-FR.ts',
        dir: 'ltr',
        name: 'French'
      },
      {
        code: 'en',
        language: 'en-US',
        files: ['en.ts', 'en-US.ts'],
        dir: 'ltr',
        name: 'English'
      }
    ]
  },

  image: {
    // TODO: Activate when the project images backend
    // is set correctly to cloudefare/aws
    // https://image.nuxt.com/providers/cloudflare
    provider: 'none'

    // provider: 'cloudfront',
    // providers: {
    //   cloudfront: {}
    // }
  },

  // gtag: {
  //   id: 'G-CVKFG2XPVG',
  //   initCommands: [
  //     ['config', 'default', {
  //       debug: 'true',
  //       currency: 'EUR',
  //       ad_storage: 'denied',
  //       ad_user_data: 'denied',
  //       ad_personalization: 'denied',
  //       analytics_storage: 'denied'
  //     }]
  //   ]
  // },

  nitro: {
    storage: {
      redis: {
        driver: 'redis',
        host: process.env.NUXT_PUBLIC_REDIS_HOST,
        port: 6379,
        username: '',
        password: process.env.NUXT_PUBLIC_REDIS_PASSWORD
      }
    }
    // devStorage: {
    //   file: {
    //     driver: 'fs',
    //     base: './data/storage'
    //   }
    // }
  }
})
