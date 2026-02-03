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

export interface BusinessDetails {
  name: string
  legalName: string
  siren: string
  siret: string
  numberoTVA?: string
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
  shareCapital: string | null
  founder: string
  webContentManager: string
  publishingDirector: string
  editorInChief: string
  websiteProvider: WebsiteProvider
  cloudProvider: CloudProvider
  contact: ContactPoints
  socials: {
    instagram: {
      url: string
      handle?: string
    }
    facebook: {
      url: string
      handle?: string
    }
  }
}

export const businessDetails: BusinessDetails = {
  name: "La beauté d'Inéïah",
  legalName: "La beauté d'Inéïah",
  alternateName: "La beauté d'Inéïah",
  siren: '790 849 574',
  siret: '790 849 574 00039',
  numberoTVA: 'FR29790849574',
  creationDate: '2013-01-28',
  description: "",
  logo: '',
  sameAs: [

  ],
  image: [

  ],
  rcs: '',
  address: '15 test address, Lille',
  priceRange: '$$',
  foundingDate: '',
  foundingLocation: '',
  shareCapital: null,
  founder: 'Natacha Morel',
  webContentManager: 'Natacha Morel',
  publishingDirector: 'Natacha Morel',
  editorInChief: 'Natacha Morel',
  websiteProvider: {
    legalName: 'Gency313',
    url: 'https://gency313.fr'
  },
  cloudProvider: {
    legalName: 'SAS OVH',
    url: 'http://www.ovhcloud.com/fr/',
    description: "OVH SAS est une filiale de la société OVH Groupe SA, société immatriculée au RCS de Lille",
    address: '2 rue Kellermann - 59100 Roubaix - France',
    rcs: '424 761 419 00045'
  },
  contact: {
    telephone: '+1-888-555-0123',
    email: 'labeautedineiah@gmail.com',
    address: '15 test address, Lille'
  },
  socials: {
    instagram: {
      url: 'https://www.instagram.com/hairstudiobyanissa',
      handle: '@hairstudiobyanissa'
    },
    facebook: {
      url: 'https://www.facebook.com/hairstudiobyanissa',
      handle: 'hairstudiobyanissa'
    }
  }
}

type BusinessDetailsKeys = keyof BusinessDetails

type BusinessDetailsKeyValue = {
  [K in BusinessDetailsKeys]: BusinessDetails[K]
}

export async function useBusinessDetails() {
  function get<K extends BusinessDetailsKeys>(key: K): BusinessDetailsKeyValue[K] {
    return businessDetails[key]
  }

  return {
    businessDetails,
    get
  }
}
