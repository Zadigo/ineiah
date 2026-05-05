import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils/module',
    '@nuxtjs/seo',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@nuxt/eslint',
    'nuxt-vuefire',
    'nuxt-ganalytics'
  ],
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },

    head: {
      titleTemplate: '%s %separator %siteName',
      templateParams: {
        separator: '-',
        siteName: 'La Beauté D\'Inéïah',
        meta: [
          {
            name: 'theme-color',
            content: '#96726a'
          },
          {
            name: 'theme-color',
            content: '#5e4842',
            media: '(prefers-color-scheme: dark)'
          }
        ]
      }
    }
  },

  css: [
    '~/assets/css/tailwind.css'
  ],

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL,
    name: process.env.NUXT_PUBLIC_SITE_NAME
  },

  runtimeConfig: {
    public: {
      // Site
      siteUrl: '',
      siteName: '',

      // Stripe
      stripeTestSecretKey: '',
      stripeTestPublishableKey: '',
      stripeApiVersion: '2024-06-20',
      stripeLocale: 'fr',

      // What's App
      whatsAppUrl: '',

      // Cloudfront
      cdnBaseUrl: '',

      // Twilio
      twilioAccountSid: '',
      twilioAuthToken: '',
      twilioPhoneNumber: '',
      twilioToPhoneNumber: ''
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/faq': { prerender: true },
    '/nos-prestations': { swr: 15 * 60 },
    '/notre-histoire': { prerender: true },
    '/legal/**': { prerender: true },
    '/contact': { prerender: true },
    '/galerie': { ssr: false },
    '/sitemap': { prerender: true },
    '/admin/**': { ssr: false }
  },
  compatibilityDate: '2025-07-15',

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
  },

  vite: {
    plugins: [
      tailwindcss({
        optimize: false
      })
    ],
    optimizeDeps: {
      include: [
        'vuefire',
        'dayjs', // CJS
        'dayjs/plugin/calendar', // CJS
        'dayjs/plugin/duration', // CJS
        'dayjs/plugin/relativeTime', // CJS
        'dayjs/plugin/timezone', // CJS
        'dayjs/plugin/utc', // CJS
        'primevue/config',
        'primevue/card',
        'tailwind-merge',
        'primevue/button',
        '@unhead/bundler',
        'reka-ui',
        'clsx',
        'primevue/skeleton'
      ]
    }
  },
  debug: false,

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      },
      typescript: {
        tsconfigPath: './tsconfig.json'
      }
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
      id: [
        'G-LK89FQLZWP',
        'G-769ND3ZXSC'
      ],
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
      'legal/mentions-legales': { fr: '/legal/mentions-legales', en: '/legal/legal-notices' }
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
    provider: 'none'
    // https://image.nuxt.com/providers/cloudflare
    // provider: process.env.NODE_ENV === 'production' ? 'cloudfront' : 'none',
    // providers: {
    //   cloudfront: {
    //     baseURL: process.env.NUXT_PUBLIC_CLOUDFRONT_URL
    //   },

    //   formats: ['webp', 'avif', 'jpeg'],

    //   // screens: {
    //   //   xs: 320,
    //   //   sm: 640,
    //   //   md: 768,
    //   //   lg: 1024,
    //   //   xl: 1280,
    //   //   xxl: 1536,
    //   // },

    //   // quality: 80,

    //   // ...(process.env.NODE_ENV === 'production' && {
    //   //   modifiers: {
    //   //     format: 'webp',
    //   //     fit: 'cover',
    //   //   }
    //   // })
    // }
  },

  ogImage: {
    componentDirs: ['og-image']
  },

  seo: {
    fallbackTitle: true
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
  }
})
