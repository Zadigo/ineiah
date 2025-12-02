import type { Nullable } from "~/types"

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
  socials: SocialLinks[]
}

export const footer: FooterSection = {
  sections: [
    {
      title: 'En savoir plus',
      links: [
        {
          name: 'Contact',
          to: '/contact',
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
          to: '/sitemap',
          showOnMobile: false
        },
        {
          name: 'Politique de confidentialité',
          to: '/legal/confidentialite',
          showOnMobile: false
        },
        {
          name: 'Mentions légales',
          to: '/legal/mentions-legales',
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
          to: '/nos-prestations',
          showOnMobile: true,
          linkPosition: 1
        },
        {
          name: 'Notre histoire',
          to: '/notre-histoire',
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
  ],
  socials: [
    {
      name: 'Facebook',
      url: 'https://example.com',
      icon: 'facebook-f'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ineiah/',
      icon: 'instagram'
    },
    {
      name: 'Pinterest',
      url: 'https://www.instagram.com/ineiah/',
      icon: 'pinterest'
    }
  ]
}

export const mobileLinks: FooterLinks[] = footer.sections.reduce((acc, section) => {
  const mobileSectionLinks = section.links.filter(link => link.showOnMobile)
  return acc.concat(mobileSectionLinks)
}, [] as FooterLinks[]).sort((a, b) => {
  const posA = a.linkPosition ?? Number.MAX_SAFE_INTEGER
  const posB = b.linkPosition ?? Number.MAX_SAFE_INTEGER
  return posA - posB
})
