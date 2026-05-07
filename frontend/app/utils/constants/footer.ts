import type { Nullable } from '~/types'

export interface FooterLinks {
  name: string
  to: string
  showOnMobile?: boolean
  linkPosition?: Nullable<number>
}

export type SocialLinks = Pick<FooterLinks, 'name'> & {
  url: string
  icon: string
}

export interface FooterSection {
  sections: {
    title: string
    links: FooterLinks[]
  }[]
}

export const footer: FooterSection = {
  sections: [
    {
      title: 'En savoir plus',
      links: [
        {
          name: 'Contact',
          to: '/contact/',
          showOnMobile: true,
          linkPosition: 4
        },
        {
          name: 'FAQ',
          to: '/faq',
          showOnMobile: false
        },
        // {
        //   name: 'Conditions générales de vente',
        //   to: '/legal/conditions-generales'
        // },
        {
          name: 'Plan du site',
          to: '/sitemap/',
          showOnMobile: false
        },
        {
          name: 'Politique de confidentialité',
          to: '/legal/confidentialite',
          showOnMobile: false
        },
        {
          name: 'Mentions légales',
          to: '/legal/mentions-legales/',
          showOnMobile: false
        }
      ]
    },
    {
      title: 'Le salon',
      links: [
        {
          name: 'Accueil',
          to: '/',
          showOnMobile: true,
          linkPosition: 0
        },
        {
          name: 'Nos prestations',
          to: '/nos-prestations/',
          showOnMobile: true,
          linkPosition: 1
        },
        {
          name: 'Notre histoire',
          to: '/notre-histoire/',
          showOnMobile: true,
          linkPosition: 2
        },
        {
          name: 'Nos coupes',
          to: '/galerie',
          showOnMobile: true,
          linkPosition: 3
        }
      ]
    }
  ]
}

export const mobileLinks: FooterLinks[] = footer.sections.reduce<FooterLinks[]>((acc, section) => {
  const mobileSectionLinks = section.links.filter(link => link.showOnMobile)
  return acc.concat(mobileSectionLinks)
}, []).sort((a, b) => {
  const posA = a.linkPosition ?? Number.MAX_SAFE_INTEGER
  const posB = b.linkPosition ?? Number.MAX_SAFE_INTEGER
  return posA - posB
})

// type SocialNames = 'Facebook' | 'Instagram' | 'LinkedIn' | 'Pinterest'

// type WebsiteLinks = {
//   name: SocialNames | (string & {})
//   to: string
//   showMobile: boolean
//   groupBy: string | undefined
//   navbarPosition?: number
//   footerPosition?: number
//   isSocial: boolean
// }

// export const websiteLinks: WebsiteLinks[] = [
//   {
//     name: 'Accueil',
//     to: '/',
//     showMobile: true,
//     groupBy: 'Le salon',
//     navbarPosition: 0,
//     isSocial: false
//   },
//   {
//     name: 'Nos prestations',
//     to: '/nos-prestations/',
//     showMobile: true,
//     groupBy: 'Le salon',
//     navbarPosition: 1,
//     isSocial: false
//   },
//   {
//     name: 'Notre histoire',
//     to: '/notre-histoire/',
//     showMobile: true,
//     groupBy: 'Le salon',
//     navbarPosition: 2,
//     isSocial: false
//   },
//   {
//     name: 'Nos coupes',
//     to: '/galerie',
//     showMobile: true,
//     groupBy: 'Le salon',
//     navbarPosition: 3,
//     isSocial: false
//   },
//   {
//     name: 'Contact',
//     to: '/contact/',
//     showMobile: true,
//     groupBy: 'En savoir plus',
//     navbarPosition: 4,
//     isSocial: false
//   },
//   {
//     name: 'FAQ',
//     to: '/faq',
//     showMobile: false,
//     groupBy: 'En savoir plus',
//     isSocial: false
//   },
//   {
//     name: 'Plan du site',
//     to: '/sitemap/',
//     showMobile: false,
//     groupBy: 'En savoir plus',
//     isSocial: false
//   },
//   {
//     name: 'Politique de confidentialité',
//     to: '/legal/confidentialite',
//     showMobile: false,
//     groupBy: 'En savoir plus',
//     isSocial: false
//   },
//   {
//     name: 'Mentions légales',
//     to: '/legal/mentions-legales/',
//     showMobile: false,
//     groupBy: 'En savoir plus',
//     isSocial: false
//   },
//   {
//     name: 'Facebook',
//     to: 'https://www.facebook.com/coiffeurhommeparis/',
//     showMobile: true,
//     groupBy: 'Réseaux sociaux',
//     isSocial: true
//   },
//   {
//     name: 'Instagram',
//     to: 'https://www.instagram.com/coiffeurhommeparis/',
//     showMobile: true,
//     groupBy: undefined,
//     isSocial: true
//   },
//   {
//     name: 'LinkedIn',
//     to: 'https://www.linkedin.com/company/coiffeur-homme-paris/',
//     showMobile: true,
//     groupBy: undefined,
//     isSocial: true
//   },
//   {
//     name: 'Pinterest',
//     to: 'https://www.pinterest.com/coiffeurhommeparis',
//     showMobile: true,
//     groupBy: undefined,
//     isSocial: true
//   }
// ]

// export function useWebsiteLinksComposable() {
//   const footerLinks = computed(() => {
//     return websiteLinks
//       .filter(link => !link.isSocial)
//       .reduce<Record<string, WebsiteLinks[]>>((acc, link) => {
//         if (isDefined(link.groupBy)) {
//           if (!acc[link.groupBy]) {
//             acc[link.groupBy] = []
//           } else {
//             acc[link.groupBy]?.push(link)
//           }
//         }
//         return acc
//       }, {})
//   })

//   return {
//     footerLinks
//   }
// }
