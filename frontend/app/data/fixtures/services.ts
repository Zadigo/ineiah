import type { Arrayable, Service, ServiceSection } from '~/types'

const serviceIncludes = [
  'Diagnostic / Conseils',
  'Coupe sur cheveux secs',
  'Routine sur - mesure au bac et son soin profond + massage',
  'Coiffage(brushing ou séchage naturel)'
]

export const servicesFixtures: Arrayable<Service> = [
  {
    name: 'Très court',
    gender: 'Femme',
    price: 25,
    description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
    includes: serviceIncludes,
    duration: 60,
    illustration: '/testimages/jpeg/customer18.jpg',
    category: 'Coloration',
    image: '/testimages/jpeg/customer18.jpg',
    priceText: '25€'
  },
  {
    name: 'Court',
    gender: 'Femme',
    price: 35,
    description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
    includes: serviceIncludes,
    duration: 60,
    illustration: '/testimages/jpeg/customer17.jpg',
    category: 'Coloration',
    image: '/testimages/jpeg/customer18.jpg',
    priceText: '25€'
  },
  {
    name: 'Mi-long',
    gender: 'Femme',
    price: 45,
    description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
    includes: serviceIncludes,
    duration: 60,
    illustration: '/testimages/jpeg/customer16.jpg',
    category: 'Coloration',
    image: '/testimages/jpeg/customer18.jpg',
    priceText: '25€'
  },
  {
    name: 'Long',
    gender: 'Femme',
    price: 55,
    description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
    includes: serviceIncludes,
    duration: 60,
    illustration: '/testimages/jpeg/customer15.jpg',
    category: 'Coloration',
    image: '/testimages/jpeg/customer18.jpg',
    priceText: '25€'
  },
  {
    name: 'XL',
    gender: 'Femme',
    price: 65,
    description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
    includes: serviceIncludes,
    duration: 60,
    illustration: '/testimages/jpeg/customer14.jpg',
    category: 'Coloration',
    image: '/testimages/jpeg/customer18.jpg',
    priceText: '25€'
  }
]

export const serviceSectionFixtures: Arrayable<ServiceSection> = [
  {
    name: 'Shampoings • Coupes • Mise en forme',
    globalDescription: "Découvrez nos prestations de coiffure et de soins capillaires, adaptées à vos besoins et à vos envies.",
    includes: serviceIncludes,
    services: servicesFixtures
  },
  {
    name: 'Shampoings • Coupes • Mise en forme',
    globalDescription: "Découvrez nos prestations de coiffure et de soins capillaires, adaptées à vos besoins et à vos envies.",
    includes: serviceIncludes,
    services: servicesFixtures
  }
]
