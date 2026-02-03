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
    illustration: '/testimages/jpeg/customer18.jpg'
  },
  {
    name: 'Court',
    gender: 'Femme',
    price: 35,
    description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
    includes: serviceIncludes,
    duration: 60,
    illustration: '/testimages/jpeg/customer17.jpg'
  },
  {
    name: 'Mi-long',
    gender: 'Femme',
    price: 45,
    description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
    includes: serviceIncludes,
    duration: 60,
    illustration: '/testimages/jpeg/customer16.jpg'
  },
  {
    name: 'Long',
    gender: 'Femme',
    price: 55,
    description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
    includes: serviceIncludes,
    duration: 60,
    illustration: '/testimages/jpeg/customer15.jpg'
  },
  {
    name: 'XL',
    gender: 'Femme',
    price: 65,
    description: "Un soin profond pour revitaliser et renforcer vos cheveux.",
    includes: serviceIncludes,
    duration: 60,
    illustration: '/testimages/jpeg/customer14.jpg'
  }
]

export const serviceSectionFixtures: Arrayable<ServiceSection> = [
  {
    name: 'Shampoings coupes coiffage',
    includes: serviceIncludes,
    services: servicesFixtures
  },
  {
    name: 'Soins et traitements',
    includes: serviceIncludes,
    services: servicesFixtures
  }
]
