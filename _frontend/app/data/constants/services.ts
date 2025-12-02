export type ServiceNames = 'Shampoings coupes coiffage' | 'Soins'

export type ServiceCategory = 'Coupe'

export interface Service {
  /**
   * Name of the service
   */
  name: string
  /**
   * Gender
   */
  gender: 'Femme' | 'Homme'
  /**
   * Price of the service in euros
   */
  price: number
  /**
   * Brief description of the service
   */
  description: string
  /**
   * Detailed description of the actions that will be
   * performed during the service. This is a specific
   * attribute for each service
   */
  includes: string[]
  /**
   * Duration of the service in minutes
   */
  duration?: number
}

export interface ServiceSection {
  /**
   * The name of the package
   */
  name: ServiceNames
  /**
   * The list of services included in the package
   */
  services: Service[]
  /**
   * Detailed description of the actions that will be
   * performed during the service. This a global attribute
   * that can be used to provide more context for all the
   * services within the package
   */
  includes?: string[]
}

export const defaultServices: ServiceSection[] = [
  {
    name: 'Shampoings coupes coiffage',
    includes: [
      "Diagnostic / Conseils",
      "Coupe sur cheveux secs",
      "Routine sur - mesure au bac et son soin profond + massage",
      "Coiffage(brushing ou séchage naturel)"
    ],
    services: [
      {
        name: 'Court',
        price: 45,
        gender: 'Femme',
        description: "Rafraîchissez votre coupe et donnez-lui un coup de fraîcheur avec la restructuration, qui vous apportera forme et volume en quelques coups de ciseaux ! La coupe sur cheveux secs permet de rééquilibrer les volumes, la longueur et le style de la coupe (faire une frange, couper les pointes…)",
        includes: [],
        duration: 60
      },
      {
        name: 'Mi-longueur',
        price: 55,
        gender: 'Femme',
        description: "Rafraîchissez votre coupe et donnez-lui un coup de fraîcheur avec la restructuration, qui vous apportera forme et volume en quelques coups de ciseaux ! La coupe sur cheveux secs permet de rééquilibrer les volumes, la longueur et le style de la coupe (faire une frange, couper les pointes…)",
        includes: [],
        duration: 60
      },
      {
        name: 'Long',
        price: 65,
        gender: 'Femme',
        description: "Rafraîchissez votre coupe et donnez-lui un coup de fraîcheur avec la restructuration, qui vous apportera forme et volume en quelques coups de ciseaux ! La coupe sur cheveux secs permet de rééquilibrer les volumes, la longueur et le style de la coupe (faire une frange, couper les pointes…)",
        includes: [],
        duration: 60
      },
      {
        name: 'XL',
        price: 75,
        gender: 'Femme',
        description: "Rafraîchissez votre coupe et donnez-lui un coup de fraîcheur avec la restructuration, qui vous apportera forme et volume en quelques coups de ciseaux ! La coupe sur cheveux secs permet de rééquilibrer les volumes, la longueur et le style de la coupe (faire une frange, couper les pointes…)",
        includes: [],
        duration: 60
      },
      {
        name: 'Transformation',
        price: 65,
        gender: 'Femme',
        description: "Rafraîchissez votre coupe et donnez-lui un coup de fraîcheur avec la restructuration, qui vous apportera forme et volume en quelques coups de ciseaux ! La coupe sur cheveux secs permet de rééquilibrer les volumes, la longueur et le style de la coupe (faire une frange, couper les pointes…)",
        includes: [],
        duration: 60
      },
      {
        name: 'Coupe',
        price: 65,
        gender: 'Homme',
        description: "Rafraîchissez votre coupe et donnez-lui un coup de fraîcheur avec la restructuration, qui vous apportera forme et volume en quelques coups de ciseaux ! La coupe sur cheveux secs permet de rééquilibrer les volumes, la longueur et le style de la coupe (faire une frange, couper les pointes…)",
        includes: [],
        duration: 60
      }
    ]
  },
  {
    name: 'Soins',
    includes: [
      "Diagnostic / Conseils",
      "Application du soin",
      "Massage relaxant",
      "Coiffage(brushing ou séchage naturel)"
    ],
    services: [
      {
        name: 'Olapex - Court',
        price: 35,
        gender: 'Femme',
        description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
        includes: [],
        duration: 60
      },
      {
        name: 'Olapex - Mi-long',
        price: 45,
        gender: 'Femme',
        description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
        includes: [],
        duration: 60
      },
      {
        name: 'Olapex - Long',
        price: 55,
        gender: 'Femme',
        description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
        includes: [],
        duration: 60
      },
      {
        name: 'Olapex - XL',
        price: 65,
        gender: 'Femme',
        description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
        includes: [],
        duration: 60
      },
      {
        name: 'Kératine Végétale en Provence - Court',
        price: 35,
        gender: 'Femme',
        description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
        includes: [],
        duration: 60
      },
      {
        name: 'Kératine Végétale en Provence - Mi-long',
        price: 45,
        gender: 'Femme',
        description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
        includes: [],
        duration: 60
      },
      {
        name: 'Kératine Végétale en Provence - Long',
        price: 55,
        gender: 'Femme',
        description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
        includes: [],
        duration: 60
      },
      {
        name: 'Kératine Végétale en Provence - XL',
        price: 65,
        gender: 'Femme',
        description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
        includes: [],
        duration: 60
      }
    ]
  }
]
