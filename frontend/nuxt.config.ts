import tailwindcss from '@tailwindcss/vite'
import { defineOrganization } from 'nuxt-schema-org/schema'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  
  ssr: true,

  routeRules: {},

  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  runtimeConfig: {
    public: {
      // Firebase
      firebaseApiKey: process.env.NUXT_FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.NUXT_FIREBASE_AUTH_DOMAIN,
      firebaseDbUrl: process.env.NUXT_FIREBASE_DB_URL,
      firebaseStorageBucket: process.env.NUXT_FIREBASE_STORAGE_BUCKET,
      firebaseAppId: process.env.NUXT_FIREBASE_APP_ID,
      firebaseMeasurementId: process.env.NUXT_FIREBASE_MEASUREMENT_ID,
      firebaseMessageSenderId: process.env.NUXT_FIREBASE_MESSAGE_SENDER_ID,
      firebaseProjectId: process.env.NUXT_FIREBASE_PROJECT_ID,

      // Stripe
      stripeTestSecretKey: process.env.NUXT_STRIPE_TEST_SECRET_KEY,
      stripeTestPublishableKey: process.env.NUXT_STRIPE_TEST_PUBLISHABLE_KEY,
      stripeApiVersion: '2024-06-20',
      stripeLocale: 'fr',

      // What's App
      whatsAppUrl: process.env.NUXT_WHATS_APP_URL
    }
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@nuxtjs/google-fonts',
    'pinia-plugin-persistedstate',
    'shadcn-nuxt',
    '@vueuse/nuxt',
    'nuxt-gtag',
    'nuxt-schema-org'
  ],

  shadcn: {
    prefix: 'Shad',
    componentDir: './components/ui'
  },

  googleFonts: {
    families: {
      Ubuntu: {
        wght: '100..700'
      },
      Roboto: {
        wght: '100..700'
      }
    }
  },

  i18n: {
    baseUrl: './',
    langDir: './locales',
    defaultLocale: 'fr',
    lazy: true,
    vueI18n: './i18n.config.ts',
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
        file: 'en-US.ts',
        dir: 'ltr',
        name: 'English'
      }
    ]
  },

  // pages: {
  //   'nos-prestations': { fr: '/nos-prestations', en: '/our-services' }
  // },

  image: {
    // TODO: Activate when the project images backend
    // is set correctly to cloudefare/aws
    // https://image.nuxt.com/providers/cloudflare
    provider: 'none'
  },

  // hooks: {
  //   'site-config:resolve': (_siteConfig) => {
  //     if (process.env) {
  //       // Do something
  //     }
  //   }
  // },

  seo: {
    url: 'https://example.com',
    name: "La beauté d'Inéïah"
  },

  schemaOrg: {
    identity: defineOrganization({
      '@type': 'HairSalon',
      name: "La beauté d'Inéïah",
      legalName: 'Inéïah',
      alternateName: 'Inéïah Beauté',
      description: 'Institut de beauté spécialisé en soins naturels et bien-être à Lille.',
      logo: 'https://example.com/logo.png',
      sameAs: [
        'https://www.facebook.com/ineiah',
        'https://www.instagram.com/ineiah',
        'https://www.linkedin.com/company/ineiah'
      ],
      image: [
        'https://yourdomain.com/images/service-haircut.jpg',
        'https://yourdomain.com/images/service-coloring.jpg'
      ],
      priceRange: '$$',
      foundingDate: '2022-05-01',
      foundingLocation: {
        '@type': 'Place',
        name: 'Lille, France'
      },
      founder: {
        '@type': 'Person',
        name: 'Natasha Mory',
        jobTitle: 'Founder & CEO',
        description: 'Natasha Mory is a certified hair stylist and wellness expert with over 10 years of experience in the beauty industry.',
        image: 'https://yourdomain.com/images/founder-natasha.jpg',
        url: 'https://yourdomain.com/about',
        sameAs: [
          'https://www.linkedin.com/in/natashamory',
          'https://www.instagram.com/natasha.mory'
        ],
        worksFor: {
          '@type': 'Organization',
          name: "La beauté d'Inéïah"
        }
      },
      numberOfEmployees: {
        '@type': 'QuantityValue',
        value: 1
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Haircut',
              description: 'Professional haircut tailored to your style.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Hair Coloring',
              description: 'Full or partial hair coloring services.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Hair Styling',
              description: 'Styling services for special occasions.',
            }
          }
        ]
      },
      taxId: null,
      vatId: null,
      address: {},
      currenciesAccepted: 'EUR',
      areaServed: {
        '@type': 'Place',
        name: 'Lille, France'
      },
      paymentAccepted: [
        'Credit Card',
        'Apple Pay',
        'Google Pay'
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00:00',
          closes: '18:00:00'
        }
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          telephone: '+1-888-555-0123',
          email: 'support@modernhome.com',
          availableLanguage: ['English', 'French'],
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00:00',
            closes: '18:00:00'
          }
        }
      ]
    })
  },

  gtag: {
    id: 'G-CVKFG2XPVG',
    initCommands: [
      ['config', 'default', {
        debug: 'true',
        currency: 'EUR',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied'
      }]
    ]
  }

  // nitro: {
  //   storage: {
  //     redis: {
  //       driver: 'redis',
  //       host: process.env.NUXT_REDIS_HOST,
  //       port: 6379,
  //       username: '',
  //       password: process.env.NUXT_REDIS_PASSWORD
  //     }
  //   }
  // }
})
