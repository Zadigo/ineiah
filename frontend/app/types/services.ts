import type { Nullable } from "."

export type ServiceNames = 'Shampoings coupes coiffage' | 'Soins et traitements' | 'Soins Olaplex' | 'Soins Kératine Végétale / Botox Naturel' | 'Balayage / Mèches' | 'Couleurs'

export type ServiceCategory = 'Coupe'

export interface Service {
  /**
   * Name of the service
   */
  name: Nullable<string>
  /**
   * Gender
   */
  gender: 'Femme' | 'Homme' | 'Mixte'
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
  /**
   * Illustration image URL for the service
   */
  illustration?: string
  image: string
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
