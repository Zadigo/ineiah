import type { ServiceSection } from '~/types'


export const defaultServices: ServiceSection[] = [
  {
    name: 'Shampoings • Coupes • Mise en forme',
    globalDescription: "Rafraîchissez votre coupe et donnez-lui un coup de fraîcheur avec la restructuration, qui vous apportera forme et volume en quelques coups de ciseaux ! La coupe sur cheveux secs permet de rééquilibrer les volumes, la longueur et le style de la coupe (faire une frange, couper les pointes…)",
    includes: [
      "Diagnostic / Conseils",
      "Shampooing conditionner",
      "Séchage (naturel ou brushing)"
    ],
    services: [
      {
        name: 'Court',
        price: 45,
        priceText: null,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 60,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Coupe'
      },
      {
        name: 'Mi-Long',
        price: 55,
        priceText: null,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 90,
        image: '/testimages/jpeg/customer18.jpg',
        category: 'Coupe'
      },
      {
        name: 'XL',
        price: 75,
        priceText: null,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 120,
        image: '/testimages/jpeg/customer1.jpg',
        category: 'Coupe'
      },
      {
        name: 'Transformation',
        price: 75,
        priceText: null,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 120,
        image: '/testimages/jpeg/customer2.jpg',
        category: 'Coupe'
      }
    ]
  },
  {
    name: "Shampoings • Mise en forme",
    globalDescription: "Le shampoing coiffage est un service de soins capillaires qui combine un nettoyage en profondeur avec une mise en forme professionnelle. Il comprend généralement un shampooing adapté à votre type de cheveux, suivi d'un conditionnement pour nourrir et protéger les cheveux, et se termine par un coiffage personnalisé pour mettre en valeur votre style et votre personnalité.",
    includes: [
      "Diagnostic / Conseils",
      "Shampooing conditionner",
      "Séchage (naturel ou brushing)"
    ],
    services: [
      {
        name: 'Court',
        price: 32,
        priceText: null,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 45,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Coupe'
      },
      {
        name: 'Mi-Long',
        price: 42,
        priceText: null,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 60,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Coupe'
      },
      {
        name: 'Long',
        price: 52,
        priceText: null,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 90,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Coupe'
      },
      {
        name: 'XL',
        price: 62,
        priceText: null,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 120,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Coupe'
      }
    ]
  },
  {
    name: "Coupe seule",
    globalDescription: "Le shampoing coiffage est un service de soins capillaires qui combine un nettoyage en profondeur avec une mise en forme professionnelle. Il comprend généralement un shampooing adapté à votre type de cheveux, suivi d'un conditionnement pour nourrir et protéger les cheveux, et se termine par un coiffage personnalisé pour mettre en valeur votre style et votre personnalité.",
    includes: [
      "Diagnostic / Conseils",
      "Shampooing conditionner",
      "Séchage (naturel ou brushing)"
    ],
    services: [
      {
        name: null,
        price: null,
        priceText: "25 à 45€",
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: null,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Coupe'
      }
    ]
  },
  {
    name: 'Soins Olaplex',
    globalDescription: "Olaplex est un traitement capillaire révolutionnaire qui répare les cheveux endommagés en reconstruisant les liaisons disulfures brisées. Il est idéal pour les cheveux fragilisés par les traitements chimiques, la chaleur ou les agressions environnementales, offrant une restauration profonde et durable pour des cheveux plus forts, plus sains et plus brillants.",
    includes: [
      "Soin réparateur profond / Anti-casse",
    ],
    services: [
      {
        name: 'Court',
        price: 35,
        priceText: null,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 60,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Soin'
      },
      {
        name: 'Mi-long',
        price: 45,
        priceText: null,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 60,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Soin'

      },
      {
        name: 'Long',
        price: 55,
        priceText: null,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 60,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Soin'
      },
      {
        name: 'XL',
        price: 65,
        priceText: null,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 60,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Soin'
      }
    ]
  },
  {
    name: 'Soins Kératine Végétale / Botox Naturel',
    globalDescription: "Le soin à la kératine végétale est un traitement capillaire naturel qui utilise des ingrédients d'origine végétale pour lisser, nourrir et renforcer les cheveux. Contrairement aux traitements à la kératine traditionnels qui contiennent souvent des produits chimiques agressifs, ce soin offre une alternative plus douce et respectueuse de la santé capillaire, tout en offrant des résultats durables pour des cheveux plus lisses, plus brillants et plus faciles à coiffer.",
    includes: [
      "Soin réparateur profond / Anti-casse",
    ],
    services: [
      {
        name: 'Court',
        price: 75,
        priceText: null,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 30,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Soin'
      },
      {
        name: 'Mi-long',
        price: 85,
        priceText: null,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 50,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Soin'
      },
      {
        name: 'Long',
        price: 95,
        priceText: null,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 70,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Soin'
      },
      {
        name: 'XL',
        price: 105,
        priceText: null,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 90,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Soin'
      }
    ]
  },
  {
    name: 'Couleurs',
    globalDescription: "La coloration capillaire est un processus de transformation qui permet de changer la couleur naturelle des cheveux en utilisant des produits chimiques ou naturels. Que vous souhaitiez couvrir des cheveux gris, ajouter des reflets, ou opter pour une teinte complètement différente, la coloration offre une multitude d'options pour exprimer votre style et votre personnalité à travers vos cheveux.",
    includes: [
      "Soin réparateur profond / Anti-casse",
    ],
    services: [
      {
        name: 'Court',
        price: 75,
        priceText: null,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 30,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Coloration'
      },
      {
        name: 'Mi-long',
        price: 85,
        priceText: null,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 50,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Coloration'
      },
      {
        name: 'Long',
        price: 95,
        priceText: null,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 70,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Coloration'
      },
      {
        name: 'XL',
        price: 105,
        priceText: null,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 90,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Coloration'
      }
    ]
  },
  {
    name: 'Hair Contouring',
    globalDescription: "Le hair contouring est une technique de coloration qui utilise des nuances et des reflets pour sculpter et mettre en valeur les traits du visage. Cette méthode permet de créer un effet de lumière et de profondeur personnalisé, tout en respectant la santé des cheveux grâce à des produits de qualité et des soins adaptés.",
    includes: [
      "Soin réparateur profond / Anti-casse",
    ],
    services: [
      {
        name: 'Court',
        price: 75,
        priceText: null,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 30,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Hair Contouring'
      },
      {
        name: 'Mi-long',
        price: 85,
        priceText: null,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 50,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Hair Contouring'
      },
      {
        name: 'Long',
        price: 95,
        priceText: null,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 70,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Hair Contouring'
      },
      {
        name: 'XL',
        price: 105,
        priceText: null,
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: 90,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Hair Contouring'
      }
    ]
  },
  {
    name: 'Tarifs enfants',
    globalDescription: "Le tarif enfant s'applique généralement aux enfants de moins de 12 ans, offrant des prix réduits pour les coupes et les soins adaptés à leurs besoins spécifiques. Ces tarifs permettent aux parents de faire profiter à leurs enfants de services de qualité tout en respectant leur budget, avec des prestations conçues pour les cheveux délicats des plus jeunes.",
    includes: [
      "Diagnostic / Conseils",
      "Shampooing conditionner",
      "Séchage (naturel ou brushing)"
    ],
    services: [
      {
        name: null,
        price: null,
        priceText: "15 à 25€",
        gender: 'Mixte',
        description: null,
        includes: [],
        duration: null,
        image: '/testimages/jpeg/customer15.jpg',
        category: 'Coupe'
      }
    ]
  }
]

export function useServices() {
  const services = ref<ServiceSection[]>(defaultServices)

  return {
    services
  }
}
