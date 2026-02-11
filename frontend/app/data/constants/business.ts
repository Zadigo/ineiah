import type { Nullable } from '~/types'

export interface WebsiteProvider {
  legalName: string
  url: string
}

export interface CloudProvider extends WebsiteProvider {
  description: string
  address: string
  rcs: string
}

export interface ContactPoints {
  telephone: string
  email: string
  address: string
}

export type SocialPlatform = 'instagram' | 'facebook' | 'pinterest' | 'twitter' | 'linkedin' | 'tiktok' | 'youtube'

export type Social = {
  url: string
  handle?: string
}

export interface BusinessDetails {
  name: string
  legalName: string
  siren: string
  siret: string
  numberoTVA: Nullable<string>
  creationDate: string
  alternateName: string
  description: string
  logo: string
  sameAs: string[]
  image: string[]
  rcs: string
  address: string
  priceRange: '$' | '$$' | '$$$'
  foundingDate: string
  foundingLocation: string
  founderImage: Nullable<string>
  shareCapital: Nullable<string>
  founder: string
  founderDescription: string
  founderKnowsAbout: string[]
  webContentManager: string
  publishingDirector: string
  editorInChief: string
  websiteProvider: WebsiteProvider
  cloudProvider: CloudProvider
  contact: ContactPoints
  socials: Partial<Record<SocialPlatform, Social>>
}

export const businessDetails: BusinessDetails = {
  name: "La beauté d'Inéïah",
  legalName: "La beauté d'Inéïah",
  alternateName: "La beauté d'Inéïah",
  siren: '790 849 574',
  siret: '790 849 574 00039',
  numberoTVA: 'FR29790849574',
  creationDate: '2013-01-28',
  description: 'Salon de coiffure multiculturel spécialisé dans tous types de cheveux : crépus, bouclés, lisses. Soins, coupes et styles sur-mesure',
  logo: '',
  sameAs: [
    'https://fr.pinterest.com/labeautedineiah',
    'https://facebook.com/labeautedineiah',
    'https://www.instagram.com/ineiah'
  ],
  image: [

  ],
  rcs: '',
  address: '15 test address, Lille, France',
  priceRange: '$$',
  foundingDate: '2013-01-28',
  foundingLocation: 'Lille, France',
  founderImage: null,
  shareCapital: null,
  founder: 'Natacha Morel',
  founderDescription: "Natacha Morel est une coiffeuse certifiée et experte en bien-être avec plus de 20 ans d'expérience dans l'industrie de la beauté.",
  founderKnowsAbout: [
    'Cheveux crépus',
    'Cheveux bouclés',
    'Coiffure multiculturelle',
    'Soins capillaires'
  ],
  webContentManager: 'Natacha Morel',
  publishingDirector: 'Natacha Morel',
  editorInChief: 'Natacha Morel',
  websiteProvider: {
    legalName: 'Gency313',
    url: 'https://john-pendenque.gency313.fr/'
  },
  cloudProvider: {
    legalName: 'SAS OVH',
    url: 'http://www.ovhcloud.com/fr/',
    description: "OVH SAS est une filiale de la société OVH Groupe SA, société immatriculée au RCS de Lille",
    address: '2 rue Kellermann - 59100 Roubaix - France',
    rcs: '424 761 419 00045'
  },
  contact: {
    telephone: '+33-3-20-00-00-00',
    email: 'labeautedineiah@gmail.com',
    address: '15 test address, Lille, France'
  },
  socials: {
    instagram: {
      url: 'https://www.instagram.com/labeautedineiah',
      handle: '@labeautedineiah'
    },
    facebook: {
      url: 'https://www.facebook.com/labeautedineiah',
      handle: 'labeautedineiah'
    },
    pinterest: {
      url: 'https://fr.pinterest.com/labeautedineiah',
      handle: 'labeautedineiah'
    }
  }
}

type BusinessDetailsKeys = keyof BusinessDetails

type BusinessDetailsKeyValue = {
  [K in BusinessDetailsKeys]: BusinessDetails[K]
}

/**
 * A composable to access business details throughout the application. It provides a `get` function 
 * to retrieve specific details by key, ensuring type safety and consistency across the app.
 */
export async function useBusinessDetails() {
  function get<K extends BusinessDetailsKeys>(key: K): BusinessDetailsKeyValue[K] {
    return businessDetails[key]
  }

  const reactiveGet = reactify(get)
  const activeSocials = computed(() => Object.keys(get('socials')) as SocialPlatform[])

  function getSocial(platform: SocialPlatform): Social | null {
    const socials = get('socials')
    return socials[platform] || null
  }

  function getSocialIcon(platform: SocialPlatform): string {
    const icons: Record<SocialPlatform, string> = {
      instagram: 'fa-brands:instagram',
      facebook: 'fa-brands:facebook',
      pinterest: 'fa-brands:pinterest',
      twitter: 'fa-brands:twitter',
      linkedin: 'fa-brands:linkedin',
      tiktok: 'fa-brands:tiktok',
      youtube: 'fa-brands:youtube'
    }
    return icons[platform]
  }

  return {
    businessDetails,
    activeSocials,
    get,
    reactiveGet,
    getSocial,
    getSocialIcon
  }
}
