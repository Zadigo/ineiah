import { useBusinessDetails, useServices } from "~/data"

export default defineNuxtPlugin(async () => {
  const { get, getSocial } = await useBusinessDetails()
  const { services } = useServices()

  const siteUrl = useRuntimeConfig().public.siteUrl

  useSchemaOrg(
    [
      defineOrganization({
        '@type': 'HairSalon',
        name: get('legalName'),
        legalName: get('legalName'),
        alternateName: 'Inéïah Beauté',
        description: 'Salon de coiffure multiculturel spécialisé dans tous types de cheveux : crépus, bouclés, lisses. Soins, coupes et styles sur-mesure.',
        logo: 'https://example.com/logo.png',
        sameAs: get('sameAs'),
        image: [
          'https://yourdomain.com/images/service-haircut.jpg',
          'https://yourdomain.com/images/service-coloring.jpg'
        ],
        priceRange: '$$',
        foundingDate: get('foundingDate'),
        foundingLocation: {
          '@type': 'Place',
          name: get('foundingLocation')
        },
        founder: {
          '@type': 'Person',
          name: get('founder'),
          jobTitle: 'Founder & CEO',
          description: "Natacha Morel est une coiffeuse certifiée et experte en bien-être avec plus de 10 ans d'expérience dans l'industrie de la beauté.",
          image: 'https://yourdomain.com/images/founder-natacha.jpg',
          url: 'https://yourdomain.com/about',
          sameAs: [
            'https://www.instagram.com/ineiah'
          ],
          worksFor: {
            '@type': 'Organization',
            name: get('legalName')
          }
        },
        numberOfEmployees: {
          '@type': 'QuantitativeValue',
          value: 1
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Services',
          itemListElement: services.value.flatMap(service => {
            return service.services.map(subService => ({
              '@type': 'Offer',
              price: subService.price,
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock',
              itemOffered: {
                '@type': 'Service',
                name: `${service.name} - ${subService.name || ''} - ${subService.gender}`.trim(),
                description: service.globalDescription,
                serviceType: null,
                provider: {
                  '@type': 'Organization',
                  name: get('legalName')
                }
              }
            }))
          })
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
            dayOfWeek: 'Monday',
            opens: '09:00:00',
            closes: '21:00:00'
          },
          {'@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Tuesday',
            opens: '09:00:00',
            closes: '19:00:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Wednesday',
            opens: '09:00:00',
            closes: '17:00:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Thursday',
            opens: '09:00:00',
            closes: '15:00:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Friday',
            opens: '09:00:00',
            closes: '15:00:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '09:00:00',
            closes: '12:00:00'
          }
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            telephone: get('contact').telephone,
            email: get('contact').email,
            availableLanguage: ['English', 'French'],
            hoursAvailable: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00:00',
              closes: '15:00:00'
            }
          }
        ]
      }),

      defineWebSite({
        '@type': 'WebSite',
        '@id': siteUrl + '#website',
        url: siteUrl,
        name: get('legalName'),
        description: get('description'),
        publisher: {
          '@id': siteUrl + '#organization'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: siteUrl + '/search?q={search_term_string}'
          },
          'query-input': 'required name=search_term_string'
        }
      }),

      defineBreadcrumb({
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Accueil',
            item: siteUrl + '/'
          }
        ]
      }),

      definePerson({
        '@type': 'Person',
        name: get('founder'),
        jobTitle: 'Coiffeuse professionnelle & Fondatrice',
        description: get('founderDescription'),
        image: get('founderImage'),
        url: siteUrl + '/notre-histoire',
        sameAs: [
            getSocial('instagram')?.url,
            getSocial('facebook')?.url
        ],
        worksFor: {
          '@type': 'Organization',
          '@id': siteUrl + '#organization',
        },
        knowsAbout: get('founderKnowsAbout')
      })
    ]
  )
})
