export interface FooterLinks {
  name: string
  to: string
}

export interface SocialLinks {
  name: string
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
          to: '/contact'
        },
        {
          name: 'FAQ',
          to: '/faq'
        },
        {
          name: 'Conditions générales de vente',
          to: '/legal/conditions-generales'
        },
        {
          name: 'Politique de confidentialité',
          to: '/legal/confidentialite'
        },
        {
          name: 'Mentions légales',
          to: '/legal/mentions-legales'
        }
      ]
    },
    {
      title: 'Le salon',
      links: [
        {
          name: 'Notre histoire',
          to: '/notre-histoire'
        },
        {
          name: 'Nos prestations',
          to: '/nos-prestations'
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

export const mobileLinks: FooterLinks[] = [
  {
    name: 'Accueil',
    to: '/'
  },
  {
    name: 'Notre histoire',
    to: '/notre-histoire'
  },
  {
    name: 'Nos prestations',
    to: '/nos-prestations'
  },
  {
    name: 'Contact',
    to: '/contact'
  },
  {
    name: 'FAQ',
    to: '/faq'
  }
]
