import type { ServiceSection } from '~/types'


export const defaultServices: ServiceSection[] = [
  {
    name: 'Shampoings coupes coiffage',
    includes: [
      "Diagnostic / Conseils",
      "Shampooing conditionner",
      "Séchage (naturel ou brushing)"
    ],
    services: [
      {
        name: null,
        price: 35,
        gender: 'Mixte',
        description: "Rafraîchissez votre coupe et donnez-lui un coup de fraîcheur avec la restructuration, qui vous apportera forme et volume en quelques coups de ciseaux ! La coupe sur cheveux secs permet de rééquilibrer les volumes, la longueur et le style de la coupe (faire une frange, couper les pointes…)",
        includes: [],
        duration: 30,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Coupe'
      },
      {
        name: 'Court',
        price: 55,
        gender: 'Mixte',
        description: "Rafraîchissez votre coupe et donnez-lui un coup de fraîcheur avec la restructuration, qui vous apportera forme et volume en quelques coups de ciseaux ! La coupe sur cheveux secs permet de rééquilibrer les volumes, la longueur et le style de la coupe (faire une frange, couper les pointes…)",
        includes: [],
        duration: 60,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Coupe'
      },
      {
        name: 'Mi-Long',
        price: 65,
        gender: 'Mixte',
        description: "Rafraîchissez votre coupe et donnez-lui un coup de fraîcheur avec la restructuration, qui vous apportera forme et volume en quelques coups de ciseaux ! La coupe sur cheveux secs permet de rééquilibrer les volumes, la longueur et le style de la coupe (faire une frange, couper les pointes…)",
        includes: [],
        duration: 90,
        image: '/testimages/jpeg/customer18.jpg',
        category: 'Coupe'
      },
      {
        name: 'XL',
        price: 75,
        gender: 'Mixte',
        description: "Rafraîchissez votre coupe et donnez-lui un coup de fraîcheur avec la restructuration, qui vous apportera forme et volume en quelques coups de ciseaux ! La coupe sur cheveux secs permet de rééquilibrer les volumes, la longueur et le style de la coupe (faire une frange, couper les pointes…)",
        includes: [],
        duration: 120,
        image: '/testimages/jpeg/customer1.jpg',
        category: 'Coupe'
      },
      {
        name: 'Transformation',
        price: 75,
        gender: 'Mixte',
        description: "Rafraîchissez votre coupe et donnez-lui un coup de fraîcheur avec la restructuration, qui vous apportera forme et volume en quelques coups de ciseaux ! La coupe sur cheveux secs permet de rééquilibrer les volumes, la longueur et le style de la coupe (faire une frange, couper les pointes…)",
        includes: [],
        duration: 120,
        image: '/testimages/jpeg/customer2.jpg',
        category: 'Coupe'
      }
    ]
  },
  {
    name: 'Soins Olaplex',
    includes: [
      "Soin réparateur profond / Anti-casse",
    ],
    services: [
      {
        name: 'Court',
        price: 35,
        gender: 'Mixte',
        description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
        includes: [],
        duration: 60,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Soin'
      },
      {
        name: 'Mi-long',
        price: 45,
        gender: 'Mixte',
        description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
        includes: [],
        duration: 60,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Soin'

      },
      {
        name: 'Long',
        price: 55,
        gender: 'Mixte',
        description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
        includes: [],
        duration: 60,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Soin'
      },
      {
        name: 'XL',
        price: 65,
        gender: 'Mixte',
        description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
        includes: [],
        duration: 60,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Soin'
      }
    ]
  },
  {
    name: 'Soins Kératine Végétale / Botox Naturel',
    includes: [
      "Soin réparateur profond / Anti-casse",
    ],
    services: [
      {
        name: 'Court',
        price: 75,
        gender: 'Mixte',
        description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
        includes: [],
        duration: 30,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Soin'
      },
      {
        name: 'Mi-long',
        price: 85,
        gender: 'Mixte',
        description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
        includes: [],
        duration: 50,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Soin'
      },
      {
        name: 'Long',
        price: 95,
        gender: 'Mixte',
        description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
        includes: [],
        duration: 70,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Soin'
      },
      {
        name: 'XL',
        price: 105,
        gender: 'Mixte',
        description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
        includes: [],
        duration: 90,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Soin'
      }
    ]
  },
  {
    name: 'Couleurs',
    includes: [
      "Soin réparateur profond / Anti-casse",
    ],
    services: [
      {
        name: 'Court',
        price: 75,
        gender: 'Mixte',
        description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
        includes: [],
        duration: 30,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Coloration'
      },
      {
        name: 'Mi-long',
        price: 85,
        gender: 'Mixte',
        description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
        includes: [],
        duration: 50,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Coloration'
      },
      {
        name: 'Long',
        price: 95,
        gender: 'Mixte',
        description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
        includes: [],
        duration: 70,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Coloration'
      },
      {
        name: 'XL',
        price: 105,
        gender: 'Mixte',
        description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
        includes: [],
        duration: 90,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Coloration'
      }
    ]
  },
  {
    name: 'Balayage / Mèches',
    includes: [
      "Soin réparateur profond / Anti-casse",
    ],
    services: [
      {
        name: 'Court',
        price: 75,
        gender: 'Mixte',
        description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
        includes: [],
        duration: 30,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Mèches'
      },
      {
        name: 'Mi-long',
        price: 85,
        gender: 'Mixte',
        description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
        includes: [],
        duration: 50,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Mèches'
      },
      {
        name: 'Long',
        price: 95,
        gender: 'Mixte',
        description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
        includes: [],
        duration: 70,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Mèches'
      },
      {
        name: 'XL',
        price: 105,
        gender: 'Mixte',
        description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
        includes: [],
        duration: 90,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Mèches'
      }
    ]
  }
]
