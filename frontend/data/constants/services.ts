export type ServiceNames = 'Coupes'

export interface Service {
  name: string
  price: number
  description: string
  content: string[]
  duration?: number
}

export interface ServiceSection {
  name: ServiceNames
  services: Service[]
}

export const defaultServices: ServiceSection[] = [
  {
    name: 'Coupes',
    services: [
      {
        name: 'Coupes',
        price: 120,
        description: "Rafraîchissez votre coupe et donnez-lui un coup de fraîcheur avec la restructuration, qui vous apportera forme et volume en quelques coups de ciseaux ! La coupe sur cheveux secs permet de rééquilibrer les volumes, la longueur et le style de la coupe (faire une frange, couper les pointes…)",
        content: [
          "Diagnostic / Conseils",
          "Coupe sur cheveux secs",
          "Routine sur - mesure au bac et son soin profond + massage", 
          "Coiffage(brushing ou séchage naturel)"
        ],
        duration: 60
      }
    ]
  }
]
