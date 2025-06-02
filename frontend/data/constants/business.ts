export interface WebsiteProvider {
  legalName: string
  url: string
}

export interface CloudProvider extends WebsiteProvider {
  description: string
  address: string
  rcs: string
}

export interface BusinessDetails {
  name: string
  legalName: string
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
}

export const businessDetails: BusinessDetails = {
  name: "La beauté d'Inéïah",
  legalName: "La beauté d'Inéïah",
  alternateName: "La beauté d'Inéïah",
  description: "",
  logo: '',
  sameAs: [
    
  ],
  image: [
    
  ],
  rcs: '',
  address: '',
  priceRange: '$$',
  foundingDate: '',
  foundingLocation: '',
  shareCapital: null,
  founder: 'Natasha Morel',
  webContentManager: 'Natasha Morel',
  publishingDirector: 'Natasha Morel',
  editorInChief: 'Natasha Morel',
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
  }
}
